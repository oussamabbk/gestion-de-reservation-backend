import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import {MongooseModule} from '@nestjs/mongoose'
import { UsersModule } from './User/users.module';
import {RessoucesModule} from './ressources/ressouces.module';
import {ReservationsModule} from './reservation/reservations.module'
@Module({
  imports:
[
  ReservationsModule,
  UsersModule,
  RessoucesModule,
  MongooseModule.forRoot('mongodb://gestionreservation:xO2eSQEEPDqQ894C@gestion-de-reservation-shard-00-00.wqqgw.mongodb.net:27017,gestion-de-reservation-shard-00-01.wqqgw.mongodb.net:27017,gestion-de-reservation-shard-00-02.wqqgw.mongodb.net:27017/test?ssl=true&replicaSet=atlas-k2fxck-shard-0&authSource=admin&retryWrites=true&w=majority')],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
