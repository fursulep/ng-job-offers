import { Component } from '@angular/core';
import { Job } from '../models/job-model';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';


@Component({
  selector: 'app-favorite-list',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './favorite-list.component.html',
  styleUrl: './favorite-list.component.css'
})
export class FavoriteListComponent {
  favoriteJobs: Job[] = [];

  ngOnInit(): void {
    this.favoriteJobs = JSON.parse(localStorage.getItem('favorites') || '[]');
  }

  
toggleFavorite(job: Job): void {
  const index = this.favoriteJobs.findIndex(j => j.id === job.id);
  if (index === -1) {
    this.favoriteJobs.push(job);
  } else {
    this.favoriteJobs.splice(index, 1);
  }
  localStorage.setItem('favorites', JSON.stringify(this.favoriteJobs));
}
}
