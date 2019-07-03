import {v4 as _uuid} from 'uuid';
import {IPost, Post} from '../post.model';
import {IdentifierType, IIdentifierType} from '../identification-type.model';
import {IStaff, Staff} from './staff.model';

export interface IStaffIdentifier {
  id?: number;
  identifierType?: IIdentifierType;
  identifier?: string;
  // staff?: IStaff;
  preferred?: boolean;
  dateCreated: Date;
  dateChanged: Date;
  retired: boolean;
  dateRetired: Date;
  retireReason: string;
  uuid: string;
}

export class StaffIdentifier implements IStaffIdentifier {
  constructor(public id?: number,
              public identifierType?: IdentifierType,
              public identifier?: string,
              // public staff?: Staff,
              public preferred?: boolean,
              public dateChanged: Date = null,
              public dateRetired: Date = null,
              public retireReason: string = null,
              public retired: boolean = false,
              public dateCreated: Date = new Date(),
              public uuid: string = _uuid()) {}
}
