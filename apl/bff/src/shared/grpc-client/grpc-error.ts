export class GrpcError extends Error {
  constructor(error: any) {
    error.message = `gRPC ERROR: ${error.message}`;
    super(error);
  }
}
