import {Component, OnInit, ViewChild} from '@angular/core';
import {IStaff, Staff} from '../../shared/models/employment/staff/staff.model';
import {StaffIdentifier} from '../../shared/models/employment/staff/staff-identifier.model';
import {StaffPost} from '../../shared/models/employment/staff/staff-post.model';
import {StaffService} from '../../shared/services/employment/staff/staff.service';
import {dtOptions} from '../../shared/constants/global.constant';
import {DataTableDirective} from 'angular-datatables';
import {Subject} from 'rxjs';

@Component({
  selector: 'app-staff',
  templateUrl: './staff.component.html',
  styleUrls: ['./staff.component.scss']
})
export class StaffComponent implements OnInit {
  @ViewChild(DataTableDirective)
  dtElement: DataTableDirective;
  dtOptions: DataTables.Settings = dtOptions;
  dtTrigger: Subject<any> = new Subject();

  staffs: Staff[];
  staffIdentifiers: StaffIdentifier[];
  staffPosts: StaffPost[];
  filterStaffPost: StaffPost = new StaffPost();

  constructor(private staffService: StaffService) {}

  ngOnInit() {
    this.getAll();
    this.dtOptions.columnDefs = [
      {
        'targets': [7], /* column index */
        'orderable': false, /* true or false */
      },
      {type: 'date-uk', targets: 4}
    ];
    this.filterStaffPost.actual = true;
  }

  private getAll() {
      this.staffService.getAll().subscribe((iStaffs: IStaff[]) => {
        this.staffs = iStaffs;
        this.dtTrigger.next();
      }, err => {
        console.log(err);
      });
  }
}
