import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {SERVER_API_URL} from '../../constants/global.constant';
import {IPost} from '../../models/employment/post.model';

@Injectable({ providedIn: 'root' })
export class PostService {
  resourceUrl = SERVER_API_URL + '/posts';

  constructor(private http: HttpClient) {}

  getAll() {
    return this.http.get<IPost[]>(this.resourceUrl);
  }
  getByName(name) {
    return this.http.get<IPost>(this.resourceUrl + '/' + name);
  }
  getById(id) {
    return this.http.get<IPost>(this.resourceUrl + '/' + id);
  }

  deletePost(id) {
    return this.http.delete<Boolean>(this.resourceUrl + '/' + id);
  }

  savePost(post: IPost) {
    return this.http.post<IPost>(this.resourceUrl, post);
  }
}
