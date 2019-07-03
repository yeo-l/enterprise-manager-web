import { Component, OnInit } from '@angular/core';
import {Level} from '../../shared/models/employment/level.model';
import {LevelService} from '../../shared/services/employment/level.service';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-level-detail',
  templateUrl: './level-detail.component.html',
  styleUrls: ['./level-detail.component.scss']
})
export class LevelDetailComponent implements OnInit {

  level: Level;
  childrenLevel: Level[];
  title = 'Gestion des Niveaux';
  subTitle = 'Détail du Niveau';
  constructor(private levelService: LevelService, private route: ActivatedRoute) {
    if (route.snapshot.params.id) {
      console.log(route.snapshot.params.id);
      this.getLevel(route.snapshot.params.id);
    }
  }

  ngOnInit() {
  }

  getLevel(id) {
    this.levelService.getById(id).subscribe(data => {
      this.level = data;
      if (this.level) {
        this.getChildrenLevel(this.level.name);
      }
    }, error2 => {
      console.log(error2);
    });
  }

  getChildrenLevel(name) {
    this.levelService.getChildren(name).subscribe(data => {
      this.childrenLevel = data;
    }, err => {
      console.log(err);
    });
  }

}
