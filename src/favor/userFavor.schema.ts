import * as mongoose from 'mongoose';

export const FavorSchema = new mongoose.Schema({
  busStop: String,
  user: [String],
});

export interface UserFavor extends mongoose.Document {
  busStop: string;
  user: string;
}