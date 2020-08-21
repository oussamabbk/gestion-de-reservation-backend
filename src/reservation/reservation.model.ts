import * as mongoose from 'mongoose';

export const reservationSchema = new mongoose.Schema({
  Datedebut: { type: Date },
  Datedefin: { type: Date },
  ressourceId: { type: String, required: true },
  userId: { type: String, required: true },

});

export interface reservation extends mongoose.Document {
  id: string;
  Datedebut: Date;
  Datedefin: Date;
  ressourceId:string;
  userId:string;

}
