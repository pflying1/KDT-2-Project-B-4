import { Test, TestingModule } from '@nestjs/testing';
import { BusstationController } from './busstation.controller';

describe('BusstationController', () => {
  let controller: BusstationController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [BusstationController],
    }).compile();

    controller = module.get<BusstationController>(BusstationController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
