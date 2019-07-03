import {v4 as _uuid} from 'uuid';
import {IPersonName, PersonName} from './person-name.model';
import {IPersonAddress, PersonAddress} from './person-address.model';

export interface IPerson {
  id?: number;
  gender?: string;
  birthDate?: Date;
  birthDateEstimated?: boolean;
  birthPlace?: string;
  photoName?: string;
  personName: IPersonName;
  personAddress: IPersonAddress;
  dateCreated: Date;
  dateChanged: Date;
  retired: boolean;
  dateRetired: Date;
  retireReason: string;
  uuid: string;
}

export class Person implements IPerson {
  constructor(public id?: number,
              public gender?: string,
              public birthDate?: Date,
              public birthDateEstimated?: boolean,
              public birthPlace?: string,
              public photoName?: string,
              public personName: PersonName = new PersonName(),
              public personAddress: PersonAddress = new PersonAddress(),
              public dateCreated: Date = new Date(),
              public dateChanged: Date = null,
              public retired: boolean = false,
              public dateRetired: Date = null,
              public retireReason: string = null,
              public uuid: string = _uuid()) {}
}
