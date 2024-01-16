export =  {
  type: 'sqlite',
  host: process.env.DB_HOST || 'sqlite',
  port: parseInt(process.env.DB_PORT, 10) || 5432,
  username: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  autoLoadEntities: true,
  synchronize: true,
  logging: false,
  cli: {
    migrationsDir: 'apps/task-microservice/src/app/migration',
  },
  entities: ['apps/task-microservice/**/*.entity.ts'],
  migrations: ['apps/task-microservice/src/app/migration/*.js'],
};
