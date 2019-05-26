var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component, ViewChild } from '@angular/core';
import { UserService } from "../services/user.service";
import { Router, ActivatedRoute } from '@angular/router';
import { MatPaginator, MatTableDataSource } from '@angular/material';
import { CommonService } from '../services/common.service';
var SocietyComponent = /** @class */ (function () {
    function SocietyComponent(_userService, router, route, _commonService) {
        this._userService = _userService;
        this.router = router;
        this.route = route;
        this._commonService = _commonService;
        this.societyInfo = undefined;
    }
    SocietyComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._userService.getSociety().subscribe(function (data) {
            _this.society = data.dbResponse;
            _this.displayedColumns = ['societyid', 'societyname', 'address', 'pincode', 'showBuilding', 'delete'];
            var ELEMENT_DATA = data.dbResponse;
            _this.dataSource = new MatTableDataSource(ELEMENT_DATA);
            _this.dataSource.paginator = _this.paginator;
            _this._commonService.emitActiveType('society');
        }, function (error) {
            console.log(error);
            _this.society = error.message;
        });
    };
    SocietyComponent.prototype.onSelect = function (societyid) {
        var _this = this;
        this._userService.getSocietyEvents(societyid).subscribe(function (societyEvevts) {
            _this._commonService.emitEventCalanderData(societyEvevts.dbResponse);
        }, function (error) {
            console.log(error);
            _this.society = error.message;
        });
        this._userService.getSocietyInfo(societyid).subscribe(function (data) {
            _this.societyInfo = data.dbResponse;
        }, function (error) {
            console.log(error);
            _this.society = error.message;
        });
    };
    SocietyComponent.prototype.goToBuilding = function (societyId) {
        this.router.navigate(['societyManagment', societyId, 'buildings']);
        this._commonService.emitShowListEvent(true);
    };
    __decorate([
        ViewChild(MatPaginator),
        __metadata("design:type", MatPaginator)
    ], SocietyComponent.prototype, "paginator", void 0);
    SocietyComponent = __decorate([
        Component({
            selector: 'app-society',
            templateUrl: './society.component.html',
            styleUrls: ['./society.component.css']
        }),
        __metadata("design:paramtypes", [UserService, Router,
            ActivatedRoute, CommonService])
    ], SocietyComponent);
    return SocietyComponent;
}());
export { SocietyComponent };
//# sourceMappingURL=society.component.js.map