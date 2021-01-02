export const GRPC_REQ = 'GRPC_REQ' as const;
export const GRPC_RES = 'GRPC_RES' as const;
type GrpcLoggingType = typeof GRPC_REQ | typeof GRPC_RES;

export type GrpcLoggingInfo = {
  type: GrpcLoggingType;
  service: string;
  method: string;
  request?: any;
  response?: any;
};
