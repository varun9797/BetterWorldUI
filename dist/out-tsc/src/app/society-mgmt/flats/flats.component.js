var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
import { Component, ViewChild, Inject } from '@angular/core';
import { UserService } from "../services/user.service";
import { Router, ActivatedRoute } from '@angular/router';
import { TokenService } from '../services/token.service';
import { CommonService } from '../services/common.service';
import { MatPaginator, MatTableDataSource } from '@angular/material';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
var FlatsComponent = /** @class */ (function () {
    function FlatsComponent(dialog, _userService, router, route, _tokenService, _commonService) {
        this.dialog = dialog;
        this._userService = _userService;
        this.router = router;
        this.route = route;
        this._tokenService = _tokenService;
        this._commonService = _commonService;
        this.isClosedValue = false;
        this.model = {};
        this.showPaymentModal = false;
    }
    FlatsComponent.prototype.ngOnInit = function () {
        this.getflatList();
    };
    FlatsComponent.prototype.ngOnChanges = function () {
        this.getflatList();
    };
    FlatsComponent.prototype.getflatList = function () {
        var _this = this;
        this.displayText = "";
        this.route.params.subscribe(function (value) {
            _this.societyid = value["societyid"]; // get param
            _this.buildingName = value["buildingName"]; // get param
            var ownerId = value["ownerId"];
            _this.showSpinner = true;
            _this.displayText = "";
            if (ownerId) {
                _this._userService.getOwnerFlatList(ownerId).subscribe(function (data) {
                    _this.commonResponse(data);
                    if (_this.flatList.length == 1) {
                        _this.societyid = _this.flatList[0].societyid;
                        _this.buildingName = _this.flatList[0].buildingname;
                        _this.setSocietyInfo(_this.societyid);
                    }
                }, function (error) {
                    console.log(error);
                    _this.society = error.message;
                });
            }
            else {
                _this._userService.getFlatList(_this.societyid, _this.buildingName).subscribe(function (data) {
                    _this.commonResponse(data);
                }, function (error) {
                    console.log(error);
                    _this.society = error.message;
                });
            }
            _this.setSocietyInfo(_this.societyid);
        });
    };
    FlatsComponent.prototype.setSocietyInfo = function (societyid) {
        var _this = this;
        if (societyid) {
            this._userService.getSocietyInfo(societyid).subscribe(function (data) {
                _this.societyInfo = data.dbResponse;
            }, function (error) {
                console.log(error);
                _this.society = error.message;
            });
        }
    };
    FlatsComponent.prototype.addSocietyReciept = function () {
    };
    FlatsComponent.prototype.commonResponse = function (data) {
        this.showSpinner = false;
        this.flatList = data.dbResponse;
        if (!(this.flatList[0] && this.flatList[0].flatid)) {
            this.displayText = "No Record Found";
        }
        this._commonService.emitActiveType('flats');
    };
    FlatsComponent.prototype.openPaymentDialog = function (flat) {
        var _this = this;
        this.flatObj = flat;
        var dialogRef = this.dialog.open(FlatDialogBox, {
            data: {
                flatObj: flat
            }
        });
        dialogRef.afterClosed().subscribe(function (amount) {
            console.log('The dialog was closed');
            if (amount)
                _this.paymentMethod(amount);
        });
    };
    FlatsComponent.prototype.openPaymentHistoryDialog = function (flatId) {
        this.dialog.open(PaymentHistoryDialogBox, {
            data: {
                flatId: flatId
            }
        });
    };
    FlatsComponent.prototype.paymentMethod = function (payAmount) {
        var _this = this;
        this.flatObj.pendingPayment = payAmount;
        this._userService.putFlatPayment(this.flatObj).subscribe(function (data) {
            _this.responseData = data.dbResponse;
        }, function (error) {
            console.log(error);
            _this.errmsg = error.message;
            alert("Please login first" + JSON.stringify(error));
        }, function () {
            _this.isClosedValue = true;
            _this.getflatList();
            alert("Payment successfully updated!");
        });
    };
    FlatsComponent.prototype.showCalender = function (flatId) {
        var _this = this;
        this._userService.getFlatPaymentHistory(flatId).subscribe(function (data) {
            console.log(data.dbResponse);
            _this._commonService.emitCalanderData(data.dbResponse);
        }, function (error) {
            console.log(error);
            _this.society = error.message;
        });
    };
    FlatsComponent.prototype.showOwner = function (societyid, buildingName, flatId) {
        this.router.navigate(['societyManagment', societyid, 'buildings', buildingName, "flats", flatId, "owner"]);
        this._commonService.emitShowListEvent(true);
    };
    __decorate([
        ViewChild(MatPaginator),
        __metadata("design:type", MatPaginator)
    ], FlatsComponent.prototype, "paginator", void 0);
    FlatsComponent = __decorate([
        Component({
            selector: 'app-flats',
            templateUrl: './flats.component.html',
            styleUrls: ['./flats.component.css']
        }),
        __metadata("design:paramtypes", [MatDialog, UserService,
            Router,
            ActivatedRoute, TokenService, CommonService])
    ], FlatsComponent);
    return FlatsComponent;
}());
export { FlatsComponent };
var FlatDialogBox = /** @class */ (function () {
    function FlatDialogBox(dialogRef, data) {
        this.dialogRef = dialogRef;
        this.data = data;
    }
    FlatDialogBox.prototype.paymentMethod = function (amount) {
        this.dialogRef.close(amount);
    };
    FlatDialogBox = __decorate([
        Component({
            selector: 'dialog-data-example-dialog',
            templateUrl: 'flat-dialogBox.html',
        }),
        __param(1, Inject(MAT_DIALOG_DATA)),
        __metadata("design:paramtypes", [MatDialogRef, Object])
    ], FlatDialogBox);
    return FlatDialogBox;
}());
export { FlatDialogBox };
var PaymentHistoryDialogBox = /** @class */ (function () {
    function PaymentHistoryDialogBox(_userService, dialogRef, data) {
        this._userService = _userService;
        this.dialogRef = dialogRef;
        this.data = data;
    }
    PaymentHistoryDialogBox.prototype.ngOnInit = function () {
        this.showFlatPatmentHistory(this.data.flatId);
    };
    PaymentHistoryDialogBox.prototype.paymentHistoryMethod = function (amount) {
        this.dialogRef.close(amount);
    };
    PaymentHistoryDialogBox.prototype.showFlatPatmentHistory = function (flatId) {
        var _this = this;
        this._userService.getFlatPaymentHistory(flatId).subscribe(function (data) {
            console.log(data.dbResponse);
            _this.paymentHistoryData = data.dbResponse;
            _this.displayedColumns = ['idpaymenthistory', 'amount', 'remainingbalance', 'type', 'createddate'];
            var ELEMENT_DATA = data.dbResponse;
            _this.dataSource = new MatTableDataSource(ELEMENT_DATA);
            _this.dataSource.paginator = _this.paginator;
        }, function (error) {
            console.log(error);
            alert("something went wrong");
        });
    };
    __decorate([
        ViewChild(MatPaginator),
        __metadata("design:type", MatPaginator)
    ], PaymentHistoryDialogBox.prototype, "paginator", void 0);
    PaymentHistoryDialogBox = __decorate([
        Component({
            selector: 'PaymentHistoryDialogBox',
            templateUrl: 'PaymentHistoryDialogBox.html',
        }),
        __param(2, Inject(MAT_DIALOG_DATA)),
        __metadata("design:paramtypes", [UserService, MatDialogRef, Object])
    ], PaymentHistoryDialogBox);
    return PaymentHistoryDialogBox;
}());
export { PaymentHistoryDialogBox };
//# sourceMappingURL=flats.component.js.map