import {CUSTOM_ELEMENTS_SCHEMA, NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule} from '@angular/forms';
import {DataTablesModule} from 'angular-datatables';
import {AlertModule} from 'ngx-bootstrap';
import {OrgChartModule} from 'ng2-org-chart';
import {NgbDateAdapter, NgbDateParserFormatter, NgbDatepickerI18n, NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {ConfirmationDialogService} from '../confirmation-dialog/confirmation-dialog.service';
import {CustomDatepickerI18n, I18n} from './utils/datepicker-i18n';
import {NgbDateMomentAdapter} from './utils/datepicker-adaper';
import {NgbDateFRParserFormatter} from './utils/ngb-date-fr-parser-formatter';

@NgModule({
  declarations: [],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    AlertModule,
    DataTablesModule,
    NgbModule,
    OrgChartModule
  ],
  exports: [
    HttpClientModule,
    FormsModule,
    DataTablesModule,
    NgbModule,
    OrgChartModule
  ],
  providers: [
    ConfirmationDialogService,
    I18n,
    { provide: NgbDatepickerI18n,       useClass: CustomDatepickerI18n},
    // { provide: NgbDateAdapter,          useClass: NgbDateMomentAdapter },
    { provide: NgbDateParserFormatter,  useClass: NgbDateFRParserFormatter}
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class EnterpriseManagerSharedModule {
  static forRoot() {
    return {
      ngModule: EnterpriseManagerSharedModule
    };
  }
}
