import {Pipe, PipeTransform} from '@angular/core';
import {StaffPost} from '../models/employment/staff/staff-post.model';

@Pipe({
  name: 'staffPostFilter',
  pure: false
})
export class StaffPostFilterPipe implements PipeTransform {
  // transform(items: StaffPost[], filter: boolean): StaffPost[] {
  transform(items: StaffPost[], filter: StaffPost): StaffPost[] {
    if (!items || !filter) {
      return items;
    }
    // filter items array, items which match and return true will be kept, false will be filtered out
    // return items.filter((item: StaffPost) => item.actual === true);
    return items.filter((item: StaffPost) => this.applyFilter(item, filter));
  }

  applyFilter(staffPost: StaffPost, filter: StaffPost): boolean {
    for (let field in filter) {
      if (filter[field] && field !== 'uuid' && field !== 'dateCreated') {
        if (typeof filter[field] === 'string') {
          if (staffPost[field].toLowerCase().indexOf(filter[field].toLowerCase()) === -1) {
            return false;
          }
        } else if (typeof filter[field] === 'number') {
          if (staffPost[field] !== filter[field]) {
            return false;
          }
        } else if (typeof filter[field] === 'boolean') {
          if (staffPost[field] !== filter[field]) {
            return false;
          }
        }
      }
    }
    return true;
  }
}
