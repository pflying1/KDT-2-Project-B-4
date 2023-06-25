import { Controller,Get,Post,Body } from '@nestjs/common';
import { UserService } from './user.service';
import {User, UserStatus} from './user.model';
import { v1 as uuid} from 'uuid';
import { CreateUserDto } from './dto/create-user.dto';
@Controller('user')
export class UserController {
  constructor(private userService: UserService){
  }
  @Get()
  getAllUser(): User[] {
    return this.userService.getAllusers();
  }
  @Post()
  createUseer(@Body() createUseerDto: CreateUserDto): User{
    return this.userService.createUseer(createUseerDto);
    
  }

}
