import { Inject, Injectable, OnModuleInit } from '@nestjs/common';
import { ClientKafka } from '@nestjs/microservices';
import { lastValueFrom } from 'rxjs';
import { CreateTaskDto, TaskDto, UpdateTaskDto } from './dto';

@Injectable()
export class TasksService implements OnModuleInit {
  constructor(
    @Inject('TASK_MICROSERVICE') private readonly taskClient: ClientKafka
  ) {}

  onModuleInit() {
    this.taskClient.subscribeToResponseOf('get_task_by_id');
  }

  async create(task: CreateTaskDto): Promise<void> {
    this.taskClient.emit('create_task', JSON.stringify(task));
  }

  async update(task: UpdateTaskDto): Promise<void> {
    this.taskClient.emit('update_task', JSON.stringify(task));
  }

  async delete(id: string): Promise<void> {
    this.taskClient.emit('delete_task', id);
  }

  async getById(id: string): Promise<TaskDto> {
    const observable = this.taskClient
    .send('get_task_by_id', JSON.stringify({ id }));
    return lastValueFrom(observable);
  }
}
