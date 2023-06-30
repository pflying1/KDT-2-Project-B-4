import { Module } from '@nestjs/common';
import { EventsGateway } from './bus-socket.gateway';

@Module({
  providers: [EventsGateway],
})
export class BusSocketModule {}