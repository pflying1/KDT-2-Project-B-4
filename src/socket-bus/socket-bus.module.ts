import { Module } from '@nestjs/common';
import { SocketBusGateway } from './socket-bus.gateway';

@Module({
  providers: [SocketBusGateway]
})
export class SocketBusModule {}
