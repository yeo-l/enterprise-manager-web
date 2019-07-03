import {v4 as _uuid} from 'uuid';

export interface IDepartureType {
  id?: number;
  name?: string;
  description?: string;
  uuid: string;
}

export class DepartureType implements IDepartureType {
  constructor(public id?: number, public name?: string,
              public description?: string, public uuid: string = _uuid()) {}
}
