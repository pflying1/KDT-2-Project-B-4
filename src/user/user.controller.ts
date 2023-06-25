import { Controller, Get, Post, Body } from '@nestjs/common';
import { UserService } from './user.service';
import { User } from './user.model';
import { CreateUserDto } from './dto/create-user.dto';

@Controller('user')
export class UserController {
  constructor(private userService: UserService) {}

  @Get()
  async getAllUser(): Promise<User[]> {
    return this.userService.getAllusers();
  }

  @Post()
  async createUseer(@Body() createUseerDto: CreateUserDto): Promise<User> {
    return this.userService.createUseer(createUseerDto);
  }
}
