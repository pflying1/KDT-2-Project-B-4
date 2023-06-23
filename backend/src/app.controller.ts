import { Controller, Get, Res } from '@nestjs/common';
import { AppService } from './app.service';
import { Response } from 'express';
import { join } from 'path';
interface User {
  // 여기에 User 인터페이스 구성 요소를 작성해주세요
  name: string;
  // 기타 필요한 속성들
}

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getIndexFile(@Res() res: Response): void {
    res.setHeader('Content-Type', 'text/html');
    res.sendFile(join(__dirname, '..', '..', '/frontend/build/index.html'));
  }

  @Get('hello')
  getHello(): object {
    return this.appService.getHello();
  }
  @Get('test')
  getTest(): string[] {
    return this.appService.getTest();
  }
  @Get('main')
  async findAll(): Promise<User[]> {
    return this.appService.findAll();
  }
}
