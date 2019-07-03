import {Component, OnInit} from '@angular/core';
import {Post} from '../../shared/models/employment/post.model';
import {PostService} from '../../shared/services/employment/post.service';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-post-detail',
  templateUrl: './post-detail.component.html',
  styleUrls: ['./post.component.scss']
})
export class PostDetailComponent implements OnInit {
  post: Post;
  title = 'Gestion des Fonctions';
  subTitle = 'Détail de la fonction';
  constructor(private postService: PostService, private route: ActivatedRoute) {
    if (route.snapshot.params.id) {
      this.getPost(route.snapshot.params.id);
    }
  }

  ngOnInit() {
  }

  getPost(id) {
    this.postService.getById(id).subscribe(post => {
      this.post = post;
    }, error2 => {
      console.log(error2);
    });
  }
}
