import { Body, Controller, Post, Get, UseGuards, Req } from '@nestjs/common';
import { AdminService } from './admin.service';
import { CityDto } from '../city/city.dto';
import { City } from 'src/city/city.model';
//import { AuthGuard } from '@nestjs/passport';
import { ApiBasicAuth, ApiBody, ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { MyAuthGuard } from 'src/auth/auth.guard';

@Controller('admin')
@ApiTags("Admin")
export class AdminController {
    constructor(private readonly adminservice: AdminService) { }
    @Get("/cities")
    @ApiOperation({ summary: 'Get all cities' }) 
    @ApiResponse({ status: 200, description: 'List of cities retrieved successfully.' }) // Specify the response
    async findAll(): Promise<City[]> {
        return this.adminservice.findAll();
    }

    @Post("/cities")
    @UseGuards(MyAuthGuard)
    @ApiOperation({ summary: 'Create a new city' })
    @ApiBody({ type: CityDto })
    @ApiResponse({ status: 201, description: 'The city has been successfully created.' }) // Specify the response
    async create(@Body() cityDto: CityDto) {
        const val = await this.adminservice.create(cityDto);
        return val;
    }


}
