import { Body, Controller, Param } from '@nestjs/common';
import { EventPattern, MessagePattern, Payload } from '@nestjs/microservices';
import { CreateTaskDto, TaskDto, UpdateTaskDto } from './dto';
import { TasksService } from './tasks.service';

@Controller('tasks')
export class TasksController {
  constructor(private readonly tasksService: TasksService) {}

  @EventPattern('create_task')
  async create(@Payload() task: CreateTaskDto): Promise<void> {
    await this.tasksService.create(task);
  }

  @EventPattern('update_task')
  async update(@Payload() task: UpdateTaskDto): Promise<void> {
    await this.tasksService.update(task.id, task);
  }

  @EventPattern('delete_task')
  async delete(@Payload() id: string): Promise<void> {
    await this.tasksService.delete(id);
  }

  @MessagePattern('get_task_by_id')
  async getById(@Payload() id: string): Promise<TaskDto> {
    return this.tasksService.getById(id);
  }
}
