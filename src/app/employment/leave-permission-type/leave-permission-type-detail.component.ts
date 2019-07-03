import { Component, OnInit } from '@angular/core';
import {LeavePermissionType} from '../../shared/models/employment/leave-permission-type.model';
import {LeavePermissionTypeService} from '../../shared/services/employment/leave-permission-type.service';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-leave-permission-type-detail',
  templateUrl: './leave-permission-type-detail.component.html',
  styleUrls: ['./leave-permission-type-detail.component.scss']
})
export class LeavePermissionTypeDetailComponent implements OnInit {

  leavePermissionType: LeavePermissionType;
  title = 'Type de Congés / Permission';
  subTitle = 'Détail du type de Congé / Permission';

  constructor(private leavePermissionTypeService: LeavePermissionTypeService, private route: ActivatedRoute) {
    if (route.snapshot.params.id) {
      this.getLeavePermissionType(route.snapshot.params.id);
    }
  }

  ngOnInit() {
  }

  getLeavePermissionType(id) {
    this.leavePermissionTypeService.getById(id).subscribe(leavePermissionType => {
      this.leavePermissionType = leavePermissionType;
      console.log(this.leavePermissionType);
    }, error2 => {
      console.log(error2);
    });
  }

}
