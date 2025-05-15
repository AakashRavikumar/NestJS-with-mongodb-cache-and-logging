import { Module } from '@nestjs/common';
import { CityPopulationService } from './city_population.service';
import { CityPopulationController } from './city_population.controller';
import { CityPopulation, CitySchema } from './entities/city_population.entity';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: CityPopulation.name, schema: CitySchema },
    ]),
  ],
  controllers: [CityPopulationController],
  providers: [CityPopulationService],
})
export class CityPopulationModule {}
