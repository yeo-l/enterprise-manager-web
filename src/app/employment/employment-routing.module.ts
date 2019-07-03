import {RouterModule, Routes} from '@angular/router';
import {NgModule} from '@angular/core';
import {JobComponent} from './job/job.component';
import {JobDetailComponent} from './job/job-detail.component';
import {JobFormComponent} from './job/job-form.component';
import {PostComponent} from './post/post.component';
import {PostDetailComponent} from './post/post-detail.component';
import {PostFormComponent} from './post/post-form.component';
import {LevelComponent} from './level/level.component';
import {LevelDetailComponent} from './level/level-detail.component';
import {LevelFormComponent} from './level/level-form.component';
import {HierarchyComponent} from './hierarchy/hierarchy.component';
import {HierarchyDetailComponent} from './hierarchy/hierarchy-detail.component';
import {HierarchyFormComponent} from './hierarchy/hierarchy-form.component';
import {GradeComponent} from './grade/grade.component';
import {GradeDetailComponent} from './grade/grade-detail.component';
import {GradeFormComponent} from './grade/grade-form.component';
import {IdentifierTypeComponent} from './identifier-type/identifier-type.component';
import {IdentifierTypeFormComponent} from './identifier-type/identifier-type-form.component';
import {IdentifierTypeDetailComponent} from './identifier-type/identifier-type-detail.component';
import {ContractTypeComponent} from './contract-type/contract-type.component';
import {ContractTypeDetailComponent} from './contract-type/contract-type-detail.component';
import {ContractTypeFormComponent} from './contract-type/contract-type-form.component';
import {LeavePermissionTypeComponent} from './leave-permission-type/leave-permission-type.component';
import {LeavePermissionTypeDetailComponent} from './leave-permission-type/leave-permission-type-detail.component';
import {LeavePermissionTypeFormComponent} from './leave-permission-type/leave-permission-type-form.component';
import {DepartureTypeComponent} from './departure-type/departure-type.component';
import {DepartureTypeDetailComponent} from './departure-type/departure-type-detail.component';
import {DepartureTypeFormComponent} from './departure-type/departure-type-form.component';
import {StaffComponent} from './staff/staff.component';
import {StaffFormComponent} from './staff/staff-form.component';
import {ContractComponent} from './contract/contract.component';
import {ContractFormComponent} from './contract/contract-form.component';
import {OrganizationChartComponent} from './org-chart/organization-chart.component';
import {ContractDetailComponent} from './contract/contract-detail.component';

const routes: Routes = [
  {
    path: 'job/list',
    component: JobComponent,
    data: {
      title: 'Emplois',
      subTitle: 'Liste des Emplois'
    }
  },
  {
    path: 'job/details/:id',
    component: JobDetailComponent,
    data: {
      title: 'Emplois',
      subTitle: 'Détail de l\'Emploi'
    }
  },
  {
    path: 'job/form',
    component: JobFormComponent,
    data: {
      title: 'Emplois',
      subTitle: 'Saisie des Emplois'
    }
  },
  {
    path: 'job/form/edit/:id',
    component: JobFormComponent,
    data: {
      title: 'Emplois',
      subTitle: 'Saisie des Emplois'
    }
  },
  {
    path: 'post/list',
    component: PostComponent,
    data: {
      title: 'Fonctions',
      subTitle: 'Liste des Fonctions'
    }
  },
  {
    path: 'post/details/:id',
    component: PostDetailComponent,
    data: {
      title: 'Fonctions',
      subTitle: 'Détail de la Fonction'
    }
  },
  {
    path: 'post/form',
    component: PostFormComponent,
    data: {
      title: 'Fonctions',
      subTitle: 'Saisie des Fonctions'
    }
  },
  {
    path: 'post/form/edit/:id',
    component: PostFormComponent,
    data: {
      title: 'Fonctions',
      subTitle: 'Saisie des Fonctions'
    }
  },
  {
    path: 'level/list',
    component: LevelComponent,
    data: {
      title: 'Niveau Hiérarchique',
      subTitle: 'Liste des Niveaux Hiérarchiques'
    }
  },
  {
    path: 'level/details/:id',
    component: LevelDetailComponent,
    data: {
      title: 'Niveau Hiérarchique',
      subTitle: 'Détail du Niveau Hiérarchique'
    }
  },
  {
    path: 'level/form',
    component: LevelFormComponent,
    data: {
      title: 'Niveau Hiérarchique',
      subTitle: 'Saisie des Niveaux Hiérarchiques'
    }
  },
  {
    path: 'level/form/edit/:id',
    component: LevelFormComponent,
    data: {
      title: 'Niveau Hiérarchique',
      subTitle: 'Saisie des Niveaux Hiérarchiques'
    }
  },
  {
    path: 'hierarchy/list',
    component: HierarchyComponent,
    data: {
      title: 'Hiérarchie',
      subTitle: 'liste des Hiérarchiques'
    }
  },
  {
    path: 'hierarchy/details/:id',
    component: HierarchyDetailComponent,
    data: {
      title: 'Hiérarchie',
      subTitle: 'Détail de la Hiérarchie'
    }
  },
  {
    path: 'hierarchy/form',
    component: HierarchyFormComponent,
    data: {
      title: 'Hiérarchie',
      subTitle: 'Saisie des Hiérarchiques'
    }
  },
  {
    path: 'hierarchy/form/edit/:id',
    component: HierarchyFormComponent,
    data: {
      title: 'Hiérarchie',
      subTitle: 'Saisie des Hiérarchiques'
    }
  },
  {
    path: 'grade/list',
    component: GradeComponent,
    data: {
      title: 'Grade',
      subTitle: 'liste des Grades'
    }
  },
  {
    path: 'grade/details/:id',
    component: GradeDetailComponent,
    data: {
      title: 'Grade',
      subTitle: 'Détail du Grade'
    }
  },
  {
    path: 'grade/form',
    component: GradeFormComponent,
    data: {
      title: 'Grade',
      subTitle: 'Saisie des Grades'
    }
  },
  {
    path: 'grade/form/edit/:id',
    component: GradeFormComponent,
    data: {
      title: 'Grade',
      subTitle: 'Saisie des Grades'
    }
  },
  {
    path: 'identifier-type/list',
    component: IdentifierTypeComponent,
    data: {
      title: 'Types d\'Identifiant',
      subTitle: 'liste des Types d\'Identifiant'
    }
  },
  {
    path: 'identifier-type/details/:id',
    component: IdentifierTypeDetailComponent,
    data: {
      title: 'Types d\'Identifiant',
      subTitle: 'Détail du Type d\'Identifiant'
    }
  },
  {
    path: 'identifier-type/form',
    component: IdentifierTypeFormComponent,
    data: {
      title: 'Types d\'Identifiant',
      subTitle: 'Saisie des Types d\'Identifiant'
    }
  },
  {
    path: 'identifier-type/form/edit/:id',
    component: IdentifierTypeFormComponent,
    data: {
      title: 'Types d\'Identifiant',
      subTitle: 'Saisie des Types d\'Identifiant'
    }
  },
  {
    path: 'contract-type/list',
    component: ContractTypeComponent,
    data: {
      title: 'Types de Contrat',
      subTitle: 'liste des Types de Contrat'
    }
  },
  {
    path: 'contract-type/details/:id',
    component: ContractTypeDetailComponent,
    data: {
      title: 'Types de Contrat',
      subTitle: 'Détail du Type de Contrat'
    }
  },
  {
    path: 'contract-type/form',
    component: ContractTypeFormComponent,
    data: {
      title: 'Types de Contrat',
      subTitle: 'Saisie des Types de Contrat'
    }
  },
  {
    path: 'contract-type/form/edit/:id',
    component: ContractTypeFormComponent,
    data: {
      title: 'Types de Contrat',
      subTitle: 'Saisie des Types de Contrat'
    }
  },
  {
    path: 'leave-permission-type/list',
    component: LeavePermissionTypeComponent,
    data: {
      title: 'Types de Congés/Permissions',
      subTitle: 'Liste des Types de Congés/Permissions'
    }
  },
  {
    path: 'leave-permission-type/details/:id',
    component: LeavePermissionTypeDetailComponent,
    data: {
      title: 'Types de Congés/Permissions',
      subTitle: 'Détail du Type de Congé/Permission'
    }
  },
  {
    path: 'leave-permission-type/form',
    component: LeavePermissionTypeFormComponent,
    data: {
      title: 'Types de Congés/Permissions',
      subTitle: 'Saisie des Types de Congés/Permissions'
    }
  },
  {
    path: 'leave-permission-type/form/edit/:id',
    component: LeavePermissionTypeFormComponent,
    data: {
      title: 'Types de Congés/Permissions',
      subTitle: 'Saisie des Types de Congés/Permissions'
    }
  },
  {
    path: 'departure-type/list',
    component: DepartureTypeComponent,
    data: {
      title: 'Types de Départ',
      subTitle: 'Liste des Types de Départ'
    }
  },
  {
    path: 'departure-type/details/:id',
    component: DepartureTypeDetailComponent,
    data: {
      title: 'Types de Départ',
      subTitle: 'Détail du Type de Départ'
    }
  },
  {
    path: 'departure-type/form',
    component: DepartureTypeFormComponent,
    data: {
      title: 'Types de Départ',
      subTitle: 'Saisie des Types de Départ'
    }
  },
  {
    path: 'departure-type/form/edit/:id',
    component: DepartureTypeFormComponent,
    data: {
      title: 'Types de Départ',
      subTitle: 'Saisie des Types de Départ'
    }
  },
  {
    path: 'staff/list',
    component: StaffComponent,
    data: {
      title: 'Gestion du Personnel',
      subTitle: 'Liste du personnel'
    }
  },
  {
    path: 'staff/form',
    component: StaffFormComponent,
    data: {
      title: 'Gestion du Personnel',
      subTitle: 'Saisie du personnel'
    }
  },
  {
    path: 'staff/form/edit/:id',
    component: StaffFormComponent,
    data: {
      title: 'Gestion du Personnel',
      subTitle: 'Edition du personnel'
    }
  },
  {
    path: 'contract/list',
    component: ContractComponent,
    data: {
      title: 'Contrats',
      subTitle: 'Liste des Employés par Contrat'
    }
  },
  {
    path: 'contract/form',
    component: ContractFormComponent,
    data: {
      title: 'Contrats',
      subTitle: 'Saisie des Contrats'
    }
  },
  {
    path: 'contract/detail/:id',
    component: ContractDetailComponent,
    data: {
      title: 'Contrats',
      subTitle: 'Détail du contrat'
    }
  },
  {
    path: 'org-chart',
    component: OrganizationChartComponent,
    data: {
      title: 'Organigramme',
      subTitle: 'Employés'
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EmploymentRoutingModule {}

