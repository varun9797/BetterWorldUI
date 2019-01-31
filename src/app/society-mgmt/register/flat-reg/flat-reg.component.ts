import { Component, OnInit } from '@angular/core';
import { UserService } from './../../services/user.service';
import { RegisterService } from './../register.service'
  import { from } from 'rxjs';

@Component({
  selector: 'app-flat-reg',
  templateUrl: './flat-reg.component.html',
  styleUrls: ['./flat-reg.component.css']
})
export class FlatRegComponent implements OnInit {

  pageTitle2 = "Flat Register";
  pageDesc2 = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.";

  societyList;

  flatreg={
    flatName:"",
    buildingName:"",
    societyId:""
    //ownerid:"",
    //tenantid:""
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
    console.log("**on submit**",this.flatreg);
    this._registerservice.registerFlat(this.flatreg).subscribe((data)=> {
      console.log("**response from api**",data);
      alert("flat info submitted sucessfully");
    });
  }

}
