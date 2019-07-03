import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {SERVER_API_URL} from '../../../constants/global.constant';
import {IStaff} from '../../../models/employment/staff/staff.model';

@Injectable({ providedIn: 'root' })
export class StaffService {
  resourceUrl = SERVER_API_URL + '/staffs';

  constructor(private http: HttpClient) {}

  getAll() {
    return this.http.get<IStaff[]>(this.resourceUrl);
  }
  getByName(name) {
    return this.http.get<IStaff[]>(this.resourceUrl + '/contract-type/' + name);
  }
  getById(id) {
    return this.http.get<IStaff>(this.resourceUrl + '/' + id);
  }

  remove(id) {
    return this.http.delete<Boolean>(this.resourceUrl + '/' + id);
  }

  save(staff: IStaff) {
    return this.http.post<IStaff>(this.resourceUrl, staff);
  }
}
