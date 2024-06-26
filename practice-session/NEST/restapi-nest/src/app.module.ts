import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';
import { BookModule } from './book/book.module';

@Module({
  imports: [ConfigModule.forRoot({
    isGlobal:true,
    envFilePath: '.env',
  }),
  MongooseModule.forRootAsync({
    imports:[ConfigModule],
    useFactory: (configservice:ConfigService)=>({uri:configservice.get("MONGO_URL")}),
    inject : [ConfigService]
  }),
  BookModule
],
  controllers: [],
  providers: [],
})
export class AppModule {}
