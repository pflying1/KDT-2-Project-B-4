import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { join } from 'path';
import { NestExpressApplication } from '@nestjs/platform-express';
import * as bodyParser from 'body-parser';

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule);
  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({ extended: true }));
  // 정적 파일 제공 설정
  app.useStaticAssets(join(__dirname, '..', 'client', 'build'));

  // Body Parser 미들웨어 추가


  await app.listen(3000);
}

bootstrap();
