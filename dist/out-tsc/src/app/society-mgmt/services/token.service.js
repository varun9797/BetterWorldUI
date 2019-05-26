var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { throwError, Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { CommonService } from './common.service';
import * as config from "./../config.json";
var TOKEN = 'TOKEN';
var TokenService = /** @class */ (function () {
    function TokenService(http, _commonService) {
        this.http = http;
        this._commonService = _commonService;
        this.validateTokenUrl = config.default.HOST_NAME + "/users/validateToken";
    }
    TokenService.prototype.setToken = function (token) {
        localStorage.setItem(TOKEN, token);
    };
    TokenService.prototype.isValidToken = function (token) {
        var headers = new HttpHeaders().set('token', token);
        console.log("" + this.validateTokenUrl);
        return this.http.get("" + this.validateTokenUrl, {
            headers: headers
        }).pipe(catchError(function (error) { return throwError(error); }));
    };
    TokenService.prototype.isLogged = function () {
        var _this = this;
        return new Observable(function (observer) {
            var token = localStorage.getItem(TOKEN);
            if (token) {
                _this.isValidToken(token).subscribe(function (data) {
                    if (data.error == 0) {
                        //  alert(token);
                        _this._commonService.setLoginUserInfo(data);
                        observer.next(true);
                    }
                    else {
                        alert("User is not Valid");
                        observer.next(false);
                    }
                }, function (error) {
                    //alert("Error:"+JSON.stringify(error));
                    observer.next(false);
                });
            }
            else {
                //alert("Please login first");
                observer.next(false);
            }
        });
    };
    TokenService = __decorate([
        Injectable({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [HttpClient, CommonService])
    ], TokenService);
    return TokenService;
}());
export { TokenService };
//# sourceMappingURL=token.service.js.map