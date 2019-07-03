import {v4 as _uuid} from 'uuid';
import {ContractType, IContractType} from '../contract-type.model';
import {IStaff, Staff} from '../staff/staff.model';
import {Moment} from 'moment';
import * as moment from 'moment';

export interface IContract {
  id?: number;
  contractType?: IContractType;
  signedDate?: Moment;
  startDate?: Moment;
  endDate?: Moment;
  staff?: IStaff;
  isActual: boolean;
  dateCreated: Moment;
  dateChanged: Moment;
  retired: boolean;
  dateRetired: Moment;
  retireReason: string;
  uuid: string;
}

export class Contract implements IContract {
  constructor(public id?: number,
              public contractType?: ContractType,
              public signedDate?: Moment,
              public startDate?: Moment,
              public endDate?: Moment,
              public staff?: Staff,
              public isActual: boolean = true,
              public dateCreated: Moment = moment(),
              public dateChanged: Moment = null,
              public retired: boolean = false,
              public dateRetired: Moment = null,
              public retireReason: string = null,
              public uuid: string = _uuid()) {}
}
