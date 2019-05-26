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
import { CommonService } from '../services/common.service';
var BuildingComponent = /** @class */ (function () {
    function BuildingComponent(_userService, router, route, _commonService) {
        this._userService = _userService;
        this.router = router;
        this.route = route;
        this._commonService = _commonService;
    }
    BuildingComponent.prototype.ngOnInit = function () {
        this.getBuildingList();
    };
    BuildingComponent.prototype.ngOnChanges = function () {
        this.getBuildingList();
    };
    BuildingComponent.prototype.getBuildingList = function () {
        var _this = this;
        //this.societyid = this.route.snapshot.paramMap.get('societyid');
        this.displayText = "";
        this.route.params.subscribe(function (value) {
            _this.societyid = value["societyid"]; // get param
            console.log("this.societyid:::" + JSON.stringify(value));
            _this.updateCalendar(_this.societyid);
            _this.showSpinner = true;
            _this.displayText = "";
            _this._userService.getBuilding(_this.societyid).subscribe(function (data) {
                _this.buildingList = data.dbResponse;
                _this.showSpinner = false;
                if (!(_this.buildingList[0] && _this.buildingList[0].buildingid)) {
                    _this.displayText = "No Record Found";
                }
                _this._commonService.emitActiveType('buildings');
            }, function (error) {
                console.log(error);
                _this.society = error.message;
                _this.showSpinner = false;
            });
            _this._userService.getSocietyInfo(_this.societyid).subscribe(function (data) {
                _this.societyInfo = data.dbResponse;
            }, function (error) {
                console.log(error);
                _this.society = error.message;
            });
        });
    };
    BuildingComponent.prototype.updateCalendar = function (societyid) {
        var _this = this;
        this._userService.getSocietyEvents(societyid).subscribe(function (societyEvevts) {
            _this._commonService.emitEventCalanderData(societyEvevts.dbResponse);
        }, function (error) {
            console.log(error);
            _this.society = error.message;
        });
    };
    BuildingComponent.prototype.showFlats = function (societyId, buildingName) {
        this.router.navigate(['societyManagment', societyId, 'buildings', buildingName, 'flats']);
        this._commonService.emitShowListEvent(true);
    };
    BuildingComponent = __decorate([
        Component({
            selector: 'app-building',
            templateUrl: './building.component.html',
            styleUrls: ['./building.component.css']
        }),
        __metadata("design:paramtypes", [UserService,
            Router, ActivatedRoute, CommonService])
    ], BuildingComponent);
    return BuildingComponent;
}());
export { BuildingComponent };
//# sourceMappingURL=building.component.js.map