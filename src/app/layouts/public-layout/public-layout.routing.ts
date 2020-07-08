import { Routes } from '@angular/router';

import { LoginComponent } from '../../pages/login/login.component';

export const PublicLayoutRoutes: Routes = [
    { path: '',      component: LoginComponent }
];
