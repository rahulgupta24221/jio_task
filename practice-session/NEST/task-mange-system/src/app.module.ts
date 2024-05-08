import { Module } from '@nestjs/common';
import { TaskModule } from './task/task.module';
import { UserController } from './user/user.controller';
import { UserService } from './user/user.service';
import { UserModule } from './user/user.module';
import { MongooseModule } from '@nestjs/mongoose';
import { ConfigModule } from '@nestjs/config';
import { User, UserSchema } from './user/schema/user.model';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [TaskModule, UserModule,AuthModule,
    MongooseModule.forRoot('mongodb+srv://rajmani26022001:Gupta%4024221@rahul.mankzhe.mongodb.net/Task'),
    MongooseModule.forFeature([{ name: User.name, schema: UserSchema }]),
    ConfigModule.forRoot(),
  ],
  controllers: [ UserController],
  providers: [UserService ]
})
export class AppModule {}
