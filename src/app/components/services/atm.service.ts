import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {map} from 'rxjs/operators';


const httpHeaders = new HttpHeaders({
  'Content-Type': 'application/json',
  Authorization: localStorage.getItem('token')
});

const atmsUrl = 'http://vps-1575977-x.dattaweb.com:8080/atscom/atms';

@Injectable({
  providedIn: 'root',
})
export class AtmService {

  constructor(private httpClient: HttpClient) {
  }

  // getAllAtms() {
  //   console.log(httpHeaders);
  //   return this.httpClient.get(
  //     atmsUrl,
  //     {headers: httpHeaders }
  //   ).toPromise().then((data: any) => {
  //     console.log(data);
  //   });
  // }

  getAllAtms() {
    return this.httpClient.get(
      atmsUrl,
      {headers: httpHeaders }
    ).pipe(map (response => {
      console.log(response);
      return response;
    }));
  }

  searchAtms(value: string, fields: string) {
    let endpoint = 'http://vps-1575977-x.dattaweb.com:8080/atscom/atm?q=${value}&fields=${fields}';
  }
}
