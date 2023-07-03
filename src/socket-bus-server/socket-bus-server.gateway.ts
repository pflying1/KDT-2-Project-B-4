import {
  SubscribeMessage,
  WebSocketGateway,
  WebSocketServer,
} from '@nestjs/websockets';
import { Server } from 'socket.io';
import {SocketBusServerService} from './socket-bus-server.service';

interface ServiceResult {
  msgHeader?: string;
  msgBody?: {
    itemList?: string;
  };
}

@WebSocketGateway({ namespace: 'busSocket' }) // URL을 'busSocket'으로 설정합니다.
export class SocketBusServerGateway {
  constructor(private readonly externalApiService: SocketBusServerService) {}

  @SubscribeMessage('buttonClicked')
  async handleButtonClicked(client: any, payload: any): Promise<{ ServiceResult: ServiceResult }> {
    const data = await this.externalApiService.getDataFromExternalApi(payload);

    // 클라이언트에게 응답을 보냅니다.
    client.emit('response', data);

    return data;
  }
}