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
    const apiKey = process.env.KAKAO_MAP; // .env 파일에서 키 값을 가져옴

    return res.sendFile(filePath, (err) => {
      if (err) {
        // 에러 처리
        console.error(err);
        res.status(500).send('에러 발생');
      } else {
        // 파일 전송이 성공하면 window 객체에 apiKey 할당
        const indexHTML = fs.readFileSync(filePath, 'utf-8');
        const updatedHTML = indexHTML.replace(
          '<body>',
          `<body><script>window.REACT_APP_API_KEY = "${apiKey}";</script>`
        );
        res.send(updatedHTML);
      }
    });
  }
}