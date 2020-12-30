export interface GoogleGeocodingApiResponseSchema {
  results: Array<Results>;
  status: string;
}

interface Results {
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
}

interface AddressComponent {
  long_name: string;
  short_name: string;
  types: Array<string>;
}
