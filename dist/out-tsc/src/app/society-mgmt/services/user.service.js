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
import { throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import * as config from "./../config.json";
var UserService = /** @class */ (function () {
    function UserService(http) {
        this.http = http;
        this.TOKEN = 'TOKEN';
        this.getSocietyURL = config.default.HOST_NAME + "/society/society";
        this.getBuildingsURL = config.default.HOST_NAME + "/society/building";
        this.getOwnerURL = config.default.HOST_NAME + "/society/owner";
        this.getFlatURL = config.default.HOST_NAME + "/society/flat";
        this.putPayment = config.default.HOST_NAME + "/society/flat/pendingPayment";
        this.flatPaymentHistory = config.default.HOST_NAME + "/society/paymenthistory";
        this.societyEventURL = config.default.HOST_NAME + "/society/societyEvent";
        this.selectedTypeList = config.default.HOST_NAME + "/society/owner/list";
        this.callStoredProcUrl = config.default.HOST_NAME + "/society/storedProc";
        this.createMonthlyReciptUrl = config.default.HOST_NAME + "/society/paymentstructure";
        this.currentPaymentStructureUrl = config.default.HOST_NAME + "/society/paymentStrcture";
    }
    UserService.prototype.getOwner = function (query) {
        console.log(this.getOwnerURL + "/phonenumber/?value='" + query.oPhoneNumber + "'");
        return this.http.get(this.getOwnerURL + "/phonenumber/?value='" + query.oPhoneNumber + "'")
            .pipe(catchError(function (error) { return throwError(error); }));
    };
    UserService.prototype.getOwnerByID = function (ownerId) {
        console.log(this.getOwnerURL + "/ownerid/?value='" + ownerId + "'");
        return this.http.get(this.getOwnerURL + "/ownerid/?value=" + ownerId)
            .pipe(catchError(function (error) { return throwError(error); }));
    };
    UserService.prototype.getAllOwners = function () {
        console.log("" + this.getOwnerURL);
        return this.http.get("" + this.getOwnerURL)
            .pipe(catchError(function (error) { return throwError(error); }));
    };
    UserService.prototype.getSociety = function () {
        return this.http.get("" + this.getSocietyURL)
            .pipe(catchError(function (error) { return throwError(error); }));
    };
    UserService.prototype.getSocietyInfo = function (id) {
        console.log(this.getSocietyURL + "/societyid/?value=" + id);
        return this.http.get(this.getSocietyURL + "/societyid/?value=" + id)
            .pipe(catchError(function (error) { return throwError(error); }));
    };
    UserService.prototype.getBuilding = function (socID) {
        return this.http.get(this.getBuildingsURL + "/societyid/?value=" + socID)
            .pipe(catchError(function (error) { return throwError(error); }));
    };
    UserService.prototype.getFlatList = function (societyId, buildingname) {
        console.log(this.getFlatURL + "/buildingname/?value=" + buildingname);
        return this.http.get("http://nodebw-env.xctnnannuz.us-east-1.elasticbeanstalk.com/society/flat/societyid/buildingname/?value1=" + societyId + "&value2=\"" + buildingname + "\"")
            .pipe(catchError(function (error) { return throwError(error); }));
    };
    UserService.prototype.getOwnerFlatList = function (ownerId) {
        console.log(this.getFlatURL + "/ownerid/?value=" + ownerId);
        return this.http.get(this.getFlatURL + "/ownerid/?value=" + ownerId)
            .pipe(catchError(function (error) { return throwError(error); }));
    };
    UserService.prototype.getOwnerList = function (flatIds) {
        console.log(this.getOwnerURL + "/flatIds/?value=" + flatIds);
        return this.http.get(this.getOwnerURL + "/flatIds/?value='" + flatIds + "'")
            .pipe(catchError(function (error) { return throwError(error); }));
    };
    UserService.prototype.putFlatPayment = function (flatObj) {
        var headers = new HttpHeaders().set('token', localStorage.getItem(this.TOKEN));
        console.log(flatObj);
        var paramList = {
            "pendingPayment": flatObj.pendingPayment,
            "ownerid": flatObj.ownerid,
            "flatid": flatObj.flatid
        };
        console.log(paramList);
        return this.http.put(this.putPayment, paramList, { headers: headers })
            .pipe(catchError(function (error) { return throwError(error); }));
    };
    UserService.prototype.getFlatPaymentHistory = function (flatId) {
        console.log("uuuuuuuu", this.flatPaymentHistory + "/flatid/?value=" + flatId);
        return this.http.get(this.flatPaymentHistory + "/flatid/?value=" + flatId)
            .pipe(catchError(function (error) { return throwError(error); }));
    };
    UserService.prototype.getSocietyEvents = function (societyId) {
        console.log(this.societyEventURL + "/societyid/?value='" + societyId + "'");
        return this.http.get(this.societyEventURL + "/societyid/?value='" + societyId + "'")
            .pipe(catchError(function (error) { return throwError(error); }));
    };
    UserService.prototype.callStoredProc = function (storedProcString) {
        var postObj = {
            storedProc: storedProcString
        };
        console.log("" + this.callStoredProcUrl);
        return this.http.post("" + this.callStoredProcUrl, postObj)
            .pipe(catchError(function (error) { return throwError(error); }));
    };
    UserService.prototype.createRecipt = function (recieptObj) {
        console.log("createRecipt object", recieptObj);
        return this.http.post("" + this.createMonthlyReciptUrl, recieptObj)
            .pipe(catchError(function (error) { return throwError(error); }));
    };
    UserService.prototype.updateRecipt = function (recieptObj) {
        console.log("updateRecipt object", recieptObj);
        return this.http.put("" + this.createMonthlyReciptUrl, recieptObj)
            .pipe(catchError(function (error) { return throwError(error); }));
    };
    UserService.prototype.getExistingRecipt = function (userId) {
        console.log("getExistingRecipt ", this.currentPaymentStructureUrl + "/" + userId);
        return this.http.get(this.currentPaymentStructureUrl + "/" + userId)
            .pipe(catchError(function (error) { return throwError(error); }));
    };
    UserService.prototype.getSelectedTypelist = function (societyIds, buildingNames, flatIds) {
        var headers = new HttpHeaders().set('token', localStorage.getItem(this.TOKEN));
        var searchObject = {
            "societyIds": societyIds,
            "buildingNames": buildingNames,
            "flatIds": flatIds
        };
        console.log("searchObject ", searchObject);
        return this.http.post(this.selectedTypeList, searchObject, {
            headers: headers
        })
            .pipe(catchError(function (error) { return throwError(error); }));
    };
    UserService = __decorate([
        Injectable({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [HttpClient])
    ], UserService);
    return UserService;
}());
export { UserService };
//# sourceMappingURL=user.service.js.map