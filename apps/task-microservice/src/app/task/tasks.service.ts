import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateTaskDto } from './dto/create-task.dto';
import { UpdateTaskDto } from './dto/update-task.dto';
import { TaskDto } from './dto/task.dto';
import { Task } from './entities/task.entity';

@Injectable()
export class TasksService {
  constructor(
    @InjectRepository(Task)
    private readonly taskRepository: Repository<Task>,
  ) {}

  async create(task: CreateTaskDto): Promise<void> {
    const taskEntity = this.taskRepository.create(task);
    await this.taskRepository.insert(taskEntity);
  }

  async update(id: string, task: UpdateTaskDto): Promise<void> {
    await this.taskRepository.update(id, task);
  }

  async delete(id: string): Promise<void> {
    await this.taskRepository.delete(id);
  }

  async getById(id: string): Promise<TaskDto> {
    return this.taskRepository.findOne({ where: { id } });
  }
}
