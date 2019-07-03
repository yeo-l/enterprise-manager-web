import {Component, OnInit, ViewChild} from '@angular/core';
import {ContractService} from '../../shared/services/employment/contract.service';
import {ContractTypeService} from '../../shared/services/employment/contract-type.service';
import {IContractType} from '../../shared/models/employment/contract-type.model';
import {Contract, IContract} from '../../shared/models/employment/contract/contract.model';
import {StaffService} from '../../shared/services/employment/staff/staff.service';
import {IStaff} from '../../shared/models/employment/staff/staff.model';
import {DataTableDirective} from 'angular-datatables';
import {dtOptions} from '../../shared/constants/global.constant';
import {Subject} from 'rxjs';

@Component({
  selector: 'app-contract',
  templateUrl: './contract.component.html',
  styleUrls: ['./contract.component.scss']
})
export class ContractComponent implements OnInit {
  @ViewChild(DataTableDirective)
  dtElement: DataTableDirective;
  dtTrigger: Subject<any> = new Subject();
  dtOptions: DataTables.Settings = dtOptions;

  filterContract: Contract = new Contract(null, null, null, null, null);

  contracts: Array<object> = [];
  constructor(private staffService: StaffService, private contractTypeService: ContractTypeService,
              private contractService: ContractService) { }

  ngOnInit() {
    this.getAll();
    this.dtOptions.columnDefs = [
      {
        'targets': [6], /* column index */
        'orderable': false, /* true or false */
      },
      {type: 'date-uk', targets: 4}
    ];
    this.filterContract.isActual = true;
  }

  getAll() {
    this.contractTypeService.getAll().subscribe((contractTypes: IContractType[]) => {
      contractTypes.forEach(contractType => {
        this.contractService.getByName(contractType.name).subscribe((iContracts: IContract[]) => {
          if (iContracts.length !== 0) {
            this.contracts.push({contractTypeName: contractType.name, contractStaffs: iContracts});
          }
        }, error2 => {
          console.log(error2);
        });
      });
    }, err => {
      console.log(err);
    });
  }

}
