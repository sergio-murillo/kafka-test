export = {
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
    migrationsDir: 'apps/user-microservice/src/app/migration',
  },
  entities: ['apps/user-microservice/**/*.entity.ts'],
  migrations: ['apps/user-microservice/src/app/migration/*.js'],
};
