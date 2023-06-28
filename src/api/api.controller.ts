import { Controller, Get, Res } from '@nestjs/common';
import { ConfigService } from '@nestjs/config'; // ConfigService를 import
import { Response } from 'express';
@Controller('api')
export class ApiController {
  @Get('apiKey')
  getApiKey(@Res() res: Response) {
    const apiKey = process.env.KAKAO_KEY; // apiKey 값을 서버에서 가져오는 로직을 구현해야 합니다.
    console.log('apikey',apiKey)
    // apiKey 값을 클라이언트로 응답합니다.
    return res.json(apiKey);
  }
}