import { Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { Bus,BusStopDocument} from './busstation.model';
@Injectable()
export class BusstationService {
  constructor(@InjectModel('busstop') private busstation: Model<BusStopDocument>) {}
  async findAllBusStops(): Promise<Bus[]> {
    return this.busstation.find().exec();
  }

}
