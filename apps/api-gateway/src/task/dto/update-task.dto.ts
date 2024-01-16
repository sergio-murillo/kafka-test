import { ApiProperty } from '@nestjs/swagger';
import { IsString, IsNotEmpty, IsUUID } from 'class-validator';

export class UpdateTaskDto {
  @ApiProperty({
    description: 'Id of user',
  })
  @IsUUID()
  id: string;

  @ApiProperty({
    description: 'Title of task',
  })
  @IsString()
  @IsNotEmpty()
  title: string;

  @ApiProperty({
    description: 'Description of task',
  })
  @IsString()
  @IsNotEmpty()
  description: string;
}
