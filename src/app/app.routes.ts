import { Routes } from '@angular/router';
import { JobListComponent } from './job-list/job-list.component';
import { FavoriteListComponent } from './favorite-list/favorite-list.component';
import { JobDetailComponent } from './job-detail/job-detail.component';

export const routes: Routes = [
  { path: 'jobs', component: JobListComponent },
  { path: 'jobs/:jobId', component: JobDetailComponent },
  { path: 'favorites', component: FavoriteListComponent },
  { path: '', redirectTo: '/jobs', pathMatch: 'full' },
];
