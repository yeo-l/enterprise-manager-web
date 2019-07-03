import { Component, OnInit } from '@angular/core';
import {DepartureType} from '../../shared/models/employment/departure-type.model';
import {DepartureTypeService} from '../../shared/services/employment/departure-type.service';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-departure-type-detail',
  templateUrl: './departure-type-detail.component.html',
  styleUrls: ['./departure-type-detail.component.scss']
})
export class DepartureTypeDetailComponent implements OnInit {

  departureType: DepartureType;
  title = 'Type de départ';
  subTitle = 'Détail du Type de départ';

  constructor(private departureTypeService: DepartureTypeService, private route: ActivatedRoute) {
    if (route.snapshot.params.id) {
      this.getGrade(route.snapshot.params.id);
    }
  }

  ngOnInit() {
  }

  getGrade(id) {
    this.departureTypeService.getById(id).subscribe(departureType => {
      this.departureType = departureType;
    }, error2 => {
      console.log(error2);
    });
  }

}
