import * as mongoose from 'mongoose';

export const UserSchema = new mongoose.Schema({
  email: { type: String, required: true },
  password: { type: String, required: true },

});

export interface user extends mongoose.Document {
  id: string;
  email: string;
  password: string;

}
