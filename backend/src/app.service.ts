import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): object {
    return {
      message: 'Hello World!',
    };
  }
  getTest(): string[] {
    return ['안녕', '하세요'];
  }
}
