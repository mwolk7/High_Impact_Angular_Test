import {Injectable} from '@angular/core';
import {CanActivate, Router} from '@angular/router';
import {TokenService} from '../services/token.service';

@Injectable({
  providedIn: 'root'
})
export class TokenGuardGuard implements CanActivate {
  constructor(private tokenService: TokenService, private router: Router) {
  }

  canActivate(): boolean {
    if (this.tokenService.validateUser()) {
      return true;
    } else {
      this.router.navigateByUrl('/login');
      return false;
    }
  }
}
