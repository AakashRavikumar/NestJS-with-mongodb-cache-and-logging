import { CityPopulationService } from './city_population.service';
import { CreateCityPopulationDto } from './dto/create-city_population.dto';
export declare class CityPopulationController {
    private readonly cityPopulationService;
    constructor(cityPopulationService: CityPopulationService);
    create(Body: CreateCityPopulationDto): Promise<(import("mongoose").Document<unknown, {}, import("./entities/city_population.entity").CityDocument, {}> & import("./entities/city_population.entity").CityPopulation & import("mongoose").Document<unknown, any, any, Record<string, any>> & Required<{
        _id: unknown;
    }> & {
        __v: number;
    }) | {
        message: string;
    }>;
    findAll(): Promise<(import("mongoose").Document<unknown, {}, import("./entities/city_population.entity").CityDocument, {}> & import("./entities/city_population.entity").CityPopulation & import("mongoose").Document<unknown, any, any, Record<string, any>> & Required<{
        _id: unknown;
    }> & {
        __v: number;
    })[]> | {
        message: string;
    };
}
