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
import { TokenService } from './services/token.service';
import { CommonService } from './services/common.service';
import { Router, ActivatedRoute } from '@angular/router';
var SocietyMgmtComponent = /** @class */ (function () {
    function SocietyMgmtComponent(_activateroute, _tokenService, router, _commonService) {
        this._activateroute = _activateroute;
        this._tokenService = _tokenService;
        this.router = router;
        this._commonService = _commonService;
        this.isLogged = false;
        this.showList = true;
        this.progressPercent = 0;
        this.buttonClickObj = {
            society: false,
            building: false,
            flat: false,
            owner: false
        };
        this.loginUserInfo = {
            name: "",
            id: "",
            email: "",
            phone: ""
        };
    }
    SocietyMgmtComponent.prototype.ngOnInit = function () {
        var _this = this;
        console.log("tttttttt", localStorage.getItem('TOKEN'));
        this._tokenService.isLogged().subscribe(function (flag) {
            if (flag) {
                _this.isLogged = true;
                _this.getLoginUserData();
            }
            else {
                _this.isLogged = false;
            }
        });
        this._commonService.eventShowList.subscribe(function (showEvent) {
            if (showEvent) {
                _this.showList = true;
            }
            else {
                _this.showList = false;
            }
        });
        this.changeButtonColor();
    };
    SocietyMgmtComponent.prototype.getLoginUserData = function () {
        var _this = this;
        this._commonService.loginUserInfo.subscribe(function (userInfo) {
            _this.loginUserInfo.name = userInfo.data.ownername;
            _this.loginUserInfo.id = userInfo.data.ownerid;
            _this.loginUserInfo.phone = userInfo.data.phoneNumber;
            _this.loginUserInfo.email = userInfo.data.email;
        });
    };
    SocietyMgmtComponent.prototype.changeButtonColor = function () {
        var _this = this;
        this._commonService.eventIsActiveType.subscribe(function (value) {
            if (value == "owners") {
                _this.enableFields(true, true, true, true);
            }
            else if (value == "flats") {
                _this.enableFields(true, true, true);
            }
            else if (value == "buildings") {
                _this.enableFields(true, true);
            }
            else {
                _this.enableFields(true);
            }
        }, function (error) {
            console.log(error);
        });
    };
    SocietyMgmtComponent.prototype.ShowModal = function (type) {
        var _this = this;
        this.showSpinner = true;
        if (type == 'flats' || type == 'owners') {
            this._tokenService.isLogged().subscribe(function (flag) {
                if (flag) {
                    _this.router.navigateByUrl('/societyManagment');
                    _this.modalVar = type;
                    _this.showSpinner = false;
                    // this.showList = false;
                }
                else {
                    _this.showList = false;
                    alert("Please login first");
                    _this.router.navigateByUrl('/login');
                    _this.showSpinner = false;
                }
            });
            if (type == 'flats') {
                this.enableFields(true, true, true);
            }
            else {
                this.enableFields(true, true, true, true);
            }
        }
        else if (type == 'buildings') {
            this.enableFields(true, true);
            setTimeout(function () {
                _this.router.navigateByUrl('/societyManagment');
                _this.modalVar = type;
                _this.showSpinner = false;
            }, 0);
        }
        else {
            setTimeout(function () {
                _this.progressPercent = 25;
                _this.enableFields(true);
                _this.showList = true;
                _this.modalVar = type;
                _this.showSpinner = false;
            }, 0);
        }
    };
    SocietyMgmtComponent.prototype.enableFields = function (society, building, flat, owner) {
        if (society === void 0) { society = false; }
        if (building === void 0) { building = false; }
        if (flat === void 0) { flat = false; }
        if (owner === void 0) { owner = false; }
        this.progressPercent = owner ? 100 : (flat ? 75 : building ? 50 : society ? 25 : 0);
        this.buttonClickObj.society = society;
        this.buttonClickObj.building = building;
        this.buttonClickObj.flat = flat;
        this.buttonClickObj.owner = owner;
    };
    SocietyMgmtComponent.prototype.logout = function () {
        localStorage.setItem('TOKEN', "");
        this.isLogged = false;
        this.router.navigateByUrl('/societyManagment');
        window.location.reload();
    };
    SocietyMgmtComponent = __decorate([
        Component({
            selector: 'app-society-mgmt',
            templateUrl: './society-mgmt.component.html',
            styleUrls: ['./society-mgmt.component.css']
        }),
        __metadata("design:paramtypes", [ActivatedRoute, TokenService, Router, CommonService])
    ], SocietyMgmtComponent);
    return SocietyMgmtComponent;
}());
export { SocietyMgmtComponent };
//# sourceMappingURL=society-mgmt.component.js.map