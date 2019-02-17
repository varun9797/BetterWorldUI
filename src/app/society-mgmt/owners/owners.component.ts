import { Component, OnInit } from '@angular/core';
import { UserService } from "../services/user.service"
import { ParamMap, Router, ActivatedRoute } from '@angular/router';
import {CommonService} from './../services/common.service'

@Component({
  selector: 'app-owners',
  templateUrl: './owners.component.html',
  styleUrls: ['./owners.component.css']
})
export class OwnersComponent implements OnInit {
  ownerData;
  showSpinner;
  displayText= "";
  constructor(public _userService : UserService, public router: Router, private route: 
    ActivatedRoute, public _commonService:CommonService) { }

     ngOnInit() {
      this.getOwnerList();
    }
    ngOnChanges() {
      this.getOwnerList();
    }

  // getSelectedTypelist(){
  //   console.log();
  //  this._userService.getSelectedTypelist(this.societyIds, this.buildingNames, this.flatIds).subscribe((data)=> {
  //    console.log("data is",this.ownerData)
  //  });
  // }
  // listenEventFromModal(){
  //   this._commonService.eventOwnerRequestObj.subscribe((flatObj)=>{
  //     this._userService.getSelectedTypelist([flatObj.societyId],[flatObj.buildingName],flatObj.flatid).subscribe((data:any) => {
  //       this.ownerData = data.dbResponse[0];
  //       this._commonService.emitActiveType('owner');
  //     })
  //   });
  // }

  getOwnerList(){
    this.displayText= "";
    this.route.params.subscribe((value) => {
     let societyid = value["societyid"]? [value["societyid"]]:[]; // get param
      let buildingName = value["buildingName"] ? [value["buildingName"]]:[]; // get param
      let flatId = value["flatId"] ?[value["flatId"]]:[]; // get param
      this.showSpinner=true
      this.displayText= "";
        this._userService.getSelectedTypelist(societyid,buildingName,flatId).subscribe((data:any) => {
          this.showSpinner=false;
          this.ownerData = data.dbResponse[0];
          if(!(this.ownerData[0] && this.ownerData[0].idOwner)){
            this.displayText="No Record Found"
          }
          this._commonService.emitActiveType('owners');

        })
      
    });
  }

}
