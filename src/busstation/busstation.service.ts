import { Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { Bus,BusStopDocument} from './busstation.model';
@Injectable()
export class BusstationService {
  constructor(
    @InjectModel(Bus.name) private readonly busstopModel: Model<BusStopDocument>,
  ) {}



  async findAllBusStops(): Promise<Bus[]> {
    console.log('이건 service',this.busstopModel.find().exec())
    return this.busstopModel.find().exec();
  }

}
