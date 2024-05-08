import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { IsString } from 'class-validator';
import mongoose, { Document } from 'mongoose';

export type UserDocument = Document & User;

@Schema()
export class User {

  @Prop({ required: true })
  @IsString()
  name:string

  @Prop({ required: true, unique: true, lowercase:true })
  @IsString()
  username: string;

  @Prop({ required: true,unique:true })
  @IsString()
  email: string;

  @Prop({ required: true })
  @IsString()
  password: string;

  task:[{
    type:mongoose.Types.ObjectId,// it is generating a new objectOID for new user;
    ref:"task",
    required:true
}]
  static findOne: any;
}

export const UserSchema = SchemaFactory.createForClass(User);