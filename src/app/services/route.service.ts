import { Injectable } from '@angular/core';
import { AppConstants } from 'app/app.constants';
import { LoggedUser } from 'app/model/LoggedUser';


declare interface RouteInfo {
  path: string;
  title: string;
  icon: string;
  class: string;
}

export const ADMIN_ROUTES: RouteInfo[] = [
  
  
  { path: '/usersApp', title: 'UsersApp', icon: 'nc-pin-3', class: '' },
  { path: '/usersWeb', title: 'UsersWeb', icon: 'nc-pin-3', class: '' },
  { path: '/mobileModelsConfiguration', title: 'Mobile Configuration', icon: 'nc-pin-3', class: '' },
  
];

export const USER_ROUTES: RouteInfo[] = [
{ path: '/dashboard', title: 'Dashboard',icon: 'nc-chart-pie-36',class: '' },
{ path: '/license', title: 'License', icon: 'nc-pin-3', class: '' },


];

@Injectable({
  providedIn: 'root'
})
export class RouteService {
  menuItems: any[];

  constructor() { }

  getRoutes() {
    const loggedUser: LoggedUser = JSON.parse(localStorage.getItem(AppConstants.LOGIN_STORAGE));
    if (loggedUser !== undefined && loggedUser !== null) {
      const isAdminUser: boolean = loggedUser.authorities.includes('300');
      if (isAdminUser) {
        this.menuItems = USER_ROUTES.concat(ADMIN_ROUTES).filter(menuItem => menuItem);
      } else {
        this.menuItems = USER_ROUTES.filter(menuItem => menuItem);
      }
    }
    return this.menuItems;
  }
}





