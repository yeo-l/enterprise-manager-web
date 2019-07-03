import {v4 as _uuid} from 'uuid';
import {IStaffIdentifier, StaffIdentifier} from './staff-identifier.model';
import {IJob, Job} from '../job.model';
import {IStaffPost, StaffPost} from './staff-post.model';
import {Grade, IGrade} from '../grade.model';
import {Contract, IContract} from '../contract/contract.model';
import {IPerson, Person} from '../../person/person.model';

export interface IStaff {
  id?: number;
  staffIdentifiers?: IStaffIdentifier[];
  job?: IJob;
  staffPosts?: IStaffPost[];
  grade?: IGrade;
  contracts?: IContract[];
  person: IPerson;
  dateCreated: Date;
  dateChanged?: Date;
  retired: boolean;
  dateRetired?: Date;
  retireReason?: string;
  uuid: string;
}

export class Staff implements IStaff {
  constructor(public id?: number,
              public staffIdentifiers?: StaffIdentifier[],
              public job?: Job,
              public staffPosts?: StaffPost[],
              public grade?: Grade,
              public contracts?: Contract[],
              public person: Person = new Person(),
              public dateCreated: Date = new Date(),
              public dateChanged?: Date,
              public retired: boolean = false,
              public dateRetired?: Date,
              public retireReason?: string,
              public uuid: string = _uuid()) {}
}
