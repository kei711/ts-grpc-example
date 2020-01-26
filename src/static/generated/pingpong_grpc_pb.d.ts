// package: pingpong
// file: pingpong.proto

/* tslint:disable */
/* eslint-disable */

import * as grpc from "grpc";
import * as pingpong_pb from "./pingpong_pb";

interface IPingPongService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
    sendPing: IPingPongService_ISendPing;
}

interface IPingPongService_ISendPing extends grpc.MethodDefinition<pingpong_pb.Ping, pingpong_pb.Pong> {
    path: string; // "/pingpong.PingPong/SendPing"
    requestStream: boolean; // false
    responseStream: boolean; // false
    requestSerialize: grpc.serialize<pingpong_pb.Ping>;
    requestDeserialize: grpc.deserialize<pingpong_pb.Ping>;
    responseSerialize: grpc.serialize<pingpong_pb.Pong>;
    responseDeserialize: grpc.deserialize<pingpong_pb.Pong>;
}

export const PingPongService: IPingPongService;

export interface IPingPongServer {
    sendPing: grpc.handleUnaryCall<pingpong_pb.Ping, pingpong_pb.Pong>;
}

export interface IPingPongClient {
    sendPing(request: pingpong_pb.Ping, callback: (error: grpc.ServiceError | null, response: pingpong_pb.Pong) => void): grpc.ClientUnaryCall;
    sendPing(request: pingpong_pb.Ping, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: pingpong_pb.Pong) => void): grpc.ClientUnaryCall;
    sendPing(request: pingpong_pb.Ping, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: pingpong_pb.Pong) => void): grpc.ClientUnaryCall;
}

export class PingPongClient extends grpc.Client implements IPingPongClient {
    constructor(address: string, credentials: grpc.ChannelCredentials, options?: object);
    public sendPing(request: pingpong_pb.Ping, callback: (error: grpc.ServiceError | null, response: pingpong_pb.Pong) => void): grpc.ClientUnaryCall;
    public sendPing(request: pingpong_pb.Ping, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: pingpong_pb.Pong) => void): grpc.ClientUnaryCall;
    public sendPing(request: pingpong_pb.Ping, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: pingpong_pb.Pong) => void): grpc.ClientUnaryCall;
}
