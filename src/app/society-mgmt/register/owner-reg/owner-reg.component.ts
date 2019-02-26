import { Component, OnInit } from '@angular/core';
import { RegisterService } from './../register.service';
import { UserService } from './../../services/user.service';

@Component({
  selector: 'app-owner-reg',
  templateUrl: './owner-reg.component.html',
  styleUrls: ['./owner-reg.component.css']
})
export class OwnerRegComponent implements OnInit {

  pageTitle1 = "Owner Register";
  pageDesc1 = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.";
  societyList;
  ownerreg={
    ownerName:"",
    email:"",
    phoneNumber:"",
    age:"",
    gender:1,
    type:3,
    password:"",
    flatName:"",
    buildingName:"",
    societyId:""
  }
  isSocietyAdmin:false;
  constructor(public _userService : UserService,public _registerservice : RegisterService) { }

  ngOnInit() {
    this._userService.getSociety().subscribe((data) => {
      this.societyList = data.dbResponse;
    },
      error => {
        console.log(error);
        this.societyList = error.message;
      });
  }

  checkAdminFlag(isAdminFlag){
    isAdminFlag?this.ownerreg.type=2:this.ownerreg.type=3;
  }

  onSubmit(){
    console.log(this.ownerreg);
    this._registerservice.registerOwner(this.ownerreg).subscribe((data)=> {
      console.log("data is",data);
      alert("owner info added sucessfully");
    });
  }


}
