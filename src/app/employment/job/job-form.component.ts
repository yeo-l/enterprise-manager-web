import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {JobService} from '../../shared/services/employment/job.service';
import {Job} from '../../shared/models/employment/job.model';
import {Location} from '@angular/common';

@Component({
  selector: 'app-job-form',
  templateUrl: './job-form.component.html',
  styleUrls: ['./job.component.scss']
})
export class JobFormComponent implements OnInit {
  title = 'Gestion des emplois';
  subTitle = 'Saisie d\'un emploi';
  public job: Job = new Job(null, '', '');
  alert = {
    type: null,
    message: null
  };

  constructor(private jobService: JobService, private route: ActivatedRoute, private router: Router, private _location: Location) {
    if (route.snapshot.params.id) {
      console.log(route.snapshot.params.id);
      this.getOne(route.snapshot.params.id);
    }
  }

  ngOnInit() {
  }

  getOne(id) {
    this.jobService.getById(id).subscribe(job => {
      this.job = job;
      console.log(this.job);
    }, error2 => {
      console.log(error2);
    });
  }

  save(job) {
    this.jobService.save(job).subscribe(data => {
      this.router.navigateByUrl('/job/list');
      this.alert.type = 'success';
      this.alert.message = 'L\'emploi : ' + job.name + ' a été sauvegardée avec succès';
    }, err => {
      console.log(err);
    });
  }

  backClicked() {
    this._location.back();
  }
}
