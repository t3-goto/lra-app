import { Observable } from 'rxjs';
import * as $protobuf from 'protobufjs';
/** Namespace rpc. */
export namespace rpc {
  /** Represents a GeocodingService */
  class GeocodingService extends $protobuf.rpc.Service {
    /**
     * Constructs a new GeocodingService service.
     * @param rpcImpl RPC implementation
     * @param [requestDelimited=false] Whether requests are length-delimited
     * @param [responseDelimited=false] Whether responses are length-delimited
     */
    constructor(
      rpcImpl: $protobuf.RPCImpl,
      requestDelimited?: boolean,
      responseDelimited?: boolean
    );

    /**
     * Creates new GeocodingService service using the specified rpc implementation.
     * @param rpcImpl RPC implementation
     * @param [requestDelimited=false] Whether requests are length-delimited
     * @param [responseDelimited=false] Whether responses are length-delimited
     * @returns RPC service. Useful where requests and/or responses are streamed.
     */
    public static create(
      rpcImpl: $protobuf.RPCImpl,
      requestDelimited?: boolean,
      responseDelimited?: boolean
    ): GeocodingService;

    /**
     * Calls GetGeocoding.
     * @param request GetGeocodingRequest message or plain object
     * @param callback Node-style callback called with the error, if any, and GetGeocodingResponse
     */
    public getGeocoding(
      request: rpc.IGetGeocodingRequest,
      callback: rpc.GeocodingService.GetGeocodingCallback
    ): void;

    /**
     * Calls GetGeocoding.
     * @param request GetGeocodingRequest message or plain object
     * @returns Observable
     */
    public getGeocoding(
      request: rpc.IGetGeocodingRequest
    ): Observable<rpc.GetGeocodingResponse>;
  }

  namespace GeocodingService {
    /**
     * Callback as used by {@link rpc.GeocodingService#getGeocoding}.
     * @param error Error, if any
     * @param [response] GetGeocodingResponse
     */
    type GetGeocodingCallback = (
      error: Error | null,
      response?: rpc.GetGeocodingResponse
    ) => void;
  }

  /** Properties of a GetGeocodingRequest. */
  interface IGetGeocodingRequest {
    /** GetGeocodingRequest address */
    address?: string | null;
  }

  /** Represents a GetGeocodingRequest. */
  class GetGeocodingRequest implements IGetGeocodingRequest {
    /**
     * Constructs a new GetGeocodingRequest.
     * @param [properties] Properties to set
     */
    constructor(properties?: rpc.IGetGeocodingRequest);

    /** GetGeocodingRequest address. */
    public address: string;

    /**
     * Creates a new GetGeocodingRequest instance using the specified properties.
     * @param [properties] Properties to set
     * @returns GetGeocodingRequest instance
     */
    public static create(
      properties?: rpc.IGetGeocodingRequest
    ): rpc.GetGeocodingRequest;

    /**
     * Encodes the specified GetGeocodingRequest message. Does not implicitly {@link rpc.GetGeocodingRequest.verify|verify} messages.
     * @param message GetGeocodingRequest message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(
      message: rpc.IGetGeocodingRequest,
      writer?: $protobuf.Writer
    ): $protobuf.Writer;

    /**
     * Encodes the specified GetGeocodingRequest message, length delimited. Does not implicitly {@link rpc.GetGeocodingRequest.verify|verify} messages.
     * @param message GetGeocodingRequest message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(
      message: rpc.IGetGeocodingRequest,
      writer?: $protobuf.Writer
    ): $protobuf.Writer;

    /**
     * Decodes a GetGeocodingRequest message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns GetGeocodingRequest
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(
      reader: $protobuf.Reader | Uint8Array,
      length?: number
    ): rpc.GetGeocodingRequest;

    /**
     * Decodes a GetGeocodingRequest message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns GetGeocodingRequest
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(
      reader: $protobuf.Reader | Uint8Array
    ): rpc.GetGeocodingRequest;

    /**
     * Verifies a GetGeocodingRequest message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): string | null;

    /**
     * Creates a GetGeocodingRequest message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns GetGeocodingRequest
     */
    public static fromObject(object: {
      [k: string]: any;
    }): rpc.GetGeocodingRequest;

    /**
     * Creates a plain object from a GetGeocodingRequest message. Also converts values to other types if specified.
     * @param message GetGeocodingRequest
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(
      message: rpc.GetGeocodingRequest,
      options?: $protobuf.IConversionOptions
    ): { [k: string]: any };

    /**
     * Converts this GetGeocodingRequest to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
  }

  /** Properties of a GetGeocodingResponse. */
  interface IGetGeocodingResponse {
    /** GetGeocodingResponse latitude */
    latitude?: number | null;

    /** GetGeocodingResponse longitude */
    longitude?: number | null;
  }

  /** Represents a GetGeocodingResponse. */
  class GetGeocodingResponse implements IGetGeocodingResponse {
    /**
     * Constructs a new GetGeocodingResponse.
     * @param [properties] Properties to set
     */
    constructor(properties?: rpc.IGetGeocodingResponse);

    /** GetGeocodingResponse latitude. */
    public latitude: number;

    /** GetGeocodingResponse longitude. */
    public longitude: number;

    /**
     * Creates a new GetGeocodingResponse instance using the specified properties.
     * @param [properties] Properties to set
     * @returns GetGeocodingResponse instance
     */
    public static create(
      properties?: rpc.IGetGeocodingResponse
    ): rpc.GetGeocodingResponse;

    /**
     * Encodes the specified GetGeocodingResponse message. Does not implicitly {@link rpc.GetGeocodingResponse.verify|verify} messages.
     * @param message GetGeocodingResponse message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(
      message: rpc.IGetGeocodingResponse,
      writer?: $protobuf.Writer
    ): $protobuf.Writer;

    /**
     * Encodes the specified GetGeocodingResponse message, length delimited. Does not implicitly {@link rpc.GetGeocodingResponse.verify|verify} messages.
     * @param message GetGeocodingResponse message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(
      message: rpc.IGetGeocodingResponse,
      writer?: $protobuf.Writer
    ): $protobuf.Writer;

    /**
     * Decodes a GetGeocodingResponse message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns GetGeocodingResponse
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(
      reader: $protobuf.Reader | Uint8Array,
      length?: number
    ): rpc.GetGeocodingResponse;

    /**
     * Decodes a GetGeocodingResponse message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns GetGeocodingResponse
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(
      reader: $protobuf.Reader | Uint8Array
    ): rpc.GetGeocodingResponse;

    /**
     * Verifies a GetGeocodingResponse message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): string | null;

    /**
     * Creates a GetGeocodingResponse message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns GetGeocodingResponse
     */
    public static fromObject(object: {
      [k: string]: any;
    }): rpc.GetGeocodingResponse;

    /**
     * Creates a plain object from a GetGeocodingResponse message. Also converts values to other types if specified.
     * @param message GetGeocodingResponse
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(
      message: rpc.GetGeocodingResponse,
      options?: $protobuf.IConversionOptions
    ): { [k: string]: any };

    /**
     * Converts this GetGeocodingResponse to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
  }

  /** Represents a RestaurantsService */
  class RestaurantsService extends $protobuf.rpc.Service {
    /**
     * Constructs a new RestaurantsService service.
     * @param rpcImpl RPC implementation
     * @param [requestDelimited=false] Whether requests are length-delimited
     * @param [responseDelimited=false] Whether responses are length-delimited
     */
    constructor(
      rpcImpl: $protobuf.RPCImpl,
      requestDelimited?: boolean,
      responseDelimited?: boolean
    );

    /**
     * Creates new RestaurantsService service using the specified rpc implementation.
     * @param rpcImpl RPC implementation
     * @param [requestDelimited=false] Whether requests are length-delimited
     * @param [responseDelimited=false] Whether responses are length-delimited
     * @returns RPC service. Useful where requests and/or responses are streamed.
     */
    public static create(
      rpcImpl: $protobuf.RPCImpl,
      requestDelimited?: boolean,
      responseDelimited?: boolean
    ): RestaurantsService;

    /**
     * Calls GetRestaurants.
     * @param request GetRestaurantsRequest message or plain object
     * @param callback Node-style callback called with the error, if any, and GetRestaurantsResponse
     */
    public getRestaurants(
      request: rpc.IGetRestaurantsRequest,
      callback: rpc.RestaurantsService.GetRestaurantsCallback
    ): void;

    /**
     * Calls GetRestaurants.
     * @param request GetRestaurantsRequest message or plain object
     * @returns Observable
     */
    public getRestaurants(
      request: rpc.IGetRestaurantsRequest
    ): Observable<rpc.GetRestaurantsResponse>;
  }

  namespace RestaurantsService {
    /**
     * Callback as used by {@link rpc.RestaurantsService#getRestaurants}.
     * @param error Error, if any
     * @param [response] GetRestaurantsResponse
     */
    type GetRestaurantsCallback = (
      error: Error | null,
      response?: rpc.GetRestaurantsResponse
    ) => void;
  }

  /** Properties of a GetRestaurantsRequest. */
  interface IGetRestaurantsRequest {
    /** GetRestaurantsRequest latitude */
    latitude?: number | null;

    /** GetRestaurantsRequest longitude */
    longitude?: number | null;

    /** GetRestaurantsRequest range */
    range?: number | null;

    /** GetRestaurantsRequest pageOffset */
    pageOffset?: number | null;

    /** GetRestaurantsRequest hitPerPage */
    hitPerPage?: number | null;

    /** GetRestaurantsRequest address */
    address?: string | null;
  }

  /** Represents a GetRestaurantsRequest. */
  class GetRestaurantsRequest implements IGetRestaurantsRequest {
    /**
     * Constructs a new GetRestaurantsRequest.
     * @param [properties] Properties to set
     */
    constructor(properties?: rpc.IGetRestaurantsRequest);

    /** GetRestaurantsRequest latitude. */
    public latitude: number;

    /** GetRestaurantsRequest longitude. */
    public longitude: number;

    /** GetRestaurantsRequest range. */
    public range: number;

    /** GetRestaurantsRequest pageOffset. */
    public pageOffset: number;

    /** GetRestaurantsRequest hitPerPage. */
    public hitPerPage: number;

    /** GetRestaurantsRequest address. */
    public address: string;

    /**
     * Creates a new GetRestaurantsRequest instance using the specified properties.
     * @param [properties] Properties to set
     * @returns GetRestaurantsRequest instance
     */
    public static create(
      properties?: rpc.IGetRestaurantsRequest
    ): rpc.GetRestaurantsRequest;

    /**
     * Encodes the specified GetRestaurantsRequest message. Does not implicitly {@link rpc.GetRestaurantsRequest.verify|verify} messages.
     * @param message GetRestaurantsRequest message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(
      message: rpc.IGetRestaurantsRequest,
      writer?: $protobuf.Writer
    ): $protobuf.Writer;

    /**
     * Encodes the specified GetRestaurantsRequest message, length delimited. Does not implicitly {@link rpc.GetRestaurantsRequest.verify|verify} messages.
     * @param message GetRestaurantsRequest message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(
      message: rpc.IGetRestaurantsRequest,
      writer?: $protobuf.Writer
    ): $protobuf.Writer;

    /**
     * Decodes a GetRestaurantsRequest message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns GetRestaurantsRequest
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(
      reader: $protobuf.Reader | Uint8Array,
      length?: number
    ): rpc.GetRestaurantsRequest;

    /**
     * Decodes a GetRestaurantsRequest message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns GetRestaurantsRequest
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(
      reader: $protobuf.Reader | Uint8Array
    ): rpc.GetRestaurantsRequest;

    /**
     * Verifies a GetRestaurantsRequest message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): string | null;

    /**
     * Creates a GetRestaurantsRequest message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns GetRestaurantsRequest
     */
    public static fromObject(object: {
      [k: string]: any;
    }): rpc.GetRestaurantsRequest;

    /**
     * Creates a plain object from a GetRestaurantsRequest message. Also converts values to other types if specified.
     * @param message GetRestaurantsRequest
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(
      message: rpc.GetRestaurantsRequest,
      options?: $protobuf.IConversionOptions
    ): { [k: string]: any };

    /**
     * Converts this GetRestaurantsRequest to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
  }

  /** Properties of a GetRestaurantsResponse. */
  interface IGetRestaurantsResponse {
    /** GetRestaurantsResponse isNext */
    isNext?: boolean | null;

    /** GetRestaurantsResponse totalHitCount */
    totalHitCount?: number | null;

    /** GetRestaurantsResponse startItemNo */
    startItemNo?: number | null;

    /** GetRestaurantsResponse lastItemNo */
    lastItemNo?: number | null;

    /** GetRestaurantsResponse restaurants */
    restaurants?: rpc.IRestaurant[] | null;
  }

  /** Represents a GetRestaurantsResponse. */
  class GetRestaurantsResponse implements IGetRestaurantsResponse {
    /**
     * Constructs a new GetRestaurantsResponse.
     * @param [properties] Properties to set
     */
    constructor(properties?: rpc.IGetRestaurantsResponse);

    /** GetRestaurantsResponse isNext. */
    public isNext: boolean;

    /** GetRestaurantsResponse totalHitCount. */
    public totalHitCount: number;

    /** GetRestaurantsResponse startItemNo. */
    public startItemNo: number;

    /** GetRestaurantsResponse lastItemNo. */
    public lastItemNo: number;

    /** GetRestaurantsResponse restaurants. */
    public restaurants: rpc.IRestaurant[];

    /**
     * Creates a new GetRestaurantsResponse instance using the specified properties.
     * @param [properties] Properties to set
     * @returns GetRestaurantsResponse instance
     */
    public static create(
      properties?: rpc.IGetRestaurantsResponse
    ): rpc.GetRestaurantsResponse;

    /**
     * Encodes the specified GetRestaurantsResponse message. Does not implicitly {@link rpc.GetRestaurantsResponse.verify|verify} messages.
     * @param message GetRestaurantsResponse message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(
      message: rpc.IGetRestaurantsResponse,
      writer?: $protobuf.Writer
    ): $protobuf.Writer;

    /**
     * Encodes the specified GetRestaurantsResponse message, length delimited. Does not implicitly {@link rpc.GetRestaurantsResponse.verify|verify} messages.
     * @param message GetRestaurantsResponse message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(
      message: rpc.IGetRestaurantsResponse,
      writer?: $protobuf.Writer
    ): $protobuf.Writer;

    /**
     * Decodes a GetRestaurantsResponse message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns GetRestaurantsResponse
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(
      reader: $protobuf.Reader | Uint8Array,
      length?: number
    ): rpc.GetRestaurantsResponse;

    /**
     * Decodes a GetRestaurantsResponse message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns GetRestaurantsResponse
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(
      reader: $protobuf.Reader | Uint8Array
    ): rpc.GetRestaurantsResponse;

    /**
     * Verifies a GetRestaurantsResponse message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): string | null;

    /**
     * Creates a GetRestaurantsResponse message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns GetRestaurantsResponse
     */
    public static fromObject(object: {
      [k: string]: any;
    }): rpc.GetRestaurantsResponse;

    /**
     * Creates a plain object from a GetRestaurantsResponse message. Also converts values to other types if specified.
     * @param message GetRestaurantsResponse
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(
      message: rpc.GetRestaurantsResponse,
      options?: $protobuf.IConversionOptions
    ): { [k: string]: any };

    /**
     * Converts this GetRestaurantsResponse to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
  }

  /** Properties of a Restaurant. */
  interface IRestaurant {
    /** Restaurant order */
    order?: number | null;

    /** Restaurant id */
    id?: string | null;

    /** Restaurant updateAt */
    updateAt?: string | null;

    /** Restaurant name */
    name?: string | null;

    /** Restaurant nameKana */
    nameKana?: string | null;

    /** Restaurant latitude */
    latitude?: number | null;

    /** Restaurant longitude */
    longitude?: number | null;

    /** Restaurant category */
    category?: string | null;

    /** Restaurant url */
    url?: string | null;

    /** Restaurant urlMobile */
    urlMobile?: string | null;

    /** Restaurant shopImage1 */
    shopImage1?: string | null;

    /** Restaurant shopImage2 */
    shopImage2?: string | null;

    /** Restaurant address */
    address?: string | null;

    /** Restaurant tel */
    tel?: string | null;

    /** Restaurant telSub */
    telSub?: string | null;

    /** Restaurant fax */
    fax?: string | null;

    /** Restaurant opentime */
    opentime?: string | null;

    /** Restaurant holiday */
    holiday?: string | null;

    /** Restaurant line */
    line?: string | null;

    /** Restaurant station */
    station?: string | null;

    /** Restaurant stationExit */
    stationExit?: string | null;

    /** Restaurant walk */
    walk?: string | null;

    /** Restaurant note */
    note?: string | null;

    /** Restaurant parkingLots */
    parkingLots?: string | null;

    /** Restaurant prShort */
    prShort?: string | null;

    /** Restaurant prLong */
    prLong?: string | null;

    /** Restaurant budget */
    budget?: number | null;

    /** Restaurant party */
    party?: number | null;

    /** Restaurant lunch */
    lunch?: number | null;

    /** Restaurant creditCard */
    creditCard?: string | null;

    /** Restaurant eMoney */
    eMoney?: string | null;
  }

  /** Represents a Restaurant. */
  class Restaurant implements IRestaurant {
    /**
     * Constructs a new Restaurant.
     * @param [properties] Properties to set
     */
    constructor(properties?: rpc.IRestaurant);

    /** Restaurant order. */
    public order: number;

    /** Restaurant id. */
    public id: string;

    /** Restaurant updateAt. */
    public updateAt: string;

    /** Restaurant name. */
    public name: string;

    /** Restaurant nameKana. */
    public nameKana: string;

    /** Restaurant latitude. */
    public latitude: number;

    /** Restaurant longitude. */
    public longitude: number;

    /** Restaurant category. */
    public category: string;

    /** Restaurant url. */
    public url: string;

    /** Restaurant urlMobile. */
    public urlMobile: string;

    /** Restaurant shopImage1. */
    public shopImage1: string;

    /** Restaurant shopImage2. */
    public shopImage2: string;

    /** Restaurant address. */
    public address: string;

    /** Restaurant tel. */
    public tel: string;

    /** Restaurant telSub. */
    public telSub: string;

    /** Restaurant fax. */
    public fax: string;

    /** Restaurant opentime. */
    public opentime: string;

    /** Restaurant holiday. */
    public holiday: string;

    /** Restaurant line. */
    public line: string;

    /** Restaurant station. */
    public station: string;

    /** Restaurant stationExit. */
    public stationExit: string;

    /** Restaurant walk. */
    public walk: string;

    /** Restaurant note. */
    public note: string;

    /** Restaurant parkingLots. */
    public parkingLots: string;

    /** Restaurant prShort. */
    public prShort: string;

    /** Restaurant prLong. */
    public prLong: string;

    /** Restaurant budget. */
    public budget: number;

    /** Restaurant party. */
    public party: number;

    /** Restaurant lunch. */
    public lunch: number;

    /** Restaurant creditCard. */
    public creditCard: string;

    /** Restaurant eMoney. */
    public eMoney: string;

    /**
     * Creates a new Restaurant instance using the specified properties.
     * @param [properties] Properties to set
     * @returns Restaurant instance
     */
    public static create(properties?: rpc.IRestaurant): rpc.Restaurant;

    /**
     * Encodes the specified Restaurant message. Does not implicitly {@link rpc.Restaurant.verify|verify} messages.
     * @param message Restaurant message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(
      message: rpc.IRestaurant,
      writer?: $protobuf.Writer
    ): $protobuf.Writer;

    /**
     * Encodes the specified Restaurant message, length delimited. Does not implicitly {@link rpc.Restaurant.verify|verify} messages.
     * @param message Restaurant message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(
      message: rpc.IRestaurant,
      writer?: $protobuf.Writer
    ): $protobuf.Writer;

    /**
     * Decodes a Restaurant message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns Restaurant
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(
      reader: $protobuf.Reader | Uint8Array,
      length?: number
    ): rpc.Restaurant;

    /**
     * Decodes a Restaurant message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns Restaurant
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(
      reader: $protobuf.Reader | Uint8Array
    ): rpc.Restaurant;

    /**
     * Verifies a Restaurant message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): string | null;

    /**
     * Creates a Restaurant message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns Restaurant
     */
    public static fromObject(object: { [k: string]: any }): rpc.Restaurant;

    /**
     * Creates a plain object from a Restaurant message. Also converts values to other types if specified.
     * @param message Restaurant
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(
      message: rpc.Restaurant,
      options?: $protobuf.IConversionOptions
    ): { [k: string]: any };

    /**
     * Converts this Restaurant to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
  }

  /** Represents a UsersService */
  class UsersService extends $protobuf.rpc.Service {
    /**
     * Constructs a new UsersService service.
     * @param rpcImpl RPC implementation
     * @param [requestDelimited=false] Whether requests are length-delimited
     * @param [responseDelimited=false] Whether responses are length-delimited
     */
    constructor(
      rpcImpl: $protobuf.RPCImpl,
      requestDelimited?: boolean,
      responseDelimited?: boolean
    );

    /**
     * Creates new UsersService service using the specified rpc implementation.
     * @param rpcImpl RPC implementation
     * @param [requestDelimited=false] Whether requests are length-delimited
     * @param [responseDelimited=false] Whether responses are length-delimited
     * @returns RPC service. Useful where requests and/or responses are streamed.
     */
    public static create(
      rpcImpl: $protobuf.RPCImpl,
      requestDelimited?: boolean,
      responseDelimited?: boolean
    ): UsersService;

    /**
     * Calls PostUser.
     * @param request PostUserRequest message or plain object
     * @param callback Node-style callback called with the error, if any, and PostUserResponse
     */
    public postUser(
      request: rpc.IPostUserRequest,
      callback: rpc.UsersService.PostUserCallback
    ): void;

    /**
     * Calls PostUser.
     * @param request PostUserRequest message or plain object
     * @returns Observable
     */
    public postUser(
      request: rpc.IPostUserRequest
    ): Observable<rpc.PostUserResponse>;

    /**
     * Calls GetUsers.
     * @param request GetUsersRequest message or plain object
     * @param callback Node-style callback called with the error, if any, and GetUsersResponse
     */
    public getUsers(
      request: rpc.IGetUsersRequest,
      callback: rpc.UsersService.GetUsersCallback
    ): void;

    /**
     * Calls GetUsers.
     * @param request GetUsersRequest message or plain object
     * @returns Observable
     */
    public getUsers(
      request: rpc.IGetUsersRequest
    ): Observable<rpc.GetUsersResponse>;

    /**
     * Calls GetUser.
     * @param request GetUserRequest message or plain object
     * @param callback Node-style callback called with the error, if any, and GetUserResponse
     */
    public getUser(
      request: rpc.IGetUserRequest,
      callback: rpc.UsersService.GetUserCallback
    ): void;

    /**
     * Calls GetUser.
     * @param request GetUserRequest message or plain object
     * @returns Observable
     */
    public getUser(
      request: rpc.IGetUserRequest
    ): Observable<rpc.GetUserResponse>;

    /**
     * Calls GetUserByUsername.
     * @param request GetUserByUsernameRequest message or plain object
     * @param callback Node-style callback called with the error, if any, and GetUserByUsernameResponse
     */
    public getUserByUsername(
      request: rpc.IGetUserByUsernameRequest,
      callback: rpc.UsersService.GetUserByUsernameCallback
    ): void;

    /**
     * Calls GetUserByUsername.
     * @param request GetUserByUsernameRequest message or plain object
     * @returns Observable
     */
    public getUserByUsername(
      request: rpc.IGetUserByUsernameRequest
    ): Observable<rpc.GetUserByUsernameResponse>;

    /**
     * Calls DeleteUser.
     * @param request DeleteUserRequest message or plain object
     * @param callback Node-style callback called with the error, if any, and DeleteUserResponse
     */
    public deleteUser(
      request: rpc.IDeleteUserRequest,
      callback: rpc.UsersService.DeleteUserCallback
    ): void;

    /**
     * Calls DeleteUser.
     * @param request DeleteUserRequest message or plain object
     * @returns Observable
     */
    public deleteUser(
      request: rpc.IDeleteUserRequest
    ): Observable<rpc.DeleteUserResponse>;
  }

  namespace UsersService {
    /**
     * Callback as used by {@link rpc.UsersService#postUser}.
     * @param error Error, if any
     * @param [response] PostUserResponse
     */
    type PostUserCallback = (
      error: Error | null,
      response?: rpc.PostUserResponse
    ) => void;

    /**
     * Callback as used by {@link rpc.UsersService#getUsers}.
     * @param error Error, if any
     * @param [response] GetUsersResponse
     */
    type GetUsersCallback = (
      error: Error | null,
      response?: rpc.GetUsersResponse
    ) => void;

    /**
     * Callback as used by {@link rpc.UsersService#getUser}.
     * @param error Error, if any
     * @param [response] GetUserResponse
     */
    type GetUserCallback = (
      error: Error | null,
      response?: rpc.GetUserResponse
    ) => void;

    /**
     * Callback as used by {@link rpc.UsersService#getUserByUsername}.
     * @param error Error, if any
     * @param [response] GetUserByUsernameResponse
     */
    type GetUserByUsernameCallback = (
      error: Error | null,
      response?: rpc.GetUserByUsernameResponse
    ) => void;

    /**
     * Callback as used by {@link rpc.UsersService#deleteUser}.
     * @param error Error, if any
     * @param [response] DeleteUserResponse
     */
    type DeleteUserCallback = (
      error: Error | null,
      response?: rpc.DeleteUserResponse
    ) => void;
  }

  /** Properties of a PostUserRequest. */
  interface IPostUserRequest {
    /** PostUserRequest username */
    username?: string | null;

    /** PostUserRequest password */
    password?: string | null;
  }

  /** Represents a PostUserRequest. */
  class PostUserRequest implements IPostUserRequest {
    /**
     * Constructs a new PostUserRequest.
     * @param [properties] Properties to set
     */
    constructor(properties?: rpc.IPostUserRequest);

    /** PostUserRequest username. */
    public username: string;

    /** PostUserRequest password. */
    public password: string;

    /**
     * Creates a new PostUserRequest instance using the specified properties.
     * @param [properties] Properties to set
     * @returns PostUserRequest instance
     */
    public static create(
      properties?: rpc.IPostUserRequest
    ): rpc.PostUserRequest;

    /**
     * Encodes the specified PostUserRequest message. Does not implicitly {@link rpc.PostUserRequest.verify|verify} messages.
     * @param message PostUserRequest message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(
      message: rpc.IPostUserRequest,
      writer?: $protobuf.Writer
    ): $protobuf.Writer;

    /**
     * Encodes the specified PostUserRequest message, length delimited. Does not implicitly {@link rpc.PostUserRequest.verify|verify} messages.
     * @param message PostUserRequest message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(
      message: rpc.IPostUserRequest,
      writer?: $protobuf.Writer
    ): $protobuf.Writer;

    /**
     * Decodes a PostUserRequest message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns PostUserRequest
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(
      reader: $protobuf.Reader | Uint8Array,
      length?: number
    ): rpc.PostUserRequest;

    /**
     * Decodes a PostUserRequest message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns PostUserRequest
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(
      reader: $protobuf.Reader | Uint8Array
    ): rpc.PostUserRequest;

    /**
     * Verifies a PostUserRequest message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): string | null;

    /**
     * Creates a PostUserRequest message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns PostUserRequest
     */
    public static fromObject(object: { [k: string]: any }): rpc.PostUserRequest;

    /**
     * Creates a plain object from a PostUserRequest message. Also converts values to other types if specified.
     * @param message PostUserRequest
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(
      message: rpc.PostUserRequest,
      options?: $protobuf.IConversionOptions
    ): { [k: string]: any };

    /**
     * Converts this PostUserRequest to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
  }

  /** Properties of a PostUserResponse. */
  interface IPostUserResponse {
    /** PostUserResponse userId */
    userId?: number | null;

    /** PostUserResponse username */
    username?: string | null;

    /** PostUserResponse password */
    password?: string | null;

    /** PostUserResponse isActive */
    isActive?: boolean | null;

    /** PostUserResponse createdAt */
    createdAt?: string | null;

    /** PostUserResponse updatedAt */
    updatedAt?: string | null;
  }

  /** Represents a PostUserResponse. */
  class PostUserResponse implements IPostUserResponse {
    /**
     * Constructs a new PostUserResponse.
     * @param [properties] Properties to set
     */
    constructor(properties?: rpc.IPostUserResponse);

    /** PostUserResponse userId. */
    public userId: number;

    /** PostUserResponse username. */
    public username: string;

    /** PostUserResponse password. */
    public password: string;

    /** PostUserResponse isActive. */
    public isActive: boolean;

    /** PostUserResponse createdAt. */
    public createdAt: string;

    /** PostUserResponse updatedAt. */
    public updatedAt: string;

    /**
     * Creates a new PostUserResponse instance using the specified properties.
     * @param [properties] Properties to set
     * @returns PostUserResponse instance
     */
    public static create(
      properties?: rpc.IPostUserResponse
    ): rpc.PostUserResponse;

    /**
     * Encodes the specified PostUserResponse message. Does not implicitly {@link rpc.PostUserResponse.verify|verify} messages.
     * @param message PostUserResponse message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(
      message: rpc.IPostUserResponse,
      writer?: $protobuf.Writer
    ): $protobuf.Writer;

    /**
     * Encodes the specified PostUserResponse message, length delimited. Does not implicitly {@link rpc.PostUserResponse.verify|verify} messages.
     * @param message PostUserResponse message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(
      message: rpc.IPostUserResponse,
      writer?: $protobuf.Writer
    ): $protobuf.Writer;

    /**
     * Decodes a PostUserResponse message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns PostUserResponse
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(
      reader: $protobuf.Reader | Uint8Array,
      length?: number
    ): rpc.PostUserResponse;

    /**
     * Decodes a PostUserResponse message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns PostUserResponse
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(
      reader: $protobuf.Reader | Uint8Array
    ): rpc.PostUserResponse;

    /**
     * Verifies a PostUserResponse message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): string | null;

    /**
     * Creates a PostUserResponse message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns PostUserResponse
     */
    public static fromObject(object: {
      [k: string]: any;
    }): rpc.PostUserResponse;

    /**
     * Creates a plain object from a PostUserResponse message. Also converts values to other types if specified.
     * @param message PostUserResponse
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(
      message: rpc.PostUserResponse,
      options?: $protobuf.IConversionOptions
    ): { [k: string]: any };

    /**
     * Converts this PostUserResponse to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
  }

  /** Properties of a GetUsersRequest. */
  interface IGetUsersRequest {}

  /** Represents a GetUsersRequest. */
  class GetUsersRequest implements IGetUsersRequest {
    /**
     * Constructs a new GetUsersRequest.
     * @param [properties] Properties to set
     */
    constructor(properties?: rpc.IGetUsersRequest);

    /**
     * Creates a new GetUsersRequest instance using the specified properties.
     * @param [properties] Properties to set
     * @returns GetUsersRequest instance
     */
    public static create(
      properties?: rpc.IGetUsersRequest
    ): rpc.GetUsersRequest;

    /**
     * Encodes the specified GetUsersRequest message. Does not implicitly {@link rpc.GetUsersRequest.verify|verify} messages.
     * @param message GetUsersRequest message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(
      message: rpc.IGetUsersRequest,
      writer?: $protobuf.Writer
    ): $protobuf.Writer;

    /**
     * Encodes the specified GetUsersRequest message, length delimited. Does not implicitly {@link rpc.GetUsersRequest.verify|verify} messages.
     * @param message GetUsersRequest message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(
      message: rpc.IGetUsersRequest,
      writer?: $protobuf.Writer
    ): $protobuf.Writer;

    /**
     * Decodes a GetUsersRequest message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns GetUsersRequest
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(
      reader: $protobuf.Reader | Uint8Array,
      length?: number
    ): rpc.GetUsersRequest;

    /**
     * Decodes a GetUsersRequest message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns GetUsersRequest
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(
      reader: $protobuf.Reader | Uint8Array
    ): rpc.GetUsersRequest;

    /**
     * Verifies a GetUsersRequest message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): string | null;

    /**
     * Creates a GetUsersRequest message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns GetUsersRequest
     */
    public static fromObject(object: { [k: string]: any }): rpc.GetUsersRequest;

    /**
     * Creates a plain object from a GetUsersRequest message. Also converts values to other types if specified.
     * @param message GetUsersRequest
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(
      message: rpc.GetUsersRequest,
      options?: $protobuf.IConversionOptions
    ): { [k: string]: any };

    /**
     * Converts this GetUsersRequest to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
  }

  /** Properties of a GetUsersResponse. */
  interface IGetUsersResponse {
    /** GetUsersResponse users */
    users?: rpc.IUser[] | null;
  }

  /** Represents a GetUsersResponse. */
  class GetUsersResponse implements IGetUsersResponse {
    /**
     * Constructs a new GetUsersResponse.
     * @param [properties] Properties to set
     */
    constructor(properties?: rpc.IGetUsersResponse);

    /** GetUsersResponse users. */
    public users: rpc.IUser[];

    /**
     * Creates a new GetUsersResponse instance using the specified properties.
     * @param [properties] Properties to set
     * @returns GetUsersResponse instance
     */
    public static create(
      properties?: rpc.IGetUsersResponse
    ): rpc.GetUsersResponse;

    /**
     * Encodes the specified GetUsersResponse message. Does not implicitly {@link rpc.GetUsersResponse.verify|verify} messages.
     * @param message GetUsersResponse message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(
      message: rpc.IGetUsersResponse,
      writer?: $protobuf.Writer
    ): $protobuf.Writer;

    /**
     * Encodes the specified GetUsersResponse message, length delimited. Does not implicitly {@link rpc.GetUsersResponse.verify|verify} messages.
     * @param message GetUsersResponse message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(
      message: rpc.IGetUsersResponse,
      writer?: $protobuf.Writer
    ): $protobuf.Writer;

    /**
     * Decodes a GetUsersResponse message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns GetUsersResponse
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(
      reader: $protobuf.Reader | Uint8Array,
      length?: number
    ): rpc.GetUsersResponse;

    /**
     * Decodes a GetUsersResponse message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns GetUsersResponse
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(
      reader: $protobuf.Reader | Uint8Array
    ): rpc.GetUsersResponse;

    /**
     * Verifies a GetUsersResponse message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): string | null;

    /**
     * Creates a GetUsersResponse message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns GetUsersResponse
     */
    public static fromObject(object: {
      [k: string]: any;
    }): rpc.GetUsersResponse;

    /**
     * Creates a plain object from a GetUsersResponse message. Also converts values to other types if specified.
     * @param message GetUsersResponse
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(
      message: rpc.GetUsersResponse,
      options?: $protobuf.IConversionOptions
    ): { [k: string]: any };

    /**
     * Converts this GetUsersResponse to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
  }

  /** Properties of a GetUserRequest. */
  interface IGetUserRequest {
    /** GetUserRequest userId */
    userId?: number | null;
  }

  /** Represents a GetUserRequest. */
  class GetUserRequest implements IGetUserRequest {
    /**
     * Constructs a new GetUserRequest.
     * @param [properties] Properties to set
     */
    constructor(properties?: rpc.IGetUserRequest);

    /** GetUserRequest userId. */
    public userId: number;

    /**
     * Creates a new GetUserRequest instance using the specified properties.
     * @param [properties] Properties to set
     * @returns GetUserRequest instance
     */
    public static create(properties?: rpc.IGetUserRequest): rpc.GetUserRequest;

    /**
     * Encodes the specified GetUserRequest message. Does not implicitly {@link rpc.GetUserRequest.verify|verify} messages.
     * @param message GetUserRequest message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(
      message: rpc.IGetUserRequest,
      writer?: $protobuf.Writer
    ): $protobuf.Writer;

    /**
     * Encodes the specified GetUserRequest message, length delimited. Does not implicitly {@link rpc.GetUserRequest.verify|verify} messages.
     * @param message GetUserRequest message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(
      message: rpc.IGetUserRequest,
      writer?: $protobuf.Writer
    ): $protobuf.Writer;

    /**
     * Decodes a GetUserRequest message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns GetUserRequest
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(
      reader: $protobuf.Reader | Uint8Array,
      length?: number
    ): rpc.GetUserRequest;

    /**
     * Decodes a GetUserRequest message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns GetUserRequest
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(
      reader: $protobuf.Reader | Uint8Array
    ): rpc.GetUserRequest;

    /**
     * Verifies a GetUserRequest message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): string | null;

    /**
     * Creates a GetUserRequest message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns GetUserRequest
     */
    public static fromObject(object: { [k: string]: any }): rpc.GetUserRequest;

    /**
     * Creates a plain object from a GetUserRequest message. Also converts values to other types if specified.
     * @param message GetUserRequest
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(
      message: rpc.GetUserRequest,
      options?: $protobuf.IConversionOptions
    ): { [k: string]: any };

    /**
     * Converts this GetUserRequest to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
  }

  /** Properties of a GetUserResponse. */
  interface IGetUserResponse {
    /** GetUserResponse userId */
    userId?: number | null;

    /** GetUserResponse username */
    username?: string | null;

    /** GetUserResponse password */
    password?: string | null;

    /** GetUserResponse isActive */
    isActive?: boolean | null;

    /** GetUserResponse createdAt */
    createdAt?: string | null;

    /** GetUserResponse updatedAt */
    updatedAt?: string | null;
  }

  /** Represents a GetUserResponse. */
  class GetUserResponse implements IGetUserResponse {
    /**
     * Constructs a new GetUserResponse.
     * @param [properties] Properties to set
     */
    constructor(properties?: rpc.IGetUserResponse);

    /** GetUserResponse userId. */
    public userId: number;

    /** GetUserResponse username. */
    public username: string;

    /** GetUserResponse password. */
    public password: string;

    /** GetUserResponse isActive. */
    public isActive: boolean;

    /** GetUserResponse createdAt. */
    public createdAt: string;

    /** GetUserResponse updatedAt. */
    public updatedAt: string;

    /**
     * Creates a new GetUserResponse instance using the specified properties.
     * @param [properties] Properties to set
     * @returns GetUserResponse instance
     */
    public static create(
      properties?: rpc.IGetUserResponse
    ): rpc.GetUserResponse;

    /**
     * Encodes the specified GetUserResponse message. Does not implicitly {@link rpc.GetUserResponse.verify|verify} messages.
     * @param message GetUserResponse message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(
      message: rpc.IGetUserResponse,
      writer?: $protobuf.Writer
    ): $protobuf.Writer;

    /**
     * Encodes the specified GetUserResponse message, length delimited. Does not implicitly {@link rpc.GetUserResponse.verify|verify} messages.
     * @param message GetUserResponse message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(
      message: rpc.IGetUserResponse,
      writer?: $protobuf.Writer
    ): $protobuf.Writer;

    /**
     * Decodes a GetUserResponse message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns GetUserResponse
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(
      reader: $protobuf.Reader | Uint8Array,
      length?: number
    ): rpc.GetUserResponse;

    /**
     * Decodes a GetUserResponse message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns GetUserResponse
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(
      reader: $protobuf.Reader | Uint8Array
    ): rpc.GetUserResponse;

    /**
     * Verifies a GetUserResponse message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): string | null;

    /**
     * Creates a GetUserResponse message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns GetUserResponse
     */
    public static fromObject(object: { [k: string]: any }): rpc.GetUserResponse;

    /**
     * Creates a plain object from a GetUserResponse message. Also converts values to other types if specified.
     * @param message GetUserResponse
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(
      message: rpc.GetUserResponse,
      options?: $protobuf.IConversionOptions
    ): { [k: string]: any };

    /**
     * Converts this GetUserResponse to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
  }

  /** Properties of a GetUserByUsernameRequest. */
  interface IGetUserByUsernameRequest {
    /** GetUserByUsernameRequest username */
    username?: string | null;
  }

  /** Represents a GetUserByUsernameRequest. */
  class GetUserByUsernameRequest implements IGetUserByUsernameRequest {
    /**
     * Constructs a new GetUserByUsernameRequest.
     * @param [properties] Properties to set
     */
    constructor(properties?: rpc.IGetUserByUsernameRequest);

    /** GetUserByUsernameRequest username. */
    public username: string;

    /**
     * Creates a new GetUserByUsernameRequest instance using the specified properties.
     * @param [properties] Properties to set
     * @returns GetUserByUsernameRequest instance
     */
    public static create(
      properties?: rpc.IGetUserByUsernameRequest
    ): rpc.GetUserByUsernameRequest;

    /**
     * Encodes the specified GetUserByUsernameRequest message. Does not implicitly {@link rpc.GetUserByUsernameRequest.verify|verify} messages.
     * @param message GetUserByUsernameRequest message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(
      message: rpc.IGetUserByUsernameRequest,
      writer?: $protobuf.Writer
    ): $protobuf.Writer;

    /**
     * Encodes the specified GetUserByUsernameRequest message, length delimited. Does not implicitly {@link rpc.GetUserByUsernameRequest.verify|verify} messages.
     * @param message GetUserByUsernameRequest message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(
      message: rpc.IGetUserByUsernameRequest,
      writer?: $protobuf.Writer
    ): $protobuf.Writer;

    /**
     * Decodes a GetUserByUsernameRequest message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns GetUserByUsernameRequest
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(
      reader: $protobuf.Reader | Uint8Array,
      length?: number
    ): rpc.GetUserByUsernameRequest;

    /**
     * Decodes a GetUserByUsernameRequest message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns GetUserByUsernameRequest
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(
      reader: $protobuf.Reader | Uint8Array
    ): rpc.GetUserByUsernameRequest;

    /**
     * Verifies a GetUserByUsernameRequest message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): string | null;

    /**
     * Creates a GetUserByUsernameRequest message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns GetUserByUsernameRequest
     */
    public static fromObject(object: {
      [k: string]: any;
    }): rpc.GetUserByUsernameRequest;

    /**
     * Creates a plain object from a GetUserByUsernameRequest message. Also converts values to other types if specified.
     * @param message GetUserByUsernameRequest
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(
      message: rpc.GetUserByUsernameRequest,
      options?: $protobuf.IConversionOptions
    ): { [k: string]: any };

    /**
     * Converts this GetUserByUsernameRequest to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
  }

  /** Properties of a GetUserByUsernameResponse. */
  interface IGetUserByUsernameResponse {
    /** GetUserByUsernameResponse userId */
    userId?: number | null;

    /** GetUserByUsernameResponse username */
    username?: string | null;

    /** GetUserByUsernameResponse password */
    password?: string | null;

    /** GetUserByUsernameResponse isActive */
    isActive?: boolean | null;

    /** GetUserByUsernameResponse createdAt */
    createdAt?: string | null;

    /** GetUserByUsernameResponse updatedAt */
    updatedAt?: string | null;
  }

  /** Represents a GetUserByUsernameResponse. */
  class GetUserByUsernameResponse implements IGetUserByUsernameResponse {
    /**
     * Constructs a new GetUserByUsernameResponse.
     * @param [properties] Properties to set
     */
    constructor(properties?: rpc.IGetUserByUsernameResponse);

    /** GetUserByUsernameResponse userId. */
    public userId: number;

    /** GetUserByUsernameResponse username. */
    public username: string;

    /** GetUserByUsernameResponse password. */
    public password: string;

    /** GetUserByUsernameResponse isActive. */
    public isActive: boolean;

    /** GetUserByUsernameResponse createdAt. */
    public createdAt: string;

    /** GetUserByUsernameResponse updatedAt. */
    public updatedAt: string;

    /**
     * Creates a new GetUserByUsernameResponse instance using the specified properties.
     * @param [properties] Properties to set
     * @returns GetUserByUsernameResponse instance
     */
    public static create(
      properties?: rpc.IGetUserByUsernameResponse
    ): rpc.GetUserByUsernameResponse;

    /**
     * Encodes the specified GetUserByUsernameResponse message. Does not implicitly {@link rpc.GetUserByUsernameResponse.verify|verify} messages.
     * @param message GetUserByUsernameResponse message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(
      message: rpc.IGetUserByUsernameResponse,
      writer?: $protobuf.Writer
    ): $protobuf.Writer;

    /**
     * Encodes the specified GetUserByUsernameResponse message, length delimited. Does not implicitly {@link rpc.GetUserByUsernameResponse.verify|verify} messages.
     * @param message GetUserByUsernameResponse message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(
      message: rpc.IGetUserByUsernameResponse,
      writer?: $protobuf.Writer
    ): $protobuf.Writer;

    /**
     * Decodes a GetUserByUsernameResponse message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns GetUserByUsernameResponse
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(
      reader: $protobuf.Reader | Uint8Array,
      length?: number
    ): rpc.GetUserByUsernameResponse;

    /**
     * Decodes a GetUserByUsernameResponse message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns GetUserByUsernameResponse
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(
      reader: $protobuf.Reader | Uint8Array
    ): rpc.GetUserByUsernameResponse;

    /**
     * Verifies a GetUserByUsernameResponse message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): string | null;

    /**
     * Creates a GetUserByUsernameResponse message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns GetUserByUsernameResponse
     */
    public static fromObject(object: {
      [k: string]: any;
    }): rpc.GetUserByUsernameResponse;

    /**
     * Creates a plain object from a GetUserByUsernameResponse message. Also converts values to other types if specified.
     * @param message GetUserByUsernameResponse
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(
      message: rpc.GetUserByUsernameResponse,
      options?: $protobuf.IConversionOptions
    ): { [k: string]: any };

    /**
     * Converts this GetUserByUsernameResponse to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
  }

  /** Properties of a DeleteUserRequest. */
  interface IDeleteUserRequest {
    /** DeleteUserRequest userId */
    userId?: number | null;
  }

  /** Represents a DeleteUserRequest. */
  class DeleteUserRequest implements IDeleteUserRequest {
    /**
     * Constructs a new DeleteUserRequest.
     * @param [properties] Properties to set
     */
    constructor(properties?: rpc.IDeleteUserRequest);

    /** DeleteUserRequest userId. */
    public userId: number;

    /**
     * Creates a new DeleteUserRequest instance using the specified properties.
     * @param [properties] Properties to set
     * @returns DeleteUserRequest instance
     */
    public static create(
      properties?: rpc.IDeleteUserRequest
    ): rpc.DeleteUserRequest;

    /**
     * Encodes the specified DeleteUserRequest message. Does not implicitly {@link rpc.DeleteUserRequest.verify|verify} messages.
     * @param message DeleteUserRequest message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(
      message: rpc.IDeleteUserRequest,
      writer?: $protobuf.Writer
    ): $protobuf.Writer;

    /**
     * Encodes the specified DeleteUserRequest message, length delimited. Does not implicitly {@link rpc.DeleteUserRequest.verify|verify} messages.
     * @param message DeleteUserRequest message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(
      message: rpc.IDeleteUserRequest,
      writer?: $protobuf.Writer
    ): $protobuf.Writer;

    /**
     * Decodes a DeleteUserRequest message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns DeleteUserRequest
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(
      reader: $protobuf.Reader | Uint8Array,
      length?: number
    ): rpc.DeleteUserRequest;

    /**
     * Decodes a DeleteUserRequest message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns DeleteUserRequest
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(
      reader: $protobuf.Reader | Uint8Array
    ): rpc.DeleteUserRequest;

    /**
     * Verifies a DeleteUserRequest message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): string | null;

    /**
     * Creates a DeleteUserRequest message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns DeleteUserRequest
     */
    public static fromObject(object: {
      [k: string]: any;
    }): rpc.DeleteUserRequest;

    /**
     * Creates a plain object from a DeleteUserRequest message. Also converts values to other types if specified.
     * @param message DeleteUserRequest
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(
      message: rpc.DeleteUserRequest,
      options?: $protobuf.IConversionOptions
    ): { [k: string]: any };

    /**
     * Converts this DeleteUserRequest to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
  }

  /** Properties of a DeleteUserResponse. */
  interface IDeleteUserResponse {
    /** DeleteUserResponse userId */
    userId?: number | null;

    /** DeleteUserResponse username */
    username?: string | null;

    /** DeleteUserResponse password */
    password?: string | null;

    /** DeleteUserResponse isActive */
    isActive?: boolean | null;

    /** DeleteUserResponse createdAt */
    createdAt?: string | null;

    /** DeleteUserResponse updatedAt */
    updatedAt?: string | null;
  }

  /** Represents a DeleteUserResponse. */
  class DeleteUserResponse implements IDeleteUserResponse {
    /**
     * Constructs a new DeleteUserResponse.
     * @param [properties] Properties to set
     */
    constructor(properties?: rpc.IDeleteUserResponse);

    /** DeleteUserResponse userId. */
    public userId: number;

    /** DeleteUserResponse username. */
    public username: string;

    /** DeleteUserResponse password. */
    public password: string;

    /** DeleteUserResponse isActive. */
    public isActive: boolean;

    /** DeleteUserResponse createdAt. */
    public createdAt: string;

    /** DeleteUserResponse updatedAt. */
    public updatedAt: string;

    /**
     * Creates a new DeleteUserResponse instance using the specified properties.
     * @param [properties] Properties to set
     * @returns DeleteUserResponse instance
     */
    public static create(
      properties?: rpc.IDeleteUserResponse
    ): rpc.DeleteUserResponse;

    /**
     * Encodes the specified DeleteUserResponse message. Does not implicitly {@link rpc.DeleteUserResponse.verify|verify} messages.
     * @param message DeleteUserResponse message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(
      message: rpc.IDeleteUserResponse,
      writer?: $protobuf.Writer
    ): $protobuf.Writer;

    /**
     * Encodes the specified DeleteUserResponse message, length delimited. Does not implicitly {@link rpc.DeleteUserResponse.verify|verify} messages.
     * @param message DeleteUserResponse message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(
      message: rpc.IDeleteUserResponse,
      writer?: $protobuf.Writer
    ): $protobuf.Writer;

    /**
     * Decodes a DeleteUserResponse message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns DeleteUserResponse
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(
      reader: $protobuf.Reader | Uint8Array,
      length?: number
    ): rpc.DeleteUserResponse;

    /**
     * Decodes a DeleteUserResponse message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns DeleteUserResponse
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(
      reader: $protobuf.Reader | Uint8Array
    ): rpc.DeleteUserResponse;

    /**
     * Verifies a DeleteUserResponse message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): string | null;

    /**
     * Creates a DeleteUserResponse message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns DeleteUserResponse
     */
    public static fromObject(object: {
      [k: string]: any;
    }): rpc.DeleteUserResponse;

    /**
     * Creates a plain object from a DeleteUserResponse message. Also converts values to other types if specified.
     * @param message DeleteUserResponse
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(
      message: rpc.DeleteUserResponse,
      options?: $protobuf.IConversionOptions
    ): { [k: string]: any };

    /**
     * Converts this DeleteUserResponse to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
  }

  /** Properties of a User. */
  interface IUser {
    /** User userId */
    userId?: number | null;

    /** User username */
    username?: string | null;

    /** User password */
    password?: string | null;

    /** User isActive */
    isActive?: boolean | null;

    /** User createdAt */
    createdAt?: string | null;

    /** User updatedAt */
    updatedAt?: string | null;
  }

  /** Represents a User. */
  class User implements IUser {
    /**
     * Constructs a new User.
     * @param [properties] Properties to set
     */
    constructor(properties?: rpc.IUser);

    /** User userId. */
    public userId: number;

    /** User username. */
    public username: string;

    /** User password. */
    public password: string;

    /** User isActive. */
    public isActive: boolean;

    /** User createdAt. */
    public createdAt: string;

    /** User updatedAt. */
    public updatedAt: string;

    /**
     * Creates a new User instance using the specified properties.
     * @param [properties] Properties to set
     * @returns User instance
     */
    public static create(properties?: rpc.IUser): rpc.User;

    /**
     * Encodes the specified User message. Does not implicitly {@link rpc.User.verify|verify} messages.
     * @param message User message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(
      message: rpc.IUser,
      writer?: $protobuf.Writer
    ): $protobuf.Writer;

    /**
     * Encodes the specified User message, length delimited. Does not implicitly {@link rpc.User.verify|verify} messages.
     * @param message User message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(
      message: rpc.IUser,
      writer?: $protobuf.Writer
    ): $protobuf.Writer;

    /**
     * Decodes a User message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns User
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(
      reader: $protobuf.Reader | Uint8Array,
      length?: number
    ): rpc.User;

    /**
     * Decodes a User message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns User
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(
      reader: $protobuf.Reader | Uint8Array
    ): rpc.User;

    /**
     * Verifies a User message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): string | null;

    /**
     * Creates a User message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns User
     */
    public static fromObject(object: { [k: string]: any }): rpc.User;

    /**
     * Creates a plain object from a User message. Also converts values to other types if specified.
     * @param message User
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(
      message: rpc.User,
      options?: $protobuf.IConversionOptions
    ): { [k: string]: any };

    /**
     * Converts this User to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
  }
}
