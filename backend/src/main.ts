import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as express from 'express';
import { join } from 'path';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  // 정적 파일 폴더 경로 설정
  app.use(express.static(join(__dirname, '..', '..', '/frontend/build')));

  await app.listen(3000);
}
bootstrap();
