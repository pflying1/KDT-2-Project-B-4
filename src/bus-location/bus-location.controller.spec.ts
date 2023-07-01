import { Test, TestingModule } from '@nestjs/testing';
import { BusLocationController } from './bus-location.controller';

describe('BusLocationController', () => {
  let controller: BusLocationController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [BusLocationController],
    }).compile();

    controller = module.get<BusLocationController>(BusLocationController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
