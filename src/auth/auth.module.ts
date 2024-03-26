import { Module } from '@nestjs/common';
//import { AuthController } from './auth.controller';
//import { AuthService } from './auth.service';
import { passportLocalStrategy } from './auth.local.stratagy';
import { AdminModule } from 'src/admin/admin.module';
import { AuthService } from './auth.service';

@Module({
  imports:[AdminModule],
  controllers: [],
  providers: [ passportLocalStrategy, AuthService]
})
export class AuthModule {}
