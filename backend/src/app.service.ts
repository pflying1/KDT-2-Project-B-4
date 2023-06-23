import { Injectable } from '@nestjs/common';
import { MongoClient } from 'mongodb';
import * as dotenv from 'dotenv';

@Injectable()
export class AppService {
  private client: MongoClient;

  constructor() {
    dotenv.config(); // 환경 변수를 로드합니다.

    // 환경 변수를 사용하여 연결 URL을 생성합니다.
    const username = process.env.MONGODB_USERNAME;
    const password = process.env.MONGODB_PASSWORD;
    const clusterName = process.env.MONGODB_CLUSTERNAME;

    const url = `mongodb+srv://${username}:${password}@${clusterName}.rlutdef.mongodb.net/?retryWrites=true&w=majority`;

    this.client = new MongoClient(url, {});
  }
  getHello(): object {
    return {
      message: 'Hello World!',
    };
  }
  getTest(): string[] {
    return ['안녕', '하세요'];
  }
  async getDbData() {
    await this.client.connect();
    const users = this.client.db('test').collection('test01');
    await users.deleteMany({});
    await users.insertMany([
      { name: 'Lee' },
      { name: 'Kim' },
      { name: 'Jeong' },
    ]);
    const cursor = users.find({}); //DB에서 모든 결과를 찾을 수 있게 변경
    const allData = await cursor.toArray(); // 데이터를 배열로 변환합니다.
    console.log(allData);
    await this.client.close();
    return allData; // 반환하는 값을 수정하세요.
  }
}
