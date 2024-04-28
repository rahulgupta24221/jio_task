import { Module } from '@nestjs/common';
// import { AppController } from './app.controller';
// import { AppService } from './app.service';
import { UserModule } from './user/user.module';
import { CityModule } from './city/city.module';
import { AdminModule } from './admin/admin.module';
import { MongooseModule } from '@nestjs/mongoose';
//import { City, CitySchema } from './city/city.model';
import { ConfigModule } from '@nestjs/config';
// import { AuthModule } from '../practice-part/auth/auth.module';
//import { AppController } from './app.controller';
import { AppController } from './app.controller';
import { City, CitySchema } from './city/city.model';

@Module({
  imports: [MongooseModule.forRoot('mongodb+srv://rajmani26022001:Gupta%4024221@rahul.mankzhe.mongodb.net/mydb'),
  MongooseModule.forFeature([{ name: City.name, schema: CitySchema }]),
  ConfigModule.forRoot(),
    UserModule, CityModule, AdminModule,],
  controllers: [AppController],
  providers: [],
})
export class AppModule { }