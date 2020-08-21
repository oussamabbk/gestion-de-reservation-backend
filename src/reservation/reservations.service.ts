import { Dependencies, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { reservation, reservationSchema } from './reservation.model';
import { Model } from 'mongoose';

@Injectable()
@Dependencies(InjectModel(reservationSchema))
export class reservationsService {
  constructor(
    @InjectModel('Reservation') private readonly reservationModel: Model<reservation>,
  ) {}
  async insertreservation(Datedebut: Date, Datedefin: Date,ressourceId:string,userId:string) {
    const newuser = new this.reservationModel({
      Datedebut:Datedebut,
      Datedefin: Datedefin,
      ressourceId:ressourceId,
      userId:userId,


    });
    const result = await newuser.save();
    return result.id as string;
  }
  async getusers() {
    const reservations = await this.reservationModel.find().exec();
    return reservations.map(reservation => ({
      id: reservation.id,
      Datedebut: reservation.Datedebut,
      Datedefin: reservation.Datedefin,
      ressourceId:reservation.ressourceId,
      userId:reservation.userId,

    }));
  }
}
