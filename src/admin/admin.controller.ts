import { Body, Controller, Post,Get, UseGuards } from '@nestjs/common';
import { AdminService } from './admin.service';
import { CityDto } from '../city/city.dto';
import { City } from 'src/city/city.model';
import { AuthGuard } from '@nestjs/passport';
import { ApiTags } from '@nestjs/swagger';

@Controller('admin')
@ApiTags("Admin")
export class AdminController {
constructor(private readonly adminservice:AdminService) {}


    @Get()
    @UseGuards(AuthGuard('local'))
    getdata():string {
        return "this is private data of admin";
     }

    @Get("/cities")
    async findAll(): Promise<City[]> {
        return this.adminservice.findAll();
    }

    @Post("/cities")
    async create(@Body() cityDto: CityDto) {
        const val = await this.adminservice.create(cityDto);
        return val;
    }


}
