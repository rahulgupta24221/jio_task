import { Module } from '@nestjs/common';
import { UserController } from './user.controller';
import { UserService } from './user.service';
import { ConfigModule } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';
import { City, CitySchema } from 'src/city/city.model';

@Module({
  imports: [ConfigModule.forRoot(), MongooseModule.forFeature([{ name: City.name, schema: CitySchema }])],
  controllers: [UserController],
  providers: [UserService]
})
export class UserModule {}
