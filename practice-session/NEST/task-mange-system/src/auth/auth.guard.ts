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
    const authHeader = request.headers['authorization'];

    if (!authHeader || !authHeader.startsWith('Basic ')) {
      throw new UnauthorizedException('Authorization header missing or not in Basic format');
    }
     //  decodes these credentials from base64 into a string.
    const base64Credentials = authHeader.split(' ')[1];
    const credentials = Buffer.from(base64Credentials, 'base64').toString('utf-8');
    // decoded credentials are split into username and password based on the colon (':') 
    const [username, password] = credentials.split(':');
    return this.authService.getadminbyname(username, password)
      .then(result => {
        if (result) {
          return true;
        } else {
          return false;
        }
      });
  }
  
}