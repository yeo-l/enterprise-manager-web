import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {SERVER_API_URL} from '../../constants/global.constant';
import {IGrade} from '../../models/employment/grade.model';
import {IIdentifierType} from '../../models/employment/identification-type.model';

@Injectable({ providedIn: 'root' })
export class IdentifierTypeService {
  resourceUrl = SERVER_API_URL + '/identifier-types';

  constructor(private http: HttpClient) {}

  getAll() {
    return this.http.get<IIdentifierType[]>(this.resourceUrl);
  }
  getByName(name) {
    return this.http.get<IIdentifierType>(this.resourceUrl + '/' + name);
  }
  getById(id) {
    return this.http.get<IIdentifierType>(this.resourceUrl + '/' + id);
  }

  deleteIdentifierType(id) {
    return this.http.delete<Boolean>(this.resourceUrl + '/' + id);
  }

  save(identifierType: any) {
    return this.http.post<IIdentifierType>(this.resourceUrl, identifierType);
  }
}
