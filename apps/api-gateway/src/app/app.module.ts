import { Module } from '@nestjs/common';
import { UsersModule } from '../user/users.module';
import { TasksModule } from '../task/tasks.module';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';
import appConfig from '../common/config/app.config';
import jwtConfig from '../common/config/jwt.config';
import databaseConfig from '../common/config/database.config';
import redisConfig from '../common/config/redis.config';
import swaggerConfig from '../common/config/swagger.config';
import { validate } from 'class-validator';
import { RedisModule } from '../redis/redis.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      load: [appConfig, jwtConfig, databaseConfig, redisConfig, swaggerConfig],
      validate,
    }),
    RedisModule,
    UsersModule,
    TasksModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
