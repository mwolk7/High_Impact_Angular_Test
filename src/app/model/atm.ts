class GeoLocation {
  lat: string;
  lng: string;
}

class Address {
  street: string;
  housenumber: string;
  postalcode: string;
  city: string;
  geoLocation: GeoLocation;
}

export class Atm {
  address: Address;
  distance: number;
  type: string;
}
