import { Pipe, PipeTransform } from '@angular/core';
import {IContract} from '../models/employment/contract/contract.model';

@Pipe({
  name: 'contractOrderBy'
})
export class ContractOrderByPipe implements PipeTransform {

  transform(contracts: IContract[], args: string): IContract[] {
    if (typeof args[0] === 'undefined') {
      return contracts;
    }
    const direction = args[0][0];
    const column = args.replace('-', '');
    contracts.sort((a: any, b: any) => {
      const left = Number(new Date(a[column]));
      const right = Number(new Date(b[column]));
      return (direction === '-') ? right - left : left - right;
    });
    return contracts;
  }

}
