import { Module } from '@nestjs/common';
import { CustomLogger } from './custom-logger.service';
import { configure, getLogger } from 'log4js';

const config = {
  appenders: {
    console: {
      type: 'stdout',
      layout: {
        type: 'pattern',
        pattern:
          '[%d{yyyy/MM/dd hh.mm.ss.SSS}],[%p],[%X{ip}],[%X{method} %X{uri}],[%X{file} %X{line}:%X{column} %X{function}],%m',
      },
    },
  },
  categories: {
    default: {
      appenders: ['console'],
      level: 'INFO',
    },
  },
};

const loggerFactory = {
  provide: CustomLogger,
  useFactory: () => {
    configure(config);
    return new CustomLogger(getLogger('default'));
  },
};

@Module({
  providers: [loggerFactory],
  exports: [loggerFactory],
})
export class CustomLoggerModule {}
