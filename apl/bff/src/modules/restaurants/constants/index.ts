export const DEFAULT_RANGE = 3;
export const DEFAULT_HIT_PER_PAGE = 100;
export const DEFAULT_OFFSET_PAGE = 1;
export const FIND_BY_LATLNG = 'FIND_BY_LATLNG' as const;
export const FIND_BY_ADDRESS = 'FIND_BY_ADDRESS' as const;
export const BAD_REQUEST = 'BAD_REQUEST' as const;
export type FindMode =
  | typeof FIND_BY_ADDRESS
  | typeof FIND_BY_LATLNG
  | typeof BAD_REQUEST;
