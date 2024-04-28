import { Module } from '@nestjs/common';
import { BookService } from './book.service';
import { BookController } from './book.controller';
import { MongooseModule, Schema } from '@nestjs/mongoose';
import { book, bookschema } from './schema/book';

@Module({
  imports:[MongooseModule.forFeature([{name:book.name, schema : bookschema}])],
  controllers: [BookController],
  providers: [BookService],
})
export class BookModule {}
