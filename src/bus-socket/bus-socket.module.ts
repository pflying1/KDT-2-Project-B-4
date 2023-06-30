import { Module } from '@nestjs/common';
import { EventsGateway } from './bus-socket.gateway';
import { BusSocketController } from './bus-socket.controller';
import { BusSocketService } from './bus-socket.service';

@Module({
  providers: [EventsGateway, BusSocketService],
  controllers: [BusSocketController],
})
export class BusSocketModule {}