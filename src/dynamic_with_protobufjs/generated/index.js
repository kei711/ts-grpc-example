/*eslint-disable block-scoped-var, id-length, no-control-regex, no-magic-numbers, no-prototype-builtins, no-redeclare, no-shadow, no-var, sort-vars*/
(function(global, factory) { /* global define, require, module */

    /* AMD */ if (typeof define === 'function' && define.amd)
        define(["protobufjs/minimal"], factory);

    /* CommonJS */ else if (typeof require === 'function' && typeof module === 'object' && module && module.exports)
        module.exports = factory(require("protobufjs/minimal"));

})(this, function($protobuf) {
    "use strict";

    // Common aliases
    var $util = $protobuf.util;
    
    // Exported root namespace
    var $root = $protobuf.roots["default"] || ($protobuf.roots["default"] = {});
    
    $root.pingpong = (function() {
    
        /**
         * Namespace pingpong.
         * @exports pingpong
         * @namespace
         */
        var pingpong = {};
    
        pingpong.PingPong = (function() {
    
            /**
             * Constructs a new PingPong service.
             * @memberof pingpong
             * @classdesc Represents a PingPong
             * @extends $protobuf.rpc.Service
             * @constructor
             * @param {$protobuf.RPCImpl} rpcImpl RPC implementation
             * @param {boolean} [requestDelimited=false] Whether requests are length-delimited
             * @param {boolean} [responseDelimited=false] Whether responses are length-delimited
             */
            function PingPong(rpcImpl, requestDelimited, responseDelimited) {
                $protobuf.rpc.Service.call(this, rpcImpl, requestDelimited, responseDelimited);
            }
    
            (PingPong.prototype = Object.create($protobuf.rpc.Service.prototype)).constructor = PingPong;
    
            /**
             * Creates new PingPong service using the specified rpc implementation.
             * @function create
             * @memberof pingpong.PingPong
             * @static
             * @param {$protobuf.RPCImpl} rpcImpl RPC implementation
             * @param {boolean} [requestDelimited=false] Whether requests are length-delimited
             * @param {boolean} [responseDelimited=false] Whether responses are length-delimited
             * @returns {PingPong} RPC service. Useful where requests and/or responses are streamed.
             */
            PingPong.create = function create(rpcImpl, requestDelimited, responseDelimited) {
                return new this(rpcImpl, requestDelimited, responseDelimited);
            };
    
            /**
             * Callback as used by {@link pingpong.PingPong#sendPing}.
             * @memberof pingpong.PingPong
             * @typedef SendPingCallback
             * @type {function}
             * @param {Error|null} error Error, if any
             * @param {pingpong.Pong} [response] Pong
             */
    
            /**
             * Calls SendPing.
             * @function sendPing
             * @memberof pingpong.PingPong
             * @instance
             * @param {pingpong.IPing} request Ping message or plain object
             * @param {pingpong.PingPong.SendPingCallback} callback Node-style callback called with the error, if any, and Pong
             * @returns {undefined}
             * @variation 1
             */
            Object.defineProperty(PingPong.prototype.sendPing = function sendPing(request, callback) {
                return this.rpcCall(sendPing, $root.pingpong.Ping, $root.pingpong.Pong, request, callback);
            }, "name", { value: "SendPing" });
    
            /**
             * Calls SendPing.
             * @function sendPing
             * @memberof pingpong.PingPong
             * @instance
             * @param {pingpong.IPing} request Ping message or plain object
             * @returns {Promise<pingpong.Pong>} Promise
             * @variation 2
             */
    
            return PingPong;
        })();
    
        pingpong.Ping = (function() {
    
            /**
             * Properties of a Ping.
             * @memberof pingpong
             * @interface IPing
             * @property {string|null} [type] Ping type
             * @property {string|null} [payload] Ping payload
             */
    
            /**
             * Constructs a new Ping.
             * @memberof pingpong
             * @classdesc Represents a Ping.
             * @implements IPing
             * @constructor
             * @param {pingpong.IPing=} [properties] Properties to set
             */
            function Ping(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }
    
            /**
             * Ping type.
             * @member {string} type
             * @memberof pingpong.Ping
             * @instance
             */
            Ping.prototype.type = "";
    
            /**
             * Ping payload.
             * @member {string} payload
             * @memberof pingpong.Ping
             * @instance
             */
            Ping.prototype.payload = "";
    
            /**
             * Creates a new Ping instance using the specified properties.
             * @function create
             * @memberof pingpong.Ping
             * @static
             * @param {pingpong.IPing=} [properties] Properties to set
             * @returns {pingpong.Ping} Ping instance
             */
            Ping.create = function create(properties) {
                return new Ping(properties);
            };
    
            /**
             * Verifies a Ping message.
             * @function verify
             * @memberof pingpong.Ping
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            Ping.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.type != null && message.hasOwnProperty("type"))
                    if (!$util.isString(message.type))
                        return "type: string expected";
                if (message.payload != null && message.hasOwnProperty("payload"))
                    if (!$util.isString(message.payload))
                        return "payload: string expected";
                return null;
            };
    
            /**
             * Creates a Ping message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof pingpong.Ping
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {pingpong.Ping} Ping
             */
            Ping.fromObject = function fromObject(object) {
                if (object instanceof $root.pingpong.Ping)
                    return object;
                var message = new $root.pingpong.Ping();
                if (object.type != null)
                    message.type = String(object.type);
                if (object.payload != null)
                    message.payload = String(object.payload);
                return message;
            };
    
            /**
             * Creates a plain object from a Ping message. Also converts values to other types if specified.
             * @function toObject
             * @memberof pingpong.Ping
             * @static
             * @param {pingpong.Ping} message Ping
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            Ping.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.defaults) {
                    object.type = "";
                    object.payload = "";
                }
                if (message.type != null && message.hasOwnProperty("type"))
                    object.type = message.type;
                if (message.payload != null && message.hasOwnProperty("payload"))
                    object.payload = message.payload;
                return object;
            };
    
            /**
             * Converts this Ping to JSON.
             * @function toJSON
             * @memberof pingpong.Ping
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            Ping.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };
    
            return Ping;
        })();
    
        pingpong.Pong = (function() {
    
            /**
             * Properties of a Pong.
             * @memberof pingpong
             * @interface IPong
             * @property {string|null} [payload] Pong payload
             */
    
            /**
             * Constructs a new Pong.
             * @memberof pingpong
             * @classdesc Represents a Pong.
             * @implements IPong
             * @constructor
             * @param {pingpong.IPong=} [properties] Properties to set
             */
            function Pong(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }
    
            /**
             * Pong payload.
             * @member {string} payload
             * @memberof pingpong.Pong
             * @instance
             */
            Pong.prototype.payload = "";
    
            /**
             * Creates a new Pong instance using the specified properties.
             * @function create
             * @memberof pingpong.Pong
             * @static
             * @param {pingpong.IPong=} [properties] Properties to set
             * @returns {pingpong.Pong} Pong instance
             */
            Pong.create = function create(properties) {
                return new Pong(properties);
            };
    
            /**
             * Verifies a Pong message.
             * @function verify
             * @memberof pingpong.Pong
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            Pong.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.payload != null && message.hasOwnProperty("payload"))
                    if (!$util.isString(message.payload))
                        return "payload: string expected";
                return null;
            };
    
            /**
             * Creates a Pong message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof pingpong.Pong
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {pingpong.Pong} Pong
             */
            Pong.fromObject = function fromObject(object) {
                if (object instanceof $root.pingpong.Pong)
                    return object;
                var message = new $root.pingpong.Pong();
                if (object.payload != null)
                    message.payload = String(object.payload);
                return message;
            };
    
            /**
             * Creates a plain object from a Pong message. Also converts values to other types if specified.
             * @function toObject
             * @memberof pingpong.Pong
             * @static
             * @param {pingpong.Pong} message Pong
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            Pong.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.defaults)
                    object.payload = "";
                if (message.payload != null && message.hasOwnProperty("payload"))
                    object.payload = message.payload;
                return object;
            };
    
            /**
             * Converts this Pong to JSON.
             * @function toJSON
             * @memberof pingpong.Pong
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            Pong.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };
    
            return Pong;
        })();
    
        return pingpong;
    })();

    return $root;
});
