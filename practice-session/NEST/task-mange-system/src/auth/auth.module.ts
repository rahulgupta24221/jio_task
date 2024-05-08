import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import {  MyAuthGuard } from './auth.guard';

@Module({
  imports:[],
  controllers: [],
  providers: [MyAuthGuard,AuthService],
  exports: [MyAuthGuard,AuthService],
})
export class AuthModule {}
