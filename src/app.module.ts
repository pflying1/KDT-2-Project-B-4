import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';
import 'dotenv/config';
import { ConfigModule } from '@nestjs/config';
import { ApiController } from './api/api.controller';
import { ApiModule } from './api/api.module';
import { PageController } from './page/page.controller';
import { PageModule } from './page/page.module';
import { BusLocationService } from './bus-location/bus-location.service';
import { BusLocationController } from './bus-location/bus-location.controller';
import { BusLocationModule } from './bus-location/bus-location.module';
import { HttpModule } from '@nestjs/axios';
import { BusStopModule } from './bus-stop/bus-stop.module';
import { BusStopController } from './bus-stop/bus-stop.controller';
import { BusStopService } from './bus-stop/bus-stop.service';
import { MongooseModule } from '@nestjs/mongoose';
import { BusstationModule } from './busstation/busstation.module';
import { BusstationService } from './busstation/busstation.service';
// import { BusStop } from './busstation/busstation.model';import { FavorModule } from './favor/favor.module';
import { FavorService } from './favor/favor.service';
import { FavorModule } from './favor/favor.module';
import { SocketBusModule } from './socket-bus/socket-bus.module';
import { SocketBusServerGateway } from './socket-bus-server/socket-bus-server.gateway';
import { SocketModule } from './socket-bus-server/socket-bus-server.module';

// import { BusStop } from './busstation/busstation.model';
@Module({
  imports: [ MongooseModule.forRoot('mongodb+srv://adminID:adminPW@project4.uk45ojb.mongodb.net/bus'),HttpModule,ApiModule,FavorModule, ConfigModule.forRoot(),BusLocationModule,BusStopModule,BusstationModule ,SocketBusModule, SocketModule , PageModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
