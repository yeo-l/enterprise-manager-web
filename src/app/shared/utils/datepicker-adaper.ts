import { Injectable } from '@angular/core';
import { NgbDateAdapter, NgbDateStruct } from '@ng-bootstrap/ng-bootstrap';
import { Moment } from 'moment';
import * as moment from 'moment';

@Injectable()
export class NgbDateMomentAdapter extends NgbDateAdapter<Moment> {
  fromModel(date: Moment): NgbDateStruct {
    if (date != null && moment.isMoment(date) && date.isValid()) {
      return { day: date.date(), month: date.month() + 1, year: date.year() };
    }
    return null;
  }

  toModel(date: NgbDateStruct): Moment {
    return date ? moment(date.year + '-' + date.month + '-' + date.day, 'YYYY-MM-DD') : null;
  }
}
