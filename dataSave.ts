import { MongoClient } from 'mongodb';
import * as fs from 'fs';
const uri = 'mongodb+srv://adminID:adminPW@project4.uk45ojb.mongodb.net/bus';


// JSON 파일을 읽어오기
const jsonData = fs.readFileSync('./data.json', 'utf-8');
const busData = JSON.parse(jsonData);

(async () => {
  try {
    // MongoDB에 연결하기
    const client = await MongoClient.connect(uri);

    // DB 및 컬렉션 선택
    const db = client.db('bus');
    const collection = db.collection('newBusStopVer2');

    // 각 버스 정류장 데이터 저장
    const result = await collection.insertMany(busData);

    console.log(`Inserted ${result.insertedCount} documents`);
    await client.close();
  } catch (error) {
    console.error('Error: ', error);
  }
})();
