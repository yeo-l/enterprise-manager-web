import { Component, OnInit } from '@angular/core';
import {Level} from '../../shared/models/employment/level.model';
import {LevelService} from '../../shared/services/employment/level.service';
import {ConfirmationDialogService} from '../../confirmation-dialog/confirmation-dialog.service';

@Component({
  selector: 'app-level',
  templateUrl: './level.component.html',
  styleUrls: ['./level.component.scss']
})
export class LevelComponent implements OnInit {

  levels: Level[];
  // otherLevels: Level[];
  title = 'Gestion des Niveaux';
  subTitle = 'Liste des Niveaux';
  constructor(private levelService: LevelService,
              private confirmationDialogService: ConfirmationDialogService) {}

  ngOnInit() {
    this.onGetAllLevel();
  }
  onGetAllLevel() {
    this.levelService.getAll().subscribe(data => {
      console.log(data);
      this.levels = data;
    }, error2 => {
      console.log(error2);
    });
  }

  deleteLevel(id: Number) {
    return this.levelService.deleteLevel(id);
  }

  public openConfirmationDialog(id: Number) {
    this.confirmationDialogService.confirm(
      'Suppression', 'Souhaitez-vous supprimer le niveau ?', 'Oui', 'Non')
      .then((confirmed) => {
        if (confirmed) {
          this.deleteLevel(id).subscribe(() => {
            this.onGetAllLevel();
          });
        }
      })
      .catch(() => console.log('User dismissed the dialog (e.g., by using ESC, clicking the cross icon, or clicking outside the dialog)'));

  }

}
