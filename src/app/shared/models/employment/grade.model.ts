import {v4 as _uuid} from 'uuid';

export interface IGrade {
  id?: number;
  name?: string;
  description?: string;
  uuid: string;
}

export class Grade implements IGrade {
  constructor(public id?: number, public name?: string, public description?: string, public uuid: string = _uuid()) {}
}
