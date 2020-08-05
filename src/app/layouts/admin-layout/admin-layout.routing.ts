import { Routes } from '@angular/router';

import { DashboardComponent } from '../../pages/dashboard/dashboard.component';
import { AuthGuardService } from 'app/auth/auth-guard.service';
import { RoleGuardService } from 'app/auth/role-guard.service';
import { UsersAPPComponent } from 'app/pages/users-app/users-app.component';
import { UsersWebComponent } from 'app/pages/users-web/users-web.component';
import { LicenseComponent } from 'app/pages/license/license.component';
import { MobileModelsConfigurationComponent } from 'app/pages/mobile-models-configuration/mobile-models-configuration.component';

export const AdminLayoutRoutes: Routes = [
    {
        path: 'dashboard', component: DashboardComponent,
        canActivate: [AuthGuardService]
    },
    {
        path: 'license', component: LicenseComponent,
        canActivate: [AuthGuardService]
    },
    {
        path: 'usersApp', component: UsersAPPComponent,
        canActivate: [AuthGuardService, RoleGuardService]
    },
    {
        path: 'usersWeb', component: UsersWebComponent,
        canActivate: [AuthGuardService, RoleGuardService]
    },
    {
        path: 'mobileConfig', component: MobileModelsConfigurationComponent,
        canActivate: [AuthGuardService, RoleGuardService]
    }
];
