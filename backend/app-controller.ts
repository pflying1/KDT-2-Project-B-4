/* 
  기본 컨트롤러 파일을 작성합니다. 
  특정 라우트의 요청을 처리하고 응답을 반환.
  api 엔드포인트 작성 하는 곳
*/
import { Controller, Get,Post, Res } from '@nestjs/common';
import { AppService } from './app-service';
import { Response } from 'express';
import { join } from 'path';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getIndexFile(@Res() res: Response): void {
    res.sendFile(join(__dirname, '..', './dist/index.html'));
  }
  @Get("/main-bundle.js")
  getJsFile(@Res() res: Response): void {
    res.setHeader('Content-Type', 'application/javascript');
    res.sendFile(join(__dirname, '..', 'dist', 'main-bundle.js'));
  }

  @Get("hello")
  getHello(): string {
    return this.appService.getHello();
  } 
}