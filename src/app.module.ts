import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';
import { MongooseModule } from '@nestjs/mongoose';
@Module({
  imports: [UserModule, MongooseModule.forRoot('mongodb+srv://adminID:adminPW@project4.uk45ojb.mongodb.net/')],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
