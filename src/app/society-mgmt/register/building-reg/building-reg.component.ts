import { Component, OnInit } from '@angular/core';
import { UserService } from './../../services/user.service';
import { RegisterService } from './../register.service'

@Component({
  selector: 'app-building-reg',
  templateUrl: './building-reg.component.html',
  styleUrls: ['./building-reg.component.css']
})
export class BuildingRegComponent implements OnInit {

  pageTitle3 = "Building Register";
  pageDesc3 = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.";

  societyList;

  buildingreg={
    societyid:"",
    buildingName:""
  }

  constructor(public _userService : UserService, public _registerservice : RegisterService) { }

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
    console.log("**on submit method**",this.buildingreg);
    this._registerservice.registerBuilding(this.buildingreg).subscribe((data)=> {
      console.log("api reponse is",data);
      alert("building info added succesfully");
    });
  }

}
