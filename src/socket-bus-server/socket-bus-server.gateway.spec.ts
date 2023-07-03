import { Test, TestingModule } from '@nestjs/testing';
import { SocketBusServerGateway } from './socket-bus-server.gateway';

describe('SocketBusServerGateway', () => {
  let gateway: SocketBusServerGateway;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [SocketBusServerGateway],
    }).compile();

    gateway = module.get<SocketBusServerGateway>(SocketBusServerGateway);
  });

  it('should be defined', () => {
    expect(gateway).toBeDefined();
  });
});
