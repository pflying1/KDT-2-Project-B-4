import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import 'dotenv/config';
import { ConfigModule } from '@nestjs/config';
import { ApiModule } from './api/api.module';
import { PageModule } from './page/page.module';
import { HttpModule } from '@nestjs/axios';
import { BusStopModule } from './bus-stop/bus-stop.module';
import { MongooseModule } from '@nestjs/mongoose';
import { BusstationModule } from './busstation/busstation.module';
import { FavorModule } from './favor/favor.module';
import { SocketModule } from './socket-bus-server/socket-bus-server.module';

@Module({
  imports: [ MongooseModule.forRoot('mongodb+srv://adminID:adminPW@project4.uk45ojb.mongodb.net/bus'),HttpModule,ApiModule,FavorModule, ConfigModule.forRoot(),BusStopModule,BusstationModule , SocketModule , PageModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
