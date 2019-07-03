import {Component, Input, OnInit, Output, ViewChild} from '@angular/core';
import {JobService} from '../../shared/services/employment/job.service';
import {Job} from '../../shared/models/employment/job.model';
import {ConfirmationDialogService} from '../../confirmation-dialog/confirmation-dialog.service';
import {dtOptions} from '../../shared/constants/global.constant';

@Component({
  selector: 'app-job',
  templateUrl: './job.component.html',
  styleUrls: ['./job.component.scss']
})
export class JobComponent implements OnInit {

  jobs: Job[];
  title = 'Emplois';
  subTitle = 'Liste des Emplois';

  @ViewChild('dataTable') table;
  dataTable: any;
  dtOptions: DataTables.Settings = dtOptions;

  constructor(private jobService: JobService,
              private confirmationDialogService: ConfirmationDialogService) {}

  ngOnInit() {
    this.onGetAllJob();
    this.dtOptions.columnDefs = [ {
      'targets': [2], /* column index */
      'orderable': false, /* true or false */
    }];
  }
  onGetAllJob() {
    this.jobService.getAll().subscribe(data => {
      this.jobs = data;
    }, error2 => {
      console.log(error2);
    });
  }

  deleteJob(id: Number) {
    return this.jobService.deleteJob(id);
  }

  public openConfirmationDialog(id: Number) {
    this.confirmationDialogService.confirm(
      'Suppression', 'Souhaitez-vous supprimer l\'emploi ?', 'Oui', 'Non')
      .then((confirmed) => {
      if (confirmed) {
        this.deleteJob(id).subscribe(() => {
          this.onGetAllJob();
        });
      }
    })
      .catch(() => console.log('User dismissed the dialog (e.g., by using ESC, clicking the cross icon, or clicking outside the dialog)'));

  }
}
