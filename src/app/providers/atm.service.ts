import {Injectable} from '@angular/core';
import {BASE_URL} from '../../environments/environment';
import {ApiService} from './api.service';

@Injectable({
  providedIn: 'root',
})
export class AtmService {

  constructor(public apiService: ApiService) {
  }

  /**
   * Null parameters method,
   * returns all the ATMs available
   *
   */
  getAllAtms() {
    return this.apiService.get(BASE_URL, '/atms');
  }

  /**
   * Method used to search for ATMs
   * by specific fields, if no parameters
   * are given, returns the whole list
   * of ATMs available
   *
   * @param values
   */
  searchAtms(values: any) {
    if (!values.q) {
      return this.getAllAtms();
    }

    const searchString = values.q;
    delete values.q;
    let fields = '';

    // used for when search string is provided but no search fields are specified
    if (!values.args) {
      return this.apiService.get(BASE_URL, `/atm?q=${searchString}&fields=street,housenumber,postalcode,city,lat,lng,distance,type`);
    }

    if (values.street) {
      fields = fields + 'street,';
    }
    if (values.housenumber) {
      fields = fields + 'housenumber,';
    }
    if (values.postalcode) {
      fields = fields + 'postalcode,';
    }
    if (values.city) {
      fields = fields + 'city,';
    }
    if (values.lat) {
      fields = fields + 'lat,';
    }
    if (values.lng) {
      fields = fields + 'lng,';
    }
    if (values.type) {
      fields = fields + 'type,';
    }
    // remove last comma from fields
    fields = fields.substring(0, fields.length - 1);
    return this.apiService.get(BASE_URL, `/atm?q=${searchString}&fields=${fields}`);
  }
}
