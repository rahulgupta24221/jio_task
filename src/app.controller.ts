import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

import axios from 'axios';

import { Query } from '@nestjs/common';
import { CityService } from './city/city.service';
import { CityDto } from './city/dto/city.dto';
import { City } from './city/schemas/city.schema';

import { Body } from '@nestjs/common';
import { Post, Delete, Param } from '@nestjs/common';

import { ConfigService } from '@nestjs/config';
import { ApiTags } from '@nestjs/swagger';


@Controller()
@ApiTags('User')
export class AppController {
  constructor(private readonly appService: AppService, 
          private readonly cityService: CityService,
          private readonly configService: ConfigService) 
  {
    //const dto = new CityDto();
    //dto.name = "Mumbai";
    //cityService.create(dto);
    console.log(`API KEY is ${this.configService.get<string>('API_KEY')}`);
  }

  async getCityTemperature(city: string): Promise<string>{
    const api_key = this.configService.get<string>('API_KEY');
    let final_response = "";
    await axios.get(`http://api.weatherapi.com/v1/current.json?key=${api_key}&q=${city}&aqi=no`)
      .then(function (response) {
        final_response = response.data;
    });
    return final_response;
  }

  @Get()
  async getTemperature(@Query('city') city: string): Promise<any> {
    console.log("Input city = " + city);
    const cities = await this.cityService.findAll();
    //console.log("Existing DB cities are ")
    //console.log(cities);


    if (city){
      return [ await this.getCityTemperature(city)];
    }
    else{
      let result = [];
      for(let i=0; i<cities.length; i++){
       // console.log(cities[i].name);
        result.push(await this.getCityTemperature(cities[i].name));
      }
      return result;
    }

  }

  @Get("/cities")
  async findAll(): Promise<City[]> {
    return this.cityService.findAll();
  }

  @Post("/cities")
  async create(@Body() cityDto : CityDto) {
    await this.cityService.create(cityDto);
  }

  @Delete('/cities/:id')
  async delete(@Param('id') id: string) {
    return this.cityService.delete(id);
  }

}
