import { Schema, Prop, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type CityDocument = CityPopulation & Document;

@Schema({ collection: 'cities', timestamps: true })
// @Index({ country: 1, population: -1 })
export class CityPopulation {
  @Prop({ required: true, unique: true })
  name: string;

  @Prop({ required: true })
  state: string;

  @Prop({ required: true })
  country: string;

  @Prop({ required: false, default: 0, min: 0 })
  population: number;

  @Prop({ type: Date, default: () => new Date() })
  censusDate: Date;
}

export const CitySchema = SchemaFactory.createForClass(CityPopulation);
