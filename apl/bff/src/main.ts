import { NestFactory, Reflector } from '@nestjs/core';
import { AppModule } from './app.module';
import { CoreModule } from './core/core.module';
import { ConfigService } from './core/config/config.service';
import { Transport } from '@nestjs/microservices';
import {
  NestExpressApplication,
  ExpressAdapter,
} from '@nestjs/platform-express';
import { ClassSerializerInterceptor, ValidationPipe } from '@nestjs/common';
import { LoggingInterceptor } from './interceptors/logging.interceptor';
import { TimeoutInterceptor } from './interceptors/timeout.interceptor';
import { TransformInterceptor } from './interceptors/transform.interceptor';
import * as helmet from 'helmet';
import * as compression from 'compression';
import * as cookieParser from 'cookie-parser';
import * as bodyParser from 'body-parser';
import * as rateLimit from 'express-rate-limit';
import { CustomLogger } from './shared/custom-logger/custom-logger.service';
import {
  initializeTransactionalContext,
  patchTypeORMRepositoryWithBaseRepository,
} from 'typeorm-transactional-cls-hooked';
import { setupSwagger } from './viveo-swagger';

async function bootstrap() {
  initializeTransactionalContext();
  patchTypeORMRepositoryWithBaseRepository();
  const app = await NestFactory.create<NestExpressApplication>(
    AppModule,
    new ExpressAdapter(),
    { cors: true }
  );
  const configService = app.select(CoreModule).get(ConfigService);

  app.enable('trust proxy');
  app.setGlobalPrefix('api/v1');
  app.use(helmet());
  app.use(
    rateLimit({
      windowMs: 15 * 60 * 1000,
      max: 100,
    })
  );
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

  const reflector = app.get(Reflector);

  app.useGlobalInterceptors(new ClassSerializerInterceptor(reflector));
  // graphqlの場合NG（何も出ない）
  app.useGlobalInterceptors(new LoggingInterceptor(app.get(CustomLogger)));
  app.useGlobalInterceptors(new TimeoutInterceptor());
  // graphqlの場合NG（エラー）
  app.useGlobalInterceptors(new TransformInterceptor());

  app.useGlobalPipes(new ValidationPipe());

  app.connectMicroservice({
    transport: Transport.TCP,
    options: {
      port: configService.getNumber('MICROSERVICE_TCP_PORT'),
      retryAttempts: configService.getNumber('MICROSERVICE_TCP_RETRY_ATTEMPTS'),
      retryDelay: configService.getNumber('MICROSERVICE_TCP_DELAY'),
    },
  });
  await app.startAllMicroservicesAsync();

  if (!configService.isProduction) {
    setupSwagger(app);
  }
  await app.listen(configService.getNumber('PORT'));
}
bootstrap();