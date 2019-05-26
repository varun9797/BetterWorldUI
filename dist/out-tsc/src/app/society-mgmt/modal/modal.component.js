var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component, Input } from '@angular/core';
import { UserService } from "../services/user.service";
import { CommonService } from "../services/common.service";
import { NeedAuthGuard } from "../services/NeedAuthGuard";
import { Router } from '@angular/router';
import { FormControl } from '@angular/forms';
var ModalComponent = /** @class */ (function () {
    //@Output()
    //eventEm = new EventEmitter();
    function ModalComponent(_userService, router, _needAuthGuard, _commonService) {
        this._userService = _userService;
        this.router = router;
        this._needAuthGuard = _needAuthGuard;
        this._commonService = _commonService;
        this.societyFormCtrl = new FormControl();
        this.buildingFormCtrl = new FormControl();
        this.flatFormCtrl = new FormControl();
    }
    ModalComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._userService.getSociety().subscribe(function (data) {
            _this.societyList = data.dbResponse;
        }, function (error) {
            console.log(error);
            _this.societyList = error.message;
        });
        this.societyFormCtrl.valueChanges.subscribe(function (societyid) {
            console.log("on changes....", societyid);
            _this.sid = societyid;
            _this._userService.getBuilding(societyid).subscribe(function (data) {
                _this.buildingList = data.dbResponse;
            }, function (error) {
                console.log(error);
                _this.buildingList = error.message;
            });
        });
        this.buildingFormCtrl.valueChanges.subscribe(function (buildingName) {
            console.log("on changes....", buildingName);
            _this.buildingName = buildingName;
            _this._userService.getFlatList(_this.sid, buildingName).subscribe(function (data) {
                _this.flatList = data.dbResponse;
            }, function (error) {
                console.log(error);
                _this.flatList = error.message;
            });
        });
    };
    // onBuildingChange(buildingId) {
    //   this._userService.getFlatList(buildingId).subscribe((data) => {
    //     this.flatList = data.dbResponse;
    //   },
    //     error => {
    //       console.log(error);
    //       this.flatList = error.message;
    //     });
    // }
    ModalComponent.prototype.onSubmit = function () {
        console.log(this.modalName);
        if (this.modalName == 'buildings') {
            this.router.navigate(['societyManagment', this.sid, 'buildings']);
            this._commonService.emitShowListEvent(true);
        }
        else if (this.modalName == 'flats') {
            this.router.navigate(['societyManagment', this.sid, 'buildings', this.buildingName, 'flats']);
            this._commonService.emitShowListEvent(true);
        }
        else if (this.modalName == 'owners') {
            //this.router.navigate(['societyManagment','owners']);
            this.router.navigate(['societyManagment', this.sid, 'buildings', this.buildingName, 'owners']);
            this._commonService.emitShowListEvent(true);
            // setTimeout(()=>{
            //   this._commonService.emitOwnerListRequestobj({societyId:this.societyFormCtrl.value,buildingName:this.buildingFormCtrl.value,flatid:this.flatFormCtrl.value});
            // },1000) 
        }
    };
    __decorate([
        Input(),
        __metadata("design:type", String)
    ], ModalComponent.prototype, "modalName", void 0);
    ModalComponent = __decorate([
        Component({
            selector: 'app-modal',
            templateUrl: './modal.component.html',
            styleUrls: ['./modal.component.css']
        }),
        __metadata("design:paramtypes", [UserService, Router,
            NeedAuthGuard, CommonService])
    ], ModalComponent);
    return ModalComponent;
}());
export { ModalComponent };
//# sourceMappingURL=modal.component.js.map