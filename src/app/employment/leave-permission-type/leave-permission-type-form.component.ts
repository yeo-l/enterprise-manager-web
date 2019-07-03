import { Component, OnInit } from '@angular/core';
import {LeavePermissionType} from '../../shared/models/employment/leave-permission-type.model';
import {LeavePermissionTypeService} from '../../shared/services/employment/leave-permission-type.service';
import {ActivatedRoute, Router} from '@angular/router';
import {Location} from '@angular/common';

@Component({
  selector: 'app-leave-permission-type-form',
  templateUrl: './leave-permission-type-form.component.html',
  styleUrls: ['./leave-permission-type-form.component.scss']
})
export class LeavePermissionTypeFormComponent implements OnInit {

  title = 'Types de Congés/Permissions';
  subTitle = 'Saisie d\'un Type de Congés/Permission';
  public leavePermissionType: LeavePermissionType = new LeavePermissionType(null, '', null, '');

  constructor(private leavePermissionTypeService: LeavePermissionTypeService, private route: ActivatedRoute,
              private router: Router, private _location: Location) {
    if (route.snapshot.params.id) {
      this.getOne(route.snapshot.params.id);
    }
  }

  ngOnInit() {
  }

  getOne(id) {
    this.leavePermissionTypeService.getById(id).subscribe(leavePermissionType => {
      this.leavePermissionType = leavePermissionType;
      console.log(this.leavePermissionType);
    }, error2 => {
      console.log(error2);
    });
  }

  save(contractType) {
    console.log(contractType);
    this.leavePermissionTypeService.save(contractType).subscribe(data => {
      this.router.navigateByUrl('/leave-permission-type/list');
    }, err => {
      console.log(err);
    });
  }

  backClicked() {
    this._location.back();
  }

}
