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
import { RegisterService } from './../register.service';
import { UserService } from './../../services/user.service';
var OwnerRegComponent = /** @class */ (function () {
    function OwnerRegComponent(_userService, _registerservice) {
        this._userService = _userService;
        this._registerservice = _registerservice;
        this.pageTitle1 = "Owner Register";
        this.pageDesc1 = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.";
        this.ownerreg = {
            ownerName: "",
            email: "",
            phoneNumber: "",
            age: "",
            gender: 1,
            type: 3,
            password: "",
            flatName: "",
            buildingName: "",
            societyId: ""
        };
    }
    OwnerRegComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._userService.getSociety().subscribe(function (data) {
            _this.societyList = data.dbResponse;
        }, function (error) {
            console.log(error);
            _this.societyList = error.message;
        });
    };
    OwnerRegComponent.prototype.checkAdminFlag = function (isAdminFlag) {
        isAdminFlag ? this.ownerreg.type = 2 : this.ownerreg.type = 3;
    };
    OwnerRegComponent.prototype.onSubmit = function () {
        console.log(this.ownerreg);
        this._registerservice.registerOwner(this.ownerreg).subscribe(function (data) {
            console.log("data is", data);
            alert("owner info added sucessfully");
        });
    };
    OwnerRegComponent = __decorate([
        Component({
            selector: 'app-owner-reg',
            templateUrl: './owner-reg.component.html',
            styleUrls: ['./owner-reg.component.css']
        }),
        __metadata("design:paramtypes", [UserService, RegisterService])
    ], OwnerRegComponent);
    return OwnerRegComponent;
}());
export { OwnerRegComponent };
//# sourceMappingURL=owner-reg.component.js.map