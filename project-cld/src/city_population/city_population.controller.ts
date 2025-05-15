import { Controller, Get, Post, Body, UseInterceptors } from '@nestjs/common';
import { CityPopulationService } from './city_population.service';
import { CreateCityPopulationDto } from './dto/create-city_population.dto';
import { CacheInterceptor, CacheKey, CacheTTL } from '@nestjs/cache-manager';

@Controller('city-population')
@UseInterceptors(CacheInterceptor) // cache all get routes
export class CityPopulationController {
  constructor(private readonly cityPopulationService: CityPopulationService) {}

  @Post()
  create(@Body() Body: CreateCityPopulationDto) {
    return this.cityPopulationService.create(Body);
  }

  @Get()
  @CacheKey('Cities')
  // @CacheTTL(60 * 1000)
  findAll() {
    return this.cityPopulationService.findAll();
  }
}
