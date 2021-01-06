export type GnaviRestSearchApiRequestSchema = {
  keyid: string;
  latitude: number;
  longitude: number;
  range: number;
  offset_page: number;
  hit_per_page: number;
};
