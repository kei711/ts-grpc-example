import * as path from 'path';
import * as grpc from 'grpc';
import * as protoLoader from '@grpc/proto-loader';
import { pingpong } from './generated';
import { GrpcServer } from './types';

const PROTO_PATH = path.resolve(__dirname, '../../pingpong.proto');
const packageDefinition = protoLoader.loadSync(PROTO_PATH, {
  keepCase: true,
  longs: String,
  enums: String,
  defaults: true,
  oneofs: true,
});
const packageObject = grpc.loadPackageDefinition(packageDefinition).pingpong;

function main() {
  const server = new grpc.Server();
  server.addService<GrpcServer<pingpong.PingPong>>(packageObject['PingPong'].service, {
    sendPing(call, callback): void {
      console.log(call.request);
      console.log(call.metadata.getMap());
      callback(null, new pingpong.Pong({ payload: 'pong' }));
    },
  });
  server.bind('0.0.0.0:50051', grpc.ServerCredentials.createInsecure());
  server.start();
}

main();
