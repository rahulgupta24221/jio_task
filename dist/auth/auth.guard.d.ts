declare const AuthGuardBasic_base: import("@nestjs/passport").Type<import("@nestjs/passport").IAuthGuard>;
export declare class AuthGuardBasic extends AuthGuardBasic_base {
    handleRequest(err: any, user: any, info: any): any;
}
export {};
