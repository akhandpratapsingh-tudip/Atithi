import { Routes, RouterModule }  from '@angular/router';

import { SignUp } from './signup.component';

const routes: Routes = [
  {
    path: '',
    component: SignUp
  }
];

export const routing = RouterModule.forChild(routes);
