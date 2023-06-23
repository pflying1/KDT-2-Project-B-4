/* 
  애플리케이션의 진입점이자 부트스트랩 파일입니다. 
  이 파일은 애플리케이션을 설정하고합니다.
*/
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app-module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.listen(3000);
}
bootstrap();