import { Test, TestingModule } from '@nestjs/testing';
import { SocketBusGateway } from './socket-bus.gateway';

describe('SocketBusGateway', () => {
  let gateway: SocketBusGateway;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [SocketBusGateway],
    }).compile();

    gateway = module.get<SocketBusGateway>(SocketBusGateway);
  });

  it('should be defined', () => {
    expect(gateway).toBeDefined();
  });
});
