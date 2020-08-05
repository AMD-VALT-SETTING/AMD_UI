import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { AdminLayoutRoutes } from './admin-layout.routing';

import { DashboardComponent }       from '../../pages/dashboard/dashboard.component';
import { UserComponent }            from '../../pages/user/user.component';
import { TableComponent }           from '../../pages/table/table.component';
import { TypographyComponent }      from '../../pages/typography/typography.component';
import { IconsComponent }           from '../../pages/icons/icons.component';
import { MapsComponent }            from '../../pages/maps/maps.component';
import { NotificationsComponent }   from '../../pages/notifications/notifications.component';
import { UpgradeComponent }         from '../../pages/upgrade/upgrade.component';


import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { PieTableComponent } from 'app/pages/dashboard/pie-table/pie-table.component';

import { BarChartComponent } from 'app/pages/dashboard/bar-chart/bar-chart.component';

import { AllarmsComponent } from 'app/pages/dashboard/allarms/allarms.component';
import { UsersAPPComponent } from 'app/pages/users-app/users-app.component';
import { LicenseComponent } from 'app/pages/license/license.component';
import { MobileModelsConfigurationComponent } from 'app/pages/mobile-models-configuration/mobile-models-configuration.component';
import { MobModConfDetailComponent } from 'app/pages/mobile-models-configuration/mob-mod-conf-detail/mob-mod-conf-detail.component';




@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(AdminLayoutRoutes),
    FormsModule,
    NgbModule
    
  ],
  declarations: [
    DashboardComponent,
    UserComponent,
    TableComponent,
    UpgradeComponent,
    TypographyComponent,
    IconsComponent,
    MapsComponent,
    NotificationsComponent,
    PieTableComponent,
    UsersAPPComponent,
    UsersAPPComponent,
    MobileModelsConfigurationComponent,
    MobModConfDetailComponent, 
    BarChartComponent,
    LicenseComponent,
    AllarmsComponent
    
  ]
})

export class AdminLayoutModule {}
