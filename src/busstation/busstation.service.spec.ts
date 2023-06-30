import { Test, TestingModule } from '@nestjs/testing';
import { BusstationService } from './busstation.service';

describe('BusstationService', () => {
  let service: BusstationService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [BusstationService],
    }).compile();

    service = module.get<BusstationService>(BusstationService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
