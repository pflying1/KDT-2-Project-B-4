import { Test, TestingModule } from '@nestjs/testing';
import { SocketBusServerService } from './socket-bus-server.service';

describe('SocketBusServerService', () => {
  let service: SocketBusServerService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [SocketBusServerService],
    }).compile();

    service = module.get<SocketBusServerService>(SocketBusServerService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
