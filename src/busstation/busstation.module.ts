import { Module } from '@nestjs/common';
import { BusstationController } from './busstation.controller';
import { BusstationService } from './busstation.service';
import { Bus, BusStopSchema } from './busstation.model'
import { MongooseModule } from '@nestjs/mongoose';
import { Bus2, Bus2Schema } from './bus2.model';


@Module({
  imports: [
    MongooseModule.forFeature([{ name: Bus.name, schema: BusStopSchema }, { name: Bus2.name, schema: Bus2Schema }]), // 스키마 등록
  ],
  controllers: [BusstationController],
  providers: [BusstationService]
})
export class BusstationModule { }
