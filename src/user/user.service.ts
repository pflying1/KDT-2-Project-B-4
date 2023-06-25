import { Injectable } from '@nestjs/common';
import { User, UserStatus } from './user.model';
import { CreateUserDto } from './dto/create-user.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

@Injectable()
export class UserService {
  // module에서 컬력센 이름을 바꾸어 주었다면 여기서도 똑같이 바꾸어 주어야 한다.
  constructor(@InjectModel('KwonTest') private userModel: Model<User>) {}

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
    // save()메서드를 사용하여 데이터를 DB에 저장 하는거 같다.
    const result = await newUser.save();
    return result;
  }
}
