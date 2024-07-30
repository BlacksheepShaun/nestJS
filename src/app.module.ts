import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { HiController } from './hi/hi.controller';
import { CoffeeService } from './coffee/coffee.service';

@Module({ //decorator
  imports: [],
  controllers: [AppController, HiController],
  providers: [AppService, CoffeeService],
})
export class AppModule {}
