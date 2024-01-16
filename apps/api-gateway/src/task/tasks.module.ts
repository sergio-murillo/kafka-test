import { Module } from '@nestjs/common';
import { APP_GUARD } from '@nestjs/core';
import { JwtModule } from '@nestjs/jwt';
import { ClientsModule, Transport } from '@nestjs/microservices';
import { JwtAuthGuard } from '../auth/guards/jwt-auth.guard';
import jwtConfig from '../common/config/jwt.config';
import { TasksController } from './tasks.controller';
import { TasksService } from './tasks.service';

@Module({
  imports: [
    ClientsModule.register([
      {
        name: 'TASK_MICROSERVICE',
        transport: Transport.KAFKA,
        options: {
          client: {
            clientId: 'task',
            brokers: ['localhost:9092'],
          },
          consumer: {
            groupId: 'task-consumer',
          },
        },
      },
    ]),
    JwtModule.registerAsync(jwtConfig.asProvider()),
  ],
  providers: [
    TasksService,
    {
      provide: APP_GUARD,
      useClass: JwtAuthGuard,
    },
  ],
  controllers: [TasksController],
})
export class TasksModule {}
