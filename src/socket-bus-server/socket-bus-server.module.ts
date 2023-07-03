import { Module } from '@nestjs/common';
import { SocketBusServerGateway } from './socket-bus-server.gateway';
import { SocketBusServerService } from './socket-bus-server.service';
import { HttpModule } from '@nestjs/axios';

@Module({
  imports: [HttpModule],
  providers: [SocketBusServerGateway, SocketBusServerService],
})
export class SocketModule {}
