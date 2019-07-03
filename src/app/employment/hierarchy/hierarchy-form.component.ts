import { Component, OnInit } from '@angular/core';
import {Hierarchy, IHierarchy} from '../../shared/models/employment/hierarchy.model';
import {ILevel, Level} from '../../shared/models/employment/level.model';
import {HierarchyService} from '../../shared/services/employment/hierarchy.service';
import {ActivatedRoute, Router} from '@angular/router';
import {Location} from '@angular/common';
import {LevelService} from '../../shared/services/employment/level.service';

@Component({
  selector: 'app-hierarchy-form',
  templateUrl: './hierarchy-form.component.html',
  styleUrls: ['./hierarchy-form.component.scss']
})
export class HierarchyFormComponent implements OnInit {

  title = 'Gestion des Hierarchies';
  subTitle = 'Saisie d\'une Hierarchies';

  public hierarchy: Hierarchy = new Hierarchy(null, '', '', new Level(), new Hierarchy());
  public hierarchies: Hierarchy[];
  public levels: Level[];

  constructor(private hierarchyService: HierarchyService, private levelService: LevelService, private route: ActivatedRoute,
              private router: Router, private _location: Location) {
    if (route.snapshot.params.id) {
      console.log(route.snapshot.params.id);
      this.getHierarchy(route.snapshot.params.id);
      this.getAllLevels();
    } else {
      this.getAllHierarchy();
      this.getAllLevels();
    }
  }

  ngOnInit() {
  }

  private getAllHierarchy() {
    this.hierarchyService.getAll().subscribe(data => {
      this.hierarchies = data;
    }, err => {
      console.log(err);
    });
  }

  private getAllLevels() {
    this.levelService.getAll().subscribe(data => {
      this.levels = data;
    }, err => {
      console.log(err);
    });
  }

  private getHierarchy(id: any) {
    this.hierarchyService.getById(id).subscribe(data => {
      this.hierarchy = data;
      if (this.hierarchy) {
        this.getOtherHierarchies(this.hierarchy.name);
      }
    }, err => {
      console.log(err);
    });
  }

  private getOtherHierarchies(name) {
    this.hierarchyService.getOther(name).subscribe(data => {
      this.hierarchies = data;
    }, err => {
      console.log(err);
    });
  }

  save(hierarchy) {
    console.log(hierarchy);
    this.hierarchyService.saveHierarchy(hierarchy).subscribe(data => {
      this.router.navigateByUrl('/hierarchy/list');
    }, err => {
      console.log(err);
    });
  }

  backClicked() {
    this._location.back();
  }

  trackHierarchyById(index: number, item: IHierarchy) {
    return item.id;
  }

  trackLevelById(index: number, item: ILevel) {
    return item.id;
  }
}
