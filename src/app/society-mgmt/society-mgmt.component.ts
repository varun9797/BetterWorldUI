import { Component, OnInit } from '@angular/core';
import { TokenService } from './services/token.service'
import { Router } from '@angular/router';

@Component({
  selector: 'app-society-mgmt',
  templateUrl: './society-mgmt.component.html',
  styleUrls: ['./society-mgmt.component.css']
})
export class SocietyMgmtComponent implements OnInit {
  modalVar;
  isLogged = false;
  constructor(public _tokenService : TokenService, public router: Router ) { }

  ngOnInit() {
    console.log("tttttttt",localStorage.getItem('TOKEN'));
    this._tokenService.isLogged().subscribe(flag=>{
      if(flag){
        this.isLogged = true; 
      } else {
        this.isLogged = false; 
      }
    });
    
  }
  
  ShowModal(type){
    console.log(type);
    if(type == 'flats' || type == 'owners') {
      this._tokenService.isLogged().subscribe(flag=>{
        if(flag){
          //this.isLogged = true; 
          this.modalVar = type;
        } else {
          alert("Please login first");
          this.router.navigateByUrl('/login');
        }
      });
    } else {
      this.modalVar = type; 
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
