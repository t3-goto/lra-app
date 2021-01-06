import { Module, HttpModule } from '@nestjs/common';
import { HttpClientService } from './http-client.service';
import { CoreModule } from './../../core/core.module';
import { ConfigService } from './../../core/config/config.service';
import { CustomLoggerModule } from './../custom-logger/custom-logger.module';

@Module({
  imports: [
    HttpModule.registerAsync({
      imports: [CoreModule],
      useFactory: async (configService: ConfigService) =>
        configService.httpModuleOptions,
      inject: [ConfigService],
    }),
    CustomLoggerModule,
  ],
  providers: [HttpClientService],
  exports: [HttpClientService],
})
export class HttpClientModule {}
