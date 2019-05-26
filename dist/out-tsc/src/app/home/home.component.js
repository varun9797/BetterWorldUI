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
import { TokenService } from './../society-mgmt/services/token.service';
import { CommonService } from '../society-mgmt/services/common.service';
import { Router } from '@angular/router';
var HomeComponent = /** @class */ (function () {
    function HomeComponent(_tokenService, _commonService, router) {
        this._tokenService = _tokenService;
        this._commonService = _commonService;
        this.router = router;
        this.loginUserInfo = {
            name: "",
            id: "",
            email: "",
            phone: ""
        };
    }
    HomeComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._tokenService.isLogged().subscribe(function (isValid) {
            _this.getLoginUserData();
        });
    };
    HomeComponent.prototype.getLoginUserData = function () {
        var _this = this;
        this._commonService.loginUserInfo.subscribe(function (userInfo) {
            _this.loginUserInfo.name = userInfo.data.ownername;
            _this.loginUserInfo.id = userInfo.data.ownerid;
            _this.loginUserInfo.phone = userInfo.data.phoneNumber;
            _this.loginUserInfo.email = userInfo.data.email;
        });
    };
    HomeComponent.prototype.redirectToFlatPage = function () {
        if (this.loginUserInfo.id) {
            this.router.navigate(['societyManagment', 'owners', this.loginUserInfo.id, 'flats']);
        }
        else {
            this.router.navigate(['login']);
        }
    };
    HomeComponent.prototype.logout = function () {
        localStorage.setItem('TOKEN', "");
        this.router.navigateByUrl('/home');
        window.location.reload();
    };
    HomeComponent = __decorate([
        Component({
            selector: 'app-home',
            templateUrl: './home.component.html',
            styleUrls: ['./home.component.css']
        }),
        __metadata("design:paramtypes", [TokenService, CommonService, Router])
    ], HomeComponent);
    return HomeComponent;
}());
export { HomeComponent };
//# sourceMappingURL=home.component.js.map