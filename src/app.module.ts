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
import { EventsModule } from './socket/event.module';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [HttpModule,ApiModule,ConfigModule.forRoot(),BusLocationModule,BusStopModule,EventsModule, MongooseModule, PageModule ],
  controllers: [AppController,  ApiController, BusLocationController,BusStopController,PageController],
  providers: [AppService, BusLocationService, BusStopService],
})
export class AppModule {}
