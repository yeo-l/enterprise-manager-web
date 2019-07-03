import {Hierarchy, IHierarchy} from './hierarchy.model';
import {v4 as _uuid} from 'uuid';

export interface IPost {
  id?: number;
  name?: string;
  description?: string;
  numberAvailable: number;
  hierarchy?: IHierarchy;
  uuid: string;
}

export class Post implements IPost {
  constructor(public id?: number, public name?: string, public description?: string,
              public hierarchy?: Hierarchy, public numberAvailable: number = 1,
              public uuid: string = _uuid()) {}
}
