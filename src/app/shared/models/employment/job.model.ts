import {v4 as _uuid} from 'uuid';

export interface IJob {
  id?: number;
  name?: string;
  description?: string;
  uuid: string;
}

export class Job implements IJob {
  constructor(public id?: number, public name?: string, public description?: string, public uuid: string = _uuid()) {}
}
