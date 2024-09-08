import { Body, Controller, Get, Post } from '@nestjs/common';
import { AppService } from './app.service';
import axios from 'axios';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Post('sum1')
  async sum1(@Body('numbers') numbers: number[]) {
    try {
      const res = await axios.post('http://localhost:3001/math/sum', {
        numbers,
      });
      return res.data;
    } catch (err) {
      return err.response.data;
    }
  }
}
