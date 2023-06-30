import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema()
export class busstop extends Document {
  @Prop()
  BUSSTOP_NM: string;
  @Prop()
  BUS_NODE_ID: string;
  @Prop()
  BUS_STOP_ID: string;
  @Prop()
  GPS_LATI: string;
  @Prop()
  GPS_LONG: string;
  @Prop()
  ROUTE_CD: string;

}

export const busstationModel = SchemaFactory.createForClass(busstop);
