import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Job } from '../models/job-model'

@Injectable({
  providedIn: 'root'
})
export class JobsService {

  private apiUrl = '/jobs';

  constructor(private http: HttpClient) { }

  getJobs(): Observable<Job[]> {
    return this.http.get<Job[]>(this.apiUrl);
  }
  getJobById(jobId: string): Observable<Job> {
    return this.http.get<Job>(`${this.apiUrl}/${jobId}`);
  }
}
