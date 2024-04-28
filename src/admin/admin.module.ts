import { Module } from '@nestjs/common';
import { AdminController } from './admin.controller';
import { AdminService } from './admin.service';
import { MongooseModule } from '@nestjs/mongoose';
import { City, CitySchema } from 'src/city/city.model';
// import { AuthModule } from 'practice-part/auth/auth.module';
//import { AuthModule } from 'src/auth/auth.module';

@Module({
  imports: [MongooseModule.forFeature([{ name: City.name, schema: CitySchema }]),],
  controllers: [AdminController],
  providers: [AdminService],
  exports:[AdminService] // we can use in any other module 
})
export class AdminModule {}
