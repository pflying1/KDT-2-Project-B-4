import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { join } from 'path';
import { NestExpressApplication } from '@nestjs/platform-express';
import * as bodyParser from 'body-parser';

// 환경 변수 로드 및 확인 코드
import * as dotenv from 'dotenv';
dotenv.config();
// console.log('Loaded environment variables:', process.env);
// console.log("Loaded MongoDB URI:", process.env.MONGODB_URI);
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
