import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: async (configService: ConfigService) => ({
        type: 'sqlite',
        host: configService.get<string>('database.host'),
        port: configService.get<number>('database.port'),
        username: configService.get<string>('database.username'),
        password: configService.get<string>('database.password'),
        database: configService.get<string>('database.name'),
        autoLoadEntities: true,
        synchronize: true,
        logging: false,
        cli: {
          migrationsDir: 'apps/user-microservice/src/app/migration',
        },
        entities: ['apps/user-microservice/**/*.entity.ts'],
        migrations: ['apps/user-microservice/src/app/migration/*.js'],
      }),
    }),
  ],
})
export class DatabaseModule {}
