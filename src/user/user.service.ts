import { Injectable } from '@nestjs/common';
import { User, UserStatus } from './user.model';
import { CreateUserDto } from './dto/create-user.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

@Injectable()
export class UserService {
  constructor(@InjectModel('User') private userModel: Model<User>) {}

  async getAllusers(): Promise<User[]> {
    const users = await this.userModel.find().exec();
    return users;
  }

  async createUseer(createUserDto: CreateUserDto): Promise<User> {
    const { name, pw } = createUserDto;
    const newUser = new this.userModel({
      name,
      pw,
      status: UserStatus.PUBLIC
    });

    const result = await newUser.save();
    return result;
  }
}
