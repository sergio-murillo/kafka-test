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
        database: configService.get<string>('database.database'),
        autoLoadEntities: true,
        synchronize: true,
        logging: false,
      }),
    }),
  ],
})
export class DatabaseModule {}
