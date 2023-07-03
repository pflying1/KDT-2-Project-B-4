import {
  SubscribeMessage,
  WebSocketGateway,
  WebSocketServer,
} from '@nestjs/websockets';
import { Server } from 'socket.io';




@WebSocketGateway({ namespace: 'busSocket' }) // URL을 'busSocket'으로 설정합니다.
export class SocketBusServerGateway {
  @SubscribeMessage('buttonClicked') // 클라이언트의 'buttonClicked' 이벤트를 처리합니다.
  handleButtonClicked(client: any, payload: any): string {
    const response = payload;

    // 클라이언트에게 응답을 보냅니다.
    client.emit('response', response);

    return response;
  }
}