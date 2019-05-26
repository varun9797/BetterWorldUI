var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Router } from '@angular/router';
import { Injectable } from '@angular/core';
import { TokenService } from './token.service';
import { Observable } from 'rxjs';
var NeedAuthGuard = /** @class */ (function () {
    function NeedAuthGuard(_tokenService, router) {
        this._tokenService = _tokenService;
        this.router = router;
    }
    NeedAuthGuard.prototype.canActivate = function (route, state) {
        var _this = this;
        var redirectUrl = route['_routerState']['url'];
        /* if (this._tokenService.isLogged()) {
           return true;
         } else {
           this.router.navigateByUrl(
             this.router.createUrlTree(
               ['/login'], {
                 queryParams: {
                   redirectUrl
                 }
               }
             )
           );
           return false;
         } */
        return new Observable(function (observer) {
            _this._tokenService.isLogged().subscribe(function (isValid) {
                if (isValid) {
                    console.log("token is valid*****");
                    observer.next(true);
                }
                else {
                    _this.router.navigateByUrl(_this.router.createUrlTree(['login'], {
                        queryParams: {
                            redirectUrl: redirectUrl
                        }
                    }));
                    observer.next(false);
                }
            });
        });
    };
    NeedAuthGuard = __decorate([
        Injectable(),
        __metadata("design:paramtypes", [TokenService, Router])
    ], NeedAuthGuard);
    return NeedAuthGuard;
}());
export { NeedAuthGuard };
//# sourceMappingURL=NeedAuthGuard.js.map