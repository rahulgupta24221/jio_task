import { Injectable } from '@nestjs/common';
import { CreateBookDto } from './dto/create-book.dto';
import { UpdateBookDto } from './dto/update-book.dto';
import { book, bookdocument } from './schema/book';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';

@Injectable()
export class BookService {

  constructor(@InjectModel(book.name) private bookmodel: Model<bookdocument>) { }


  async create(createBookDto: CreateBookDto): Promise<book> {
    const createdBook = new this.bookmodel(createBookDto);
    const newBook = await createdBook.save();
    console.log(newBook.author); // This should print the author
    return newBook;

  }

  findAll(): Promise<book[]> {
    return this.bookmodel.find().exec();
  }

  findOne(id: string): Promise<book> {
    return this.bookmodel.findById(id);
  }

  update(id: string, updateBookDto: UpdateBookDto) {
    let title = updateBookDto.title
    let author = updateBookDto.author
    let published = updateBookDto.published

    return this.bookmodel.findByIdAndUpdate(id, { title, author, published }).exec();
  }

  remove(id: string) {
    return this.bookmodel.findByIdAndDelete(id).exec();
  }
}
