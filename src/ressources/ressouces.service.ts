
import { Dependencies, Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { ressouces, RessoucesSchema } from './ressouce.model';


@Injectable()
@Dependencies(InjectModel(RessoucesSchema))
export class ressoucesService {
  constructor(
    @InjectModel('ressouces') private readonly RessoucesModule: Model<ressouces>,
  ) {}
  async insertreservation( Model:string, Refernces:string,platform:string,osversion:string,datedebut:Date,datefin:Date,reserve:boolean, userId){
    const newuser = new this.RessoucesModule({
      Model,
      Refernces,
      platform,

      osversion,
      datedebut,
      datefin,
      reserve,
      userId



    });
    const result = await newuser.save();
    return result.id as string;
  }
  async getreservation() {
    const reservations = await this.RessoucesModule.find().exec();
    return reservations.map(reservation => ({
      id: reservation.id,
      Model: reservation.Model,
      Refernces: reservation.Refernces,
      platform: reservation.platform,
      osversion: reservation.osversion,
      datedebut: reservation.datedebut,
      datefin: reservation.datefin,
      reserve: reservation.reserve,
      userId:reservation.userId

    }));
  }



}
