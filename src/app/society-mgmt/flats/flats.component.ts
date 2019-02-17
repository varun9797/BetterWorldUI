import { Component, OnInit } from '@angular/core';
import { UserService } from "../services/user.service"
import { ParamMap, Router, ActivatedRoute } from '@angular/router';
import { OnChanges } from '@angular/core';
import { TokenService } from '../services/token.service'
import { CommonService } from '../services/common.service'

@Component({
  selector: 'app-flats',
  templateUrl: './flats.component.html',
  styleUrls: ['./flats.component.css']
})
export class FlatsComponent implements OnInit, OnChanges {
  
  society; flatList;
  isClosedValue = false;
  model: any = {};
  errmsg;
  payAmount;
  societyid;buildingName; societyInfo: any;responseData:any;
  flatObj:any;
  constructor(public _userService: UserService,
     public router: Router, private route: 
     ActivatedRoute, public _tokenService: TokenService, public _commonService:CommonService) { }

  ngOnInit() {
    this.getflatList();
  }
  ngOnChanges() {
    this.getflatList();
  }
  getflatList() {
    this.route.params.subscribe((value) => {
      this.societyid = value["societyid"]; // get param
      this.buildingName = value["buildingName"]; // get param
      this._userService.getFlatList(this.societyid, this.buildingName).subscribe((data) => {
        this.flatList = data.dbResponse;
        this._commonService.emitActiveType('flat');
      },
      error => {
        console.log(error);
        this.society = error.message;
      });

      this._userService.getSocietyInfo(this.societyid).subscribe((data) => {
        this.societyInfo = data.dbResponse;
      },
        error => {
          console.log(error);
          this.society = error.message;
        });
    });
  }
  paymentMethod(payAmount){
    this.flatObj.pendingPayment = payAmount;
    console.log(payAmount , this.flatObj.pendingPayment);
    console.log(this.flatObj);
    
    this._userService.putFlatPayment(this.flatObj).subscribe(
      (data) => {
      this.responseData = data.dbResponse;
      },
      error => {
        console.log(error);
        this.errmsg=error.message;
        alert("Please login first"+JSON.stringify(error));
      },
      () => {
        this.isClosedValue = true
        this.getflatList();
        alert("Payment successfully updated!");
      });
  }
  paymentID(flatObj){
    this.flatObj =flatObj;
  }
  showCalender(flatId){
    this._userService.getFlatPaymentHistory(flatId).subscribe((data) => {
      console.log(data.dbResponse);
      this._commonService.emitCalanderData(data.dbResponse);
    },
      error => {
        console.log(error);
        this.society = error.message;
      });
  }
  showOwner(societyid,buildingName,flatId){
    this.router.navigate(['societyManagment',societyid,'buildings',buildingName,"flats",flatId,"owner"]); 
    this._commonService.emitShowListEvent(true);
  }
}
