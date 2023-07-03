import { Logger } from "@nestjs/common";
import {
  OnGatewayConnection,
  OnGatewayDisconnect,
  OnGatewayInit,
  ConnectedSocket,
  MessageBody,
  SubscribeMessage,
  WebSocketGateway,
  WebSocketServer,
} from "@nestjs/websockets";
import { Server, Socket } from "socket.io";
import axios from "axios";
import { parseStringPromise } from "xml2js";
import dotenv from "dotenv";
dotenv.config();

@WebSocketGateway({ namespace: "api/buslocation/socket" })
export class EventsGateway
  implements OnGatewayInit, OnGatewayConnection, OnGatewayDisconnect {
  // constructor(private busSocketService: BusSocketService) {}
  @WebSocketServer() server: Server;
  private logger: Logger = new Logger("EventsGateway");

  @SubscribeMessage('sendNodeId')
  handleMessage(@MessageBody() nodeid:{nodeid:string}){
    if(nodeid.nodeid){
      console.log(nodeid.nodeid)
    }
  }

  //서버에 api 저장하는 로직
  /* async fetchXmlApiAndConvertToJson(url: string): Promise<any> {
    try {
      const response = await axios.get(url);
      if (response.status !== 200) {
        throw new Error(
          `External API request failed with status code: ${response.status}`
        );
      }
      const json = await parseStringPromise(response.data, {
        explicitArray: false,
      });
      return json;
    } catch (error) {
      console.error("Error fetching external API:", error.message);
      throw error;
    }
  } */

  //서버에 api 저장하는 로직
 /*  async handleEvent(socketId: string, url: string) {
    try {
      const jsonData = await this.fetchXmlApiAndConvertToJson(url);
      this.server
        .to(socketId)
        .emit("busevents", { id: socketId, data: jsonData });
        await axios.post("http://localhost:3000/api/bus", { data: jsonData });
        this.busSocketService.saveData(jsonData);
      return { id: socketId, data: jsonData };
    } catch (error) {
      console.error("Error processing events:", error.message);
      this.server.to(socketId).emit("error", { message: error.message });
      return null;
    }
  } */

  afterInit(server: Server) {
    this.logger.log("웹소켓 서버 초기화 ✅");
  }

  handleConnection(client: Socket, ...args: any[]) {
    console.log("client? ", client.id);
    this.logger.log(`Client Connected: ${client.id}`);
  }

  handleDisconnect(client: Socket) {
    this.logger.log(`Client Disconnected: ${client.id}`);
  }
}