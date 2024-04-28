import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ConfigService } from '@nestjs/config';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import process from 'process';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
// make a swagger UI
  const config = new DocumentBuilder()
    .setTitle('Weather Api')
    .setDescription('The cities temprature')
    .setVersion('1.0')
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);

  await app.listen(3001);
  
}


bootstrap();


