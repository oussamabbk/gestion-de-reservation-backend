import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import {MongooseModule} from '@nestjs/mongoose'
import { UsersModule } from './User/users.module';
@Module({
  imports:
[
  UsersModule,
  MongooseModule.forRoot('mongodb+srv://gestionreservation:3UUO6gj5WL6gLlGC@gestion-de-reservation.wqqgw.mongodb.net/test?retryWrites=true&w=majority')],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
