var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { Component } from '@angular/core';
var RegisterMemberComponent = /** @class */ (function () {
    function RegisterMemberComponent() {
        this.model = {};
        this.StoreArray = [];
        this.Debitcard = false;
        this.tenantDetails = false;
        this.pageTitle = "Register";
        this.pageDesc = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.";
        this.formLabelNames = {
            flatno: "Flat Number",
            ownerFname: "Owner First Name",
            ownerLname: "Owner Last Name",
            phone: "Phone Number",
            paymentmethod: "Payment Method",
            paymentmethodValue: ['Cash', 'Debit/Credit Card', 'Cheque'],
            paymentamount: "Payment amount",
            flatrented: "Flat Rented",
            rentedYes: "Yes",
            rentedNo: "No",
            memPswd: "Password",
            memConfrmPswd: "Confirm Password",
        };
    }
    RegisterMemberComponent.prototype.onSubmit = function () {
        this.StoreArray.push(JSON.stringify(this.model));
    };
    RegisterMemberComponent.prototype.clickCard = function () {
        this.Debitcard = !this.Debitcard;
    };
    RegisterMemberComponent.prototype.radioChange = function ($event) {
        var RadioValue = $event.target.value;
        if (RadioValue == "Yes")
            this.tenantDetails = true;
        else
            this.tenantDetails = false;
    };
    RegisterMemberComponent = __decorate([
        Component({
            selector: 'app-register-member',
            templateUrl: './register-member.component.html',
            styleUrls: ['./register-member.component.css']
        })
    ], RegisterMemberComponent);
    return RegisterMemberComponent;
}());
export { RegisterMemberComponent };
//# sourceMappingURL=register-member.component.js.map