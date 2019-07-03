import { Component, OnInit } from '@angular/core';
import {DepartureType} from '../../shared/models/employment/departure-type.model';
import {DepartureTypeService} from '../../shared/services/employment/departure-type.service';
import {ConfirmationDialogService} from '../../confirmation-dialog/confirmation-dialog.service';

@Component({
  selector: 'app-departure-type',
  templateUrl: './departure-type.component.html',
  styleUrls: ['./departure-type.component.scss']
})
export class DepartureTypeComponent implements OnInit {

  departureTypes: DepartureType[];
  title = 'Types de départ';
  subTitle = 'Liste des types de départ';

  constructor(private departureTypeService: DepartureTypeService,
              private confirmationDialogService: ConfirmationDialogService) { }

  ngOnInit() {
    this.getAllDepartureType();
  }

  getAllDepartureType() {
    this.departureTypeService.getAll().subscribe(data => {
      this.departureTypes = data;
    }, error2 => {
      console.log(error2);
    });
  }

  deleteDepartureType(id: Number) {
    return this.departureTypeService.remove(id);
  }

  public openConfirmationDialog(id: Number) {
    this.confirmationDialogService.confirm(
      'Suppression', 'Souhaitez-vous supprimer le type de départ ?', 'Oui', 'Non')
      .then((confirmed) => {
        if (confirmed) {
          this.deleteDepartureType(id).subscribe(() => {
            this.getAllDepartureType();
          });
        }
      })
      .catch(() => console.log('User dismissed the dialog (e.g., by using ESC, clicking the cross icon, or clicking outside the dialog)'));

  }

}
