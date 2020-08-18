
import * as mongoose from 'mongoose';

export const reservationSchema = new mongoose.Schema({
  Date: { type: Date, required: true },
  datedebut: { type: Number, required: true },
  datefin: { type: Number, required: true },
  numerode: { type: Number, required: true },
  Description: { type: String, required: true },



});

export interface reservation extends mongoose.Document {
  id: string;
  Date: Date;
  datedebut:number;
  datefin: number;

  numerode: number;
  Description: string;


}
