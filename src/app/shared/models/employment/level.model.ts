import {v4 as _uuid} from 'uuid';

export interface ILevel {
  id?: number;
  name?: string;
  description?: string;
  parentLevel?: ILevel;
  uuid: string;
}

export class Level implements ILevel {
  constructor(public id?: number, public name?: string, public description?: string, public parentLevel?: Level,
              public uuid: string = _uuid()) {}
}
