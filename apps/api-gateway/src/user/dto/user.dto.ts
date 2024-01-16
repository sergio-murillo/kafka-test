import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsNotEmpty, MaxLength, IsUUID } from 'class-validator';

export class UserDto {
  @ApiProperty({
    description: 'Id of user',
  })
  @IsUUID()
  id: string;

  @ApiProperty({
    description: 'Email of user',
  })
  @IsEmail()
  @MaxLength(255)
  @IsNotEmpty()
  email: string;

  @ApiProperty({
    description: 'Name of user',
  })
  @MaxLength(255)
  @IsNotEmpty()
  name: string;
}
