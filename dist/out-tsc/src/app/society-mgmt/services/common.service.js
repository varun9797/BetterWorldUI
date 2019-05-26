var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Injectable, EventEmitter, Output } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
var CommonService = /** @class */ (function () {
    function CommonService() {
        this.calenderData = new EventEmitter();
        this.eventCalenderData = new EventEmitter();
        this.eventShowList = new EventEmitter();
        this.eventIsActiveType = new EventEmitter();
        this.loginUserSubject = new BehaviorSubject(null);
        this.loginUserInfo = this.loginUserSubject.asObservable();
    }
    CommonService.prototype.emitCalanderData = function (paymentHistory) {
        this.calenderData.emit(paymentHistory);
    };
    CommonService.prototype.emitEventCalanderData = function (societyEvents) {
        this.eventCalenderData.emit(societyEvents);
    };
    CommonService.prototype.emitShowListEvent = function (showListEvent) {
        this.eventShowList.emit(showListEvent);
    };
    CommonService.prototype.emitActiveType = function (type) {
        this.eventIsActiveType.emit(type);
    };
    CommonService.prototype.emitOwnerListRequestobj = function (obj) {
        this.eventOwnerRequestObj = obj;
    };
    CommonService.prototype.setLoginUserInfo = function (message) {
        this.loginUserSubject.next(message);
    };
    __decorate([
        Output(),
        __metadata("design:type", Object)
    ], CommonService.prototype, "calenderData", void 0);
    CommonService = __decorate([
        Injectable({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [])
    ], CommonService);
    return CommonService;
}());
export { CommonService };
//# sourceMappingURL=common.service.js.map