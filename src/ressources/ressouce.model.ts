
import * as mongoose from 'mongoose';

export const RessoucesSchema = new mongoose.Schema({
  Model: { type: String, required: true },
  Refernces:{ type: String, required: true },
  platform:{ type: String, required: true },
  osversion:{ type: String, required: true },
  datedebut: { type: Date},
  datefin: { type: Date},
  reserve: { type: Boolean, required: true },

  userId: { type: String},



});

export interface ressouces extends mongoose.Document {
  id: string;
  Model:string;
  Refernces: string;
  platform:string;
  osversion: string;

  datedebut: Date;
  datefin: Date;
  reserve:boolean;
  userId:string;


}
