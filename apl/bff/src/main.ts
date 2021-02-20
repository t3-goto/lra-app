import { NestFactory, Reflector } from '@nestjs/core';
import { AppModule } from './app.module';
import { CONFIG_PATH } from './core/core.module';
import { ConfigService } from './core/config/config.service';
import {
  NestExpressApplication,
  ExpressAdapter,
} from '@nestjs/platform-express';
import { ClassSerializerInterceptor, ValidationPipe } from '@nestjs/common';
import {
  HttpAccessLoggerInterceptor,
  HttpTimeoutInterceptor,
} from './interceptors';
import * as helmet from 'helmet';
import * as compression from 'compression';
import * as cookieParser from 'cookie-parser';
import * as bodyParser from 'body-parser';
import { HttpAccessLogger, DefaultLogger } from './shared/custom-logger';
import {
  initializeTransactionalContext,
  patchTypeORMRepositoryWithBaseRepository,
} from 'typeorm-transactional-cls-hooked';
import { setupSwagger } from './setup-swagger';

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
  const app = await NestFactory.create<NestExpressApplication>(
    AppModule,
    new ExpressAdapter(),
    { cors: true }
  );

  /**
   * Global Middleware For Http.
   */
  app.enable('trust proxy');
  app.setGlobalPrefix('api/v1');
  app.use(helmet());
  app.use(compression());
  app.use(bodyParser.json({ limit: '50mb' }));
  app.use(
    bodyParser.urlencoded({
      limit: '50mb',
      extended: true,
      parameterLimit: 50000,
    })
  );
  app.use(cookieParser());

  /**
   * Global Interceptors For Http.
   */
  const reflector = app.get(Reflector);
  app.useGlobalInterceptors(new ClassSerializerInterceptor(reflector));
  app.useGlobalInterceptors(
    new HttpAccessLoggerInterceptor(app.get(HttpAccessLogger))
  );
  app.useGlobalInterceptors(new HttpTimeoutInterceptor());
  app.useGlobalPipes(new ValidationPipe());

  /**
   * Swagger.
   */
  if (!configService.isProduction) {
    setupSwagger(app);
  }

  /**
   * Start Http Server.
   */
  const logger = app.get(DefaultLogger);
  logger.setType('BOOT');
  await app.listen(configService.getNumber('HTTP_SV_PORT'));
  logger.info('Http sever is getting started.');
}
bootstrap();
