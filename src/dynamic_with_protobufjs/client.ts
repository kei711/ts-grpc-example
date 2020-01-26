import * as path from 'path';
import * as grpc from 'grpc';
import * as protoLoader from '@grpc/proto-loader';
import { pingpong } from './generated';
import { GrpcClient } from './types';

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
  const meta = new grpc.Metadata();
  meta.set('identifier', 'test@example.com');
  const client: GrpcClient<pingpong.PingPong> = new packageObject['PingPong'](
    'localhost:50051',
    grpc.credentials.createInsecure(),
  );
  client.sendPing(new pingpong.Ping({ type: 'sample', payload: 'ping' }), meta, (error, value) => {
    console.log(value);
    client.close();
  });
}

main();
