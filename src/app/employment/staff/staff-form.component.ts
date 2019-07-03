import { Component, OnInit } from '@angular/core';
import {IStaff, Staff} from '../../shared/models/employment/staff/staff.model';
import {IStaffIdentifier, StaffIdentifier} from '../../shared/models/employment/staff/staff-identifier.model';
import {IdentifierType, IIdentifierType} from '../../shared/models/employment/identification-type.model';
import {IJob, Job} from '../../shared/models/employment/job.model';
import {StaffPost} from '../../shared/models/employment/staff/staff-post.model';
import {IPost, Post} from '../../shared/models/employment/post.model';
import {IPerson, Person} from '../../shared/models/person/person.model';
import {StaffService} from '../../shared/services/employment/staff/staff.service';
import {JobService} from '../../shared/services/employment/job.service';
import {PersonService} from '../../shared/services/person/person.service';
import {Grade, IGrade} from '../../shared/models/employment/grade.model';
import {GradeService} from '../../shared/services/employment/grade.service';
import {IPersonAddress, PersonAddress} from '../../shared/models/person/person-address.model';
import {IPersonName, PersonName} from '../../shared/models/person/person-name.model';
import {IdentifierTypeService} from '../../shared/services/employment/identifier-type.service';
import {ContractType, IContractType} from '../../shared/models/employment/contract-type.model';
import {Contract, IContract} from '../../shared/models/employment/contract/contract.model';
import {ContractService} from '../../shared/services/employment/contract.service';
import {ContractTypeService} from '../../shared/services/employment/contract-type.service';
import {PostService} from '../../shared/services/employment/post.service';
import {StaffIdentifierService} from '../../shared/services/employment/staff/staff-identifier.service';
import {ActivatedRoute, Router} from '@angular/router';
import {StaffPostService} from '../../shared/services/employment/staff/staff-post.service';

@Component({
  selector: 'app-staff-form',
  templateUrl: './staff-form.component.html',
  styleUrls: ['./staff-form.component.scss']
})
export class StaffFormComponent implements OnInit {

  jobs: Job[];
  posts: Post[];
  grades: Grade[];
  identifierTypes: IdentifierType[];
  contractTypes: ContractType[];
  staffIdentifiers: StaffIdentifier[] = [];
  staffPosts: StaffPost[] = [];
  contracts: Contract[] = [];
  job: Job = new Job(null, '', '');
  staffPost: StaffPost = new StaffPost(null, null, null, new Date(), null, true);
  personAddress: PersonAddress = new PersonAddress(null, null, true, '', '', '', '', '', '', '', '', '', '', '', '', new Date(), null);
  // person: Person = new Person(null, '', null, false, null, '', this.personName, this.personAddress);
  person: Person = new Person(null, '', null, false, null, '', null, null);
  personName: PersonName = new PersonName(null, null, '', '', '', '', '', '', '', false, '');
  grade: Grade = new Grade(null, '', '');
  staff: Staff = new Staff(null, this.staffIdentifiers, this.job, this.staffPosts, this.grade, null, this.person);
  // staff: Staff = new Staff(null, this.job, this.grade, this.person);
  // staffIdentifier: StaffIdentifier = new StaffIdentifier(null, null, '', null, true);
  staffIdentifier: StaffIdentifier = new StaffIdentifier(null, null, '', true);
  contract: Contract = new Contract(null, null, null, null);

  constructor(private staffService: StaffService, private jobService: JobService, private personService: PersonService,
              private gradeService: GradeService, private identifierTypeService: IdentifierTypeService,
              private contractService: ContractService, private contractTypeService: ContractTypeService,
              private postService: PostService, private staffIdentifierService: StaffIdentifierService,
              private staffPostService: StaffPostService,
              private route: ActivatedRoute, private router: Router) {
    if (route.snapshot.params.id) {
      this.getStaff(route.snapshot.params.id);
    }
  }

  ngOnInit() {
    this.getAllJob();
    this.getAllIdentifierType();
    this.getAllContractType();
    this.getAllGrade();
    this.getAllPost();
  }

  getStaff(id) {
    this.staffService.getById(id).subscribe((staff: IStaff) => {
      this.staff = staff;
      this.person = this.staff.person;
      this.personName = this.staff.person.personName;
      this.personAddress = this.staff.person.personAddress;
      // this.staffIdentifiers = this.staff.staffIdentifiers;
      // console.log(this.staff);
    }, error2 => {
      console.log(error2);
    });
  }
  getAllJob() {
    this.jobService.getAll().subscribe((jobs: IJob[]) => {
      this.jobs = jobs;
    }, err => {
      console.log(err);
    });
  }

  getAllGrade() {
    this.gradeService.getAll().subscribe((grade: IGrade[]) => {
      this.grades = grade;
    }, err => {
      console.log(err);
    });
  }

  getAllIdentifierType() {
    this.identifierTypeService.getAll().subscribe((data: IIdentifierType[]) => {
      this.identifierTypes = data;
    }, err => {
      console.log(err);
    });
  }

  getAllContractType() {
    this.contractTypeService.getAll().subscribe((data: IContractType[]) => {
      this.contractTypes = data;
    }, err => {
      console.log(err);
    });
  }

  getAllPost() {
    this.postService.getAll().subscribe((post: IPost[]) => {
      this.posts = post;
    }, err => {
      console.log(err);
    });
  }

  save(data) {
    this.person.personName = this.personName;
    this.person.personAddress = this.personAddress;
    let dateChanged: Date;
    if (this.person.id) {
      dateChanged = new Date();
      this.person.dateChanged = dateChanged;
      this.personService.save(this.person).subscribe((person: IPerson) => {
        this.staff.person = person;
        this.staff.dateChanged = this.person.dateChanged;
        this.staffService.save(this.staff).subscribe((staff: IStaff) => {
          this.router.navigateByUrl('/staff/list');
        }, err => {
          console.log(err);
        });
      }, err => {
        console.log(err);
      });
    } else {
      this.personService.save(this.person).subscribe((person: IPerson) => {
        this.staff.person = person;
        this.staffIdentifiers.push(this.staffIdentifier);
        this.staff.staffIdentifiers = this.staffIdentifiers;
        this.contracts.push(this.contract);
        this.staff.contracts = this.contracts;
        this.staffPosts.push(this.staffPost);
        this.staff.staffPosts = this.staffPosts;
        this.staff.dateChanged = this.person.dateChanged;
        this.staffService.save(this.staff).subscribe((staff: IStaff) => {
          this.router.navigateByUrl('/staff/list');
        }, err => {
          console.log(err);
        });
      }, err => {
        console.log(err);
      });
    }
  }
}
