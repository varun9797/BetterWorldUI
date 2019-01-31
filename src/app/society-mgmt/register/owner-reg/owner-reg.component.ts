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
    gender:"",
    isAdmin:"",
    password:"",
    flatName:"",
    buildingName:"",
    societyId:""
  }

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

  onSubmit(){
    console.log(this.ownerreg);
    this._registerservice.registerOwner(this.ownerreg).subscribe((data)=> {
      console.log("data is",data);
      alert("owner info added sucessfully");
    });
  }


}
