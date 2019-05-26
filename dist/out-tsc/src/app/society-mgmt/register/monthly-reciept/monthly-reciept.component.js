var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component } from '@angular/core';
import { Location } from '@angular/common';
import { CommonService } from '../../services/common.service';
import { UserService } from '../../services/user.service';
var MonthlyRecieptComponent = /** @class */ (function () {
    function MonthlyRecieptComponent(_location, _commonService, _userService) {
        this._location = _location;
        this._commonService = _commonService;
        this._userService = _userService;
        this.societyReciept = {
            buildingMaintenance: 0,
            parkingMaintenance: 0,
            municipalDue: 0,
            sinkingFund: 0,
            electricityCharge: 0,
            updatedBy: 0,
            id: 0
        };
    }
    MonthlyRecieptComponent.prototype.ngOnInit = function () {
        this.createOrUpdateReciept();
    };
    MonthlyRecieptComponent.prototype.goBack = function () {
        this._location.back();
    };
    MonthlyRecieptComponent.prototype.createOrUpdateReciept = function () {
        var _this = this;
        this._commonService.loginUserInfo.subscribe(function (user) {
            if (user) {
                _this.societyReciept.updatedBy = user.data.ownerid;
                _this._userService.getExistingRecipt(_this.societyReciept.updatedBy).subscribe(function (response) {
                    console.log("get existing!!!", response);
                    var obj = response.dbResponse[0];
                    _this.societyReciept.buildingMaintenance = obj.buildingMaintenance;
                    _this.societyReciept.parkingMaintenance = obj.parkingMaintenance;
                    _this.societyReciept.municipalDue = obj.municipalDue;
                    _this.societyReciept.sinkingFund = obj.sinkingFund;
                    _this.societyReciept.electricityCharge = obj.electricityCharge;
                    _this.societyReciept.id = obj.id;
                });
            }
        });
    };
    MonthlyRecieptComponent.prototype.onSubmit = function () {
        this._userService.createRecipt(this.societyReciept).subscribe(function (response) {
            console.log("response is", response);
        });
    };
    MonthlyRecieptComponent = __decorate([
        Component({
            selector: 'app-monthly-reciept',
            templateUrl: './monthly-reciept.component.html',
            styleUrls: ['./monthly-reciept.component.css']
        }),
        __metadata("design:paramtypes", [Location, CommonService, UserService])
    ], MonthlyRecieptComponent);
    return MonthlyRecieptComponent;
}());
export { MonthlyRecieptComponent };
//# sourceMappingURL=monthly-reciept.component.js.map