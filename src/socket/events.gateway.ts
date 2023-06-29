import {MessageBody, SubscribeMessage, WebSocketGateway, WebSocketServer, OnGatewayConnection, OnGatewayInit, OnGatewayDisconnect} from '@nestjs/websockets';
import { Server } from 'socket.io';

@WebSocketGateway(3000, {
  namespace: 'chat'})

export class EventsGateway 
  implements OnGatewayInit, OnGatewayConnection, OnGatewayDisconnect
{
  @WebSocketServer() nsp: namespace;

  // 초기화 이후에 실행
  afterInit() {}

  // 소켓이 연결되면 실행
  handleConnection(@ConnectedSocket() socket: Socket) {}

  // 소켓 연결이 끊기면 실행
  handleDisconnect(@ConnectedSocket() socket: Socket) {}
}