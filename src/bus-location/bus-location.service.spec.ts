import { Test, TestingModule } from '@nestjs/testing';
import { BusLocationService } from './bus-location.service';

describe('BusLocationService', () => {
  let service: BusLocationService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [BusLocationService],
    }).compile();

    service = module.get<BusLocationService>(BusLocationService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
