import { Component, OnInit } from '@angular/core';
import {Grade} from '../../shared/models/employment/grade.model';
import {GradeService} from '../../shared/services/employment/grade.service';
import {ConfirmationDialogService} from '../../confirmation-dialog/confirmation-dialog.service';

@Component({
  selector: 'app-grade',
  templateUrl: './grade.component.html',
  styleUrls: ['./grade.component.scss']
})
export class GradeComponent implements OnInit {

  grades: Grade[];
  title = 'Gestion des grades';
  subTitle = 'Liste des grades';

  constructor(private gradeService: GradeService,
              private confirmationDialogService: ConfirmationDialogService) { }

  ngOnInit() {
    this.onGetAllGrade();
  }

  onGetAllGrade() {
    this.gradeService.getAll().subscribe(data => {
      this.grades = data;
    }, error2 => {
      console.log(error2);
    });
  }

  deleteGrade(id: Number) {
    return this.gradeService.deleteGrade(id);
  }

  public openConfirmationDialog(id: Number) {
    this.confirmationDialogService.confirm(
      'Suppression', 'Souhaitez-vous supprimer le grade ?', 'Oui', 'Non')
      .then((confirmed) => {
        if (confirmed) {
          this.deleteGrade(id).subscribe(() => {
            this.onGetAllGrade();
          });
        }
      })
      .catch(() => console.log('User dismissed the dialog (e.g., by using ESC, clicking the cross icon, or clicking outside the dialog)'));

  }
}
