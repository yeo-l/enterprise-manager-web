import {JobService} from '../../shared/services/employment/job.service';
import {Component, OnInit} from '@angular/core';
import {Job} from '../../shared/models/employment/job.model';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-job-detail',
  templateUrl: './job-detail.component.html',
  styleUrls: ['./job.component.scss']
})
export class JobDetailComponent implements OnInit {

  job: Job;
  title = 'Gestion des emplois';
  subTitle = 'Détail de l\'emploi';
  constructor(private jobService: JobService, private route: ActivatedRoute) {
    if (route.snapshot.params.id) {
      console.log(route.snapshot.params.id);
      this.getJob(route.snapshot.params.id);
    }
  }

  ngOnInit() {
  }

  getJob(id) {
    this.jobService.getById(id).subscribe(job => {
      this.job = job;
      console.log(this.job);
    }, error2 => {
      console.log(error2);
    });
  }
}
