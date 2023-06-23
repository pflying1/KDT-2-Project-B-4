import { Controller, Get, Param, Res, Req, Post, Body } from '@nestjs/common';
import { AppService } from './app.service';
import { Response, Request } from 'express';
import { join } from 'path';
import { DataService } from './data.service';
import { CreateDataDto } from './create-data.dto';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  serveFile(@Req() req: Request, @Res() res: Response) {
    const filePath = join(__dirname, '..', 'client', 'build', 'index.html');
    return res.sendFile(filePath);
  }
}

@Controller('input')
export class DataController {
  constructor(private readonly dataService: DataService) {}

  @Post()
  async create(@Body() createDataDto: CreateDataDto) {
    try {
      // 받은 데이터를 처리하는 로직을 작성
      console.log('받은 데이터:', createDataDto);

      // 데이터 처리 로직...

      // 처리 결과를 반환 (예: 새로운 데이터 객체)
      const newData = {
        id: 1,
        ...createDataDto,
      };

      return newData;
    } catch (error) {
      // 에러 처리 로직...
      console.error(error);
      throw new Error('데이터 처리 실패');
    }
  }
}
