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
  async getreserva() {
    const reservations = await this.reservationModel.find().exec();
    /*return reservations.map(reservation => ({
      id: reservation.id,
      Datedebut: reservation.Datedebut,
      Datedefin: reservation.Datedefin,
      ressourceId:reservation.ressourceId,
      userId:reservation.userId,

    }));*/
    return reservations;
  }
  /*async reservationwithressources() {
    const reservations = await this.reservationModel.find.exec();
    return reservations.map(reservation => ({
      id: reservation.id,
      Datedebut: reservation.Datedebut,
      Datedefin: reservation.Datedefin,
      ressourceId:reservation.ressourceId,
      userId:reservation.userId,

    }));
  }*/
  async isrecervedornnot(datedebut,datefin,userID,ressourceID){
    const reservations = await this.reservationModel.find().exec();

    for(const i in reservations){
      if(reservations[i].ressourceId==ressourceID){
        if((reservations[i].datedebut<datedebut && reservations[i].datefin<datefin)|| (reservations[i].datedebut>datefin)){
          return "isnotereserved";
        }
      }


    }
    return "isrecerved";

  }
  async whorecerved(localeDate,ressourceID){
    const reservations = await this.reservationModel.find().exec();

    for(const i in reservations){
      if(reservations[i].ressourceId==ressourceID && reservations[i].datedebut==localeDate ){
        return ""+reservations[i].userId;
      }
    } return "null";


  }
  async gethistorique(userId){
    const reservations = await this.reservationModel.find({userId:userId}).exec();

    return reservations;


  }

}
