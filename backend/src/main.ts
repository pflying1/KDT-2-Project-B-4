import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { AppService } from './app.service';
import * as express from 'express';
import { join } from 'path';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const appService = app.get(AppService);

  // 가짜 데이터를 생성합니다.
  const users = [{ name: '철수' }, { name: '영희' }, { name: '민수' }];

  for (const user of users) {
    await appService.createUser(user.name);
  }

  // 정적 파일 폴더 경로 설정
  app.use(express.static(join(__dirname, '..', '..', '/frontend/build')));

  // CORS 설정
  app.enableCors();

  await app.listen(3030);
}
bootstrap();
