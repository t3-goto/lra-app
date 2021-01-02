#!/usr/bin/env node

// ______________________________________________
// Import Libraries.
const child_process = require('child_process');

// ______________________________________________
// Define Error handler.
process.on('unhandledRejection', (err) => {
  throw err;
});

// ______________________________________________
// Exec Commands.
// "build:proto": "rm -f codegen/* && pbjs -t static-module -w commonjs -o codegen/grpc.js protos/**/*.proto && pbts -o codegen/grpc.d.ts codegen/grpc.js && sed -i 's/Promise/Observable/g' codegen/grpc.d.ts && sed -i '1i import { Observable } from \"rxjs\";' codegen/grpc.d.ts && prettier --write \"codegen/**/*.d.ts"
const CMD_1 = `rm -f codegen/*`;
const CMD_2 = `pbjs -t static-module -w commonjs -o codegen/grpc.js protos/**/*.proto`;
const CMD_3 = `pbts -o codegen/grpc.d.ts codegen/grpc.js`;
// https://github.com/protobufjs/protobuf.js/issues/1355
const CMD_4 = `sed -i 's/Promise/Observable/g' codegen/grpc.d.ts`;
const CMD_5 = `sed -i '1i import { Observable } from "rxjs";' codegen/grpc.d.ts`;
const CMD_6 = `prettier --write \"codegen/**/*.d.ts`;

child_process.execSync(CMD_1);
child_process.execSync(CMD_2);
child_process.execSync(CMD_3);
child_process.execSync(CMD_4);
child_process.execSync(CMD_5);
child_process.execSync(CMD_6);
