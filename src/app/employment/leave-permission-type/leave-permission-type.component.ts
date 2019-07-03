import { Component, OnInit } from '@angular/core';
import {LeavePermissionType} from '../../shared/models/employment/leave-permission-type.model';
import {LeavePermissionTypeService} from '../../shared/services/employment/leave-permission-type.service';
import {ConfirmationDialogService} from '../../confirmation-dialog/confirmation-dialog.service';

@Component({
  selector: 'app-leave-permission-type',
  templateUrl: './leave-permission-type.component.html',
  styleUrls: ['./leave-permission-type.component.scss']
})
export class LeavePermissionTypeComponent implements OnInit {

  leavePermissionTypes: LeavePermissionType[];
  title = 'Types de Congés / Permissions';
  subTitle = 'Liste des types de Congés / Permission';
  constructor(private leavePermissionTypeService: LeavePermissionTypeService,
              private confirmationDialogService: ConfirmationDialogService) { }

  ngOnInit() {
    this.getAll();
  }

  getAll() {
    this.leavePermissionTypeService.getAll().subscribe(data => {
      this.leavePermissionTypes = data;
    }, err => {
      console.log(err);
    });
  }

  openConfirmationDialog(id: Number) {
    this.confirmationDialogService.confirm(
      'Suppression', 'Souhaitez-vous supprimer le type de congé ou permission ?', 'Oui', 'Non'
    ).then((confirmed) => {
      if (confirmed) {
        this.remove(id).subscribe(() => {
          this.getAll();
        });
      }
    })
      .catch(() => console.log('User dismissed the dialog (e.g., by using ESC, clicking the cross icon, or clicking outside the dialog)'));

  }

  private remove(id: Number) {
    return this.leavePermissionTypeService.remove(id);
  }

}
