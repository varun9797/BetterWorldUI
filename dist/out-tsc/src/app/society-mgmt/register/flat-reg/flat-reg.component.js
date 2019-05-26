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
import { UserService } from './../../services/user.service';
import { RegisterService } from './../register.service';
var FlatRegComponent = /** @class */ (function () {
    function FlatRegComponent(_userService, _registerservice) {
        this._userService = _userService;
        this._registerservice = _registerservice;
        this.pageTitle2 = "Flat Register";
        this.pageDesc2 = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.";
        this.flatreg = {
            flatName: "",
            buildingName: "",
            societyId: ""
            //ownerid:"",
            //tenantid:""
        };
    }
    FlatRegComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._userService.getSociety().subscribe(function (data) {
            _this.societyList = data.dbResponse;
        }, function (error) {
            console.log(error);
            _this.societyList = error.message;
        });
    };
    FlatRegComponent.prototype.onSubmit = function () {
        console.log("**on submit**", this.flatreg);
        this._registerservice.registerFlat(this.flatreg).subscribe(function (data) {
            console.log("**response from api**", data);
            alert("flat info submitted sucessfully");
        });
    };
    FlatRegComponent = __decorate([
        Component({
            selector: 'app-flat-reg',
            templateUrl: './flat-reg.component.html',
            styleUrls: ['./flat-reg.component.css']
        }),
        __metadata("design:paramtypes", [UserService, RegisterService])
    ], FlatRegComponent);
    return FlatRegComponent;
}());
export { FlatRegComponent };
//# sourceMappingURL=flat-reg.component.js.map