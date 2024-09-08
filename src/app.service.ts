import { Inject, Injectable } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';
import axios from 'axios';

@Injectable()
export class AppService {
  constructor(@Inject('MATH_SERVICE') private readonly client: ClientProxy) {}
  getHello(): string {
    return 'Hello World!';
  }

  // sum 1
  async sum1(numbers: number[]) {
    try {
      const res = await axios.post('http://localhost:3001/math/sum', {
        numbers,
      });
      return res.data;
    } catch (err) {
      return err.response.data;
    }
  }

  sum2(numbers: number[]): Promise<number> {
    const pattern = { cmd: 'sum' };
    return this.client.send<number>(pattern, numbers).toPromise();
  }
}
