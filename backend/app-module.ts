/* 
  루트 모듈을 정의합니다. 
  모든 애플리케이션은 최소한 하나의 모듈인 루트 모듈을 가져야 합니다.
*/

import { Module} from '@nestjs/common';
import { AppController } from './app-controller';
import { AppService } from './app-service';

@Module({
  imports: [],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule{}
