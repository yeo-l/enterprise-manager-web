import {v4 as _uuid} from 'uuid';
import {IPost, Post} from '../post.model';
import {IStaff, Staff} from './staff.model';

export interface IStaffPost {
  id?: number;
  post?: IPost;
  staff?: IStaff;
  startDate?: Date;
  endDate?: Date;
  actual?: boolean;
  dateCreated: Date;
  dateChanged: Date;
  retired: boolean;
  dateRetired: Date;
  retireReason: string;
  uuid: string;
}

export class StaffPost implements IStaffPost {
  constructor(public id?: number,
              public post?: Post,
              public staff?: Staff,
              public startDate?: Date,
              public endDate?: Date,
              public actual?: boolean,
              public dateCreated: Date = new Date(),
              public dateChanged: Date = null,
              public retired: boolean = false,
              public dateRetired: Date = null,
              public retireReason: string = null,
              public uuid: string = _uuid()) {}
}
