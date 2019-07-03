import { Component, OnInit } from '@angular/core';
import {ContractType} from '../../shared/models/employment/contract-type.model';
import {ContractTypeService} from '../../shared/services/employment/contract-type.service';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-contract-type-detail',
  templateUrl: './contract-type-detail.component.html',
  styleUrls: ['./contract-type-detail.component.scss']
})
export class ContractTypeDetailComponent implements OnInit {

  contractType: ContractType;
  title = 'Type de Contrat';
  subTitle = 'Détail du Type de Contrat';

  constructor(private contractTypeService: ContractTypeService, private route: ActivatedRoute) {
    if (route.snapshot.params.id) {
      this.getContractType(route.snapshot.params.id);
    }
  }

  ngOnInit() {
  }

  getContractType(id) {
    this.contractTypeService.getById(id).subscribe(contractType => {
      this.contractType = contractType;
    }, error2 => {
      console.log(error2);
    });
  }

}
