import { Body, Controller, Post,Get, UseGuards } from '@nestjs/common';
import { AdminService } from './admin.service';
import { CityDto } from '../city/city.dto';
import { City } from 'src/city/city.model';
//import { AuthGuard } from '@nestjs/passport';
import { ApiBody, ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { AuthGuard } from '@nestjs/passport';

@Controller('admin')
@ApiTags("Admin")
export class AdminController {
constructor(private readonly adminservice:AdminService) {}



    @Get("/cities")
    @ApiOperation({summary:'Get all data from this api'})
    @ApiResponse({
        status:200,
        description:'All data list'
    })
    @ApiResponse({
        status: 404,
        description: 'Not found'
    }) 
    async findAll(): Promise<City[]> {
        return this.adminservice.findAll();
    }

    @Post("/cities")
    @ApiOperation({summary:'add a city'})
    @ApiBody({
        schema: {
            type:'object',
            properties: {
                name:{
                    type:'string',
                    example:'nagpur',
                    description:'this is the city'
                }
            }
            
        }
    })
    @ApiResponse({
        status: 200,
        description: 'All data list'
    })
    @ApiResponse({
        status: 404,
        description: 'Not found'
    }) 
    @UseGuards(AuthGuard('basic'))
    async create(@Body() cityDto: CityDto) {
        const val = await this.adminservice.create(cityDto);
        return val;
    }


}
