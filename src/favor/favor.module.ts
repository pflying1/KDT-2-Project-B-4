import { Module } from '@nestjs/common';
import { FavoritController } from './favor.controller';
import { FavorService } from './favor.service';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb+srv://adminID:adminPW@project4.uk45ojb.mongodb.net/bus'),
  ],
  controllers: [FavoritController],
  providers: [FavorService]
})
export class FavorModule {}
