import {Component, OnInit} from '@angular/core';
import {LoginService} from '../../providers/login.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  userLoggedIn: boolean;
  constructor(private loginService: LoginService) {
  }

  ngOnInit(): void {
    this.userLoggedIn = this.loginService.validateUser();
  }

  logout() {
    this.loginService.logout();
  }

}
