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

@Controller('reservation')
export class userController {
  constructor(private readonly ReservationsService: reservationsService) {}
  @Post()
  async addProduct(
    @Body('Date') date: string,
    @Body('datedebut') datedebut: number,
    @Body('datefin') datefin: number,
    @Body('numerode') numerode: number,
    @Body('Description') Description: string,

  ) {
    const date1 = new Date('2017-03-07T10:00:00');

    const generatedId = await this.ReservationsService.insertreservation(date1,datedebut,datefin,numerode,Description);
    return { id: generatedId };
  }
  @Get()
  async getAllreservation() {
    const reservation = await this.ReservationsService.getreservation();
    return reservation
      ;
  }




}


