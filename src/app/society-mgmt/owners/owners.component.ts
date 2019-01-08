import { Component, OnInit } from '@angular/core';
import { UserService } from "../services/user.service"
import { ParamMap, Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-owners',
  templateUrl: './owners.component.html',
  styleUrls: ['./owners.component.css']
})
export class OwnersComponent implements OnInit {
  ownerData;
  constructor(public _userService : UserService, public router: Router, private route: 
    ActivatedRoute) { }

  societyIds;
   buildingNames;
    flatIds;
    param1;
    param2;
    param3;
     model: any = {};

     ngOnInit() {
      this.getOwnerList();
    }
    ngOnChanges() {
      this.getOwnerList();
    }

  //getSelectedTypelist(){
    //console.log();
   // this._userService.getSelectedTypelist(this.societyIds, this.buildingNames, this.flatIds).subscribe((data)=> {
     // console.log("data is",this.ownerData)
   // });
  //}

  getOwnerList(){

    this.route.params.subscribe((value) => {
      this.param1 = value["societyIds"]; // get param
      this.param2 = value["buildingNames"]; // get param
      this.param3 = value["flatIds"]; // get param
      this._userService.getOwnerList(this.param3).subscribe((data) => {
        this.ownerData = data.dbResponse;
      })
    });

  }

}
