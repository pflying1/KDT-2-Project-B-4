import { Controller, Get, Param, Res, Req, Post, Body } from '@nestjs/common';
import { AppService } from './app.service';
import { Response, Request } from 'express';
import { join } from 'path';
import fs from 'fs';

@Controller("*")
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  serveFile(@Req() req: Request, @Res() res: Response) {
    const filePath = join(__dirname, '..', 'client', 'build', 'index.html');
    const apiKey = process.env.API_KEY; // .env 파일에서 키 값을 가져옴

    fs.readFile(filePath, 'utf-8', (err, data) => {
      if (err) {
        console.error(err);
        res.status(500).send('에러 발생');
      } else {
        const jsonData = JSON.stringify({ apiKey }); // JSON 객체 생성
        const updatedHTML = data.replace(
          '<script id="init-data" type="application/json"></script>',
          `<script id="init-data" type="application/json">${jsonData}</script>`
        );

        res.send(updatedHTML);
      }
    });
  }
}