var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component, Input, Output, EventEmitter } from '@angular/core';
import { UserService } from "../../services/user.service";
var PendingpaymentComponent = /** @class */ (function () {
    function PendingpaymentComponent(_userService) {
        this._userService = _userService;
        this.isEditable = true;
        this.paymentStructure = {
            dues: 0,
            funds: 0,
            maintenance: 0,
            parking: 0,
            total: 0
        };
        this.paidAmount = new EventEmitter();
        console.log("constructor..........", this.pendingPaymentFlatObj);
    }
    PendingpaymentComponent.prototype.calculateTotal = function () {
        this.total = this.paymentStructure.total + this.pendingPaymentFlatObj.pendingpayment;
        console.log(this.total);
    };
    PendingpaymentComponent.prototype.payment = function (amount) {
        this.paidAmount.emit(amount);
    };
    PendingpaymentComponent.prototype.ngOnInit = function () {
        var _this = this;
        console.log("payment..........", this.pendingPaymentFlatObj);
        var getCurrentPaymentStructure = "get_current_payment_structure()";
        this._userService.callStoredProc(getCurrentPaymentStructure).subscribe(function (data) {
            console.log(data.dbResponse[0][0]);
            _this.paymentStructure.dues = data.dbResponse[0][0].municipalDue;
            _this.paymentStructure.funds = data.dbResponse[0][0].sinkingFund;
            _this.paymentStructure.maintenance = data.dbResponse[0][0].buildingMaintenance;
            _this.paymentStructure.parking = data.dbResponse[0][0].parkingMaintenance;
            _this.paymentStructure.total = _this.paymentStructure.dues + _this.paymentStructure.funds + _this.paymentStructure.maintenance + _this.paymentStructure.parking;
        }, function (error) {
            console.log(error);
        });
    };
    __decorate([
        Input(),
        __metadata("design:type", Object)
    ], PendingpaymentComponent.prototype, "pendingPaymentFlatObj", void 0);
    __decorate([
        Output(),
        __metadata("design:type", Object)
    ], PendingpaymentComponent.prototype, "paidAmount", void 0);
    PendingpaymentComponent = __decorate([
        Component({
            selector: 'app-pendingpayment',
            templateUrl: './pendingpayment.component.html',
            styleUrls: ['./pendingpayment.component.css']
        }),
        __metadata("design:paramtypes", [UserService])
    ], PendingpaymentComponent);
    return PendingpaymentComponent;
}());
export { PendingpaymentComponent };
//# sourceMappingURL=pendingpayment.component.js.map