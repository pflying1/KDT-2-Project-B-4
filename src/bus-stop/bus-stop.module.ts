import { Module } from '@nestjs/common';
import { BusStopController } from './bus-stop.controller';
import { BusStopService } from './bus-stop.service';
import { HttpModule } from '@nestjs/axios';
import { MongooseModule } from '@nestjs/mongoose';
@Module({
  imports: [HttpModule,MongooseModule.forRoot('mongodb+srv://adminID:adminPW@project4.uk45ojb.mongodb.net/bus')],
  controllers: [BusStopController],
  providers: [BusStopService]
})
export class BusStopModule {}
