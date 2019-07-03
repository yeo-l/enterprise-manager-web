import {ILevel, Level} from './level.model';
import {v4 as _uuid} from 'uuid';

export interface IHierarchy {
  id?: number;
  name?: string;
  description?: string;
  level?: ILevel;
  parentHierarchy?: IHierarchy;
  uuid: string;
}

export class Hierarchy implements IHierarchy {
  constructor(public id?: number, public name?: string, public description?: string,
              public level?: Level, public parentHierarchy?: Hierarchy, public uuid: string = _uuid()) {}
}
