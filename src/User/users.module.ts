import { userController } from './user.controller';

import { Module, forwardRef } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

import { usersService } from './users.service';
import { UserSchema } from './user.model';
import { AuthModule } from '../auth/auth.module';


@Module({
  imports: [
    forwardRef(() => AuthModule),
    MongooseModule.forFeature([{ name: 'User', schema: UserSchema }]),
  ],
  controllers: [userController],
  providers: [usersService],
})
export class UsersModule { }
