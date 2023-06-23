import { Controller, Get, Res } from '@nestjs/common';
import { AppService } from './app.service';
import { Response } from 'express';
import { join } from 'path';

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
}
