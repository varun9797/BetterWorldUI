import { Component, OnInit } from '@angular/core';
import {Location} from '@angular/common';
import {CommonService} from '../../services/common.service';
import {UserService} from '../../services/user.service'
import {constant} from '../../constant/constant'
@Component({
  selector: 'app-monthly-reciept',
  templateUrl: './monthly-reciept.component.html',
  styleUrls: ['./monthly-reciept.component.css']
})
export class MonthlyRecieptComponent implements OnInit {
  societyReciept={
    buildingMaintenance:0,
	  parkingMaintenance:0,
	  municipalDue:0,
	  sinkingFund:0,
	  electricityCharge:0,
	  updatedBy:0,
    id:0,
    societyId:null
  }
  societyId;
  disableField = true;

  constructor(public _location :Location, public _commonService:CommonService, public _userService:UserService) { 

    
  }

  ngOnInit() {
    this.createOrUpdateReciept();
  }
  goBack(){
    this._location.back();
  }
  createOrUpdateReciept(){
    this.disableField=true;
    this._commonService.loginUserInfo.subscribe((user)=>{
      if( user && user.data && (user.data.type == constant.SOCIETY_ADMIN || user.data.type == constant.PRINCIPAL_ADMIN )){
        this.disableField=false;
      }
      if(user && user.data){
        this.societyId = 
        this.societyReciept.updatedBy = user.data.ownerid;
        this._userService.getExistingRecipt(this.societyReciept.updatedBy).subscribe((response:any)=>{
          console.log("get existing!!!",response);
          let obj = response.dbResponse[0];
          if(obj) {
            this.societyReciept.buildingMaintenance = obj.buildingMaintenance;
            this.societyReciept.parkingMaintenance = obj.parkingMaintenance;
            this.societyReciept.municipalDue = obj.municipalDue;
            this.societyReciept.sinkingFund = obj.sinkingFund;
            this.societyReciept.electricityCharge = obj.electricityCharge;
            this.societyReciept.id = obj.id;  
          }
        })
      }
      
    })
  }
  onSubmit(){
    this.societyReciept.societyId=
    this._userService.createRecipt(this.societyReciept).subscribe((response)=>{
        console.log("response is", response);
        alert("successfully saved your form");
    }, error=>{
      console.log("unable to submit form",error);
      alert("unable to submit form")
    })
  }

}
