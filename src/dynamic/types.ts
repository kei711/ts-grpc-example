import * as grpc from 'grpc';

export interface PingPongServer {
  sendPing(call: grpc.ServerUnaryCall<Ping>, callback: grpc.sendUnaryData<Pong>): void;
}
export interface PingPongClient extends grpc.Client {
  sendPing(call: Ping, metadata: grpc.Metadata, callback: grpc.sendUnaryData<Pong>): void;
}

export interface Ping {
  type: string;
  payload: string;
}

export interface Pong {
  payload: string;
}
