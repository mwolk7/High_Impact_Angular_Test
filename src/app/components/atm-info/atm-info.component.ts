import {Component, Input, OnInit} from '@angular/core';
import {Atm} from '../../model/atm';

@Component({
  selector: 'app-atm-info',
  templateUrl: './atm-info.component.html',
  styleUrls: ['./atm-info.component.css']
})
export class AtmInfoComponent implements OnInit {

  @Input() atm: Atm;

  constructor() {
  }

  ngOnInit(): void {
  }

}
