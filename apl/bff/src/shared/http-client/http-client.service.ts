import { Injectable } from '@nestjs/common';
import { HttpService } from '@nestjs/common';

@Injectable()
export class HttpClientService {
  constructor(private readonly httpService: HttpService) {}
  public get(url: string) {
    return this.httpService.get(url).toPromise();
  }
}
