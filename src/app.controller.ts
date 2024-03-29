import { Controller, Get, Post, Req, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';

@Controller('app')
export class AppController {
    

    // @Post("/authen")
    // @UseGuards(AuthGuard('local'))
    //  async login(@Req() req){

    //     return req.user;
    // }


}
