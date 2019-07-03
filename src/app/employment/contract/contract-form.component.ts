import { Component, OnInit } from '@angular/core';
import {IStaff, Staff} from '../../shared/models/employment/staff/staff.model';
import {Contract, IContract} from '../../shared/models/employment/contract/contract.model';
import {ContractType, IContractType} from '../../shared/models/employment/contract-type.model';
import {StaffService} from '../../shared/services/employment/staff/staff.service';
import {ContractTypeService} from '../../shared/services/employment/contract-type.service';
import {ContractService} from '../../shared/services/employment/contract.service';
import {dtOptions, EURO_DATE_FORMAT} from '../../shared/constants/global.constant';
import {StaffPost} from '../../shared/models/employment/staff/staff-post.model';
import {formatDate} from '@angular/common';

@Component({
  selector: 'app-contract-form',
  templateUrl: './contract-form.component.html',
  styleUrls: ['./contract-form.component.scss']
})
export class ContractFormComponent implements OnInit {
  staffs: Staff[];
  currentStaff: Staff = new Staff(null, null, null, null, null, null, null);
  currentStaffContracts: Contract[] = [];
  contract: Contract = new Contract(null, new ContractType(), null, null, null, null);
  contractTypes: ContractType[];
  dtOptions: DataTables.Settings = dtOptions;
  filterStaffPost: StaffPost = new StaffPost();

  constructor(private staffService: StaffService, private contractTypeService: ContractTypeService,
              private contractService: ContractService) { }

  ngOnInit() {
    this.getStaffs();
    this.getContractTypes();
    // this.dtOptions.columnDefs = [
    //   {
    //     'targets': [1], /* column index */
    //     'orderable': false, /* true or false */
    //   }
    // ];
  }

  getStaffs() {
    this.staffService.getAll().subscribe((staffs: IStaff[]) => {
      this.staffs = staffs;
    }, err => {
      console.log(err);
    });
  }

  getContractTypes() {
    this.contractTypeService.getAll().subscribe((contractTypes: IContractType[]) => {
      this.contractTypes = contractTypes;
    }, err => {
      console.log(err);
    });
  }

  getCurrentStaff(id) {
    this.staffService.getById(id).subscribe((staff: IStaff) => {
      this.currentStaff = staff;
      this.contract.staff = this.currentStaff;
      this.filterStaffPost.actual = true;
      this.getStaffAllContract(staff.id);
    }, err => {
      console.log(err);
    });
  }

  getStaffContract(id) {
    this.contractService.getById(id).subscribe((contract: IContract) => {
      this.contract = contract;
      // this.contract.endDate = formatDate(contract.endDate, EURO_DATE_FORMAT, 'fr');
      // this.contract.startDate = formatDate(contract.startDate, EURO_DATE_FORMAT, 'fr');
      console.log(this.contract);
    }, error2 => {
      console.log(error2);
    });
  }

  getStaffAllContract(staffId: number) {
    this.contractService.getByStaff(staffId).subscribe((contracts: IContract[]) => {
      this.currentStaffContracts = contracts;
    }, err => {
      console.log(err);
    });
  }

  saveContract(value) {
    console.log(this.contract);
    this.contractService.save(this.contract).subscribe((contract: IContract) => {
      this.endOtherContracts(contract.staff.id, contract.id);
      this.getCurrentStaff(contract.staff.id);
    }, err => {
      console.log(err);
    });
  }

  endOtherContracts(staffId, contractId) {
    this.contractService.endOtherContract(staffId, contractId).subscribe(() => {}, err => { console.log(err); });
  }

  formatDateDDMMYYYY(date: Date) {
    return formatDate(date, EURO_DATE_FORMAT, 'fr');
  }
}
