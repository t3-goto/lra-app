import { NestMiddleware, Injectable } from '@nestjs/common';
import { Request, Response } from 'express';
import { CustomLogger } from '../shared/custom-logger/custom-logger.service';

@Injectable()
export class LoggerMiddleware implements NestMiddleware {
  constructor(private logger: CustomLogger) {}
  use(req: Request, res: Response, next: Function) {
    const message = JSON.stringify({
      headers: req.headers,
      body: req.body,
    });

    this.logger.setRequestInfo(req);
    this.logger.info(message);
    next();
  }
}
