import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {SERVER_API_URL} from '../../../constants/global.constant';
import {IStaffIdentifier} from '../../../models/employment/staff/staff-identifier.model';

@Injectable({ providedIn: 'root' })
export class StaffIdentifierService {
  resourceUrl = SERVER_API_URL + '/staff-identifiers';

  constructor(private http: HttpClient) {}

  getAll() {
    return this.http.get<IStaffIdentifier[]>(this.resourceUrl);
  }
  getByName(name) {
    return this.http.get<IStaffIdentifier>(this.resourceUrl + '/' + name);
  }

  getById(id) {
    return this.http.get<IStaffIdentifier>(this.resourceUrl + '/' + id);
  }

  remove(id) {
    return this.http.delete<Boolean>(this.resourceUrl + '/' + id);
  }

  save(staffIdentifier: IStaffIdentifier) {
    return this.http.post<IStaffIdentifier>(this.resourceUrl, staffIdentifier);
  }
}
