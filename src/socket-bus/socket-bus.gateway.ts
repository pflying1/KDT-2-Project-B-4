import {
  WebSocketGateway,
  WebSocketServer,
  SubscribeMessage,
  OnGatewayConnection,
  OnGatewayDisconnect,
} from '@nestjs/websockets';
import { Server, Socket } from 'socket.io';

@WebSocketGateway({ namespace: '/bus' })
export class SocketBusGateway implements OnGatewayConnection, OnGatewayDisconnect {
  @WebSocketServer()
  server: Server;

  handleConnection(client: Socket) {
    console.log(`클라이언트가 연결되었습니다: ${client.id}`);
  }

  handleDisconnect(client: Socket) {
    console.log(`클라이언트가 연결이 끊어졌습니다: ${client.id}`);
  }

  @SubscribeMessage('events')

  handleEvent(client: Socket, message: string) {
    console.log('보낸 메시지:', message);
    // 받은 이벤트를 처리하는 로직을 여기에 작성합니다.

    // 예시: 받은 이벤트를 연결된 모든 클라이언트에게 브로드캐스트합니다.
    // this.server.emit('events', message);
    client.emit('events','받았어')
  }
}
