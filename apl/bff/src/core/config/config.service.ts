import { Inject, Injectable } from '@nestjs/common';
import * as dotenv from 'dotenv';
import * as fs from 'fs';
import * as path from 'path';
import { CONFIG_OPTIONS } from './constants';
import { ConfigOptions, EnvConfig } from './interfaces';
// TypeOrmModule
import { TypeOrmModuleOptions } from '@nestjs/typeorm';
import { SnakeNamingStrategy } from './snake-naming.strategy';
// CacheModule
import { CacheModuleOptions } from '@nestjs/common';
import * as redisStore from 'cache-manager-redis-store';
// HttpModule
import { HttpModuleOptions } from '@nestjs/common';
// JwtModule
import { JwtModuleOptions } from '@nestjs/jwt';

@Injectable()
export class ConfigService {
  private readonly envConfig: EnvConfig;

  constructor(@Inject(CONFIG_OPTIONS) options: ConfigOptions) {
    const filePath = `.${process.env.NODE_ENV || 'development'}.env`;
    const envFile = path.resolve(
      __dirname,
      '../../../',
      options.folder,
      filePath
    );
    if (fs.existsSync(envFile)) {
      this.envConfig = dotenv.parse(fs.readFileSync(envFile));
    }
  }

  public get(key: string): string {
    return process.env[key] || this.envConfig[key];
  }

  public get isDevelopment(): boolean {
    return this.get('NODE_ENV') === 'development';
  }

  public get isProduction(): boolean {
    return this.get('NODE_ENV') === 'production';
  }

  public getNumber(key: string): number {
    return Number(this.get(key));
  }

  public get nodeEnv(): string {
    return this.get('NODE_ENV') || 'development';
  }

  public get fallbackLanguage(): string {
    return this.get('FALLBACK_LANGUAGE').toLowerCase();
  }

  public get typeOrmConfig(): TypeOrmModuleOptions {
    let entities = [__dirname + '/../../modules/**/*.entity{.ts,.js}'];
    let subscribers = [__dirname + '/../../modules/**/*.subscriber{.ts,.js}'];
    let migrations = [__dirname + '/../../migrations/*{.ts,.js}'];

    if ((<any>module).hot) {
      const entityContext = (<any>require).context(
        './../../modules',
        true,
        /\.entity\.ts$/
      );
      entities = entityContext.keys().map((id) => {
        const entityModule = entityContext(id);
        const [entity] = Object.values(entityModule);
        return entity;
      });
      const subscriberContext = (<any>require).context(
        './../../modules',
        true,
        /\.subscriber\.ts$/
      );
      subscribers = subscriberContext.keys().map((id) => {
        const subscriberModule = subscriberContext(id);
        const [subscriber] = Object.values(subscriberModule);
        return subscriber;
      });
      const migrationContext = (<any>require).context(
        './../../migrations',
        false,
        /\.ts$/
      );
      migrations = migrationContext.keys().map((id) => {
        const migrationModule = migrationContext(id);
        const [migration] = Object.values(migrationModule);
        return migration;
      });
    }
    return {
      entities,
      subscribers,
      migrations,
      keepConnectionAlive: true,
      type: this.get('DB_TYPE') as 'mysql' | 'postgres',
      host: this.get('DB_HOST'),
      port: this.getNumber('DB_PORT'),
      username: this.get('DB_USERNAME'),
      password: this.get('DB_PASSWORD'),
      database: this.get('DB_DATABASE'),
      migrationsRun: true,
      logging: this.nodeEnv === 'development',
      namingStrategy: new SnakeNamingStrategy(),
      synchronize: this.nodeEnv === 'development' ? true : false,
    };
  }

  get cacheModuleOptions(): CacheModuleOptions {
    return {
      store: redisStore,
      host: this.get('REDIS_HOST'),
      port: this.getNumber('REDIS_PORT'),
      ttl: this.getNumber('REDIS_TTL'),
    };
  }

  get httpModuleOptions(): HttpModuleOptions {
    return {
      timeout: this.getNumber('HTTP_TIMEOUT'),
      maxRedirects: this.getNumber('HTTP_MAX_REDIRECTS'),
    };
  }

  get jwtModuleOptions(): JwtModuleOptions {
    return {
      secret: this.get('JWT_SECRET'),
      signOptions: {
        expiresIn: this.getNumber('JWT_EXPIRES_IN'),
      },
    };
  }
}
