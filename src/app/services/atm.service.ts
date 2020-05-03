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
   * @param searchString
   * @param fields
   */
  searchAtms(searchString: string, fields: string) {
    if (searchString === '' && fields === '') {
      this.getAllAtms();
    // } else {
    //   return this.httpClient.get(BASE_URL.concat('?q=${value}&fields=${fields}'), {headers: httpHeaders})
    //     .pipe(map(response => {
    //       return response;
    //     }));
    }
  }
}
