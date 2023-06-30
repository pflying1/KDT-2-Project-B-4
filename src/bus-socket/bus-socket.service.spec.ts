import { Test, TestingModule } from '@nestjs/testing';
import { BusSocketService } from './bus-socket.service';

describe('BusSocketService', () => {
  let service: BusSocketService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [BusSocketService],
    }).compile();

    service = module.get<BusSocketService>(BusSocketService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
