import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards, UseInterceptors, Req, Res } from '@nestjs/common';
import { BookService } from './book.service';
import { CreateBookDto } from './dto/create-book.dto';
import { UpdateBookDto } from './dto/update-book.dto';
import { bookgurad } from './book.gurad';

@Controller('book')
@UseGuards(bookgurad)
export class BookController {
  constructor(private readonly bookService: BookService) {}

  @Post('/addbook')
  create(@Body() createBookDto: CreateBookDto) {
    return this.bookService.create(createBookDto);
  }

  @Post('/intercept')
  makebook(@Req() req:Request,@Res() res:Response):any{
   // return res.json(req.body);
   console.log("hello interceptor");
  }

  @Get()
  //@UseGuards(new bookgurad())
  findAll() {
    return this.bookService.findAll();
  }

  @Get('/getbyid/:id')
  findOne(@Param('id') id: string) {
    return this.bookService.findOne(id);
  }

  @Patch('/update/:id')
  update(@Param('id') id: string, @Body() updateBookDto: UpdateBookDto) {
    return this.bookService.update(id, updateBookDto);
  }

  @Delete('/delete/:id')
  remove(@Param('id') id: string) {
    return this.bookService.remove(id);
  }
}
