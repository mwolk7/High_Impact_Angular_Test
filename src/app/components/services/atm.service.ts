import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Injectable} from '@angular/core';

const httpHeaders = new HttpHeaders({
  'Content-Type': 'application/json',
});

const atmsUrl = 'http://vps-1575977-x.dattaweb.com:8080/atscom/atm';

@Injectable({
  providedIn: 'root',
})
export class AtmService {

  constructor(private httpClient: HttpClient) {
  }

  getAllAtms() {
    return this.httpClient.post(
      atmsUrl,
      { responseType: 'text', headers: httpHeaders }
    ).toPromise().then((data: string) => {
      console.log(data);
    });
  }

  searchAtms(value: string, fields: string) {
    let endpoint = 'http://vps-1575977-x.dattaweb.com:8080/atscom/atm?q=${value}&fields=${fields}';
  }
}
