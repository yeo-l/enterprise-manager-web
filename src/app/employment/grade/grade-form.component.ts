import { Component, OnInit } from '@angular/core';
import {GradeService} from '../../shared/services/employment/grade.service';
import {Grade} from '../../shared/models/employment/grade.model';
import {ActivatedRoute, Router} from '@angular/router';
import {Location} from '@angular/common';

@Component({
  selector: 'app-grade-form',
  templateUrl: './grade-form.component.html',
  styleUrls: ['./grade-form.component.scss']
})
export class GradeFormComponent implements OnInit {

  title = 'Gestion des Grades';
  subTitle = 'Saisie d\'un Grade';
  public grade: Grade = new Grade(null, '', '');

  constructor(private gradeService: GradeService, private route: ActivatedRoute, private router: Router, private _location: Location) {
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

  save(grade) {
    this.gradeService.save(grade).subscribe(data => {
      this.router.navigateByUrl('/grade/list');
    }, err => {
      console.log(err);
    });
  }

  backClicked() {
    this._location.back();
  }

}
