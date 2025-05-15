import { Controller, Get, Param, Post, Query } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Post()
  async setCacheKey(@Query('key') key: string, @Query('value') value: string) {
    await this.appService.setCacheKey(key, value);
    return {
      success: true,
      status: 201,
      message: 'Key cached successfully',
    };
  }

  @Get('get/:key')
  async getCacheKey(@Param('key') key: string) {
    const data = await this.appService.getCacheKey(key);
    return {
      success: true,
      status: 200,
      message: 'fetched successfully',
      data,
    };
  }

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }
}
