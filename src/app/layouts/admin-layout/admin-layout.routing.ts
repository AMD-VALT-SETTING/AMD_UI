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

export const AdminLayoutRoutes: Routes = [
    {
        path: 'dashboard', component: DashboardComponent,
        canActivate: [AuthGuardService]
    },
    {
        path: 'user', component: UserComponent,
        canActivate: [AuthGuardService]
    },
    {
        path: 'table', component: TableComponent,
        canActivate: [AuthGuardService]
    },
    {
        path: 'typography', component: TypographyComponent,
        canActivate: [AuthGuardService]
    },
    {
        path: 'icons', component: IconsComponent,
        canActivate: [AuthGuardService]
    },
    {
        path: 'maps', component: MapsComponent,
        canActivate: [AuthGuardService]
    },
    {
        path: 'notifications', component: NotificationsComponent,
        canActivate: [AuthGuardService]
    },
    {
        path: 'upgrade', component: UpgradeComponent,
        canActivate: [AuthGuardService]
    }
];
