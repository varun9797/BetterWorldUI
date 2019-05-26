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
import { UserService } from "../services/user.service";
import { Router, ActivatedRoute } from '@angular/router';
import { CommonService } from './../services/common.service';
var OwnersComponent = /** @class */ (function () {
    function OwnersComponent(_userService, router, route, _commonService) {
        this._userService = _userService;
        this.router = router;
        this.route = route;
        this._commonService = _commonService;
        this.displayText = "";
    }
    OwnersComponent.prototype.ngOnInit = function () {
        this.getOwnerList();
    };
    OwnersComponent.prototype.ngOnChanges = function () {
        this.getOwnerList();
    };
    OwnersComponent.prototype.getOwnerList = function () {
        var _this = this;
        this.displayText = "";
        this.route.params.subscribe(function (value) {
            var societyid = value["societyid"] ? [value["societyid"]] : []; // get param
            var buildingName = value["buildingName"] ? [value["buildingName"]] : []; // get param
            var flatId = value["flatId"] ? [value["flatId"]] : []; // get param
            var ownerId = value["ownerId"];
            _this.showSpinner = true;
            _this.displayText = "";
            if (ownerId) {
                _this._userService.getOwnerByID(ownerId).subscribe(function (data) {
                    _this.commonResponse(data);
                });
            }
            else {
                _this._userService.getSelectedTypelist(societyid, buildingName, flatId).subscribe(function (data) {
                    _this.commonResponse(data);
                });
            }
        });
    };
    OwnersComponent.prototype.commonResponse = function (data) {
        this.showSpinner = false;
        this.ownerData = data.dbResponse[0];
        if (!(this.ownerData[0] && this.ownerData[0].idOwner)) {
            this.displayText = "No Record Found";
        }
        this._commonService.emitActiveType('owners');
    };
    OwnersComponent = __decorate([
        Component({
            selector: 'app-owners',
            templateUrl: './owners.component.html',
            styleUrls: ['./owners.component.css']
        }),
        __metadata("design:paramtypes", [UserService, Router,
            ActivatedRoute, CommonService])
    ], OwnersComponent);
    return OwnersComponent;
}());
export { OwnersComponent };
//# sourceMappingURL=owners.component.js.map