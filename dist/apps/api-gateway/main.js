/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ([
/* 0 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
const common_1 = __webpack_require__(1);
const core_1 = __webpack_require__(2);
const app_module_1 = __webpack_require__(3);
function bootstrap() {
    return __awaiter(this, void 0, void 0, function* () {
        const app = yield core_1.NestFactory.create(app_module_1.AppModule);
        const globalPrefix = 'api';
        app.setGlobalPrefix(globalPrefix);
        const port = process.env.PORT || 3333;
        yield app.listen(port);
        common_1.Logger.log(`🚀 Application is running on: http://localhost:${port}/${globalPrefix}`);
    });
}
bootstrap();


/***/ }),
/* 1 */
/***/ ((module) => {

module.exports = require("@nestjs/common");

/***/ }),
/* 2 */
/***/ ((module) => {

module.exports = require("@nestjs/core");

/***/ }),
/* 3 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.AppModule = void 0;
const common_1 = __webpack_require__(1);
const users_module_1 = __webpack_require__(4);
const tasks_module_1 = __webpack_require__(14);
const app_controller_1 = __webpack_require__(29);
const app_service_1 = __webpack_require__(30);
const config_1 = __webpack_require__(17);
const app_config_1 = __webpack_require__(31);
const jwt_config_1 = __webpack_require__(18);
const database_config_1 = __webpack_require__(32);
const redis_config_1 = __webpack_require__(33);
const swagger_config_1 = __webpack_require__(34);
const class_validator_1 = __webpack_require__(10);
const redis_module_1 = __webpack_require__(35);
let AppModule = class AppModule {
};
exports.AppModule = AppModule;
exports.AppModule = AppModule = __decorate([
    (0, common_1.Module)({
        imports: [
            config_1.ConfigModule.forRoot({
                isGlobal: true,
                load: [app_config_1.default, jwt_config_1.default, database_config_1.default, redis_config_1.default, swagger_config_1.default],
                validate: class_validator_1.validate,
            }),
            redis_module_1.RedisModule,
            users_module_1.UsersModule,
            tasks_module_1.TasksModule,
        ],
        controllers: [app_controller_1.AppController],
        providers: [app_service_1.AppService],
    })
], AppModule);


/***/ }),
/* 4 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.UsersModule = void 0;
const common_1 = __webpack_require__(1);
const microservices_1 = __webpack_require__(5);
const users_controller_1 = __webpack_require__(6);
const users_service_1 = __webpack_require__(12);
let UsersModule = class UsersModule {
};
exports.UsersModule = UsersModule;
exports.UsersModule = UsersModule = __decorate([
    (0, common_1.Module)({
        imports: [
            microservices_1.ClientsModule.register([
                {
                    name: 'USER_MICROSERVICE',
                    transport: microservices_1.Transport.KAFKA,
                    options: {
                        client: {
                            clientId: 'user',
                            brokers: ['localhost:9092'],
                        },
                        consumer: {
                            groupId: 'user-consumer',
                        },
                    },
                },
            ]),
        ],
        providers: [users_service_1.UsersService],
        controllers: [users_controller_1.UsersController],
    })
], UsersModule);


/***/ }),
/* 5 */
/***/ ((module) => {

module.exports = require("@nestjs/microservices");

/***/ }),
/* 6 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var _a, _b, _c, _d, _e;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.UsersController = void 0;
const common_1 = __webpack_require__(1);
const swagger_1 = __webpack_require__(7);
const public_decorator_1 = __webpack_require__(8);
const create_user_dto_1 = __webpack_require__(9);
const sign_in_dto_1 = __webpack_require__(11);
const users_service_1 = __webpack_require__(12);
let UsersController = class UsersController {
    constructor(usersService) {
        this.usersService = usersService;
    }
    create(user) {
        return __awaiter(this, void 0, void 0, function* () {
            this.usersService.create(user);
        });
    }
    signIn(signInDto) {
        return this.usersService.signIn(signInDto);
    }
};
exports.UsersController = UsersController;
__decorate([
    (0, swagger_1.ApiOkResponse)({ description: 'User created' }),
    (0, public_decorator_1.Public)(),
    (0, common_1.Post)(),
    (0, common_1.HttpCode)(common_1.HttpStatus.OK),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [typeof (_b = typeof create_user_dto_1.CreateUserDto !== "undefined" && create_user_dto_1.CreateUserDto) === "function" ? _b : Object]),
    __metadata("design:returntype", typeof (_c = typeof Promise !== "undefined" && Promise) === "function" ? _c : Object)
], UsersController.prototype, "create", null);
__decorate([
    (0, swagger_1.ApiOkResponse)({ description: 'User has been successfully signed in' }),
    (0, common_1.HttpCode)(common_1.HttpStatus.OK),
    (0, public_decorator_1.Public)(),
    (0, common_1.Post)('sign-in'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [typeof (_d = typeof sign_in_dto_1.SignInDto !== "undefined" && sign_in_dto_1.SignInDto) === "function" ? _d : Object]),
    __metadata("design:returntype", typeof (_e = typeof Promise !== "undefined" && Promise) === "function" ? _e : Object)
], UsersController.prototype, "signIn", null);
exports.UsersController = UsersController = __decorate([
    (0, swagger_1.ApiTags)('users'),
    (0, common_1.Controller)('users'),
    __metadata("design:paramtypes", [typeof (_a = typeof users_service_1.UsersService !== "undefined" && users_service_1.UsersService) === "function" ? _a : Object])
], UsersController);


/***/ }),
/* 7 */
/***/ ((module) => {

module.exports = require("@nestjs/swagger");

/***/ }),
/* 8 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Public = void 0;
const common_1 = __webpack_require__(1);
const Public = () => (0, common_1.SetMetadata)('isPublic', true);
exports.Public = Public;


/***/ }),
/* 9 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.CreateUserDto = void 0;
const swagger_1 = __webpack_require__(7);
const class_validator_1 = __webpack_require__(10);
class CreateUserDto {
}
exports.CreateUserDto = CreateUserDto;
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Email of user',
    }),
    (0, class_validator_1.IsEmail)(),
    (0, class_validator_1.MaxLength)(255),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], CreateUserDto.prototype, "email", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Name of user',
    }),
    (0, class_validator_1.MaxLength)(255),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], CreateUserDto.prototype, "name", void 0);


/***/ }),
/* 10 */
/***/ ((module) => {

module.exports = require("class-validator");

/***/ }),
/* 11 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.SignInDto = void 0;
const swagger_1 = __webpack_require__(7);
const class_validator_1 = __webpack_require__(10);
class SignInDto {
}
exports.SignInDto = SignInDto;
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Email of user',
        example: 'atest@email.com',
    }),
    (0, class_validator_1.IsEmail)(),
    (0, class_validator_1.MaxLength)(255),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], SignInDto.prototype, "email", void 0);


/***/ }),
/* 12 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var _a;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.UsersService = void 0;
const common_1 = __webpack_require__(1);
const microservices_1 = __webpack_require__(5);
const rxjs_1 = __webpack_require__(13);
let UsersService = class UsersService {
    constructor(userClient) {
        this.userClient = userClient;
    }
    create(createUserDto) {
        this.userClient.emit('create_user', JSON.stringify(createUserDto));
    }
    signIn(signInDto) {
        const observable = this.userClient
            .send('sign_in', JSON.stringify(signInDto));
        return (0, rxjs_1.lastValueFrom)(observable);
    }
};
exports.UsersService = UsersService;
exports.UsersService = UsersService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, common_1.Inject)('USER_MICROSERVICE')),
    __metadata("design:paramtypes", [typeof (_a = typeof microservices_1.ClientKafka !== "undefined" && microservices_1.ClientKafka) === "function" ? _a : Object])
], UsersService);


/***/ }),
/* 13 */
/***/ ((module) => {

module.exports = require("rxjs");

/***/ }),
/* 14 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.TasksModule = void 0;
const common_1 = __webpack_require__(1);
const core_1 = __webpack_require__(2);
const jwt_1 = __webpack_require__(15);
const microservices_1 = __webpack_require__(5);
const jwt_auth_guard_1 = __webpack_require__(16);
const jwt_config_1 = __webpack_require__(18);
const tasks_controller_1 = __webpack_require__(23);
const tasks_service_1 = __webpack_require__(28);
let TasksModule = class TasksModule {
};
exports.TasksModule = TasksModule;
exports.TasksModule = TasksModule = __decorate([
    (0, common_1.Module)({
        imports: [
            microservices_1.ClientsModule.register([
                {
                    name: 'TASK_MICROSERVICE',
                    transport: microservices_1.Transport.KAFKA,
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
            jwt_1.JwtModule.registerAsync(jwt_config_1.default.asProvider()),
        ],
        providers: [
            tasks_service_1.TasksService,
            {
                provide: core_1.APP_GUARD,
                useClass: jwt_auth_guard_1.JwtAuthGuard,
            },
        ],
        controllers: [tasks_controller_1.TasksController],
    })
], TasksModule);


/***/ }),
/* 15 */
/***/ ((module) => {

module.exports = require("@nestjs/jwt");

/***/ }),
/* 16 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var _a, _b, _c, _d;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.JwtAuthGuard = void 0;
const common_1 = __webpack_require__(1);
const config_1 = __webpack_require__(17);
const core_1 = __webpack_require__(2);
const jwt_1 = __webpack_require__(15);
const jwt_config_1 = __webpack_require__(18);
const constants_1 = __webpack_require__(19);
const redis_service_1 = __webpack_require__(20);
let JwtAuthGuard = class JwtAuthGuard {
    constructor(jwtConfiguration, jwtService, redisService, reflector) {
        this.jwtConfiguration = jwtConfiguration;
        this.jwtService = jwtService;
        this.redisService = redisService;
        this.reflector = reflector;
    }
    canActivate(context) {
        return __awaiter(this, void 0, void 0, function* () {
            const isPublic = this.reflector.getAllAndOverride('isPublic', [
                context.getHandler(),
                context.getClass(),
            ]);
            if (isPublic) {
                return true;
            }
            const request = context.switchToHttp().getRequest();
            const token = this.getToken(request);
            if (!token) {
                throw new common_1.UnauthorizedException('Authorization token is required');
            }
            try {
                const payload = yield this.jwtService.verifyAsync(token, this.jwtConfiguration);
                const isValidToken = yield this.redisService.validate(`user-${payload.id}`, payload.tokenId);
                if (!isValidToken) {
                    throw new common_1.UnauthorizedException('Authorization token is not valid');
                }
                request[constants_1.REQUEST_USER_KEY] = payload;
            }
            catch (error) {
                throw new common_1.UnauthorizedException(error.message);
            }
            return true;
        });
    }
    getToken(request) {
        var _a, _b;
        const [_, token] = (_b = (_a = request.headers.authorization) === null || _a === void 0 ? void 0 : _a.split(' ')) !== null && _b !== void 0 ? _b : [];
        return token;
    }
};
exports.JwtAuthGuard = JwtAuthGuard;
exports.JwtAuthGuard = JwtAuthGuard = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, common_1.Inject)(jwt_config_1.default.KEY)),
    __metadata("design:paramtypes", [typeof (_a = typeof config_1.ConfigType !== "undefined" && config_1.ConfigType) === "function" ? _a : Object, typeof (_b = typeof jwt_1.JwtService !== "undefined" && jwt_1.JwtService) === "function" ? _b : Object, typeof (_c = typeof redis_service_1.RedisService !== "undefined" && redis_service_1.RedisService) === "function" ? _c : Object, typeof (_d = typeof core_1.Reflector !== "undefined" && core_1.Reflector) === "function" ? _d : Object])
], JwtAuthGuard);


/***/ }),
/* 17 */
/***/ ((module) => {

module.exports = require("@nestjs/config");

/***/ }),
/* 18 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
const config_1 = __webpack_require__(17);
exports["default"] = (0, config_1.registerAs)('jwt', () => {
    return {
        secret: process.env.JWT_SECRET,
        accessTokenTtl: process.env.JWT_ACCESS_TOKEN_TTL,
    };
});


/***/ }),
/* 19 */
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.REQUEST_USER_KEY = void 0;
exports.REQUEST_USER_KEY = 'user';


/***/ }),
/* 20 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var _a;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.RedisService = void 0;
const common_1 = __webpack_require__(1);
const ioredis_1 = __webpack_require__(21);
const redis_constants_1 = __webpack_require__(22);
let RedisService = class RedisService {
    constructor(redisClient) {
        this.redisClient = redisClient;
    }
    getKeys(pattern) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.redisClient.keys(pattern);
        });
    }
    insert(key, value) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.redisClient.set(key, value);
        });
    }
    get(key) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.redisClient.get(key);
        });
    }
    delete(key) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.redisClient.del(key);
        });
    }
    validate(key, value) {
        return __awaiter(this, void 0, void 0, function* () {
            const storedValue = yield this.redisClient.get(key);
            return storedValue === value;
        });
    }
};
exports.RedisService = RedisService;
exports.RedisService = RedisService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, common_1.Inject)(redis_constants_1.IORedisKey)),
    __metadata("design:paramtypes", [typeof (_a = typeof ioredis_1.Redis !== "undefined" && ioredis_1.Redis) === "function" ? _a : Object])
], RedisService);


/***/ }),
/* 21 */
/***/ ((module) => {

module.exports = require("ioredis");

/***/ }),
/* 22 */
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.IORedisKey = void 0;
exports.IORedisKey = 'IORedis';


/***/ }),
/* 23 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var _a, _b, _c, _d, _e, _f, _g;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.TasksController = void 0;
const common_1 = __webpack_require__(1);
const swagger_1 = __webpack_require__(7);
const dto_1 = __webpack_require__(24);
const tasks_service_1 = __webpack_require__(28);
let TasksController = class TasksController {
    constructor(tasksService) {
        this.tasksService = tasksService;
    }
    create(task) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.tasksService.create(task);
        });
    }
    update(id, task) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.tasksService.update(task);
        });
    }
    delete(id) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.tasksService.delete(id);
        });
    }
    getByIf(id) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.tasksService.getById(id);
        });
    }
};
exports.TasksController = TasksController;
__decorate([
    (0, swagger_1.ApiOkResponse)({ description: 'Task created' }),
    (0, swagger_1.ApiBearerAuth)(),
    (0, common_1.Post)(),
    (0, common_1.HttpCode)(common_1.HttpStatus.OK),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [typeof (_b = typeof dto_1.CreateTaskDto !== "undefined" && dto_1.CreateTaskDto) === "function" ? _b : Object]),
    __metadata("design:returntype", typeof (_c = typeof Promise !== "undefined" && Promise) === "function" ? _c : Object)
], TasksController.prototype, "create", null);
__decorate([
    (0, swagger_1.ApiOkResponse)({ description: 'Task updated' }),
    (0, swagger_1.ApiBearerAuth)(),
    (0, common_1.Patch)(),
    (0, common_1.HttpCode)(common_1.HttpStatus.OK),
    __param(0, (0, common_1.Param)()),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, typeof (_d = typeof dto_1.UpdateTaskDto !== "undefined" && dto_1.UpdateTaskDto) === "function" ? _d : Object]),
    __metadata("design:returntype", typeof (_e = typeof Promise !== "undefined" && Promise) === "function" ? _e : Object)
], TasksController.prototype, "update", null);
__decorate([
    (0, swagger_1.ApiOkResponse)({ description: 'Task removed' }),
    (0, swagger_1.ApiBearerAuth)(),
    (0, common_1.Delete)(),
    (0, common_1.HttpCode)(common_1.HttpStatus.OK),
    __param(0, (0, common_1.Param)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", typeof (_f = typeof Promise !== "undefined" && Promise) === "function" ? _f : Object)
], TasksController.prototype, "delete", null);
__decorate([
    (0, swagger_1.ApiOkResponse)({ description: 'Task found' }),
    (0, swagger_1.ApiBearerAuth)(),
    (0, common_1.Get)(),
    (0, common_1.HttpCode)(common_1.HttpStatus.OK),
    __param(0, (0, common_1.Param)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", typeof (_g = typeof Promise !== "undefined" && Promise) === "function" ? _g : Object)
], TasksController.prototype, "getByIf", null);
exports.TasksController = TasksController = __decorate([
    (0, swagger_1.ApiTags)('tasks'),
    (0, common_1.Controller)('tasks'),
    __metadata("design:paramtypes", [typeof (_a = typeof tasks_service_1.TasksService !== "undefined" && tasks_service_1.TasksService) === "function" ? _a : Object])
], TasksController);


/***/ }),
/* 24 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
__exportStar(__webpack_require__(25), exports);
__exportStar(__webpack_require__(26), exports);
__exportStar(__webpack_require__(27), exports);


/***/ }),
/* 25 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.CreateTaskDto = void 0;
const swagger_1 = __webpack_require__(7);
const class_validator_1 = __webpack_require__(10);
class CreateTaskDto {
}
exports.CreateTaskDto = CreateTaskDto;
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Title of task',
    }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], CreateTaskDto.prototype, "title", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Description of task',
    }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], CreateTaskDto.prototype, "description", void 0);


/***/ }),
/* 26 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.TaskDto = void 0;
const swagger_1 = __webpack_require__(7);
const class_validator_1 = __webpack_require__(10);
class TaskDto {
}
exports.TaskDto = TaskDto;
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Id of user',
    }),
    (0, class_validator_1.IsUUID)(),
    __metadata("design:type", String)
], TaskDto.prototype, "id", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Title of task',
    }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], TaskDto.prototype, "title", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Description of task',
    }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], TaskDto.prototype, "description", void 0);


/***/ }),
/* 27 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.UpdateTaskDto = void 0;
const swagger_1 = __webpack_require__(7);
const class_validator_1 = __webpack_require__(10);
class UpdateTaskDto {
}
exports.UpdateTaskDto = UpdateTaskDto;
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Id of user',
    }),
    (0, class_validator_1.IsUUID)(),
    __metadata("design:type", String)
], UpdateTaskDto.prototype, "id", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Title of task',
    }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], UpdateTaskDto.prototype, "title", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Description of task',
    }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], UpdateTaskDto.prototype, "description", void 0);


/***/ }),
/* 28 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var _a;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.TasksService = void 0;
const common_1 = __webpack_require__(1);
const microservices_1 = __webpack_require__(5);
const rxjs_1 = __webpack_require__(13);
let TasksService = class TasksService {
    constructor(taskClient) {
        this.taskClient = taskClient;
    }
    create(task) {
        return __awaiter(this, void 0, void 0, function* () {
            this.taskClient.emit('create_task', JSON.stringify(task));
        });
    }
    update(task) {
        return __awaiter(this, void 0, void 0, function* () {
            this.taskClient.emit('update_task', JSON.stringify(task));
        });
    }
    delete(id) {
        return __awaiter(this, void 0, void 0, function* () {
            this.taskClient.emit('delete_task', id);
        });
    }
    getById(id) {
        return __awaiter(this, void 0, void 0, function* () {
            const observable = this.taskClient
                .send('get_task_by_id', JSON.stringify({ id }));
            return (0, rxjs_1.lastValueFrom)(observable);
        });
    }
};
exports.TasksService = TasksService;
exports.TasksService = TasksService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, common_1.Inject)('TASK_MICROSERVICE')),
    __metadata("design:paramtypes", [typeof (_a = typeof microservices_1.ClientKafka !== "undefined" && microservices_1.ClientKafka) === "function" ? _a : Object])
], TasksService);


/***/ }),
/* 29 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var _a;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.AppController = void 0;
const common_1 = __webpack_require__(1);
const app_service_1 = __webpack_require__(30);
let AppController = class AppController {
    constructor(appService) {
        this.appService = appService;
    }
    getData() {
        return this.appService.getData();
    }
};
exports.AppController = AppController;
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], AppController.prototype, "getData", null);
exports.AppController = AppController = __decorate([
    (0, common_1.Controller)(),
    __metadata("design:paramtypes", [typeof (_a = typeof app_service_1.AppService !== "undefined" && app_service_1.AppService) === "function" ? _a : Object])
], AppController);


/***/ }),
/* 30 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.AppService = void 0;
const common_1 = __webpack_require__(1);
let AppService = class AppService {
    getData() {
        return { message: 'Welcome to api-gateway!' };
    }
};
exports.AppService = AppService;
exports.AppService = AppService = __decorate([
    (0, common_1.Injectable)()
], AppService);


/***/ }),
/* 31 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
const config_1 = __webpack_require__(17);
exports["default"] = (0, config_1.registerAs)('app', () => {
    return {
        nodeEnv: process.env.NODE_ENV || 'development',
        port: parseInt(process.env.PORT, 10) || 3000,
    };
});


/***/ }),
/* 32 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
const config_1 = __webpack_require__(17);
exports["default"] = (0, config_1.registerAs)('database', () => {
    return {
        type: 'sqlite',
        host: process.env.DB_HOST || 'localhost',
        port: parseInt(process.env.DB_PORT, 10) || 5432,
        username: process.env.DB_USER,
        password: process.env.DB_PASSWORD,
        name: process.env.DB_NAME,
    };
});


/***/ }),
/* 33 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
const config_1 = __webpack_require__(17);
exports["default"] = (0, config_1.registerAs)('redis', () => {
    return Object.assign(Object.assign({ host: process.env.REDIS_HOST, port: parseInt(process.env.REDIS_PORT, 10) || 6379, db: parseInt(process.env.REDIS_DATABASE, 10), keyPrefix: process.env.REDIS_KEY_PREFIX + ':' }, (process.env.REDIS_USERNAME && {
        username: process.env.REDIS_USERNAME,
    })), (process.env.REDIS_PASSWORD && {
        password: process.env.REDIS_PASSWORD,
    }));
});


/***/ }),
/* 34 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
const config_1 = __webpack_require__(17);
exports["default"] = (0, config_1.registerAs)('swagger', () => {
    return {
        siteTitle: process.env.SWAGGER_SITE_TITLE,
        docTitle: process.env.SWAGGER_DOC_TITLE,
        docDescription: process.env.SWAGGER_DOC_DESCRIPTION,
        docVersion: process.env.SWAGGER_DOC_VERSION,
    };
});


/***/ }),
/* 35 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var _a;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.RedisModule = void 0;
const common_1 = __webpack_require__(1);
const config_1 = __webpack_require__(17);
const core_1 = __webpack_require__(2);
const ioredis_1 = __webpack_require__(21);
const redis_constants_1 = __webpack_require__(22);
const redis_service_1 = __webpack_require__(20);
let RedisModule = class RedisModule {
    constructor(moduleRef) {
        this.moduleRef = moduleRef;
    }
    onApplicationShutdown(signal) {
        return __awaiter(this, void 0, void 0, function* () {
            return new Promise((resolve) => {
                const redis = this.moduleRef.get(redis_constants_1.IORedisKey);
                redis.quit();
                redis.on('end', () => {
                    resolve();
                });
            });
        });
    }
};
exports.RedisModule = RedisModule;
exports.RedisModule = RedisModule = __decorate([
    (0, common_1.Global)(),
    (0, common_1.Module)({
        imports: [config_1.ConfigModule],
        providers: [
            {
                provide: redis_constants_1.IORedisKey,
                useFactory: (configService) => __awaiter(void 0, void 0, void 0, function* () {
                    return new ioredis_1.Redis(configService.get('redis'));
                }),
                inject: [config_1.ConfigService],
            },
            redis_service_1.RedisService,
        ],
        exports: [redis_service_1.RedisService],
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof core_1.ModuleRef !== "undefined" && core_1.ModuleRef) === "function" ? _a : Object])
], RedisModule);


/***/ })
/******/ 	]);
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	var __webpack_exports__ = __webpack_require__(0);
/******/ 	var __webpack_export_target__ = exports;
/******/ 	for(var i in __webpack_exports__) __webpack_export_target__[i] = __webpack_exports__[i];
/******/ 	if(__webpack_exports__.__esModule) Object.defineProperty(__webpack_export_target__, "__esModule", { value: true });
/******/ 	
/******/ })()
;