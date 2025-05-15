import { Test, TestingModule } from '@nestjs/testing';
import { CityPopulationService } from './city_population.service';

describe('CityPopulationService', () => {
  let service: CityPopulationService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CityPopulationService],
    }).compile();

    service = module.get<CityPopulationService>(CityPopulationService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
