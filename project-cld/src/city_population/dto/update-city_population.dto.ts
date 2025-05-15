import { PartialType } from '@nestjs/mapped-types';
import { CreateCityPopulationDto } from './create-city_population.dto';

export class UpdateCityPopulationDto extends PartialType(CreateCityPopulationDto) {}
