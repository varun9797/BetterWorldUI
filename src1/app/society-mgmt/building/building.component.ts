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
  societyid; societyInfo: any;
  constructor(public _userService: UserService, 
    public router: Router, private route: ActivatedRoute, public _commonService: CommonService ) { }

  ngOnInit() {
    this.getBuildingList();
  }
  ngOnChanges() {
    this.getBuildingList();
  }
  getBuildingList() {
    //this.societyid = this.route.snapshot.paramMap.get('societyid');
    this.route.params.subscribe((value) => {
      this.societyid = value["societyid"]; // get param
      console.log("this.societyid:::" + JSON.stringify(value));
      this.updateCalendar(this.societyid);
      this._userService.getBuilding(this.societyid).subscribe((data) => {
        this.buildingList = data.dbResponse;
      },
        error => {
          console.log(error);
          this.society = error.message;
        });

      this._userService.getSocietyInfo(this.societyid).subscribe((data) => {
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
