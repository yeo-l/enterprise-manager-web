import { Component, OnInit } from '@angular/core';
import {IEmployee} from 'ng2-org-chart';

@Component({
  selector: 'app-org-chart',
  templateUrl: './organization-chart.component.html',
  styleUrls: ['./organization-chart.component.scss']
})
export class OrganizationChartComponent implements OnInit {

  topOrg: IEmployee = {
    name: 'Dr Alladé NDa Eric',
    designation: 'Directeur Exécutif',
    img: './assets/img/user.jpg',
    subordinates: [
      {
        name: 'Matthew Wikes',
        designation: 'VP',
        img: './assets/img/user.jpg',
        subordinates: [
          {
            name: 'Tina Landry',
            designation: 'Budget Analyst',
            img: './assets/img/user.jpg',
            subordinates: []
          }

        ]
      },
      {
        name: 'Patricia Lyons',
        designation: 'VP',
        img: './assets/img/user.jpg',
        subordinates: [
          {
            name: 'Dylan Wilson',
            designation: 'Web Manager',
            img: './assets/img/user.jpg',
            subordinates: []
          },
          {
            name: 'Deb Curtis',
            designation: 'Art Director',
            img: './assets/img/user.jpg',
            subordinates: []
          }
        ]
      },
      {
        name: 'Larry Phung',
        designation: 'VP',
        img: './assets/img/user.jpg',
        subordinates: []
      }
    ]
  };
  constructor() { }

  ngOnInit() {
  }

}
