import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {SERVER_API_URL} from '../../constants/global.constant';
import {IContractType} from '../../models/employment/contract-type.model';

@Injectable({ providedIn: 'root' })
export class ContractTypeService {
  resourceUrl = SERVER_API_URL + '/contract-types';

  constructor(private http: HttpClient) {}

  getAll() {
    return this.http.get<IContractType[]>(this.resourceUrl);
  }
  getByName(name) {
    return this.http.get<IContractType>(this.resourceUrl + '/' + name);
  }
  getById(id) {
    return this.http.get<IContractType>(this.resourceUrl + '/' + id);
  }

  remove(id) {
    return this.http.delete<Boolean>(this.resourceUrl + '/' + id);
  }

  save(contractType: any) {
    return this.http.post<IContractType>(this.resourceUrl, contractType);
  }
}
