import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'app/auth/auth.service';
import { RouteService } from 'app/services/route.service';


export interface RouteInfo {
    path: string;
    title: string;
    icon: string;
    class: string;
}
//----------------------------------------------------------
//  RIMANE PER NAVBAR
export const ROUTES: RouteInfo[] = [
    { path: '/login',         title: 'Login',             icon: 'nc-key-25',       class: '' },
    { path: '/dashboard',     title: 'Dashboard',         icon: 'nc-bank',       class: '' },
    { path: '/icons',         title: 'Icons',             icon: 'nc-diamond',    class: '' },
    { path: '/maps',          title: 'Maps',              icon: 'nc-pin-3',      class: '' },
    { path: '/notifications', title: 'Notifications',     icon: 'nc-bell-55',    class: '' },
    { path: '/user',          title: 'User Profile',      icon: 'nc-single-02',  class: '' },
    { path: '/table',         title: 'Table List',        icon: 'nc-tile-56',    class: '' },
    { path: '/typography',    title: 'Typography',        icon: 'nc-caps-small', class: '' },
    { path: '/upgrade',       title: 'Upgrade to PRO',    icon: 'nc-spaceship',  class: 'active-pro' },
];
//----------------------------------------------------------
declare const $: any;
@Component({
    moduleId: module.id,
    selector: 'sidebar-cmp',
    templateUrl: 'sidebar.component.html',
})

export class SidebarComponent implements OnInit {
    /*
    public menuItems: any[];
    ngOnInit() {
        this.menuItems = ROUTES.filter(menuItem => menuItem);
    }
    */

   menuItems: any[];
   //userName:User;
 
   constructor(private routeService: RouteService, private router:Router, private authService:AuthService) { }
 
   ngOnInit() {
     this.menuItems = this.routeService.getRoutes();
     //this.userName= JSON.parse(localStorage.getItem(AppConstants.LOGIN_STORAGE));
   }
 
   isMobileMenu() {
       if ($(window).width() > 991) {
           return false;
       }
       return true;
   };
 
 
  
 }
 

