import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { User, UserSchema } from './schema/user.model';
import { UserController } from './user.controller';
import { UserService } from './user.service'
import { BcryptModule } from './bcrypt/bcrypt.module';
import { AuthModule } from 'src/auth/auth.module';

@Module({

    imports: [ AuthModule,
        MongooseModule.forFeature([{ name: User.name, schema: UserSchema }]),
        BcryptModule
      ],
      controllers: [UserController],
      providers: [UserService],
      exports:[UserService]
})
export class UserModule {}
