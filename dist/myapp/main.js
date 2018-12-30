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
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



























var routes = [
    { path: "", redirectTo: '/home', pathMatch: "full" },
    { path: "login", component: _society_mgmt_login_login_component__WEBPACK_IMPORTED_MODULE_16__["LoginComponent"] },
    { path: "register", component: _society_mgmt_register_register_member_component__WEBPACK_IMPORTED_MODULE_15__["RegisterMemberComponent"] },
    { path: "home", component: _home_home_component__WEBPACK_IMPORTED_MODULE_8__["HomeComponent"] },
    {
        path: "societyManagment", component: _society_mgmt_society_mgmt_component__WEBPACK_IMPORTED_MODULE_7__["SocietyMgmtComponent"],
        children: [
            { path: "society", component: _society_mgmt_society_society_component__WEBPACK_IMPORTED_MODULE_17__["SocietyComponent"] },
            { path: ":societyid/buildings", component: _society_mgmt_building_building_component__WEBPACK_IMPORTED_MODULE_9__["BuildingComponent"] },
            {
                path: ":societyid/buildings/:buildingid/flats",
                component: _society_mgmt_flats_flats_component__WEBPACK_IMPORTED_MODULE_10__["FlatsComponent"],
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
                _society_mgmt_event_calendar_event_calendar_component__WEBPACK_IMPORTED_MODULE_26__["EventCalendarComponent"]
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

module.exports = ".homeIconList{\r\n    background-color: rgba(242, 242,242, .45);\r\n    min-width: 220px;\r\n    min-height: 80px;\r\n    margin: 10px;\r\n}\r\n.m-r-20 {\r\n    margin-right: 20px; }"

/***/ }),

/***/ "./src/app/home/home.component.html":
/*!******************************************!*\
  !*** ./src/app/home/home.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container mainContainer\">\r\n  <div class=\"row h-100 justify-content-center align-items-center\">\r\n    <div class=\"col-xs-6 col-sm-6 text-left\">\r\n      <img src=\"assets/logo2.jpg\" class=\"img-fluid\" />\r\n    </div>\r\n    <div class=\"col-xs-6 col-sm-6 text-right\">\r\n      <a routerLink=\"/home\" class='btn btn-outline-warning btn'>\r\n        Home\r\n      </a>\r\n    </div>\r\n  </div>\r\n  <br>\r\n  <div class=\"row h-100 justify-content-center align-items-center\">\r\n    <div class=\"col-sm-6 text-center\">\r\n      <h1>Lorem Ipsum</h1>\r\n      <div>Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur</div>\r\n    </div>\r\n    <div class=\"col-sm-6 text-right\">\r\n      <img src=\"assets/Smart-Government-Solutions.png\" class=\"img-fluid\" />\r\n    </div>\r\n  </div>\r\n  <div class=\"row\">\r\n\r\n    <div class=\"col-xs-12 col-sm-12 text-center contentContainer\">\r\n      <a routerLink=\"/societyManagment\" class=\"btn btn-outline-warning homeicons w-100\">Society Management</a>\r\n    </div>\r\n\r\n  </div>\r\n</div>"

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

module.exports = "\n<div class=\"row\" *ngIf=\"societyInfo\">\n    <div class=\"col-xs-12 col-sm-12 text-left contentContainer\">    \n        Society ID:  {{societyInfo && societyInfo[0]?.societyid}} <BR>\n      Society Name: {{societyInfo && societyInfo[0]?.societyname}}<br>\n      Society Address: {{societyInfo && societyInfo[0]?.address}},{{societyInfo && societyInfo[0]?.pincode}}<br>\n    </div>\n  </div>\n  \n<div class=\"row\">\n    <div class=\"col-xs-12 col-sm-12 text-center contentContainer\">\n      \n      <table class=\"table\">\n          <thead>\n            <tr>\n              <th>buildingid</th>\n              <th>buildingname</th>\n            </tr>\n          </thead>\n          <tbody>\n            <tr *ngFor=\"let building of buildingList\">\n              <td>{{building.buildingid}}</td>\n              <td>{{building.buildingname}}</td>\n            </tr>\n          </tbody>\n        </table>\n    </div>  \n  </div>\n<div *ngFor=\"\">\n    {{building | json}}\n</div>\n<div [hidden]=\"!buildingList\">\n  <event-calendar-component></event-calendar-component>\n</div>\n\n"

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

module.exports = "h3 {\r\n    margin: 0 0 10px;\r\n  }\r\n  \r\n  pre {\r\n    background-color: #f5f5f5;\r\n    padding: 15px;\r\n  }"

/***/ }),

/***/ "./src/app/society-mgmt/calendar/calendar.component.html":
/*!***************************************************************!*\
  !*** ./src/app/society-mgmt/calendar/calendar.component.html ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ng-template #modalContent let-close=\"close\">\r\n  <div class=\"modal-header\">\r\n    <h5 class=\"modal-title\">Event action occurred</h5>\r\n    <button type=\"button\" class=\"close\" (click)=\"close()\">\r\n      <span aria-hidden=\"true\">&times;</span>\r\n    </button>\r\n  </div>\r\n  <div class=\"modal-body\">\r\n    <div>\r\n      Action:\r\n      <pre>{{ modalData?.action }}</pre>\r\n    </div>\r\n    <div>\r\n      Event:\r\n      <pre>{{ modalData?.event | json }}</pre>\r\n    </div>\r\n  </div>\r\n  <div class=\"modal-footer\">\r\n    <button type=\"button\" class=\"btn btn-outline-secondary\" (click)=\"close()\">OK</button>\r\n  </div>\r\n</ng-template>\r\n\r\n<div class=\"text-center\">\r\n  <div>\r\n    <div class=\"btn-group\">\r\n      <div\r\n        class=\"btn btn-primary\"\r\n        mwlCalendarPreviousView\r\n        [view]=\"view\"\r\n        [(viewDate)]=\"viewDate\"\r\n        (viewDateChange)=\"activeDayIsOpen = false\">\r\n        Previous\r\n      </div>\r\n      <div\r\n        class=\"btn btn-outline-secondary\"\r\n        mwlCalendarToday\r\n        [(viewDate)]=\"viewDate\">\r\n        Today\r\n      </div>\r\n      <div\r\n        class=\"btn btn-primary\"\r\n        mwlCalendarNextView\r\n        [view]=\"view\"\r\n        [(viewDate)]=\"viewDate\"\r\n        (viewDateChange)=\"activeDayIsOpen = false\">\r\n        Next\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <div>\r\n    <h3>{{ viewDate | calendarDate:(view + 'ViewTitle'):'en' }}</h3>\r\n  </div>\r\n  <div>\r\n    <div class=\"btn-group\">\r\n      <div\r\n        class=\"btn btn-primary\"\r\n        (click)=\"view = CalendarView.Month\"\r\n        [class.active]=\"view === CalendarView.Month\">\r\n        Month\r\n      </div>\r\n      <div\r\n        class=\"btn btn-primary\"\r\n        (click)=\"view = CalendarView.Week\"\r\n        [class.active]=\"view === CalendarView.Week\">\r\n        Week\r\n      </div>\r\n      <div\r\n        class=\"btn btn-primary\"\r\n        (click)=\"view = CalendarView.Day\"\r\n        [class.active]=\"view === CalendarView.Day\">\r\n        Day\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n<br>\r\n<div [ngSwitch]=\"view\">\r\n  <mwl-calendar-month-view\r\n    *ngSwitchCase=\"CalendarView.Month\"\r\n    [viewDate]=\"viewDate\"\r\n    [events]=\"events\"\r\n    [refresh]=\"refresh\"\r\n    [activeDayIsOpen]=\"activeDayIsOpen\"\r\n    (dayClicked)=\"dayClicked($event.day)\"\r\n    (eventClicked)=\"handleEvent('Clicked', $event.event)\"\r\n    (eventTimesChanged)=\"eventTimesChanged($event)\">\r\n  </mwl-calendar-month-view>\r\n  <mwl-calendar-week-view\r\n    *ngSwitchCase=\"CalendarView.Week\"\r\n    [viewDate]=\"viewDate\"\r\n    [events]=\"events\"\r\n    [refresh]=\"refresh\"\r\n    (eventClicked)=\"handleEvent('Clicked', $event.event)\"\r\n    (eventTimesChanged)=\"eventTimesChanged($event)\">\r\n  </mwl-calendar-week-view>\r\n  <mwl-calendar-day-view\r\n    *ngSwitchCase=\"CalendarView.Day\"\r\n    [viewDate]=\"viewDate\"\r\n    [events]=\"events\"\r\n    [refresh]=\"refresh\"\r\n    (eventClicked)=\"handleEvent('Clicked', $event.event)\"\r\n    (eventTimesChanged)=\"eventTimesChanged($event)\">\r\n  </mwl-calendar-day-view>\r\n</div>\r\n\r\n<br><br><br>\r\n\r\n<h3>\r\n  Edit events\r\n  <button\r\n    class=\"btn btn-primary pull-right\"\r\n    (click)=\"addEvent()\">\r\n    Add new\r\n  </button>\r\n  <div class=\"clearfix\"></div>\r\n</h3>\r\n\r\n<!-- <table class=\"table table-bordered\">\r\n\r\n  <thead>\r\n    <tr>\r\n      <th>Title</th>\r\n      <th>Primary color</th>\r\n      <th>Secondary color</th>\r\n      <th>Starts at</th>\r\n      <th>Ends at</th>\r\n      <th>Remove</th>\r\n    </tr>\r\n  </thead>\r\n\r\n  <tbody>\r\n    <tr *ngFor=\"let event of events; let index = index\">\r\n      <td>\r\n        <input\r\n          type=\"text\"\r\n          class=\"form-control\"\r\n          [(ngModel)]=\"event.title\"\r\n          (keyup)=\"refresh.next()\">\r\n      </td>\r\n      <td>\r\n        <input\r\n          type=\"color\"\r\n          [(ngModel)]=\"event.color.primary\"\r\n          (change)=\"refresh.next()\">\r\n      </td>\r\n      <td>\r\n        <input\r\n          type=\"color\"\r\n          [(ngModel)]=\"event.color.secondary\"\r\n          (change)=\"refresh.next()\">\r\n      </td>\r\n      <td>\r\n        <input\r\n          class=\"form-control\"\r\n          type=\"text\"\r\n          mwlFlatpickr\r\n          [(ngModel)]=\"event.start\"\r\n          (ngModelChange)=\"refresh.next()\"\r\n          [altInput]=\"true\"\r\n          [convertModelValue]=\"true\"\r\n          [enableTime]=\"true\"\r\n          dateFormat=\"Y-m-dTH:i\"\r\n          altFormat=\"F j, Y H:i\"\r\n          placeholder=\"Not set\">\r\n      </td>\r\n      <td>\r\n        <input\r\n          class=\"form-control\"\r\n          type=\"text\"\r\n          mwlFlatpickr\r\n          [(ngModel)]=\"event.end\"\r\n          (ngModelChange)=\"refresh.next()\"\r\n          [altInput]=\"true\"\r\n          [convertModelValue]=\"true\"\r\n          [enableTime]=\"true\"\r\n          dateFormat=\"Y-m-dTH:i\"\r\n          altFormat=\"F j, Y H:i\"\r\n          placeholder=\"Not set\">\r\n      </td>\r\n      <td>\r\n        <button\r\n          class=\"btn btn-danger\"\r\n          (click)=\"events.splice(index, 1); refresh.next()\">\r\n          Delete\r\n        </button>\r\n      </td>\r\n    </tr>\r\n  </tbody>\r\n\r\n</table> -->"

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

module.exports = "h3 {\r\n    margin: 0 0 10px;\r\n  }\r\n  \r\n  pre {\r\n    background-color: #f5f5f5;\r\n    padding: 15px;\r\n  }"

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

module.exports = "\n<div class=\"row\">\n    <div class=\"col-xs-12 col-sm-12 text-left contentContainer\">    \n        Society ID:  {{societyInfo && societyInfo[0]?.societyid}} <br>\n      Society Name: {{societyInfo && societyInfo[0]?.societyname}} ,  <br>     \n      Society Address: {{societyInfo && societyInfo[0]?.address}},{{societyInfo && societyInfo[0]?.pincode}}<br><br>\n      buildingname : {{this.param2}}<br>\n    </div>\n  </div>\n<div class=\"row\">\n    <div class=\"col-xs-12 col-sm-12 text-center contentContainer\">\n      \n      <table class=\"table\">\n          <thead>\n            <tr>\n              <th>flatid</th>\n              <th>flatname</th>\n              <th>ownerid</th>\n              <th>pendingpayment</th>\n              <th>payment button</th>\n              <th>Calender</th>\n            </tr>\n          </thead>\n          <tbody>\n            <tr  *ngFor=\"let flat of flatList\">\n              <td>{{flat.flatid}}</td>\n              <td>{{flat.flatname}}</td>\n              <td>{{flat.ownerid}}</td>\n              <td>{{flat.pendingpayment}}</td>\n              <td> \n                  <button type=\"button\" class=\"btn btn-info\" data-toggle=\"modal\" data-target=\"#pendingModal\" (click)=\"paymentID(flat)\">Pay</button>\n              </td>\n              <td> \n                <button type=\"button\" class=\"btn btn-info\" (click)=\"showCalender(flat.flatid)\">Calender</button>\n              </td>\n            </tr>\n          </tbody>\n        </table>\n    </div>\n  </div>\n<div *ngFor=\"\">\n    {{building | json}}\n</div>\n\n\n\n<!-- Modal -->\n<div id=\"pendingModal\" class=\"modal fade\" role=\"dialog\">\n  <div class=\"modal-dialog\">\n      <form name=\"form\" (ngSubmit)=\"f.form.valid\" #f=\"ngForm\" novalidate>\n    <!-- Modal content-->\n    <div class=\"modal-content\">\n      <div class=\"modal-header\">\n          <h4 class=\"modal-title\">Payment Option</h4>  \n        <button type=\"button\" class=\"close\" data-dismiss=\"modal\">&times;</button>\n          \n      </div>\n      <div class=\"modal-body\">\n          <input type=\"text\" class=\"form-control\" name=\"payAmount\" placeholder=\"Enter Paynding Payment amount\" [(ngModel)]=\"payAmount\" \n          required />\n      </div>\n      <div class=\"modal-footer\">\n        <button type=\"button\" class=\"btn btn-default\" data-dismiss=\"modal\" (click)=\"paymentMethod(payAmount)\" >Pay</button>\n        <div *ngIf=\"isClosedValue\">\n          <div data-dismiss=\"modal\"></div>\n        </div>\n      </div>\n    </div>\n</form>\n  </div>\n</div>\n<div>\n  <calendar-component></calendar-component>\n</div>"

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
            _this.param1 = value["societyid"]; // get param
            _this.param2 = value["buildingid"]; // get param
            _this._userService.getFlatList(_this.param2).subscribe(function (data) {
                _this.flatList = data.dbResponse;
            }, function (error) {
                console.log(error);
                _this.society = error.message;
            });
            _this._userService.getSocietyInfo(_this.param1).subscribe(function (data) {
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

module.exports = "\r\n\r\n.loginBox{\r\n    padding: 20px;\r\n    margin-top:20px;\r\n    border: 1px solid rgba(0, 0, 0, 0.16);\r\n    -ms-box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);\r\n    -o-box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);\r\n    box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);\r\n}"

/***/ }),

/***/ "./src/app/society-mgmt/login/login.component.html":
/*!*********************************************************!*\
  !*** ./src/app/society-mgmt/login/login.component.html ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- main app container -->\n\n<div class=\"container\">\n    <div class=\"row mainContainer\">\n        <div class=\"d-none d-sm-block col-sm-8 align-self-center text-center\">\n            <h4>Lorem Ipsum</h4>\n            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore\n                magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo\n                consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.\n                Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>\n            <img src=\"assets/login-detail.jpg\" class=\"img-fluid\" />\n        </div>\n        <div class=\"col-xs-12 col-sm-4 align-self-top\">\n            <br> <br>\n            <div class=\"loginBox\">\n                <h4 class=\" text-center\">Member login</h4>\n                <br>\n                <form name=\"form\" (ngSubmit)=\"f.form.valid && onSubmit()\" #f=\"ngForm\" novalidate>\n                    <div class=\"form-group\">\n                        <input type=\"text\" class=\"form-control\" name=\"uname\" placeholder=\"User Name\" [(ngModel)]=\"model.uname\" #uname=\"ngModel\" [ngClass]=\"{ 'is-invalid': f.submitted && uname.invalid }\"\n                            required />\n                        <div *ngIf=\"f.submitted && uname.invalid\" class=\"invalid-feedback\">\n                            <div *ngIf=\"uname.errors.required\">username is required</div>\n                        </div>\n                    </div> \n                    <div class=\"form-group\">\n                        <input type=\"password\" class=\"form-control\" placeholder=\"Password\" name=\"password\" [(ngModel)]=\"model.password\" #password=\"ngModel\"\n                            [ngClass]=\"{ 'is-invalid': f.submitted && password.invalid }\" required />\n                        <div *ngIf=\"f.submitted && password.invalid\" class=\"invalid-feedback\">\n                            <div *ngIf=\"password.errors.required\">password is required</div>\n                        </div>\n                    </div>\n                    <div class=\"form-group\">\n                        <button class=\"btn btn-block btn-primary\">Login</button>\n                    </div>\n                    <div class=\"form-group text-center\">\n                        <a routerLink=\"/register\" class=\"btn btn-link\">Not a member? Sign up</a>\n                    </div>\n                </form>\n            </div>\n            <br> <br>\n        </div>\n        \n    </div>\n</div>"

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

module.exports = ".example-additional-selection {\r\n    opacity: 0.75;\r\n    font-size: 0.75em;\r\n  }"

/***/ }),

/***/ "./src/app/society-mgmt/modal/modal.component.html":
/*!*********************************************************!*\
  !*** ./src/app/society-mgmt/modal/modal.component.html ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n\n<div> {{modalName}}\n    <mat-form-field  *ngIf=\"(modalName == 'flats' || modalName == 'buildings' || modalName == 'owners')\">\n        <!-- <mat-select placeholder=\"Select Society\" [formControl]=\"societyFormCtrl\" multiple> -->\n        <mat-select placeholder=\"Select Society\"  [formControl]=\"societyFormCtrl\">\n          <!-- <mat-select-trigger>\n            {{societyFormCtrl.value ? societyFormCtrl.value[0] : ''}}\n            <span *ngIf=\"societyFormCtrl.value?.length > 1\" class=\"example-additional-selection\">\n              (+{{societyFormCtrl.value.length - 1}} {{societyFormCtrl.value?.length === 2 ? 'other' : 'others'}})\n            </span>\n          </mat-select-trigger> -->\n          <mat-option *ngFor=\"let s of societyList\" [value]=\"s.societyid\">{{s.societyname}}</mat-option>\n        </mat-select>\n      </mat-form-field>\n      <mat-form-field *ngIf=\"(modalName == 'flats' || modalName == 'owners')\">\n          <!-- <mat-select placeholder=\"Select Society\" [formControl]=\"buildingFormCtrl\" multiple> -->\n          <mat-select placeholder=\"Select flats\"  [formControl]=\"buildingFormCtrl\">\n            <!-- <mat-select-trigger>\n              {{buildingFormCtrl.value ? buildingFormCtrl.value[0] : ''}}\n              <span *ngIf=\"buildingFormCtrl.value?.length > 1\" class=\"example-additional-selection\">\n                (+{{buildingFormCtrl.value.length - 1}} {{buildingFormCtrl.value?.length === 2 ? 'other' : 'others'}})\n              </span>\n            </mat-select-trigger> -->\n            <mat-option *ngFor=\"let building of buildingList\" [value]=\"building.buildingname\">{{building.buildingname}}</mat-option>\n          </mat-select>\n        </mat-form-field>\n        <mat-form-field  *ngIf=\"modalName == 'owners'\">\n            <!-- <mat-select placeholder=\"Select Society\" [formControl]=\"buildingFormCtrl\" multiple> -->\n            <mat-select placeholder=\"Select owners\"  [formControl]=\"ownerFormCtrl\" multiple>\n              <mat-select-trigger>\n                {{ownerFormCtrl.value ? ownerFormCtrl.value[0] : ''}}\n                <span *ngIf=\"ownerFormCtrl.value?.length > 1\" class=\"example-additional-selection\">\n                  (+{{ownerFormCtrl.value.length - 1}} {{ownerFormCtrl.value?.length === 2 ? 'other' : 'others'}})\n                </span>\n              </mat-select-trigger>\n              <mat-option *ngFor=\"let flat of flatList\" [value]=\"flat.flatname\">{{flat.flatname}}</mat-option>\n            </mat-select>\n          </mat-form-field>\n</div>\n<button *ngIf=\"(modalName == 'flats' || modalName == 'buildings' || modalName == 'owners' )\" type=\"button\" class=\"btn btn-primary\" (click)=\"onSubmit()\">Submit</button>"

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
        this.buildingFormCtrl.valueChanges.subscribe(function (buildingId) {
            console.log("on changes....", buildingId);
            _this.bid = buildingId;
            _this._userService.getFlatList(buildingId).subscribe(function (data) {
                _this.flatList = data.dbResponse;
            }, function (error) {
                console.log(error);
                _this.flatList = error.message;
            });
        });
    };
    ModalComponent.prototype.onBuildingChange = function (buildingId) {
        var _this = this;
        this._userService.getFlatList(buildingId).subscribe(function (data) {
            _this.flatList = data.dbResponse;
        }, function (error) {
            console.log(error);
            _this.flatList = error.message;
        });
    };
    ModalComponent.prototype.onSubmit = function () {
        console.log(this.modalName);
        if (this.modalName == 'buildings') {
            this.router.navigate(['societyManagment', this.sid, 'buildings']);
            this._commonService.emitShowListEvent(true);
        }
        else if (this.modalName == 'flats') {
            this.router.navigate(['societyManagment', this.sid, 'buildings', this.bid, 'flats']);
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

module.exports = "<p>\n  owners works!<br>\n  {{ownerData | json}}\n</p>\n"

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
    function OwnersComponent(_userService) {
        this._userService = _userService;
    }
    OwnersComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._userService.getAllOwners().subscribe(function (data) {
            _this.ownerData = data;
        }, function (error) {
            _this.ownerData = error;
        });
    };
    OwnersComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-owners',
            template: __webpack_require__(/*! ./owners.component.html */ "./src/app/society-mgmt/owners/owners.component.html"),
            styles: [__webpack_require__(/*! ./owners.component.css */ "./src/app/society-mgmt/owners/owners.component.css")]
        }),
        __metadata("design:paramtypes", [_services_user_service__WEBPACK_IMPORTED_MODULE_1__["UserService"]])
    ], OwnersComponent);
    return OwnersComponent;
}());



/***/ }),

/***/ "./src/app/society-mgmt/register/register-member.component.css":
/*!*********************************************************************!*\
  !*** ./src/app/society-mgmt/register/register-member.component.css ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/society-mgmt/register/register-member.component.html":
/*!**********************************************************************!*\
  !*** ./src/app/society-mgmt/register/register-member.component.html ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\r\n    <div class=\"row justify-content-center mainContainer\">\r\n      <div class=\"col-xs-12 col-md-8 col-lg-8 col-xl-8\">\r\n        <div class=\"row\">\r\n          <div class=\"col text-left\">\r\n            <a routerLink=\"/home\" class=\"btn btn-link\">Back</a>\r\n          </div>\r\n        </div>\r\n        <div class=\"row\">\r\n          <div class=\"col text-center\">\r\n            <h1>{{pageTitle}}</h1>\r\n            <p class=\"text-h3\">{{pageDesc}}</p>\r\n          </div>\r\n        </div>\r\n        <div class=\"row align-items-center\">\r\n          <div class=\"col\">\r\n              <form name=\"form\" (ngSubmit)=\"f.form.valid && onSubmit()\" #f=\"ngForm\" novalidate>\r\n                  <div class=\"form-group\">\r\n                      <input type=\"number\" class=\"form-control\" name=\"flatnum\" placeholder=\"{{formLabelNames.flatno}}\" [(ngModel)]=\"model.flatnum\" #flatnum=\"ngModel\" [ngClass]=\"{ 'is-invalid': f.submitted && flatnum.invalid }\" required />\r\n                      <div *ngIf=\"f.submitted && flatnum.invalid\" class=\"invalid-feedback\">\r\n                          <div *ngIf=\"flatnum.errors.required\">Flat Number is required</div>\r\n                      </div>\r\n                  </div>\r\n                  <div class=\"form-row mb-4\">\r\n                      <div class=\"col\">\r\n                          <input type=\"text\" class=\"form-control\" name=\"fname\" placeholder=\"{{formLabelNames.ownerFname}}\" [(ngModel)]=\"model.fname\" #fname=\"ngModel\" [ngClass]=\"{ 'is-invalid': f.submitted && fname.invalid }\" required />\r\n                          <div *ngIf=\"f.submitted && fname.invalid\" class=\"invalid-feedback\">\r\n                              <div *ngIf=\"fname.errors.required\">Owner First name is required</div>\r\n                          </div>\r\n                      </div>\r\n                      <div class=\"col\">\r\n                          <div class=\"form-group\">\r\n                              <input type=\"text\" class=\"form-control\" name=\"lname\" placeholder=\"{{formLabelNames.ownerLname}}\" [(ngModel)]=\"model.lname\" #lname=\"ngModel\" [ngClass]=\"{ 'is-invalid': f.submitted && lname.invalid }\" required />\r\n                              <div *ngIf=\"f.submitted && lname.invalid\" class=\"invalid-feedback\">\r\n                                <div *ngIf=\"lname.errors.required\">Owner Last name is required</div>\r\n                              </div>\r\n                            </div>\r\n                      </div>\r\n                  </div>\r\n                  <div class=\"form-group\">\r\n                    <input type=\"text\" class=\"form-control\" name=\"phone\" placeholder=\"{{formLabelNames.phone}}\" [(ngModel)]=\"model.phone\" #phone=\"ngModel\" [ngClass]=\"{ 'is-invalid': f.submitted && phone.invalid }\" required/>\r\n                    <div *ngIf=\"f.submitted && phone.invalid\" class=\"invalid-feedback\">\r\n                      <div *ngIf=\"phone.errors.required\">Phone number is required</div>\r\n                      <div *ngIf=\"phone.errors.number\">Phone number is number</div>\r\n                    </div>\r\n                  </div>\r\n                  <div class=\"form-group\">\r\n                      <input type=\"email\" class=\"form-control\" name=\"paymentamount\" placeholder=\"{{formLabelNames.paymentamount}}\" [(ngModel)]=\"model.paymentamount\" #paymentamount=\"ngModel\" [ngClass]=\"{ 'is-invalid': f.submitted && paymentamount.invalid }\" required />\r\n                      <div *ngIf=\"f.submitted && paymentamount.invalid\" class=\"invalid-feedback\">\r\n                        <div *ngIf=\"paymentamount.errors.required\">payment amount is required</div>\r\n                      </div>\r\n                    </div>\r\n                    <div class=\"form-row mb-4\">\r\n                        <div class=\"col\">\r\n                            <label for=\"paymentmethod\">{{formLabelNames.paymentmethod}}</label><br>\r\n                            \r\n                            <div class=\"form-check\">\r\n                              <label class=\"form-check-label\" for=\"cash\">\r\n                                <input type=\"checkbox\" [(ngModel)]=\"model.paymentmethod\" #paymentmethod=\"ngModel\" id=\"cash\" class=\"form-check-input\" name=\"paymentmethod\" value=\"{{formLabelNames.paymentmethodValue[0]}}\" checked>{{formLabelNames.paymentmethodValue[0]}}\r\n                              </label>\r\n                            </div>\r\n                            <div class=\"form-check\">\r\n                              <label class=\"form-check-label\" for=\"card\">\r\n                                <input type=\"checkbox\" class=\"form-check-input\" id=\"card\" name=\"paymentmethod\" value=\"{{formLabelNames.paymentmethodValue[1]}}\" (click)=\"clickCard()\">{{formLabelNames.paymentmethodValue[1]}}\r\n                              </label>\r\n                            </div>\r\n                            <div class=\"form-check\">\r\n                              <label class=\"form-check-label\">\r\n                                <input type=\"checkbox\" class=\"form-check-input\" value=\"{{formLabelNames.paymentmethodValue[2]}}\">{{formLabelNames.paymentmethodValue[2]}}\r\n                              </label>\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"col\" *ngIf=\"Debitcard\">                          \r\n                            <div class=\"form-group\">\r\n                                <input type=\"text\" class=\"form-control\" id=\"paymentamount\" placeholder=\"card number\">\r\n                            </div>\r\n                            <div class=\"form-group\">\r\n                                <input type=\"text\" class=\"form-control\" id=\"paymentamount\" placeholder=\"name on card\">\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"form-row mb-4\">\r\n                        <div class=\"col\">\r\n                            <label>{{formLabelNames.flatrented}}</label>\r\n                            <div class=\"form-check\">\r\n                              <label class=\"form-check-label\">\r\n                                <input type=\"radio\" class=\"form-check-input\" name=\"optradio\" (change)=\"radioChange($event)\" value=\"{{formLabelNames.rentedYes}}\">{{formLabelNames.rentedYes}}\r\n                              </label>\r\n                            </div>\r\n                            <div class=\"form-check\">\r\n                              <label class=\"form-check-label\">\r\n                                <input type=\"radio\" class=\"form-check-input\" name=\"optradio\" (change)=\"radioChange($event)\" value=\"{{formLabelNames.rentedNo}}\">{{formLabelNames.rentedNo}}\r\n                              </label>\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"col\" *ngIf=\"tenantDetails\" >\r\n                            <div class=\"form-group\" >\r\n                                  <input type=\"text\" class=\"form-control\" id=\"paymentamount\" placeholder=\"Tenant Name\">\r\n                             </div>\r\n                             <div class=\"form-group\">\r\n                                  <input type=\"text\" class=\"form-control\" id=\"paymentamount\" placeholder=\"Tenant Contact\">\r\n                             </div>\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"form-group\">\r\n                        <input type=\"password\" class=\"form-control\" placeholder=\"{{formLabelNames.memPswd}}\" name=\"password\" [(ngModel)]=\"model.password\" #password=\"ngModel\" [ngClass]=\"{ 'is-invalid': f.submitted && password.invalid }\" required />\r\n                        <div *ngIf=\"f.submitted && password.invalid\" class=\"invalid-feedback\">\r\n                            <div *ngIf=\"password.errors.required\">{{formLabelNames.memPswd}} is required</div>\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"form-group\">\r\n                        <input type=\"password\" class=\"form-control\" placeholder=\"{{formLabelNames.memConfrmPswd}}\" name=\"confirmpassword\" [(ngModel)]=\"model.confirmpassword\" #confirmpassword=\"ngModel\" [ngClass]=\"{ 'is-invalid': f.submitted && confirmpassword.invalid }\" required />\r\n                        <div *ngIf=\"f.submitted && confirmpassword.invalid\" class=\"invalid-feedback\">\r\n                            <div *ngIf=\"confirmpassword.errors.required\">Confirm password is required</div>\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"form-group text-center\">\r\n                        <button class=\"btn btn-primary btn-lg\">Register</button>\r\n                    </div>\r\n                </form>         \r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>"

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
        this.pageDesc = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.";
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
    UserService.prototype.getFlatList = function (buildingname) {
        console.log(this.getFlatURL + "/buildingname/?value=" + buildingname);
        return this.http.get(this.getFlatURL + "/buildingname/?value='" + buildingname + "'")
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

module.exports = "<div class=\"row\">\r\n  <div class=\"col-xs-6 col-sm-6 text-left\">\r\n    <img src=\"assets/logo2.jpg\" class=\"img-fluid\" />\r\n  </div>\r\n  <div class=\"col-xs-6 col-sm-6 text-right\">\r\n    <a routerLink=\"/home\" class='btn btn-outline-warning btn'>\r\n      Home\r\n    </a>\r\n  </div>\r\n<!-- </div>\r\n<nav class=\"navbar navbar-expand-sm bg-dark navbar-dark\">\r\n    \r\n    <a class=\"navbar-brand\" href=\"#\">Logo</a>\r\n  \r\n    <ul class=\"navbar-nav\">\r\n      <li class=\"nav-item\">\r\n        <a class=\"nav-link\" href=\"#\">Link 1</a>\r\n      </li>\r\n      <li class=\"nav-item\">\r\n        <a class=\"nav-link\" href=\"#\">Link 2</a>\r\n      </li>\r\n  \r\n      \r\n      <li class=\"nav-item dropdown\">\r\n        <a class=\"nav-link dropdown-toggle\" href=\"#\" id=\"navbardrop\" data-toggle=\"dropdown\">\r\n          Dropdown link\r\n        </a>\r\n        <div class=\"dropdown-menu\">\r\n          <a class=\"dropdown-item\" href=\"#\">Link 1</a>\r\n          <a class=\"dropdown-item\" href=\"#\">Link 2</a>\r\n          <a class=\"dropdown-item\" href=\"#\">Link 3</a>\r\n        </div>\r\n      </li>\r\n    </ul>\r\n  </nav> -->"

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
    function SocietyHeaderComponent() {
    }
    SocietyHeaderComponent.prototype.ngOnInit = function () {
    };
    SocietyHeaderComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-society-header',
            template: __webpack_require__(/*! ./society-header.component.html */ "./src/app/society-mgmt/society-header/society-header.component.html"),
            styles: [__webpack_require__(/*! ./society-header.component.css */ "./src/app/society-mgmt/society-header/society-header.component.css")]
        }),
        __metadata("design:paramtypes", [])
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

module.exports = "#content{\r\n    overflow:scroll;\r\n}"

/***/ }),

/***/ "./src/app/society-mgmt/society-mgmt.component.html":
/*!**********************************************************!*\
  !*** ./src/app/society-mgmt/society-mgmt.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container mainContainer\">\r\n  <div *ngIf=\"!isLogged\">\r\n    <div routerLink=\"/login\" class=\"btn btn-outline-warning homeicons w-100\">Login</div>\r\n  </div>\r\n  <div *ngIf=\"isLogged\">\r\n      <div class=\"btn btn-outline-warning homeicons w-100\" (click)=\"logout()\">Logout</div>\r\n  </div>\r\n  <div>\r\n    <div routerLink=\"/register\" class=\"btn btn-outline-danger homeicons w-100\"> Register</div>\r\n  </div>\r\n  <app-society-header></app-society-header>\r\n  <div class=\"row\">\r\n    <div class=\"col-sm-12 text-center contentContainer\">\r\n      <div class=\"row\">\r\n        <div class=\"col-xs-12 col-sm-3 text-center contentContainer\">\r\n          <div routerLink=\"/societyManagment/society\" class=\"btn btn-outline-warning homeicons w-100\" (click)=\"ShowModal('society')\">Society</div>\r\n        </div>\r\n        <div class=\"col-xs-12 col-sm-3 text-center contentContainer\">\r\n          <div (click)=\"ShowModal('buildings')\"\r\n            class=\"btn btn-outline-warning homeicons w-100\">Buildings</div>\r\n        </div>\r\n        <div class=\"col-xs-12 col-sm-3 text-center contentContainer\">\r\n          <div (click)=\"ShowModal('flats')\" class=\"btn btn-outline-danger homeicons w-100\">Flats</div>\r\n        </div>\r\n        <div class=\"col-xs-12 col-sm-3 text-center contentContainer\">\r\n          <div (click)=\"ShowModal('owners')\" class=\"btn btn-outline-danger homeicons w-100\">\r\n            owners</div>\r\n        </div>\r\n      </div>\r\n\r\n      <div *ngIf=\"modalVar\">\r\n        <app-modal [modalName]=\"modalVar\"></app-modal>\r\n      </div>\r\n      \r\n      <div id=\"content\" *ngIf=\"showList\">\r\n        <router-outlet></router-outlet>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>"

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
        console.log(type);
        if (type == 'flats' || type == 'owners') {
            this._tokenService.isLogged().subscribe(function (flag) {
                if (flag) {
                    _this.router.navigateByUrl('/societyManagment');
                    _this.modalVar = type;
                }
                else {
                    _this.showList = false;
                    alert("Please login first");
                    _this.router.navigateByUrl('/login');
                }
            });
        }
        else if (type == 'buildings') {
            this.router.navigateByUrl('/societyManagment');
            this.modalVar = type;
        }
        else {
            this.showList = true;
            this.modalVar = type;
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

module.exports = ""

/***/ }),

/***/ "./src/app/society-mgmt/society/society.component.html":
/*!*************************************************************!*\
  !*** ./src/app/society-mgmt/society/society.component.html ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "      <div class=\"row\">\n          <div class=\"col-xs-12 col-sm-12 text-center contentContainer\">\n            <table class=\"table\">\n                <thead>\n                  <tr>\n                    <th>Number</th>\n                    <th>Name</th>\n                    <th>Address</th>\n                    <th>Pincode</th>\n                  </tr>\n                </thead>\n                <tbody>\n                  <tr (click)=\"onSelect(soc.societyid)\" *ngFor=\"let soc of society\" id=\"{{soc.societyid}}\">\n                    <td>{{soc.societyid}}</td>\n                    <td>{{soc.societyname}}</td>\n                    <td>{{soc.address}}</td>\n                    <td>{{soc.pincode}}</td>\n                  </tr>\n                </tbody>\n              </table>\n          </div>\n        </div>\n\n<div class=\"row\" *ngIf=\"societyInfo\">\n  <div class=\"col-xs-12 col-sm-12 text-center contentContainer\">    \n      Society ID:  {{societyInfo && societyInfo[0]?.societyid}} <BR>\n    Society Name: {{societyInfo && societyInfo[0]?.societyname}}<br>\n    Society Address: {{societyInfo && societyInfo[0]?.address}},{{societyInfo && societyInfo[0]?.pincode}}<br>\n  </div>\n</div>\n<div [hidden]=\"!(societyInfo && societyInfo[0]?.societyid)\">\n  <event-calendar-component></event-calendar-component>\n</div>"

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
    SocietyComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-society',
            template: __webpack_require__(/*! ./society.component.html */ "./src/app/society-mgmt/society/society.component.html"),
            styles: [__webpack_require__(/*! ./society.component.css */ "./src/app/society-mgmt/society/society.component.css")]
        }),
        __metadata("design:paramtypes", [_services_user_service__WEBPACK_IMPORTED_MODULE_1__["UserService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], _services_common_service__WEBPACK_IMPORTED_MODULE_3__["CommonService"]])
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

module.exports = __webpack_require__(/*! C:\storage\class\11-1\myapp\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map