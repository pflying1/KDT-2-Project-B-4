import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
export interface Data {
  name: string;
  age: number;
}
export class CreateDataDto {
  name: string;
  age: number;
}
@Injectable()
export class DataService {
  constructor(
    @InjectModel('Data') private readonly dataModel: Model<Data>
  ) {}

  async createData(createDataDto: CreateDataDto): Promise<Data> {
    const createdData = new this.dataModel(createDataDto);
    return createdData.save();
  }
}
