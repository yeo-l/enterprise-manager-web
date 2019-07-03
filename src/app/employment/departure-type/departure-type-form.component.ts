import { Component, OnInit } from '@angular/core';
import {DepartureType} from '../../shared/models/employment/departure-type.model';
import {DepartureTypeService} from '../../shared/services/employment/departure-type.service';
import {ActivatedRoute, Router} from '@angular/router';
import {Location} from '@angular/common';

@Component({
  selector: 'app-departure-type-form',
  templateUrl: './departure-type-form.component.html',
  styleUrls: ['./departure-type-form.component.scss']
})
export class DepartureTypeFormComponent implements OnInit {

  title = 'Types de départ';
  subTitle = 'Saisie d\'un Type de départ';
  public departureType: DepartureType = new DepartureType(null, '', '');

  constructor(private departureTypeService: DepartureTypeService, private route: ActivatedRoute, private router: Router,
              private _location: Location) {
    if (route.snapshot.params.id) {
      console.log(route.snapshot.params.id);
      this.getDepartureType(route.snapshot.params.id);
    }
  }

  ngOnInit() {
  }

  getDepartureType(id) {
    this.departureTypeService.getById(id).subscribe(departureType => {
      this.departureType = departureType;
    }, error2 => {
      console.log(error2);
    });
  }

  save(departureType) {
    this.departureTypeService.save(departureType).subscribe(data => {
      this.router.navigateByUrl('/departure-type/list');
    }, err => {
      console.log(err);
    });
  }

  backClicked() {
    this._location.back();
  }


}
