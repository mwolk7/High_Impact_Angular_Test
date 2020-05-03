import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {Router} from '@angular/router';
import {map} from 'rxjs/operators';

const httpHeaders = new HttpHeaders({
  'Content-Type': 'application/json',
});

const tokenUrl = 'http://vps-1575977-x.dattaweb.com:8080/atscom/login';

@Injectable({
  providedIn: 'root',
})
export class TokenService {
  private token: string;

  constructor(private httpClient: HttpClient, private router: Router) {
  }

  /**
   * Main method, used to log-in,
   * validate the user, store token
   * in cache to maintain the session
   * within the app
   *
   * @param username
   * @param password
   */
  loginAndCacheToken(username: string, password: string) {
    return this.httpClient.post(
      tokenUrl,
      {username, password},
      {responseType: 'text', headers: httpHeaders}
    ).toPromise().then((data: string) => {
      this.cacheToken(data);
      this.router.navigateByUrl('/search');
    });
  }

  // loginAndCacheToken(username: string, password: string) {
  //   console.log(username, password);
  //   return this.httpClient.post(
  //     tokenUrl,
  //     {username, password},
  //     {headers: httpHeaders, responseType: 'text'})
  //     .pipe(map (response) =>{
  //       console.log(response);
  //   });
  // }

  /**
   * Used to cache token and
   * store user's session
   *
   * @param token
   */
  private cacheToken(token: string) {
    this.token = token;
    localStorage.setItem('token', token);
  }

  /**
   * Used to validate the user
   * in the log-in process
   *
   */
  validateUser(): boolean {
    if (localStorage.getItem('token')) {
      return true;
    } else {
      return false;
    }
  }

  /**
   * Used to log-out from
   * the app
   *
   */
  logout() {
    localStorage.removeItem('token');
    this.router.navigateByUrl('/login');
  }
}
