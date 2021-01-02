import { NestFactory, Reflector } from '@nestjs/core';
import { AppModule } from './app.module';
import { CoreModule } from './core/core.module';
import { ConfigService } from './core/config/config.service';
import { GrpcOptions } from '@nestjs/microservices';
import {
  NestExpressApplication,
  ExpressAdapter,
} from '@nestjs/platform-express';
import { ClassSerializerInterceptor, ValidationPipe } from '@nestjs/common';
import { LoggingInterceptor } from './interceptors/logging.interceptor';
import { TimeoutInterceptor } from './interceptors/timeout.interceptor';
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
import { setupSwagger } from './setup-swagger';

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
  app.useGlobalInterceptors(new LoggingInterceptor(app.get(CustomLogger)));
  app.useGlobalInterceptors(new TimeoutInterceptor());
  app.useGlobalPipes(new ValidationPipe());

  if (!configService.isProduction) {
    setupSwagger(app);
  }
  await app.listen(configService.getNumber('HTTP_SV_PORT'));

  app.connectMicroservice<GrpcOptions>(configService.grpcServerOptions);
  await app.startAllMicroservicesAsync();
}
bootstrap();
