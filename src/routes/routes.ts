import { Routes, UrlMatchResult, UrlSegment } from '@angular/router';

/**
 *  Provided by `provideRouter` in `main.ts` file.
 */
export const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'home',
  },
  {
    path: 'home',
    loadComponent: () =>
      import('./home/home.component').then((mod) => mod.HomeComponent),
  },
];
