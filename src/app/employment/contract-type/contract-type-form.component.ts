import { Component, OnInit } from '@angular/core';
import {ContractType} from '../../shared/models/employment/contract-type.model';
import {ContractTypeService} from '../../shared/services/employment/contract-type.service';
import {ActivatedRoute, Router} from '@angular/router';
import {Location} from '@angular/common';

@Component({
  selector: 'app-contract-type-form',
  templateUrl: './contract-type-form.component.html',
  styleUrls: ['./contract-type-form.component.scss']
})
export class ContractTypeFormComponent implements OnInit {

  title = 'Types de Contrat';
  subTitle = 'Saisie d\'un Type de Contrat';
  public contractType: ContractType = new ContractType(null, '', null, '');

  constructor(private contractTypeService: ContractTypeService, private route: ActivatedRoute,
              private router: Router, private _location: Location) {
    if (route.snapshot.params.id) {
      console.log(route.snapshot.params.id);
      this.getOne(route.snapshot.params.id);
    }
  }

  ngOnInit() {
  }

  getOne(id) {
    this.contractTypeService.getById(id).subscribe(contractType => {
      this.contractType = contractType;
      console.log(this.contractType);
    }, error2 => {
      console.log(error2);
    });
  }

  save(contractType) {
    console.log(contractType);
    this.contractTypeService.save(contractType).subscribe(data => {
      console.log(data);
      this.router.navigateByUrl('/contract-type/list');
    }, err => {
      console.log(err);
    });
  }

  backClicked() {
    this._location.back();
  }
}
