/* 
  기본 서비스 파일을 작성. 
  비즈 니스 로직과 데이터 처리를 담당합니다.
 */
  import { Injectable } from '@nestjs/common';

  @Injectable()
  export class AppService {
    getHello(): string {
      return ('Hello World!');
    }
  }