import { ReservationController } from './reservation.controller';
import { reservationsService } from './reservations.service';
import { reservationSchema } from './reservation.model';
import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
@Module({
  imports: [
    MongooseModule.forFeature([{ name: 'Reservation', schema: reservationSchema }]),
  ],
  controllers: [ReservationController],
  providers: [reservationsService],
})
export class ReservationsModule {}
