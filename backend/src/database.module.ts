import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { UserSchema } from './user.schema';
import * as dotenv from 'dotenv';
dotenv.config();

const url = process.env.MONGODB_URL2;

@Module({
  imports: [
    MongooseModule.forRoot(url),
    // 위에서 만든 connection 이름으로 MongooseModule을 설정
    MongooseModule.forFeature([{ name: 'User', schema: UserSchema }]),
    // User 모델을 위한 Mongoose 모듈 설정
  ],
  exports: [MongooseModule],
})
export class DatabaseModule {}
