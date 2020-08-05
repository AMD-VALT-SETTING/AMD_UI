import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { PublicLayoutRoutes } from './public-layout.routing';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { LoginComponent } from '../../pages/login/login.component';

@NgModule({
  imports: [
  CommonModule,
    RouterModule.forChild(PublicLayoutRoutes),
    FormsModule,
    NgbModule
  ],
  declarations: [
    LoginComponent
  ]
})

export class PublicLayoutModule {}
