import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {SERVER_API_URL} from '../../constants/global.constant';
import {ILevel} from '../../models/employment/level.model';

@Injectable({ providedIn: 'root' })
export class LevelService {
  resourceUrl = SERVER_API_URL + '/levels';

  constructor(private http: HttpClient) {}

  getAll() {
    return this.http.get<ILevel[]>(this.resourceUrl);
  }
  getByName(name) {
    return this.http.get<ILevel>(this.resourceUrl + '/' + name);
  }
  getOther(name) {
    return this.http.get<ILevel[]>(this.resourceUrl + '/other/' + name);
  }
  getChildren(name) {
    return this.http.get<ILevel[]>(this.resourceUrl + '/children/' + name);
  }
  getById(id) {
    return this.http.get<ILevel>(this.resourceUrl + '/' + id);
  }

  deleteLevel(id) {
    return this.http.delete<Boolean>(this.resourceUrl + '/' + id);
  }

  saveLevel(job: any) {
    return this.http.post<ILevel>(this.resourceUrl, job);
  }
}
