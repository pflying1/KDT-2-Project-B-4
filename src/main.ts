import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { join } from 'path';
import { NestExpressApplication } from '@nestjs/platform-express';
import * as bodyParser from 'body-parser';
import * as path from 'path';
import * as express from 'express';
import dotenv from 'dotenv'

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule);
  dotenv.config(); 
  
  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({ extended: true }));
  app.useStaticAssets(join(__dirname, '..', 'client', 'build'));  // React 앱을 제공하기 위한 정적 파일 경로 설정

  // Body Parser 미들웨어 추가
  await app.listen(3000);
}

bootstrap();
