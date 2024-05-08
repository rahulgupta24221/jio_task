import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose, { HydratedDocument } from 'mongoose';
import { User } from 'src/user/schema/user.model';


export type TaskDocument = HydratedDocument<Task>;

@Schema({timestamps: true})
export class Task {

  @Prop({required: true})
  title: string;

  @Prop()
  description: string;

  @Prop()
  dueDate: Date;

  @Prop()
  status: TaskStatus;

  @Prop({type: {type: mongoose.Schema.Types.ObjectId, ref:'User'}})
  assignedTo: User;

  @Prop()
  createdAt?: Date;

  @Prop()
  updatedAt?: Date;

}
export enum TaskStatus {
    OPEN = 'OPEN',
    IN_PROGRESS = 'IN_PROGRESS',
    DONE = 'DONE',
  }



export const taskschema = SchemaFactory.createForClass(Task);


