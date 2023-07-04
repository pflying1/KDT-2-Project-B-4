//favor.service.ts
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { UserFavorDocument, UserFavor } from './userFavor.schema';

@Injectable()
export class FavorService {
  constructor(@InjectModel(UserFavor.name) private readonly userModel: Model<UserFavorDocument>) {}

  async CreateUser(busStopID: string, busStopName: string, user: string): Promise<UserFavor> {
    const existingUser = await this.userModel.findOne({ busStopName });
    const userInfo = {busStopID, busStopName, user: [user]};
  
    if (existingUser) {
      // 이미 해당 사용자 정보가 존재하는 경우 favor 값을 배열에 추가
      existingUser.user.push(user);
      return existingUser.save();
    }

    const userF = new this.userModel(userInfo);
    return userF.save();

  }
}