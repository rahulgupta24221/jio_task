import {
    Body,
    Controller,
    Delete,
    Get,
    Param,
    Post,
    Put,
    UseGuards,
    ValidationPipe,
  } from '@nestjs/common';
  import {  ApiParam, ApiTags } from '@nestjs/swagger';
  import { UpdateUserDto } from './dto/user.update.dto';
  import { UserService } from './user.service';
import { SignupUserDto } from './dto/signup.dto';
import { User } from './schema/user.model';
import { LoginUserDto } from './dto/userlogin.dto';
import { MyAuthGuard } from 'src/auth/auth.guard';
  
  @ApiTags('user')
  @Controller('user')
  @UseGuards(MyAuthGuard)
  export class UserController {
    constructor(private readonly userService: UserService) {}

    @Post('/signup')
   // @UseGuards(MyAuthGuard)
    async signUp(@Body(ValidationPipe) SignupUserDto: SignupUserDto): Promise<User> {
      const user=  await this.userService.signup(SignupUserDto);
      return user;
    }
  
    @Post('/signin')
    signIn(
      @Body(ValidationPipe)
      LoginUserDto: LoginUserDto,
    ) {
      return this.userService.login(LoginUserDto);
    }
  
    // Get a user by id
    @ApiParam({ name: 'id', type: String })
    @Get('/user/:id')
    async getUser(@Param('id') id: string) {
      return this.userService.getById(id);
    }
  
    // Update a user by id
    @ApiParam({ name: 'id', type: String })
    @Put('/user/:id')
    async update(
      @Param('id') id: string,
      @Body() updateUserDto: UpdateUserDto,
    ) {
      return this.userService.update(id, updateUserDto);
    }
  
    // Delete a user by id
    @ApiParam({ name: 'id', type: String })
    @Delete('/user/:id')
    async delete(@Param('id') id: string) {
      return this.userService.delete(id);
    }
  }