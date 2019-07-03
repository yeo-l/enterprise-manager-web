import { Component, OnInit } from '@angular/core';
import { IdentifierType } from '../../shared/models/employment/identification-type.model';
import {IdentifierTypeService} from '../../shared/services/employment/identifier-type.service';
import {ConfirmationDialogService} from '../../confirmation-dialog/confirmation-dialog.service';

@Component({
  selector: 'app-identification-type',
  templateUrl: './identifier-type.component.html',
  styleUrls: ['./identifier-type.component.scss']
})
export class IdentifierTypeComponent implements OnInit {

  identifierTypes: IdentifierType[];
  title = 'Gestion des Types de numéro d\'identification';
  subTitle = 'Liste des Types de numéro d\'identification';

  constructor(private identifierTypeService: IdentifierTypeService,
              private confirmationDialogService: ConfirmationDialogService) {
  }

  ngOnInit() {
    this.getAll();
  }

  getAll() {
    this.identifierTypeService.getAll().subscribe(data => {
      this.identifierTypes = data;
    }, err => {
      console.log(err);
    });
  }

  public openConfirmationDialog(id: Number) {
    this.confirmationDialogService.confirm(
      'Suppression', 'Souhaitez-vous supprimer l\'emploi ?', 'Oui', 'Non')
      .then((confirmed) => {
        if (confirmed) {
          this.deleteIdentifierType(id).subscribe(() => {
            this.getAll();
          });
        }
      })
      .catch(() => console.log('User dismissed the dialog (e.g., by using ESC, clicking the cross icon, or clicking outside the dialog)'));

  }

  private deleteIdentifierType(id: Number) {
    return this.identifierTypeService.deleteIdentifierType(id);
  }

}
