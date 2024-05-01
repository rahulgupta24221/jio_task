import { Module } from '@nestjs/common';
//import { AuthController } from './auth.controller';
//import { AuthService } from './auth.service';
// import { passportLocalStrategy } from './auth.local.stratagy';
import { AdminModule } from 'src/admin/admin.module';
import { AuthService } from './auth.service';
import { MyAuthGuard } from './auth.guard';

@Module({
  imports:[],
  controllers: [],
  providers: [MyAuthGuard,AuthService],
  exports: [MyAuthGuard,AuthService],
})
export class AuthModule {}
