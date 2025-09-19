import { Component, OnInit } from '@angular/core';
import { PassengerService } from '../../services/passenger.service';
import { Ipass } from '../../models/passenger.interface';

@Component({
  selector: 'app-passenger-dashboard',
  templateUrl: './passenger-dashboard.component.html',
  styleUrls: ['./passenger-dashboard.component.scss']
})
export class PassengerDashboardComponent implements OnInit {
  passengerArray !: Array<Ipass>;
  checkedInCount !: number;

  constructor(private passService : PassengerService) { }

  getAllPass(){
  this.passService.fetchAllPassenger()
    .subscribe({
      next : data => {
        this.passengerArray = data;
        this.getCheckInCount();
      },
      error : err => console.log(err)
      
    })
  }

  getCheckInCount(){
    let filter = this.passengerArray.filter(p => p.checkedIn);
    this.checkedInCount = filter.length;
  }

  onEmitFlag(flag : boolean){
    this.getCheckInCount();
  }

  ngOnInit(): void {
    this.getAllPass();
  }

}
