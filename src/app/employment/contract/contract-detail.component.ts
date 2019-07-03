import { Component, OnInit } from '@angular/core';
import {Staff} from '../../shared/models/employment/staff/staff.model';
import {Contract, IContract} from '../../shared/models/employment/contract/contract.model';
import {ContractService} from '../../shared/services/employment/contract.service';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-contract-detail',
  templateUrl: './contract-detail.component.html',
  styleUrls: ['./contract-detail.component.scss']
})
export class ContractDetailComponent implements OnInit {

  contract: Contract = new Contract();
  staff: Staff = new Staff();
  currentContract: Contract;
  staffContracts: Contract[] = [];

  constructor(private contractService: ContractService, private route: ActivatedRoute) {
    if (route.snapshot.params.id) {
      this.getContract(route.snapshot.params.id);
    }
  }

  ngOnInit() {
  }

  getContract(id: number) {
    this.contractService.getById(id).subscribe((contract: IContract) => {
      this.staff = contract.staff;
      this.contract = contract;
      this.getStaffActualContract(this.staff.id);
      this.getStaffAllContract(this.staff.id);
    }, error2 => {
      console.log(error2);
    });
  }

  getStaffActualContract(id) {
    this.contractService.getByStaffActual(id).subscribe((contract: IContract) => {
      this.currentContract = contract;
    }, error2 => {
      console.log(error2);
    });
  }

  getStaffAllContract(staffId: number) {
    this.contractService.getByStaff(staffId).subscribe((contracts: IContract[]) => {
      contracts.forEach(contract => {
        if (contract.isActual === false) {
          this.staffContracts.push(contract);
        }
      });
    }, err => {
      console.log(err);
    });
  }

}
