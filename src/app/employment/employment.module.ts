import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {JobComponent} from './job/job.component';
import {JobFormComponent} from './job/job-form.component';
import {JobDetailComponent} from './job/job-detail.component';
import {BrowserModule} from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule} from '@angular/forms';
import {EmploymentRoutingModule} from './employment-routing.module';
import {ConfirmationDialogService} from '../confirmation-dialog/confirmation-dialog.service';
import {ConfirmationDialogComponent} from '../confirmation-dialog/confirmation-dialog.component';
import { PostComponent } from './post/post.component';
import {PostFormComponent} from './post/post-form.component';
import {PostDetailComponent} from './post/post-detail.component';
import { LevelComponent } from './level/level.component';
import { LevelDetailComponent } from './level/level-detail.component';
import { LevelFormComponent } from './level/level-form.component';
import { HierarchyComponent } from './hierarchy/hierarchy.component';
import { HierarchyDetailComponent } from './hierarchy/hierarchy-detail.component';
import { HierarchyFormComponent } from './hierarchy/hierarchy-form.component';
import { GradeComponent } from './grade/grade.component';
import { GradeFormComponent } from './grade/grade-form.component';
import { GradeDetailComponent } from './grade/grade-detail.component';
import {AlertModule} from 'ngx-bootstrap';
import {IdentifierTypeFormComponent} from './identifier-type/identifier-type-form.component';
import {IdentifierTypeComponent} from './identifier-type/identifier-type.component';
import {IdentifierTypeDetailComponent} from './identifier-type/identifier-type-detail.component';
import { ContractTypeComponent } from './contract-type/contract-type.component';
import { ContractTypeFormComponent } from './contract-type/contract-type-form.component';
import { ContractTypeDetailComponent } from './contract-type/contract-type-detail.component';
import { LeavePermissionTypeComponent } from './leave-permission-type/leave-permission-type.component';
import { LeavePermissionTypeDetailComponent } from './leave-permission-type/leave-permission-type-detail.component';
import { LeavePermissionTypeFormComponent } from './leave-permission-type/leave-permission-type-form.component';
import { DepartureTypeComponent } from './departure-type/departure-type.component';
import { DepartureTypeFormComponent } from './departure-type/departure-type-form.component';
import { DepartureTypeDetailComponent } from './departure-type/departure-type-detail.component';
import { StaffComponent } from './staff/staff.component';
import { ContractComponent } from './contract/contract.component';
import { DepartureComponent } from './departure/departure.component';
import { LeavePermissionComponent } from './leave-permission/leave-permission.component';
import {DataTablesModule} from 'angular-datatables';
import {ContractFilterPipe} from '../shared/filters/contract-filter.pipe';
import {StaffPostFilterPipe} from '../shared/filters/staff-post-filter.pipe';
import { StaffFormComponent } from './staff/staff-form.component';
import {
  NgbDateAdapter, NgbDateParserFormatter, NgbDatepickerConfig, NgbDatepickerI18n, NgbInputDatepicker,
  NgbModule
} from '@ng-bootstrap/ng-bootstrap';
import {CustomDatepickerI18n, I18n} from '../shared/utils/datepicker-i18n';
import {NgbDateMomentAdapter} from '../shared/utils/datepicker-adaper';
import {NgbDateFRParserFormatter} from '../shared/utils/ngb-date-fr-parser-formatter';
import { ContractFormComponent } from './contract/contract-form.component';
import { OrganizationChartComponent } from './org-chart/organization-chart.component';
import { OrgChartModule} from 'ng2-org-chart';
import { ContractDetailComponent } from './contract/contract-detail.component';
import {ContractOrderByPipe} from '../shared/filters/contract-order-by.pipe';
import {EnterpriseManagerSharedModule} from '../shared/enterprise-manager-shared.module';

@NgModule({
  declarations: [JobComponent, JobFormComponent, JobDetailComponent,
    PostComponent, PostFormComponent, PostDetailComponent,
    LevelComponent, LevelDetailComponent, LevelFormComponent,
    HierarchyComponent, HierarchyDetailComponent, HierarchyFormComponent,
    HierarchyDetailComponent,
    HierarchyFormComponent,
    GradeComponent,
    GradeFormComponent,
    GradeDetailComponent,
    IdentifierTypeFormComponent,
    IdentifierTypeComponent,
    IdentifierTypeDetailComponent,
    ContractTypeComponent,
    ContractTypeFormComponent,
    ContractTypeDetailComponent,
    LeavePermissionTypeComponent,
    LeavePermissionTypeDetailComponent,
    LeavePermissionTypeFormComponent,
    DepartureTypeComponent,
    DepartureTypeFormComponent,
    DepartureTypeDetailComponent,
    StaffComponent,
    ContractComponent,
    DepartureComponent,
    LeavePermissionComponent,
    StaffPostFilterPipe,
    StaffFormComponent,
    ContractFilterPipe,
    ContractFormComponent,
    OrganizationChartComponent,
    ContractDetailComponent,
    ContractOrderByPipe
  ],
  imports: [
    CommonModule,
    EnterpriseManagerSharedModule,
    EmploymentRoutingModule
  ],
  exports: [
    JobComponent, JobFormComponent, JobDetailComponent,
    PostComponent, PostFormComponent, PostDetailComponent,
    LevelComponent, LevelDetailComponent, LevelFormComponent,
    HierarchyComponent, HierarchyDetailComponent, HierarchyFormComponent,
    GradeComponent,
    GradeFormComponent,
    GradeDetailComponent
  ],
  providers: [],
  entryComponents: [ConfirmationDialogComponent]
})
export class EmploymentModule {
}
