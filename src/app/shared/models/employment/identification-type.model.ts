import {v4 as _uuid} from 'uuid';

export interface IIdentifierType {
  id?: number;
  name?: string;
  description?: string;
  format?: string;
  uuid: string;
}

export class IdentifierType implements IIdentifierType {
  constructor(public id?: number, public name?: string, public description?: string, format?: string, public uuid: string = _uuid()) {}
}
