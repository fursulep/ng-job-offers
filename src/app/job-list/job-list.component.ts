import { Component } from '@angular/core';
import { JobsService } from '../services/jobs.service';
import { Job } from '../models/job-model';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-job-list',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './job-list.component.html',
  styleUrl: './job-list.component.css',
})
export class JobListComponent {
  jobs: Job[] = [];

  constructor(private jobService: JobsService) {}

  ngOnInit(): void {
    this.jobService.getJobs().subscribe((data: Job[]) => {
      this.jobs = data;
    });
  }

  favoriteJobs: Job[] = JSON.parse(localStorage.getItem('favorites') || '[]');

  toggleFavorite(job: Job): void {
    const index = this.favoriteJobs.findIndex((j) => j.id === job.id);
    if (index === -1) {
      this.favoriteJobs.push(job);
    } else {
      this.favoriteJobs.splice(index, 1);
    }
    localStorage.setItem('favorites', JSON.stringify(this.favoriteJobs));
  }

  isFavorite(job: Job): boolean {
    return this.favoriteJobs.some(fav => fav.id === job.id);
  }
}
