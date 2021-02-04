
import * as mongoose from 'mongoose';

const Schema = mongoose.Schema;

export const whoSchema = new Schema({
   titleID: String,
   title: String,
   description: String
})

const whoModel = mongoose.model('who', whoSchema, 'who');
export default whoModel;
