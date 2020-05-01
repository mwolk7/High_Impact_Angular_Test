import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {AtmService} from '../components/services/atm.service';

@Component({
  selector: 'app-search-atms',
  templateUrl: './search-atms.component.html',
  styleUrls: ['./search-atms.component.css']
})
export class SearchAtmsComponent implements OnInit {
  formGroup: FormGroup;

  constructor(private atmService: AtmService) {
    this.formGroup = new FormGroup({
      street: new FormControl(''),
      housenumber: new FormControl(''),
      postalcode: new FormControl(''),
      city: new FormControl(''),
      lat: new FormControl(''),
      lng: new FormControl(''),
      distance: new FormControl(''),
      type: new FormControl(''),
    });
  }

  ngOnInit(): void {
  }

  // getValuesFromSearchForm() {
  //   this.formGroup;
  //   this.atmService.searchAtms(this.formGroup.value);
  // }

}
