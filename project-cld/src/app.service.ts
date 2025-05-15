/* eslint-disable @typescript-eslint/no-unsafe-call */
import { CACHE_MANAGER } from '@nestjs/cache-manager';
import { Inject, Injectable } from '@nestjs/common';
import { Cache } from 'cache-manager';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }
  constructor(@Inject(CACHE_MANAGER) private cacheManager: Cache) {}

  async setCacheKey(key: string, value: string): Promise<void> {
    await this.cacheManager.set(key, value);
  }

  async getCacheKey(key: string): Promise<string> {
    return (await this.cacheManager.get(key)) || '';
  }

  // async deleteCacheKey(key: string): Promise<void> {
  //   await this.cacheManager.del(key);
  // }
}
