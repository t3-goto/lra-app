import { Controller, Get, Post } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Post()
  async create() {
    return await this.appService.create();
  }

  @Get()
  async findAll(): Promise<String> {
    return await this.appService.findAll();
  }
}
