import { Component } from '@angular/core';
import { Job } from '../models/job-model';
import { ActivatedRoute, Router } from '@angular/router';

import { JobsService } from '../services/jobs.service';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-job-detail',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './job-detail.component.html',
  styleUrl: './job-detail.component.css'
})
export class JobDetailComponent {
  job: Job | undefined;

  constructor(private route: ActivatedRoute, private jobService: JobsService, private router: Router) { }

  ngOnInit(): void {
    const jobId = this.route.snapshot.paramMap.get('jobId');
    if (jobId) {
      this.jobService.getJobById(jobId).subscribe((data: Job) => {
        this.job = data;
      });
    }
  }

  goBack(): void {
    this.router.navigate(['/jobs']);
  }

}
