import { Strategy } from 'passport-local';
import { AuthService } from './auth.service';
declare const passportLocalStrategy_base: new (...args: any[]) => Strategy;
export declare class passportLocalStrategy extends passportLocalStrategy_base {
    private authService;
    constructor(authService: AuthService);
    validate(username: string, password: string): Promise<any>;
}
export {};
