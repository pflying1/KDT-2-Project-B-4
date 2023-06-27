import { Injectable } from '@nestjs/common';
import { User, UserStatus } from './user.model';
// import { v1 as uuid } from 'uuid';
import { CreateUserDto } from './dto/create-user.dto';
import { v1 as uuid } from 'uuid';

@Injectable()
export class UserService {
  // 데이터가 한번만 올 것이 아니기 때문에 배열로 정의 해준다.
  private userList: User[] = [];

  getAllusers(): User[] {
    console.log(this.userList);
    return this.userList;
  }
  createUseer(createUserDto: CreateUserDto) {
    // 객체에 추가 시키기
    const { name, pw } = createUserDto;
    const user: User = {
      id: 'aaa',
      // id: uuid(),
      name,
      pw,
      status: UserStatus.PUBLIC
    }
    this.userList.push(user);
    return user;
  }
}
