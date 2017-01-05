import { Routes, RouterModule }  from '@angular/router';
import { Pages } from './pages.component';

const routes: Routes = [
  {
    path: 'login',
    loadChildren: () => System.import('./login/login.module')
  },
    {
    path: 'signup',
    loadChildren: () => System.import('./signup/signup.module')
  },
  {
  path: 'dashboard',
  loadChildren: () => System.import('./dashboard/dashboard.module')
}


];

export const routing = RouterModule.forChild(routes);
