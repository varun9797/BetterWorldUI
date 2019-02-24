import { Component, OnInit, Input, Output, EventEmitter,Inject } from '@angular/core';
import { UserService } from "../../services/user.service"

@Component({
  selector: 'app-pendingpayment',
  templateUrl: './pendingpayment.component.html',
  styleUrls: ['./pendingpayment.component.css']
})
export class PendingpaymentComponent implements OnInit {
  total: number;
  isEditable = true;
  paymentStructure = {
    dues:0,
    funds:0,
    maintenance:0,
    parking:0,
    total:0
  }
  @Input()
  pendingPaymentFlatObj;
  @Output()
  paidAmount = new EventEmitter();

  constructor(public _userService: UserService) { 
    console.log("constructor..........",this.pendingPaymentFlatObj);
  }


  calculateTotal() {
    this.total = this.paymentStructure.total+this.pendingPaymentFlatObj.pendingpayment;
    console.log(this.total)
  }

  payment(amount) {
    this.paidAmount.emit(amount);
  }

  ngOnInit() {
    console.log("payment..........",this.pendingPaymentFlatObj);
    const getCurrentPaymentStructure = "get_current_payment_structure()"
    this._userService.callStoredProc(getCurrentPaymentStructure).subscribe((data) => {
      console.log(data.dbResponse[0][0]);
      this.paymentStructure.dues=data.dbResponse[0][0].municipalDue;
      this.paymentStructure.funds=data.dbResponse[0][0].sinkingFund;
      this.paymentStructure.maintenance=data.dbResponse[0][0].buildingMaintenance;
      this.paymentStructure.parking=data.dbResponse[0][0].parkingMaintenance;
      this.paymentStructure.total = this.paymentStructure.dues+ this.paymentStructure.funds+ this.paymentStructure.maintenance+this.paymentStructure.parking;
    },
      error => {
        console.log(error);
      });
  }

}
