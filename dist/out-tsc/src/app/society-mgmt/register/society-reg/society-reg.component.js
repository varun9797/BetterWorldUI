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
import { RegisterService } from './../register.service';
var SocietyRegComponent = /** @class */ (function () {
    function SocietyRegComponent(_registerservice) {
        this._registerservice = _registerservice;
        this.pageTitle = "Society Register";
        this.pageDesc = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.";
        this.societyreg = {
            societyName: "",
            address: "",
            pincode: ""
        };
    }
    SocietyRegComponent.prototype.ngOnInit = function () {
    };
    SocietyRegComponent.prototype.onSubmit = function () {
        console.log("**Before calling api**", this.societyreg);
        this._registerservice.registerSociety(this.societyreg).subscribe(function (data) {
            console.log("**response from api**", data);
            alert("society info added sucessfully");
        });
    };
    SocietyRegComponent = __decorate([
        Component({
            selector: 'app-society-reg',
            templateUrl: './society-reg.component.html',
            styleUrls: ['./society-reg.component.css']
        }),
        __metadata("design:paramtypes", [RegisterService])
    ], SocietyRegComponent);
    return SocietyRegComponent;
}());
export { SocietyRegComponent };
//# sourceMappingURL=society-reg.component.js.map