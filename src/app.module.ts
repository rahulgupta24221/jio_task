import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CityService } from './city/city.service';
import { MongooseModule } from '@nestjs/mongoose';
import { City } from './city/schemas/city.schema';
import { CitySchema } from './city/schemas/city.schema';

import { ConfigModule, ConfigService } from '@nestjs/config';

@Module({
  imports: [MongooseModule.forRoot('mongodb://localhost/nest'), 
      MongooseModule.forFeature([{ name: City.name, schema: CitySchema }]), 
      ConfigModule.forRoot()],
  controllers: [AppController],
  providers: [AppService, CityService, ConfigService],
})
export class AppModule {}
