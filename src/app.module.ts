import {  Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';
import 'dotenv/config'; 
import { ConfigModule } from '@nestjs/config';
import { ApiController } from './api/api.controller';
import { ApiModule } from './api/api.module';
import { PageController } from './page/page.controller';
import { PageModule } from './page/page.module';
import { EventsModule } from './socket/event.module';

@Module({
  imports: [  ApiModule,ConfigModule.forRoot(),EventsModule, PageModule],
  controllers: [AppController,  ApiController, PageController],
  providers: [AppService],
})
export class AppModule {}
