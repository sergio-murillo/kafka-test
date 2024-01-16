import { ApiProperty } from '@nestjs/swagger';
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity({
  name: 'tasks',
})
export class Task {
  @ApiProperty({
    description: 'ID of task',
    example: '89c018cc-8a77-4dbd-94e1-dbaa710a2a9c',
  })
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @ApiProperty({ description: 'Title of task' })
  @Column()
  title: string;

  @ApiProperty({ description: 'Description of task' })
  @Column()
  description: string;
}
