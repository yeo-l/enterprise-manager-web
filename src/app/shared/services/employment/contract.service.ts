import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {SERVER_API_URL} from '../../constants/global.constant';
import {IPost} from '../../models/employment/post.model';
import {IStaff} from '../../models/employment/staff/staff.model';
import {IContract} from '../../models/employment/contract/contract.model';

@Injectable({ providedIn: 'root' })
export class ContractService {
  resourceUrl = SERVER_API_URL + '/contracts';

  constructor(private http: HttpClient) {}

  getAll() {
    return this.http.get<IContract[]>(this.resourceUrl);
  }
  getByName(name) {
    return this.http.get<IContract[]>(this.resourceUrl + '/contract-type/' + name);
  }
  getById(id) {
    return this.http.get<IContract>(this.resourceUrl + '/' + id);
  }
  getByStaff(id) {
    return this.http.get<IContract[]>(this.resourceUrl + '/staff/' + id);
  }


  getByStaffActual(id) {
    return this.http.get<IContract>(this.resourceUrl + '/staff-actual/' + id);
  }

  endOtherContract(staffId, contractId) {
    return this.http.get(this.resourceUrl + '/end-other-contracts/' + staffId + '/' + contractId);
  }

  remove(id) {
    return this.http.delete<Boolean>(this.resourceUrl + '/' + id);
  }

  save(contract: IContract) {
    return this.http.post<IContract>(this.resourceUrl, contract);
  }
}
