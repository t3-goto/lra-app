export class GrpcError extends Error {
  constructor(error: any) {
    error.message = `GRPC ERROR: ${error.message}`;
    super(error);
  }
}
