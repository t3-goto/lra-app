/*eslint-disable block-scoped-var, id-length, no-control-regex, no-magic-numbers, no-prototype-builtins, no-redeclare, no-shadow, no-var, sort-vars*/
"use strict";

var $protobuf = require("protobufjs/minimal");

// Common aliases
var $Reader = $protobuf.Reader, $Writer = $protobuf.Writer, $util = $protobuf.util;

// Exported root namespace
var $root = $protobuf.roots["default"] || ($protobuf.roots["default"] = {});

$root.rpc = (function() {

    /**
     * Namespace rpc.
     * @exports rpc
     * @namespace
     */
    var rpc = {};

    rpc.GeocodingService = (function() {

        /**
         * Constructs a new GeocodingService service.
         * @memberof rpc
         * @classdesc Represents a GeocodingService
         * @extends $protobuf.rpc.Service
         * @constructor
         * @param {$protobuf.RPCImpl} rpcImpl RPC implementation
         * @param {boolean} [requestDelimited=false] Whether requests are length-delimited
         * @param {boolean} [responseDelimited=false] Whether responses are length-delimited
         */
        function GeocodingService(rpcImpl, requestDelimited, responseDelimited) {
            $protobuf.rpc.Service.call(this, rpcImpl, requestDelimited, responseDelimited);
        }

        (GeocodingService.prototype = Object.create($protobuf.rpc.Service.prototype)).constructor = GeocodingService;

        /**
         * Creates new GeocodingService service using the specified rpc implementation.
         * @function create
         * @memberof rpc.GeocodingService
         * @static
         * @param {$protobuf.RPCImpl} rpcImpl RPC implementation
         * @param {boolean} [requestDelimited=false] Whether requests are length-delimited
         * @param {boolean} [responseDelimited=false] Whether responses are length-delimited
         * @returns {GeocodingService} RPC service. Useful where requests and/or responses are streamed.
         */
        GeocodingService.create = function create(rpcImpl, requestDelimited, responseDelimited) {
            return new this(rpcImpl, requestDelimited, responseDelimited);
        };

        /**
         * Callback as used by {@link rpc.GeocodingService#getGeocoding}.
         * @memberof rpc.GeocodingService
         * @typedef GetGeocodingCallback
         * @type {function}
         * @param {Error|null} error Error, if any
         * @param {rpc.GetGeocodingResponse} [response] GetGeocodingResponse
         */

        /**
         * Calls GetGeocoding.
         * @function getGeocoding
         * @memberof rpc.GeocodingService
         * @instance
         * @param {rpc.IGetGeocodingRequest} request GetGeocodingRequest message or plain object
         * @param {rpc.GeocodingService.GetGeocodingCallback} callback Node-style callback called with the error, if any, and GetGeocodingResponse
         * @returns {undefined}
         * @variation 1
         */
        Object.defineProperty(GeocodingService.prototype.getGeocoding = function getGeocoding(request, callback) {
            return this.rpcCall(getGeocoding, $root.rpc.GetGeocodingRequest, $root.rpc.GetGeocodingResponse, request, callback);
        }, "name", { value: "GetGeocoding" });

        /**
         * Calls GetGeocoding.
         * @function getGeocoding
         * @memberof rpc.GeocodingService
         * @instance
         * @param {rpc.IGetGeocodingRequest} request GetGeocodingRequest message or plain object
         * @returns {Promise<rpc.GetGeocodingResponse>} Promise
         * @variation 2
         */

        return GeocodingService;
    })();

    rpc.GetGeocodingRequest = (function() {

        /**
         * Properties of a GetGeocodingRequest.
         * @memberof rpc
         * @interface IGetGeocodingRequest
         * @property {string|null} [address] GetGeocodingRequest address
         */

        /**
         * Constructs a new GetGeocodingRequest.
         * @memberof rpc
         * @classdesc Represents a GetGeocodingRequest.
         * @implements IGetGeocodingRequest
         * @constructor
         * @param {rpc.IGetGeocodingRequest=} [properties] Properties to set
         */
        function GetGeocodingRequest(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * GetGeocodingRequest address.
         * @member {string} address
         * @memberof rpc.GetGeocodingRequest
         * @instance
         */
        GetGeocodingRequest.prototype.address = "";

        /**
         * Creates a new GetGeocodingRequest instance using the specified properties.
         * @function create
         * @memberof rpc.GetGeocodingRequest
         * @static
         * @param {rpc.IGetGeocodingRequest=} [properties] Properties to set
         * @returns {rpc.GetGeocodingRequest} GetGeocodingRequest instance
         */
        GetGeocodingRequest.create = function create(properties) {
            return new GetGeocodingRequest(properties);
        };

        /**
         * Encodes the specified GetGeocodingRequest message. Does not implicitly {@link rpc.GetGeocodingRequest.verify|verify} messages.
         * @function encode
         * @memberof rpc.GetGeocodingRequest
         * @static
         * @param {rpc.IGetGeocodingRequest} message GetGeocodingRequest message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        GetGeocodingRequest.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.address != null && Object.hasOwnProperty.call(message, "address"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.address);
            return writer;
        };

        /**
         * Encodes the specified GetGeocodingRequest message, length delimited. Does not implicitly {@link rpc.GetGeocodingRequest.verify|verify} messages.
         * @function encodeDelimited
         * @memberof rpc.GetGeocodingRequest
         * @static
         * @param {rpc.IGetGeocodingRequest} message GetGeocodingRequest message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        GetGeocodingRequest.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a GetGeocodingRequest message from the specified reader or buffer.
         * @function decode
         * @memberof rpc.GetGeocodingRequest
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {rpc.GetGeocodingRequest} GetGeocodingRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        GetGeocodingRequest.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.rpc.GetGeocodingRequest();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.address = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a GetGeocodingRequest message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof rpc.GetGeocodingRequest
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {rpc.GetGeocodingRequest} GetGeocodingRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        GetGeocodingRequest.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a GetGeocodingRequest message.
         * @function verify
         * @memberof rpc.GetGeocodingRequest
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        GetGeocodingRequest.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.address != null && message.hasOwnProperty("address"))
                if (!$util.isString(message.address))
                    return "address: string expected";
            return null;
        };

        /**
         * Creates a GetGeocodingRequest message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof rpc.GetGeocodingRequest
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {rpc.GetGeocodingRequest} GetGeocodingRequest
         */
        GetGeocodingRequest.fromObject = function fromObject(object) {
            if (object instanceof $root.rpc.GetGeocodingRequest)
                return object;
            var message = new $root.rpc.GetGeocodingRequest();
            if (object.address != null)
                message.address = String(object.address);
            return message;
        };

        /**
         * Creates a plain object from a GetGeocodingRequest message. Also converts values to other types if specified.
         * @function toObject
         * @memberof rpc.GetGeocodingRequest
         * @static
         * @param {rpc.GetGeocodingRequest} message GetGeocodingRequest
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        GetGeocodingRequest.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults)
                object.address = "";
            if (message.address != null && message.hasOwnProperty("address"))
                object.address = message.address;
            return object;
        };

        /**
         * Converts this GetGeocodingRequest to JSON.
         * @function toJSON
         * @memberof rpc.GetGeocodingRequest
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        GetGeocodingRequest.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return GetGeocodingRequest;
    })();

    rpc.GetGeocodingResponse = (function() {

        /**
         * Properties of a GetGeocodingResponse.
         * @memberof rpc
         * @interface IGetGeocodingResponse
         * @property {number|null} [latitude] GetGeocodingResponse latitude
         * @property {number|null} [longitude] GetGeocodingResponse longitude
         */

        /**
         * Constructs a new GetGeocodingResponse.
         * @memberof rpc
         * @classdesc Represents a GetGeocodingResponse.
         * @implements IGetGeocodingResponse
         * @constructor
         * @param {rpc.IGetGeocodingResponse=} [properties] Properties to set
         */
        function GetGeocodingResponse(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * GetGeocodingResponse latitude.
         * @member {number} latitude
         * @memberof rpc.GetGeocodingResponse
         * @instance
         */
        GetGeocodingResponse.prototype.latitude = 0;

        /**
         * GetGeocodingResponse longitude.
         * @member {number} longitude
         * @memberof rpc.GetGeocodingResponse
         * @instance
         */
        GetGeocodingResponse.prototype.longitude = 0;

        /**
         * Creates a new GetGeocodingResponse instance using the specified properties.
         * @function create
         * @memberof rpc.GetGeocodingResponse
         * @static
         * @param {rpc.IGetGeocodingResponse=} [properties] Properties to set
         * @returns {rpc.GetGeocodingResponse} GetGeocodingResponse instance
         */
        GetGeocodingResponse.create = function create(properties) {
            return new GetGeocodingResponse(properties);
        };

        /**
         * Encodes the specified GetGeocodingResponse message. Does not implicitly {@link rpc.GetGeocodingResponse.verify|verify} messages.
         * @function encode
         * @memberof rpc.GetGeocodingResponse
         * @static
         * @param {rpc.IGetGeocodingResponse} message GetGeocodingResponse message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        GetGeocodingResponse.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.latitude != null && Object.hasOwnProperty.call(message, "latitude"))
                writer.uint32(/* id 1, wireType 1 =*/9).double(message.latitude);
            if (message.longitude != null && Object.hasOwnProperty.call(message, "longitude"))
                writer.uint32(/* id 2, wireType 1 =*/17).double(message.longitude);
            return writer;
        };

        /**
         * Encodes the specified GetGeocodingResponse message, length delimited. Does not implicitly {@link rpc.GetGeocodingResponse.verify|verify} messages.
         * @function encodeDelimited
         * @memberof rpc.GetGeocodingResponse
         * @static
         * @param {rpc.IGetGeocodingResponse} message GetGeocodingResponse message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        GetGeocodingResponse.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a GetGeocodingResponse message from the specified reader or buffer.
         * @function decode
         * @memberof rpc.GetGeocodingResponse
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {rpc.GetGeocodingResponse} GetGeocodingResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        GetGeocodingResponse.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.rpc.GetGeocodingResponse();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.latitude = reader.double();
                    break;
                case 2:
                    message.longitude = reader.double();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a GetGeocodingResponse message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof rpc.GetGeocodingResponse
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {rpc.GetGeocodingResponse} GetGeocodingResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        GetGeocodingResponse.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a GetGeocodingResponse message.
         * @function verify
         * @memberof rpc.GetGeocodingResponse
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        GetGeocodingResponse.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.latitude != null && message.hasOwnProperty("latitude"))
                if (typeof message.latitude !== "number")
                    return "latitude: number expected";
            if (message.longitude != null && message.hasOwnProperty("longitude"))
                if (typeof message.longitude !== "number")
                    return "longitude: number expected";
            return null;
        };

        /**
         * Creates a GetGeocodingResponse message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof rpc.GetGeocodingResponse
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {rpc.GetGeocodingResponse} GetGeocodingResponse
         */
        GetGeocodingResponse.fromObject = function fromObject(object) {
            if (object instanceof $root.rpc.GetGeocodingResponse)
                return object;
            var message = new $root.rpc.GetGeocodingResponse();
            if (object.latitude != null)
                message.latitude = Number(object.latitude);
            if (object.longitude != null)
                message.longitude = Number(object.longitude);
            return message;
        };

        /**
         * Creates a plain object from a GetGeocodingResponse message. Also converts values to other types if specified.
         * @function toObject
         * @memberof rpc.GetGeocodingResponse
         * @static
         * @param {rpc.GetGeocodingResponse} message GetGeocodingResponse
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        GetGeocodingResponse.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.latitude = 0;
                object.longitude = 0;
            }
            if (message.latitude != null && message.hasOwnProperty("latitude"))
                object.latitude = options.json && !isFinite(message.latitude) ? String(message.latitude) : message.latitude;
            if (message.longitude != null && message.hasOwnProperty("longitude"))
                object.longitude = options.json && !isFinite(message.longitude) ? String(message.longitude) : message.longitude;
            return object;
        };

        /**
         * Converts this GetGeocodingResponse to JSON.
         * @function toJSON
         * @memberof rpc.GetGeocodingResponse
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        GetGeocodingResponse.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return GetGeocodingResponse;
    })();

    rpc.RestaurantsService = (function() {

        /**
         * Constructs a new RestaurantsService service.
         * @memberof rpc
         * @classdesc Represents a RestaurantsService
         * @extends $protobuf.rpc.Service
         * @constructor
         * @param {$protobuf.RPCImpl} rpcImpl RPC implementation
         * @param {boolean} [requestDelimited=false] Whether requests are length-delimited
         * @param {boolean} [responseDelimited=false] Whether responses are length-delimited
         */
        function RestaurantsService(rpcImpl, requestDelimited, responseDelimited) {
            $protobuf.rpc.Service.call(this, rpcImpl, requestDelimited, responseDelimited);
        }

        (RestaurantsService.prototype = Object.create($protobuf.rpc.Service.prototype)).constructor = RestaurantsService;

        /**
         * Creates new RestaurantsService service using the specified rpc implementation.
         * @function create
         * @memberof rpc.RestaurantsService
         * @static
         * @param {$protobuf.RPCImpl} rpcImpl RPC implementation
         * @param {boolean} [requestDelimited=false] Whether requests are length-delimited
         * @param {boolean} [responseDelimited=false] Whether responses are length-delimited
         * @returns {RestaurantsService} RPC service. Useful where requests and/or responses are streamed.
         */
        RestaurantsService.create = function create(rpcImpl, requestDelimited, responseDelimited) {
            return new this(rpcImpl, requestDelimited, responseDelimited);
        };

        /**
         * Callback as used by {@link rpc.RestaurantsService#getRestaurants}.
         * @memberof rpc.RestaurantsService
         * @typedef GetRestaurantsCallback
         * @type {function}
         * @param {Error|null} error Error, if any
         * @param {rpc.GetRestaurantsResponse} [response] GetRestaurantsResponse
         */

        /**
         * Calls GetRestaurants.
         * @function getRestaurants
         * @memberof rpc.RestaurantsService
         * @instance
         * @param {rpc.IGetRestaurantsRequest} request GetRestaurantsRequest message or plain object
         * @param {rpc.RestaurantsService.GetRestaurantsCallback} callback Node-style callback called with the error, if any, and GetRestaurantsResponse
         * @returns {undefined}
         * @variation 1
         */
        Object.defineProperty(RestaurantsService.prototype.getRestaurants = function getRestaurants(request, callback) {
            return this.rpcCall(getRestaurants, $root.rpc.GetRestaurantsRequest, $root.rpc.GetRestaurantsResponse, request, callback);
        }, "name", { value: "GetRestaurants" });

        /**
         * Calls GetRestaurants.
         * @function getRestaurants
         * @memberof rpc.RestaurantsService
         * @instance
         * @param {rpc.IGetRestaurantsRequest} request GetRestaurantsRequest message or plain object
         * @returns {Promise<rpc.GetRestaurantsResponse>} Promise
         * @variation 2
         */

        return RestaurantsService;
    })();

    rpc.GetRestaurantsRequest = (function() {

        /**
         * Properties of a GetRestaurantsRequest.
         * @memberof rpc
         * @interface IGetRestaurantsRequest
         * @property {number|null} [latitude] GetRestaurantsRequest latitude
         * @property {number|null} [longitude] GetRestaurantsRequest longitude
         * @property {number|null} [range] GetRestaurantsRequest range
         * @property {number|null} [pageOffset] GetRestaurantsRequest pageOffset
         * @property {number|null} [hitPerPage] GetRestaurantsRequest hitPerPage
         * @property {string|null} [address] GetRestaurantsRequest address
         */

        /**
         * Constructs a new GetRestaurantsRequest.
         * @memberof rpc
         * @classdesc Represents a GetRestaurantsRequest.
         * @implements IGetRestaurantsRequest
         * @constructor
         * @param {rpc.IGetRestaurantsRequest=} [properties] Properties to set
         */
        function GetRestaurantsRequest(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * GetRestaurantsRequest latitude.
         * @member {number} latitude
         * @memberof rpc.GetRestaurantsRequest
         * @instance
         */
        GetRestaurantsRequest.prototype.latitude = 0;

        /**
         * GetRestaurantsRequest longitude.
         * @member {number} longitude
         * @memberof rpc.GetRestaurantsRequest
         * @instance
         */
        GetRestaurantsRequest.prototype.longitude = 0;

        /**
         * GetRestaurantsRequest range.
         * @member {number} range
         * @memberof rpc.GetRestaurantsRequest
         * @instance
         */
        GetRestaurantsRequest.prototype.range = 0;

        /**
         * GetRestaurantsRequest pageOffset.
         * @member {number} pageOffset
         * @memberof rpc.GetRestaurantsRequest
         * @instance
         */
        GetRestaurantsRequest.prototype.pageOffset = 0;

        /**
         * GetRestaurantsRequest hitPerPage.
         * @member {number} hitPerPage
         * @memberof rpc.GetRestaurantsRequest
         * @instance
         */
        GetRestaurantsRequest.prototype.hitPerPage = 0;

        /**
         * GetRestaurantsRequest address.
         * @member {string} address
         * @memberof rpc.GetRestaurantsRequest
         * @instance
         */
        GetRestaurantsRequest.prototype.address = "";

        /**
         * Creates a new GetRestaurantsRequest instance using the specified properties.
         * @function create
         * @memberof rpc.GetRestaurantsRequest
         * @static
         * @param {rpc.IGetRestaurantsRequest=} [properties] Properties to set
         * @returns {rpc.GetRestaurantsRequest} GetRestaurantsRequest instance
         */
        GetRestaurantsRequest.create = function create(properties) {
            return new GetRestaurantsRequest(properties);
        };

        /**
         * Encodes the specified GetRestaurantsRequest message. Does not implicitly {@link rpc.GetRestaurantsRequest.verify|verify} messages.
         * @function encode
         * @memberof rpc.GetRestaurantsRequest
         * @static
         * @param {rpc.IGetRestaurantsRequest} message GetRestaurantsRequest message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        GetRestaurantsRequest.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.latitude != null && Object.hasOwnProperty.call(message, "latitude"))
                writer.uint32(/* id 1, wireType 1 =*/9).double(message.latitude);
            if (message.longitude != null && Object.hasOwnProperty.call(message, "longitude"))
                writer.uint32(/* id 2, wireType 1 =*/17).double(message.longitude);
            if (message.range != null && Object.hasOwnProperty.call(message, "range"))
                writer.uint32(/* id 3, wireType 0 =*/24).int32(message.range);
            if (message.pageOffset != null && Object.hasOwnProperty.call(message, "pageOffset"))
                writer.uint32(/* id 4, wireType 0 =*/32).int32(message.pageOffset);
            if (message.hitPerPage != null && Object.hasOwnProperty.call(message, "hitPerPage"))
                writer.uint32(/* id 5, wireType 0 =*/40).int32(message.hitPerPage);
            if (message.address != null && Object.hasOwnProperty.call(message, "address"))
                writer.uint32(/* id 6, wireType 2 =*/50).string(message.address);
            return writer;
        };

        /**
         * Encodes the specified GetRestaurantsRequest message, length delimited. Does not implicitly {@link rpc.GetRestaurantsRequest.verify|verify} messages.
         * @function encodeDelimited
         * @memberof rpc.GetRestaurantsRequest
         * @static
         * @param {rpc.IGetRestaurantsRequest} message GetRestaurantsRequest message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        GetRestaurantsRequest.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a GetRestaurantsRequest message from the specified reader or buffer.
         * @function decode
         * @memberof rpc.GetRestaurantsRequest
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {rpc.GetRestaurantsRequest} GetRestaurantsRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        GetRestaurantsRequest.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.rpc.GetRestaurantsRequest();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.latitude = reader.double();
                    break;
                case 2:
                    message.longitude = reader.double();
                    break;
                case 3:
                    message.range = reader.int32();
                    break;
                case 4:
                    message.pageOffset = reader.int32();
                    break;
                case 5:
                    message.hitPerPage = reader.int32();
                    break;
                case 6:
                    message.address = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a GetRestaurantsRequest message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof rpc.GetRestaurantsRequest
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {rpc.GetRestaurantsRequest} GetRestaurantsRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        GetRestaurantsRequest.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a GetRestaurantsRequest message.
         * @function verify
         * @memberof rpc.GetRestaurantsRequest
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        GetRestaurantsRequest.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.latitude != null && message.hasOwnProperty("latitude"))
                if (typeof message.latitude !== "number")
                    return "latitude: number expected";
            if (message.longitude != null && message.hasOwnProperty("longitude"))
                if (typeof message.longitude !== "number")
                    return "longitude: number expected";
            if (message.range != null && message.hasOwnProperty("range"))
                if (!$util.isInteger(message.range))
                    return "range: integer expected";
            if (message.pageOffset != null && message.hasOwnProperty("pageOffset"))
                if (!$util.isInteger(message.pageOffset))
                    return "pageOffset: integer expected";
            if (message.hitPerPage != null && message.hasOwnProperty("hitPerPage"))
                if (!$util.isInteger(message.hitPerPage))
                    return "hitPerPage: integer expected";
            if (message.address != null && message.hasOwnProperty("address"))
                if (!$util.isString(message.address))
                    return "address: string expected";
            return null;
        };

        /**
         * Creates a GetRestaurantsRequest message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof rpc.GetRestaurantsRequest
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {rpc.GetRestaurantsRequest} GetRestaurantsRequest
         */
        GetRestaurantsRequest.fromObject = function fromObject(object) {
            if (object instanceof $root.rpc.GetRestaurantsRequest)
                return object;
            var message = new $root.rpc.GetRestaurantsRequest();
            if (object.latitude != null)
                message.latitude = Number(object.latitude);
            if (object.longitude != null)
                message.longitude = Number(object.longitude);
            if (object.range != null)
                message.range = object.range | 0;
            if (object.pageOffset != null)
                message.pageOffset = object.pageOffset | 0;
            if (object.hitPerPage != null)
                message.hitPerPage = object.hitPerPage | 0;
            if (object.address != null)
                message.address = String(object.address);
            return message;
        };

        /**
         * Creates a plain object from a GetRestaurantsRequest message. Also converts values to other types if specified.
         * @function toObject
         * @memberof rpc.GetRestaurantsRequest
         * @static
         * @param {rpc.GetRestaurantsRequest} message GetRestaurantsRequest
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        GetRestaurantsRequest.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.latitude = 0;
                object.longitude = 0;
                object.range = 0;
                object.pageOffset = 0;
                object.hitPerPage = 0;
                object.address = "";
            }
            if (message.latitude != null && message.hasOwnProperty("latitude"))
                object.latitude = options.json && !isFinite(message.latitude) ? String(message.latitude) : message.latitude;
            if (message.longitude != null && message.hasOwnProperty("longitude"))
                object.longitude = options.json && !isFinite(message.longitude) ? String(message.longitude) : message.longitude;
            if (message.range != null && message.hasOwnProperty("range"))
                object.range = message.range;
            if (message.pageOffset != null && message.hasOwnProperty("pageOffset"))
                object.pageOffset = message.pageOffset;
            if (message.hitPerPage != null && message.hasOwnProperty("hitPerPage"))
                object.hitPerPage = message.hitPerPage;
            if (message.address != null && message.hasOwnProperty("address"))
                object.address = message.address;
            return object;
        };

        /**
         * Converts this GetRestaurantsRequest to JSON.
         * @function toJSON
         * @memberof rpc.GetRestaurantsRequest
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        GetRestaurantsRequest.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return GetRestaurantsRequest;
    })();

    rpc.GetRestaurantsResponse = (function() {

        /**
         * Properties of a GetRestaurantsResponse.
         * @memberof rpc
         * @interface IGetRestaurantsResponse
         * @property {boolean|null} [isNext] GetRestaurantsResponse isNext
         * @property {number|null} [totalHitCount] GetRestaurantsResponse totalHitCount
         * @property {number|null} [startItemNo] GetRestaurantsResponse startItemNo
         * @property {number|null} [lastItemNo] GetRestaurantsResponse lastItemNo
         * @property {Array.<rpc.IRestaurant>|null} [restaurants] GetRestaurantsResponse restaurants
         */

        /**
         * Constructs a new GetRestaurantsResponse.
         * @memberof rpc
         * @classdesc Represents a GetRestaurantsResponse.
         * @implements IGetRestaurantsResponse
         * @constructor
         * @param {rpc.IGetRestaurantsResponse=} [properties] Properties to set
         */
        function GetRestaurantsResponse(properties) {
            this.restaurants = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * GetRestaurantsResponse isNext.
         * @member {boolean} isNext
         * @memberof rpc.GetRestaurantsResponse
         * @instance
         */
        GetRestaurantsResponse.prototype.isNext = false;

        /**
         * GetRestaurantsResponse totalHitCount.
         * @member {number} totalHitCount
         * @memberof rpc.GetRestaurantsResponse
         * @instance
         */
        GetRestaurantsResponse.prototype.totalHitCount = 0;

        /**
         * GetRestaurantsResponse startItemNo.
         * @member {number} startItemNo
         * @memberof rpc.GetRestaurantsResponse
         * @instance
         */
        GetRestaurantsResponse.prototype.startItemNo = 0;

        /**
         * GetRestaurantsResponse lastItemNo.
         * @member {number} lastItemNo
         * @memberof rpc.GetRestaurantsResponse
         * @instance
         */
        GetRestaurantsResponse.prototype.lastItemNo = 0;

        /**
         * GetRestaurantsResponse restaurants.
         * @member {Array.<rpc.IRestaurant>} restaurants
         * @memberof rpc.GetRestaurantsResponse
         * @instance
         */
        GetRestaurantsResponse.prototype.restaurants = $util.emptyArray;

        /**
         * Creates a new GetRestaurantsResponse instance using the specified properties.
         * @function create
         * @memberof rpc.GetRestaurantsResponse
         * @static
         * @param {rpc.IGetRestaurantsResponse=} [properties] Properties to set
         * @returns {rpc.GetRestaurantsResponse} GetRestaurantsResponse instance
         */
        GetRestaurantsResponse.create = function create(properties) {
            return new GetRestaurantsResponse(properties);
        };

        /**
         * Encodes the specified GetRestaurantsResponse message. Does not implicitly {@link rpc.GetRestaurantsResponse.verify|verify} messages.
         * @function encode
         * @memberof rpc.GetRestaurantsResponse
         * @static
         * @param {rpc.IGetRestaurantsResponse} message GetRestaurantsResponse message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        GetRestaurantsResponse.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.isNext != null && Object.hasOwnProperty.call(message, "isNext"))
                writer.uint32(/* id 1, wireType 0 =*/8).bool(message.isNext);
            if (message.totalHitCount != null && Object.hasOwnProperty.call(message, "totalHitCount"))
                writer.uint32(/* id 2, wireType 0 =*/16).int32(message.totalHitCount);
            if (message.startItemNo != null && Object.hasOwnProperty.call(message, "startItemNo"))
                writer.uint32(/* id 3, wireType 0 =*/24).int32(message.startItemNo);
            if (message.lastItemNo != null && Object.hasOwnProperty.call(message, "lastItemNo"))
                writer.uint32(/* id 4, wireType 0 =*/32).int32(message.lastItemNo);
            if (message.restaurants != null && message.restaurants.length)
                for (var i = 0; i < message.restaurants.length; ++i)
                    $root.rpc.Restaurant.encode(message.restaurants[i], writer.uint32(/* id 5, wireType 2 =*/42).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified GetRestaurantsResponse message, length delimited. Does not implicitly {@link rpc.GetRestaurantsResponse.verify|verify} messages.
         * @function encodeDelimited
         * @memberof rpc.GetRestaurantsResponse
         * @static
         * @param {rpc.IGetRestaurantsResponse} message GetRestaurantsResponse message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        GetRestaurantsResponse.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a GetRestaurantsResponse message from the specified reader or buffer.
         * @function decode
         * @memberof rpc.GetRestaurantsResponse
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {rpc.GetRestaurantsResponse} GetRestaurantsResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        GetRestaurantsResponse.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.rpc.GetRestaurantsResponse();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.isNext = reader.bool();
                    break;
                case 2:
                    message.totalHitCount = reader.int32();
                    break;
                case 3:
                    message.startItemNo = reader.int32();
                    break;
                case 4:
                    message.lastItemNo = reader.int32();
                    break;
                case 5:
                    if (!(message.restaurants && message.restaurants.length))
                        message.restaurants = [];
                    message.restaurants.push($root.rpc.Restaurant.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a GetRestaurantsResponse message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof rpc.GetRestaurantsResponse
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {rpc.GetRestaurantsResponse} GetRestaurantsResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        GetRestaurantsResponse.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a GetRestaurantsResponse message.
         * @function verify
         * @memberof rpc.GetRestaurantsResponse
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        GetRestaurantsResponse.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.isNext != null && message.hasOwnProperty("isNext"))
                if (typeof message.isNext !== "boolean")
                    return "isNext: boolean expected";
            if (message.totalHitCount != null && message.hasOwnProperty("totalHitCount"))
                if (!$util.isInteger(message.totalHitCount))
                    return "totalHitCount: integer expected";
            if (message.startItemNo != null && message.hasOwnProperty("startItemNo"))
                if (!$util.isInteger(message.startItemNo))
                    return "startItemNo: integer expected";
            if (message.lastItemNo != null && message.hasOwnProperty("lastItemNo"))
                if (!$util.isInteger(message.lastItemNo))
                    return "lastItemNo: integer expected";
            if (message.restaurants != null && message.hasOwnProperty("restaurants")) {
                if (!Array.isArray(message.restaurants))
                    return "restaurants: array expected";
                for (var i = 0; i < message.restaurants.length; ++i) {
                    var error = $root.rpc.Restaurant.verify(message.restaurants[i]);
                    if (error)
                        return "restaurants." + error;
                }
            }
            return null;
        };

        /**
         * Creates a GetRestaurantsResponse message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof rpc.GetRestaurantsResponse
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {rpc.GetRestaurantsResponse} GetRestaurantsResponse
         */
        GetRestaurantsResponse.fromObject = function fromObject(object) {
            if (object instanceof $root.rpc.GetRestaurantsResponse)
                return object;
            var message = new $root.rpc.GetRestaurantsResponse();
            if (object.isNext != null)
                message.isNext = Boolean(object.isNext);
            if (object.totalHitCount != null)
                message.totalHitCount = object.totalHitCount | 0;
            if (object.startItemNo != null)
                message.startItemNo = object.startItemNo | 0;
            if (object.lastItemNo != null)
                message.lastItemNo = object.lastItemNo | 0;
            if (object.restaurants) {
                if (!Array.isArray(object.restaurants))
                    throw TypeError(".rpc.GetRestaurantsResponse.restaurants: array expected");
                message.restaurants = [];
                for (var i = 0; i < object.restaurants.length; ++i) {
                    if (typeof object.restaurants[i] !== "object")
                        throw TypeError(".rpc.GetRestaurantsResponse.restaurants: object expected");
                    message.restaurants[i] = $root.rpc.Restaurant.fromObject(object.restaurants[i]);
                }
            }
            return message;
        };

        /**
         * Creates a plain object from a GetRestaurantsResponse message. Also converts values to other types if specified.
         * @function toObject
         * @memberof rpc.GetRestaurantsResponse
         * @static
         * @param {rpc.GetRestaurantsResponse} message GetRestaurantsResponse
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        GetRestaurantsResponse.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.arrays || options.defaults)
                object.restaurants = [];
            if (options.defaults) {
                object.isNext = false;
                object.totalHitCount = 0;
                object.startItemNo = 0;
                object.lastItemNo = 0;
            }
            if (message.isNext != null && message.hasOwnProperty("isNext"))
                object.isNext = message.isNext;
            if (message.totalHitCount != null && message.hasOwnProperty("totalHitCount"))
                object.totalHitCount = message.totalHitCount;
            if (message.startItemNo != null && message.hasOwnProperty("startItemNo"))
                object.startItemNo = message.startItemNo;
            if (message.lastItemNo != null && message.hasOwnProperty("lastItemNo"))
                object.lastItemNo = message.lastItemNo;
            if (message.restaurants && message.restaurants.length) {
                object.restaurants = [];
                for (var j = 0; j < message.restaurants.length; ++j)
                    object.restaurants[j] = $root.rpc.Restaurant.toObject(message.restaurants[j], options);
            }
            return object;
        };

        /**
         * Converts this GetRestaurantsResponse to JSON.
         * @function toJSON
         * @memberof rpc.GetRestaurantsResponse
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        GetRestaurantsResponse.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return GetRestaurantsResponse;
    })();

    rpc.Restaurant = (function() {

        /**
         * Properties of a Restaurant.
         * @memberof rpc
         * @interface IRestaurant
         * @property {number|null} [order] Restaurant order
         * @property {string|null} [id] Restaurant id
         * @property {string|null} [updateAt] Restaurant updateAt
         * @property {string|null} [name] Restaurant name
         * @property {string|null} [nameKana] Restaurant nameKana
         * @property {number|null} [latitude] Restaurant latitude
         * @property {number|null} [longitude] Restaurant longitude
         * @property {string|null} [category] Restaurant category
         * @property {string|null} [url] Restaurant url
         * @property {string|null} [urlMobile] Restaurant urlMobile
         * @property {string|null} [shopImage1] Restaurant shopImage1
         * @property {string|null} [shopImage2] Restaurant shopImage2
         * @property {string|null} [address] Restaurant address
         * @property {string|null} [tel] Restaurant tel
         * @property {string|null} [telSub] Restaurant telSub
         * @property {string|null} [fax] Restaurant fax
         * @property {string|null} [opentime] Restaurant opentime
         * @property {string|null} [holiday] Restaurant holiday
         * @property {string|null} [line] Restaurant line
         * @property {string|null} [station] Restaurant station
         * @property {string|null} [stationExit] Restaurant stationExit
         * @property {string|null} [walk] Restaurant walk
         * @property {string|null} [note] Restaurant note
         * @property {string|null} [parkingLots] Restaurant parkingLots
         * @property {string|null} [prShort] Restaurant prShort
         * @property {string|null} [prLong] Restaurant prLong
         * @property {number|null} [budget] Restaurant budget
         * @property {number|null} [party] Restaurant party
         * @property {number|null} [lunch] Restaurant lunch
         * @property {string|null} [creditCard] Restaurant creditCard
         * @property {string|null} [eMoney] Restaurant eMoney
         */

        /**
         * Constructs a new Restaurant.
         * @memberof rpc
         * @classdesc Represents a Restaurant.
         * @implements IRestaurant
         * @constructor
         * @param {rpc.IRestaurant=} [properties] Properties to set
         */
        function Restaurant(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * Restaurant order.
         * @member {number} order
         * @memberof rpc.Restaurant
         * @instance
         */
        Restaurant.prototype.order = 0;

        /**
         * Restaurant id.
         * @member {string} id
         * @memberof rpc.Restaurant
         * @instance
         */
        Restaurant.prototype.id = "";

        /**
         * Restaurant updateAt.
         * @member {string} updateAt
         * @memberof rpc.Restaurant
         * @instance
         */
        Restaurant.prototype.updateAt = "";

        /**
         * Restaurant name.
         * @member {string} name
         * @memberof rpc.Restaurant
         * @instance
         */
        Restaurant.prototype.name = "";

        /**
         * Restaurant nameKana.
         * @member {string} nameKana
         * @memberof rpc.Restaurant
         * @instance
         */
        Restaurant.prototype.nameKana = "";

        /**
         * Restaurant latitude.
         * @member {number} latitude
         * @memberof rpc.Restaurant
         * @instance
         */
        Restaurant.prototype.latitude = 0;

        /**
         * Restaurant longitude.
         * @member {number} longitude
         * @memberof rpc.Restaurant
         * @instance
         */
        Restaurant.prototype.longitude = 0;

        /**
         * Restaurant category.
         * @member {string} category
         * @memberof rpc.Restaurant
         * @instance
         */
        Restaurant.prototype.category = "";

        /**
         * Restaurant url.
         * @member {string} url
         * @memberof rpc.Restaurant
         * @instance
         */
        Restaurant.prototype.url = "";

        /**
         * Restaurant urlMobile.
         * @member {string} urlMobile
         * @memberof rpc.Restaurant
         * @instance
         */
        Restaurant.prototype.urlMobile = "";

        /**
         * Restaurant shopImage1.
         * @member {string} shopImage1
         * @memberof rpc.Restaurant
         * @instance
         */
        Restaurant.prototype.shopImage1 = "";

        /**
         * Restaurant shopImage2.
         * @member {string} shopImage2
         * @memberof rpc.Restaurant
         * @instance
         */
        Restaurant.prototype.shopImage2 = "";

        /**
         * Restaurant address.
         * @member {string} address
         * @memberof rpc.Restaurant
         * @instance
         */
        Restaurant.prototype.address = "";

        /**
         * Restaurant tel.
         * @member {string} tel
         * @memberof rpc.Restaurant
         * @instance
         */
        Restaurant.prototype.tel = "";

        /**
         * Restaurant telSub.
         * @member {string} telSub
         * @memberof rpc.Restaurant
         * @instance
         */
        Restaurant.prototype.telSub = "";

        /**
         * Restaurant fax.
         * @member {string} fax
         * @memberof rpc.Restaurant
         * @instance
         */
        Restaurant.prototype.fax = "";

        /**
         * Restaurant opentime.
         * @member {string} opentime
         * @memberof rpc.Restaurant
         * @instance
         */
        Restaurant.prototype.opentime = "";

        /**
         * Restaurant holiday.
         * @member {string} holiday
         * @memberof rpc.Restaurant
         * @instance
         */
        Restaurant.prototype.holiday = "";

        /**
         * Restaurant line.
         * @member {string} line
         * @memberof rpc.Restaurant
         * @instance
         */
        Restaurant.prototype.line = "";

        /**
         * Restaurant station.
         * @member {string} station
         * @memberof rpc.Restaurant
         * @instance
         */
        Restaurant.prototype.station = "";

        /**
         * Restaurant stationExit.
         * @member {string} stationExit
         * @memberof rpc.Restaurant
         * @instance
         */
        Restaurant.prototype.stationExit = "";

        /**
         * Restaurant walk.
         * @member {string} walk
         * @memberof rpc.Restaurant
         * @instance
         */
        Restaurant.prototype.walk = "";

        /**
         * Restaurant note.
         * @member {string} note
         * @memberof rpc.Restaurant
         * @instance
         */
        Restaurant.prototype.note = "";

        /**
         * Restaurant parkingLots.
         * @member {string} parkingLots
         * @memberof rpc.Restaurant
         * @instance
         */
        Restaurant.prototype.parkingLots = "";

        /**
         * Restaurant prShort.
         * @member {string} prShort
         * @memberof rpc.Restaurant
         * @instance
         */
        Restaurant.prototype.prShort = "";

        /**
         * Restaurant prLong.
         * @member {string} prLong
         * @memberof rpc.Restaurant
         * @instance
         */
        Restaurant.prototype.prLong = "";

        /**
         * Restaurant budget.
         * @member {number} budget
         * @memberof rpc.Restaurant
         * @instance
         */
        Restaurant.prototype.budget = 0;

        /**
         * Restaurant party.
         * @member {number} party
         * @memberof rpc.Restaurant
         * @instance
         */
        Restaurant.prototype.party = 0;

        /**
         * Restaurant lunch.
         * @member {number} lunch
         * @memberof rpc.Restaurant
         * @instance
         */
        Restaurant.prototype.lunch = 0;

        /**
         * Restaurant creditCard.
         * @member {string} creditCard
         * @memberof rpc.Restaurant
         * @instance
         */
        Restaurant.prototype.creditCard = "";

        /**
         * Restaurant eMoney.
         * @member {string} eMoney
         * @memberof rpc.Restaurant
         * @instance
         */
        Restaurant.prototype.eMoney = "";

        /**
         * Creates a new Restaurant instance using the specified properties.
         * @function create
         * @memberof rpc.Restaurant
         * @static
         * @param {rpc.IRestaurant=} [properties] Properties to set
         * @returns {rpc.Restaurant} Restaurant instance
         */
        Restaurant.create = function create(properties) {
            return new Restaurant(properties);
        };

        /**
         * Encodes the specified Restaurant message. Does not implicitly {@link rpc.Restaurant.verify|verify} messages.
         * @function encode
         * @memberof rpc.Restaurant
         * @static
         * @param {rpc.IRestaurant} message Restaurant message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Restaurant.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.order != null && Object.hasOwnProperty.call(message, "order"))
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.order);
            if (message.id != null && Object.hasOwnProperty.call(message, "id"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.id);
            if (message.updateAt != null && Object.hasOwnProperty.call(message, "updateAt"))
                writer.uint32(/* id 3, wireType 2 =*/26).string(message.updateAt);
            if (message.name != null && Object.hasOwnProperty.call(message, "name"))
                writer.uint32(/* id 4, wireType 2 =*/34).string(message.name);
            if (message.nameKana != null && Object.hasOwnProperty.call(message, "nameKana"))
                writer.uint32(/* id 5, wireType 2 =*/42).string(message.nameKana);
            if (message.latitude != null && Object.hasOwnProperty.call(message, "latitude"))
                writer.uint32(/* id 6, wireType 1 =*/49).double(message.latitude);
            if (message.longitude != null && Object.hasOwnProperty.call(message, "longitude"))
                writer.uint32(/* id 7, wireType 1 =*/57).double(message.longitude);
            if (message.category != null && Object.hasOwnProperty.call(message, "category"))
                writer.uint32(/* id 8, wireType 2 =*/66).string(message.category);
            if (message.url != null && Object.hasOwnProperty.call(message, "url"))
                writer.uint32(/* id 9, wireType 2 =*/74).string(message.url);
            if (message.urlMobile != null && Object.hasOwnProperty.call(message, "urlMobile"))
                writer.uint32(/* id 10, wireType 2 =*/82).string(message.urlMobile);
            if (message.shopImage1 != null && Object.hasOwnProperty.call(message, "shopImage1"))
                writer.uint32(/* id 11, wireType 2 =*/90).string(message.shopImage1);
            if (message.shopImage2 != null && Object.hasOwnProperty.call(message, "shopImage2"))
                writer.uint32(/* id 12, wireType 2 =*/98).string(message.shopImage2);
            if (message.address != null && Object.hasOwnProperty.call(message, "address"))
                writer.uint32(/* id 13, wireType 2 =*/106).string(message.address);
            if (message.tel != null && Object.hasOwnProperty.call(message, "tel"))
                writer.uint32(/* id 14, wireType 2 =*/114).string(message.tel);
            if (message.telSub != null && Object.hasOwnProperty.call(message, "telSub"))
                writer.uint32(/* id 15, wireType 2 =*/122).string(message.telSub);
            if (message.fax != null && Object.hasOwnProperty.call(message, "fax"))
                writer.uint32(/* id 16, wireType 2 =*/130).string(message.fax);
            if (message.opentime != null && Object.hasOwnProperty.call(message, "opentime"))
                writer.uint32(/* id 17, wireType 2 =*/138).string(message.opentime);
            if (message.holiday != null && Object.hasOwnProperty.call(message, "holiday"))
                writer.uint32(/* id 18, wireType 2 =*/146).string(message.holiday);
            if (message.line != null && Object.hasOwnProperty.call(message, "line"))
                writer.uint32(/* id 19, wireType 2 =*/154).string(message.line);
            if (message.station != null && Object.hasOwnProperty.call(message, "station"))
                writer.uint32(/* id 20, wireType 2 =*/162).string(message.station);
            if (message.stationExit != null && Object.hasOwnProperty.call(message, "stationExit"))
                writer.uint32(/* id 21, wireType 2 =*/170).string(message.stationExit);
            if (message.walk != null && Object.hasOwnProperty.call(message, "walk"))
                writer.uint32(/* id 22, wireType 2 =*/178).string(message.walk);
            if (message.note != null && Object.hasOwnProperty.call(message, "note"))
                writer.uint32(/* id 23, wireType 2 =*/186).string(message.note);
            if (message.parkingLots != null && Object.hasOwnProperty.call(message, "parkingLots"))
                writer.uint32(/* id 24, wireType 2 =*/194).string(message.parkingLots);
            if (message.prShort != null && Object.hasOwnProperty.call(message, "prShort"))
                writer.uint32(/* id 25, wireType 2 =*/202).string(message.prShort);
            if (message.prLong != null && Object.hasOwnProperty.call(message, "prLong"))
                writer.uint32(/* id 26, wireType 2 =*/210).string(message.prLong);
            if (message.budget != null && Object.hasOwnProperty.call(message, "budget"))
                writer.uint32(/* id 27, wireType 0 =*/216).int32(message.budget);
            if (message.party != null && Object.hasOwnProperty.call(message, "party"))
                writer.uint32(/* id 28, wireType 0 =*/224).int32(message.party);
            if (message.lunch != null && Object.hasOwnProperty.call(message, "lunch"))
                writer.uint32(/* id 29, wireType 0 =*/232).int32(message.lunch);
            if (message.creditCard != null && Object.hasOwnProperty.call(message, "creditCard"))
                writer.uint32(/* id 30, wireType 2 =*/242).string(message.creditCard);
            if (message.eMoney != null && Object.hasOwnProperty.call(message, "eMoney"))
                writer.uint32(/* id 31, wireType 2 =*/250).string(message.eMoney);
            return writer;
        };

        /**
         * Encodes the specified Restaurant message, length delimited. Does not implicitly {@link rpc.Restaurant.verify|verify} messages.
         * @function encodeDelimited
         * @memberof rpc.Restaurant
         * @static
         * @param {rpc.IRestaurant} message Restaurant message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Restaurant.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a Restaurant message from the specified reader or buffer.
         * @function decode
         * @memberof rpc.Restaurant
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {rpc.Restaurant} Restaurant
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Restaurant.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.rpc.Restaurant();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.order = reader.int32();
                    break;
                case 2:
                    message.id = reader.string();
                    break;
                case 3:
                    message.updateAt = reader.string();
                    break;
                case 4:
                    message.name = reader.string();
                    break;
                case 5:
                    message.nameKana = reader.string();
                    break;
                case 6:
                    message.latitude = reader.double();
                    break;
                case 7:
                    message.longitude = reader.double();
                    break;
                case 8:
                    message.category = reader.string();
                    break;
                case 9:
                    message.url = reader.string();
                    break;
                case 10:
                    message.urlMobile = reader.string();
                    break;
                case 11:
                    message.shopImage1 = reader.string();
                    break;
                case 12:
                    message.shopImage2 = reader.string();
                    break;
                case 13:
                    message.address = reader.string();
                    break;
                case 14:
                    message.tel = reader.string();
                    break;
                case 15:
                    message.telSub = reader.string();
                    break;
                case 16:
                    message.fax = reader.string();
                    break;
                case 17:
                    message.opentime = reader.string();
                    break;
                case 18:
                    message.holiday = reader.string();
                    break;
                case 19:
                    message.line = reader.string();
                    break;
                case 20:
                    message.station = reader.string();
                    break;
                case 21:
                    message.stationExit = reader.string();
                    break;
                case 22:
                    message.walk = reader.string();
                    break;
                case 23:
                    message.note = reader.string();
                    break;
                case 24:
                    message.parkingLots = reader.string();
                    break;
                case 25:
                    message.prShort = reader.string();
                    break;
                case 26:
                    message.prLong = reader.string();
                    break;
                case 27:
                    message.budget = reader.int32();
                    break;
                case 28:
                    message.party = reader.int32();
                    break;
                case 29:
                    message.lunch = reader.int32();
                    break;
                case 30:
                    message.creditCard = reader.string();
                    break;
                case 31:
                    message.eMoney = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a Restaurant message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof rpc.Restaurant
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {rpc.Restaurant} Restaurant
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Restaurant.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a Restaurant message.
         * @function verify
         * @memberof rpc.Restaurant
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        Restaurant.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.order != null && message.hasOwnProperty("order"))
                if (!$util.isInteger(message.order))
                    return "order: integer expected";
            if (message.id != null && message.hasOwnProperty("id"))
                if (!$util.isString(message.id))
                    return "id: string expected";
            if (message.updateAt != null && message.hasOwnProperty("updateAt"))
                if (!$util.isString(message.updateAt))
                    return "updateAt: string expected";
            if (message.name != null && message.hasOwnProperty("name"))
                if (!$util.isString(message.name))
                    return "name: string expected";
            if (message.nameKana != null && message.hasOwnProperty("nameKana"))
                if (!$util.isString(message.nameKana))
                    return "nameKana: string expected";
            if (message.latitude != null && message.hasOwnProperty("latitude"))
                if (typeof message.latitude !== "number")
                    return "latitude: number expected";
            if (message.longitude != null && message.hasOwnProperty("longitude"))
                if (typeof message.longitude !== "number")
                    return "longitude: number expected";
            if (message.category != null && message.hasOwnProperty("category"))
                if (!$util.isString(message.category))
                    return "category: string expected";
            if (message.url != null && message.hasOwnProperty("url"))
                if (!$util.isString(message.url))
                    return "url: string expected";
            if (message.urlMobile != null && message.hasOwnProperty("urlMobile"))
                if (!$util.isString(message.urlMobile))
                    return "urlMobile: string expected";
            if (message.shopImage1 != null && message.hasOwnProperty("shopImage1"))
                if (!$util.isString(message.shopImage1))
                    return "shopImage1: string expected";
            if (message.shopImage2 != null && message.hasOwnProperty("shopImage2"))
                if (!$util.isString(message.shopImage2))
                    return "shopImage2: string expected";
            if (message.address != null && message.hasOwnProperty("address"))
                if (!$util.isString(message.address))
                    return "address: string expected";
            if (message.tel != null && message.hasOwnProperty("tel"))
                if (!$util.isString(message.tel))
                    return "tel: string expected";
            if (message.telSub != null && message.hasOwnProperty("telSub"))
                if (!$util.isString(message.telSub))
                    return "telSub: string expected";
            if (message.fax != null && message.hasOwnProperty("fax"))
                if (!$util.isString(message.fax))
                    return "fax: string expected";
            if (message.opentime != null && message.hasOwnProperty("opentime"))
                if (!$util.isString(message.opentime))
                    return "opentime: string expected";
            if (message.holiday != null && message.hasOwnProperty("holiday"))
                if (!$util.isString(message.holiday))
                    return "holiday: string expected";
            if (message.line != null && message.hasOwnProperty("line"))
                if (!$util.isString(message.line))
                    return "line: string expected";
            if (message.station != null && message.hasOwnProperty("station"))
                if (!$util.isString(message.station))
                    return "station: string expected";
            if (message.stationExit != null && message.hasOwnProperty("stationExit"))
                if (!$util.isString(message.stationExit))
                    return "stationExit: string expected";
            if (message.walk != null && message.hasOwnProperty("walk"))
                if (!$util.isString(message.walk))
                    return "walk: string expected";
            if (message.note != null && message.hasOwnProperty("note"))
                if (!$util.isString(message.note))
                    return "note: string expected";
            if (message.parkingLots != null && message.hasOwnProperty("parkingLots"))
                if (!$util.isString(message.parkingLots))
                    return "parkingLots: string expected";
            if (message.prShort != null && message.hasOwnProperty("prShort"))
                if (!$util.isString(message.prShort))
                    return "prShort: string expected";
            if (message.prLong != null && message.hasOwnProperty("prLong"))
                if (!$util.isString(message.prLong))
                    return "prLong: string expected";
            if (message.budget != null && message.hasOwnProperty("budget"))
                if (!$util.isInteger(message.budget))
                    return "budget: integer expected";
            if (message.party != null && message.hasOwnProperty("party"))
                if (!$util.isInteger(message.party))
                    return "party: integer expected";
            if (message.lunch != null && message.hasOwnProperty("lunch"))
                if (!$util.isInteger(message.lunch))
                    return "lunch: integer expected";
            if (message.creditCard != null && message.hasOwnProperty("creditCard"))
                if (!$util.isString(message.creditCard))
                    return "creditCard: string expected";
            if (message.eMoney != null && message.hasOwnProperty("eMoney"))
                if (!$util.isString(message.eMoney))
                    return "eMoney: string expected";
            return null;
        };

        /**
         * Creates a Restaurant message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof rpc.Restaurant
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {rpc.Restaurant} Restaurant
         */
        Restaurant.fromObject = function fromObject(object) {
            if (object instanceof $root.rpc.Restaurant)
                return object;
            var message = new $root.rpc.Restaurant();
            if (object.order != null)
                message.order = object.order | 0;
            if (object.id != null)
                message.id = String(object.id);
            if (object.updateAt != null)
                message.updateAt = String(object.updateAt);
            if (object.name != null)
                message.name = String(object.name);
            if (object.nameKana != null)
                message.nameKana = String(object.nameKana);
            if (object.latitude != null)
                message.latitude = Number(object.latitude);
            if (object.longitude != null)
                message.longitude = Number(object.longitude);
            if (object.category != null)
                message.category = String(object.category);
            if (object.url != null)
                message.url = String(object.url);
            if (object.urlMobile != null)
                message.urlMobile = String(object.urlMobile);
            if (object.shopImage1 != null)
                message.shopImage1 = String(object.shopImage1);
            if (object.shopImage2 != null)
                message.shopImage2 = String(object.shopImage2);
            if (object.address != null)
                message.address = String(object.address);
            if (object.tel != null)
                message.tel = String(object.tel);
            if (object.telSub != null)
                message.telSub = String(object.telSub);
            if (object.fax != null)
                message.fax = String(object.fax);
            if (object.opentime != null)
                message.opentime = String(object.opentime);
            if (object.holiday != null)
                message.holiday = String(object.holiday);
            if (object.line != null)
                message.line = String(object.line);
            if (object.station != null)
                message.station = String(object.station);
            if (object.stationExit != null)
                message.stationExit = String(object.stationExit);
            if (object.walk != null)
                message.walk = String(object.walk);
            if (object.note != null)
                message.note = String(object.note);
            if (object.parkingLots != null)
                message.parkingLots = String(object.parkingLots);
            if (object.prShort != null)
                message.prShort = String(object.prShort);
            if (object.prLong != null)
                message.prLong = String(object.prLong);
            if (object.budget != null)
                message.budget = object.budget | 0;
            if (object.party != null)
                message.party = object.party | 0;
            if (object.lunch != null)
                message.lunch = object.lunch | 0;
            if (object.creditCard != null)
                message.creditCard = String(object.creditCard);
            if (object.eMoney != null)
                message.eMoney = String(object.eMoney);
            return message;
        };

        /**
         * Creates a plain object from a Restaurant message. Also converts values to other types if specified.
         * @function toObject
         * @memberof rpc.Restaurant
         * @static
         * @param {rpc.Restaurant} message Restaurant
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        Restaurant.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.order = 0;
                object.id = "";
                object.updateAt = "";
                object.name = "";
                object.nameKana = "";
                object.latitude = 0;
                object.longitude = 0;
                object.category = "";
                object.url = "";
                object.urlMobile = "";
                object.shopImage1 = "";
                object.shopImage2 = "";
                object.address = "";
                object.tel = "";
                object.telSub = "";
                object.fax = "";
                object.opentime = "";
                object.holiday = "";
                object.line = "";
                object.station = "";
                object.stationExit = "";
                object.walk = "";
                object.note = "";
                object.parkingLots = "";
                object.prShort = "";
                object.prLong = "";
                object.budget = 0;
                object.party = 0;
                object.lunch = 0;
                object.creditCard = "";
                object.eMoney = "";
            }
            if (message.order != null && message.hasOwnProperty("order"))
                object.order = message.order;
            if (message.id != null && message.hasOwnProperty("id"))
                object.id = message.id;
            if (message.updateAt != null && message.hasOwnProperty("updateAt"))
                object.updateAt = message.updateAt;
            if (message.name != null && message.hasOwnProperty("name"))
                object.name = message.name;
            if (message.nameKana != null && message.hasOwnProperty("nameKana"))
                object.nameKana = message.nameKana;
            if (message.latitude != null && message.hasOwnProperty("latitude"))
                object.latitude = options.json && !isFinite(message.latitude) ? String(message.latitude) : message.latitude;
            if (message.longitude != null && message.hasOwnProperty("longitude"))
                object.longitude = options.json && !isFinite(message.longitude) ? String(message.longitude) : message.longitude;
            if (message.category != null && message.hasOwnProperty("category"))
                object.category = message.category;
            if (message.url != null && message.hasOwnProperty("url"))
                object.url = message.url;
            if (message.urlMobile != null && message.hasOwnProperty("urlMobile"))
                object.urlMobile = message.urlMobile;
            if (message.shopImage1 != null && message.hasOwnProperty("shopImage1"))
                object.shopImage1 = message.shopImage1;
            if (message.shopImage2 != null && message.hasOwnProperty("shopImage2"))
                object.shopImage2 = message.shopImage2;
            if (message.address != null && message.hasOwnProperty("address"))
                object.address = message.address;
            if (message.tel != null && message.hasOwnProperty("tel"))
                object.tel = message.tel;
            if (message.telSub != null && message.hasOwnProperty("telSub"))
                object.telSub = message.telSub;
            if (message.fax != null && message.hasOwnProperty("fax"))
                object.fax = message.fax;
            if (message.opentime != null && message.hasOwnProperty("opentime"))
                object.opentime = message.opentime;
            if (message.holiday != null && message.hasOwnProperty("holiday"))
                object.holiday = message.holiday;
            if (message.line != null && message.hasOwnProperty("line"))
                object.line = message.line;
            if (message.station != null && message.hasOwnProperty("station"))
                object.station = message.station;
            if (message.stationExit != null && message.hasOwnProperty("stationExit"))
                object.stationExit = message.stationExit;
            if (message.walk != null && message.hasOwnProperty("walk"))
                object.walk = message.walk;
            if (message.note != null && message.hasOwnProperty("note"))
                object.note = message.note;
            if (message.parkingLots != null && message.hasOwnProperty("parkingLots"))
                object.parkingLots = message.parkingLots;
            if (message.prShort != null && message.hasOwnProperty("prShort"))
                object.prShort = message.prShort;
            if (message.prLong != null && message.hasOwnProperty("prLong"))
                object.prLong = message.prLong;
            if (message.budget != null && message.hasOwnProperty("budget"))
                object.budget = message.budget;
            if (message.party != null && message.hasOwnProperty("party"))
                object.party = message.party;
            if (message.lunch != null && message.hasOwnProperty("lunch"))
                object.lunch = message.lunch;
            if (message.creditCard != null && message.hasOwnProperty("creditCard"))
                object.creditCard = message.creditCard;
            if (message.eMoney != null && message.hasOwnProperty("eMoney"))
                object.eMoney = message.eMoney;
            return object;
        };

        /**
         * Converts this Restaurant to JSON.
         * @function toJSON
         * @memberof rpc.Restaurant
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        Restaurant.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return Restaurant;
    })();

    rpc.UsersService = (function() {

        /**
         * Constructs a new UsersService service.
         * @memberof rpc
         * @classdesc Represents a UsersService
         * @extends $protobuf.rpc.Service
         * @constructor
         * @param {$protobuf.RPCImpl} rpcImpl RPC implementation
         * @param {boolean} [requestDelimited=false] Whether requests are length-delimited
         * @param {boolean} [responseDelimited=false] Whether responses are length-delimited
         */
        function UsersService(rpcImpl, requestDelimited, responseDelimited) {
            $protobuf.rpc.Service.call(this, rpcImpl, requestDelimited, responseDelimited);
        }

        (UsersService.prototype = Object.create($protobuf.rpc.Service.prototype)).constructor = UsersService;

        /**
         * Creates new UsersService service using the specified rpc implementation.
         * @function create
         * @memberof rpc.UsersService
         * @static
         * @param {$protobuf.RPCImpl} rpcImpl RPC implementation
         * @param {boolean} [requestDelimited=false] Whether requests are length-delimited
         * @param {boolean} [responseDelimited=false] Whether responses are length-delimited
         * @returns {UsersService} RPC service. Useful where requests and/or responses are streamed.
         */
        UsersService.create = function create(rpcImpl, requestDelimited, responseDelimited) {
            return new this(rpcImpl, requestDelimited, responseDelimited);
        };

        /**
         * Callback as used by {@link rpc.UsersService#postUser}.
         * @memberof rpc.UsersService
         * @typedef PostUserCallback
         * @type {function}
         * @param {Error|null} error Error, if any
         * @param {rpc.PostUserResponse} [response] PostUserResponse
         */

        /**
         * Calls PostUser.
         * @function postUser
         * @memberof rpc.UsersService
         * @instance
         * @param {rpc.IPostUserRequest} request PostUserRequest message or plain object
         * @param {rpc.UsersService.PostUserCallback} callback Node-style callback called with the error, if any, and PostUserResponse
         * @returns {undefined}
         * @variation 1
         */
        Object.defineProperty(UsersService.prototype.postUser = function postUser(request, callback) {
            return this.rpcCall(postUser, $root.rpc.PostUserRequest, $root.rpc.PostUserResponse, request, callback);
        }, "name", { value: "PostUser" });

        /**
         * Calls PostUser.
         * @function postUser
         * @memberof rpc.UsersService
         * @instance
         * @param {rpc.IPostUserRequest} request PostUserRequest message or plain object
         * @returns {Promise<rpc.PostUserResponse>} Promise
         * @variation 2
         */

        /**
         * Callback as used by {@link rpc.UsersService#getUsers}.
         * @memberof rpc.UsersService
         * @typedef GetUsersCallback
         * @type {function}
         * @param {Error|null} error Error, if any
         * @param {rpc.GetUsersResponse} [response] GetUsersResponse
         */

        /**
         * Calls GetUsers.
         * @function getUsers
         * @memberof rpc.UsersService
         * @instance
         * @param {rpc.IGetUsersRequest} request GetUsersRequest message or plain object
         * @param {rpc.UsersService.GetUsersCallback} callback Node-style callback called with the error, if any, and GetUsersResponse
         * @returns {undefined}
         * @variation 1
         */
        Object.defineProperty(UsersService.prototype.getUsers = function getUsers(request, callback) {
            return this.rpcCall(getUsers, $root.rpc.GetUsersRequest, $root.rpc.GetUsersResponse, request, callback);
        }, "name", { value: "GetUsers" });

        /**
         * Calls GetUsers.
         * @function getUsers
         * @memberof rpc.UsersService
         * @instance
         * @param {rpc.IGetUsersRequest} request GetUsersRequest message or plain object
         * @returns {Promise<rpc.GetUsersResponse>} Promise
         * @variation 2
         */

        /**
         * Callback as used by {@link rpc.UsersService#getUser}.
         * @memberof rpc.UsersService
         * @typedef GetUserCallback
         * @type {function}
         * @param {Error|null} error Error, if any
         * @param {rpc.GetUserResponse} [response] GetUserResponse
         */

        /**
         * Calls GetUser.
         * @function getUser
         * @memberof rpc.UsersService
         * @instance
         * @param {rpc.IGetUserRequest} request GetUserRequest message or plain object
         * @param {rpc.UsersService.GetUserCallback} callback Node-style callback called with the error, if any, and GetUserResponse
         * @returns {undefined}
         * @variation 1
         */
        Object.defineProperty(UsersService.prototype.getUser = function getUser(request, callback) {
            return this.rpcCall(getUser, $root.rpc.GetUserRequest, $root.rpc.GetUserResponse, request, callback);
        }, "name", { value: "GetUser" });

        /**
         * Calls GetUser.
         * @function getUser
         * @memberof rpc.UsersService
         * @instance
         * @param {rpc.IGetUserRequest} request GetUserRequest message or plain object
         * @returns {Promise<rpc.GetUserResponse>} Promise
         * @variation 2
         */

        /**
         * Callback as used by {@link rpc.UsersService#getUserByUsername}.
         * @memberof rpc.UsersService
         * @typedef GetUserByUsernameCallback
         * @type {function}
         * @param {Error|null} error Error, if any
         * @param {rpc.GetUserByUsernameResponse} [response] GetUserByUsernameResponse
         */

        /**
         * Calls GetUserByUsername.
         * @function getUserByUsername
         * @memberof rpc.UsersService
         * @instance
         * @param {rpc.IGetUserByUsernameRequest} request GetUserByUsernameRequest message or plain object
         * @param {rpc.UsersService.GetUserByUsernameCallback} callback Node-style callback called with the error, if any, and GetUserByUsernameResponse
         * @returns {undefined}
         * @variation 1
         */
        Object.defineProperty(UsersService.prototype.getUserByUsername = function getUserByUsername(request, callback) {
            return this.rpcCall(getUserByUsername, $root.rpc.GetUserByUsernameRequest, $root.rpc.GetUserByUsernameResponse, request, callback);
        }, "name", { value: "GetUserByUsername" });

        /**
         * Calls GetUserByUsername.
         * @function getUserByUsername
         * @memberof rpc.UsersService
         * @instance
         * @param {rpc.IGetUserByUsernameRequest} request GetUserByUsernameRequest message or plain object
         * @returns {Promise<rpc.GetUserByUsernameResponse>} Promise
         * @variation 2
         */

        /**
         * Callback as used by {@link rpc.UsersService#deleteUser}.
         * @memberof rpc.UsersService
         * @typedef DeleteUserCallback
         * @type {function}
         * @param {Error|null} error Error, if any
         * @param {rpc.DeleteUserResponse} [response] DeleteUserResponse
         */

        /**
         * Calls DeleteUser.
         * @function deleteUser
         * @memberof rpc.UsersService
         * @instance
         * @param {rpc.IDeleteUserRequest} request DeleteUserRequest message or plain object
         * @param {rpc.UsersService.DeleteUserCallback} callback Node-style callback called with the error, if any, and DeleteUserResponse
         * @returns {undefined}
         * @variation 1
         */
        Object.defineProperty(UsersService.prototype.deleteUser = function deleteUser(request, callback) {
            return this.rpcCall(deleteUser, $root.rpc.DeleteUserRequest, $root.rpc.DeleteUserResponse, request, callback);
        }, "name", { value: "DeleteUser" });

        /**
         * Calls DeleteUser.
         * @function deleteUser
         * @memberof rpc.UsersService
         * @instance
         * @param {rpc.IDeleteUserRequest} request DeleteUserRequest message or plain object
         * @returns {Promise<rpc.DeleteUserResponse>} Promise
         * @variation 2
         */

        return UsersService;
    })();

    rpc.PostUserRequest = (function() {

        /**
         * Properties of a PostUserRequest.
         * @memberof rpc
         * @interface IPostUserRequest
         * @property {string|null} [username] PostUserRequest username
         * @property {string|null} [password] PostUserRequest password
         */

        /**
         * Constructs a new PostUserRequest.
         * @memberof rpc
         * @classdesc Represents a PostUserRequest.
         * @implements IPostUserRequest
         * @constructor
         * @param {rpc.IPostUserRequest=} [properties] Properties to set
         */
        function PostUserRequest(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * PostUserRequest username.
         * @member {string} username
         * @memberof rpc.PostUserRequest
         * @instance
         */
        PostUserRequest.prototype.username = "";

        /**
         * PostUserRequest password.
         * @member {string} password
         * @memberof rpc.PostUserRequest
         * @instance
         */
        PostUserRequest.prototype.password = "";

        /**
         * Creates a new PostUserRequest instance using the specified properties.
         * @function create
         * @memberof rpc.PostUserRequest
         * @static
         * @param {rpc.IPostUserRequest=} [properties] Properties to set
         * @returns {rpc.PostUserRequest} PostUserRequest instance
         */
        PostUserRequest.create = function create(properties) {
            return new PostUserRequest(properties);
        };

        /**
         * Encodes the specified PostUserRequest message. Does not implicitly {@link rpc.PostUserRequest.verify|verify} messages.
         * @function encode
         * @memberof rpc.PostUserRequest
         * @static
         * @param {rpc.IPostUserRequest} message PostUserRequest message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        PostUserRequest.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.username != null && Object.hasOwnProperty.call(message, "username"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.username);
            if (message.password != null && Object.hasOwnProperty.call(message, "password"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.password);
            return writer;
        };

        /**
         * Encodes the specified PostUserRequest message, length delimited. Does not implicitly {@link rpc.PostUserRequest.verify|verify} messages.
         * @function encodeDelimited
         * @memberof rpc.PostUserRequest
         * @static
         * @param {rpc.IPostUserRequest} message PostUserRequest message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        PostUserRequest.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a PostUserRequest message from the specified reader or buffer.
         * @function decode
         * @memberof rpc.PostUserRequest
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {rpc.PostUserRequest} PostUserRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        PostUserRequest.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.rpc.PostUserRequest();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.username = reader.string();
                    break;
                case 2:
                    message.password = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a PostUserRequest message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof rpc.PostUserRequest
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {rpc.PostUserRequest} PostUserRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        PostUserRequest.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a PostUserRequest message.
         * @function verify
         * @memberof rpc.PostUserRequest
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        PostUserRequest.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.username != null && message.hasOwnProperty("username"))
                if (!$util.isString(message.username))
                    return "username: string expected";
            if (message.password != null && message.hasOwnProperty("password"))
                if (!$util.isString(message.password))
                    return "password: string expected";
            return null;
        };

        /**
         * Creates a PostUserRequest message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof rpc.PostUserRequest
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {rpc.PostUserRequest} PostUserRequest
         */
        PostUserRequest.fromObject = function fromObject(object) {
            if (object instanceof $root.rpc.PostUserRequest)
                return object;
            var message = new $root.rpc.PostUserRequest();
            if (object.username != null)
                message.username = String(object.username);
            if (object.password != null)
                message.password = String(object.password);
            return message;
        };

        /**
         * Creates a plain object from a PostUserRequest message. Also converts values to other types if specified.
         * @function toObject
         * @memberof rpc.PostUserRequest
         * @static
         * @param {rpc.PostUserRequest} message PostUserRequest
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        PostUserRequest.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.username = "";
                object.password = "";
            }
            if (message.username != null && message.hasOwnProperty("username"))
                object.username = message.username;
            if (message.password != null && message.hasOwnProperty("password"))
                object.password = message.password;
            return object;
        };

        /**
         * Converts this PostUserRequest to JSON.
         * @function toJSON
         * @memberof rpc.PostUserRequest
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        PostUserRequest.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return PostUserRequest;
    })();

    rpc.PostUserResponse = (function() {

        /**
         * Properties of a PostUserResponse.
         * @memberof rpc
         * @interface IPostUserResponse
         * @property {number|null} [userId] PostUserResponse userId
         * @property {string|null} [username] PostUserResponse username
         * @property {string|null} [password] PostUserResponse password
         * @property {boolean|null} [isActive] PostUserResponse isActive
         * @property {string|null} [createdAt] PostUserResponse createdAt
         * @property {string|null} [updatedAt] PostUserResponse updatedAt
         */

        /**
         * Constructs a new PostUserResponse.
         * @memberof rpc
         * @classdesc Represents a PostUserResponse.
         * @implements IPostUserResponse
         * @constructor
         * @param {rpc.IPostUserResponse=} [properties] Properties to set
         */
        function PostUserResponse(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * PostUserResponse userId.
         * @member {number} userId
         * @memberof rpc.PostUserResponse
         * @instance
         */
        PostUserResponse.prototype.userId = 0;

        /**
         * PostUserResponse username.
         * @member {string} username
         * @memberof rpc.PostUserResponse
         * @instance
         */
        PostUserResponse.prototype.username = "";

        /**
         * PostUserResponse password.
         * @member {string} password
         * @memberof rpc.PostUserResponse
         * @instance
         */
        PostUserResponse.prototype.password = "";

        /**
         * PostUserResponse isActive.
         * @member {boolean} isActive
         * @memberof rpc.PostUserResponse
         * @instance
         */
        PostUserResponse.prototype.isActive = false;

        /**
         * PostUserResponse createdAt.
         * @member {string} createdAt
         * @memberof rpc.PostUserResponse
         * @instance
         */
        PostUserResponse.prototype.createdAt = "";

        /**
         * PostUserResponse updatedAt.
         * @member {string} updatedAt
         * @memberof rpc.PostUserResponse
         * @instance
         */
        PostUserResponse.prototype.updatedAt = "";

        /**
         * Creates a new PostUserResponse instance using the specified properties.
         * @function create
         * @memberof rpc.PostUserResponse
         * @static
         * @param {rpc.IPostUserResponse=} [properties] Properties to set
         * @returns {rpc.PostUserResponse} PostUserResponse instance
         */
        PostUserResponse.create = function create(properties) {
            return new PostUserResponse(properties);
        };

        /**
         * Encodes the specified PostUserResponse message. Does not implicitly {@link rpc.PostUserResponse.verify|verify} messages.
         * @function encode
         * @memberof rpc.PostUserResponse
         * @static
         * @param {rpc.IPostUserResponse} message PostUserResponse message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        PostUserResponse.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.userId != null && Object.hasOwnProperty.call(message, "userId"))
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.userId);
            if (message.username != null && Object.hasOwnProperty.call(message, "username"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.username);
            if (message.password != null && Object.hasOwnProperty.call(message, "password"))
                writer.uint32(/* id 3, wireType 2 =*/26).string(message.password);
            if (message.isActive != null && Object.hasOwnProperty.call(message, "isActive"))
                writer.uint32(/* id 4, wireType 0 =*/32).bool(message.isActive);
            if (message.createdAt != null && Object.hasOwnProperty.call(message, "createdAt"))
                writer.uint32(/* id 5, wireType 2 =*/42).string(message.createdAt);
            if (message.updatedAt != null && Object.hasOwnProperty.call(message, "updatedAt"))
                writer.uint32(/* id 6, wireType 2 =*/50).string(message.updatedAt);
            return writer;
        };

        /**
         * Encodes the specified PostUserResponse message, length delimited. Does not implicitly {@link rpc.PostUserResponse.verify|verify} messages.
         * @function encodeDelimited
         * @memberof rpc.PostUserResponse
         * @static
         * @param {rpc.IPostUserResponse} message PostUserResponse message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        PostUserResponse.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a PostUserResponse message from the specified reader or buffer.
         * @function decode
         * @memberof rpc.PostUserResponse
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {rpc.PostUserResponse} PostUserResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        PostUserResponse.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.rpc.PostUserResponse();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.userId = reader.int32();
                    break;
                case 2:
                    message.username = reader.string();
                    break;
                case 3:
                    message.password = reader.string();
                    break;
                case 4:
                    message.isActive = reader.bool();
                    break;
                case 5:
                    message.createdAt = reader.string();
                    break;
                case 6:
                    message.updatedAt = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a PostUserResponse message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof rpc.PostUserResponse
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {rpc.PostUserResponse} PostUserResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        PostUserResponse.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a PostUserResponse message.
         * @function verify
         * @memberof rpc.PostUserResponse
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        PostUserResponse.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.userId != null && message.hasOwnProperty("userId"))
                if (!$util.isInteger(message.userId))
                    return "userId: integer expected";
            if (message.username != null && message.hasOwnProperty("username"))
                if (!$util.isString(message.username))
                    return "username: string expected";
            if (message.password != null && message.hasOwnProperty("password"))
                if (!$util.isString(message.password))
                    return "password: string expected";
            if (message.isActive != null && message.hasOwnProperty("isActive"))
                if (typeof message.isActive !== "boolean")
                    return "isActive: boolean expected";
            if (message.createdAt != null && message.hasOwnProperty("createdAt"))
                if (!$util.isString(message.createdAt))
                    return "createdAt: string expected";
            if (message.updatedAt != null && message.hasOwnProperty("updatedAt"))
                if (!$util.isString(message.updatedAt))
                    return "updatedAt: string expected";
            return null;
        };

        /**
         * Creates a PostUserResponse message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof rpc.PostUserResponse
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {rpc.PostUserResponse} PostUserResponse
         */
        PostUserResponse.fromObject = function fromObject(object) {
            if (object instanceof $root.rpc.PostUserResponse)
                return object;
            var message = new $root.rpc.PostUserResponse();
            if (object.userId != null)
                message.userId = object.userId | 0;
            if (object.username != null)
                message.username = String(object.username);
            if (object.password != null)
                message.password = String(object.password);
            if (object.isActive != null)
                message.isActive = Boolean(object.isActive);
            if (object.createdAt != null)
                message.createdAt = String(object.createdAt);
            if (object.updatedAt != null)
                message.updatedAt = String(object.updatedAt);
            return message;
        };

        /**
         * Creates a plain object from a PostUserResponse message. Also converts values to other types if specified.
         * @function toObject
         * @memberof rpc.PostUserResponse
         * @static
         * @param {rpc.PostUserResponse} message PostUserResponse
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        PostUserResponse.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.userId = 0;
                object.username = "";
                object.password = "";
                object.isActive = false;
                object.createdAt = "";
                object.updatedAt = "";
            }
            if (message.userId != null && message.hasOwnProperty("userId"))
                object.userId = message.userId;
            if (message.username != null && message.hasOwnProperty("username"))
                object.username = message.username;
            if (message.password != null && message.hasOwnProperty("password"))
                object.password = message.password;
            if (message.isActive != null && message.hasOwnProperty("isActive"))
                object.isActive = message.isActive;
            if (message.createdAt != null && message.hasOwnProperty("createdAt"))
                object.createdAt = message.createdAt;
            if (message.updatedAt != null && message.hasOwnProperty("updatedAt"))
                object.updatedAt = message.updatedAt;
            return object;
        };

        /**
         * Converts this PostUserResponse to JSON.
         * @function toJSON
         * @memberof rpc.PostUserResponse
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        PostUserResponse.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return PostUserResponse;
    })();

    rpc.GetUsersRequest = (function() {

        /**
         * Properties of a GetUsersRequest.
         * @memberof rpc
         * @interface IGetUsersRequest
         */

        /**
         * Constructs a new GetUsersRequest.
         * @memberof rpc
         * @classdesc Represents a GetUsersRequest.
         * @implements IGetUsersRequest
         * @constructor
         * @param {rpc.IGetUsersRequest=} [properties] Properties to set
         */
        function GetUsersRequest(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * Creates a new GetUsersRequest instance using the specified properties.
         * @function create
         * @memberof rpc.GetUsersRequest
         * @static
         * @param {rpc.IGetUsersRequest=} [properties] Properties to set
         * @returns {rpc.GetUsersRequest} GetUsersRequest instance
         */
        GetUsersRequest.create = function create(properties) {
            return new GetUsersRequest(properties);
        };

        /**
         * Encodes the specified GetUsersRequest message. Does not implicitly {@link rpc.GetUsersRequest.verify|verify} messages.
         * @function encode
         * @memberof rpc.GetUsersRequest
         * @static
         * @param {rpc.IGetUsersRequest} message GetUsersRequest message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        GetUsersRequest.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            return writer;
        };

        /**
         * Encodes the specified GetUsersRequest message, length delimited. Does not implicitly {@link rpc.GetUsersRequest.verify|verify} messages.
         * @function encodeDelimited
         * @memberof rpc.GetUsersRequest
         * @static
         * @param {rpc.IGetUsersRequest} message GetUsersRequest message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        GetUsersRequest.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a GetUsersRequest message from the specified reader or buffer.
         * @function decode
         * @memberof rpc.GetUsersRequest
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {rpc.GetUsersRequest} GetUsersRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        GetUsersRequest.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.rpc.GetUsersRequest();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a GetUsersRequest message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof rpc.GetUsersRequest
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {rpc.GetUsersRequest} GetUsersRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        GetUsersRequest.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a GetUsersRequest message.
         * @function verify
         * @memberof rpc.GetUsersRequest
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        GetUsersRequest.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            return null;
        };

        /**
         * Creates a GetUsersRequest message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof rpc.GetUsersRequest
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {rpc.GetUsersRequest} GetUsersRequest
         */
        GetUsersRequest.fromObject = function fromObject(object) {
            if (object instanceof $root.rpc.GetUsersRequest)
                return object;
            return new $root.rpc.GetUsersRequest();
        };

        /**
         * Creates a plain object from a GetUsersRequest message. Also converts values to other types if specified.
         * @function toObject
         * @memberof rpc.GetUsersRequest
         * @static
         * @param {rpc.GetUsersRequest} message GetUsersRequest
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        GetUsersRequest.toObject = function toObject() {
            return {};
        };

        /**
         * Converts this GetUsersRequest to JSON.
         * @function toJSON
         * @memberof rpc.GetUsersRequest
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        GetUsersRequest.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return GetUsersRequest;
    })();

    rpc.GetUsersResponse = (function() {

        /**
         * Properties of a GetUsersResponse.
         * @memberof rpc
         * @interface IGetUsersResponse
         * @property {Array.<rpc.IUser>|null} [users] GetUsersResponse users
         */

        /**
         * Constructs a new GetUsersResponse.
         * @memberof rpc
         * @classdesc Represents a GetUsersResponse.
         * @implements IGetUsersResponse
         * @constructor
         * @param {rpc.IGetUsersResponse=} [properties] Properties to set
         */
        function GetUsersResponse(properties) {
            this.users = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * GetUsersResponse users.
         * @member {Array.<rpc.IUser>} users
         * @memberof rpc.GetUsersResponse
         * @instance
         */
        GetUsersResponse.prototype.users = $util.emptyArray;

        /**
         * Creates a new GetUsersResponse instance using the specified properties.
         * @function create
         * @memberof rpc.GetUsersResponse
         * @static
         * @param {rpc.IGetUsersResponse=} [properties] Properties to set
         * @returns {rpc.GetUsersResponse} GetUsersResponse instance
         */
        GetUsersResponse.create = function create(properties) {
            return new GetUsersResponse(properties);
        };

        /**
         * Encodes the specified GetUsersResponse message. Does not implicitly {@link rpc.GetUsersResponse.verify|verify} messages.
         * @function encode
         * @memberof rpc.GetUsersResponse
         * @static
         * @param {rpc.IGetUsersResponse} message GetUsersResponse message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        GetUsersResponse.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.users != null && message.users.length)
                for (var i = 0; i < message.users.length; ++i)
                    $root.rpc.User.encode(message.users[i], writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified GetUsersResponse message, length delimited. Does not implicitly {@link rpc.GetUsersResponse.verify|verify} messages.
         * @function encodeDelimited
         * @memberof rpc.GetUsersResponse
         * @static
         * @param {rpc.IGetUsersResponse} message GetUsersResponse message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        GetUsersResponse.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a GetUsersResponse message from the specified reader or buffer.
         * @function decode
         * @memberof rpc.GetUsersResponse
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {rpc.GetUsersResponse} GetUsersResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        GetUsersResponse.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.rpc.GetUsersResponse();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    if (!(message.users && message.users.length))
                        message.users = [];
                    message.users.push($root.rpc.User.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a GetUsersResponse message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof rpc.GetUsersResponse
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {rpc.GetUsersResponse} GetUsersResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        GetUsersResponse.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a GetUsersResponse message.
         * @function verify
         * @memberof rpc.GetUsersResponse
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        GetUsersResponse.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.users != null && message.hasOwnProperty("users")) {
                if (!Array.isArray(message.users))
                    return "users: array expected";
                for (var i = 0; i < message.users.length; ++i) {
                    var error = $root.rpc.User.verify(message.users[i]);
                    if (error)
                        return "users." + error;
                }
            }
            return null;
        };

        /**
         * Creates a GetUsersResponse message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof rpc.GetUsersResponse
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {rpc.GetUsersResponse} GetUsersResponse
         */
        GetUsersResponse.fromObject = function fromObject(object) {
            if (object instanceof $root.rpc.GetUsersResponse)
                return object;
            var message = new $root.rpc.GetUsersResponse();
            if (object.users) {
                if (!Array.isArray(object.users))
                    throw TypeError(".rpc.GetUsersResponse.users: array expected");
                message.users = [];
                for (var i = 0; i < object.users.length; ++i) {
                    if (typeof object.users[i] !== "object")
                        throw TypeError(".rpc.GetUsersResponse.users: object expected");
                    message.users[i] = $root.rpc.User.fromObject(object.users[i]);
                }
            }
            return message;
        };

        /**
         * Creates a plain object from a GetUsersResponse message. Also converts values to other types if specified.
         * @function toObject
         * @memberof rpc.GetUsersResponse
         * @static
         * @param {rpc.GetUsersResponse} message GetUsersResponse
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        GetUsersResponse.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.arrays || options.defaults)
                object.users = [];
            if (message.users && message.users.length) {
                object.users = [];
                for (var j = 0; j < message.users.length; ++j)
                    object.users[j] = $root.rpc.User.toObject(message.users[j], options);
            }
            return object;
        };

        /**
         * Converts this GetUsersResponse to JSON.
         * @function toJSON
         * @memberof rpc.GetUsersResponse
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        GetUsersResponse.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return GetUsersResponse;
    })();

    rpc.GetUserRequest = (function() {

        /**
         * Properties of a GetUserRequest.
         * @memberof rpc
         * @interface IGetUserRequest
         * @property {number|null} [userId] GetUserRequest userId
         */

        /**
         * Constructs a new GetUserRequest.
         * @memberof rpc
         * @classdesc Represents a GetUserRequest.
         * @implements IGetUserRequest
         * @constructor
         * @param {rpc.IGetUserRequest=} [properties] Properties to set
         */
        function GetUserRequest(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * GetUserRequest userId.
         * @member {number} userId
         * @memberof rpc.GetUserRequest
         * @instance
         */
        GetUserRequest.prototype.userId = 0;

        /**
         * Creates a new GetUserRequest instance using the specified properties.
         * @function create
         * @memberof rpc.GetUserRequest
         * @static
         * @param {rpc.IGetUserRequest=} [properties] Properties to set
         * @returns {rpc.GetUserRequest} GetUserRequest instance
         */
        GetUserRequest.create = function create(properties) {
            return new GetUserRequest(properties);
        };

        /**
         * Encodes the specified GetUserRequest message. Does not implicitly {@link rpc.GetUserRequest.verify|verify} messages.
         * @function encode
         * @memberof rpc.GetUserRequest
         * @static
         * @param {rpc.IGetUserRequest} message GetUserRequest message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        GetUserRequest.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.userId != null && Object.hasOwnProperty.call(message, "userId"))
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.userId);
            return writer;
        };

        /**
         * Encodes the specified GetUserRequest message, length delimited. Does not implicitly {@link rpc.GetUserRequest.verify|verify} messages.
         * @function encodeDelimited
         * @memberof rpc.GetUserRequest
         * @static
         * @param {rpc.IGetUserRequest} message GetUserRequest message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        GetUserRequest.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a GetUserRequest message from the specified reader or buffer.
         * @function decode
         * @memberof rpc.GetUserRequest
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {rpc.GetUserRequest} GetUserRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        GetUserRequest.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.rpc.GetUserRequest();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.userId = reader.int32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a GetUserRequest message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof rpc.GetUserRequest
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {rpc.GetUserRequest} GetUserRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        GetUserRequest.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a GetUserRequest message.
         * @function verify
         * @memberof rpc.GetUserRequest
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        GetUserRequest.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.userId != null && message.hasOwnProperty("userId"))
                if (!$util.isInteger(message.userId))
                    return "userId: integer expected";
            return null;
        };

        /**
         * Creates a GetUserRequest message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof rpc.GetUserRequest
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {rpc.GetUserRequest} GetUserRequest
         */
        GetUserRequest.fromObject = function fromObject(object) {
            if (object instanceof $root.rpc.GetUserRequest)
                return object;
            var message = new $root.rpc.GetUserRequest();
            if (object.userId != null)
                message.userId = object.userId | 0;
            return message;
        };

        /**
         * Creates a plain object from a GetUserRequest message. Also converts values to other types if specified.
         * @function toObject
         * @memberof rpc.GetUserRequest
         * @static
         * @param {rpc.GetUserRequest} message GetUserRequest
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        GetUserRequest.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults)
                object.userId = 0;
            if (message.userId != null && message.hasOwnProperty("userId"))
                object.userId = message.userId;
            return object;
        };

        /**
         * Converts this GetUserRequest to JSON.
         * @function toJSON
         * @memberof rpc.GetUserRequest
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        GetUserRequest.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return GetUserRequest;
    })();

    rpc.GetUserResponse = (function() {

        /**
         * Properties of a GetUserResponse.
         * @memberof rpc
         * @interface IGetUserResponse
         * @property {number|null} [userId] GetUserResponse userId
         * @property {string|null} [username] GetUserResponse username
         * @property {string|null} [password] GetUserResponse password
         * @property {boolean|null} [isActive] GetUserResponse isActive
         * @property {string|null} [createdAt] GetUserResponse createdAt
         * @property {string|null} [updatedAt] GetUserResponse updatedAt
         */

        /**
         * Constructs a new GetUserResponse.
         * @memberof rpc
         * @classdesc Represents a GetUserResponse.
         * @implements IGetUserResponse
         * @constructor
         * @param {rpc.IGetUserResponse=} [properties] Properties to set
         */
        function GetUserResponse(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * GetUserResponse userId.
         * @member {number} userId
         * @memberof rpc.GetUserResponse
         * @instance
         */
        GetUserResponse.prototype.userId = 0;

        /**
         * GetUserResponse username.
         * @member {string} username
         * @memberof rpc.GetUserResponse
         * @instance
         */
        GetUserResponse.prototype.username = "";

        /**
         * GetUserResponse password.
         * @member {string} password
         * @memberof rpc.GetUserResponse
         * @instance
         */
        GetUserResponse.prototype.password = "";

        /**
         * GetUserResponse isActive.
         * @member {boolean} isActive
         * @memberof rpc.GetUserResponse
         * @instance
         */
        GetUserResponse.prototype.isActive = false;

        /**
         * GetUserResponse createdAt.
         * @member {string} createdAt
         * @memberof rpc.GetUserResponse
         * @instance
         */
        GetUserResponse.prototype.createdAt = "";

        /**
         * GetUserResponse updatedAt.
         * @member {string} updatedAt
         * @memberof rpc.GetUserResponse
         * @instance
         */
        GetUserResponse.prototype.updatedAt = "";

        /**
         * Creates a new GetUserResponse instance using the specified properties.
         * @function create
         * @memberof rpc.GetUserResponse
         * @static
         * @param {rpc.IGetUserResponse=} [properties] Properties to set
         * @returns {rpc.GetUserResponse} GetUserResponse instance
         */
        GetUserResponse.create = function create(properties) {
            return new GetUserResponse(properties);
        };

        /**
         * Encodes the specified GetUserResponse message. Does not implicitly {@link rpc.GetUserResponse.verify|verify} messages.
         * @function encode
         * @memberof rpc.GetUserResponse
         * @static
         * @param {rpc.IGetUserResponse} message GetUserResponse message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        GetUserResponse.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.userId != null && Object.hasOwnProperty.call(message, "userId"))
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.userId);
            if (message.username != null && Object.hasOwnProperty.call(message, "username"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.username);
            if (message.password != null && Object.hasOwnProperty.call(message, "password"))
                writer.uint32(/* id 3, wireType 2 =*/26).string(message.password);
            if (message.isActive != null && Object.hasOwnProperty.call(message, "isActive"))
                writer.uint32(/* id 4, wireType 0 =*/32).bool(message.isActive);
            if (message.createdAt != null && Object.hasOwnProperty.call(message, "createdAt"))
                writer.uint32(/* id 5, wireType 2 =*/42).string(message.createdAt);
            if (message.updatedAt != null && Object.hasOwnProperty.call(message, "updatedAt"))
                writer.uint32(/* id 6, wireType 2 =*/50).string(message.updatedAt);
            return writer;
        };

        /**
         * Encodes the specified GetUserResponse message, length delimited. Does not implicitly {@link rpc.GetUserResponse.verify|verify} messages.
         * @function encodeDelimited
         * @memberof rpc.GetUserResponse
         * @static
         * @param {rpc.IGetUserResponse} message GetUserResponse message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        GetUserResponse.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a GetUserResponse message from the specified reader or buffer.
         * @function decode
         * @memberof rpc.GetUserResponse
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {rpc.GetUserResponse} GetUserResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        GetUserResponse.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.rpc.GetUserResponse();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.userId = reader.int32();
                    break;
                case 2:
                    message.username = reader.string();
                    break;
                case 3:
                    message.password = reader.string();
                    break;
                case 4:
                    message.isActive = reader.bool();
                    break;
                case 5:
                    message.createdAt = reader.string();
                    break;
                case 6:
                    message.updatedAt = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a GetUserResponse message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof rpc.GetUserResponse
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {rpc.GetUserResponse} GetUserResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        GetUserResponse.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a GetUserResponse message.
         * @function verify
         * @memberof rpc.GetUserResponse
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        GetUserResponse.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.userId != null && message.hasOwnProperty("userId"))
                if (!$util.isInteger(message.userId))
                    return "userId: integer expected";
            if (message.username != null && message.hasOwnProperty("username"))
                if (!$util.isString(message.username))
                    return "username: string expected";
            if (message.password != null && message.hasOwnProperty("password"))
                if (!$util.isString(message.password))
                    return "password: string expected";
            if (message.isActive != null && message.hasOwnProperty("isActive"))
                if (typeof message.isActive !== "boolean")
                    return "isActive: boolean expected";
            if (message.createdAt != null && message.hasOwnProperty("createdAt"))
                if (!$util.isString(message.createdAt))
                    return "createdAt: string expected";
            if (message.updatedAt != null && message.hasOwnProperty("updatedAt"))
                if (!$util.isString(message.updatedAt))
                    return "updatedAt: string expected";
            return null;
        };

        /**
         * Creates a GetUserResponse message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof rpc.GetUserResponse
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {rpc.GetUserResponse} GetUserResponse
         */
        GetUserResponse.fromObject = function fromObject(object) {
            if (object instanceof $root.rpc.GetUserResponse)
                return object;
            var message = new $root.rpc.GetUserResponse();
            if (object.userId != null)
                message.userId = object.userId | 0;
            if (object.username != null)
                message.username = String(object.username);
            if (object.password != null)
                message.password = String(object.password);
            if (object.isActive != null)
                message.isActive = Boolean(object.isActive);
            if (object.createdAt != null)
                message.createdAt = String(object.createdAt);
            if (object.updatedAt != null)
                message.updatedAt = String(object.updatedAt);
            return message;
        };

        /**
         * Creates a plain object from a GetUserResponse message. Also converts values to other types if specified.
         * @function toObject
         * @memberof rpc.GetUserResponse
         * @static
         * @param {rpc.GetUserResponse} message GetUserResponse
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        GetUserResponse.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.userId = 0;
                object.username = "";
                object.password = "";
                object.isActive = false;
                object.createdAt = "";
                object.updatedAt = "";
            }
            if (message.userId != null && message.hasOwnProperty("userId"))
                object.userId = message.userId;
            if (message.username != null && message.hasOwnProperty("username"))
                object.username = message.username;
            if (message.password != null && message.hasOwnProperty("password"))
                object.password = message.password;
            if (message.isActive != null && message.hasOwnProperty("isActive"))
                object.isActive = message.isActive;
            if (message.createdAt != null && message.hasOwnProperty("createdAt"))
                object.createdAt = message.createdAt;
            if (message.updatedAt != null && message.hasOwnProperty("updatedAt"))
                object.updatedAt = message.updatedAt;
            return object;
        };

        /**
         * Converts this GetUserResponse to JSON.
         * @function toJSON
         * @memberof rpc.GetUserResponse
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        GetUserResponse.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return GetUserResponse;
    })();

    rpc.GetUserByUsernameRequest = (function() {

        /**
         * Properties of a GetUserByUsernameRequest.
         * @memberof rpc
         * @interface IGetUserByUsernameRequest
         * @property {string|null} [username] GetUserByUsernameRequest username
         */

        /**
         * Constructs a new GetUserByUsernameRequest.
         * @memberof rpc
         * @classdesc Represents a GetUserByUsernameRequest.
         * @implements IGetUserByUsernameRequest
         * @constructor
         * @param {rpc.IGetUserByUsernameRequest=} [properties] Properties to set
         */
        function GetUserByUsernameRequest(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * GetUserByUsernameRequest username.
         * @member {string} username
         * @memberof rpc.GetUserByUsernameRequest
         * @instance
         */
        GetUserByUsernameRequest.prototype.username = "";

        /**
         * Creates a new GetUserByUsernameRequest instance using the specified properties.
         * @function create
         * @memberof rpc.GetUserByUsernameRequest
         * @static
         * @param {rpc.IGetUserByUsernameRequest=} [properties] Properties to set
         * @returns {rpc.GetUserByUsernameRequest} GetUserByUsernameRequest instance
         */
        GetUserByUsernameRequest.create = function create(properties) {
            return new GetUserByUsernameRequest(properties);
        };

        /**
         * Encodes the specified GetUserByUsernameRequest message. Does not implicitly {@link rpc.GetUserByUsernameRequest.verify|verify} messages.
         * @function encode
         * @memberof rpc.GetUserByUsernameRequest
         * @static
         * @param {rpc.IGetUserByUsernameRequest} message GetUserByUsernameRequest message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        GetUserByUsernameRequest.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.username != null && Object.hasOwnProperty.call(message, "username"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.username);
            return writer;
        };

        /**
         * Encodes the specified GetUserByUsernameRequest message, length delimited. Does not implicitly {@link rpc.GetUserByUsernameRequest.verify|verify} messages.
         * @function encodeDelimited
         * @memberof rpc.GetUserByUsernameRequest
         * @static
         * @param {rpc.IGetUserByUsernameRequest} message GetUserByUsernameRequest message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        GetUserByUsernameRequest.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a GetUserByUsernameRequest message from the specified reader or buffer.
         * @function decode
         * @memberof rpc.GetUserByUsernameRequest
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {rpc.GetUserByUsernameRequest} GetUserByUsernameRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        GetUserByUsernameRequest.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.rpc.GetUserByUsernameRequest();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.username = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a GetUserByUsernameRequest message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof rpc.GetUserByUsernameRequest
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {rpc.GetUserByUsernameRequest} GetUserByUsernameRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        GetUserByUsernameRequest.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a GetUserByUsernameRequest message.
         * @function verify
         * @memberof rpc.GetUserByUsernameRequest
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        GetUserByUsernameRequest.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.username != null && message.hasOwnProperty("username"))
                if (!$util.isString(message.username))
                    return "username: string expected";
            return null;
        };

        /**
         * Creates a GetUserByUsernameRequest message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof rpc.GetUserByUsernameRequest
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {rpc.GetUserByUsernameRequest} GetUserByUsernameRequest
         */
        GetUserByUsernameRequest.fromObject = function fromObject(object) {
            if (object instanceof $root.rpc.GetUserByUsernameRequest)
                return object;
            var message = new $root.rpc.GetUserByUsernameRequest();
            if (object.username != null)
                message.username = String(object.username);
            return message;
        };

        /**
         * Creates a plain object from a GetUserByUsernameRequest message. Also converts values to other types if specified.
         * @function toObject
         * @memberof rpc.GetUserByUsernameRequest
         * @static
         * @param {rpc.GetUserByUsernameRequest} message GetUserByUsernameRequest
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        GetUserByUsernameRequest.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults)
                object.username = "";
            if (message.username != null && message.hasOwnProperty("username"))
                object.username = message.username;
            return object;
        };

        /**
         * Converts this GetUserByUsernameRequest to JSON.
         * @function toJSON
         * @memberof rpc.GetUserByUsernameRequest
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        GetUserByUsernameRequest.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return GetUserByUsernameRequest;
    })();

    rpc.GetUserByUsernameResponse = (function() {

        /**
         * Properties of a GetUserByUsernameResponse.
         * @memberof rpc
         * @interface IGetUserByUsernameResponse
         * @property {number|null} [userId] GetUserByUsernameResponse userId
         * @property {string|null} [username] GetUserByUsernameResponse username
         * @property {string|null} [password] GetUserByUsernameResponse password
         * @property {boolean|null} [isActive] GetUserByUsernameResponse isActive
         * @property {string|null} [createdAt] GetUserByUsernameResponse createdAt
         * @property {string|null} [updatedAt] GetUserByUsernameResponse updatedAt
         */

        /**
         * Constructs a new GetUserByUsernameResponse.
         * @memberof rpc
         * @classdesc Represents a GetUserByUsernameResponse.
         * @implements IGetUserByUsernameResponse
         * @constructor
         * @param {rpc.IGetUserByUsernameResponse=} [properties] Properties to set
         */
        function GetUserByUsernameResponse(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * GetUserByUsernameResponse userId.
         * @member {number} userId
         * @memberof rpc.GetUserByUsernameResponse
         * @instance
         */
        GetUserByUsernameResponse.prototype.userId = 0;

        /**
         * GetUserByUsernameResponse username.
         * @member {string} username
         * @memberof rpc.GetUserByUsernameResponse
         * @instance
         */
        GetUserByUsernameResponse.prototype.username = "";

        /**
         * GetUserByUsernameResponse password.
         * @member {string} password
         * @memberof rpc.GetUserByUsernameResponse
         * @instance
         */
        GetUserByUsernameResponse.prototype.password = "";

        /**
         * GetUserByUsernameResponse isActive.
         * @member {boolean} isActive
         * @memberof rpc.GetUserByUsernameResponse
         * @instance
         */
        GetUserByUsernameResponse.prototype.isActive = false;

        /**
         * GetUserByUsernameResponse createdAt.
         * @member {string} createdAt
         * @memberof rpc.GetUserByUsernameResponse
         * @instance
         */
        GetUserByUsernameResponse.prototype.createdAt = "";

        /**
         * GetUserByUsernameResponse updatedAt.
         * @member {string} updatedAt
         * @memberof rpc.GetUserByUsernameResponse
         * @instance
         */
        GetUserByUsernameResponse.prototype.updatedAt = "";

        /**
         * Creates a new GetUserByUsernameResponse instance using the specified properties.
         * @function create
         * @memberof rpc.GetUserByUsernameResponse
         * @static
         * @param {rpc.IGetUserByUsernameResponse=} [properties] Properties to set
         * @returns {rpc.GetUserByUsernameResponse} GetUserByUsernameResponse instance
         */
        GetUserByUsernameResponse.create = function create(properties) {
            return new GetUserByUsernameResponse(properties);
        };

        /**
         * Encodes the specified GetUserByUsernameResponse message. Does not implicitly {@link rpc.GetUserByUsernameResponse.verify|verify} messages.
         * @function encode
         * @memberof rpc.GetUserByUsernameResponse
         * @static
         * @param {rpc.IGetUserByUsernameResponse} message GetUserByUsernameResponse message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        GetUserByUsernameResponse.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.userId != null && Object.hasOwnProperty.call(message, "userId"))
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.userId);
            if (message.username != null && Object.hasOwnProperty.call(message, "username"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.username);
            if (message.password != null && Object.hasOwnProperty.call(message, "password"))
                writer.uint32(/* id 3, wireType 2 =*/26).string(message.password);
            if (message.isActive != null && Object.hasOwnProperty.call(message, "isActive"))
                writer.uint32(/* id 4, wireType 0 =*/32).bool(message.isActive);
            if (message.createdAt != null && Object.hasOwnProperty.call(message, "createdAt"))
                writer.uint32(/* id 5, wireType 2 =*/42).string(message.createdAt);
            if (message.updatedAt != null && Object.hasOwnProperty.call(message, "updatedAt"))
                writer.uint32(/* id 6, wireType 2 =*/50).string(message.updatedAt);
            return writer;
        };

        /**
         * Encodes the specified GetUserByUsernameResponse message, length delimited. Does not implicitly {@link rpc.GetUserByUsernameResponse.verify|verify} messages.
         * @function encodeDelimited
         * @memberof rpc.GetUserByUsernameResponse
         * @static
         * @param {rpc.IGetUserByUsernameResponse} message GetUserByUsernameResponse message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        GetUserByUsernameResponse.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a GetUserByUsernameResponse message from the specified reader or buffer.
         * @function decode
         * @memberof rpc.GetUserByUsernameResponse
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {rpc.GetUserByUsernameResponse} GetUserByUsernameResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        GetUserByUsernameResponse.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.rpc.GetUserByUsernameResponse();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.userId = reader.int32();
                    break;
                case 2:
                    message.username = reader.string();
                    break;
                case 3:
                    message.password = reader.string();
                    break;
                case 4:
                    message.isActive = reader.bool();
                    break;
                case 5:
                    message.createdAt = reader.string();
                    break;
                case 6:
                    message.updatedAt = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a GetUserByUsernameResponse message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof rpc.GetUserByUsernameResponse
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {rpc.GetUserByUsernameResponse} GetUserByUsernameResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        GetUserByUsernameResponse.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a GetUserByUsernameResponse message.
         * @function verify
         * @memberof rpc.GetUserByUsernameResponse
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        GetUserByUsernameResponse.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.userId != null && message.hasOwnProperty("userId"))
                if (!$util.isInteger(message.userId))
                    return "userId: integer expected";
            if (message.username != null && message.hasOwnProperty("username"))
                if (!$util.isString(message.username))
                    return "username: string expected";
            if (message.password != null && message.hasOwnProperty("password"))
                if (!$util.isString(message.password))
                    return "password: string expected";
            if (message.isActive != null && message.hasOwnProperty("isActive"))
                if (typeof message.isActive !== "boolean")
                    return "isActive: boolean expected";
            if (message.createdAt != null && message.hasOwnProperty("createdAt"))
                if (!$util.isString(message.createdAt))
                    return "createdAt: string expected";
            if (message.updatedAt != null && message.hasOwnProperty("updatedAt"))
                if (!$util.isString(message.updatedAt))
                    return "updatedAt: string expected";
            return null;
        };

        /**
         * Creates a GetUserByUsernameResponse message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof rpc.GetUserByUsernameResponse
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {rpc.GetUserByUsernameResponse} GetUserByUsernameResponse
         */
        GetUserByUsernameResponse.fromObject = function fromObject(object) {
            if (object instanceof $root.rpc.GetUserByUsernameResponse)
                return object;
            var message = new $root.rpc.GetUserByUsernameResponse();
            if (object.userId != null)
                message.userId = object.userId | 0;
            if (object.username != null)
                message.username = String(object.username);
            if (object.password != null)
                message.password = String(object.password);
            if (object.isActive != null)
                message.isActive = Boolean(object.isActive);
            if (object.createdAt != null)
                message.createdAt = String(object.createdAt);
            if (object.updatedAt != null)
                message.updatedAt = String(object.updatedAt);
            return message;
        };

        /**
         * Creates a plain object from a GetUserByUsernameResponse message. Also converts values to other types if specified.
         * @function toObject
         * @memberof rpc.GetUserByUsernameResponse
         * @static
         * @param {rpc.GetUserByUsernameResponse} message GetUserByUsernameResponse
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        GetUserByUsernameResponse.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.userId = 0;
                object.username = "";
                object.password = "";
                object.isActive = false;
                object.createdAt = "";
                object.updatedAt = "";
            }
            if (message.userId != null && message.hasOwnProperty("userId"))
                object.userId = message.userId;
            if (message.username != null && message.hasOwnProperty("username"))
                object.username = message.username;
            if (message.password != null && message.hasOwnProperty("password"))
                object.password = message.password;
            if (message.isActive != null && message.hasOwnProperty("isActive"))
                object.isActive = message.isActive;
            if (message.createdAt != null && message.hasOwnProperty("createdAt"))
                object.createdAt = message.createdAt;
            if (message.updatedAt != null && message.hasOwnProperty("updatedAt"))
                object.updatedAt = message.updatedAt;
            return object;
        };

        /**
         * Converts this GetUserByUsernameResponse to JSON.
         * @function toJSON
         * @memberof rpc.GetUserByUsernameResponse
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        GetUserByUsernameResponse.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return GetUserByUsernameResponse;
    })();

    rpc.DeleteUserRequest = (function() {

        /**
         * Properties of a DeleteUserRequest.
         * @memberof rpc
         * @interface IDeleteUserRequest
         * @property {number|null} [userId] DeleteUserRequest userId
         */

        /**
         * Constructs a new DeleteUserRequest.
         * @memberof rpc
         * @classdesc Represents a DeleteUserRequest.
         * @implements IDeleteUserRequest
         * @constructor
         * @param {rpc.IDeleteUserRequest=} [properties] Properties to set
         */
        function DeleteUserRequest(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * DeleteUserRequest userId.
         * @member {number} userId
         * @memberof rpc.DeleteUserRequest
         * @instance
         */
        DeleteUserRequest.prototype.userId = 0;

        /**
         * Creates a new DeleteUserRequest instance using the specified properties.
         * @function create
         * @memberof rpc.DeleteUserRequest
         * @static
         * @param {rpc.IDeleteUserRequest=} [properties] Properties to set
         * @returns {rpc.DeleteUserRequest} DeleteUserRequest instance
         */
        DeleteUserRequest.create = function create(properties) {
            return new DeleteUserRequest(properties);
        };

        /**
         * Encodes the specified DeleteUserRequest message. Does not implicitly {@link rpc.DeleteUserRequest.verify|verify} messages.
         * @function encode
         * @memberof rpc.DeleteUserRequest
         * @static
         * @param {rpc.IDeleteUserRequest} message DeleteUserRequest message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        DeleteUserRequest.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.userId != null && Object.hasOwnProperty.call(message, "userId"))
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.userId);
            return writer;
        };

        /**
         * Encodes the specified DeleteUserRequest message, length delimited. Does not implicitly {@link rpc.DeleteUserRequest.verify|verify} messages.
         * @function encodeDelimited
         * @memberof rpc.DeleteUserRequest
         * @static
         * @param {rpc.IDeleteUserRequest} message DeleteUserRequest message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        DeleteUserRequest.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a DeleteUserRequest message from the specified reader or buffer.
         * @function decode
         * @memberof rpc.DeleteUserRequest
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {rpc.DeleteUserRequest} DeleteUserRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        DeleteUserRequest.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.rpc.DeleteUserRequest();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.userId = reader.int32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a DeleteUserRequest message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof rpc.DeleteUserRequest
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {rpc.DeleteUserRequest} DeleteUserRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        DeleteUserRequest.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a DeleteUserRequest message.
         * @function verify
         * @memberof rpc.DeleteUserRequest
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        DeleteUserRequest.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.userId != null && message.hasOwnProperty("userId"))
                if (!$util.isInteger(message.userId))
                    return "userId: integer expected";
            return null;
        };

        /**
         * Creates a DeleteUserRequest message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof rpc.DeleteUserRequest
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {rpc.DeleteUserRequest} DeleteUserRequest
         */
        DeleteUserRequest.fromObject = function fromObject(object) {
            if (object instanceof $root.rpc.DeleteUserRequest)
                return object;
            var message = new $root.rpc.DeleteUserRequest();
            if (object.userId != null)
                message.userId = object.userId | 0;
            return message;
        };

        /**
         * Creates a plain object from a DeleteUserRequest message. Also converts values to other types if specified.
         * @function toObject
         * @memberof rpc.DeleteUserRequest
         * @static
         * @param {rpc.DeleteUserRequest} message DeleteUserRequest
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        DeleteUserRequest.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults)
                object.userId = 0;
            if (message.userId != null && message.hasOwnProperty("userId"))
                object.userId = message.userId;
            return object;
        };

        /**
         * Converts this DeleteUserRequest to JSON.
         * @function toJSON
         * @memberof rpc.DeleteUserRequest
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        DeleteUserRequest.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return DeleteUserRequest;
    })();

    rpc.DeleteUserResponse = (function() {

        /**
         * Properties of a DeleteUserResponse.
         * @memberof rpc
         * @interface IDeleteUserResponse
         * @property {number|null} [userId] DeleteUserResponse userId
         * @property {string|null} [username] DeleteUserResponse username
         * @property {string|null} [password] DeleteUserResponse password
         * @property {boolean|null} [isActive] DeleteUserResponse isActive
         * @property {string|null} [createdAt] DeleteUserResponse createdAt
         * @property {string|null} [updatedAt] DeleteUserResponse updatedAt
         */

        /**
         * Constructs a new DeleteUserResponse.
         * @memberof rpc
         * @classdesc Represents a DeleteUserResponse.
         * @implements IDeleteUserResponse
         * @constructor
         * @param {rpc.IDeleteUserResponse=} [properties] Properties to set
         */
        function DeleteUserResponse(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * DeleteUserResponse userId.
         * @member {number} userId
         * @memberof rpc.DeleteUserResponse
         * @instance
         */
        DeleteUserResponse.prototype.userId = 0;

        /**
         * DeleteUserResponse username.
         * @member {string} username
         * @memberof rpc.DeleteUserResponse
         * @instance
         */
        DeleteUserResponse.prototype.username = "";

        /**
         * DeleteUserResponse password.
         * @member {string} password
         * @memberof rpc.DeleteUserResponse
         * @instance
         */
        DeleteUserResponse.prototype.password = "";

        /**
         * DeleteUserResponse isActive.
         * @member {boolean} isActive
         * @memberof rpc.DeleteUserResponse
         * @instance
         */
        DeleteUserResponse.prototype.isActive = false;

        /**
         * DeleteUserResponse createdAt.
         * @member {string} createdAt
         * @memberof rpc.DeleteUserResponse
         * @instance
         */
        DeleteUserResponse.prototype.createdAt = "";

        /**
         * DeleteUserResponse updatedAt.
         * @member {string} updatedAt
         * @memberof rpc.DeleteUserResponse
         * @instance
         */
        DeleteUserResponse.prototype.updatedAt = "";

        /**
         * Creates a new DeleteUserResponse instance using the specified properties.
         * @function create
         * @memberof rpc.DeleteUserResponse
         * @static
         * @param {rpc.IDeleteUserResponse=} [properties] Properties to set
         * @returns {rpc.DeleteUserResponse} DeleteUserResponse instance
         */
        DeleteUserResponse.create = function create(properties) {
            return new DeleteUserResponse(properties);
        };

        /**
         * Encodes the specified DeleteUserResponse message. Does not implicitly {@link rpc.DeleteUserResponse.verify|verify} messages.
         * @function encode
         * @memberof rpc.DeleteUserResponse
         * @static
         * @param {rpc.IDeleteUserResponse} message DeleteUserResponse message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        DeleteUserResponse.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.userId != null && Object.hasOwnProperty.call(message, "userId"))
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.userId);
            if (message.username != null && Object.hasOwnProperty.call(message, "username"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.username);
            if (message.password != null && Object.hasOwnProperty.call(message, "password"))
                writer.uint32(/* id 3, wireType 2 =*/26).string(message.password);
            if (message.isActive != null && Object.hasOwnProperty.call(message, "isActive"))
                writer.uint32(/* id 4, wireType 0 =*/32).bool(message.isActive);
            if (message.createdAt != null && Object.hasOwnProperty.call(message, "createdAt"))
                writer.uint32(/* id 5, wireType 2 =*/42).string(message.createdAt);
            if (message.updatedAt != null && Object.hasOwnProperty.call(message, "updatedAt"))
                writer.uint32(/* id 6, wireType 2 =*/50).string(message.updatedAt);
            return writer;
        };

        /**
         * Encodes the specified DeleteUserResponse message, length delimited. Does not implicitly {@link rpc.DeleteUserResponse.verify|verify} messages.
         * @function encodeDelimited
         * @memberof rpc.DeleteUserResponse
         * @static
         * @param {rpc.IDeleteUserResponse} message DeleteUserResponse message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        DeleteUserResponse.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a DeleteUserResponse message from the specified reader or buffer.
         * @function decode
         * @memberof rpc.DeleteUserResponse
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {rpc.DeleteUserResponse} DeleteUserResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        DeleteUserResponse.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.rpc.DeleteUserResponse();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.userId = reader.int32();
                    break;
                case 2:
                    message.username = reader.string();
                    break;
                case 3:
                    message.password = reader.string();
                    break;
                case 4:
                    message.isActive = reader.bool();
                    break;
                case 5:
                    message.createdAt = reader.string();
                    break;
                case 6:
                    message.updatedAt = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a DeleteUserResponse message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof rpc.DeleteUserResponse
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {rpc.DeleteUserResponse} DeleteUserResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        DeleteUserResponse.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a DeleteUserResponse message.
         * @function verify
         * @memberof rpc.DeleteUserResponse
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        DeleteUserResponse.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.userId != null && message.hasOwnProperty("userId"))
                if (!$util.isInteger(message.userId))
                    return "userId: integer expected";
            if (message.username != null && message.hasOwnProperty("username"))
                if (!$util.isString(message.username))
                    return "username: string expected";
            if (message.password != null && message.hasOwnProperty("password"))
                if (!$util.isString(message.password))
                    return "password: string expected";
            if (message.isActive != null && message.hasOwnProperty("isActive"))
                if (typeof message.isActive !== "boolean")
                    return "isActive: boolean expected";
            if (message.createdAt != null && message.hasOwnProperty("createdAt"))
                if (!$util.isString(message.createdAt))
                    return "createdAt: string expected";
            if (message.updatedAt != null && message.hasOwnProperty("updatedAt"))
                if (!$util.isString(message.updatedAt))
                    return "updatedAt: string expected";
            return null;
        };

        /**
         * Creates a DeleteUserResponse message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof rpc.DeleteUserResponse
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {rpc.DeleteUserResponse} DeleteUserResponse
         */
        DeleteUserResponse.fromObject = function fromObject(object) {
            if (object instanceof $root.rpc.DeleteUserResponse)
                return object;
            var message = new $root.rpc.DeleteUserResponse();
            if (object.userId != null)
                message.userId = object.userId | 0;
            if (object.username != null)
                message.username = String(object.username);
            if (object.password != null)
                message.password = String(object.password);
            if (object.isActive != null)
                message.isActive = Boolean(object.isActive);
            if (object.createdAt != null)
                message.createdAt = String(object.createdAt);
            if (object.updatedAt != null)
                message.updatedAt = String(object.updatedAt);
            return message;
        };

        /**
         * Creates a plain object from a DeleteUserResponse message. Also converts values to other types if specified.
         * @function toObject
         * @memberof rpc.DeleteUserResponse
         * @static
         * @param {rpc.DeleteUserResponse} message DeleteUserResponse
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        DeleteUserResponse.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.userId = 0;
                object.username = "";
                object.password = "";
                object.isActive = false;
                object.createdAt = "";
                object.updatedAt = "";
            }
            if (message.userId != null && message.hasOwnProperty("userId"))
                object.userId = message.userId;
            if (message.username != null && message.hasOwnProperty("username"))
                object.username = message.username;
            if (message.password != null && message.hasOwnProperty("password"))
                object.password = message.password;
            if (message.isActive != null && message.hasOwnProperty("isActive"))
                object.isActive = message.isActive;
            if (message.createdAt != null && message.hasOwnProperty("createdAt"))
                object.createdAt = message.createdAt;
            if (message.updatedAt != null && message.hasOwnProperty("updatedAt"))
                object.updatedAt = message.updatedAt;
            return object;
        };

        /**
         * Converts this DeleteUserResponse to JSON.
         * @function toJSON
         * @memberof rpc.DeleteUserResponse
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        DeleteUserResponse.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return DeleteUserResponse;
    })();

    rpc.User = (function() {

        /**
         * Properties of a User.
         * @memberof rpc
         * @interface IUser
         * @property {number|null} [userId] User userId
         * @property {string|null} [username] User username
         * @property {string|null} [password] User password
         * @property {boolean|null} [isActive] User isActive
         * @property {string|null} [createdAt] User createdAt
         * @property {string|null} [updatedAt] User updatedAt
         */

        /**
         * Constructs a new User.
         * @memberof rpc
         * @classdesc Represents a User.
         * @implements IUser
         * @constructor
         * @param {rpc.IUser=} [properties] Properties to set
         */
        function User(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * User userId.
         * @member {number} userId
         * @memberof rpc.User
         * @instance
         */
        User.prototype.userId = 0;

        /**
         * User username.
         * @member {string} username
         * @memberof rpc.User
         * @instance
         */
        User.prototype.username = "";

        /**
         * User password.
         * @member {string} password
         * @memberof rpc.User
         * @instance
         */
        User.prototype.password = "";

        /**
         * User isActive.
         * @member {boolean} isActive
         * @memberof rpc.User
         * @instance
         */
        User.prototype.isActive = false;

        /**
         * User createdAt.
         * @member {string} createdAt
         * @memberof rpc.User
         * @instance
         */
        User.prototype.createdAt = "";

        /**
         * User updatedAt.
         * @member {string} updatedAt
         * @memberof rpc.User
         * @instance
         */
        User.prototype.updatedAt = "";

        /**
         * Creates a new User instance using the specified properties.
         * @function create
         * @memberof rpc.User
         * @static
         * @param {rpc.IUser=} [properties] Properties to set
         * @returns {rpc.User} User instance
         */
        User.create = function create(properties) {
            return new User(properties);
        };

        /**
         * Encodes the specified User message. Does not implicitly {@link rpc.User.verify|verify} messages.
         * @function encode
         * @memberof rpc.User
         * @static
         * @param {rpc.IUser} message User message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        User.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.userId != null && Object.hasOwnProperty.call(message, "userId"))
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.userId);
            if (message.username != null && Object.hasOwnProperty.call(message, "username"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.username);
            if (message.password != null && Object.hasOwnProperty.call(message, "password"))
                writer.uint32(/* id 3, wireType 2 =*/26).string(message.password);
            if (message.isActive != null && Object.hasOwnProperty.call(message, "isActive"))
                writer.uint32(/* id 4, wireType 0 =*/32).bool(message.isActive);
            if (message.createdAt != null && Object.hasOwnProperty.call(message, "createdAt"))
                writer.uint32(/* id 5, wireType 2 =*/42).string(message.createdAt);
            if (message.updatedAt != null && Object.hasOwnProperty.call(message, "updatedAt"))
                writer.uint32(/* id 6, wireType 2 =*/50).string(message.updatedAt);
            return writer;
        };

        /**
         * Encodes the specified User message, length delimited. Does not implicitly {@link rpc.User.verify|verify} messages.
         * @function encodeDelimited
         * @memberof rpc.User
         * @static
         * @param {rpc.IUser} message User message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        User.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a User message from the specified reader or buffer.
         * @function decode
         * @memberof rpc.User
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {rpc.User} User
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        User.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.rpc.User();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.userId = reader.int32();
                    break;
                case 2:
                    message.username = reader.string();
                    break;
                case 3:
                    message.password = reader.string();
                    break;
                case 4:
                    message.isActive = reader.bool();
                    break;
                case 5:
                    message.createdAt = reader.string();
                    break;
                case 6:
                    message.updatedAt = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a User message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof rpc.User
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {rpc.User} User
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        User.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a User message.
         * @function verify
         * @memberof rpc.User
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        User.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.userId != null && message.hasOwnProperty("userId"))
                if (!$util.isInteger(message.userId))
                    return "userId: integer expected";
            if (message.username != null && message.hasOwnProperty("username"))
                if (!$util.isString(message.username))
                    return "username: string expected";
            if (message.password != null && message.hasOwnProperty("password"))
                if (!$util.isString(message.password))
                    return "password: string expected";
            if (message.isActive != null && message.hasOwnProperty("isActive"))
                if (typeof message.isActive !== "boolean")
                    return "isActive: boolean expected";
            if (message.createdAt != null && message.hasOwnProperty("createdAt"))
                if (!$util.isString(message.createdAt))
                    return "createdAt: string expected";
            if (message.updatedAt != null && message.hasOwnProperty("updatedAt"))
                if (!$util.isString(message.updatedAt))
                    return "updatedAt: string expected";
            return null;
        };

        /**
         * Creates a User message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof rpc.User
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {rpc.User} User
         */
        User.fromObject = function fromObject(object) {
            if (object instanceof $root.rpc.User)
                return object;
            var message = new $root.rpc.User();
            if (object.userId != null)
                message.userId = object.userId | 0;
            if (object.username != null)
                message.username = String(object.username);
            if (object.password != null)
                message.password = String(object.password);
            if (object.isActive != null)
                message.isActive = Boolean(object.isActive);
            if (object.createdAt != null)
                message.createdAt = String(object.createdAt);
            if (object.updatedAt != null)
                message.updatedAt = String(object.updatedAt);
            return message;
        };

        /**
         * Creates a plain object from a User message. Also converts values to other types if specified.
         * @function toObject
         * @memberof rpc.User
         * @static
         * @param {rpc.User} message User
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        User.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.userId = 0;
                object.username = "";
                object.password = "";
                object.isActive = false;
                object.createdAt = "";
                object.updatedAt = "";
            }
            if (message.userId != null && message.hasOwnProperty("userId"))
                object.userId = message.userId;
            if (message.username != null && message.hasOwnProperty("username"))
                object.username = message.username;
            if (message.password != null && message.hasOwnProperty("password"))
                object.password = message.password;
            if (message.isActive != null && message.hasOwnProperty("isActive"))
                object.isActive = message.isActive;
            if (message.createdAt != null && message.hasOwnProperty("createdAt"))
                object.createdAt = message.createdAt;
            if (message.updatedAt != null && message.hasOwnProperty("updatedAt"))
                object.updatedAt = message.updatedAt;
            return object;
        };

        /**
         * Converts this User to JSON.
         * @function toJSON
         * @memberof rpc.User
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        User.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return User;
    })();

    return rpc;
})();

module.exports = $root;
