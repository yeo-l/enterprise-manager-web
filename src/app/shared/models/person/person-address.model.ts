import {IPerson, Person} from './person.model';

export interface IPersonAddress {
  id?: number;
  person?: IPerson;
  preferred?: boolean;
  address1?: string;
  address2?: string;
  address3?: string;
  telephone1?: string;
  telephone2?: string;
  telephone3?: string;
  cityVillage?: string;
  stateProvince?: string;
  postalCode?: string;
  country?: string;
  latitude?: string;
  longitude?: string;
  startDate?: Date;
  endDate?: Date;
}

export class PersonAddress implements IPersonAddress {
  constructor(public id?: number,
              public person?: Person,
              public preferred?: boolean,
              public address1?: string,
              public address2?: string,
              public address3?: string,
              public telephone1?: string,
              public telephone2?: string,
              public telephone3?: string,
              public cityVillage?: string,
              public stateProvince?: string,
              public postalCode?: string,
              public country?: string,
              public latitude?: string,
              public longitude?: string,
              public startDate?: Date,
              public endDate?: Date) {}
}
