/// <reference types="mongoose/types/aggregate" />
/// <reference types="mongoose/types/callback" />
/// <reference types="mongoose/types/collection" />
/// <reference types="mongoose/types/connection" />
/// <reference types="mongoose/types/cursor" />
/// <reference types="mongoose/types/document" />
/// <reference types="mongoose/types/error" />
/// <reference types="mongoose/types/expressions" />
/// <reference types="mongoose/types/helpers" />
/// <reference types="mongoose/types/middlewares" />
/// <reference types="mongoose/types/indexes" />
/// <reference types="mongoose/types/models" />
/// <reference types="mongoose/types/mongooseoptions" />
/// <reference types="mongoose/types/pipelinestage" />
/// <reference types="mongoose/types/populate" />
/// <reference types="mongoose/types/query" />
/// <reference types="mongoose/types/schemaoptions" />
/// <reference types="mongoose/types/schematypes" />
/// <reference types="mongoose/types/session" />
/// <reference types="mongoose/types/types" />
/// <reference types="mongoose/types/utility" />
/// <reference types="mongoose/types/validation" />
/// <reference types="mongoose/types/virtuals" />
/// <reference types="mongoose" />
/// <reference types="mongoose/types/inferschematype" />
import { AppService } from './app.service';
import { CityService } from './city/city.service';
import { CityDto } from './city/dto/city.dto';
import { City } from './city/schemas/city.schema';
import { ConfigService } from '@nestjs/config';
export declare class AppController {
    private readonly appService;
    private readonly cityService;
    private readonly configService;
    constructor(appService: AppService, cityService: CityService, configService: ConfigService);
    getCityTemperature(city: string): Promise<string>;
    getTemperature(city: string): Promise<any>;
    findAll(): Promise<City[]>;
    create(cityDto: CityDto): Promise<void>;
    delete(id: string): Promise<import("mongoose").Document<unknown, {}, City> & City & {
        _id: import("mongoose").Types.ObjectId;
    }>;
}
