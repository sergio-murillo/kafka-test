import { ApiProperty } from '@nestjs/swagger';
import { IsString } from 'class-validator';
import { UserDto } from './user.dto';

export class UserSignIn extends UserDto {
  @ApiProperty({
    description: 'Id of user',
  })
  @IsString()
  accessToken: string;
}
