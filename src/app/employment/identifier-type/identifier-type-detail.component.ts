import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {IdentifierTypeService} from '../../shared/services/employment/identifier-type.service';
import {IdentifierType} from '../../shared/models/employment/identification-type.model';

@Component({
  selector: 'app-identification-type-detail',
  templateUrl: './identifier-type-detail.component.html',
  styleUrls: ['./identifier-type-detail.component.scss']
})
export class IdentifierTypeDetailComponent implements OnInit {

  identifierType: IdentifierType;
  title = 'Gestion des Types de numéro d\'identification';
  subTitle = 'Liste des Types de numéro d\'identification';

  constructor(private identifierTypeService: IdentifierTypeService, private route: ActivatedRoute) {
    if (route.snapshot.params.id) {
      this.getOne(route.snapshot.params.id);
    }
  }

  ngOnInit() {
  }

  private getOne(id: any) {
    this.identifierTypeService.getById(id).subscribe(identifierType => {
      this.identifierType = identifierType;
    }, error2 => {
      console.log(error2);
    });
  }
}
