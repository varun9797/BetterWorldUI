import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-register-member',
  templateUrl: './register-member.component.html',
  styleUrls: ['./register-member.component.css']
})
export class RegisterMemberComponent {

  model: any = {};
  StoreArray:Array<any> = [];
  Debitcard:boolean = false;
  tenantDetails:boolean = false;
  
  pageTitle = "Register";
  pageDesc = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.";
  formLabelNames = {
    flatno: "Flat Number",
    ownerFname : "Owner First Name",
    ownerLname : "Owner Last Name",
    phone : "Phone Number",
    paymentmethod :"Payment Method",
    paymentmethodValue : ['Cash','Debit/Credit Card','Cheque'],
    paymentamount :"Payment amount",
    flatrented: "Flat Rented",
    rentedYes: "Yes",
    rentedNo: "No",
    memPswd: "Password",
    memConfrmPswd: "Confirm Password",
  }

  onSubmit() {   
    this.StoreArray.push(JSON.stringify(this.model));
  }

  clickCard(){
    this.Debitcard=!this.Debitcard
  }
  
  radioChange($event) {
    var RadioValue = $event.target.value;
    if(RadioValue=="Yes")
     this.tenantDetails=true;
    else 
      this.tenantDetails=false;
  }
}
