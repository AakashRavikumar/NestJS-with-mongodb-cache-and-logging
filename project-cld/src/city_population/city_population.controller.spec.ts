import { Test, TestingModule } from '@nestjs/testing';
import { CityPopulationController } from './city_population.controller';
import { CityPopulationService } from './city_population.service';

describe('CityPopulationController', () => {
  let controller: CityPopulationController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CityPopulationController],
      providers: [CityPopulationService],
    }).compile();

    controller = module.get<CityPopulationController>(CityPopulationController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
