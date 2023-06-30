import { Module } from '@nestjs/common';
import { FavoritController } from './favor.controller';
import { FavorService } from './favor.service';

@Module({
  controllers: [FavoritController],
  providers: [FavorService]
})
export class FavorModule {}
