import { registerAs } from '@nestjs/config';

export default registerAs('database', () => {
  return {
    type: 'sqlite',
    database: 'database/db',
  };
});
