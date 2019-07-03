import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {SERVER_API_URL} from '../../../constants/global.constant';
import {IStaffIdentifier} from '../../../models/employment/staff/staff-identifier.model';
import {IStaffPost} from '../../../models/employment/staff/staff-post.model';

@Injectable({ providedIn: 'root' })
export class StaffPostService {
  resourceUrl = SERVER_API_URL + '/staff-posts';

  constructor(private http: HttpClient) {}

  getAll() {
    return this.http.get<IStaffPost[]>(this.resourceUrl);
  }
  getAllByStaff(id) {
    return this.http.get<IStaffPost[]>(this.resourceUrl + '/staff/' + id);
  }
  getByName(name) {
    return this.http.get<IStaffPost>(this.resourceUrl + '/' + name);
  }

  getById(id) {
    return this.http.get<IStaffPost>(this.resourceUrl + '/' + id);
  }

  remove(id) {
    return this.http.delete<Boolean>(this.resourceUrl + '/' + id);
  }

  save(staffPost: IStaffPost) {
    return this.http.post<IStaffPost>(this.resourceUrl, staffPost);
  }
}
