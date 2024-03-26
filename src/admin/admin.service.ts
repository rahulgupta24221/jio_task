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
        const city = await this.cityModel.create(cityDto);
        return city;
    }

    async findAll(): Promise<City[]> {
        return this.cityModel.find().exec();
    }

    public Admins : Admin[] = [
        {
        name:"admin1",
        password:"user1"
       },
        {
            name: "admin2",
            password: "user2"
        }
    ];
   // it is object method
    getadminbyname(adminname:string):Admin{
        return this.Admins.find((admin:Admin)=>admin.name == adminname);

    }
}
