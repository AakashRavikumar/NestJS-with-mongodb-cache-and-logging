"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const common_1 = require("@nestjs/common");
const app_controller_1 = require("./app.controller");
const app_service_1 = require("./app.service");
const city_population_module_1 = require("./city_population/city_population.module");
const mongoose_1 = require("@nestjs/mongoose");
const nestjs_pino_1 = require("nestjs-pino");
const cache_manager_1 = require("@nestjs/cache-manager");
const cache_manager_redis_store_1 = require("cache-manager-redis-store");
let AppModule = class AppModule {
};
exports.AppModule = AppModule;
exports.AppModule = AppModule = __decorate([
    (0, common_1.Module)({
        imports: [
            mongoose_1.MongooseModule.forRoot('mongodb://localhost:27017/city-info-management'),
            cache_manager_1.CacheModule.registerAsync({
                useFactory: async () => ({
                    store: cache_manager_redis_store_1.redisStore,
                    host: 'localhost',
                    port: 6379,
                    ttl: 60 * 60 * 1000,
                }),
                isGlobal: true,
            }),
            nestjs_pino_1.LoggerModule.forRoot({
                pinoHttp: {
                    transport: {
                        target: 'pino-pretty',
                        options: {
                            translateTime: 'SYS:standard',
                            ignore: 'pid,hostname',
                            colorize: true,
                        },
                    },
                    level: 'info',
                    autoLogging: true,
                },
            }),
            city_population_module_1.CityPopulationModule,
        ],
        controllers: [app_controller_1.AppController],
        providers: [app_service_1.AppService],
    })
], AppModule);
//# sourceMappingURL=app.module.js.map