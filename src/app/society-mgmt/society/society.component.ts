import { Component, OnInit } from '@angular/core';
import { UserService } from "../services/user.service"
import { ParamMap, Router, ActivatedRoute } from '@angular/router';
import { OnChanges } from '@angular/core';
import { CommonService } from '../services/common.service'

@Component({
  selector: 'app-society',
  templateUrl: './society.component.html',
  styleUrls: ['./society.component.css']
})
export class SocietyComponent implements OnInit {
  society: any;param1;societyInfo:any = undefined;

  constructor(public _userService: UserService,public router: Router,
     private route: ActivatedRoute, public _commonService: CommonService ) { }
  
  ngOnInit() {
    this._userService.getSociety().subscribe((data) => {
      this.society = data.dbResponse;
    },
      error => {
        console.log(error);
        this.society = error.message;
      });
  }

  onSelect(societyid) {
    this._userService.getSocietyEvents(societyid).subscribe((societyEvevts) => {
      this._commonService.emitEventCalanderData(societyEvevts.dbResponse)
    },
    error => {
      console.log(error);
      this.society = error.message;
    });
    this._userService.getSocietyInfo(societyid).subscribe((data) => {
      this.societyInfo = data.dbResponse;
    },
    error => {
      console.log(error);
      this.society = error.message;
    });
  }

}
