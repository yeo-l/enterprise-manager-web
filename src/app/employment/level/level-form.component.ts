import { Component, OnInit } from '@angular/core';
import {Level, ILevel} from '../../shared/models/employment/level.model';
import {LevelService} from '../../shared/services/employment/level.service';
import {ActivatedRoute, Router} from '@angular/router';
import {Location} from '@angular/common';

@Component({
  selector: 'app-level-form',
  templateUrl: './level-form.component.html',
  styleUrls: ['./level-form.component.scss']
})
export class LevelFormComponent implements OnInit {
  title = 'Gestion des Niveaux';
  subTitle = 'Saisie d\'un Niveau';
  public level: Level = new Level(null, '', '', new Level());
  public levels: Level[];

  constructor(private levelService: LevelService, private route: ActivatedRoute, private router: Router, private _location: Location) {
    if (route.snapshot.params.id) {
      console.log(route.snapshot.params.id);
      this.getLevel(route.snapshot.params.id);
    } else {
      this.getAllLevel();
    }
  }

  ngOnInit() {
  }

  getLevel(id) {
    this.levelService.getById(id).subscribe(data => {
      this.level = data;
      if (this.level) {
        this.getOtherLevel(this.level.name);
      }
    }, err => {
      console.log(err);
    });
  }

  getAllLevel() {
    this.levelService.getAll().subscribe(data => {
      this.levels = data;
    }, err => {
      console.log(err);
    });
  }

  getOtherLevel(name) {
    this.levelService.getOther(name).subscribe(data => {
      this.levels = data;
    }, err => {
      console.log(err);
    });
  }

  saveLevel(level) {
    this.levelService.saveLevel(level).subscribe(data => {
      this.router.navigateByUrl('/level/list');
    }, err => {
      console.log(err);
    });
  }

  backClicked() {
    this._location.back();
  }

  trackLevelById(index: number, item: ILevel) {
    return item.id;
  }

}
