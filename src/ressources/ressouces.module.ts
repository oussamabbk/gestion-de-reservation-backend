import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

import { ressoucesController } from './ressouces.controller';
import { ressoucesService } from './ressouces.service';
import { RessoucesSchema } from './ressouce.model';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: 'ressouces', schema: RessoucesSchema }]),
  ],
  controllers: [ressoucesController],
  providers: [ressoucesService],
})
export class RessoucesModule {}
