import { Routes } from '@angular/router';

import { DashboardComponent } from '../../pages/dashboard/dashboard.component';
import { UserComponent } from '../../pages/user/user.component';
import { TableComponent } from '../../pages/table/table.component';
import { TypographyComponent } from '../../pages/typography/typography.component';
import { IconsComponent } from '../../pages/icons/icons.component';
import { MapsComponent } from '../../pages/maps/maps.component';
import { NotificationsComponent } from '../../pages/notifications/notifications.component';
import { UpgradeComponent } from '../../pages/upgrade/upgrade.component';
import { AuthGuardService } from 'app/auth/auth-guard.service';
import { RoleGuardService } from 'app/auth/role-guard.service';
import { PieTableComponent } from 'app/pages/dashboard/pie-table/pie-table.component';
import { UsersAPPComponent } from 'app/pages/users-app/users-app.component';
import { UsersWebComponent } from 'app/pages/users-web/users-web.component';
import { LicenseComponent } from 'app/pages/license/license.component';
import { MobileModelsConfigurationComponent } from 'app/pages/mobile-models-configuration/mobile-models-configuration.component';


export const AdminLayoutRoutes: Routes = [
    /*{
        path: 'dashboard', component: DashboardComponent,
        canActivate: [AuthGuardService]
    },*/
    {
        path: 'dashboard', component: PieTableComponent,
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
    }, {
        path: 'mobileModelsConfiguration', component: MobileModelsConfigurationComponent,
        canActivate: [AuthGuardService, RoleGuardService]
    },
   

    
    {
        path: 'user', component: UserComponent,
        canActivate: [AuthGuardService, RoleGuardService]
    },

    {
        path: 'table', component: TableComponent,
        canActivate: [AuthGuardService, RoleGuardService]
    },
    {
        path: 'typography', component: TypographyComponent,
        canActivate: [AuthGuardService, RoleGuardService]
    },
    {
        path: 'icons', component: IconsComponent,
        canActivate: [AuthGuardService, RoleGuardService]
    },
    {
        path: 'maps', component: MapsComponent,
        canActivate: [AuthGuardService, RoleGuardService]
    },
    {
        path: 'notifications', component: NotificationsComponent,
        canActivate: [AuthGuardService, RoleGuardService]
    },
    {
        path: 'upgrade', component: UpgradeComponent,
        canActivate: [AuthGuardService, RoleGuardService]
    }
];
