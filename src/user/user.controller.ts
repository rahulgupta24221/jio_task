import { Controller ,Get} from '@nestjs/common';
import { UserService } from './user.service';
import { Query } from '@nestjs/common';
import axios from 'axios';
import { ConfigService } from '@nestjs/config';
import { City } from 'src/city/city.model';
import { ApiTags } from '@nestjs/swagger';

@Controller('user')
@ApiTags("User")
export class UserController {
  constructor(private readonly uesrserice:UserService,
    private readonly configService: ConfigService){}


    async getCityTemperature(city: string): Promise<string> {
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
      //console.log("Input city = " + city);
      const cities = await this.uesrserice.findAll();

    
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
