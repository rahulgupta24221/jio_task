import { IsEnum } from 'class-validator';
import { TaskStatus } from '../schema/task.model';

export class UpdateTaskStatusDto {
  @IsEnum(TaskStatus)
  status: TaskStatus;
}