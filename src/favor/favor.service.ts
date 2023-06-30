import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import {UserFavor} from './userFavor.schema';

@Injectable()
export class FavorService {
  constructor(@InjectModel('User') private readonly userModel: Model<UserFavor>) {}

  async CreateUser(busStop: string, user: string): Promise<UserFavor> {
    const userF = new this.userModel({ busStop, user });
    return userF.save();
  }
}
