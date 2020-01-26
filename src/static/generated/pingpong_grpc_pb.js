// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('grpc');
var pingpong_pb = require('./pingpong_pb.js');

function serialize_pingpong_Ping(arg) {
  if (!(arg instanceof pingpong_pb.Ping)) {
    throw new Error('Expected argument of type pingpong.Ping');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_pingpong_Ping(buffer_arg) {
  return pingpong_pb.Ping.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_pingpong_Pong(arg) {
  if (!(arg instanceof pingpong_pb.Pong)) {
    throw new Error('Expected argument of type pingpong.Pong');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_pingpong_Pong(buffer_arg) {
  return pingpong_pb.Pong.deserializeBinary(new Uint8Array(buffer_arg));
}


var PingPongService = exports.PingPongService = {
  sendPing: {
    path: '/pingpong.PingPong/SendPing',
    requestStream: false,
    responseStream: false,
    requestType: pingpong_pb.Ping,
    responseType: pingpong_pb.Pong,
    requestSerialize: serialize_pingpong_Ping,
    requestDeserialize: deserialize_pingpong_Ping,
    responseSerialize: serialize_pingpong_Pong,
    responseDeserialize: deserialize_pingpong_Pong,
  },
};

exports.PingPongClient = grpc.makeGenericClientConstructor(PingPongService);
