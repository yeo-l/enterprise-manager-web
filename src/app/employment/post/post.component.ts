import {Component, OnInit, ViewChild} from '@angular/core';
import {Post} from '../../shared/models/employment/post.model';
import {PostService} from '../../shared/services/employment/post.service';
import {ConfirmationDialogService} from '../../confirmation-dialog/confirmation-dialog.service';
import {Router} from '@angular/router';
import {DataTableDirective} from 'angular-datatables';
import {Subject} from 'rxjs';
import {dtOptions} from '../../shared/constants/global.constant';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss']
})
export class PostComponent implements OnInit {
  @ViewChild(DataTableDirective)
  dtElement: DataTableDirective;
  dtTrigger: Subject<any> = new Subject();
  dtOptions: DataTables.Settings = dtOptions;

  title = 'Gestion des Fonctions';
  subTitle = 'Liste des Fonctions';

  post: Post;
  posts: Post[];

  constructor(private postService: PostService, private confirmationDialogService: ConfirmationDialogService) {}

  ngOnInit() {
    this.onGetAllPost();
    this.dtOptions.columnDefs = [ {
      'targets': [4], /* column index */
      'orderable': false, /* true or false */
    }];
  }

  onGetAllPost() {
    this.postService.getAll().subscribe(data => {
      this.posts = data;
      this.dtTrigger.next();
    }, err => {
      console.log(err);
    });
  }

  deletePost(id: Number) {
    return this.postService.deletePost(id);
  }

  public openConfirmationDialog(id: Number) {
    this.confirmationDialogService.confirm(
      'Suppression', 'Souhaitez-vous supprimer la fonction ?', 'Oui', 'Non')
      .then((confirmed) => {
        if (confirmed) {
          this.deletePost(id).subscribe(() => {
            this.onGetAllPost();
          }, err => {
            console.log(err);
          });
        }
      })
      .catch(() => console.log('User dismissed the dialog (e.g., by using ESC, clicking the cross icon, or clicking outside the dialog)'));

  }
}
