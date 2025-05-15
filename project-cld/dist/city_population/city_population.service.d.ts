import { CreateCityPopulationDto } from './dto/create-city_population.dto';
import { CityPopulation, CityDocument } from './entities/city_population.entity';
import { Model } from 'mongoose';
import { Cache } from 'cache-manager';
import { Logger } from 'nestjs-pino';
export declare class CityPopulationService {
    private cityModel;
    private cacheManager;
    private readonly logger;
    constructor(cityModel: Model<CityDocument>, cacheManager: Cache, logger: Logger);
    create(Body: CreateCityPopulationDto): Promise<(import("mongoose").Document<unknown, {}, CityDocument, {}> & CityPopulation & import("mongoose").Document<unknown, any, any, Record<string, any>> & Required<{
        _id: unknown;
    }> & {
        __v: number;
    }) | {
        message: string;
    }>;
    findAll(): Promise<(import("mongoose").Document<unknown, {}, CityDocument, {}> & CityPopulation & import("mongoose").Document<unknown, any, any, Record<string, any>> & Required<{
        _id: unknown;
    }> & {
        __v: number;
    })[]> | {
        message: string;
    };
}
