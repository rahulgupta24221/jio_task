import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import mongoose, { Model } from 'mongoose';
import { UpdateUserDto } from './dto/user.update.dto';
import { User } from './schema/user.model'
import { LoginUserDto } from './dto/userlogin.dto';
import { SignupUserDto } from './dto/signup.dto';
import { BcryptService } from './bcrypt/bcrypt.service';

@Injectable()
export class UserService {
  constructor(
    @InjectModel(User.name) private readonly userModel: Model<User>,
    private bcryptService: BcryptService,
  ) { }

  
  async validateUser(loginUserDto: LoginUserDto) {
    const user = await User.findOne(loginUserDto.username);
    if (!user) {
      throw { message: 'User not found', statusCode: 404 }; // User not found
    }

    const passwordMatch = await this.bcryptService.comparePassword(
      loginUserDto.password,
      user.password,
    );
    if (passwordMatch) {
      return { message: 'Authentication successful', statusCode: 200 }; // Authentication successful
    } else {
      throw { message: 'Incorrect password', statusCode: 401 }; // Password does not match
    }
  }

  async login(loginUserDto: LoginUserDto) {
    try {
      const userexists =await this.validateUser(loginUserDto);
      if(!userexists)
        return "user is not found";
      else
        return " Login sucessfully"
      
    } catch (error) {
      throw { message: error.message, statusCode: error.statusCode };
    }
  }

  async signup(signupUserDto: SignupUserDto) {
    const createdUser = new this.userModel({
      _id: new mongoose.Types.ObjectId(),
      name:signupUserDto.name,
      username: signupUserDto.username,
      email: signupUserDto.email,
      password: await this.bcryptService.hashingPassword(
        signupUserDto.password,
      ),

    });
   const newuser= createdUser.save();
   return newuser;
}





  async getById(id: string) {
    try {
      const user = await this.userModel.findById(id);
      if (!user) {
        throw new Error('User not found');
      }
      return user;
    } catch (error) {
      console.error(error);
      throw error;
    }
  }

  async findOne(username: string) {
    return await this.userModel.findOne({ username });
  }


  async update(id: string, updateUserDto: UpdateUserDto) {
    await this.userModel.updateOne(
      {
         id,
      },
      {
        name: updateUserDto.Name
      }
    );

    const updatedUser = await this.getById(id);
    return updatedUser.name;
  }

  async delete(id: string) {
    return await this.userModel.deleteOne({ id });
  }
}