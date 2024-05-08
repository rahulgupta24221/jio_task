import {
    Body,
    Controller,
    Delete,
    Get,
    Param,
    Post,
    Put,
    UseGuards,
  } from '@nestjs/common';
  import { TaskService } from './task.service';
  import { CreateTaskDto } from './dto/createtask.dto';
  import { UpdateTaskDto } from './dto/update.task.dto';
  import { ObjectId } from 'mongoose';
import { MyAuthGuard } from 'src/auth/auth.guard';
  
  @Controller('')
  @UseGuards(MyAuthGuard)
  export class TaskController {
    constructor(private readonly taskService: TaskService) {}
  
    //Task CRUD (Create, Read, Update, Delete) Operations
  
    @Get('/tasks')
    async getTasks() {
      return this.taskService.getAll();
    }
  
    @Get('/tasks/:id')
    async getTaskByID(@Param('id') id: string) {
      return this.taskService.getByID(id);
    }
  
    @Post('/addtask')
    async create(@Body() createTaskDto: CreateTaskDto) {
      return this.taskService.create(createTaskDto);
    }
  
    @Put('/updatetask/:id')
    async update(@Param('id') id: ObjectId , @Body() updateTaskDto: UpdateTaskDto) {
      return this.taskService.update(id,updateTaskDto);
    }
  
    @Delete('/deletetask/:id')
    async delete(@Param('id') id: ObjectId) {
      return this.taskService.delete(id);
    }
  }