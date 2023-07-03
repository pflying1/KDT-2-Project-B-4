//favor.module.ts
import { Module } from '@nestjs/common';
import { FavoritController } from './favor.controller';
import { FavorService } from './favor.service';
import { MongooseModule } from '@nestjs/mongoose';
import { UserFavorSchema, UserFavor } from './userFavor.schema';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: UserFavor.name, schema: UserFavorSchema }]),
  ],
  controllers: [FavoritController],
  providers: [FavorService]
})
export class FavorModule {}
