import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {SERVER_API_URL} from '../../constants/global.constant';
import {IPerson} from '../../models/person/person.model';
import {IPersonName} from '../../models/person/person-name.model';
import {IPersonAddress} from '../../models/person/person-address.model';

@Injectable({ providedIn: 'root' })
export class PersonService {
  personResourceUrl = SERVER_API_URL + '/persons';
  personNameResourceUrl = SERVER_API_URL + '/person-names';
  personAddressResourceUrl = SERVER_API_URL + '/person-addresses';

  constructor(private http: HttpClient) {}

  getAll() {
    return this.http.get<IPerson[]>(this.personResourceUrl);
  }
  getAllPersons() {
    return this.http.get<IPerson[]>(this.personResourceUrl + '/all/');
  }
  getByName(name) {
    return this.http.get<IPerson>(this.personResourceUrl + '/name/' + name);
  }
  getByUuid(uuid) {
    return this.http.get<IPerson>(this.personResourceUrl + '/uuid/' + uuid);
  }
  getById(id) {
    return this.http.get<IPerson>(this.personResourceUrl + '/' + id);
  }

  remove(id) {
    return this.http.delete<Boolean>(this.personResourceUrl + '/' + id);
  }

  save(person: IPerson) {
    return this.http.post<IPerson>(this.personResourceUrl, person);
  }

  getAllPersonNames() {
    return this.http.get<IPersonName[]>(this.personNameResourceUrl);
  }
  getPersonNameById(id) {
    return this.http.get<IPersonName>(this.personNameResourceUrl + '/' + id);
  }

  removePersonName(id) {
    return this.http.delete<Boolean>(this.personNameResourceUrl + '/' + id);
  }

  savePersonName(personName: IPersonName) {
    return this.http.post<IPerson>(this.personNameResourceUrl, personName);
  }

  getAllPersonAddresses() {
    return this.http.get<IPersonAddress[]>(this.personAddressResourceUrl);
  }
  getPersonAddressById(id) {
    return this.http.get<IPersonAddress>(this.personAddressResourceUrl + '/' + id);
  }

  removePersonAddress(id) {
    return this.http.delete<Boolean>(this.personAddressResourceUrl + '/' + id);
  }

  savePersonAddress(personAddress: IPersonAddress) {
    return this.http.post<IPersonAddress>(this.personAddressResourceUrl, personAddress);
  }
}
