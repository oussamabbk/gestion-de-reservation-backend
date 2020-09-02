import { Dependencies, Injectable, NotFoundException } from '@nestjs/common';
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
    let x="isrecerved"

    for(const i in reservations){
      if(reservations[i].ressourceId==ressourceID){
        if((reservations[i].datefin<datedebut)|| (reservations[i].datedebut<datefin) ){
          x= "isnotereserved";
          console.log(x);
        }
      }


    }
    return x;

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
  async updateReservation(Id,Datedebut: Date, Datedefin: Date,ressourceId:string,userId:string) {
    /*const newuser = new this.reservationModel({
      Id:Id,
      Datedebut:Datedebut,
      Datedefin: Datedefin,
      ressourceId:ressourceId,
      userId:userId,
    });*/
    const newuser = await this.reservationModel.findById(Id).exec();
    if (Datedebut) {
      newuser.Datedebut = Datedebut;
    }
    if (Datedefin) {
      newuser.Datedefin = Datedefin;
    }
    if (ressourceId) {
      newuser.ressourceId = ressourceId;
    }if(userId){
      newuser.userId=userId;
    }
    newuser.save();










  }
   async Delete(id: string){
    const result = await this.reservationModel.deleteOne({_id: id}).exec();
    if (result.n === 0) {
      throw new NotFoundException('Could not find product.');
    }

  }





  private async findreservation(id: string): Promise<reservation> {
    let reserv;
    try {
      reserv = await this.reservationModel.findById(id).exec();
    } catch (error) {
      throw new NotFoundException('Could not find product.');
    }
    if (!reserv) {
      throw new NotFoundException('Could not find product.');
    }if(reserv){
      return reserv;
    }

  }

}
