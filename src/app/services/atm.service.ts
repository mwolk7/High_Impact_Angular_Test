import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {map} from 'rxjs/operators';

const httpHeaders = new HttpHeaders({
  'Content-Type': 'application/json',
  Authorization: localStorage.getItem('token')
});

const BASE_URL = 'http://vps-1575977-x.dattaweb.com:8080/atscom/atm';

@Injectable({
  providedIn: 'root',
})
export class AtmService {

  constructor(private httpClient: HttpClient) {
  }

  /**
   * Null parameter method,
   * returns all the ATMs available
   *
   */
  getAllAtms() {
    return this.httpClient.get(
      BASE_URL.concat('s'),
      {headers: httpHeaders}
    ).pipe(map(response => {
      return response;
    }));
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

    let searchString = values.q;
    let fields = '';

    // TODO refactor for better legibility
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

    fields = fields.substring(0, fields.length - 1);

    return this.httpClient.get(BASE_URL.concat(`?q=${searchString}&fields=${fields}`), {headers: httpHeaders})
      .pipe(map(response => {
        console.log(BASE_URL.concat(`?q=${searchString}&fields=${fields}`));
        return response;
      }));
  }
}
