import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {SERVER_API_URL} from '../../constants/global.constant';
import {IContractType} from '../../models/employment/contract-type.model';
import {ILeavePermissionType} from '../../models/employment/leave-permission-type.model';

@Injectable({ providedIn: 'root' })
export class LeavePermissionTypeService {
  resourceUrl = SERVER_API_URL + '/leave-permission-types';

  constructor(private http: HttpClient) {}

  getAll() {
    return this.http.get<ILeavePermissionType[]>(this.resourceUrl);
  }
  getByName(name) {
    return this.http.get<ILeavePermissionType>(this.resourceUrl + '/' + name);
  }
  getById(id) {
    return this.http.get<ILeavePermissionType>(this.resourceUrl + '/' + id);
  }

  remove(id) {
    return this.http.delete<Boolean>(this.resourceUrl + '/' + id);
  }

  save(result: any) {
    return this.http.post<ILeavePermissionType>(this.resourceUrl, result);
  }
}
