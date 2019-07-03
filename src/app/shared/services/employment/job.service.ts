
import {IJob} from '../../models/employment/job.model';
import {HttpClient} from '@angular/common/http';
import {Injectable, OnInit} from '@angular/core';
import {SERVER_API_URL} from '../../constants/global.constant';

@Injectable({ providedIn: 'root' })
export class JobService {
  resourceUrl = SERVER_API_URL + '/jobs';

  constructor(private http: HttpClient) {}

  getAll() {
    return this.http.get<IJob[]>(this.resourceUrl);
  }
  getByName(name) {
    return this.http.get<IJob>(this.resourceUrl + '/' + name);
  }
  getById(id) {
    return this.http.get<IJob>(this.resourceUrl + '/' + id);
  }

  deleteJob(id) {
    return this.http.delete<Boolean>(this.resourceUrl + '/' + id);
  }

  save(job: any) {
    return this.http.post<IJob>(this.resourceUrl, job);
  }
}
