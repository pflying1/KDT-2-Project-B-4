import { Module } from '@nestjs/common';
import { BusStopController } from './bus-stop.controller';
import { BusStopService } from './bus-stop.service';
import { HttpModule } from '@nestjs/axios';

@Module({
  imports: [HttpModule],
  controllers: [BusStopController],
  providers: [BusStopService]
})
export class BusStopModule {}
