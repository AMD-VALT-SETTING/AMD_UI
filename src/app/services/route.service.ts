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
  { path: '/maps', title: 'Maps', icon: 'nc-pin-3', class: '' },
  { path: '/notifications', title: 'Notifications', icon: 'nc-bell-55', class: '' },
  { path: '/user', title: 'User Profile', icon: 'nc-single-02', class: '' },
  { path: '/table', title: 'Table List', icon: 'nc-tile-56', class: '' },
  { path: '/typography', title: 'Typography', icon: 'nc-caps-small', class: '' },
  { path: '/upgrade', title: 'Upgrade to PRO', icon: 'nc-spaceship', class: 'active-pro' }
];

export const USER_ROUTES: RouteInfo[] = [
  { path: '/dashboard',     title: 'Dashboard',         icon: 'nc-chart-pie-36',       class: '' },
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
      const isAdminUser: boolean = loggedUser.authorities.includes('ADMIN');
      if (isAdminUser) {
        this.menuItems = USER_ROUTES.concat(ADMIN_ROUTES).filter(menuItem => menuItem);
      } else {
        this.menuItems = USER_ROUTES.filter(menuItem => menuItem);
      }
    }
    return this.menuItems;
  }
}





