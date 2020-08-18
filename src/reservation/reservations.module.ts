import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

import { userController } from './reservation.controller';
import { reservationsService } from './reservations.service';
import { reservationSchema } from './reservation.model';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: 'Reservation', schema: reservationSchema }]),
  ],
  controllers: [userController],
  providers: [reservationsService],
})
export class ReservationsModule {}
