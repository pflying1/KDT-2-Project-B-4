import { Module } from '@nestjs/common';
import { EventsGateway } from './socket-node-bus.gateway';

@Module({
  providers: [EventsGateway],
})
export class BusSocketModule {}