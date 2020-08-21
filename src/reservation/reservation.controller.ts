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
    const resevations = await this.reservationsService.getusers();
    return resevations;
  }

}
