import { Body, Controller, Delete, Get, HttpCode, HttpStatus, Param, Patch, Post } from '@nestjs/common';
import { ApiBearerAuth, ApiOkResponse, ApiTags } from '@nestjs/swagger';
import { CreateTaskDto, TaskDto, UpdateTaskDto } from './dto';
import { TasksService } from './tasks.service';

@ApiTags('tasks')
@Controller('tasks')
export class TasksController {
  constructor(private readonly tasksService: TasksService) {}

  @ApiOkResponse({ description: 'Task created' })
  @ApiBearerAuth()
  @Post()
  @HttpCode(HttpStatus.OK)
  async create(@Body() task: CreateTaskDto): Promise<void> {
    await this.tasksService.create(task);
  }

  @ApiOkResponse({ description: 'Task updated' })
  @ApiBearerAuth()
  @Patch()
  @HttpCode(HttpStatus.OK)
  async update(
    @Param() id: string,
    @Body() task: UpdateTaskDto,
  ): Promise<void> {
    await this.tasksService.update(task);
  }

  @ApiOkResponse({ description: 'Task removed' })
  @ApiBearerAuth()
  @Delete()
  @HttpCode(HttpStatus.OK)
  async delete(@Param() id: string): Promise<void> {
    await this.tasksService.delete(id);
  }

  @ApiOkResponse({ description: 'Task found' })
  @ApiBearerAuth()
  @Get()
  @HttpCode(HttpStatus.OK)
  async getByIf(@Param() id: string): Promise<TaskDto> {
    return this.tasksService.getById(id);
  }
}
