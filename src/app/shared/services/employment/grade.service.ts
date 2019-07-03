
import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {SERVER_API_URL} from '../../constants/global.constant';
import {IGrade} from '../../models/employment/grade.model';

@Injectable({ providedIn: 'root' })
export class GradeService {
  resourceUrl = SERVER_API_URL + '/grades';

  constructor(private http: HttpClient) {}

  getAll() {
    return this.http.get<IGrade[]>(this.resourceUrl);
  }
  getByName(name) {
    return this.http.get<IGrade>(this.resourceUrl + '/' + name);
  }
  getById(id) {
    return this.http.get<IGrade>(this.resourceUrl + '/' + id);
  }

  deleteGrade(id) {
    return this.http.delete<Boolean>(this.resourceUrl + '/' + id);
  }

  save(grade: any) {
    return this.http.post<IGrade>(this.resourceUrl, grade);
  }
}
