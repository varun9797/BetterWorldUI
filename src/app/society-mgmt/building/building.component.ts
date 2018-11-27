import { Component, OnInit } from '@angular/core';
import { UserService } from "../services/user.service"
import { ParamMap, Router, ActivatedRoute } from '@angular/router';
import { OnChanges } from '@angular/core';
import { CommonService } from '../services/common.service'

@Component({
  selector: 'app-building',
  templateUrl: './building.component.html',
  styleUrls: ['./building.component.css']
})
export class BuildingComponent implements OnInit, OnChanges {
  society; buildingList;
  param1; societyInfo: any;
  constructor(public _userService: UserService, 
    public router: Router, private route: ActivatedRoute, public _commonService: CommonService ) { }

  ngOnInit() {
    this.getBuildingList();
  }
  ngOnChanges() {
    this.getBuildingList();
  }
  getBuildingList() {
    //this.param1 = this.route.snapshot.paramMap.get('societyid');
    this.route.params.subscribe((value) => {
      this.param1 = value["societyid"]; // get param
      console.log("this.param1:::" + JSON.stringify(value));
      this.updateCalendar(this.param1);
      this._userService.getBuilding(this.param1).subscribe((data) => {
        this.buildingList = data.dbResponse;
      },
        error => {
          console.log(error);
          this.society = error.message;
        });

      this._userService.getSocietyInfo(this.param1).subscribe((data) => {
        this.societyInfo = data.dbResponse;
      },
        error => {
          console.log(error);
          this.society = error.message;
        });
    });
  }

  updateCalendar(societyid){
    this._userService.getSocietyEvents(societyid).subscribe((societyEvevts) => {
      this._commonService.emitEventCalanderData(societyEvevts.dbResponse)
    },
    error => {
      console.log(error);
      this.society = error.message;
    });
  }
}
