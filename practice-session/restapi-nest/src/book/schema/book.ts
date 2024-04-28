import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";


export type bookdocument = book & Document;



@Schema()
export class book{

    @Prop()
    title:string;

    @Prop()
    author:string

    @Prop()
    published:string


}

export const bookschema = SchemaFactory.createForClass(book);