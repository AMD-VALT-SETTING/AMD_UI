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


export const AdminLayoutRoutes: Routes = [
    {
        path: 'dashboard', component: DashboardComponent,
        canActivate: [AuthGuardService]
    },
    
    {
        path: 'user', component: UserComponent,
        canActivate: [AuthGuardService, RoleGuardService] //, RoleGuardService
    },
    {
        path: 'table', component: TableComponent,
        canActivate: [AuthGuardService, RoleGuardService] //, RoleGuardService
    },
    {
        path: 'typography', component: TypographyComponent,
        canActivate: [AuthGuardService, RoleGuardService] //, RoleGuardService
    },
    {
        path: 'icons', component: IconsComponent,
        canActivate: [AuthGuardService, RoleGuardService] //, RoleGuardService
    },
    {
        path: 'maps', component: MapsComponent,
        canActivate: [AuthGuardService, RoleGuardService] //, RoleGuardService
    },
    {
        path: 'notifications', component: NotificationsComponent,
        canActivate: [AuthGuardService, RoleGuardService]  //, RoleGuardService
    }, 
    {
        path: 'upgrade', component: UpgradeComponent,
        canActivate: [AuthGuardService, RoleGuardService]  //, RoleGuardService
    }
];
