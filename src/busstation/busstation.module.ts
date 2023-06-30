import { Module } from '@nestjs/common';
import { BusstationController } from './busstation.controller';
import { BusstationService } from './busstation.service';

@Module({
  controllers: [BusstationController],
  providers: [BusstationService]
})
export class BusstationModule {}
