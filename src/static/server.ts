import * as grpc from 'grpc';
import { IPingPongServer, PingPongService } from './generated/pingpong_grpc_pb';
import { Pong } from './generated/pingpong_pb';

function main() {
  const server = new grpc.Server();
  server.addService<IPingPongServer>(PingPongService, {
    sendPing: (call, callback) => {
      console.log(call.request.toObject());
      console.log(call.metadata.getMap());
      let pong = new Pong();
      pong.setPayload('pong');
      callback(null, pong);
    },
  });
  server.bind('0.0.0.0:50051', grpc.ServerCredentials.createInsecure());
  server.start();
}

main();
