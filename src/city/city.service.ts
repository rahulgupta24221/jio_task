import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { City } from './schemas/city.schema';
import { CityDto } from './dto/city.dto';

@Injectable()
export class CityService {
  constructor(@InjectModel(City.name) private readonly cityModel: Model<City>) {}

  async create(cityDto: CityDto): Promise<City> {
    const city = await this.cityModel.create(cityDto);
    return city;
  }

  async findAll(): Promise<City[]> {
    return this.cityModel.find().exec();
  }

  // async findOne(id: string): Promise<City> {
  //   return this.cityModel.findOne({ _id: id }).exec();
  // }


  async delete(id: string) {
    const del = await this.cityModel
      .findByIdAndDelete({ _id: id })
      .exec();
    return del;
  }

}
