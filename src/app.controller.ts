import { Controller, Get, Post, Body, Param, Res ,Req} from '@nestjs/common';
import { AppService } from './app.service';
import { Response } from 'express';
import { join } from 'path';
import { CatService } from './cat.service';
import { Cat } from './schemas/cat.schema';

@Controller()
export class AppController {
  constructor(
    private readonly appService: AppService,
    // private readonly mongoService: MongoService
  ) {}
  @Get('*')
  serveFile(@Req() req: Request, @Res() res: Response) {
    const filePath = join(__dirname, '..', 'client', 'build','index.html');
    return res.sendFile(filePath);
  }
}

