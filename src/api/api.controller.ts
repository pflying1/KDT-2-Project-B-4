import { Controller, Get, Res } from '@nestjs/common';
import { Response } from 'express';
import 'dotenv/config';
import { ConfigService } from '@nestjs/config'; // 
@Controller('api')
export class ApiController {
  constructor(private configService: ConfigService) { } // ConfigService를 주입

  @Get('apiKey')
  getApiKey(@Res() res: Response) {
    const apiKey = this.configService.get('KAKAO_KEY'); // 환경 
    // apiKey 값을 클라이언트로 응답합니다.
    return res.json({ apiKey });
  }
}