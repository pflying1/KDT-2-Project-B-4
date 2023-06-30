import { Schema, Prop, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type EntityDocument = Entity & Document;

@Schema()
export class Entity {
  @Prop()
  name: string;

  // 다른 필드들도 추가할 수 있습니다.
}

export const EntitySchema = SchemaFactory.createForClass(Entity);
