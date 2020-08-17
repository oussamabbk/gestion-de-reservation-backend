import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

import { userController } from './user.controller';
import { usersService } from './users.service';
import { UserSchema } from './user.model';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: 'User', schema: UserSchema }]),
  ],
  controllers: [userController],
  providers: [usersService],
})
export class UsersModule {}
