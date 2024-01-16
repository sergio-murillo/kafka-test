import { Controller,} from '@nestjs/common';
import { EventPattern } from '@nestjs/microservices';
import { ApiTags } from '@nestjs/swagger';
import { CreateUserDto } from './dto/create-user.dto';
import { UsersService } from './users.service';

@ApiTags('users')
@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @EventPattern('create_user')
  async create(user: CreateUserDto): Promise<void> {
    await this.usersService.create(user);
  }
}
