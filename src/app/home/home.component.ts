import { Component, OnInit } from '@angular/core';
import { TokenService } from './../society-mgmt/services/token.service';
import { CommonService } from '../society-mgmt/services/common.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  loginUserInfo = {
    name:"",
    id:"",
    email:"",
    phone:""
  }
  constructor(private _tokenService:TokenService, private _commonService:CommonService, public router: Router) { }

  ngOnInit() {
    this._tokenService.isLogged().subscribe(isValid => {
      this.getLoginUserData();
    })
  }

  getLoginUserData(){
    this._commonService.loginUserInfo.subscribe((userInfo)=>{
      this.loginUserInfo.name = userInfo.data.ownername;
      this.loginUserInfo.id = userInfo.data.ownerid;
      this.loginUserInfo.phone = userInfo.data.phoneNumber;
      this.loginUserInfo.email = userInfo.data.email;
    })
  }
  redirectToFlatPage(){
    if(this.loginUserInfo.id){
      this.router.navigate(['societyManagment','owners',this.loginUserInfo.id,'flats']);
    } else {
      this.router.navigate(['login']);
    }
  }

  logout(){
    localStorage.setItem('TOKEN', "");
    this.router.navigateByUrl('/home');
    window.location.reload();
  }
}
