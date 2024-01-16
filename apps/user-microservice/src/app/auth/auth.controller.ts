import { Controller } from '@nestjs/common';
import { MessagePattern, Payload } from '@nestjs/microservices';
import { AuthService } from './auth.service';
import { SignInDto } from './dto/sign-in.dto';
import { UserSignIn } from './dto/user-sign-in.dto';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @MessagePattern('sign_in')
  signIn(@Payload() signInDto: SignInDto): Promise<UserSignIn> {
    return this.authService.signIn(signInDto);
  }
}
