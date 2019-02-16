(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<router-outlet></router-outlet>\r\n<!-- <calendar-component></calendar-component> -->\r\n<!-- <event-calendar-component></event-calendar-component> -->"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AppComponent = /** @class */ (function () {
    function AppComponent(router) {
        this.router = router;
        this.title = 'Better World';
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _material_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./material-module */ "./src/app/material-module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _society_mgmt_society_mgmt_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./society-mgmt/society-mgmt.component */ "./src/app/society-mgmt/society-mgmt.component.ts");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _society_mgmt_building_building_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./society-mgmt/building/building.component */ "./src/app/society-mgmt/building/building.component.ts");
/* harmony import */ var _society_mgmt_flats_flats_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./society-mgmt/flats/flats.component */ "./src/app/society-mgmt/flats/flats.component.ts");
/* harmony import */ var _society_mgmt_owners_owners_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./society-mgmt/owners/owners.component */ "./src/app/society-mgmt/owners/owners.component.ts");
/* harmony import */ var _society_mgmt_tenant_tenant_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./society-mgmt/tenant/tenant.component */ "./src/app/society-mgmt/tenant/tenant.component.ts");
/* harmony import */ var _error_error_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./error/error.component */ "./src/app/error/error.component.ts");
/* harmony import */ var _society_mgmt_society_header_society_header_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./society-mgmt/society-header/society-header.component */ "./src/app/society-mgmt/society-header/society-header.component.ts");
/* harmony import */ var _society_mgmt_register_register_member_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./society-mgmt/register/register-member.component */ "./src/app/society-mgmt/register/register-member.component.ts");
/* harmony import */ var _society_mgmt_login_login_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./society-mgmt/login/login.component */ "./src/app/society-mgmt/login/login.component.ts");
/* harmony import */ var _society_mgmt_society_society_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./society-mgmt/society/society.component */ "./src/app/society-mgmt/society/society.component.ts");
/* harmony import */ var _society_mgmt_modal_modal_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./society-mgmt/modal/modal.component */ "./src/app/society-mgmt/modal/modal.component.ts");
/* harmony import */ var _society_mgmt_services_NeedAuthGuard__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./society-mgmt/services/NeedAuthGuard */ "./src/app/society-mgmt/services/NeedAuthGuard.ts");
/* harmony import */ var _society_mgmt_calendar_calendar_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./society-mgmt/calendar/calendar.component */ "./src/app/society-mgmt/calendar/calendar.component.ts");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");
/* harmony import */ var angular_calendar_date_adapters_date_fns__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! angular-calendar/date-adapters/date-fns */ "./node_modules/angular-calendar/date-adapters/date-fns/index.js");
/* harmony import */ var angular_calendar_date_adapters_date_fns__WEBPACK_IMPORTED_MODULE_22___default = /*#__PURE__*/__webpack_require__.n(angular_calendar_date_adapters_date_fns__WEBPACK_IMPORTED_MODULE_22__);
/* harmony import */ var angularx_flatpickr__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! angularx-flatpickr */ "./node_modules/angularx-flatpickr/fesm5/angularx-flatpickr.js");
/* harmony import */ var angular_calendar__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! angular-calendar */ "./node_modules/angular-calendar/fesm5/angular-calendar.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _society_mgmt_event_calendar_event_calendar_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./society-mgmt/event-calendar/event-calendar.component */ "./src/app/society-mgmt/event-calendar/event-calendar.component.ts");
/* harmony import */ var _society_mgmt_register_society_reg_society_reg_component__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./society-mgmt/register/society-reg/society-reg.component */ "./src/app/society-mgmt/register/society-reg/society-reg.component.ts");
/* harmony import */ var _society_mgmt_register_building_reg_building_reg_component__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./society-mgmt/register/building-reg/building-reg.component */ "./src/app/society-mgmt/register/building-reg/building-reg.component.ts");
/* harmony import */ var _society_mgmt_register_flat_reg_flat_reg_component__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ./society-mgmt/register/flat-reg/flat-reg.component */ "./src/app/society-mgmt/register/flat-reg/flat-reg.component.ts");
/* harmony import */ var _society_mgmt_register_owner_reg_owner_reg_component__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ./society-mgmt/register/owner-reg/owner-reg.component */ "./src/app/society-mgmt/register/owner-reg/owner-reg.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};































var routes = [
    { path: "", redirectTo: '/home', pathMatch: "full" },
    { path: "login", component: _society_mgmt_login_login_component__WEBPACK_IMPORTED_MODULE_16__["LoginComponent"] },
    { path: "register", component: _society_mgmt_register_register_member_component__WEBPACK_IMPORTED_MODULE_15__["RegisterMemberComponent"],
        children: [
            { path: "society-reg", component: _society_mgmt_register_society_reg_society_reg_component__WEBPACK_IMPORTED_MODULE_27__["SocietyRegComponent"] },
            { path: "building-reg", component: _society_mgmt_register_building_reg_building_reg_component__WEBPACK_IMPORTED_MODULE_28__["BuildingRegComponent"] },
            { path: "flat-reg", component: _society_mgmt_register_flat_reg_flat_reg_component__WEBPACK_IMPORTED_MODULE_29__["FlatRegComponent"] },
            { path: "owner-reg", component: _society_mgmt_register_owner_reg_owner_reg_component__WEBPACK_IMPORTED_MODULE_30__["OwnerRegComponent"] }
        ]
    },
    { path: "home", component: _home_home_component__WEBPACK_IMPORTED_MODULE_8__["HomeComponent"] },
    {
        path: "societyManagment", component: _society_mgmt_society_mgmt_component__WEBPACK_IMPORTED_MODULE_7__["SocietyMgmtComponent"],
        children: [
            { path: "society", component: _society_mgmt_society_society_component__WEBPACK_IMPORTED_MODULE_17__["SocietyComponent"] },
            { path: ":societyid/buildings", component: _society_mgmt_building_building_component__WEBPACK_IMPORTED_MODULE_9__["BuildingComponent"] },
            {
                path: ":societyid/buildings/:buildingName/flats",
                component: _society_mgmt_flats_flats_component__WEBPACK_IMPORTED_MODULE_10__["FlatsComponent"],
                canActivate: [_society_mgmt_services_NeedAuthGuard__WEBPACK_IMPORTED_MODULE_19__["NeedAuthGuard"]]
            },
            {
                path: ":societyid/buildings/:buildingName/flats/:flatId/owner",
                component: _society_mgmt_owners_owners_component__WEBPACK_IMPORTED_MODULE_11__["OwnersComponent"],
                canActivate: [_society_mgmt_services_NeedAuthGuard__WEBPACK_IMPORTED_MODULE_19__["NeedAuthGuard"]]
            },
            { path: "owners", component: _society_mgmt_owners_owners_component__WEBPACK_IMPORTED_MODULE_11__["OwnersComponent"], canActivate: [_society_mgmt_services_NeedAuthGuard__WEBPACK_IMPORTED_MODULE_19__["NeedAuthGuard"]] },
            { path: "tenats", component: _society_mgmt_tenant_tenant_component__WEBPACK_IMPORTED_MODULE_12__["TenantComponent"], canActivate: [_society_mgmt_services_NeedAuthGuard__WEBPACK_IMPORTED_MODULE_19__["NeedAuthGuard"]] },
        ]
    },
    { path: "error", component: _error_error_component__WEBPACK_IMPORTED_MODULE_13__["ErrorComponent"] },
    { path: "**", component: _error_error_component__WEBPACK_IMPORTED_MODULE_13__["ErrorComponent"] }
];
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"],
                _society_mgmt_society_mgmt_component__WEBPACK_IMPORTED_MODULE_7__["SocietyMgmtComponent"],
                _home_home_component__WEBPACK_IMPORTED_MODULE_8__["HomeComponent"],
                _society_mgmt_building_building_component__WEBPACK_IMPORTED_MODULE_9__["BuildingComponent"],
                _society_mgmt_flats_flats_component__WEBPACK_IMPORTED_MODULE_10__["FlatsComponent"],
                _society_mgmt_owners_owners_component__WEBPACK_IMPORTED_MODULE_11__["OwnersComponent"],
                _society_mgmt_tenant_tenant_component__WEBPACK_IMPORTED_MODULE_12__["TenantComponent"],
                _error_error_component__WEBPACK_IMPORTED_MODULE_13__["ErrorComponent"],
                _society_mgmt_society_header_society_header_component__WEBPACK_IMPORTED_MODULE_14__["SocietyHeaderComponent"],
                _society_mgmt_register_register_member_component__WEBPACK_IMPORTED_MODULE_15__["RegisterMemberComponent"],
                _society_mgmt_login_login_component__WEBPACK_IMPORTED_MODULE_16__["LoginComponent"],
                _society_mgmt_society_society_component__WEBPACK_IMPORTED_MODULE_17__["SocietyComponent"],
                _society_mgmt_modal_modal_component__WEBPACK_IMPORTED_MODULE_18__["ModalComponent"],
                _society_mgmt_calendar_calendar_component__WEBPACK_IMPORTED_MODULE_20__["CalendarComponent"],
                _society_mgmt_event_calendar_event_calendar_component__WEBPACK_IMPORTED_MODULE_26__["EventCalendarComponent"],
                _society_mgmt_register_society_reg_society_reg_component__WEBPACK_IMPORTED_MODULE_27__["SocietyRegComponent"],
                _society_mgmt_register_building_reg_building_reg_component__WEBPACK_IMPORTED_MODULE_28__["BuildingRegComponent"],
                _society_mgmt_register_flat_reg_flat_reg_component__WEBPACK_IMPORTED_MODULE_29__["FlatRegComponent"],
                _society_mgmt_register_owner_reg_owner_reg_component__WEBPACK_IMPORTED_MODULE_30__["OwnerRegComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forRoot(routes),
                _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_21__["NgbModalModule"],
                angularx_flatpickr__WEBPACK_IMPORTED_MODULE_23__["FlatpickrModule"].forRoot(),
                angular_calendar__WEBPACK_IMPORTED_MODULE_24__["CalendarModule"].forRoot({
                    provide: angular_calendar__WEBPACK_IMPORTED_MODULE_24__["DateAdapter"],
                    useFactory: angular_calendar_date_adapters_date_fns__WEBPACK_IMPORTED_MODULE_22__["adapterFactory"]
                }),
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_25__["BrowserAnimationsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"],
                _material_module__WEBPACK_IMPORTED_MODULE_5__["MaterialModule"]
            ],
            providers: [_society_mgmt_services_NeedAuthGuard__WEBPACK_IMPORTED_MODULE_19__["NeedAuthGuard"]],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/error/error.component.css":
/*!*******************************************!*\
  !*** ./src/app/error/error.component.css ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/error/error.component.html":
/*!********************************************!*\
  !*** ./src/app/error/error.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h1>Page not found!!!</h1>"

/***/ }),

/***/ "./src/app/error/error.component.ts":
/*!******************************************!*\
  !*** ./src/app/error/error.component.ts ***!
  \******************************************/
/*! exports provided: ErrorComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ErrorComponent", function() { return ErrorComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ErrorComponent = /** @class */ (function () {
    function ErrorComponent() {
    }
    ErrorComponent.prototype.ngOnInit = function () {
    };
    ErrorComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-error',
            template: __webpack_require__(/*! ./error.component.html */ "./src/app/error/error.component.html"),
            styles: [__webpack_require__(/*! ./error.component.css */ "./src/app/error/error.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], ErrorComponent);
    return ErrorComponent;
}());



/***/ }),

/***/ "./src/app/home/home.component.css":
/*!*****************************************!*\
  !*** ./src/app/home/home.component.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".homeIconList{\n    background-color: rgba(242, 242,242, .45);\n    min-width: 220px;\n    min-height: 80px;\n    margin: 10px;\n}\n.m-r-20 {\n    margin-right: 20px; }"

/***/ }),

/***/ "./src/app/home/home.component.html":
/*!******************************************!*\
  !*** ./src/app/home/home.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container mainContainer\">\n  <div class=\"row h-100 justify-content-center align-items-center\">\n    <div class=\"col-xs-12 col-sm-12 text-center\">\n      <img src=\"assets/logo.png\" class=\"img-fluid logo-img\" />\n    </div>\n    <!--<div class=\"col-xs-6 col-sm-6 text-right\">\n      <a routerLink=\"/home\" class=''>\n        <img src=\"assets/logo.png\" class=\"img-fluid\" />\n      </a>\n    </div>-->\n  </div>\n  <br>\n  <div class=\"row h-100 justify-content-center align-items-center\">\n    <div class=\"col-sm-12 text-center\">\n      <h2><b>WELCOME TO SOCIETY MANAGEMENT</b></h2>\n      \n    </div>\n  </div>\n  <div class=\"row\">\n\n    <div class=\"col-xs-12 col-sm-12 text-center contentContainer\">\n      <a routerLink=\"/societyManagment\">\n      <button mat-raised-button color=\"primary\">Society Management</button></a>\n    </div>\n    <div class=\"col-xs-12 col-sm-12 text-center contentContainer\">\n      <img src=\"assets/banner.png\">\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/home/home.component.ts":
/*!****************************************!*\
  !*** ./src/app/home/home.component.ts ***!
  \****************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var HomeComponent = /** @class */ (function () {
    function HomeComponent() {
    }
    HomeComponent.prototype.ngOnInit = function () {
    };
    HomeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(/*! ./home.component.html */ "./src/app/home/home.component.html"),
            styles: [__webpack_require__(/*! ./home.component.css */ "./src/app/home/home.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/material-module.ts":
/*!************************************!*\
  !*** ./src/app/material-module.ts ***!
  \************************************/
/*! exports provided: MaterialModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MaterialModule", function() { return MaterialModule; });
/* harmony import */ var _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/cdk/drag-drop */ "./node_modules/@angular/cdk/esm5/drag-drop.es5.js");
/* harmony import */ var _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/cdk/scrolling */ "./node_modules/@angular/cdk/esm5/scrolling.es5.js");
/* harmony import */ var _angular_cdk_table__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/cdk/table */ "./node_modules/@angular/cdk/esm5/table.es5.js");
/* harmony import */ var _angular_cdk_tree__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/cdk/tree */ "./node_modules/@angular/cdk/esm5/tree.es5.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var MaterialModule = /** @class */ (function () {
    function MaterialModule() {
    }
    MaterialModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["NgModule"])({
            exports: [
                _angular_cdk_table__WEBPACK_IMPORTED_MODULE_2__["CdkTableModule"],
                _angular_cdk_tree__WEBPACK_IMPORTED_MODULE_3__["CdkTreeModule"],
                _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_0__["DragDropModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatAutocompleteModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatBadgeModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatBottomSheetModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatButtonModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatButtonToggleModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatCardModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatCheckboxModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatChipsModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatStepperModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatDatepickerModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatDialogModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatDividerModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatExpansionModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatGridListModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatIconModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatInputModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatListModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatMenuModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatNativeDateModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatPaginatorModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatProgressBarModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatProgressSpinnerModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatRadioModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatRippleModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatSelectModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatSidenavModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatSliderModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatSlideToggleModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatSnackBarModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatSortModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatTableModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatTabsModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatToolbarModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatTooltipModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatTreeModule"],
                _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_1__["ScrollingModule"],
            ]
        })
    ], MaterialModule);
    return MaterialModule;
}());

/**  Copyright 2018 Google Inc. All Rights Reserved.
    Use of this source code is governed by an MIT-style license that
    can be found in the LICENSE file at http://angular.io/license */ 


/***/ }),

/***/ "./src/app/society-mgmt/building/building.component.css":
/*!**************************************************************!*\
  !*** ./src/app/society-mgmt/building/building.component.css ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/society-mgmt/building/building.component.html":
/*!***************************************************************!*\
  !*** ./src/app/society-mgmt/building/building.component.html ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<div class=\"row\" *ngIf=\"societyInfo\">\n    <div class=\"col-xs-12 col-sm-12 text-left contentContainer\">    \n        Society ID:  {{societyInfo && societyInfo[0]?.societyid}} <BR>\n      Society Name: {{societyInfo && societyInfo[0]?.societyname}}<br>\n      Society Address: {{societyInfo && societyInfo[0]?.address}},{{societyInfo && societyInfo[0]?.pincode}}<br>\n    </div>\n  </div>\n<div class=\"row\">\n    <div class=\"col-xs-12 col-sm-12 text-center contentContainer\">\n      \n      <table class=\"table\">\n          <thead>\n            <tr>\n              <th>buildingid</th>\n              <th>buildingname</th>\n              <th>Flats</th>\n              <th>delete</th>\n            </tr>\n          </thead>\n          <tbody>\n            <tr *ngFor=\"let building of buildingList\">\n              <td>{{building.buildingid}}</td>\n              <td>{{building.buildingname}}</td>\n              <td><button mat-stroked-button (click)=\"showFlats(societyInfo[0]?.societyid,building.buildingname)\">  <svg width=\"24\" height=\"24\" viewBox=\"0 0 24 24\">\n                <path d=\"M0 0h24v24H0z\" fill=\"none\" />\n                <path d=\"M20 2H4c-1.1 0-2 .9-2 2v16c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zM8 20H4v-4h4v4zm0-6H4v-4h4v4zm0-6H4V4h4v4zm6 12h-4v-4h4v4zm0-6h-4v-4h4v4zm0-6h-4V4h4v4zm6 12h-4v-4h4v4zm0-6h-4v-4h4v4zm0-6h-4V4h4v4z\" /></svg>Show Flats\n                </button></td>\n              <td><button mat-stroked-button (click)=\"goToBuilding(element.societyid)\"> <svg\n                xmlns=\"http://www.w3.org/2000/svg\" width=\"24\" height=\"24\" viewBox=\"0 0 24 24\">\n                <path d=\"M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM19 4h-3.5l-1-1h-5l-1 1H5v2h14V4z\" />\n                <path d=\"M0 0h24v24H0z\" fill=\"none\" /></svg>\n            </button></td>\n            </tr>\n          </tbody>\n        </table>\n    </div>  \n  </div>\n<div *ngFor=\"\">\n    {{building | json}}\n</div>\n<div [hidden]=\"!buildingList\">\n  <event-calendar-component></event-calendar-component>\n</div>\n\n"

/***/ }),

/***/ "./src/app/society-mgmt/building/building.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/society-mgmt/building/building.component.ts ***!
  \*************************************************************/
/*! exports provided: BuildingComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BuildingComponent", function() { return BuildingComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/user.service */ "./src/app/society-mgmt/services/user.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_common_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/common.service */ "./src/app/society-mgmt/services/common.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var BuildingComponent = /** @class */ (function () {
    function BuildingComponent(_userService, router, route, _commonService) {
        this._userService = _userService;
        this.router = router;
        this.route = route;
        this._commonService = _commonService;
    }
    BuildingComponent.prototype.ngOnInit = function () {
        this.getBuildingList();
    };
    BuildingComponent.prototype.ngOnChanges = function () {
        this.getBuildingList();
    };
    BuildingComponent.prototype.getBuildingList = function () {
        var _this = this;
        //this.societyid = this.route.snapshot.paramMap.get('societyid');
        this.route.params.subscribe(function (value) {
            _this.societyid = value["societyid"]; // get param
            console.log("this.societyid:::" + JSON.stringify(value));
            _this.updateCalendar(_this.societyid);
            _this._userService.getBuilding(_this.societyid).subscribe(function (data) {
                _this.buildingList = data.dbResponse;
            }, function (error) {
                console.log(error);
                _this.society = error.message;
            });
            _this._userService.getSocietyInfo(_this.societyid).subscribe(function (data) {
                _this.societyInfo = data.dbResponse;
            }, function (error) {
                console.log(error);
                _this.society = error.message;
            });
        });
    };
    BuildingComponent.prototype.updateCalendar = function (societyid) {
        var _this = this;
        this._userService.getSocietyEvents(societyid).subscribe(function (societyEvevts) {
            _this._commonService.emitEventCalanderData(societyEvevts.dbResponse);
        }, function (error) {
            console.log(error);
            _this.society = error.message;
        });
    };
    BuildingComponent.prototype.showFlats = function (societyId, buildingName) {
        this.router.navigate(['societyManagment', societyId, 'buildings', buildingName, 'flats']);
        this._commonService.emitShowListEvent(true);
    };
    BuildingComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-building',
            template: __webpack_require__(/*! ./building.component.html */ "./src/app/society-mgmt/building/building.component.html"),
            styles: [__webpack_require__(/*! ./building.component.css */ "./src/app/society-mgmt/building/building.component.css")]
        }),
        __metadata("design:paramtypes", [_services_user_service__WEBPACK_IMPORTED_MODULE_1__["UserService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], _services_common_service__WEBPACK_IMPORTED_MODULE_3__["CommonService"]])
    ], BuildingComponent);
    return BuildingComponent;
}());



/***/ }),

/***/ "./src/app/society-mgmt/calendar/calendar.component.css":
/*!**************************************************************!*\
  !*** ./src/app/society-mgmt/calendar/calendar.component.css ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "h3 {\n    margin: 0 0 10px;\n  }\n  \n  pre {\n    background-color: #f5f5f5;\n    padding: 15px;\n  }"

/***/ }),

/***/ "./src/app/society-mgmt/calendar/calendar.component.html":
/*!***************************************************************!*\
  !*** ./src/app/society-mgmt/calendar/calendar.component.html ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ng-template #modalContent let-close=\"close\">\n  <div class=\"modal-header\">\n    <h5 class=\"modal-title\">Event action occurred</h5>\n    <button type=\"button\" class=\"close\" (click)=\"close()\">\n      <span aria-hidden=\"true\">&times;</span>\n    </button>\n  </div>\n  <div class=\"modal-body\">\n    <div>\n      Action:\n      <pre>{{ modalData?.action }}</pre>\n    </div>\n    <div>\n      Event:\n      <pre>{{ modalData?.event | json }}</pre>\n    </div>\n  </div>\n  <div class=\"modal-footer\">\n    <button type=\"button\" class=\"btn btn-outline-secondary\" (click)=\"close()\">OK</button>\n  </div>\n</ng-template>\n\n<div class=\"text-center\">\n  <div>\n    <div class=\"btn-group\">\n      <div\n        class=\"btn btn-primary\"\n        mwlCalendarPreviousView\n        [view]=\"view\"\n        [(viewDate)]=\"viewDate\"\n        (viewDateChange)=\"activeDayIsOpen = false\">\n        Previous\n      </div>\n      <div\n        class=\"btn btn-outline-secondary\"\n        mwlCalendarToday\n        [(viewDate)]=\"viewDate\">\n        Today\n      </div>\n      <div\n        class=\"btn btn-primary\"\n        mwlCalendarNextView\n        [view]=\"view\"\n        [(viewDate)]=\"viewDate\"\n        (viewDateChange)=\"activeDayIsOpen = false\">\n        Next\n      </div>\n    </div>\n  </div>\n  <div>\n    <h3>{{ viewDate | calendarDate:(view + 'ViewTitle'):'en' }}</h3>\n  </div>\n  <div>\n    <div class=\"btn-group\">\n      <div\n        class=\"btn btn-primary\"\n        (click)=\"view = CalendarView.Month\"\n        [class.active]=\"view === CalendarView.Month\">\n        Month\n      </div>\n      <div\n        class=\"btn btn-primary\"\n        (click)=\"view = CalendarView.Week\"\n        [class.active]=\"view === CalendarView.Week\">\n        Week\n      </div>\n      <div\n        class=\"btn btn-primary\"\n        (click)=\"view = CalendarView.Day\"\n        [class.active]=\"view === CalendarView.Day\">\n        Day\n      </div>\n    </div>\n  </div>\n</div>\n<br>\n<div [ngSwitch]=\"view\">\n  <mwl-calendar-month-view\n    *ngSwitchCase=\"CalendarView.Month\"\n    [viewDate]=\"viewDate\"\n    [events]=\"events\"\n    [refresh]=\"refresh\"\n    [activeDayIsOpen]=\"activeDayIsOpen\"\n    (dayClicked)=\"dayClicked($event.day)\"\n    (eventClicked)=\"handleEvent('Clicked', $event.event)\"\n    (eventTimesChanged)=\"eventTimesChanged($event)\">\n  </mwl-calendar-month-view>\n  <mwl-calendar-week-view\n    *ngSwitchCase=\"CalendarView.Week\"\n    [viewDate]=\"viewDate\"\n    [events]=\"events\"\n    [refresh]=\"refresh\"\n    (eventClicked)=\"handleEvent('Clicked', $event.event)\"\n    (eventTimesChanged)=\"eventTimesChanged($event)\">\n  </mwl-calendar-week-view>\n  <mwl-calendar-day-view\n    *ngSwitchCase=\"CalendarView.Day\"\n    [viewDate]=\"viewDate\"\n    [events]=\"events\"\n    [refresh]=\"refresh\"\n    (eventClicked)=\"handleEvent('Clicked', $event.event)\"\n    (eventTimesChanged)=\"eventTimesChanged($event)\">\n  </mwl-calendar-day-view>\n</div>\n\n<br><br><br>\n\n<h3>\n  Edit events\n  <button\n    class=\"btn btn-primary pull-right\"\n    (click)=\"addEvent()\">\n    Add new\n  </button>\n  <div class=\"clearfix\"></div>\n</h3>\n\n<!-- <table class=\"table table-bordered\">\n\n  <thead>\n    <tr>\n      <th>Title</th>\n      <th>Primary color</th>\n      <th>Secondary color</th>\n      <th>Starts at</th>\n      <th>Ends at</th>\n      <th>Remove</th>\n    </tr>\n  </thead>\n\n  <tbody>\n    <tr *ngFor=\"let event of events; let index = index\">\n      <td>\n        <input\n          type=\"text\"\n          class=\"form-control\"\n          [(ngModel)]=\"event.title\"\n          (keyup)=\"refresh.next()\">\n      </td>\n      <td>\n        <input\n          type=\"color\"\n          [(ngModel)]=\"event.color.primary\"\n          (change)=\"refresh.next()\">\n      </td>\n      <td>\n        <input\n          type=\"color\"\n          [(ngModel)]=\"event.color.secondary\"\n          (change)=\"refresh.next()\">\n      </td>\n      <td>\n        <input\n          class=\"form-control\"\n          type=\"text\"\n          mwlFlatpickr\n          [(ngModel)]=\"event.start\"\n          (ngModelChange)=\"refresh.next()\"\n          [altInput]=\"true\"\n          [convertModelValue]=\"true\"\n          [enableTime]=\"true\"\n          dateFormat=\"Y-m-dTH:i\"\n          altFormat=\"F j, Y H:i\"\n          placeholder=\"Not set\">\n      </td>\n      <td>\n        <input\n          class=\"form-control\"\n          type=\"text\"\n          mwlFlatpickr\n          [(ngModel)]=\"event.end\"\n          (ngModelChange)=\"refresh.next()\"\n          [altInput]=\"true\"\n          [convertModelValue]=\"true\"\n          [enableTime]=\"true\"\n          dateFormat=\"Y-m-dTH:i\"\n          altFormat=\"F j, Y H:i\"\n          placeholder=\"Not set\">\n      </td>\n      <td>\n        <button\n          class=\"btn btn-danger\"\n          (click)=\"events.splice(index, 1); refresh.next()\">\n          Delete\n        </button>\n      </td>\n    </tr>\n  </tbody>\n\n</table> -->"

/***/ }),

/***/ "./src/app/society-mgmt/calendar/calendar.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/society-mgmt/calendar/calendar.component.ts ***!
  \*************************************************************/
/*! exports provided: CalendarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CalendarComponent", function() { return CalendarComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! date-fns */ "./node_modules/date-fns/index.js");
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(date_fns__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");
/* harmony import */ var angular_calendar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! angular-calendar */ "./node_modules/angular-calendar/fesm5/angular-calendar.js");
/* harmony import */ var _services_common_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./../services/common.service */ "./src/app/society-mgmt/services/common.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var colors = {
    red: {
        primary: '#ad2121',
        secondary: '#FAE3E3'
    },
    blue: {
        primary: '#1e90ff',
        secondary: '#D1E8FF'
    },
    yellow: {
        primary: '#e3bc08',
        secondary: '#FDF1BA'
    }
};
var CalendarComponent = /** @class */ (function () {
    function CalendarComponent(modal, _commonService) {
        var _this = this;
        this.modal = modal;
        this._commonService = _commonService;
        this.view = angular_calendar__WEBPACK_IMPORTED_MODULE_4__["CalendarView"].Month;
        this.CalendarView = angular_calendar__WEBPACK_IMPORTED_MODULE_4__["CalendarView"];
        this.viewDate = new Date();
        this.actions = [
            {
                label: '<i class="fa fa-fw fa-pencil"></i>',
                onClick: function (_a) {
                    var event = _a.event;
                    _this.handleEvent('Edited', event);
                }
            },
            {
                label: '<i class="fa fa-fw fa-times"></i>',
                onClick: function (_a) {
                    var event = _a.event;
                    _this.events = _this.events.filter(function (iEvent) { return iEvent !== event; });
                    _this.handleEvent('Deleted', event);
                }
            }
        ];
        this.refresh = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        this.events = [
            {
                start: Object(date_fns__WEBPACK_IMPORTED_MODULE_1__["subDays"])(Object(date_fns__WEBPACK_IMPORTED_MODULE_1__["startOfDay"])(new Date()), 1),
                end: Object(date_fns__WEBPACK_IMPORTED_MODULE_1__["addDays"])(new Date(), 1),
                title: 'A 3 day event',
                color: colors.red,
                actions: this.actions,
                allDay: true,
                resizable: {
                    beforeStart: true,
                    afterEnd: true
                },
                draggable: true
            },
            {
                start: Object(date_fns__WEBPACK_IMPORTED_MODULE_1__["startOfDay"])(new Date()),
                title: 'An event with no end date',
                color: colors.yellow,
                actions: this.actions
            },
            {
                start: Object(date_fns__WEBPACK_IMPORTED_MODULE_1__["subDays"])(Object(date_fns__WEBPACK_IMPORTED_MODULE_1__["endOfMonth"])(new Date()), 3),
                end: Object(date_fns__WEBPACK_IMPORTED_MODULE_1__["addDays"])(Object(date_fns__WEBPACK_IMPORTED_MODULE_1__["endOfMonth"])(new Date()), 3),
                title: 'A long event that spans 2 months',
                color: colors.blue,
                allDay: true
            },
            {
                start: Object(date_fns__WEBPACK_IMPORTED_MODULE_1__["addHours"])(Object(date_fns__WEBPACK_IMPORTED_MODULE_1__["startOfDay"])(new Date()), 2),
                end: new Date(),
                title: 'A draggable and resizable event',
                color: colors.yellow,
                actions: this.actions,
                resizable: {
                    beforeStart: true,
                    afterEnd: true
                },
                draggable: true
            }
        ];
        this.activeDayIsOpen = true;
    }
    CalendarComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._commonService.calenderData.subscribe(function (data) {
            _this.events = [];
            data.forEach(function (element) {
                console.log("****", element);
                _this.events.push({
                    title: 'payment of rs ' + element.paid + ' for flat id' + element.flatid + ' Reciept Number is ' + element.id + ' and ownerid is ' + element.ownerid,
                    start: new Date(element.createddate),
                    color: colors.red,
                });
                _this.refresh.next();
            });
        });
    };
    CalendarComponent.prototype.dayClicked = function (_a) {
        var date = _a.date, events = _a.events;
        if (Object(date_fns__WEBPACK_IMPORTED_MODULE_1__["isSameMonth"])(date, this.viewDate)) {
            this.viewDate = date;
            if ((Object(date_fns__WEBPACK_IMPORTED_MODULE_1__["isSameDay"])(this.viewDate, date) && this.activeDayIsOpen === true) ||
                events.length === 0) {
                this.activeDayIsOpen = false;
            }
            else {
                this.activeDayIsOpen = true;
            }
        }
    };
    CalendarComponent.prototype.eventTimesChanged = function (_a) {
        var event = _a.event, newStart = _a.newStart, newEnd = _a.newEnd;
        event.start = newStart;
        event.end = newEnd;
        this.handleEvent('Dropped or resized', event);
        this.refresh.next();
    };
    CalendarComponent.prototype.handleEvent = function (action, event) {
        this.modalData = { event: event, action: action };
        this.modal.open(this.modalContent, { size: 'lg' });
    };
    CalendarComponent.prototype.addEvent = function () {
        this.events.push({
            title: 'New event',
            start: Object(date_fns__WEBPACK_IMPORTED_MODULE_1__["startOfDay"])(new Date()),
            end: Object(date_fns__WEBPACK_IMPORTED_MODULE_1__["endOfDay"])(new Date()),
            color: colors.red,
            draggable: true,
            resizable: {
                beforeStart: true,
                afterEnd: true
            }
        });
        this.refresh.next();
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('modalContent'),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"])
    ], CalendarComponent.prototype, "modalContent", void 0);
    CalendarComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'calendar-component',
            changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush,
            styles: [__webpack_require__(/*! ./calendar.component.css */ "./src/app/society-mgmt/calendar/calendar.component.css")],
            template: __webpack_require__(/*! ./calendar.component.html */ "./src/app/society-mgmt/calendar/calendar.component.html")
        }),
        __metadata("design:paramtypes", [_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__["NgbModal"], _services_common_service__WEBPACK_IMPORTED_MODULE_5__["CommonService"]])
    ], CalendarComponent);
    return CalendarComponent;
}());



/***/ }),

/***/ "./src/app/society-mgmt/config.json":
/*!******************************************!*\
  !*** ./src/app/society-mgmt/config.json ***!
  \******************************************/
/*! exports provided: HOST_NAME, default */
/***/ (function(module) {

module.exports = {"HOST_NAME":"http://nodebw-env.xctnnannuz.us-east-1.elasticbeanstalk.com"};

/***/ }),

/***/ "./src/app/society-mgmt/event-calendar/event-calendar.component.css":
/*!**************************************************************************!*\
  !*** ./src/app/society-mgmt/event-calendar/event-calendar.component.css ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "h3 {\n    margin: 0 0 10px;\n  }\n  \n  pre {\n    background-color: #f5f5f5;\n    padding: 15px;\n  }"

/***/ }),

/***/ "./src/app/society-mgmt/event-calendar/event-calendar.component.html":
/*!***************************************************************************!*\
  !*** ./src/app/society-mgmt/event-calendar/event-calendar.component.html ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ng-template #modalContent let-close=\"close\">\n  <div class=\"modal-header\">\n    <h5 class=\"modal-title\">Event action occurred</h5>\n    <button type=\"button\" class=\"close\" (click)=\"close()\">\n      <span aria-hidden=\"true\">&times;</span>\n    </button>\n  </div>\n  <div class=\"modal-body\">\n    <div>\n      Action:\n      <pre>{{ modalData?.action }}</pre>\n    </div>\n    <div>\n      Event:\n      <pre>{{ modalData?.event | json }}</pre>\n    </div>\n  </div>\n  <div class=\"modal-footer\">\n    <button type=\"button\" class=\"btn btn-outline-secondary\" (click)=\"close()\">OK</button>\n  </div>\n</ng-template>\n\n<div class=\"text-center\">\n  <div>\n    <div class=\"btn-group\">\n      <div\n        class=\"btn btn-primary\"\n        mwlCalendarPreviousView\n        [view]=\"view\"\n        [(viewDate)]=\"viewDate\"\n        (viewDateChange)=\"activeDayIsOpen = false\">\n        Previous\n      </div>\n      <div\n        class=\"btn btn-outline-secondary\"\n        mwlCalendarToday\n        [(viewDate)]=\"viewDate\">\n        Today\n      </div>\n      <div\n        class=\"btn btn-primary\"\n        mwlCalendarNextView\n        [view]=\"view\"\n        [(viewDate)]=\"viewDate\"\n        (viewDateChange)=\"activeDayIsOpen = false\">\n        Next\n      </div>\n    </div>\n  </div>\n  <div>\n    <h3>{{ viewDate | calendarDate:(view + 'ViewTitle'):'en' }}</h3>\n  </div>\n  <div>\n    <div class=\"btn-group\">\n      <div\n        class=\"btn btn-primary\"\n        (click)=\"view = CalendarView.Month\"\n        [class.active]=\"view === CalendarView.Month\">\n        Month\n      </div>\n      <div\n        class=\"btn btn-primary\"\n        (click)=\"view = CalendarView.Week\"\n        [class.active]=\"view === CalendarView.Week\">\n        Week\n      </div>\n      <div\n        class=\"btn btn-primary\"\n        (click)=\"view = CalendarView.Day\"\n        [class.active]=\"view === CalendarView.Day\">\n        Day\n      </div>\n    </div>\n  </div>\n</div>\n<br>\n<div [ngSwitch]=\"view\">\n  <mwl-calendar-month-view\n    *ngSwitchCase=\"CalendarView.Month\"\n    [viewDate]=\"viewDate\"\n    [events]=\"events\"\n    [refresh]=\"refresh\"\n    [activeDayIsOpen]=\"activeDayIsOpen\"\n    (dayClicked)=\"dayClicked($event.day)\"\n    (eventClicked)=\"handleEvent('Clicked', $event.event)\"\n    (eventTimesChanged)=\"eventTimesChanged($event)\">\n  </mwl-calendar-month-view>\n  <mwl-calendar-week-view\n    *ngSwitchCase=\"CalendarView.Week\"\n    [viewDate]=\"viewDate\"\n    [events]=\"events\"\n    [refresh]=\"refresh\"\n    (eventClicked)=\"handleEvent('Clicked', $event.event)\"\n    (eventTimesChanged)=\"eventTimesChanged($event)\">\n  </mwl-calendar-week-view>\n  <mwl-calendar-day-view\n    *ngSwitchCase=\"CalendarView.Day\"\n    [viewDate]=\"viewDate\"\n    [events]=\"events\"\n    [refresh]=\"refresh\"\n    (eventClicked)=\"handleEvent('Clicked', $event.event)\"\n    (eventTimesChanged)=\"eventTimesChanged($event)\">\n  </mwl-calendar-day-view>\n</div>\n\n<br><br><br>\n\n<h3>\n  Edit events\n  <button\n    class=\"btn btn-primary pull-right\"\n    (click)=\"addEvent()\">\n    Add new\n  </button>\n  <div class=\"clearfix\"></div>\n</h3>\n\n<table class=\"table table-bordered\">\n\n  <thead>\n    <tr>\n      <th>Title</th>\n      <th>Primary color</th>\n      <th>Secondary color</th>\n      <th>Starts at</th>\n      <th>Ends at</th>\n      <th>Remove</th>\n    </tr>\n  </thead>\n\n  <tbody>\n    <tr *ngFor=\"let event of events; let index = index\">\n      <td>\n        <input\n          type=\"text\"\n          class=\"form-control\"\n          [(ngModel)]=\"event.title\"\n          (keyup)=\"refresh.next()\">\n      </td>\n      <td>\n        <input\n          type=\"color\"\n          [(ngModel)]=\"event.color.primary\"\n          (change)=\"refresh.next()\">\n      </td>\n      <td>\n        <input\n          type=\"color\"\n          [(ngModel)]=\"event.color.secondary\"\n          (change)=\"refresh.next()\">\n      </td>\n      <td>\n        <input\n          class=\"form-control\"\n          type=\"text\"\n          mwlFlatpickr\n          [(ngModel)]=\"event.start\"\n          (ngModelChange)=\"refresh.next()\"\n          [altInput]=\"true\"\n          [convertModelValue]=\"true\"\n          [enableTime]=\"true\"\n          dateFormat=\"Y-m-dTH:i\"\n          altFormat=\"F j, Y H:i\"\n          placeholder=\"Not set\">\n      </td>\n      <td>\n        <input\n          class=\"form-control\"\n          type=\"text\"\n          mwlFlatpickr\n          [(ngModel)]=\"event.end\"\n          (ngModelChange)=\"refresh.next()\"\n          [altInput]=\"true\"\n          [convertModelValue]=\"true\"\n          [enableTime]=\"true\"\n          dateFormat=\"Y-m-dTH:i\"\n          altFormat=\"F j, Y H:i\"\n          placeholder=\"Not set\">\n      </td>\n      <td>\n        <button\n          class=\"btn btn-danger\"\n          (click)=\"events.splice(index, 1); refresh.next()\">\n          Delete\n        </button>\n      </td>\n    </tr>\n  </tbody>\n\n</table>"

/***/ }),

/***/ "./src/app/society-mgmt/event-calendar/event-calendar.component.ts":
/*!*************************************************************************!*\
  !*** ./src/app/society-mgmt/event-calendar/event-calendar.component.ts ***!
  \*************************************************************************/
/*! exports provided: EventCalendarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EventCalendarComponent", function() { return EventCalendarComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! date-fns */ "./node_modules/date-fns/index.js");
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(date_fns__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");
/* harmony import */ var angular_calendar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! angular-calendar */ "./node_modules/angular-calendar/fesm5/angular-calendar.js");
/* harmony import */ var _services_common_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../services/common.service */ "./src/app/society-mgmt/services/common.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var colors = {
    red: {
        primary: '#ad2121',
        secondary: '#FAE3E3'
    },
    blue: {
        primary: '#1e90ff',
        secondary: '#D1E8FF'
    },
    yellow: {
        primary: '#e3bc08',
        secondary: '#FDF1BA'
    }
};
var EventCalendarComponent = /** @class */ (function () {
    function EventCalendarComponent(modal, _commonService) {
        var _this = this;
        this.modal = modal;
        this._commonService = _commonService;
        this.view = angular_calendar__WEBPACK_IMPORTED_MODULE_4__["CalendarView"].Month;
        this.CalendarView = angular_calendar__WEBPACK_IMPORTED_MODULE_4__["CalendarView"];
        this.viewDate = new Date();
        this.actions = [
            {
                label: '<i class="fa fa-fw fa-pencil"></i>',
                onClick: function (_a) {
                    var event = _a.event;
                    _this.handleEvent('Edited', event);
                }
            },
            {
                label: '<i class="fa fa-fw fa-times"></i>',
                onClick: function (_a) {
                    var event = _a.event;
                    _this.events = _this.events.filter(function (iEvent) { return iEvent !== event; });
                    _this.handleEvent('Deleted', event);
                }
            }
        ];
        this.refresh = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        this.events = [
        /* {
           start: subDays(startOfDay(new Date()), 1),
           end: addDays(new Date(), 1),
           title: 'A 3 day event',
           color: colors.red,
           actions: this.actions,
           allDay: true,
           resizable: {
             beforeStart: true,
             afterEnd: true
           },
           draggable: true
         },
         {
           start: startOfDay(new Date()),
           title: 'An event with no end date',
           color: colors.yellow,
           actions: this.actions
         },
         {
           start: new Date('2018-11-10 07:46:03'),
           title: 'custome varun event',
           color: colors.yellow,
           actions: this.actions
         },
         {
           start: subDays(endOfMonth(new Date()), 3),
           end: addDays(endOfMonth(new Date()), 3),
           title: 'A long event that spans 2 months',
           color: colors.blue,
           allDay: true
         },
         {
           start: addHours(startOfDay(new Date()), 2),
           end: new Date(),
           title: 'A draggable and resizable event',
           color: colors.yellow,
           actions: this.actions,
           resizable: {
             beforeStart: true,
             afterEnd: true
           },
           draggable: true
         }*/
        ];
        this.activeDayIsOpen = true;
    }
    EventCalendarComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._commonService.eventCalenderData.subscribe(function (data) {
            _this.events = [];
            data.forEach(function (element) {
                console.log("****", element);
                _this.events.push({
                    title: element.eventheading + ' Event Description ' + element.eventdiscription,
                    start: new Date(element.eventstartdate),
                    color: colors.red,
                });
                _this.refresh.next();
            });
            _this.refresh.next();
        });
    };
    EventCalendarComponent.prototype.dayClicked = function (_a) {
        var date = _a.date, events = _a.events;
        if (Object(date_fns__WEBPACK_IMPORTED_MODULE_1__["isSameMonth"])(date, this.viewDate)) {
            this.viewDate = date;
            if ((Object(date_fns__WEBPACK_IMPORTED_MODULE_1__["isSameDay"])(this.viewDate, date) && this.activeDayIsOpen === true) ||
                events.length === 0) {
                this.activeDayIsOpen = false;
            }
            else {
                this.activeDayIsOpen = true;
            }
        }
    };
    EventCalendarComponent.prototype.eventTimesChanged = function (_a) {
        var event = _a.event, newStart = _a.newStart, newEnd = _a.newEnd;
        event.start = newStart;
        event.end = newEnd;
        this.handleEvent('Dropped or resized', event);
        this.refresh.next();
    };
    EventCalendarComponent.prototype.handleEvent = function (action, event) {
        this.modalData = { event: event, action: action };
        this.modal.open(this.modalContent, { size: 'lg' });
    };
    EventCalendarComponent.prototype.addEvent = function () {
        this.events.push({
            title: 'New event',
            start: Object(date_fns__WEBPACK_IMPORTED_MODULE_1__["startOfDay"])(new Date()),
            end: Object(date_fns__WEBPACK_IMPORTED_MODULE_1__["endOfDay"])(new Date()),
            color: colors.red,
            draggable: true,
            resizable: {
                beforeStart: true,
                afterEnd: true
            }
        });
        this.refresh.next();
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('modalContent'),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"])
    ], EventCalendarComponent.prototype, "modalContent", void 0);
    EventCalendarComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'event-calendar-component',
            changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush,
            styles: [__webpack_require__(/*! ./event-calendar.component.css */ "./src/app/society-mgmt/event-calendar/event-calendar.component.css")],
            template: __webpack_require__(/*! ./event-calendar.component.html */ "./src/app/society-mgmt/event-calendar/event-calendar.component.html")
        }),
        __metadata("design:paramtypes", [_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__["NgbModal"], _services_common_service__WEBPACK_IMPORTED_MODULE_5__["CommonService"]])
    ], EventCalendarComponent);
    return EventCalendarComponent;
}());



/***/ }),

/***/ "./src/app/society-mgmt/flats/flats.component.css":
/*!********************************************************!*\
  !*** ./src/app/society-mgmt/flats/flats.component.css ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/society-mgmt/flats/flats.component.html":
/*!*********************************************************!*\
  !*** ./src/app/society-mgmt/flats/flats.component.html ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<div class=\"row\">\n    <div class=\"col-xs-12 col-sm-12 text-left contentContainer\">    \n        Society ID:  {{societyInfo && societyInfo[0]?.societyid}} <br>\n      Society Name: {{societyInfo && societyInfo[0]?.societyname}} ,  <br>     \n      Society Address: {{societyInfo && societyInfo[0]?.address}},{{societyInfo && societyInfo[0]?.pincode}}<br><br>\n      buildingname : {{buildingName}}<br>\n    </div>\n  </div>\n<div class=\"row\">\n    <div class=\"col-xs-12 col-sm-12 text-center contentContainer\">\n      \n      <table class=\"table\">\n          <thead>\n            <tr>\n              <th>flatid</th>\n              <th>flatname</th>\n              <th>ownerid</th>\n              <th>pendingpayment</th>\n              <th>payment button</th>\n              <th>Calender</th>\n              <th>Show Owner</th>\n              <th>Flat</th>\n            </tr>\n          </thead>\n          <tbody>\n            <tr  *ngFor=\"let flat of flatList\">\n              <td>{{flat.flatid}}</td>\n              <td>{{flat.flatname}}</td>\n              <td>{{flat.ownerid}}</td>\n              <td>{{flat.pendingpayment}}</td>\n              <td> \n                  <button type=\"button\"  class=\"btn btn-info\"  mat-stroked-button data-toggle=\"modal\" data-target=\"#pendingModal\" (click)=\"paymentID(flat)\">Pay</button>\n              </td>\n              <td> \n                <button type=\"button\"  class=\"btn btn-info\"  mat-stroked-button (click)=\"showCalender(flat.flatid)\">Calender</button>\n              </td>\n              <td> \n                  <button type=\"button\" class=\"btn btn-info\"  mat-stroked-button (click)=\"showOwner(societyid, buildingName,flat.flatid)\">Show Owner</button>\n                </td>\n                <td> \n                    <button type=\"button\" class=\"btn btn-info\"  mat-stroked-button (click)=\"deleteFlat(flat.flatid)\">Delete</button>\n                  </td>\n            </tr>\n          </tbody>\n        </table>\n    </div>\n  </div>\n<div *ngFor=\"\">\n    {{building | json}}\n</div>\n\n\n\n<!-- Modal -->\n<div id=\"pendingModal\" class=\"modal fade\" role=\"dialog\">\n  <div class=\"modal-dialog\">\n      <form name=\"form\" (ngSubmit)=\"f.form.valid\" #f=\"ngForm\" novalidate>\n    <!-- Modal content-->\n    <div class=\"modal-content\">\n      <div class=\"modal-header\">\n          <h4 class=\"modal-title\">Payment Option</h4>  \n        <button type=\"button\" class=\"close\" data-dismiss=\"modal\">&times;</button>\n          \n      </div>\n      <div class=\"modal-body\">\n          <input type=\"text\" class=\"form-control\" name=\"payAmount\" placeholder=\"Enter Paynding Payment amount\" [(ngModel)]=\"payAmount\" \n          required />\n      </div>\n      <div class=\"modal-footer\">\n        <button type=\"button\" class=\"btn btn-default\" data-dismiss=\"modal\" (click)=\"paymentMethod(payAmount)\" >Pay</button>\n        <div *ngIf=\"isClosedValue\">\n          <div data-dismiss=\"modal\"></div>\n        </div>\n      </div>\n    </div>\n</form>\n  </div>\n</div>\n<div>\n  <calendar-component></calendar-component>\n</div>"

/***/ }),

/***/ "./src/app/society-mgmt/flats/flats.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/society-mgmt/flats/flats.component.ts ***!
  \*******************************************************/
/*! exports provided: FlatsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FlatsComponent", function() { return FlatsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/user.service */ "./src/app/society-mgmt/services/user.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_token_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/token.service */ "./src/app/society-mgmt/services/token.service.ts");
/* harmony import */ var _services_common_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/common.service */ "./src/app/society-mgmt/services/common.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var FlatsComponent = /** @class */ (function () {
    function FlatsComponent(_userService, router, route, _tokenService, _commonService) {
        this._userService = _userService;
        this.router = router;
        this.route = route;
        this._tokenService = _tokenService;
        this._commonService = _commonService;
        this.isClosedValue = false;
        this.model = {};
    }
    FlatsComponent.prototype.ngOnInit = function () {
        this.getflatList();
    };
    FlatsComponent.prototype.ngOnChanges = function () {
        this.getflatList();
    };
    FlatsComponent.prototype.getflatList = function () {
        var _this = this;
        this.route.params.subscribe(function (value) {
            _this.societyid = value["societyid"]; // get param
            _this.buildingName = value["buildingName"]; // get param
            _this._userService.getFlatList(_this.societyid, _this.buildingName).subscribe(function (data) {
                _this.flatList = data.dbResponse;
            }, function (error) {
                console.log(error);
                _this.society = error.message;
            });
            _this._userService.getSocietyInfo(_this.societyid).subscribe(function (data) {
                _this.societyInfo = data.dbResponse;
            }, function (error) {
                console.log(error);
                _this.society = error.message;
            });
        });
    };
    FlatsComponent.prototype.paymentMethod = function (payAmount) {
        var _this = this;
        this.flatObj.pendingPayment = payAmount;
        console.log(payAmount, this.flatObj.pendingPayment);
        console.log(this.flatObj);
        this._userService.putFlatPayment(this.flatObj).subscribe(function (data) {
            _this.responseData = data.dbResponse;
        }, function (error) {
            console.log(error);
            _this.errmsg = error.message;
            alert("Please login first" + JSON.stringify(error));
        }, function () {
            _this.isClosedValue = true;
            _this.getflatList();
            alert("Payment successfully updated!");
        });
    };
    FlatsComponent.prototype.paymentID = function (flatObj) {
        this.flatObj = flatObj;
    };
    FlatsComponent.prototype.showCalender = function (flatId) {
        var _this = this;
        this._userService.getFlatPaymentHistory(flatId).subscribe(function (data) {
            console.log(data.dbResponse);
            _this._commonService.emitCalanderData(data.dbResponse);
        }, function (error) {
            console.log(error);
            _this.society = error.message;
        });
    };
    FlatsComponent.prototype.showOwner = function (societyid, buildingName, flatId) {
        this.router.navigate(['societyManagment', societyid, 'buildings', buildingName, "flats", flatId, "owner"]);
        this._commonService.emitShowListEvent(true);
    };
    FlatsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-flats',
            template: __webpack_require__(/*! ./flats.component.html */ "./src/app/society-mgmt/flats/flats.component.html"),
            styles: [__webpack_require__(/*! ./flats.component.css */ "./src/app/society-mgmt/flats/flats.component.css")]
        }),
        __metadata("design:paramtypes", [_services_user_service__WEBPACK_IMPORTED_MODULE_1__["UserService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], _services_token_service__WEBPACK_IMPORTED_MODULE_3__["TokenService"], _services_common_service__WEBPACK_IMPORTED_MODULE_4__["CommonService"]])
    ], FlatsComponent);
    return FlatsComponent;
}());



/***/ }),

/***/ "./src/app/society-mgmt/login/login.component.css":
/*!********************************************************!*\
  !*** ./src/app/society-mgmt/login/login.component.css ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n\n.loginBox{\n    padding: 20px;\n    margin-top:20px;\n    border: 1px solid rgba(0, 0, 0, 0.16);\n    -ms-box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);\n    -o-box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);\n    box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);\n}"

/***/ }),

/***/ "./src/app/society-mgmt/login/login.component.html":
/*!*********************************************************!*\
  !*** ./src/app/society-mgmt/login/login.component.html ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- main app container -->\n\n<div class=\"container\">\n    <div class=\"row mainContainer\">\n        <div class=\"d-none d-sm-block col-sm-8 align-self-center text-center\">\n                <img src=\"assets/logo.png\" class=\"img-fluid logo-img\" />\n                <br>\n            <h4>Login Here</h4>\n            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore\n                magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo\n                consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.\n                Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>\n           \n        </div>\n        <div class=\"col-xs-12 col-sm-4 align-self-top\">\n            <br> <br>\n            <div class=\"loginBox\">\n                <h4 class=\" text-center\">Member login</h4>\n                <br>\n                <form name=\"form\" (ngSubmit)=\"f.form.valid && onSubmit()\" #f=\"ngForm\" novalidate>\n                    <div class=\"form-group\">\n                        <input type=\"text\" class=\"form-control\" name=\"uname\" placeholder=\"User Name\" [(ngModel)]=\"model.uname\" #uname=\"ngModel\" [ngClass]=\"{ 'is-invalid': f.submitted && uname.invalid }\"\n                            required />\n                        <div *ngIf=\"f.submitted && uname.invalid\" class=\"invalid-feedback\">\n                            <div *ngIf=\"uname.errors.required\">username is required</div>\n                        </div>\n                    </div> \n                    <div class=\"form-group\">\n                        <input type=\"password\" class=\"form-control\" placeholder=\"Password\" name=\"password\" [(ngModel)]=\"model.password\" #password=\"ngModel\"\n                            [ngClass]=\"{ 'is-invalid': f.submitted && password.invalid }\" required />\n                        <div *ngIf=\"f.submitted && password.invalid\" class=\"invalid-feedback\">\n                            <div *ngIf=\"password.errors.required\">password is required</div>\n                        </div>\n                    </div>\n                    <div class=\"form-group\">\n                        <button class=\"btn btn-block btn-primary\">Login</button>\n                    </div>\n                    <div class=\"form-group text-center\">\n                        <a routerLink=\"/register\" class=\"btn btn-link\">Not a member? Sign up</a>\n                    </div>\n                </form>\n            </div>\n            <br> <br>\n        </div>\n        \n    </div>\n</div>"

/***/ }),

/***/ "./src/app/society-mgmt/login/login.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/society-mgmt/login/login.component.ts ***!
  \*******************************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/api.service */ "./src/app/society-mgmt/services/api.service.ts");
/* harmony import */ var _services_token_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/token.service */ "./src/app/society-mgmt/services/token.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var LoginComponent = /** @class */ (function () {
    function LoginComponent(api, _tokenService, router) {
        this.api = api;
        this._tokenService = _tokenService;
        this.router = router;
        this.model = {};
        this.username = "sdfsdf29112";
        this.password = "soword";
    }
    LoginComponent.prototype.ngOnInit = function () {
    };
    LoginComponent.prototype.onSubmit = function () {
        var _this = this;
        this.api.login(this.model.uname, this.model.password)
            .subscribe(function (r) {
            if (r.token) {
                // alert(r.token);
                _this._tokenService.setToken(r.token);
                _this.router.navigateByUrl('/societyManagment');
            }
        }, function (err) {
            alert(err);
        });
    };
    LoginComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-login',
            template: __webpack_require__(/*! ./login.component.html */ "./src/app/society-mgmt/login/login.component.html"),
            styles: [__webpack_require__(/*! ./login.component.css */ "./src/app/society-mgmt/login/login.component.css")]
        }),
        __metadata("design:paramtypes", [_services_api_service__WEBPACK_IMPORTED_MODULE_2__["ApiService"], _services_token_service__WEBPACK_IMPORTED_MODULE_3__["TokenService"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/society-mgmt/modal/modal.component.css":
/*!********************************************************!*\
  !*** ./src/app/society-mgmt/modal/modal.component.css ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".example-additional-selection {\n    opacity: 0.75;\n    font-size: 0.75em;\n  }"

/***/ }),

/***/ "./src/app/society-mgmt/modal/modal.component.html":
/*!*********************************************************!*\
  !*** ./src/app/society-mgmt/modal/modal.component.html ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n\n<div>\n    <mat-form-field  *ngIf=\"(modalName == 'flats' || modalName == 'buildings' || modalName == 'owners')\">\n        <!-- <mat-select placeholder=\"Select Society\" [formControl]=\"societyFormCtrl\" multiple> -->\n        <mat-select placeholder=\"Select Society\"  [formControl]=\"societyFormCtrl\">\n          <!-- <mat-select-trigger>\n            {{societyFormCtrl.value ? societyFormCtrl.value[0] : ''}}\n            <span *ngIf=\"societyFormCtrl.value?.length > 1\" class=\"example-additional-selection\">\n              (+{{societyFormCtrl.value.length - 1}} {{societyFormCtrl.value?.length === 2 ? 'other' : 'others'}})\n            </span>\n          </mat-select-trigger> -->\n          <mat-option *ngFor=\"let s of societyList\" [value]=\"s.societyid\">{{s.societyname}}</mat-option>\n        </mat-select>\n      </mat-form-field>\n      <mat-form-field *ngIf=\"(modalName == 'flats' || modalName == 'owners')\">\n          <!-- <mat-select placeholder=\"Select Society\" [formControl]=\"buildingFormCtrl\" multiple> -->\n          <mat-select placeholder=\"Select flat\"  [formControl]=\"buildingFormCtrl\">\n            <!-- <mat-select-trigger>\n              {{buildingFormCtrl.value ? buildingFormCtrl.value[0] : ''}}\n              <span *ngIf=\"buildingFormCtrl.value?.length > 1\" class=\"example-additional-selection\">\n                (+{{buildingFormCtrl.value.length - 1}} {{buildingFormCtrl.value?.length === 2 ? 'other' : 'others'}})\n              </span>\n            </mat-select-trigger> -->\n            <mat-option *ngFor=\"let building of buildingList\" [value]=\"building.buildingname\">{{building.buildingname}}</mat-option>\n          </mat-select>\n        </mat-form-field>\n        <mat-form-field  *ngIf=\"modalName == 'owners'\">\n            <!-- <mat-select placeholder=\"Select Society\" [formControl]=\"buildingFormCtrl\" multiple> -->\n            <mat-select placeholder=\"Select owners\"  [formControl]=\"ownerFormCtrl\" multiple>\n              <mat-select-trigger>\n                {{ownerFormCtrl.value ? ownerFormCtrl.value[0] : ''}}\n                <span *ngIf=\"ownerFormCtrl.value?.length > 1\" class=\"example-additional-selection\">\n                  (+{{ownerFormCtrl.value.length - 1}} {{ownerFormCtrl.value?.length === 2 ? 'other' : 'others'}})\n                </span>\n              </mat-select-trigger>\n              <mat-option *ngFor=\"let flat of flatList\" [value]=\"flat.flatname\">{{flat.flatname}}</mat-option>\n            </mat-select>\n          </mat-form-field>\n</div>\n<button *ngIf=\"(modalName == 'flats' || modalName == 'buildings' || modalName == 'owners' )\" type=\"button\" class=\"btn btn-primary\" (click)=\"onSubmit()\">Submit</button>"

/***/ }),

/***/ "./src/app/society-mgmt/modal/modal.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/society-mgmt/modal/modal.component.ts ***!
  \*******************************************************/
/*! exports provided: ModalComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ModalComponent", function() { return ModalComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/user.service */ "./src/app/society-mgmt/services/user.service.ts");
/* harmony import */ var _services_common_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/common.service */ "./src/app/society-mgmt/services/common.service.ts");
/* harmony import */ var _services_NeedAuthGuard__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/NeedAuthGuard */ "./src/app/society-mgmt/services/NeedAuthGuard.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var ModalComponent = /** @class */ (function () {
    //@Output()
    //eventEm = new EventEmitter();
    function ModalComponent(_userService, router, _needAuthGuard, _commonService) {
        this._userService = _userService;
        this.router = router;
        this._needAuthGuard = _needAuthGuard;
        this._commonService = _commonService;
        this.societyFormCtrl = new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]();
        this.buildingFormCtrl = new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]();
        this.ownerFormCtrl = new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]();
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
            this.router.navigate(['societyManagment', 'owners']);
            this._commonService.emitShowListEvent(true);
        }
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], ModalComponent.prototype, "modalName", void 0);
    ModalComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-modal',
            template: __webpack_require__(/*! ./modal.component.html */ "./src/app/society-mgmt/modal/modal.component.html"),
            styles: [__webpack_require__(/*! ./modal.component.css */ "./src/app/society-mgmt/modal/modal.component.css")]
        }),
        __metadata("design:paramtypes", [_services_user_service__WEBPACK_IMPORTED_MODULE_1__["UserService"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"],
            _services_NeedAuthGuard__WEBPACK_IMPORTED_MODULE_3__["NeedAuthGuard"], _services_common_service__WEBPACK_IMPORTED_MODULE_2__["CommonService"]])
    ], ModalComponent);
    return ModalComponent;
}());



/***/ }),

/***/ "./src/app/society-mgmt/owners/owners.component.css":
/*!**********************************************************!*\
  !*** ./src/app/society-mgmt/owners/owners.component.css ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/society-mgmt/owners/owners.component.html":
/*!***********************************************************!*\
  !*** ./src/app/society-mgmt/owners/owners.component.html ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n    <div class=\"col-md-12 contentContainer\">\n      <table class=\"table\">\n        <thead>\n          <tr>\n            <th>ID</th>\n            <th>Name</th>\n            <th>IsAdmin</th>\n            <th>Phone No</th>\n            <th>Email</th>\n            <th>Age</th>\n            <th>Gender</th>\n            <th>Password</th>\n          </tr>\n        </thead>\n        <tbody>\n          <tr *ngFor=\"let owner of ownerData\">\n            <td>{{owner.ownerid}}</td>\n            <td>{{owner.ownername}}</td>\n            <td>{{owner.isadmin}}</td>\n            <td>{{owner.phonenumber}}</td>\n            <td>{{owner.email}}</td>\n            <td>{{owner.age}}</td>\n            <td>{{owner.gender}}</td>\n            <td>{{owner.password}}</td>\n          </tr>\n        </tbody>\n      </table>\n    </div>\n    </div>\n"

/***/ }),

/***/ "./src/app/society-mgmt/owners/owners.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/society-mgmt/owners/owners.component.ts ***!
  \*********************************************************/
/*! exports provided: OwnersComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OwnersComponent", function() { return OwnersComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/user.service */ "./src/app/society-mgmt/services/user.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var OwnersComponent = /** @class */ (function () {
    function OwnersComponent(_userService, router, route) {
        this._userService = _userService;
        this.router = router;
        this.route = route;
        this.model = {};
    }
    OwnersComponent.prototype.ngOnInit = function () {
        this.getOwnerList();
    };
    OwnersComponent.prototype.ngOnChanges = function () {
        this.getOwnerList();
    };
    //getSelectedTypelist(){
    //console.log();
    // this._userService.getSelectedTypelist(this.societyIds, this.buildingNames, this.flatIds).subscribe((data)=> {
    // console.log("data is",this.ownerData)
    // });
    //}
    OwnersComponent.prototype.getOwnerList = function () {
        var _this = this;
        this.route.params.subscribe(function (value) {
            // this.param1 = value["societyid"]; // get param
            // this.param2 = value["buildingName"]; // get param
            _this.param3 = value["flatId"]; // get param
            _this._userService.getOwnerList(_this.param3).subscribe(function (data) {
                _this.ownerData = data.dbResponse;
            });
        });
    };
    OwnersComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-owners',
            template: __webpack_require__(/*! ./owners.component.html */ "./src/app/society-mgmt/owners/owners.component.html"),
            styles: [__webpack_require__(/*! ./owners.component.css */ "./src/app/society-mgmt/owners/owners.component.css")]
        }),
        __metadata("design:paramtypes", [_services_user_service__WEBPACK_IMPORTED_MODULE_1__["UserService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]])
    ], OwnersComponent);
    return OwnersComponent;
}());



/***/ }),

/***/ "./src/app/society-mgmt/register/building-reg/building-reg.component.css":
/*!*******************************************************************************!*\
  !*** ./src/app/society-mgmt/register/building-reg/building-reg.component.css ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/society-mgmt/register/building-reg/building-reg.component.html":
/*!********************************************************************************!*\
  !*** ./src/app/society-mgmt/register/building-reg/building-reg.component.html ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\" container\">\n  <div class=\"formStyle row justify-content-center childContainer s-bg\">\n    <div class=\" col-xs-12 col-md-8 col-lg-8 col-xl-8\">\n        <!-- <app-society-header></app-society-header> -->\n      <div class=\"row\">\n        <div class=\"col text-center\">\n          <h1><b>{{pageTitle3}}</b></h1>\n          <!-- <p>{{pageDesc3}}</p> -->\n        </div>\n      </div>\n      \n      <div class=\"row align-items-center text-center\">\n          <div class=\"col\">\n            <form class=\"formStyle\" name=\"form\" #sf=\"ngForm\" (ngSubmit)=\"onSubmit()\">\n                <div class=\"form-group\">\n                    <mat-form-field>\n                      <mat-select name=\"societyIdName\" placeholder=\"Select Society\"  [(ngModel)]=\"buildingreg.societyid\">\n                        <mat-option *ngFor=\"let s of societyList\" [value]=\"s.societyid\" >\n                          {{s.societyname}}\n                        </mat-option>\n                      </mat-select>\n                    </mat-form-field>\n                  </div>\n                <div class=\"form-group\">\n                  <mat-form-field class=\"example-full-width\">\n                    <input matInput name=\"buildingName\" class=\"form-control\" placeholder=\"Building Name\" #bname=\"ngModel\" [(ngModel)]=\"buildingreg.buildingName\">\n                  </mat-form-field>\n                </div>\n                <div class=\"form-group text-center\">\n                  <button mat-raised-button color=\"primary\">Register</button>\n                </div>\n            </form>\n          </div>\n      </div>\n    </div>\n  </div>\n</div>\n<router-outlet></router-outlet>\n\n\n"

/***/ }),

/***/ "./src/app/society-mgmt/register/building-reg/building-reg.component.ts":
/*!******************************************************************************!*\
  !*** ./src/app/society-mgmt/register/building-reg/building-reg.component.ts ***!
  \******************************************************************************/
/*! exports provided: BuildingRegComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BuildingRegComponent", function() { return BuildingRegComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../../services/user.service */ "./src/app/society-mgmt/services/user.service.ts");
/* harmony import */ var _register_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../register.service */ "./src/app/society-mgmt/register/register.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var BuildingRegComponent = /** @class */ (function () {
    function BuildingRegComponent(_userService, _registerservice) {
        this._userService = _userService;
        this._registerservice = _registerservice;
        this.pageTitle3 = "Building Register";
        this.pageDesc3 = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.";
        this.buildingreg = {
            societyid: "",
            buildingName: ""
        };
    }
    BuildingRegComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._userService.getSociety().subscribe(function (data) {
            _this.societyList = data.dbResponse;
        }, function (error) {
            console.log(error);
            _this.societyList = error.message;
        });
    };
    BuildingRegComponent.prototype.onSubmit = function () {
        console.log("**on submit method**", this.buildingreg);
        this._registerservice.registerBuilding(this.buildingreg).subscribe(function (data) {
            console.log("api reponse is", data);
            alert("building info added succesfully");
        });
    };
    BuildingRegComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-building-reg',
            template: __webpack_require__(/*! ./building-reg.component.html */ "./src/app/society-mgmt/register/building-reg/building-reg.component.html"),
            styles: [__webpack_require__(/*! ./building-reg.component.css */ "./src/app/society-mgmt/register/building-reg/building-reg.component.css")]
        }),
        __metadata("design:paramtypes", [_services_user_service__WEBPACK_IMPORTED_MODULE_1__["UserService"], _register_service__WEBPACK_IMPORTED_MODULE_2__["RegisterService"]])
    ], BuildingRegComponent);
    return BuildingRegComponent;
}());



/***/ }),

/***/ "./src/app/society-mgmt/register/flat-reg/flat-reg.component.css":
/*!***********************************************************************!*\
  !*** ./src/app/society-mgmt/register/flat-reg/flat-reg.component.css ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/society-mgmt/register/flat-reg/flat-reg.component.html":
/*!************************************************************************!*\
  !*** ./src/app/society-mgmt/register/flat-reg/flat-reg.component.html ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <div class=\"row justify-content-center childContainer s-bg\">\n    <div class=\"col-xs-12 col-md-8 col-lg-8 col-xl-8\">\n        <!-- <app-society-header></app-society-header> -->\n      <div class=\"row\">\n        <div class=\"col text-center\">\n          <h1><b>{{pageTitle2}}</b></h1>\n          <!-- <p>{{pageDesc2}}</p> -->\n        </div>\n      </div>\n      \n      <div class=\"row align-items-center text-center\">\n          <div class=\"col\">\n            <form class=\"formStyle\" name=\"form\" #sf=\"ngForm\" (ngSubmit)=\"onSubmit()\">\n                <div class=\"form-group\">\n                  <mat-form-field class=\"example-full-width\">\n                    <input matInput name=\"flatName\" class=\"form-control\" placeholder=\"Flat Name\" #fname=\"ngModel\" [(ngModel)]=\"flatreg.flatName\">\n                  </mat-form-field>\n                </div>\n                <div class=\"form-group\">\n                  <mat-form-field class=\"example-full-width\">\n                    <input matInput name=\"buildingName\" class=\"form-control\" placeholder=\"Building Name\" #bname=\"ngModel\" [(ngModel)]=\"flatreg.buildingName\">\n                  </mat-form-field>\n                </div>\n                <div class=\"form-group\">\n                  <mat-form-field>\n                    <mat-select name=\"societyIdName\" placeholder=\"Select Society\" #sname=\"ngModel\" [(ngModel)]=\"flatreg.societyId\">\n                      <mat-option *ngFor=\"let s of societyList\" [value]=\"s.societyid\" >\n                        {{s.societyname}}\n                      </mat-option>\n                    </mat-select>\n                  </mat-form-field>\n                </div>\n                <!-- <div class=\"form-group\">\n                  <mat-form-field class=\"example-full-width\">\n                    <input matInput name=\"ownerId\" class=\"form-control\" placeholder=\"Owner ID\" #oid=\"ngModel\" [(ngModel)]=\"flatreg.ownerid\">\n                  </mat-form-field>\n                </div>\n                <div class=\"form-group\">\n                  <mat-form-field class=\"example-full-width\">\n                    <input matInput name=\"tenantId\" class=\"form-control\" placeholder=\"Tenant ID\" #oid=\"ngModel\" [(ngModel)]=\"flatreg.tenantid\">\n                  </mat-form-field>\n                </div> -->\n                <div class=\"form-group text-center\">\n                  <button mat-raised-button color=\"primary\">Register</button>\n                </div>\n            </form>\n          </div>\n      </div>\n    </div>\n  </div>\n</div>\n<router-outlet></router-outlet>\n\n"

/***/ }),

/***/ "./src/app/society-mgmt/register/flat-reg/flat-reg.component.ts":
/*!**********************************************************************!*\
  !*** ./src/app/society-mgmt/register/flat-reg/flat-reg.component.ts ***!
  \**********************************************************************/
/*! exports provided: FlatRegComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FlatRegComponent", function() { return FlatRegComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../../services/user.service */ "./src/app/society-mgmt/services/user.service.ts");
/* harmony import */ var _register_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../register.service */ "./src/app/society-mgmt/register/register.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var FlatRegComponent = /** @class */ (function () {
    function FlatRegComponent(_userService, _registerservice) {
        this._userService = _userService;
        this._registerservice = _registerservice;
        this.pageTitle2 = "Flat Register";
        this.pageDesc2 = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.";
        this.flatreg = {
            flatName: "",
            buildingName: "",
            societyId: ""
            //ownerid:"",
            //tenantid:""
        };
    }
    FlatRegComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._userService.getSociety().subscribe(function (data) {
            _this.societyList = data.dbResponse;
        }, function (error) {
            console.log(error);
            _this.societyList = error.message;
        });
    };
    FlatRegComponent.prototype.onSubmit = function () {
        console.log("**on submit**", this.flatreg);
        this._registerservice.registerFlat(this.flatreg).subscribe(function (data) {
            console.log("**response from api**", data);
            alert("flat info submitted sucessfully");
        });
    };
    FlatRegComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-flat-reg',
            template: __webpack_require__(/*! ./flat-reg.component.html */ "./src/app/society-mgmt/register/flat-reg/flat-reg.component.html"),
            styles: [__webpack_require__(/*! ./flat-reg.component.css */ "./src/app/society-mgmt/register/flat-reg/flat-reg.component.css")]
        }),
        __metadata("design:paramtypes", [_services_user_service__WEBPACK_IMPORTED_MODULE_1__["UserService"], _register_service__WEBPACK_IMPORTED_MODULE_2__["RegisterService"]])
    ], FlatRegComponent);
    return FlatRegComponent;
}());



/***/ }),

/***/ "./src/app/society-mgmt/register/owner-reg/owner-reg.component.css":
/*!*************************************************************************!*\
  !*** ./src/app/society-mgmt/register/owner-reg/owner-reg.component.css ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/society-mgmt/register/owner-reg/owner-reg.component.html":
/*!**************************************************************************!*\
  !*** ./src/app/society-mgmt/register/owner-reg/owner-reg.component.html ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n    <div class=\"row justify-content-center childContainer s-bg\">\n      <div class=\"col-xs-12 col-md-8 col-lg-8 col-xl-8\">\n          <!-- <app-society-header></app-society-header> -->\n        <div class=\"row\">\n          <div class=\"col text-center\">\n            <h1><b>{{pageTitle1}}</b></h1>\n            <!-- <p>{{pageDesc1}}</p> -->\n          </div>\n        </div>\n        \n        <div class=\"row align-items-center text-center\">\n            <div class=\"col\">\n                <form class=\"formStyle\" #form1=\"ngForm\" (ngSubmit)=\"onSubmit()\">\n                    <div class=\"form-group\"> \n                      <mat-form-field class=\"example-full-width\">\n                        <input matInput name=\"name\" class=\"form-control\" #owner=\"ngModel\" [(ngModel)]=\"ownerreg.ownerName\" placeholder=\"Owner Name\">\n                      </mat-form-field>\n                    </div>\n                    <div class=\"form-group\"> \n                      <mat-form-field class=\"example-full-width\">\n                          <input matInput name=\"email\" class=\"form-control\" #emailid=\"ngModel\" [(ngModel)]=\"ownerreg.email\" placeholder=\"Email\">\n                        </mat-form-field>\n                    </div>\n                    <div class=\"form-group\"> \n                      <mat-form-field class=\"example-full-width\">\n                        <input matInput  name=\"phoneno\" class=\"form-control\" pattern=\"\\d{10}$\" #telno=\"ngModel\" [(ngModel)]=\"ownerreg.phoneNumber\" placeholder=\"Phone\">\n                      </mat-form-field>\n                    </div>\n                    <div class=\"form-group\"> \n                      <mat-form-field class=\"example-full-width\">\n                        <input matInput  name=\"age\" class=\"form-control\" #ageno=\"ngModel\" [(ngModel)]=\"ownerreg.age\" placeholder=\"Age\">\n                      </mat-form-field>\n                    </div>\n                    <h5>Gender</h5>\n                    <div class=\"form-group\"> \n                    <mat-radio-group name=\"gender\" [(ngModel)]=\"ownerreg.gender\">\n                        <mat-radio-button value=\"male\" >Male</mat-radio-button>\n                        <mat-radio-button value=\"female\">Female</mat-radio-button>\n                      </mat-radio-group>\n                    </div>\n                    <div class=\"form-group\"> \n                      <mat-form-field class=\"example-full-width\">\n                          <input matInput  name=\"password\" class=\"form-control\" #cname=\"ngModel\" [(ngModel)]=\"ownerreg.password\" placeholder=\"Password\">\n                        </mat-form-field>\n                    </div>\n                    <div class=\"from-check\">\n                        <mat-checkbox name=\"isAdmin\" [(ngModel)]=\"ownerreg.isAdmin\">Is Admin?</mat-checkbox>\n                      </div>\n                      <div class=\"form-group\">\n                        <mat-form-field class=\"example-full-width\">\n                          <input matInput name=\"flatName\" class=\"form-control\" placeholder=\"Flat Name\" #fname=\"ngModel\" [(ngModel)]=\"ownerreg.flatName\">\n                        </mat-form-field>\n                      </div>\n                      <div class=\"form-group\">\n                        <mat-form-field class=\"example-full-width\">\n                          <input matInput name=\"buildingName\" class=\"form-control\" placeholder=\"Building Name\" #bname=\"ngModel\" [(ngModel)]=\"ownerreg.buildingName\">\n                        </mat-form-field>\n                      </div>\n                      <div class=\"form-group\">\n                        <mat-form-field>\n                          <mat-select name=\"societyIdName\" placeholder=\"Select Society\" #sname=\"ngModel\" [(ngModel)]=\"ownerreg.societyId\">\n                            <mat-option *ngFor=\"let s of societyList\" [value]=\"s.societyid\" >\n                              {{s.societyname}}\n                            </mat-option>\n                          </mat-select>\n                        </mat-form-field>\n                      </div>\n                    <div class=\"form-group text-center\">\n                        <button mat-raised-button color=\"primary\">Register</button>\n                    </div>\n                \n                  </form>\n            </div>\n        </div>\n      </div>\n    </div>\n  </div>\n  <router-outlet></router-outlet>\n  \n\n"

/***/ }),

/***/ "./src/app/society-mgmt/register/owner-reg/owner-reg.component.ts":
/*!************************************************************************!*\
  !*** ./src/app/society-mgmt/register/owner-reg/owner-reg.component.ts ***!
  \************************************************************************/
/*! exports provided: OwnerRegComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OwnerRegComponent", function() { return OwnerRegComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _register_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../register.service */ "./src/app/society-mgmt/register/register.service.ts");
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../../services/user.service */ "./src/app/society-mgmt/services/user.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var OwnerRegComponent = /** @class */ (function () {
    function OwnerRegComponent(_userService, _registerservice) {
        this._userService = _userService;
        this._registerservice = _registerservice;
        this.pageTitle1 = "Owner Register";
        this.pageDesc1 = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.";
        this.ownerreg = {
            ownerName: "",
            email: "",
            phoneNumber: "",
            age: "",
            gender: "",
            isAdmin: "",
            password: "",
            flatName: "",
            buildingName: "",
            societyId: ""
        };
    }
    OwnerRegComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._userService.getSociety().subscribe(function (data) {
            _this.societyList = data.dbResponse;
        }, function (error) {
            console.log(error);
            _this.societyList = error.message;
        });
    };
    OwnerRegComponent.prototype.onSubmit = function () {
        console.log(this.ownerreg);
        this._registerservice.registerOwner(this.ownerreg).subscribe(function (data) {
            console.log("data is", data);
            alert("owner info added sucessfully");
        });
    };
    OwnerRegComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-owner-reg',
            template: __webpack_require__(/*! ./owner-reg.component.html */ "./src/app/society-mgmt/register/owner-reg/owner-reg.component.html"),
            styles: [__webpack_require__(/*! ./owner-reg.component.css */ "./src/app/society-mgmt/register/owner-reg/owner-reg.component.css")]
        }),
        __metadata("design:paramtypes", [_services_user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"], _register_service__WEBPACK_IMPORTED_MODULE_1__["RegisterService"]])
    ], OwnerRegComponent);
    return OwnerRegComponent;
}());



/***/ }),

/***/ "./src/app/society-mgmt/register/register-member.component.css":
/*!*********************************************************************!*\
  !*** ./src/app/society-mgmt/register/register-member.component.css ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n\r\n.societyImage{\r\n    background-image:url('banner.png');\r\n}\r\n\r\n\r\n.mainContainer{\r\n    background-color: white;\r\n    margin-top:1em;\r\n    -ms-box-shadow: 0 3px 6px rgba(184, 157, 157, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);\r\n    -o-box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);\r\n    box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);    \r\n}\r\n\r\n"

/***/ }),

/***/ "./src/app/society-mgmt/register/register-member.component.html":
/*!**********************************************************************!*\
  !*** ./src/app/society-mgmt/register/register-member.component.html ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n    <div class=\"row justify-content-center mainContainer\">\n        \n      <div class=\"col-xs-12 col-md-8 col-lg-8 col-xl-8\">\n          <app-society-header></app-society-header>\n        <div class=\"row\">\n          <div class=\"col text-center\">\n            <h1><b>{{pageTitle}}</b></h1>\n            <p class=\"text-h3\">{{pageDesc}}</p>\n          </div>\n        </div>\n        <div class=\"row align-items-center\">\n          <div class=\"col\">\n              <div class=\"row\">\n                  <div class=\"col-xs-12 col-sm-3 text-center contentContainer\">\n                    <div routerLink=\"society-reg\" class=\"btn btn-outline-warning homeicons w-100\">\n                      <svg width=\"24\" height=\"24\" viewBox=\"0 0 24 24\">\n                        <path d=\"M15 11V5l-3-3-3 3v2H3v14h18V11h-6zm-8 8H5v-2h2v2zm0-4H5v-2h2v2zm0-4H5V9h2v2zm6 8h-2v-2h2v2zm0-4h-2v-2h2v2zm0-4h-2V9h2v2zm0-4h-2V5h2v2zm6 12h-2v-2h2v2zm0-4h-2v-2h2v2z\" />\n                        <path d=\"M0 0h24v24H0z\" fill=\"none\" /></svg>\n                      Society</div>\n                  </div>\n                  <div class=\"col-xs-12 col-sm-3 text-center contentContainer\">\n                    <div routerLink=\"building-reg\" class=\"btn btn-outline-warning homeicons w-100\">\n                      <svg width=\"24\" height=\"24\" viewBox=\"0 0 24 24\">\n                        <path d=\"M0 0h24v24H0z\" fill=\"none\" />\n                        <path d=\"M12 7V3H2v18h20V7H12zM6 19H4v-2h2v2zm0-4H4v-2h2v2zm0-4H4V9h2v2zm0-4H4V5h2v2zm4 12H8v-2h2v2zm0-4H8v-2h2v2zm0-4H8V9h2v2zm0-4H8V5h2v2zm10 12h-8v-2h2v-2h-2v-2h2v-2h-2V9h8v10zm-2-8h-2v2h2v-2zm0 4h-2v2h2v-2z\" /></svg>\n                      Buildings</div>\n                  </div>\n                  <div class=\"col-xs-12 col-sm-3 text-center contentContainer\">\n                    <div routerLink=\"flat-reg\" class=\"btn btn-outline-warning homeicons w-100\">\n                        <svg width=\"24\" height=\"24\" viewBox=\"0 0 24 24\">\n                            <path d=\"M0 0h24v24H0z\" fill=\"none\" />\n                            <path d=\"M20 2H4c-1.1 0-2 .9-2 2v16c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zM8 20H4v-4h4v4zm0-6H4v-4h4v4zm0-6H4V4h4v4zm6 12h-4v-4h4v4zm0-6h-4v-4h4v4zm0-6h-4V4h4v4zm6 12h-4v-4h4v4zm0-6h-4v-4h4v4zm0-6h-4V4h4v4z\" /></svg>\n                      Flats</div>\n                  </div>\n                  <div class=\"col-xs-12 col-sm-3 text-center contentContainer\">\n                    <div routerLink=\"owner-reg\" class=\"btn btn-outline-warning homeicons w-100\">\n                        <svg width=\"24\" height=\"24\" viewBox=\"0 0 24 24\">\n                            <path d=\"M0 0h24v24H0z\" fill=\"none\" />\n                            <path d=\"M16 11c1.66 0 2.99-1.34 2.99-3S17.66 5 16 5c-1.66 0-3 1.34-3 3s1.34 3 3 3zm-8 0c1.66 0 2.99-1.34 2.99-3S9.66 5 8 5C6.34 5 5 6.34 5 8s1.34 3 3 3zm0 2c-2.33 0-7 1.17-7 3.5V19h14v-2.5c0-2.33-4.67-3.5-7-3.5zm8 0c-.29 0-.62.02-.97.05 1.16.84 1.97 1.97 1.97 3.45V19h6v-2.5c0-2.33-4.67-3.5-7-3.5z\" /></svg>\n                      owners</div>\n                  </div>\n                </div>   \n          </div>\n        </div>\n        \n        <div class=\"text-center contentContainer\">\n          <router-outlet></router-outlet>\n          </div>\n\n      </div>\n    </div>\n  </div>"

/***/ }),

/***/ "./src/app/society-mgmt/register/register-member.component.ts":
/*!********************************************************************!*\
  !*** ./src/app/society-mgmt/register/register-member.component.ts ***!
  \********************************************************************/
/*! exports provided: RegisterMemberComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterMemberComponent", function() { return RegisterMemberComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

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
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-register-member',
            template: __webpack_require__(/*! ./register-member.component.html */ "./src/app/society-mgmt/register/register-member.component.html"),
            styles: [__webpack_require__(/*! ./register-member.component.css */ "./src/app/society-mgmt/register/register-member.component.css")]
        })
    ], RegisterMemberComponent);
    return RegisterMemberComponent;
}());



/***/ }),

/***/ "./src/app/society-mgmt/register/register.service.ts":
/*!***********************************************************!*\
  !*** ./src/app/society-mgmt/register/register.service.ts ***!
  \***********************************************************/
/*! exports provided: RegisterService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterService", function() { return RegisterService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _config_json__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../config.json */ "./src/app/society-mgmt/config.json");
var _config_json__WEBPACK_IMPORTED_MODULE_2___namespace = /*#__PURE__*/__webpack_require__.t(/*! ./../config.json */ "./src/app/society-mgmt/config.json", 1);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var RegisterService = /** @class */ (function () {
    function RegisterService(http) {
        this.http = http;
        this.postSocietyUrl = _config_json__WEBPACK_IMPORTED_MODULE_2__.HOST_NAME + "/society/registerSociety";
        this.postOwnerUrl = _config_json__WEBPACK_IMPORTED_MODULE_2__.HOST_NAME + "/society/registerOwner";
        this.postFlatUrl = _config_json__WEBPACK_IMPORTED_MODULE_2__.HOST_NAME + "/society/registerFlat";
        this.postBuildingUrl = _config_json__WEBPACK_IMPORTED_MODULE_2__.HOST_NAME + "/society/registerBuilding";
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
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], RegisterService);
    return RegisterService;
}());



/***/ }),

/***/ "./src/app/society-mgmt/register/society-reg/society-reg.component.css":
/*!*****************************************************************************!*\
  !*** ./src/app/society-mgmt/register/society-reg/society-reg.component.css ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/society-mgmt/register/society-reg/society-reg.component.html":
/*!******************************************************************************!*\
  !*** ./src/app/society-mgmt/register/society-reg/society-reg.component.html ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <div class=\"row justify-content-center childContainer s-bg\">\n    <div class=\"col-xs-12 col-md-8 col-lg-8 col-xl-8\">\n        <!-- <app-society-header></app-society-header> -->\n      <div class=\"row\">\n        <div class=\"col text-center\">\n          <h1><b>{{pageTitle}}</b></h1>\n          <!-- <p>{{pageDesc}}</p> -->\n        </div>\n      </div>\n\n      \n      <div class=\"row align-items-center text-center\">\n          <div class=\"col\">\n            <form class=\"formStyle\" name=\"form\" #sf=\"ngForm\" (ngSubmit)=\"onSubmit()\">\n              <div class=\"form-group\">\n                <mat-form-field class=\"example-full-width\">\n                  <input matInput name=\"societyName\" class=\"form-control\" placeholder=\"Society Name\" #sname=\"ngModel\" [(ngModel)]=\"societyreg.societyName\">\n                </mat-form-field>\n              </div>\n              <div class=\"form-group\">\n                <mat-form-field class=\"example-full-width\">\n                    <textarea matInput name=\"societyAddress\" class=\"form-control\" placeholder=\"Society Address\" #sadd=\"ngModel\" [(ngModel)]=\"societyreg.address\"></textarea>\n                  </mat-form-field>\n              </div>\n              <div class=\"form-group\">\n                  <mat-form-field class=\"example-full-width\">\n                    <input matInput name=\"societyNumber\" class=\"form-control\" placeholder=\"Pincode\" #pcode=\"ngModel\" [(ngModel)]=\"societyreg.pincode\">\n                  </mat-form-field>\n              </div>\n              <div class=\"form-group text-center\">\n                <button mat-raised-button color=\"primary\">Register</button>\n              </div>\n          </form>\n          </div>\n      </div>\n    </div>\n  </div>\n</div>\n<router-outlet></router-outlet>\n\n"

/***/ }),

/***/ "./src/app/society-mgmt/register/society-reg/society-reg.component.ts":
/*!****************************************************************************!*\
  !*** ./src/app/society-mgmt/register/society-reg/society-reg.component.ts ***!
  \****************************************************************************/
/*! exports provided: SocietyRegComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SocietyRegComponent", function() { return SocietyRegComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _register_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../register.service */ "./src/app/society-mgmt/register/register.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


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
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-society-reg',
            template: __webpack_require__(/*! ./society-reg.component.html */ "./src/app/society-mgmt/register/society-reg/society-reg.component.html"),
            styles: [__webpack_require__(/*! ./society-reg.component.css */ "./src/app/society-mgmt/register/society-reg/society-reg.component.css")]
        }),
        __metadata("design:paramtypes", [_register_service__WEBPACK_IMPORTED_MODULE_1__["RegisterService"]])
    ], SocietyRegComponent);
    return SocietyRegComponent;
}());



/***/ }),

/***/ "./src/app/society-mgmt/services/NeedAuthGuard.ts":
/*!********************************************************!*\
  !*** ./src/app/society-mgmt/services/NeedAuthGuard.ts ***!
  \********************************************************/
/*! exports provided: NeedAuthGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NeedAuthGuard", function() { return NeedAuthGuard; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _token_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./token.service */ "./src/app/society-mgmt/services/token.service.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




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
        return new rxjs__WEBPACK_IMPORTED_MODULE_3__["Observable"](function (observer) {
            _this._tokenService.isLogged().subscribe(function (isValid) {
                if (isValid) {
                    console.log("token is valid*****");
                    observer.next(true);
                }
                else {
                    _this.router.navigateByUrl(_this.router.createUrlTree(['/login'], {
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
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        __metadata("design:paramtypes", [_token_service__WEBPACK_IMPORTED_MODULE_2__["TokenService"], _angular_router__WEBPACK_IMPORTED_MODULE_0__["Router"]])
    ], NeedAuthGuard);
    return NeedAuthGuard;
}());



/***/ }),

/***/ "./src/app/society-mgmt/services/api.service.ts":
/*!******************************************************!*\
  !*** ./src/app/society-mgmt/services/api.service.ts ***!
  \******************************************************/
/*! exports provided: ApiService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ApiService", function() { return ApiService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _config_json__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../config.json */ "./src/app/society-mgmt/config.json");
var _config_json__WEBPACK_IMPORTED_MODULE_2___namespace = /*#__PURE__*/__webpack_require__.t(/*! ./../config.json */ "./src/app/society-mgmt/config.json", 1);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ApiService = /** @class */ (function () {
    function ApiService(http) {
        this.http = http;
        this.TOKEN = "TOKEN";
    }
    ApiService.prototype.login = function (email, password) {
        return this.http.post(_config_json__WEBPACK_IMPORTED_MODULE_2__.HOST_NAME + '/users/login', {
            email: email,
            password: password
        });
    };
    ApiService.prototype.getUser = function () {
        var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]().set('token', localStorage.getItem(this.TOKEN));
        return this.http.get(_config_json__WEBPACK_IMPORTED_MODULE_2__.HOST_NAME + "/users/getUser", {
            headers: headers
        });
    };
    ApiService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], ApiService);
    return ApiService;
}());



/***/ }),

/***/ "./src/app/society-mgmt/services/common.service.ts":
/*!*********************************************************!*\
  !*** ./src/app/society-mgmt/services/common.service.ts ***!
  \*********************************************************/
/*! exports provided: CommonService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CommonService", function() { return CommonService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var CommonService = /** @class */ (function () {
    function CommonService() {
        this.calenderData = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.eventCalenderData = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.eventShowList = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
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
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], CommonService.prototype, "calenderData", void 0);
    CommonService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [])
    ], CommonService);
    return CommonService;
}());



/***/ }),

/***/ "./src/app/society-mgmt/services/token.service.ts":
/*!********************************************************!*\
  !*** ./src/app/society-mgmt/services/token.service.ts ***!
  \********************************************************/
/*! exports provided: TokenService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TokenService", function() { return TokenService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _config_json__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./../config.json */ "./src/app/society-mgmt/config.json");
var _config_json__WEBPACK_IMPORTED_MODULE_4___namespace = /*#__PURE__*/__webpack_require__.t(/*! ./../config.json */ "./src/app/society-mgmt/config.json", 1);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var TOKEN = 'TOKEN';
var TokenService = /** @class */ (function () {
    function TokenService(http) {
        this.http = http;
        this.validateTokenUrl = _config_json__WEBPACK_IMPORTED_MODULE_4__.HOST_NAME + "/users/validateToken";
    }
    TokenService.prototype.setToken = function (token) {
        localStorage.setItem(TOKEN, token);
    };
    TokenService.prototype.isValidToken = function (token) {
        var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]().set('token', token);
        console.log("" + this.validateTokenUrl);
        return this.http.get("" + this.validateTokenUrl, {
            headers: headers
        }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(function (error) { return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])(error); }));
    };
    TokenService.prototype.isLogged = function () {
        var _this = this;
        var isValid;
        return new rxjs__WEBPACK_IMPORTED_MODULE_2__["Observable"](function (observer) {
            var token = localStorage.getItem(TOKEN);
            if (token) {
                _this.isValidToken(token).subscribe(function (data) {
                    if (data.error == 0) {
                        //  alert(token);
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
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], TokenService);
    return TokenService;
}());



/***/ }),

/***/ "./src/app/society-mgmt/services/user.service.ts":
/*!*******************************************************!*\
  !*** ./src/app/society-mgmt/services/user.service.ts ***!
  \*******************************************************/
/*! exports provided: UserService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserService", function() { return UserService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _config_json__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./../config.json */ "./src/app/society-mgmt/config.json");
var _config_json__WEBPACK_IMPORTED_MODULE_4___namespace = /*#__PURE__*/__webpack_require__.t(/*! ./../config.json */ "./src/app/society-mgmt/config.json", 1);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var UserService = /** @class */ (function () {
    function UserService(http) {
        this.http = http;
        this.TOKEN = 'TOKEN';
        this.getSocietyURL = _config_json__WEBPACK_IMPORTED_MODULE_4__.HOST_NAME + "/society/society";
        this.getBuildingsURL = _config_json__WEBPACK_IMPORTED_MODULE_4__.HOST_NAME + "/society/building";
        this.getOwnerURL = _config_json__WEBPACK_IMPORTED_MODULE_4__.HOST_NAME + "/society/owner";
        this.getFlatURL = _config_json__WEBPACK_IMPORTED_MODULE_4__.HOST_NAME + "/society/flat";
        this.putPayment = _config_json__WEBPACK_IMPORTED_MODULE_4__.HOST_NAME + "/society/flat/pendingPayment";
        this.flatPaymentHistory = _config_json__WEBPACK_IMPORTED_MODULE_4__.HOST_NAME + "/society/paymenthistory";
        this.societyEventURL = _config_json__WEBPACK_IMPORTED_MODULE_4__.HOST_NAME + "/society/societyEvent";
        this.selectedTypeList = _config_json__WEBPACK_IMPORTED_MODULE_4__.HOST_NAME + "/society/owner/list";
    }
    UserService.prototype.getOwner = function (query) {
        console.log(this.getOwnerURL + "/phonenumber/?value='" + query.oPhoneNumber + "'");
        return this.http.get(this.getOwnerURL + "/phonenumber/?value='" + query.oPhoneNumber + "'")
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(function (error) { return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])(error); }));
    };
    UserService.prototype.getAllOwners = function () {
        console.log("" + this.getOwnerURL);
        return this.http.get("" + this.getOwnerURL)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(function (error) { return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])(error); }));
    };
    UserService.prototype.getSociety = function () {
        return this.http.get("" + this.getSocietyURL)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(function (error) { return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])(error); }));
    };
    UserService.prototype.getSocietyInfo = function (id) {
        console.log(this.getSocietyURL + "/societyid/?value=" + id);
        return this.http.get(this.getSocietyURL + "/societyid/?value=" + id)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(function (error) { return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])(error); }));
    };
    UserService.prototype.getBuilding = function (socID) {
        return this.http.get(this.getBuildingsURL + "/societyid/?value=" + socID)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(function (error) { return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])(error); }));
    };
    UserService.prototype.getFlatList = function (societyId, buildingname) {
        console.log(this.getFlatURL + "/buildingname/?value=" + buildingname);
        return this.http.get("http://nodebw-env.xctnnannuz.us-east-1.elasticbeanstalk.com/society/flat/societyid/buildingname/?value1=" + societyId + "&value2=\"" + buildingname + "\"")
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(function (error) { return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])(error); }));
    };
    UserService.prototype.getOwnerList = function (flatIds) {
        console.log(this.getOwnerURL + "/flatIds/?value=" + flatIds);
        return this.http.get(this.getOwnerURL + "/flatIds/?value='" + flatIds + "'")
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(function (error) { return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])(error); }));
    };
    UserService.prototype.putFlatPayment = function (flatObj) {
        var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]().set('token', localStorage.getItem(this.TOKEN));
        console.log(flatObj);
        var paramList = {
            "pendingPayment": flatObj.pendingPayment,
            "ownerid": flatObj.ownerid,
            "flatid": flatObj.flatid
        };
        console.log(paramList);
        return this.http.put(this.putPayment, paramList, {
            headers: headers
        })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(function (error) { return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])(error); }));
    };
    UserService.prototype.getFlatPaymentHistory = function (flatId) {
        console.log("uuuuuuuu", this.flatPaymentHistory + "/flatid/?value=" + flatId);
        return this.http.get(this.flatPaymentHistory + "/flatid/?value=" + flatId)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(function (error) { return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])(error); }));
    };
    UserService.prototype.getSocietyEvents = function (societyId) {
        console.log(this.societyEventURL + "/societyid/?value='" + societyId + "'");
        return this.http.get(this.societyEventURL + "/societyid/?value='" + societyId + "'")
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(function (error) { return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])(error); }));
    };
    UserService.prototype.getSelectedTypelist = function (societyIds, buildingNames, flatIds) {
        var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]().set('token', localStorage.getItem(this.TOKEN));
        var searchObject = {
            "societyIds": societyIds,
            "buildingNames": buildingNames,
            "flatIds": flatIds
        };
        console.log("searchObject ", searchObject);
        return this.http.post(this.selectedTypeList, searchObject, {
            headers: headers
        })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(function (error) { return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])(error); }));
    };
    UserService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], UserService);
    return UserService;
}());



/***/ }),

/***/ "./src/app/society-mgmt/society-header/society-header.component.css":
/*!**************************************************************************!*\
  !*** ./src/app/society-mgmt/society-header/society-header.component.css ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/society-mgmt/society-header/society-header.component.html":
/*!***************************************************************************!*\
  !*** ./src/app/society-mgmt/society-header/society-header.component.html ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n  <div class=\"col-xs-12 col-sm-3 text-left\">\n    <img src=\"assets/logo.png\" class=\"img-fluid logo-img\" />\n  </div>\n<!-- <div class=\"col-xs-3 col-sm-3 text-right\">\n  <div class=\"home-btn\">\n    <button mat-raised-button color=\"primary\" (click)=\"back()\">Back</button>\n  </div>\n</div> -->\n<!-- <div class=\"col-xs-3 col-sm-3 text-right\">\n  <div routerLink=\"/societyManagment/society\" class=\"home-btn\">\n    <button mat-raised-button color=\"primary\">Go To Society Page</button>\n  </div>\n</div> -->\n\n  <!-- <div class=\"col-xs-3 col-sm-3 text-right\">\n    <div routerLink=\"/home\" class=\"home-btn\">\n      <button mat-raised-button color=\"primary\">Home</button>\n    </div>\n  </div> -->\n  <div class=\"col-xs-12 col-sm-3 text-center contentContainer\">\n      <button mat-stroked-button (click)=\"back()\">\n        <svg xmlns=\"http://www.w3.org/2000/svg\" width=\"24\" height=\"24\" viewBox=\"0 0 24 24\"><path d=\"M0 0h24v24H0z\" fill=\"none\"/><path d=\"M21 11H6.83l3.58-3.59L9 6l-6 6 6 6 1.41-1.41L6.83 13H21z\"/></svg>\n        Back\n      </button>\n    </div>\n\n  <div class=\"col-xs-12 col-sm-3 text-center contentContainer\">\n    <button mat-stroked-button routerLink=\"/home\">\n      <svg xmlns=\"http://www.w3.org/2000/svg\" width=\"24\" height=\"24\" viewBox=\"0 0 24 24\">\n        <path d=\"M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z\" />\n        <path d=\"M0 0h24v24H0z\" fill=\"none\" /></svg>\n      Home\n    </button>\n  </div>\n  </div>\n\n \n<!-- </div>\n<nav class=\"navbar navbar-expand-sm bg-dark navbar-dark\">\n    \n    <a class=\"navbar-brand\" href=\"#\">Logo</a>\n  \n    <ul class=\"navbar-nav\">\n      <li class=\"nav-item\">\n        <a class=\"nav-link\" href=\"#\">Link 1</a>\n      </li>\n      <li class=\"nav-item\">\n        <a class=\"nav-link\" href=\"#\">Link 2</a>\n      </li>\n  \n      \n      <li class=\"nav-item dropdown\">\n        <a class=\"nav-link dropdown-toggle\" href=\"#\" id=\"navbardrop\" data-toggle=\"dropdown\">\n          Dropdown link\n        </a>\n        <div class=\"dropdown-menu\">\n          <a class=\"dropdown-item\" href=\"#\">Link 1</a>\n          <a class=\"dropdown-item\" href=\"#\">Link 2</a>\n          <a class=\"dropdown-item\" href=\"#\">Link 3</a>\n        </div>\n      </li>\n    </ul>\n  </nav> -->"

/***/ }),

/***/ "./src/app/society-mgmt/society-header/society-header.component.ts":
/*!*************************************************************************!*\
  !*** ./src/app/society-mgmt/society-header/society-header.component.ts ***!
  \*************************************************************************/
/*! exports provided: SocietyHeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SocietyHeaderComponent", function() { return SocietyHeaderComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var SocietyHeaderComponent = /** @class */ (function () {
    function SocietyHeaderComponent(_location) {
        this._location = _location;
    }
    SocietyHeaderComponent.prototype.ngOnInit = function () {
    };
    SocietyHeaderComponent.prototype.back = function () {
        this._location.back();
    };
    SocietyHeaderComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-society-header',
            template: __webpack_require__(/*! ./society-header.component.html */ "./src/app/society-mgmt/society-header/society-header.component.html"),
            styles: [__webpack_require__(/*! ./society-header.component.css */ "./src/app/society-mgmt/society-header/society-header.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_common__WEBPACK_IMPORTED_MODULE_1__["Location"]])
    ], SocietyHeaderComponent);
    return SocietyHeaderComponent;
}());



/***/ }),

/***/ "./src/app/society-mgmt/society-mgmt.component.css":
/*!*********************************************************!*\
  !*** ./src/app/society-mgmt/society-mgmt.component.css ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#content{\n    overflow:scroll;\n}"

/***/ }),

/***/ "./src/app/society-mgmt/society-mgmt.component.html":
/*!**********************************************************!*\
  !*** ./src/app/society-mgmt/society-mgmt.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container mainContainer\">\n    <app-society-header></app-society-header>\n    <div class=\"row col-md-12 text-center\">\n      <div class=\"col-md-3\"></div>\n      <div *ngIf=\"!isLogged\" class=\"col-md-3\"> \n        <div routerLink=\"/login\" class=\"btn btn-outline-warning homeicons w-100\">Login</div>\n      </div>\n      <div *ngIf=\"isLogged\" class=\"col-md-3\">\n          <div class=\"btn btn-outline-warning homeicons w-100\" (click)=\"logout()\">Logout</div>\n      </div>\n      <div class=\"col-md-3\">\n        <div routerLink=\"/register\" class=\"btn btn-outline-danger homeicons w-100\"> Register</div>\n      </div>\n      <div class=\"col-md-3\"></div>\n    </div>\n    <!--<mat-divider></mat-divider>-->\n  <div class=\"row\">\n    <div class=\"col-sm-12 text-center contentContainer\">\n      <br>\n      <h2><b>Know More About Society</b></h2>\n      <div class=\"row\">\n        <div class=\"col-xs-12 col-sm-3 text-center contentContainer\">\n          <div routerLink=\"/societyManagment/society\" class=\"btn btn-outline-warning homeicons w-100\" (click)=\"ShowModal('society')\">\n            <svg width=\"24\" height=\"24\" viewBox=\"0 0 24 24\">\n              <path d=\"M15 11V5l-3-3-3 3v2H3v14h18V11h-6zm-8 8H5v-2h2v2zm0-4H5v-2h2v2zm0-4H5V9h2v2zm6 8h-2v-2h2v2zm0-4h-2v-2h2v2zm0-4h-2V9h2v2zm0-4h-2V5h2v2zm6 12h-2v-2h2v2zm0-4h-2v-2h2v2z\" />\n              <path d=\"M0 0h24v24H0z\" fill=\"none\" /></svg>\n            Society</div>\n        </div>\n        <div class=\"col-xs-12 col-sm-3 text-center contentContainer\">\n          <div (click)=\"ShowModal('buildings')\"\n            class=\"btn btn-outline-warning homeicons w-100\">\n            <svg width=\"24\" height=\"24\" viewBox=\"0 0 24 24\">\n              <path d=\"M0 0h24v24H0z\" fill=\"none\" />\n              <path d=\"M12 7V3H2v18h20V7H12zM6 19H4v-2h2v2zm0-4H4v-2h2v2zm0-4H4V9h2v2zm0-4H4V5h2v2zm4 12H8v-2h2v2zm0-4H8v-2h2v2zm0-4H8V9h2v2zm0-4H8V5h2v2zm10 12h-8v-2h2v-2h-2v-2h2v-2h-2V9h8v10zm-2-8h-2v2h2v-2zm0 4h-2v2h2v-2z\" /></svg>\n            Buildings</div>\n        </div>\n        <div class=\"col-xs-12 col-sm-3 text-center contentContainer\">\n          <div (click)=\"ShowModal('flats')\" class=\"btn btn-outline-danger homeicons w-100\">\n              <svg width=\"24\" height=\"24\" viewBox=\"0 0 24 24\">\n                  <path d=\"M0 0h24v24H0z\" fill=\"none\" />\n                  <path d=\"M20 2H4c-1.1 0-2 .9-2 2v16c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zM8 20H4v-4h4v4zm0-6H4v-4h4v4zm0-6H4V4h4v4zm6 12h-4v-4h4v4zm0-6h-4v-4h4v4zm0-6h-4V4h4v4zm6 12h-4v-4h4v4zm0-6h-4v-4h4v4zm0-6h-4V4h4v4z\" /></svg>\n            Flats</div>\n        </div>\n        <div class=\"col-xs-12 col-sm-3 text-center contentContainer\">\n          <div (click)=\"ShowModal('owners')\" class=\"btn btn-outline-danger homeicons w-100\">\n              <svg width=\"24\" height=\"24\" viewBox=\"0 0 24 24\">\n                  <path d=\"M0 0h24v24H0z\" fill=\"none\" />\n                  <path d=\"M16 11c1.66 0 2.99-1.34 2.99-3S17.66 5 16 5c-1.66 0-3 1.34-3 3s1.34 3 3 3zm-8 0c1.66 0 2.99-1.34 2.99-3S9.66 5 8 5C6.34 5 5 6.34 5 8s1.34 3 3 3zm0 2c-2.33 0-7 1.17-7 3.5V19h14v-2.5c0-2.33-4.67-3.5-7-3.5zm8 0c-.29 0-.62.02-.97.05 1.16.84 1.97 1.97 1.97 3.45V19h6v-2.5c0-2.33-4.67-3.5-7-3.5z\" /></svg>\n            owners</div>\n        </div>\n      </div>\n\n      <div *ngIf=\"showSpinner\">\n          <i class=\"fa fa-spinner fa-spin\" style=\"font-size:24px\"></i>\n      </div>\n      <div *ngIf=\"modalVar\" [hidden]=\"showSpinner\">\n        <app-modal [modalName]=\"modalVar\"></app-modal>\n      </div>\n\n      <div id=\"content\" *ngIf=\"showList\" [hidden]=\"showSpinner\">\n        <router-outlet></router-outlet>\n      </div>\n    </div>\n\n    <!-- <div class=\"col-xs-12 col-sm-12 text-center contentContainer\">\n        <img src=\"assets/banner.png\">\n      </div> -->\n\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/society-mgmt/society-mgmt.component.ts":
/*!********************************************************!*\
  !*** ./src/app/society-mgmt/society-mgmt.component.ts ***!
  \********************************************************/
/*! exports provided: SocietyMgmtComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SocietyMgmtComponent", function() { return SocietyMgmtComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_token_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./services/token.service */ "./src/app/society-mgmt/services/token.service.ts");
/* harmony import */ var _services_common_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./services/common.service */ "./src/app/society-mgmt/services/common.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var SocietyMgmtComponent = /** @class */ (function () {
    function SocietyMgmtComponent(_tokenService, router, _commonService) {
        this._tokenService = _tokenService;
        this.router = router;
        this._commonService = _commonService;
        this.isLogged = false;
    }
    SocietyMgmtComponent.prototype.ngOnInit = function () {
        var _this = this;
        console.log("tttttttt", localStorage.getItem('TOKEN'));
        this._tokenService.isLogged().subscribe(function (flag) {
            if (flag) {
                _this.isLogged = true;
            }
            else {
                _this.isLogged = false;
            }
        });
        this._commonService.eventShowList.subscribe(function (showEvent) {
            if (showEvent) {
                _this.showList = true;
            }
            else {
                _this.showList = false;
            }
        });
    };
    SocietyMgmtComponent.prototype.ShowModal = function (type) {
        var _this = this;
        this.showSpinner = true;
        console.log(type);
        if (type == 'flats' || type == 'owners') {
            this._tokenService.isLogged().subscribe(function (flag) {
                if (flag) {
                    _this.router.navigateByUrl('/societyManagment');
                    _this.modalVar = type;
                    _this.showSpinner = false;
                    // this.showList = false;
                }
                else {
                    _this.showList = false;
                    alert("Please login first");
                    _this.router.navigateByUrl('/login');
                    _this.showSpinner = false;
                }
            });
        }
        else if (type == 'buildings') {
            setTimeout(function () {
                _this.router.navigateByUrl('/societyManagment');
                _this.modalVar = type;
                _this.showSpinner = false;
            }, 0);
        }
        else {
            setTimeout(function () {
                _this.showList = true;
                _this.modalVar = type;
                _this.showSpinner = false;
            }, 0);
        }
    };
    SocietyMgmtComponent.prototype.logout = function () {
        localStorage.setItem('TOKEN', "");
        console.log("tttttttt", localStorage.getItem('TOKEN'));
        this.isLogged = false;
        this.router.navigateByUrl('/societyManagment');
        window.location.reload();
    };
    SocietyMgmtComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-society-mgmt',
            template: __webpack_require__(/*! ./society-mgmt.component.html */ "./src/app/society-mgmt/society-mgmt.component.html"),
            styles: [__webpack_require__(/*! ./society-mgmt.component.css */ "./src/app/society-mgmt/society-mgmt.component.css")]
        }),
        __metadata("design:paramtypes", [_services_token_service__WEBPACK_IMPORTED_MODULE_1__["TokenService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"], _services_common_service__WEBPACK_IMPORTED_MODULE_2__["CommonService"]])
    ], SocietyMgmtComponent);
    return SocietyMgmtComponent;
}());



/***/ }),

/***/ "./src/app/society-mgmt/society/society.component.css":
/*!************************************************************!*\
  !*** ./src/app/society-mgmt/society/society.component.css ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "table {\r\n    width: 100%;\r\n  }\r\n\r\n  .tableClass {\r\n   font-weight: bold; \r\n  }"

/***/ }),

/***/ "./src/app/society-mgmt/society/society.component.html":
/*!*************************************************************!*\
  !*** ./src/app/society-mgmt/society/society.component.html ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"tableClass\" class=\"mat-elevation-z8\">\n  <table class=\"tableClass\"  mat-table [dataSource]=\"dataSource\">\n\n    <!-- Position Column -->\n    <ng-container matColumnDef=\"societyid\">\n      <th mat-cell *matHeaderCellDef> Society Id </th>\n      <td mat-cell *matCellDef=\"let element\"> {{element.societyid}} </td>\n    </ng-container>\n\n    <!-- Name Column -->\n    <ng-container matColumnDef=\"societyname\">\n      <th mat-cell *matHeaderCellDef> Society Name </th>\n      <td mat-cell *matCellDef=\"let element\"> {{element.societyname}} </td>\n    </ng-container>\n\n    <!-- Weight Column -->\n    <ng-container matColumnDef=\"address\">\n      <th mat-cell *matHeaderCellDef> Address </th>\n      <td mat-cell *matCellDef=\"let element\"> {{element.address}} </td>\n    </ng-container>\n\n    <!-- Symbol Column -->\n    <ng-container matColumnDef=\"pincode\">\n      <th mat-cell *matHeaderCellDef> Pincode </th>\n      <td mat-cell *matCellDef=\"let element\"> {{element.pincode}} </td>\n    </ng-container>\n\n    <ng-container matColumnDef=\"showBuilding\">\n      <th mat-cell *matHeaderCellDef> Show Buildings </th>\n      <td mat-cell *matCellDef=\"let element\"> <button mat-stroked-button (click)=\"goToBuilding(element.societyid)\">             <svg width=\"24\" height=\"24\" viewBox=\"0 0 24 24\">\n        <path d=\"M0 0h24v24H0z\" fill=\"none\" />\n        <path d=\"M12 7V3H2v18h20V7H12zM6 19H4v-2h2v2zm0-4H4v-2h2v2zm0-4H4V9h2v2zm0-4H4V5h2v2zm4 12H8v-2h2v2zm0-4H8v-2h2v2zm0-4H8V9h2v2zm0-4H8V5h2v2zm10 12h-8v-2h2v-2h-2v-2h2v-2h-2V9h8v10zm-2-8h-2v2h2v-2zm0 4h-2v2h2v-2z\" /></svg>Buildings\n        </button>\n      </td>\n    </ng-container>\n\n    <ng-container matColumnDef=\"delete\">\n      <th mat-cell *matHeaderCellDef>delete </th>\n      <td mat-cell *matCellDef=\"let element\"> <button mat-stroked-button (click)=\"deleteBuilding(element.societyid)\"> <svg\n            xmlns=\"http://www.w3.org/2000/svg\" width=\"24\" height=\"24\" viewBox=\"0 0 24 24\">\n            <path d=\"M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM19 4h-3.5l-1-1h-5l-1 1H5v2h14V4z\" />\n            <path d=\"M0 0h24v24H0z\" fill=\"none\" /></svg>\n        </button>\n      </td>\n    </ng-container>\n\n    <tr mat-row *matHeaderRowDef=\"displayedColumns\"></tr>\n    <tr mat-row *matRowDef=\"let row; columns: displayedColumns;\"></tr>\n  </table>\n\n  <mat-paginator class=\"tableClass\" [pageSizeOptions]=\"[5, 10, 20]\" showFirstLastButtons></mat-paginator>\n</div>\n\n<!-- <div [hidden]=\"!(societyInfo && societyInfo[0]?.societyid)\">\n    <event-calendar-component></event-calendar-component>\n</div>  -->"

/***/ }),

/***/ "./src/app/society-mgmt/society/society.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/society-mgmt/society/society.component.ts ***!
  \***********************************************************/
/*! exports provided: SocietyComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SocietyComponent", function() { return SocietyComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/user.service */ "./src/app/society-mgmt/services/user.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _services_common_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/common.service */ "./src/app/society-mgmt/services/common.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var SocietyComponent = /** @class */ (function () {
    function SocietyComponent(_userService, router, route, _commonService) {
        this._userService = _userService;
        this.router = router;
        this.route = route;
        this._commonService = _commonService;
        this.societyInfo = undefined;
    }
    SocietyComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._userService.getSociety().subscribe(function (data) {
            _this.society = data.dbResponse;
            _this.displayedColumns = ['societyid', 'societyname', 'address', 'pincode', 'showBuilding', 'delete'];
            var ELEMENT_DATA = data.dbResponse;
            _this.dataSource = new _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatTableDataSource"](ELEMENT_DATA);
            _this.dataSource.paginator = _this.paginator;
        }, function (error) {
            console.log(error);
            _this.society = error.message;
        });
    };
    SocietyComponent.prototype.onSelect = function (societyid) {
        var _this = this;
        this._userService.getSocietyEvents(societyid).subscribe(function (societyEvevts) {
            _this._commonService.emitEventCalanderData(societyEvevts.dbResponse);
        }, function (error) {
            console.log(error);
            _this.society = error.message;
        });
        this._userService.getSocietyInfo(societyid).subscribe(function (data) {
            _this.societyInfo = data.dbResponse;
        }, function (error) {
            console.log(error);
            _this.society = error.message;
        });
    };
    SocietyComponent.prototype.goToBuilding = function (societyId) {
        this.router.navigate(['societyManagment', societyId, 'buildings']);
        this._commonService.emitShowListEvent(true);
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_3__["MatPaginator"]),
        __metadata("design:type", _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatPaginator"])
    ], SocietyComponent.prototype, "paginator", void 0);
    SocietyComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-society',
            template: __webpack_require__(/*! ./society.component.html */ "./src/app/society-mgmt/society/society.component.html"),
            styles: [__webpack_require__(/*! ./society.component.css */ "./src/app/society-mgmt/society/society.component.css")]
        }),
        __metadata("design:paramtypes", [_services_user_service__WEBPACK_IMPORTED_MODULE_1__["UserService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], _services_common_service__WEBPACK_IMPORTED_MODULE_4__["CommonService"]])
    ], SocietyComponent);
    return SocietyComponent;
}());



/***/ }),

/***/ "./src/app/society-mgmt/tenant/tenant.component.css":
/*!**********************************************************!*\
  !*** ./src/app/society-mgmt/tenant/tenant.component.css ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/society-mgmt/tenant/tenant.component.html":
/*!***********************************************************!*\
  !*** ./src/app/society-mgmt/tenant/tenant.component.html ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  tenant works!\n</p>\n"

/***/ }),

/***/ "./src/app/society-mgmt/tenant/tenant.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/society-mgmt/tenant/tenant.component.ts ***!
  \*********************************************************/
/*! exports provided: TenantComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TenantComponent", function() { return TenantComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var TenantComponent = /** @class */ (function () {
    function TenantComponent() {
    }
    TenantComponent.prototype.ngOnInit = function () {
    };
    TenantComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-tenant',
            template: __webpack_require__(/*! ./tenant.component.html */ "./src/app/society-mgmt/tenant/tenant.component.html"),
            styles: [__webpack_require__(/*! ./tenant.component.css */ "./src/app/society-mgmt/tenant/tenant.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], TenantComponent);
    return TenantComponent;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! hammerjs */ "./node_modules/hammerjs/hammer.js");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(hammerjs__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");





if (_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\storage\class\11-1\Angular\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map