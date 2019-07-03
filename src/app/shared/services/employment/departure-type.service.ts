
import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {SERVER_API_URL} from '../../constants/global.constant';
import {IGrade} from '../../models/employment/grade.model';
import {IDepartureType} from '../../models/employment/departure-type.model';

@Injectable({ providedIn: 'root' })
export class DepartureTypeService {
  resourceUrl = SERVER_API_URL + '/departure-types';

  constructor(private http: HttpClient) {}

  getAll() {
    return this.http.get<IDepartureType[]>(this.resourceUrl);
  }
  getByName(name) {
    return this.http.get<IDepartureType>(this.resourceUrl + '/' + name);
  }
  getById(id) {
    return this.http.get<IDepartureType>(this.resourceUrl + '/' + id);
  }

  remove(id) {
    return this.http.delete<Boolean>(this.resourceUrl + '/' + id);
  }

  save(grade: any) {
    return this.http.post<IDepartureType>(this.resourceUrl, grade);
  }
}
