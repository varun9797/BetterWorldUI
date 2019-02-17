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
  showList;
  showSpinner;
  buttonClickObj={
    society:false,
    building:false,
    flat:false,
    owner:false
  };
  constructor(private _activateroute: 
    ActivatedRoute,public _tokenService : TokenService, public router: Router, public _commonService:CommonService ) { }

  ngOnInit() {
    console.log("tttttttt",localStorage.getItem('TOKEN'));
    this._tokenService.isLogged().subscribe(flag=>{
      if(flag){
        this.isLogged = true; 
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
  changeButtonColor() {
    this._commonService.eventIsActiveType.subscribe((value) => {
      console.log("********",value)
      if(value=="owner") {
        this.buttonClickObj.society=true;
        this.buttonClickObj.building=true;
        this.buttonClickObj.flat = true;
        this.buttonClickObj.owner=true;
      } else if(value=="flat") {
        this.buttonClickObj.society=true;
        this.buttonClickObj.building=true;
        this.buttonClickObj.flat = true;
        this.buttonClickObj.owner=false;
      } else if(value=="building") {
        this.buttonClickObj.society=true;
        this.buttonClickObj.building=true;
        this.buttonClickObj.flat=false;
        this.buttonClickObj.owner=false;
      }
    },
      error => {
        console.log(error);
      });
  }


  ShowModal(type){
    this.showSpinner = true;
    console.log(type);
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
    } else if(type == 'buildings'){
      setTimeout(()=>{
        this.router.navigateByUrl('/societyManagment');
        this.modalVar = type; 
        this.showSpinner = false;
      },0)

    } else {
      setTimeout(()=>{
        //Handling color of button
        this.buttonClickObj.society=true;
        this.buttonClickObj.building=false;
        this.buttonClickObj.flat = false;
        this.buttonClickObj.owner=false;

        this.showList = true;
        this.modalVar = type; 
        this.showSpinner = false;
      },0)
    }   
  }
  
  logout(){
    localStorage.setItem('TOKEN', "");
    console.log("tttttttt",localStorage.getItem('TOKEN'));
    this.isLogged = false; 
    
    this.router.navigateByUrl('/societyManagment');
    window.location.reload();
  }
}
