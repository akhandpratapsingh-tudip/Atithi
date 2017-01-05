import { Routes, RouterModule }  from '@angular/router';

import { dashboard } from './dashboard.component';

const routes: Routes = [
  {
    path: '',
    component: dashboard
  }
];

export const routing = RouterModule.forChild(routes);
