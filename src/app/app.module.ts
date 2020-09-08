import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ToastrModule } from 'ngx-toastr';

import { SidebarModule } from './sidebar/sidebar.module';
import { FooterModule } from './shared/footer/footer.module';
import { NavbarModule} from './shared/navbar/navbar.module';
import { FixedPluginModule} from './shared/fixedplugin/fixedplugin.module';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app.routing';
import { AdminLayoutComponent } from './layouts/admin-layout/admin-layout.component';
import { PublicLayoutComponent } from './layouts/public-layout/public-layout.component';
import { LoginResult } from './auth/model/LoginResult';
import { JwtModule, JWT_OPTIONS } from '@auth0/angular-jwt';
import { AppConstants } from './app.constants';
import { HttpClientModule, HttpHeaders } from '@angular/common/http';
import { ConfirmDeleteUserComponent } from './pages/users-web/modals/confirm-delete-user/confirm-delete-user.component';

//let head=new HttpHeaders({'token': tokenGetter()});

export function tokenGetter() {
  const loginStored: LoginResult = JSON.parse(localStorage.getItem(AppConstants.LOGIN_STORAGE));
  if (loginStored !== undefined && loginStored !== null) {
    return loginStored.token;
  }
}

@NgModule({
  declarations: [
    AppComponent,
    AdminLayoutComponent,
    PublicLayoutComponent,
   
 
    
    
    
  ],
  
  imports: [
    BrowserAnimationsModule,
    RouterModule,
    AppRoutingModule,
    SidebarModule,
    NavbarModule,
    HttpClientModule,
    ToastrModule.forRoot(),
    FooterModule,
    FixedPluginModule,
    JwtModule.forRoot({
    config: {
      tokenGetter,
      headerName: `${AppConstants.HEADER_TOKEN}`,
      authScheme: '',
      whitelistedDomains: [`${AppConstants.DOMAIN}`, ]
    }
    
  })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
