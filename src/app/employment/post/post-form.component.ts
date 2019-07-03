import {Component, OnInit} from '@angular/core';
import {Post} from '../../shared/models/employment/post.model';
import {PostService} from '../../shared/services/employment/post.service';
import {ActivatedRoute, Router} from '@angular/router';
import {Location} from '@angular/common';
import {Hierarchy, IHierarchy} from '../../shared/models/employment/hierarchy.model';
import {HierarchyService} from '../../shared/services/employment/hierarchy.service';

@Component({
  selector: 'app-post-form',
  templateUrl: './post-form.component.html',
  styleUrls: ['./post.component.scss']
})
export class PostFormComponent implements OnInit {
  title = 'Gestion des Fonctions';
  subTitle = 'Saisie d\'une Fonction';
  public post: Post = new Post(null, '', '');
  public hierarchies: Hierarchy[];

  constructor(private postService: PostService, private hierarchyService: HierarchyService,
              private route: ActivatedRoute, private router: Router, private _location: Location) {
    if (route.snapshot.params.id) {
      this.getPost(route.snapshot.params.id);
    }
  }
  ngOnInit() {
    this.getAllHierarchies();
  }

  getPost(id) {
    this.postService.getById(id).subscribe(post => {
      this.post = post;
    }, error2 => {
      console.log(error2);
    });
  }

  savePost(job) {
    this.postService.savePost(job).subscribe(data => {
      this.router.navigateByUrl('/post/list');
    }, err => {
      console.log(err);
    });
  }

  backClicked() {
    this._location.back();
  }

  getAllHierarchies() {
    this.hierarchyService.getAll().subscribe(data => {
      this.hierarchies = data;
    }, err => {
      console.log(err);
    });
  }

  trackHierarchyById(index: number, item: IHierarchy) {
    return item.id;
  }
}
