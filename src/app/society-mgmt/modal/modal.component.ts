import { Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import { UserService } from "../services/user.service";
import { CommonService } from "../services/common.service";
import { NeedAuthGuard } from "../services/NeedAuthGuard";
import { Router } from '@angular/router';
import {FormControl} from '@angular/forms';
@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent implements OnInit {
  societyList;
  sid;
  buildingName;
  buildingList;
  flatList;
  buildingObj;
  societyFormCtrl = new FormControl();
  buildingFormCtrl = new FormControl();
  ownerFormCtrl = new FormControl();
  @Input()
  modalName : string;

  //@Output()
  //eventEm = new EventEmitter();
  
  constructor(public _userService: UserService, public router: Router, 
    public _needAuthGuard : NeedAuthGuard, public _commonService:CommonService) { 
    
  }

  ngOnInit() {
    this._userService.getSociety().subscribe((data) => {
      this.societyList = data.dbResponse;
    },
      error => {
        console.log(error);
        this.societyList = error.message;
      });

      this.societyFormCtrl.valueChanges.subscribe(societyid => {
        console.log("on changes....",societyid);
        this.sid=societyid;
        this._userService.getBuilding(societyid).subscribe((data) => {
          this.buildingList = data.dbResponse;
        },
          error => {
            console.log(error);
            this.buildingList = error.message;
          });
      });
      this.buildingFormCtrl.valueChanges.subscribe(buildingName => {
        console.log("on changes....",buildingName);
        this.buildingName=buildingName;
        this._userService.getFlatList(this.sid,buildingName).subscribe((data) => {
          this.flatList = data.dbResponse;
        },
          error => {
            console.log(error);
            this.flatList = error.message;
          });
      })
    
  }

  // onBuildingChange(buildingId) {
  //   this._userService.getFlatList(buildingId).subscribe((data) => {
  //     this.flatList = data.dbResponse;
  //   },
  //     error => {
  //       console.log(error);
  //       this.flatList = error.message;
  //     });
  // }

  onSubmit(){
    console.log(this.modalName);
    if(this.modalName=='buildings') {
      this.router.navigate(['societyManagment',this.sid,'buildings']); 
      this._commonService.emitShowListEvent(true);
    }
    else if(this.modalName=='flats') {
      this.router.navigate(['societyManagment',this.sid,'buildings',this.buildingName,'flats']);
      this._commonService.emitShowListEvent(true);
     }
     else if(this.modalName=='owners') {   
        this.router.navigate(['societyManagment','owners']); 
        this._commonService.emitShowListEvent(true);
     }  
  }
}
