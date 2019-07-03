import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {GradeService} from '../../shared/services/employment/grade.service';
import {Grade} from '../../shared/models/employment/grade.model';

@Component({
  selector: 'app-grade-detail',
  templateUrl: './grade-detail.component.html',
  styleUrls: ['./grade-detail.component.scss']
})
export class GradeDetailComponent implements OnInit {

  grade: Grade;
  title = 'Gestion des Grades';
  subTitle = 'Détail du Grade';

  constructor(private gradeService: GradeService, private route: ActivatedRoute) {
    if (route.snapshot.params.id) {
      console.log(route.snapshot.params.id);
      this.getGrade(route.snapshot.params.id);
    }
  }

  ngOnInit() {
  }

  getGrade(id) {
    this.gradeService.getById(id).subscribe(grade => {
      this.grade = grade;
      console.log(this.grade);
    }, error2 => {
      console.log(error2);
    });
  }

}
