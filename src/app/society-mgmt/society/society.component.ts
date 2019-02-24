import { Component, OnInit, ViewChild } from '@angular/core';
import { UserService } from "../services/user.service"
import { ParamMap, Router, ActivatedRoute } from '@angular/router';
import { OnChanges } from '@angular/core';
import { MatPaginator, MatTableDataSource } from '@angular/material';
import { CommonService } from '../services/common.service'

@Component({
  selector: 'app-society',
  templateUrl: './society.component.html',
  styleUrls: ['./society.component.css']
})
export class SocietyComponent implements OnInit {
  displayedColumns: string[];
  dataSource;
  @ViewChild(MatPaginator) paginator: MatPaginator;
  society: any; param1; societyInfo: any = undefined;

  constructor(public _userService: UserService, public router: Router,
    private route: ActivatedRoute, public _commonService: CommonService) { }

  ngOnInit() { 
    this._userService.getSociety().subscribe((data) => {
      this.society = data.dbResponse;
      this.displayedColumns   = ['societyid', 'societyname', 'address', 'pincode','showBuilding', 'delete'];
      const ELEMENT_DATA: societyField[] =data.dbResponse;
      this.dataSource = new MatTableDataSource<societyField>(ELEMENT_DATA);
      this.dataSource.paginator = this.paginator;
      this._commonService.emitActiveType('society');
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
  goToBuilding(societyId){
      this.router.navigate(['societyManagment', societyId, 'buildings']);
      this._commonService.emitShowListEvent(true);
  }

}

export interface societyField {
  societyid: string;
  societyname: number;
  address: number;
  pincode: string;
}