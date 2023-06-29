import {MessageBody, SubscribeMessage, WebSocketGateway, WebSocketServer, OnGatewayConnection, OnGatewayInit, OnGatewayDisconnect} from '@nestjs/websockets';
import { Server, Socket } from 'socket.io';
import { Logger } from '@nestjs/common';

@WebSocketGateway(3000, {
  namespace: 'chat'})
export class EventsGateway
  implements OnGatewayInit, OnGatewayConnection, OnGatewayDisconnect
{
  constructor() {}
  
  @WebSocketServer() server: Server;
  private logger: Logger = new Logger('EventsGateway');

  @SubscribeMessage('events')
  handleEvent(@MessageBody() data: string): string {
    return data;
  }

  afterInit(server: Server) {
    this.logger.log('웹소켓 서버 초기화 ✅');
  }

  handleDisconnect(client: Socket) {
    this.logger.log(`Client Disconnected : ${client.id}`);
  }

  handleConnection(client: Socket, ...args: any[]) {
    this.logger.log(`Client Connected : ${client.id}`);
  }
}