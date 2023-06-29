import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';
import 'dotenv/config';
import { ConfigModule } from '@nestjs/config';
import { ApiController } from './api/api.controller';
import { ApiModule } from './api/api.module';
import { PageController } from './page/page.controller';
import { PageModule } from './page/page.module';
import { BusLocationService } from './bus-location/bus-location.service';
import { BusLocationController } from './bus-location/bus-location.controller';
import { BusLocationModule } from './bus-location/bus-location.module';
import { HttpModule } from '@nestjs/axios';

@Module({
  imports: [HttpModule,ApiModule,ConfigModule.forRoot(),BusLocationModule,PageModule],
  controllers: [AppController,  ApiController, BusLocationController,PageController],
  providers: [AppService, BusLocationService],
})
export class AppModule {}
