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
import { HttpClient } from '@angular/common/http';
import * as config from "./../config.json";
var RegisterService = /** @class */ (function () {
    function RegisterService(http) {
        this.http = http;
        this.postSocietyUrl = config.default.HOST_NAME + "/society/registerSociety";
        this.postOwnerUrl = config.default.HOST_NAME + "/society/registerOwner";
        this.postFlatUrl = config.default.HOST_NAME + "/society/registerFlat";
        this.postBuildingUrl = config.default.HOST_NAME + "/society/registerBuilding";
    }
    RegisterService.prototype.registerSociety = function (societyreg) {
        return this.http.post(this.postSocietyUrl, societyreg);
    };
    RegisterService.prototype.registerOwner = function (ownerreg) {
        return this.http.post(this.postOwnerUrl, ownerreg);
    };
    RegisterService.prototype.registerFlat = function (flatreg) {
        return this.http.post(this.postFlatUrl, flatreg);
    };
    RegisterService.prototype.registerBuilding = function (buildingreg) {
        return this.http.post(this.postBuildingUrl, buildingreg);
    };
    RegisterService = __decorate([
        Injectable({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [HttpClient])
    ], RegisterService);
    return RegisterService;
}());
export { RegisterService };
//# sourceMappingURL=register.service.js.map