import { Controller, Get, Param, Res, Req, Post, Body } from '@nestjs/common';
import * as path from 'path';
import { Response, Request } from 'express';
import { join } from 'path';
@Controller()
export class PageController {
  @Get('*')
  serveFile(@Req() req: Request, @Res() res: Response) {
    const filePath = join(__dirname, '..','..', 'client', 'build', 'index.html');
    return res.sendFile(filePath);
  }
}
