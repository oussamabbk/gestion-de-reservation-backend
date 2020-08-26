import {
  Controller,
  Post,
  Body,
  Get,
  Param,
  Patch,
  Delete, UsePipes,
} from '@nestjs/common';
import { ressoucesService } from './ressouces.service';

@Controller('ressources')
export class ressoucesController {
  constructor(private readonly ReservationsService: ressoucesService) {}
  @Post()
  async addProduct(
    @Body('Model') Model: string,
    @Body('Refernces') Refernces: string,
    @Body('platform') platform: string,
    @Body('osversion') osversion: string,
    @Body('datedebut') datedebut: Date,
    @Body('datefin') datefin: Date,
    @Body('reserve') reserve: boolean,
    @Body('userId') userId: string,

  ) {


    const generatedId = await this.ReservationsService.insertreservation( Model,Refernces,platform,osversion,datedebut,datefin,reserve,userId);
    return { id: generatedId };
  }
  @Get()
  async getAllreservation() {
    const reservation = await this.ReservationsService.getreservation();
    return reservation;
  }
  @Get('singleressource/:ressourceID')
  async getressourceswithId(@Param('ressourceID')ressourceID:string){
    const reservation = await this.ReservationsService.getressourcewithId(ressourceID);
    return reservation;
  }




}


