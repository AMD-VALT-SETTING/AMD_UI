import { Component, OnInit, OnDestroy } from '@angular/core';
import { DashboardService } from '../dashboard.service';
import { Allarms } from '../model/Allarms';
import { Observable, Subscription, interval } from 'rxjs';

@Component({
  selector: 'app-allarms',
  templateUrl: './allarms.component.html',
  styleUrls: ['./allarms.component.css']
})
export class AllarmsComponent implements OnInit, OnDestroy {

  allarms : Array<Allarms>;
  private sub: Subscription;
  

   constructor(private dashboardService: DashboardService) { }

  ngOnInit(): void {
    //this.loadAllarms();
    
    this.sub = interval(120000)
      .subscribe((val) => {
        console.log('refresh  allarms table called');
        console.log(val);

        //this.loadAllarms();
      });
  }

  loadAllarms() {
    this.dashboardService.getDataAllarms().subscribe(res => {
      this.allarms = res;
    });
  
}

Allarms:[]
user = [
  { idAllarm: 'XY-0928733', date: '23/05/2015', time: '10:30',allarmType:'Caduta',user:'Mario',alias:'MarioLavoro',phone:36748987,position:''  },
  { idAllarm: 'ZA-0828453', date: '18/04/2017', time: '12:30',allarmType:'Immobilità',user:'Paolo',alias:'PaoloUtente',phone:32748977,position:''  },
  { idAllarm: 'WY-0768987', date: '06/04/2009', time: '11:30',allarmType:'Schianto',user:'Andrea',alias:'And85',phone:36148387,position:''  },
  { idAllarm: 'QP-0967453', date: '14/09/2020', time: '14:30',allarmType:'Caduta',user:'Giorgio',alias:'Super',phone:31728989,position:''  },
];

ngOnDestroy() {
  this.sub.unsubscribe();
}

}