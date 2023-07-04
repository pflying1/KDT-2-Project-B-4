//userFavor.schema.ts
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type UserFavorDocument = UserFavor & Document;

// 컬렉션을 한번에 2개를 조회 하기 위하여 모델링 파일을 분리 해주었다.
@Schema({ collection: 'UserFavorDB' })
export class UserFavor {
  @Prop()
  busStopID: string
  @Prop()
  busStopName: string
  @Prop()
  user: string[]

}

export const UserFavorSchema = SchemaFactory.createForClass(UserFavor);