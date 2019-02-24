import { Component, OnInit, ViewChild, Inject } from '@angular/core';
import { UserService } from "../services/user.service"
import { Router, ActivatedRoute } from '@angular/router';
import { OnChanges } from '@angular/core';
import { TokenService } from '../services/token.service'
import { CommonService } from '../services/common.service'
import { MatPaginator, MatTableDataSource } from '@angular/material';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';


@Component({
  selector: 'app-flats',
  templateUrl: './flats.component.html',
  styleUrls: ['./flats.component.css']
})
export class FlatsComponent implements OnInit, OnChanges {
  
  society; flatList;
  isClosedValue = false;
  model: any = {};
  errmsg;
  payAmount;
  societyid;buildingName; societyInfo: any;responseData:any;
  flatObj:any;
  showSpinner;
  displayText;
  paymentHistoryData;
  showPaymentModal=false;
  displayedColumns: string[];
  dataSource;
  @ViewChild(MatPaginator) paginator: MatPaginator;
  constructor(public dialog: MatDialog,public _userService: UserService,
     public router: Router, private route: 
     ActivatedRoute, public _tokenService: TokenService, public _commonService:CommonService) { }

  ngOnInit() {
    this.getflatList();
  }
  ngOnChanges() {
    this.getflatList();
  }
  getflatList() {
    this.displayText=""
    this.route.params.subscribe((value) => {
      this.societyid = value["societyid"]; // get param
      this.buildingName = value["buildingName"]; // get param
      this.showSpinner=true;
      this.displayText=""
      this._userService.getFlatList(this.societyid, this.buildingName).subscribe((data) => {
        this.showSpinner=false;
        this.flatList = data.dbResponse;
        if(!(this.flatList[0] && this.flatList[0].flatid)){
          this.displayText="No Record Found"
        }
        this._commonService.emitActiveType('flats');
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

  openDialog(flat) {
    this.flatObj = flat;
    const dialogRef = this.dialog.open(FlatDialogBox, {
      data: {
        flatObj:flat
      }
    });
    dialogRef.afterClosed().subscribe(amount => {
      console.log('The dialog was closed');
      if(amount)
      this.paymentMethod(amount);
    });
  }

  paymentMethod(payAmount){
    this.flatObj.pendingPayment = payAmount;
    console.log(payAmount , this.flatObj.pendingPayment);
    console.log(this.flatObj);
    
    this._userService.putFlatPayment(this.flatObj).subscribe(
      (data) => {
      this.responseData = data.dbResponse;
      },
      error => {
        console.log(error);
        this.errmsg=error.message;
        alert("Please login first"+JSON.stringify(error));
      },
      () => {
        this.isClosedValue = true
        this.getflatList();
        alert("Payment successfully updated!");
      });
  }
  showCalender(flatId){
    this._userService.getFlatPaymentHistory(flatId).subscribe((data) => {
      console.log(data.dbResponse);
      this._commonService.emitCalanderData(data.dbResponse);
    },
      error => {
        console.log(error);
        this.society = error.message;
      });
  }

  showFlatPatmentHistory(flatId){
    this._userService.getFlatPaymentHistory(flatId).subscribe((data) => {
      console.log(data.dbResponse);
      this.paymentHistoryData= data.dbResponse;
      this.displayedColumns   = ['idpaymenthistory', 'amount', 'remainingbalance', 'type' , 'createddate'];
      const ELEMENT_DATA: flatPaymentHistory[] =data.dbResponse;
      this.dataSource = new MatTableDataSource<flatPaymentHistory>(ELEMENT_DATA);
      this.dataSource.paginator = this.paginator;
    },
      error => {
        console.log(error);
        this.society = error.message;
      });
  }

  showOwner(societyid,buildingName,flatId){
    this.router.navigate(['societyManagment',societyid,'buildings',buildingName,"flats",flatId,"owner"]); 
    this._commonService.emitShowListEvent(true);
  }
}


export interface flatPaymentHistory {
  createddate: string;
  flatid: number;
  idpaymenthistory: number;
  paymentType:number;
  ownerid: number;
  paid: number;
  remainingbalance:number;
  updateddate:string
}

export interface DialogData {
  flatObj: any;
}

@Component({
  selector: 'dialog-data-example-dialog',
  templateUrl: 'flat-dialogBox.html',
})
export class FlatDialogBox {
  constructor(public dialogRef: MatDialogRef<FlatDialogBox>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData) {

  }

  paymentMethod(amount){
    this.dialogRef.close(amount);
  }
}