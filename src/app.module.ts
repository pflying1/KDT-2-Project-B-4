import {  Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';

import { ConfigModule } from '@nestjs/config';
import { ApiController } from './api/api.controller';
import { ApiModule } from './api/api.module';
@Module({
  imports: [UserModule, ConfigModule.forRoot(), ApiModule],
  controllers: [AppController,  ApiController],
  providers: [AppService],
})
export class AppModule {}
