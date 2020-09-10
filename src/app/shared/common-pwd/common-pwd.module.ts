import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ResetPwdComponent } from 'app/pages/users-web/modals/reset-pwd/reset-pwd.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [ResetPwdComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],
  exports: [ResetPwdComponent]
})
export class CommonPwdModule { }
