import {v4 as _uuid} from 'uuid';

export interface ILeavePermissionType {
  id?: number;
  name?: string;
  legalDuration?: number;
  description?: string;
  uuid: string;
}

export class LeavePermissionType implements ILeavePermissionType {
  constructor(public id?: number, public name?: string, public legalDuration?: number,
              public description?: string, public uuid: string = _uuid()) {}
}
