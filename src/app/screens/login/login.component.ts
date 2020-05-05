import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {TokenService} from '../../providers/token.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  formGroup: FormGroup;

  constructor(private tokenService: TokenService) {
    this.formGroup = new FormGroup({
      username: new FormControl('', Validators.required),
      password: new FormControl('', Validators.required)
    });
  }

  ngOnInit(): void {
  }

  populateFormFields() {
    this.formGroup;
    this.tokenService.loginAndCacheToken(this.formGroup.value.username, this.formGroup.value.password);

    // .pipe(
    // map((token) => console.log(token)));
  }

}
