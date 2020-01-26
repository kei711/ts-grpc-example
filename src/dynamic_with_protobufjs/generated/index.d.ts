import * as $protobuf from "protobufjs";
/** Namespace pingpong. */
export namespace pingpong {

    /** Represents a PingPong */
    class PingPong extends $protobuf.rpc.Service {

        /**
         * Constructs a new PingPong service.
         * @param rpcImpl RPC implementation
         * @param [requestDelimited=false] Whether requests are length-delimited
         * @param [responseDelimited=false] Whether responses are length-delimited
         */
        constructor(rpcImpl: $protobuf.RPCImpl, requestDelimited?: boolean, responseDelimited?: boolean);

        /**
         * Creates new PingPong service using the specified rpc implementation.
         * @param rpcImpl RPC implementation
         * @param [requestDelimited=false] Whether requests are length-delimited
         * @param [responseDelimited=false] Whether responses are length-delimited
         * @returns RPC service. Useful where requests and/or responses are streamed.
         */
        public static create(rpcImpl: $protobuf.RPCImpl, requestDelimited?: boolean, responseDelimited?: boolean): PingPong;

        /**
         * Calls SendPing.
         * @param request Ping message or plain object
         * @param callback Node-style callback called with the error, if any, and Pong
         */
        public sendPing(request: pingpong.IPing, callback: pingpong.PingPong.SendPingCallback): void;

        /**
         * Calls SendPing.
         * @param request Ping message or plain object
         * @returns Promise
         */
        public sendPing(request: pingpong.IPing): Promise<pingpong.Pong>;
    }

    namespace PingPong {

        /**
         * Callback as used by {@link pingpong.PingPong#sendPing}.
         * @param error Error, if any
         * @param [response] Pong
         */
        type SendPingCallback = (error: (Error|null), response?: pingpong.Pong) => void;
    }

    /** Properties of a Ping. */
    interface IPing {

        /** Ping type */
        type?: (string|null);

        /** Ping payload */
        payload?: (string|null);
    }

    /** Represents a Ping. */
    class Ping implements IPing {

        /**
         * Constructs a new Ping.
         * @param [properties] Properties to set
         */
        constructor(properties?: pingpong.IPing);

        /** Ping type. */
        public type: string;

        /** Ping payload. */
        public payload: string;

        /**
         * Creates a new Ping instance using the specified properties.
         * @param [properties] Properties to set
         * @returns Ping instance
         */
        public static create(properties?: pingpong.IPing): pingpong.Ping;

        /**
         * Verifies a Ping message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a Ping message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns Ping
         */
        public static fromObject(object: { [k: string]: any }): pingpong.Ping;

        /**
         * Creates a plain object from a Ping message. Also converts values to other types if specified.
         * @param message Ping
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: pingpong.Ping, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this Ping to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a Pong. */
    interface IPong {

        /** Pong payload */
        payload?: (string|null);
    }

    /** Represents a Pong. */
    class Pong implements IPong {

        /**
         * Constructs a new Pong.
         * @param [properties] Properties to set
         */
        constructor(properties?: pingpong.IPong);

        /** Pong payload. */
        public payload: string;

        /**
         * Creates a new Pong instance using the specified properties.
         * @param [properties] Properties to set
         * @returns Pong instance
         */
        public static create(properties?: pingpong.IPong): pingpong.Pong;

        /**
         * Verifies a Pong message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a Pong message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns Pong
         */
        public static fromObject(object: { [k: string]: any }): pingpong.Pong;

        /**
         * Creates a plain object from a Pong message. Also converts values to other types if specified.
         * @param message Pong
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: pingpong.Pong, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this Pong to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }
}
