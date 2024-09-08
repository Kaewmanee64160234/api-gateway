import { Body, Controller, Get, Post } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Post('sum1')
  async sum1(@Body('numbers') numbers: number[]) {
    return this.appService.sum1(numbers);
  }

  // sum2
  @Post('sum2')
  async sum2(@Body('numbers') numbers: number[]): Promise<number> {
    return this.appService.sum2(numbers);
  }
}
