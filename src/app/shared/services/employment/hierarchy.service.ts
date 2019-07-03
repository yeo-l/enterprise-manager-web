import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {SERVER_API_URL} from '../../constants/global.constant';
import {IHierarchy} from '../../models/employment/hierarchy.model';

@Injectable({ providedIn: 'root' })
export class HierarchyService {
  resourceUrl = SERVER_API_URL + '/hierarchies';

  constructor(private http: HttpClient) {}

  getAll() {
    return this.http.get<IHierarchy[]>(this.resourceUrl);
  }
  getByName(name) {
    return this.http.get<IHierarchy>(this.resourceUrl + '/' + name);
  }
  getOther(name) {
    return this.http.get<IHierarchy[]>(this.resourceUrl + '/other/' + name);
  }
  getChildren(name) {
    return this.http.get<IHierarchy[]>(this.resourceUrl + '/children/' + name);
  }
  getById(id) {
    return this.http.get<IHierarchy>(this.resourceUrl + '/' + id);
  }

  deleteHierarchy(id) {
    return this.http.delete<Boolean>(this.resourceUrl + '/' + id);
  }

  saveHierarchy(hierarchy: any) {
    return this.http.post<IHierarchy>(this.resourceUrl, hierarchy);
  }
}
