import { Module } from '@nestjs/common';
import {JwtModule} from '@nestjs/jwt';
import { ConfigModule, ConfigService } from '@nestjs/config';
import {authService} from './authService';

@Module({
  imports:[
  JwtModule.registerAsync({
    imports:[ConfigModule],
    inject:[ConfigService],
    useFactory: async (configService: ConfigService)=>({
      secret: configService.get('JWT_secret'),
      signOptions:{expiresIn:'100s'}
    })
  })
  ],
  providers:[authService],
  exports:[authService]





})
export class AuthModule {}
