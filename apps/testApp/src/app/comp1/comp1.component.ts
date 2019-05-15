import { Component, OnInit } from '@angular/core';

export interface PeriodicElement {
  companyName: string;
  companyID: string;

}

const ELEMENT_DATA: PeriodicElement[] = [
  {companyID:'SVIC', companyName: 'Software Ventures Intl Corp'},
  {companyID: 'SVI-ISC', companyName: 'SVI Information Services Corporation'},
  {companyID: 'CDCI', companyName: 'Clarl Data Center Incorporated'},
  {companyID: 'SVI-SSC', companyName: 'SVI Software Services Corporation'},
];










@Component({
  selector: 'app-comp1',
  templateUrl: './comp1.component.html',
  styleUrls: ['./comp1.component.css']
})
export class Comp1Component implements OnInit {
  displayedColumns: string[] = ['companyID', 'companyName'];
  dataSource = ELEMENT_DATA;
  constructor() { }

  ngOnInit() {
  }

}
