import { Component, OnInit } from '@angular/core';
import {Hierarchy} from '../../shared/models/employment/hierarchy.model';
import {HierarchyService} from '../../shared/services/employment/hierarchy.service';
import {ConfirmationDialogService} from '../../confirmation-dialog/confirmation-dialog.service';

@Component({
  selector: 'app-hierarchy',
  templateUrl: './hierarchy.component.html',
  styleUrls: ['./hierarchy.component.scss']
})
export class HierarchyComponent implements OnInit {

  title = 'Gestion des Hierarchies';
  subTitle = 'Liste des Hierarchies';

  hierarchies: Hierarchy[];

  constructor(private hierarchyService: HierarchyService,
              private confirmationDialogService: ConfirmationDialogService) { }

  ngOnInit() {
    this.onGetAllHierarchy();
  }

  onGetAllHierarchy() {
    this.hierarchyService.getAll().subscribe(data => {
      console.log(data);
      this.hierarchies = data;
    }, error2 => {
      console.log(error2);
    });
  }

  deleteHierarchy(id: Number) {
    return this.hierarchyService.deleteHierarchy(id);
  }

  public openConfirmationDialog(id: Number) {
    this.confirmationDialogService.confirm(
      'Suppression', 'Souhaitez-vous supprimer le niveau ?', 'Oui', 'Non')
      .then((confirmed) => {
        if (confirmed) {
          this.deleteHierarchy(id).subscribe(() => {
            this.onGetAllHierarchy();
          });
        }
      })
      .catch(() => console.log('User dismissed the dialog (e.g., by using ESC, clicking the cross icon, or clicking outside the dialog)'));

  }

}
