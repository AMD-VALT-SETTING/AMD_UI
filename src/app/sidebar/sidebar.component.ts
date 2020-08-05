import { Component, OnInit } from '@angular/core';
import { RouteService } from 'app/services/route.service';

declare const $: any;
@Component({
    moduleId: module.id,
    selector: 'sidebar-cmp',
    templateUrl: 'sidebar.component.html',
})

export class SidebarComponent implements OnInit {

   menuItems: any[];

   constructor(private routeService: RouteService) { }

   ngOnInit() {
     this.menuItems = this.routeService.getRoutes();
   }

   isMobileMenu() {
       if ($(window).width() > 991) {
           return false;
       }
       return true;
   };
 }
