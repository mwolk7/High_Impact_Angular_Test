import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {AtmService} from '../../services/atm.service';
import {map} from 'rxjs/operators';
import {Atm} from '../../model/atm';

@Component({
  selector: 'app-search-atms',
  templateUrl: './search-atms.component.html',
  styleUrls: ['./search-atms.component.css']
})
export class SearchAtmsComponent implements OnInit {
  formGroup: FormGroup;
  atmList: Atm[];

  constructor(private atmService: AtmService) {
    this.formGroup = new FormGroup({
      q: new FormControl(''),
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

  getAtms() {
    this.atmService.getAllAtms().subscribe((data: Atm[]) => {
      this.atmList = data;
      console.log(data);
    }, error => {
      console.log(error);
    });
  }

}
