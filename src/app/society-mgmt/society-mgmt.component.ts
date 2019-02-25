import { Component, OnInit } from '@angular/core';
import { TokenService } from './services/token.service'
import { CommonService } from './services/common.service'
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-society-mgmt',
  templateUrl: './society-mgmt.component.html',
  styleUrls: ['./society-mgmt.component.css']
})
export class SocietyMgmtComponent implements OnInit {
  modalVar;
  isLogged = false;
  showList=true;
  showSpinner;
  progressPercent =0;
  buttonClickObj={
    society:false,
    building:false,
    flat:false,
    owner:false
  };
  loginUserInfo = {
    name:"",
    id:"",
    email:"",
    phone:""
  }

  constructor(private _activateroute: 
    ActivatedRoute,public _tokenService : TokenService, public router: Router, public _commonService:CommonService ) { }

  ngOnInit() {
    console.log("tttttttt",localStorage.getItem('TOKEN'));
    this._tokenService.isLogged().subscribe(flag=>{
      if(flag){
        this.isLogged = true; 
        this.getLoginUserData();
      } else {
        this.isLogged = false; 
      }
    });
    
    this._commonService.eventShowList.subscribe((showEvent)=>{
        if(showEvent) {
            this.showList = true;
        } else {
          this.showList = false;
        }
    })

    this.changeButtonColor();
    
  }

  getLoginUserData(){
    this._commonService.loginUserInfo.subscribe((userInfo)=>{
      this.loginUserInfo.name = userInfo.data.ownername;
      this.loginUserInfo.id = userInfo.data.ownerid;
      this.loginUserInfo.phone = userInfo.data.phoneNumber;
      this.loginUserInfo.email = userInfo.data.email;
    })
  }

  changeButtonColor() {
    this._commonService.eventIsActiveType.subscribe((value) => {
      if(value=="owners") {
        this.enableFields(true, true,true,true);
      } else if(value=="flats") {
        this.enableFields(true, true,true);
      } else if(value=="buildings") {
        this.enableFields(true, true);
      } else {
        this.enableFields(true);
      }
    },
      error => {
        console.log(error);
      });
  }


  ShowModal(type){
    this.showSpinner = true;
    if(type == 'flats' || type == 'owners') {
      this._tokenService.isLogged().subscribe(flag=>{
        if(flag){
          this.router.navigateByUrl('/societyManagment');
          this.modalVar = type;
          this.showSpinner = false;
         // this.showList = false;
        } else {
          this.showList = false;
          alert("Please login first");
          this.router.navigateByUrl('/login');
          this.showSpinner = false;
        }
      });
      if(type == 'flats'){
        this.enableFields(true, true,true);
      } else {
        this.enableFields(true, true,true,true);
      }
    } else if(type == 'buildings'){
      this.enableFields(true, true);
      setTimeout(()=>{
        this.router.navigateByUrl('/societyManagment');
        this.modalVar = type; 
        this.showSpinner = false;
      },0)

    } else {
      setTimeout(()=>{
        this.progressPercent=25;
        this.enableFields(true);
        this.showList = true;
        this.modalVar = type; 
        this.showSpinner = false;
      },0)
    }   
  }

  enableFields(society=false,building=false,flat=false,owner=false){
    this.progressPercent = owner? 100:(flat? 75:building? 50: society? 25:0);
    this.buttonClickObj.society=society;
    this.buttonClickObj.building=building;
    this.buttonClickObj.flat = flat;
    this.buttonClickObj.owner=owner;
  }
  
  logout(){
    localStorage.setItem('TOKEN', "");
    this.isLogged = false; 
    this.router.navigateByUrl('/societyManagment');
    window.location.reload();
  }
}
