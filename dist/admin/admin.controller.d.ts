import { AdminService } from './admin.service';
import { CityDto } from '../city/city.dto';
import { City } from 'src/city/city.model';
export declare class AdminController {
    private readonly adminservice;
    constructor(adminservice: AdminService);
    findAll(): Promise<City[]>;
    create(cityDto: CityDto): Promise<City>;
}
