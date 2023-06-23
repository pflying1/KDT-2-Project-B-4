import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model, Document } from 'mongoose';

interface User {
  // 여기에 User 인터페이스 구성 요소를 작성해주세요
  name: string;
  // 기타 필요한 속성들
}

type UserDocument = User & Document;

@Injectable()
export class AppService {
  constructor(@InjectModel('User') private userModel: Model<UserDocument>) {}

  getHello(): object {
    return {
      message: 'Hello World!',
    };
  }

  getTest(): string[] {
    return ['안녕', '하세요'];
  }

  async findAll(): Promise<User[]> {
    return this.userModel.find().exec();
  }
  async createUser(name: string): Promise<User> {
    const newUser = { name };
    return this.userModel.create(newUser);
  }
}
