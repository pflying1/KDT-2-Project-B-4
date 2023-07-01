import * as mongoose from 'mongoose';

const BusStopSchema = new mongoose.Schema({
  BUSSTOP_NM: String,
  value: String,
}, { collection: 'busstop' });

// Create a model from the schema
const BusStop = mongoose.model('BusStop', BusStopSchema);

export { BusStop };
