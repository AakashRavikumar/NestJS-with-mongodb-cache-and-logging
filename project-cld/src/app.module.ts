/* eslint-disable @typescript-eslint/require-await */
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CityPopulationModule } from './city_population/city_population.module';
import { MongooseModule } from '@nestjs/mongoose';
import { LoggerModule } from 'nestjs-pino';
import { CacheModule } from '@nestjs/cache-manager';
import { redisStore } from 'cache-manager-redis-store';
import { CacheModuleOptions } from '@nestjs/cache-manager';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb://localhost:27017/city-info-management'),

    CacheModule.registerAsync<CacheModuleOptions>({
      useFactory: async () => ({
        store: redisStore,
        host: 'localhost', // Or your Redis host
        port: 6379,
        ttl: 60 * 60 * 1000, // 1 hour global expire
      }),
      isGlobal: true,
    }),
    LoggerModule.forRoot({
      pinoHttp: {
        transport: {
          target: 'pino-pretty',
          options: {
            translateTime: 'SYS:standard',
            ignore: 'pid,hostname',
            colorize: true,
          },
        },
        // level: 'debug',
        level: 'info',
        autoLogging: true, // logs every request
      },
    }),
    CityPopulationModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
