import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { NavbarComponent } from './navbar.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonPwdModule } from '../common-pwd/common-pwd.module';
@NgModule({
    imports: [ RouterModule, CommonModule, NgbModule, FormsModule, ReactiveFormsModule, CommonPwdModule ],
    declarations: [ NavbarComponent ],
    exports: [ NavbarComponent ]
})

export class NavbarModule {}
