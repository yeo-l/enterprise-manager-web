import { Component, OnInit } from '@angular/core';
import {ContractType} from '../../shared/models/employment/contract-type.model';
import {ContractTypeService} from '../../shared/services/employment/contract-type.service';
import {ConfirmationDialogService} from '../../confirmation-dialog/confirmation-dialog.service';

@Component({
  selector: 'app-contract-type',
  templateUrl: './contract-type.component.html',
  styleUrls: ['./contract-type.component.scss']
})
export class ContractTypeComponent implements OnInit {

  contractTypes: ContractType[];
  title = 'Types de contrat';
  subTitle = 'Liste des types de contrat';
  constructor(private contractTypeService: ContractTypeService,
              private confirmationDialogService: ConfirmationDialogService) { }

  ngOnInit() {
    this.getAll();
  }

  getAll() {
    this.contractTypeService.getAll().subscribe(data => {
      this.contractTypes = data;
    }, err => {
      console.log(err);
    });
  }

  openConfirmationDialog(id: Number) {
    this.confirmationDialogService.confirm(
      'Suppression', 'Souhaitez-vous supprimer le grade ?', 'Oui', 'Non'
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
    return this.contractTypeService.remove(id);
  }
}
