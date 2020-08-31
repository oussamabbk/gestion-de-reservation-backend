import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

import { userController } from './user.controller';
import { usersService } from './users.service';
import { UserSchema } from './user.model';
import {AuthModule} from '../auth/auth.module';


@Module({
  imports: [
    MongooseModule.forFeature([{ name: 'User', schema: UserSchema }]),
    AuthModule,

  ],
  controllers: [userController],
  providers: [usersService],
})
export class UsersModule {}
