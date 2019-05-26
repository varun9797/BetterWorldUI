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
import { Router, ActivatedRoute } from '@angular/router';
import { ApiService } from '../services/api.service';
import { TokenService } from '../services/token.service';
var LoginComponent = /** @class */ (function () {
    function LoginComponent(route, api, _tokenService, router) {
        this.route = route;
        this.api = api;
        this._tokenService = _tokenService;
        this.router = router;
        this.model = {};
        this.username = "sdfsdf29112";
        this.password = "soword";
    }
    LoginComponent.prototype.ngOnInit = function () {
        this.redirectUrl = this.route.snapshot.queryParams['redirectUrl'] || 'societyManagment';
    };
    LoginComponent.prototype.onSubmit = function () {
        var _this = this;
        this.api.login(this.model.uname, this.model.password)
            .subscribe(function (r) {
            if (r.token) {
                // alert(r.token);
                console.log("token set success fully");
                _this._tokenService.setToken(r.token);
                if (_this.redirectUrl == 'societyManagment') {
                    _this.router.navigate(['societyManagment', 'owners', r.dbResponse[0].ownerid, 'flats']);
                }
                else {
                    _this.router.navigateByUrl(_this.redirectUrl);
                }
                //this.router.navigate(['societyManagment','society']);
                //this.router.navigateByUrl('/societyManagment');
            }
        }, function (err) {
            alert(err);
        });
    };
    LoginComponent = __decorate([
        Component({
            selector: 'app-login',
            templateUrl: './login.component.html',
            styleUrls: ['./login.component.css']
        }),
        __metadata("design:paramtypes", [ActivatedRoute, ApiService, TokenService, Router])
    ], LoginComponent);
    return LoginComponent;
}());
export { LoginComponent };
//# sourceMappingURL=login.component.js.map