import { UserService } from './user.service';
import { ConfigService } from '@nestjs/config';
export declare class UserController {
    private readonly uesrserice;
    private readonly configService;
    constructor(uesrserice: UserService, configService: ConfigService);
    getCityTemperature(city: string): Promise<string>;
    getTemperature(city: string): Promise<any>;
}
