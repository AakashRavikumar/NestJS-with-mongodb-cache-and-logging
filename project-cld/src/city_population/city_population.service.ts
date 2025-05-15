/* eslint-disable no-useless-catch */
import { Injectable, Inject } from '@nestjs/common';
import { CreateCityPopulationDto } from './dto/create-city_population.dto';
import { UpdateCityPopulationDto } from './dto/update-city_population.dto';
import {
  CityPopulation,
  CityDocument,
} from './entities/city_population.entity';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Cache } from 'cache-manager';
import { CACHE_MANAGER } from '@nestjs/cache-manager';

@Injectable()
export class CityPopulationService {
  constructor(
    @InjectModel(CityPopulation.name) private cityModel: Model<CityDocument>,
    @Inject(CACHE_MANAGER) private cacheManager: Cache,
  ) {}
  async create(Body: CreateCityPopulationDto) {
    try {
      const result = await this.cityModel.create(Body);
      // Clear cache for 'Cities'
      await this.cacheManager.del('Cities');
      return result;
    } catch (err) {
      if (err.code == 11000) return { message: 'Duplicate City!' };
      return { message: 'Internal Server Error!' };
    }
  }

  findAll() {
    try {
      return this.cityModel.find().exec();
    } catch (err) {
      return { message: 'Internal Server Error!' };
    }
  }
}
