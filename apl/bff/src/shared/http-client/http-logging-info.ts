export const HTTP_REQ = 'HTTP_REQ' as const;
export const HTTP_RES = 'HTTP_RES' as const;
type HttpLoggingType = typeof HTTP_REQ | typeof HTTP_RES;

export type HttpLoggingInfo = {
  type: HttpLoggingType;
  url: string;
  id?: string;
  model?: any;
  header?: any;
  status?: any;
  data?: any;
};
