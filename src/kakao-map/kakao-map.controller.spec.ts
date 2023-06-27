import { Test, TestingModule } from '@nestjs/testing';
import { KakaoMapController } from './kakao-map.controller';

describe('KakaoMapController', () => {
  let controller: KakaoMapController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [KakaoMapController],
    }).compile();

    controller = module.get<KakaoMapController>(KakaoMapController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
