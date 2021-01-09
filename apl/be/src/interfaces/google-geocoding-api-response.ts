export type GoogleGeocodingApiResponse = {
  results: Array<Results>;
  status: string;
};

type Results = {
  address_components: Array<AddressComponent>;
  formatted_address: string;
  geometry: {
    bounds: {
      northeast: {
        lat: number;
        lng: number;
      };
      southwest: {
        lat: number;
        lng: number;
      };
    };
    location: {
      lat: number;
      lng: number;
    };
    location_type: string;
    viewport: {
      northeast: {
        lat: number;
        lng: number;
      };
      southwest: {
        lat: number;
        lng: number;
      };
    };
  };
  place_id: string;
  types: Array<string>;
};

type AddressComponent = {
  long_name: string;
  short_name: string;
  types: Array<string>;
};
