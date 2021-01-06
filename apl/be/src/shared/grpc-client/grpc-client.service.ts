import { Injectable, OnModuleInit, Inject } from '@nestjs/common';
import { ClientGrpc } from '@nestjs/microservices';
import { GrpcError } from './grpc-error';
import {
  GrpcClientLogger,
  createGrpcClientLoggerReqInfo,
  createGrpcClientLoggerResInfo,
} from '../custom-logger';
import { rpc } from 'codegen/grpc';
import GeocodingService = rpc.GeocodingService;
import RestaurantsService = rpc.RestaurantsService;
import UsersService = rpc.UsersService;
import GetGeocodingRequest = rpc.GetGeocodingRequest;
import GetGeocodingResponse = rpc.GetGeocodingResponse;
import GetRestaurantsRequest = rpc.GetRestaurantsRequest;
import GetRestaurantsResponse = rpc.GetRestaurantsResponse;
import PostUserRequest = rpc.PostUserRequest;
import PostUserResponse = rpc.PostUserResponse;
import GetUsersRequest = rpc.GetUsersRequest;
import GetUsersResponse = rpc.GetUsersResponse;
import GetUserRequest = rpc.GetUserRequest;
import GetUserResponse = rpc.GetUserResponse;
import GetUserByUsernameRequest = rpc.GetUserByUsernameRequest;
import GetUserByUsernameResponse = rpc.GetUserByUsernameResponse;
import DeleteUserRequest = rpc.DeleteUserRequest;
import DeleteUserResponse = rpc.DeleteUserResponse;

@Injectable()
export class GrpcClientService implements OnModuleInit {
  private geocodingService: GeocodingService;
  private restaurantsService: RestaurantsService;
  private usersService: UsersService;
  private SERVICE_GEOCODING = 'GeocodingService' as const;
  private SERVICE_RESTAURANTS = 'RestaurantsService' as const;
  private SERVICE_USERS = 'UsersService' as const;
  private METHOD_GET_GEOCODING = 'GetGeocoding' as const;
  private METHOD_GET_RESTAURANTS = 'GetRestaurants' as const;
  private METHOD_POST_USER = 'PostUser' as const;
  private METHOD_GET_USERS = 'GetUsers' as const;
  private METHOD_GET_USER = 'GetUser' as const;
  private METHOD_GET_USER_BY_USERNAME = 'GetUserByUsername' as const;
  private METHOD_DELETE_USER = 'DeleteUser' as const;

  constructor(
    private readonly logger: GrpcClientLogger,
    @Inject('GRPC_GEOCODING') private clientGrpcGeocoding: ClientGrpc,
    @Inject('GRPC_RESTAURANTS') private clientGrpcRestaurants: ClientGrpc,
    @Inject('GRPC_USERS') private clientGrpcUsers: ClientGrpc
  ) {}

  onModuleInit() {
    this.geocodingService = this.clientGrpcGeocoding.getService<GeocodingService>(
      this.SERVICE_GEOCODING
    );
    this.restaurantsService = this.clientGrpcRestaurants.getService<RestaurantsService>(
      this.SERVICE_RESTAURANTS
    );
    this.usersService = this.clientGrpcUsers.getService<UsersService>(
      this.SERVICE_USERS
    );
  }

  /** @param {GetGeocodingRequest} request */
  public getGeocoding(
    request: GetGeocodingRequest
  ): Promise<GetGeocodingResponse> {
    this.logger.setGrpcClientReqInfo(
      createGrpcClientLoggerReqInfo(
        this.SERVICE_GEOCODING,
        this.METHOD_GET_GEOCODING,
        request
      )
    );
    this.logger.info();
    return this.geocodingService
      .getGeocoding(request)
      .toPromise()
      .then((response) => {
        this.logger.setGrpcClientResInfo(
          createGrpcClientLoggerResInfo(
            this.SERVICE_GEOCODING,
            this.METHOD_GET_GEOCODING,
            response
          )
        );
        this.logger.info();
        return this.successCallback(response);
      })
      .catch(this.errorCallback);
  }

  /** @param {GetRestaurantsRequest} request */
  public getRestaurants(
    request: GetRestaurantsRequest
  ): Promise<GetRestaurantsResponse> {
    this.logger.setGrpcClientReqInfo(
      createGrpcClientLoggerReqInfo(
        this.SERVICE_RESTAURANTS,
        this.METHOD_GET_RESTAURANTS,
        request
      )
    );
    this.logger.info();
    return this.restaurantsService
      .getRestaurants(request)
      .toPromise()
      .then((response) => {
        this.logger.setGrpcClientResInfo(
          createGrpcClientLoggerResInfo(
            this.SERVICE_RESTAURANTS,
            this.METHOD_GET_RESTAURANTS,
            response
          )
        );
        this.logger.info();
        return this.successCallback(response);
      })
      .catch(this.errorCallback);
  }

  /** @param {PostUserRequest} request */
  public postUser(request: PostUserRequest): Promise<PostUserResponse> {
    this.logger.setGrpcClientReqInfo(
      createGrpcClientLoggerReqInfo(
        this.SERVICE_USERS,
        this.METHOD_POST_USER,
        request
      )
    );
    this.logger.info();
    return this.usersService
      .postUser(request)
      .toPromise()
      .then((response) => {
        this.logger.setGrpcClientResInfo(
          createGrpcClientLoggerResInfo(
            this.SERVICE_USERS,
            this.METHOD_POST_USER,
            response
          )
        );
        this.logger.info();
        return this.successCallback(response);
      })
      .catch(this.errorCallback);
  }

  /** @param {GetUsersRequest} request */
  public getUsers(request: GetUsersRequest): Promise<GetUsersResponse> {
    this.logger.setGrpcClientReqInfo(
      createGrpcClientLoggerReqInfo(
        this.SERVICE_USERS,
        this.METHOD_GET_USERS,
        request
      )
    );
    this.logger.info();
    return this.usersService
      .getUsers(request)
      .toPromise()
      .then((response) => {
        this.logger.setGrpcClientResInfo(
          createGrpcClientLoggerResInfo(
            this.SERVICE_USERS,
            this.METHOD_GET_USERS,
            response
          )
        );
        this.logger.info();
        return this.successCallback(response);
      })
      .catch(this.errorCallback);
  }

  /** @param {GetUserRequest} request */
  public getUser(request: GetUserRequest): Promise<GetUserResponse> {
    this.logger.setGrpcClientReqInfo(
      createGrpcClientLoggerReqInfo(
        this.SERVICE_USERS,
        this.METHOD_GET_USER,
        request
      )
    );
    this.logger.info();
    return this.usersService
      .getUser(request)
      .toPromise()
      .then((response) => {
        this.logger.setGrpcClientResInfo(
          createGrpcClientLoggerResInfo(
            this.SERVICE_USERS,
            this.METHOD_GET_USER,
            response
          )
        );
        this.logger.info();
        return this.successCallback(response);
      })
      .catch(this.errorCallback);
  }

  /** @param {GetUserByUsernameRequest} request */
  public getUserByUsername(
    request: GetUserByUsernameRequest
  ): Promise<GetUserByUsernameResponse> {
    this.logger.setGrpcClientReqInfo(
      createGrpcClientLoggerReqInfo(
        this.SERVICE_USERS,
        this.METHOD_GET_USER_BY_USERNAME,
        request
      )
    );
    this.logger.info();
    return this.usersService
      .getUserByUsername(request)
      .toPromise()
      .then((response) => {
        this.logger.setGrpcClientResInfo(
          createGrpcClientLoggerResInfo(
            this.SERVICE_USERS,
            this.METHOD_GET_USER_BY_USERNAME,
            response
          )
        );
        this.logger.info();
        return this.successCallback(response);
      })
      .catch(this.errorCallback);
  }

  /** @param {DeleteUserRequest} request */
  public deleteUser(request: DeleteUserRequest): Promise<DeleteUserResponse> {
    this.logger.setGrpcClientReqInfo(
      createGrpcClientLoggerReqInfo(
        this.SERVICE_USERS,
        this.METHOD_DELETE_USER,
        request
      )
    );
    this.logger.info();
    return this.usersService
      .deleteUser(request)
      .toPromise()
      .then((response) => {
        this.logger.setGrpcClientResInfo(
          createGrpcClientLoggerResInfo(
            this.SERVICE_USERS,
            this.METHOD_DELETE_USER,
            response
          )
        );
        this.logger.info();
        return this.successCallback(response);
      })
      .catch(this.errorCallback);
  }

  /**
   * Success Callback.
   */
  private successCallback<S>(response: S): S {
    return response;
  }

  /**
   * Error Callback.
   */
  private errorCallback(error: any): null {
    console.log(JSON.stringify(error));
    throw new GrpcError(error);
  }
}
