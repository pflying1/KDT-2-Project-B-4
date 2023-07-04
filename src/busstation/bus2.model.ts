// bus2.model.ts

import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type Bus2Document = Bus2 & Document;

// 컬렉션을 한번에 2개를 조회 하기 위하여 모델링 파일을 분리 해주었다.
@Schema({ collection: 'newBusStopVer2' })
export class Bus2 {
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

export const Bus2Schema = SchemaFactory.createForClass(Bus2);