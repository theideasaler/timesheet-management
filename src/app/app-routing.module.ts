import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from './auth/guards/auth.guard';

const routes: Routes = [
  { path: '', redirectTo: '/timesheets', pathMatch: 'full' },
  {
    path: 'timesheets',
    loadChildren: () =>
      import('./timesheets/timesheets.module').then((m) => m.TimesheetsModule),
    canActivate: [AuthGuard],
  },
  {
    path: '**',
    redirectTo: '/',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
