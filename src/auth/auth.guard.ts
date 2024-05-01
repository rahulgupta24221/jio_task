// auth.guard.ts
import { CanActivate, ExecutionContext, Injectable, UnauthorizedException } from '@nestjs/common';
//import { AuthGuard } from '@nestjs/passport';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';


@Injectable()
export class MyAuthGuard implements CanActivate {

  constructor(private authService: AuthService) {}
   // It receives the context parameter, which provides information about the execution context of the incoming request.
  canActivate(context: ExecutionContext): boolean | Promise<boolean> | Observable<boolean> {
    const request = context.switchToHttp().getRequest();//retrieves the HTTP request object from the execution context.
    const username = request.body.username;
    const password = request.body.password;
    if (this.authService.getadminbyname(username, password)) return true;
    return false;
  }
  
}