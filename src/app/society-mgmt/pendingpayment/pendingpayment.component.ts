import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pendingpayment',
  templateUrl: './pendingpayment.component.html',
  styleUrls: ['./pendingpayment.component.css']
})
export class PendingpaymentComponent implements OnInit {

  dues: number = 400;
  funds: number = 200;
  maintenance: number = 200;
  parking: number = 200;
  total: number = 1000;
  payamt: number;
  pendingamt: number = 0;

      calculate(){
        this.total = this.dues + this.funds + this.maintenance + this.parking;
        console.log(this.total)
      }

      pendingpayment(){
        this.pendingamt = this.total - this.payamt;
        console.log(this.pendingamt);
      }


  constructor() { }

  ngOnInit() {
   
  }

}
