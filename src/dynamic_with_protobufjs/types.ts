import * as grpc from 'grpc';
import * as $protobuf from 'protobufjs';

type FilteredKeys<T, U> = {
  [P in keyof T]: T[P] extends U ? P : never;
}[keyof T];

type ProtobufFn = (request: {}) => PromiseLike<{}>;
type RequestArgType<T extends ProtobufFn> = T extends (request: infer U) => PromiseLike<any>
  ? U
  : never;
type ResponseType<T extends ProtobufFn> = T extends (request) => PromiseLike<infer U> ? U : never;

export type GrpcServer<T extends $protobuf.rpc.Service> = {
  [K in FilteredKeys<T, ProtobufFn>]: grpc.handleUnaryCall<
    RequestArgType<T[K]>,
    ResponseType<T[K]>
  >;
};

export type GrpcClient<T extends $protobuf.rpc.Service> = grpc.Client &
  {
    [K in FilteredKeys<T, ProtobufFn>]: (
      req: RequestArgType<T[K]>,
      metadata: grpc.Metadata,
      callback: grpc.requestCallback<ResponseType<T[K]>>,
    ) => void;
  };
