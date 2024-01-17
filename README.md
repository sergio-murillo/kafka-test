# AppSocado API
Proyecto monorepo para APPSocado



## Technologies stack:

- JWT
- TypeORM + SQLite
- Redis
- Kafka
- Docker
- NX

## Setup

### Se levanta el contenedor junto con todas sus imágenes:
```bash
$ npm run docker:up
```
### En caso de querer bajar el contenedor se puede ejecutar:
```bash
$ npm run docker:down
```

### Luego se levantan los microservicios
```bash
$ npm start
$ npm run start user-microservice
$ npm run start task-microservice
```

### Finalmente se pueden acceder los servicios por algun cliente o por Swagger accediendo a http://localhost:3003/docs
