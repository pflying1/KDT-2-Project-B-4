import { Module } from '@nestjs/common';
import { MongoClient } from 'mongodb';

@Module({
  providers: [
    {
      provide: 'DATABASE_CONNECTION',
      useFactory: async () => {
        const uri = 'mongodb://localhost:27017/';
        const client = new MongoClient(uri);
        await client.connect();
        return client.db('ohabTest');
      },
    },
  ],
  exports: ['DATABASE_CONNECTION'],
})
export class MongoModule {}