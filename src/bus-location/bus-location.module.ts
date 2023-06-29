/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { BusLocationController } from './bus-location.controller';
import { BusLocationService } from './bus-location.service';
import { HttpModule } from '@nestjs/axios';
@Module({
  imports: [HttpModule],
  controllers: [BusLocationController],
  providers: [BusLocationService],
})
export class BusLocationModule {}