import { Inject, Injectable, OnModuleInit } from '@nestjs/common';
import { ClientKafka } from '@nestjs/microservices';
import { lastValueFrom } from 'rxjs';
import { CreateUserDto } from './dto/create-user.dto';
import { SignInDto } from './dto/sign-in.dto';
import { UserSignIn } from './dto/user-sign-in.dto';

@Injectable()
export class UsersService implements OnModuleInit {
  constructor(
    @Inject('USER_MICROSERVICE') private readonly userClient: ClientKafka
  ) {}

  onModuleInit() {
    this.userClient.subscribeToResponseOf('sign_in');
  }

  create(createUserDto: CreateUserDto) {
    this.userClient.emit('create_user', JSON.stringify(createUserDto));
  }

  signIn(signInDto: SignInDto): Promise<UserSignIn> {
    const observable = this.userClient
    .send('sign_in', JSON.stringify(signInDto));
    return lastValueFrom(observable);
  }
}
