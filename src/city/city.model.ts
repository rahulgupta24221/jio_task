import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

//export type CityDocument = HydratedDocument<City>;


@Schema()
export class City {
    @Prop()
    name: string;

    constructor(name: string) {
        this.name = name;
    }
}
//export interface CityDocument extends City, Document { }

export const CitySchema = SchemaFactory.createForClass(City);