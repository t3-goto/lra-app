import { NestFactory, Reflector } from '@nestjs/core';
import { AppModule } from './app.module';
import { CONFIG_PATH } from './core/core.module';
import { ConfigService } from './core/config/config.service';
import { GrpcOptions } from '@nestjs/microservices';
import { ClassSerializerInterceptor, ValidationPipe } from '@nestjs/common';
import {
  GrpcAccessLoggerInterceptor,
  GrpcTimeoutInterceptor,
} from './interceptors';
import { GrpcAccessLogger, DefaultLogger } from './shared/custom-logger';
import {
  initializeTransactionalContext,
  patchTypeORMRepositoryWithBaseRepository,
} from 'typeorm-transactional-cls-hooked';

async function bootstrap() {
  /**
   * Transaction Settings.
   */
  initializeTransactionalContext();
  patchTypeORMRepositoryWithBaseRepository();

  /**
   * Initialize Settings For App.
   */
  const configService = new ConfigService({ folder: CONFIG_PATH });
  const app = await NestFactory.createMicroservice<GrpcOptions>(
    AppModule,
    configService.grpcServerOptions
  );

  /**
   * Global Interceptors For gRPC.
   */
  const reflector = app.get(Reflector);
  app.useGlobalInterceptors(new ClassSerializerInterceptor(reflector));
  app.useGlobalInterceptors(
    new GrpcAccessLoggerInterceptor(app.get(GrpcAccessLogger))
  );
  app.useGlobalInterceptors(new GrpcTimeoutInterceptor());
  app.useGlobalPipes(new ValidationPipe());

  /**
   * Start gRPC Server.
   */
  const logger = app.get(DefaultLogger);
  logger.setType('BOOT');
  await app.listen(() => {
    logger.info('gRPC server is starting.');
  });
}
bootstrap();
