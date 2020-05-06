import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {LoginService} from '../../providers/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  formGroup: FormGroup;

  constructor(private loginService: LoginService) {
    
  }

  ngOnInit(): void {
    this.formGroup = new FormGroup({
      username: new FormControl('', Validators.required),
      password: new FormControl('', Validators.required)
    });
    // this.formGroup;
    this.loginService.loginAndCacheToken(this.formGroup.value.username, this.formGroup.value.password);
  }

  populateFormFields() {
    this.formGroup;
    this.loginService.loginAndCacheToken(this.formGroup.value.username, this.formGroup.value.password);

    // .pipe(
    // map((token) => console.log(token)));
  }

}
