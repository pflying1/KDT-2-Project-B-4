import { Module } from '@nestjs/common';
import { BusstationController } from './busstation.controller';
import { BusstationService } from './busstation.service';
import {Bus, BusStopSchema} from './busstation.model'
import { MongooseModule } from '@nestjs/mongoose';
@Module({
  imports: [
    MongooseModule.forFeature([{ name: Bus.name, schema: BusStopSchema }]), // 스키마 등록
  ],
  controllers: [BusstationController],
  providers: [BusstationService]
})
export class BusstationModule {}
