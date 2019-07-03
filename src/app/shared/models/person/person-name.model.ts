import {IPerson, Person} from './person.model';

export interface IPersonName {
  id?: number;
  person?: IPerson;
  degree?: string;
  familyName?: string;
  familyName2?: string;
  familyNamePrefix?: string;
  familyNameSuffix?: string;
  givenName?: string;
  middleName?: string;
  preferred?: boolean;
  prefix?: string;
}

export class PersonName implements IPersonName {
  constructor(public id?: number,
              public person?: Person,
              public degree?: string,
              public familyName?: string,
              public familyName2?: string,
              public familyNamePrefix?: string,
              public familyNameSuffix?: string,
              public givenName?: string,
              public middleName?: string,
              public preferred?: boolean,
              public prefix?: string) {}
}
