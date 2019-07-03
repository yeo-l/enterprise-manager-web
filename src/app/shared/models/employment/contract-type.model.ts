import {v4 as _uuid} from 'uuid';

export interface IContractType {
  id?: number;
  name?: string;
  normalDuration?: number;
  description?: string;
  uuid: string;
}

export class ContractType implements IContractType {
  constructor(public id?: number, public name?: string, public normalDuration?: number,
              public description?: string, public uuid: string = _uuid()) {}
}
