import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type BusStopDocument = Bus & Document;

@Schema({ collection: 'newBusStop' })
export class Bus {
  @Prop()
  BUSSTOP_SEQ: string;
  @Prop()
  BUSSTOP_TP: string;
  @Prop()
  ROAD_NM: string;
  @Prop()
  ROAD_NM_ADDR: string;
  @Prop()
  TOTAL_DIST: string;
  @Prop()
  BUSSTOP_NM : string
}

export const BusStopSchema = SchemaFactory.createForClass(Bus);

