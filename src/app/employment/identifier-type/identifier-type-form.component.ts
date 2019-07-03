import { Component, OnInit } from '@angular/core';
import {IdentifierTypeService} from '../../shared/services/employment/identifier-type.service';
import {ActivatedRoute, Router} from '@angular/router';
import {Location} from '@angular/common';
import {IdentifierType} from '../../shared/models/employment/identification-type.model';

@Component({
  selector: 'app-identification-type-form',
  templateUrl: './identifier-type-form.component.html',
  styleUrls: ['./identifier-type-form.component.scss']
})
export class IdentifierTypeFormComponent implements OnInit {


  identifierType: IdentifierType = new IdentifierType(null, '', '', '');
  title = 'Gestion des Types de numéro d\'identification';
  subTitle = 'Liste des Types de numéro d\'identification';
  constructor(private identifierTypeService: IdentifierTypeService, private route: ActivatedRoute, private router: Router,
              private _location: Location) {
    if (route.snapshot.params.id) {
      this.getOne(route.snapshot.params.id);
    }
  }

  ngOnInit() {
  }

  private getOne(id: any) {
    this.identifierTypeService.getById(id).subscribe(data => {
      this.identifierType = data;
    }, err => {
      console.log(err);
    });
  }

  save(identifierType) {
    this.identifierTypeService.save(identifierType).subscribe(data => {
      this.router.navigateByUrl('/identifier-type/list');
    }, err => {
      console.log(err);
    });
  }

  backClicked() {
    this._location.back();
  }
}
