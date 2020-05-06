import {Injectable} from '@angular/core';
import {CanActivate, Router} from '@angular/router';
import {LoginService} from '../providers/login.service';

@Injectable({
  providedIn: 'root'
})
export class TokenGuard implements CanActivate {
  constructor(private loginService: LoginService, private router: Router) {
  }

  canActivate(): boolean {
    if (this.loginService.validateUser()) {
      return true;
    } else {
      this.router.navigateByUrl('/login');
      return false;
    }
  }
}
