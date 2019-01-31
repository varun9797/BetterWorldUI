import { Component, OnInit } from '@angular/core';
import { RegisterService } from './../register.service';
import { from } from 'rxjs';

@Component({
  selector: 'app-society-reg',
  templateUrl: './society-reg.component.html',
  styleUrls: ['./society-reg.component.css']
})
export class SocietyRegComponent implements OnInit {

  pageTitle = "Society Register";
  pageDesc = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.";

  societyreg={
    societyName:"",
    address:"",
    pincode:""
  }

  constructor(public _registerservice : RegisterService) { }

  ngOnInit() {
  }

  onSubmit(){
    console.log("**Before calling api**",this.societyreg);
    this._registerservice.registerSociety(this.societyreg).subscribe((data)=> {
      console.log("**response from api**",data);
      alert("society info added sucessfully")
    });
  }

}
