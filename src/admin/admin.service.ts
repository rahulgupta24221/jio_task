import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CityDto } from 'src/city/city.dto';
import { City } from 'src/city/city.model';
import { Admin } from './admin.entity';

@Injectable()
export class AdminService {
    constructor(@InjectModel(City.name) private readonly cityModel: Model<City>) { }

    async create(cityDto: CityDto): Promise<City> {
        const city = await this.cityModel.create(cityDto);// create a city in the databse
        return city;
    }

    async findAll(): Promise<City[]> {
        return this.cityModel.find().exec();// it will show all city in the databse
    }
}
