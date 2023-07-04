import {
  SubscribeMessage,
  WebSocketGateway,
  WebSocketServer,
} from '@nestjs/websockets';
import { Server } from 'socket.io';
import {SocketBusServerService} from './socket-bus-server.service';

interface response {
  header?: string;
  body?: {
    items?:{
      item?: string;
    }
  };
}

@WebSocketGateway({ namespace: 'busSocket' }) // URL을 'busSocket'으로 설정합니다.
export class SocketBusServerGateway {
  constructor(private readonly externalApiService: SocketBusServerService) {}

  @SubscribeMessage('buttonClicked')
  async handleButtonClicked(client: any, payload: any): Promise<{ response: response }> {
  
    const data = await this.externalApiService.getDataFromExternalApi(payload);

    // 클라이언트에게 응답을 보냅니다.
    console.log('이건 데이터',data.length);
    // const dataLength = data.length
    client.emit('response', data);
    // client.emit('numberofbuses',dataLength)

    return data;
  }

}