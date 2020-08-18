
import { Dependencies, Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { reservation, reservationSchema } from './reservation.model';


@Injectable()
@Dependencies(InjectModel(reservationSchema))
export class reservationsService {
  constructor(
    @InjectModel('Reservation') private readonly reservationModel: Model<reservation>,
  ) {}
  async insertreservation(Date: Date,datedebut :number, datefin: number, numerode: number, Description: string) {
    const newuser = new this.reservationModel({
      Date,
      datedebut,
      datefin,
      numerode,
      Description,

    });
    const result = await newuser.save();
    return result.id as string;
  }
  async getreservation() {
    const reservations = await this.reservationModel.find().exec();
    return reservations.map(reservation => ({
      id: reservation.id,
      Date: reservation.Date,
      datedebut: reservation.datedebut,
      datefin: reservation.datefin,
      numerode: reservation.numerode,
      Description: reservation.Description,

    }));
  }



}
