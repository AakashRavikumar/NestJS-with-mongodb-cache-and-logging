import { Cache } from 'cache-manager';
export declare class AppService {
    private cacheManager;
    getHello(): string;
    constructor(cacheManager: Cache);
    setCacheKey(key: string, value: string): Promise<void>;
    getCacheKey(key: string): Promise<string>;
}
