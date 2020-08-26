import {
  Controller,
  Post,
  Body,
  Get,
  Param,
  Patch,
  Delete, UsePipes,
} from '@nestjs/common';
import { reservationsService } from './reservations.service';

@Controller('reserv')
export class ReservationController {
  constructor(private readonly reservationsService: reservationsService) {}
  @Post()
  async addreservation(
    @Body('Datedebut') Datedebut: Date,
    @Body('Datedefin') datedefin: Date,
    @Body('ressourceId') ressouceId: string,
    @Body('userId') useerID: string,


  ) {


    const generatedId = await this.reservationsService.insertreservation(Datedebut,datedefin,ressouceId,useerID);
    return { id: generatedId };
  }
  @Get()
  async getAllProducts() {
    const resevations = await this.reservationsService.getreserva();
    return resevations;
  }
  /*@Get()
  async findreservation() {
    const resevations = await this.reservationsService.reservationwithressources();
    return resevations;
  }*/
  /*@Get()
  async ifreservedornot() {
    const resevations = await this.reservationsService.reservationwithressources();
    return resevations;
  }*/
  @Get('/reservedornot/:datedebut/:datefin/:userId/:ressourceID')
  async reservedornot(@Param('datedebut')datedebut:Date,@Param('datefin')datefin:Date,@Param('userId')userId:string,@Param('ressourceID')ressourceID:string){
    const isReserved = await this.reservationsService.isrecervedornnot(datedebut,datefin,userId,ressourceID);
    //return this.reservationsService.isrecervedornnot(datedebut,datefin,userId,ressourceID);
    return isReserved;

  }
  @Get('/whorecerved/:localDate/:ressourceId')
  async  whorecerved(@Param('localDate')localDate:Date,@Param('ressourceId')ressourceId:string){
    const whorecerved = await this.reservationsService.whorecerved(localDate,ressourceId);
    return whorecerved;
  }
  @Get('historique/:UserID')
  async historique(@Param('UserID')UserID:string){
    const historique = await this.reservationsService.gethistorique(UserID);
    return historique;
  }

}
