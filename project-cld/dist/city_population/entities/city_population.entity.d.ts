import { Document } from 'mongoose';
export type CityDocument = CityPopulation & Document;
export declare class CityPopulation {
    name: string;
    state: string;
    country: string;
    population: number;
    censusDate: Date;
}
export declare const CitySchema: import("mongoose").Schema<CityPopulation, import("mongoose").Model<CityPopulation, any, any, any, Document<unknown, any, CityPopulation, any> & CityPopulation & {
    _id: import("mongoose").Types.ObjectId;
} & {
    __v: number;
}, any>, {}, {}, {}, {}, import("mongoose").DefaultSchemaOptions, CityPopulation, Document<unknown, {}, import("mongoose").FlatRecord<CityPopulation>, {}> & import("mongoose").FlatRecord<CityPopulation> & {
    _id: import("mongoose").Types.ObjectId;
} & {
    __v: number;
}>;
