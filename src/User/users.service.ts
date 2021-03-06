
import { Dependencies, Injectable, NotFoundException, Inject, forwardRef } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { user, UserSchema } from './user.model';
import { authService } from '../auth/authService'
import { map } from 'rxjs/operators';

@Injectable()
@Dependencies(InjectModel(UserSchema))
export class usersService {
  constructor(
    @Inject(forwardRef(() => authService)) private authService: authService,
    @InjectModel('User') private readonly userModel: Model<user>


  ) { }

  async insertuser(email: string, password: string) {
    const newuser = new this.userModel({
      email,
      password: password,

    });
    const result = await newuser.save();
    return result.id as string;
  }

  async getusers() {
    const users = await this.userModel.find().exec();
    return users.map(user => ({
      id: user.id,
      email: user.email,
      password: user.password,

    }));
  }

  async getSingleuser(userId: string) {
    const user = await this.findProduct(userId);
    return {
      id: user.id,
      email: user.email,
      password: user.password,
    };
  }

  private async findProduct(id: string): Promise<user> {
    let user;
    try {
      user = await this.userModel.findById(id).exec();
    } catch (error) {
      throw new NotFoundException('Could not find product.');
    }
    if (!user) {
      throw new NotFoundException('Could not find product.');
    }
    return user;
  }

  async authentifcation(email: string, password: string) {
    const regexpEmail = new RegExp('^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$');
    if (regexpEmail.test(email)) {
      const users = await this.userModel.find().exec();
      for (let i = 0; i < users.length; i++) {
        if (users[i].email == email && users[i].password == password) {
          return this.authService.generateJWT(users[i]).pipe(map((jwt: string) => jwt))
          // return users[i];
        } else {
          return "wrong"
        }
      }
    } else {
      return "email not valid "
    }
  }

  async findId(email: string, password: string) {
    const users = await this.userModel.find().exec();
    for (let i = 0; i < users.length; i++) {
      if (users[i].email == email && users[i].password == password) {
        return "" + users[i].id;
      }
    }
  }



}
