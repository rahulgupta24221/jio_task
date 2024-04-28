import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { City } from 'src/city/city.model';

@Injectable()
export class UserService {

    constructor(@InjectModel(City.name) private readonly cityModel: Model<City>) { }

    async findAll(): Promise<City[]> {
        return this.cityModel.find().exec();
    }
/// return city[] = await.cityModel.findAll();
    
}
