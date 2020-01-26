import * as grpc from 'grpc';
import { PingPongClient } from './generated/pingpong_grpc_pb';
import { Ping } from './generated/pingpong_pb';

function main() {
  const meta = new grpc.Metadata();
  meta.set('identifier', 'test@example.com');
  const client = new PingPongClient('localhost:50051', grpc.credentials.createInsecure());
  const ping = new Ping();
  ping.setType('sample');
  ping.setPayload('ping');
  client.sendPing(ping, meta, (error, value) => {
    console.log(value.toObject());
    client.close();
  });
}

main();
