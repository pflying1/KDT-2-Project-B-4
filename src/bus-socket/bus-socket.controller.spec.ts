import { Test, TestingModule } from '@nestjs/testing';
import { BusSocketController } from './bus-socket.controller';

describe('BusSocketController', () => {
  let controller: BusSocketController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [BusSocketController],
    }).compile();

    controller = module.get<BusSocketController>(BusSocketController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
