import { CanActivate, ExecutionContext } from "@nestjs/common";
import { Observable } from "rxjs";


export class bookgurad implements CanActivate{
    public username:string = "rahul";
    public password:string = "12345";

    canActivate(context: ExecutionContext): boolean  {
        const req = context.switchToHttp().getRequest();

        if(req.header('username')== undefined || req.header('password')==undefined)
            return false;

        let correct = req.header('username')==this.username && req.header('password')==this.password;

        if(!correct)
            return false;

        return true;
    }
    
}