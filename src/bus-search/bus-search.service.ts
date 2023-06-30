import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Entity, EntityDocument } from './bus-search.schema';

@Injectable()
export class EntityService {
  constructor(
    @InjectModel(Entity.name) private entityModel: Model<EntityDocument>,
  ) { }

  async getID(): Promise<string | null> {
    try {
      const id = '649ced3a039419b164cc7e5d'
      const doc = await this.entityModel.findById(id).exec();
      if (doc) {
        return doc.name;
      }
      else {
        return null;
      }
    } catch (error) {
      throw error
    }
  }

}
