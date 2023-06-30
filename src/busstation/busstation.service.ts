import { Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { busstop} from './busstation.model';
@Injectable()
export class BusstationService {
  constructor(@InjectModel('busstop') private busstation: Model<busstop>) {}


}
