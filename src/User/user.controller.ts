import {
  Controller,
  Post,
  Body,
  Get,
  Param,
  Patch,
  Delete, UsePipes,
} from '@nestjs/common';
import { usersService } from './users.service';

@Controller('user')
export class userController {
  constructor(private readonly usersService: usersService) {}
  @Post()
  async addProduct(
    @Body('email') email: string,
    @Body('password') password: string,

  ) {
    const generatedId = await this.usersService.insertuser(
      email,
      password,

    );
    return { id: generatedId };
  }

  @Get()
  async getAllProducts() {
    const users = await this.usersService.getusers();
    return users;
  }

  @Get(':id')
  getProduct(@Param('id') userId: string) {
    return this.usersService.getSingleuser(userId);
  }

  @Get('/authentification/:email/:password')
  authentification(@Param('email')email:string,@Param('password')password:string){
    return this.usersService.authentifcation(email,password);
  }
  @Post('/findId/:email/:password')
  findID(@Param('email')email:string,@Param('password')password:string){
    return this.usersService.findId(email,password);
  }



}


