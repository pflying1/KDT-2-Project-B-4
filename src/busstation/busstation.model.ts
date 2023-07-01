import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type BusStopDocument = Bus & Document;

@Schema()
export class Bus {
  @Prop()
  BUSSTOP: string;
  @Prop()
  BUS_NODE_ID: string;
  @Prop()
  BUS_STOP_ID: string;
  @Prop()
  GPS_LATI: number;
  @Prop()
  GPS_LONG: number;
  @Prop()
  ROUTE_CD: string;
}

export const BusStopSchema = SchemaFactory.createForClass(Bus);

