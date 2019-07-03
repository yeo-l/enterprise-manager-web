import {Pipe, PipeTransform} from '@angular/core';
import {StaffPost} from '../models/employment/staff/staff-post.model';
import {Contract} from '../models/employment/contract/contract.model';

@Pipe({
  name: 'contractFilter',
  pure: false
})
export class ContractFilterPipe implements PipeTransform {
  // transform(items: StaffPost[], filter: boolean): StaffPost[] {
  transform(items: Contract[], filter: Contract): Contract[] {
    if (!items || !filter) {
      return items;
    }
    // filter items array, items which match and return true will be kept, false will be filtered out
    // return items.filter((item: StaffPost) => item.actual === true);
    return items.filter((item: Contract) => this.applyFilter(item, filter));
  }

  applyFilter(contract: Contract, filter: Contract): boolean {
    for (let field in filter) {
      if (filter[field] && field !== 'uuid' && field !== 'dateCreated') {
        if (typeof filter[field] === 'string') {
          if (contract[field].toLowerCase().indexOf(filter[field].toLowerCase()) === -1) {
            return false;
          }
        } else if (typeof filter[field] === 'number') {
          if (contract[field] !== filter[field]) {
            return false;
          }
        } else if (typeof filter[field] === 'boolean') {
          if (contract[field] !== filter[field]) {
            return false;
          }
        } else if ( filter[field] instanceof Date) {
          if (contract[field] !== filter[field]) {
            return false;
          }
        }
      }
    }
    return true;
  }
}
