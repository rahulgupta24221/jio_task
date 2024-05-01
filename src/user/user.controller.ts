import { Controller, Get } from '@nestjs/common';
import { UserService } from './user.service';
import { Query } from '@nestjs/common';
import axios from 'axios';
import { ConfigService } from '@nestjs/config';// it is use for access a dotenv
// import { City } from 'src/city/city.model';
import {ApiQuery, ApiTags } from '@nestjs/swagger';

@Controller('user')
@ApiTags("User")
export class UserController {
    constructor(private readonly uesrserice: UserService,
        private readonly configService: ConfigService) { }


    async getCityTemperature(city: string): Promise<string> {
        // access to dotenv
        const api_key = this.configService.get<string>('API_KEY');
        let final_response = "";
        await axios.get(`https://api.weatherapi.com/v1/current.json?key=${api_key}&q=${city}`)
            .then(function (response) {
                final_response = response.data;
            });
        return final_response;
    }

    @Get()
    @ApiQuery({ name: 'city', required: false, description: 'Name of the city to retrieve weather data for' })
    async getTemperature(@Query('city') city: string): Promise<any> {
        const cities = await this.uesrserice.findAll(); // it is showing all the city


        if (city) {
            return [await this.getCityTemperature(city)];
        }
        else {
            let result = [];
            for (let i = 0; i < cities.length; i++) {
                result.push(await this.getCityTemperature(cities[i].name));
            }
            return result;
        }

    }

}
