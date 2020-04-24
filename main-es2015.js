(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
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
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _pages_profile_profile_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./pages/profile/profile.component */ "./src/app/pages/profile/profile.component.ts");
/* harmony import */ var _pages_profile_cv_cv_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./pages/profile/cv/cv.component */ "./src/app/pages/profile/cv/cv.component.ts");
/* harmony import */ var _pages_main_main_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./pages/main/main.component */ "./src/app/pages/main/main.component.ts");







const profileRoutes = [
    { path: '', redirectTo: 'cv', pathMatch: 'prefix' },
    { path: 'cv', component: _pages_profile_cv_cv_component__WEBPACK_IMPORTED_MODULE_3__["CvComponent"] }
];
const routes = [
    { path: '', component: _pages_main_main_component__WEBPACK_IMPORTED_MODULE_4__["MainComponent"] },
    { path: 'profile', component: _pages_profile_profile_component__WEBPACK_IMPORTED_MODULE_2__["ProfileComponent"], children: profileRoutes }
];
class AppRoutingModule {
}
AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
        _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
            }]
    }], null, null); })();


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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");



class AppComponent {
    constructor() {
        this.title = 'hh';
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 1, vars: 0, template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "router-outlet");
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterOutlet"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJ9 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-root',
                templateUrl: './app.component.html',
                styleUrls: ['./app.component.scss']
            }]
    }], null, null); })();


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
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _pages_profile_profile_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./pages/profile/profile.module */ "./src/app/pages/profile/profile.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _pages_main_main_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./pages/main/main.component */ "./src/app/pages/main/main.component.ts");
/* harmony import */ var _shared_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./shared.module */ "./src/app/shared.module.ts");







class AppModule {
}
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            _pages_profile_profile_module__WEBPACK_IMPORTED_MODULE_2__["ProfileModule"],
            _shared_module__WEBPACK_IMPORTED_MODULE_5__["SharedModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
        _pages_main_main_component__WEBPACK_IMPORTED_MODULE_4__["MainComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        _pages_profile_profile_module__WEBPACK_IMPORTED_MODULE_2__["ProfileModule"],
        _shared_module__WEBPACK_IMPORTED_MODULE_5__["SharedModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                declarations: [
                    _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
                    _pages_main_main_component__WEBPACK_IMPORTED_MODULE_4__["MainComponent"]
                ],
                imports: [
                    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                    _pages_profile_profile_module__WEBPACK_IMPORTED_MODULE_2__["ProfileModule"],
                    _shared_module__WEBPACK_IMPORTED_MODULE_5__["SharedModule"]
                ],
                providers: [],
                bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/block/header/header.component.ts":
/*!**************************************************!*\
  !*** ./src/app/block/header/header.component.ts ***!
  \**************************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/icon */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/icon.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_material_menu__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/menu */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/menu.js");





class HeaderComponent {
    constructor() {
        this.isMenuOpen = false;
        this.isHaveNewMessages = false;
        this.isReceiveNewMessages = false;
    }
    ngOnInit() {
        setTimeout(() => {
            this.isReceiveNewMessages = true;
            this.isHaveNewMessages = true;
        }, 3000);
    }
    onMenuOpened() {
        this.isMenuOpen = true;
    }
    onMenuClosed() {
        this.isMenuOpen = false;
    }
    onBellMouseEnter() {
        this.isReceiveNewMessages = false;
    }
}
HeaderComponent.ɵfac = function HeaderComponent_Factory(t) { return new (t || HeaderComponent)(); };
HeaderComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: HeaderComponent, selectors: [["app-header"]], decls: 30, vars: 4, consts: [[1, "mdc-layout-grid", "header"], [1, "mdc-layout-grid__inner"], [1, "mdc-layout-grid__cell--span-3", "logo"], ["src", "../../../assets/logo.png"], [1, "mdc-layout-grid__cell--span-6", "search"], ["type", "text", "placeholder", "Enter keyword"], [1, "icon-search"], [1, "mdc-layout-grid__cell--span-1", "notification"], [1, "material-icons-outlined"], [1, "material-icons-outlined", "bell", 3, "ngClass", "mouseenter"], [1, "count", 3, "ngClass"], [1, "mdc-layout-grid__cell--span-2"], [1, "menu", 3, "matMenuTriggerFor", "menuOpened", "menuClosed"], ["src", "../../../assets/user-pic.jpeg", 1, "user-pic"], [1, "user-info"], [1, "user-name"], [1, "user-profession"], [3, "ngClass"], [1, "header-menu-overlay"], ["menu", "matMenu"], ["mat-menu-item", ""]], template: function HeaderComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "img", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "input", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "mat-icon", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "search");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "mat-icon", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "message");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "mat-icon", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("mouseenter", function HeaderComponent_Template_mat_icon_mouseenter_11_listener() { return ctx.onBellMouseEnter(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "notification_important");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "span", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("menuOpened", function HeaderComponent_Template_div_menuOpened_16_listener() { return ctx.onMenuOpened(); })("menuClosed", function HeaderComponent_Template_div_menuClosed_16_listener() { return ctx.onMenuClosed(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "img", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "p", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "Isa Ugurchiev");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "p", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "Frontend Developer");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](23, "i", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "mat-menu", 18, 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "button", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "Logout");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "button", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, "Settings");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", ctx.isReceiveNewMessages ? "ringing" : "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", ctx.isHaveNewMessages ? "bubble" : "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matMenuTriggerFor", _r0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", ctx.isMenuOpen ? "arrow-up" : "arrow-down");
    } }, directives: [_angular_material_icon__WEBPACK_IMPORTED_MODULE_1__["MatIcon"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgClass"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_3__["MatMenuTrigger"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_3__["_MatMenu"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_3__["MatMenuItem"]], styles: [".header .mdc-layout-grid__inner {\n  align-items: center;\n}\n\n.logo {\n  display: flex;\n  justify-content: center;\n  cursor: pointer;\n}\n\n.search {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\n.search input {\n  font-family: Roboto, \"Helvetica Neue\", sans-serif;\n  font-size: 16px;\n  font-weight: 100;\n  font-style: italic;\n  line-height: 40px;\n  background-color: #f4f4f5;\n  border-radius: 20px;\n  border: none;\n  width: 100%;\n  padding: 10px 55px 10px 25px;\n  outline-style: none;\n}\n\n.search .icon-search {\n  position: relative;\n  right: 40px;\n}\n\n.notification {\n  display: flex;\n  justify-content: flex-start;\n  position: relative;\n}\n\n.notification mat-icon {\n  cursor: pointer;\n  padding: 10px;\n}\n\n.notification mat-icon:hover {\n  background-color: #f4f4f5;\n  border-radius: 50%;\n}\n\n.notification mat-icon:first-child {\n  margin-left: -20px;\n}\n\n.notification mat-icon:not(:first-child) {\n  margin-left: 5px;\n}\n\n.notification .count {\n  align-items: center;\n  display: inline-flex;\n  justify-content: center;\n  font-size: 12px;\n  font-weight: 700;\n  color: #fff;\n  height: 20px;\n  width: 20px;\n  position: absolute;\n  right: 10px;\n  top: 1px;\n  background-color: #e04a57;\n  border-radius: 50%;\n  border: 2px solid #fff;\n  transition: transform 0.2s ease-out;\n  transform: scale(0);\n}\n\n.notification .count.bubble {\n  transform: scale(1);\n}\n\n.notification .ringing {\n  -webkit-animation: ring 4s 0.7s ease-in-out infinite;\n          animation: ring 4s 0.7s ease-in-out infinite;\n}\n\n@-webkit-keyframes ring {\n  0% {\n    transform: rotate(0);\n  }\n  1% {\n    transform: rotate(30deg);\n  }\n  3% {\n    transform: rotate(-28deg);\n  }\n  5% {\n    transform: rotate(34deg);\n  }\n  7% {\n    transform: rotate(-32deg);\n  }\n  9% {\n    transform: rotate(30deg);\n  }\n  11% {\n    transform: rotate(-28deg);\n  }\n  13% {\n    transform: rotate(26deg);\n  }\n  15% {\n    transform: rotate(-24deg);\n  }\n  17% {\n    transform: rotate(22deg);\n  }\n  19% {\n    transform: rotate(-20deg);\n  }\n  21% {\n    transform: rotate(18deg);\n  }\n  23% {\n    transform: rotate(-16deg);\n  }\n  25% {\n    transform: rotate(14deg);\n  }\n  27% {\n    transform: rotate(-12deg);\n  }\n  29% {\n    transform: rotate(10deg);\n  }\n  31% {\n    transform: rotate(-8deg);\n  }\n  33% {\n    transform: rotate(6deg);\n  }\n  35% {\n    transform: rotate(-4deg);\n  }\n  37% {\n    transform: rotate(2deg);\n  }\n  39% {\n    transform: rotate(-1deg);\n  }\n  41% {\n    transform: rotate(1deg);\n  }\n  43% {\n    transform: rotate(0);\n  }\n  100% {\n    transform: rotate(0);\n  }\n}\n\n@keyframes ring {\n  0% {\n    transform: rotate(0);\n  }\n  1% {\n    transform: rotate(30deg);\n  }\n  3% {\n    transform: rotate(-28deg);\n  }\n  5% {\n    transform: rotate(34deg);\n  }\n  7% {\n    transform: rotate(-32deg);\n  }\n  9% {\n    transform: rotate(30deg);\n  }\n  11% {\n    transform: rotate(-28deg);\n  }\n  13% {\n    transform: rotate(26deg);\n  }\n  15% {\n    transform: rotate(-24deg);\n  }\n  17% {\n    transform: rotate(22deg);\n  }\n  19% {\n    transform: rotate(-20deg);\n  }\n  21% {\n    transform: rotate(18deg);\n  }\n  23% {\n    transform: rotate(-16deg);\n  }\n  25% {\n    transform: rotate(14deg);\n  }\n  27% {\n    transform: rotate(-12deg);\n  }\n  29% {\n    transform: rotate(10deg);\n  }\n  31% {\n    transform: rotate(-8deg);\n  }\n  33% {\n    transform: rotate(6deg);\n  }\n  35% {\n    transform: rotate(-4deg);\n  }\n  37% {\n    transform: rotate(2deg);\n  }\n  39% {\n    transform: rotate(-1deg);\n  }\n  41% {\n    transform: rotate(1deg);\n  }\n  43% {\n    transform: rotate(0);\n  }\n  100% {\n    transform: rotate(0);\n  }\n}\n\n.menu {\n  display: flex;\n  align-items: center;\n  cursor: pointer;\n}\n\n.menu .user-pic {\n  width: 50px;\n  border-radius: 50%;\n  transition: transform 0.2s ease-out;\n}\n\n.menu .user-pic:hover {\n  transform: scale(1.2);\n}\n\n.menu .user-info {\n  font-size: 14px;\n  font-family: Roboto, \"Helvetica Neue\", sans-serif;\n  letter-spacing: 1px;\n  margin-left: 15px;\n  overflow: hidden;\n}\n\n.menu .user-info .user-name {\n  font-weight: 400;\n  margin: 0;\n}\n\n.menu .user-info .user-profession {\n  margin: 5px 0 0 0;\n  font-weight: 100;\n}\n\n.menu i {\n  border: solid #6f6f7b;\n  border-width: 0 3px 3px 0;\n  display: inline-block;\n  padding: 3px;\n  margin-left: 15px;\n  transition: all 0.5s ease;\n}\n\n.menu .arrow-down {\n  transform: rotate(45deg);\n}\n\n.menu .arrow-up {\n  transform: rotate(-135deg);\n}\n\n.header-menu-overlay .mat-menu-content {\n  background-color: #303030;\n  width: 192px;\n}\n\n.header-menu-overlay .mat-menu-content button {\n  color: #fff;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9pcG9ud2Vib29rMTgvV2Vic3Rvcm1Qcm9qZWN0cy9oaC9zcmMvYXBwL2Jsb2NrL2hlYWRlci9oZWFkZXIuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2Jsb2NrL2hlYWRlci9oZWFkZXIuY29tcG9uZW50LnNjc3MiLCIvVXNlcnMvaXBvbndlYm9vazE4L1dlYnN0b3JtUHJvamVjdHMvaGgvc3JjL2Nzcy12YXJpYWJsZXMuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFHRTtFQUNFLG1CQUFBO0FDRko7O0FETUE7RUFDRSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxlQUFBO0FDSEY7O0FETUE7RUFDRSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtBQ0hGOztBREtFO0VBQ0UsaURFbkJVO0VGb0JWLGVFbkJRO0VGb0JSLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxpQkFBQTtFQUNBLHlCRWJPO0VGY1AsbUJFbEJXO0VGbUJYLFlBQUE7RUFDQSxXQUFBO0VBQ0EsNEJBQUE7RUFDQSxtQkFBQTtBQ0hKOztBRE1FO0VBQ0Usa0JBQUE7RUFDQSxXQUFBO0FDSko7O0FEUUE7RUFDRSxhQUFBO0VBQ0EsMkJBQUE7RUFDQSxrQkFBQTtBQ0xGOztBRE9FO0VBQ0UsZUFBQTtFQUNBLGFBQUE7QUNMSjs7QURPSTtFQUNFLHlCRXJDSztFRnNDTCxrQkFBQTtBQ0xOOztBRFNFO0VBQ0Usa0JBQUE7QUNQSjs7QURVRTtFQUNFLGdCQUFBO0FDUko7O0FEV0U7RUFDRSxtQkFBQTtFQUNBLG9CQUFBO0VBQ0EsdUJBQUE7RUFFQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxXRXZESTtFRndESixZQUFBO0VBQ0EsV0FBQTtFQUNBLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLFFBQUE7RUFDQSx5QkU1REU7RUY2REYsa0JBQUE7RUFDQSxzQkFBQTtFQUVBLG1DQUFBO0VBQ0EsbUJBQUE7QUNYSjs7QURjRTtFQUNFLG1CQUFBO0FDWko7O0FEZUU7RUFDRSxvREFBQTtVQUFBLDRDQUFBO0FDYko7O0FEZ0JFO0VBQ0U7SUFBSyxvQkFBQTtFQ2JQO0VEY0U7SUFBSyx3QkFBQTtFQ1hQO0VEWUU7SUFBSyx5QkFBQTtFQ1RQO0VEVUU7SUFBSyx3QkFBQTtFQ1BQO0VEUUU7SUFBSyx5QkFBQTtFQ0xQO0VETUU7SUFBSyx3QkFBQTtFQ0hQO0VESUU7SUFBTSx5QkFBQTtFQ0RSO0VERUU7SUFBTSx3QkFBQTtFQ0NSO0VEQUU7SUFBTSx5QkFBQTtFQ0dSO0VERkU7SUFBTSx3QkFBQTtFQ0tSO0VESkU7SUFBTSx5QkFBQTtFQ09SO0VETkU7SUFBTSx3QkFBQTtFQ1NSO0VEUkU7SUFBTSx5QkFBQTtFQ1dSO0VEVkU7SUFBTSx3QkFBQTtFQ2FSO0VEWkU7SUFBTSx5QkFBQTtFQ2VSO0VEZEU7SUFBTSx3QkFBQTtFQ2lCUjtFRGhCRTtJQUFNLHdCQUFBO0VDbUJSO0VEbEJFO0lBQU0sdUJBQUE7RUNxQlI7RURwQkU7SUFBTSx3QkFBQTtFQ3VCUjtFRHRCRTtJQUFNLHVCQUFBO0VDeUJSO0VEeEJFO0lBQU0sd0JBQUE7RUMyQlI7RUQxQkU7SUFBTSx1QkFBQTtFQzZCUjtFRDNCRTtJQUFNLG9CQUFBO0VDOEJSO0VEN0JFO0lBQU8sb0JBQUE7RUNnQ1Q7QUFDRjs7QUQxREU7RUFDRTtJQUFLLG9CQUFBO0VDYlA7RURjRTtJQUFLLHdCQUFBO0VDWFA7RURZRTtJQUFLLHlCQUFBO0VDVFA7RURVRTtJQUFLLHdCQUFBO0VDUFA7RURRRTtJQUFLLHlCQUFBO0VDTFA7RURNRTtJQUFLLHdCQUFBO0VDSFA7RURJRTtJQUFNLHlCQUFBO0VDRFI7RURFRTtJQUFNLHdCQUFBO0VDQ1I7RURBRTtJQUFNLHlCQUFBO0VDR1I7RURGRTtJQUFNLHdCQUFBO0VDS1I7RURKRTtJQUFNLHlCQUFBO0VDT1I7RURORTtJQUFNLHdCQUFBO0VDU1I7RURSRTtJQUFNLHlCQUFBO0VDV1I7RURWRTtJQUFNLHdCQUFBO0VDYVI7RURaRTtJQUFNLHlCQUFBO0VDZVI7RURkRTtJQUFNLHdCQUFBO0VDaUJSO0VEaEJFO0lBQU0sd0JBQUE7RUNtQlI7RURsQkU7SUFBTSx1QkFBQTtFQ3FCUjtFRHBCRTtJQUFNLHdCQUFBO0VDdUJSO0VEdEJFO0lBQU0sdUJBQUE7RUN5QlI7RUR4QkU7SUFBTSx3QkFBQTtFQzJCUjtFRDFCRTtJQUFNLHVCQUFBO0VDNkJSO0VEM0JFO0lBQU0sb0JBQUE7RUM4QlI7RUQ3QkU7SUFBTyxvQkFBQTtFQ2dDVDtBQUNGOztBRDdCQTtFQUNFLGFBQUE7RUFDQSxtQkFBQTtFQUNBLGVBQUE7QUNnQ0Y7O0FEOUJFO0VBQ0UsV0FBQTtFQUNBLGtCQUFBO0VBRUEsbUNBQUE7QUMrQko7O0FEN0JJO0VBQ0UscUJBQUE7QUMrQk47O0FEM0JFO0VBQ0UsZUFBQTtFQUNBLGlERXpJVTtFRjBJVixtQkFBQTtFQUNBLGlCQUFBO0VBQ0EsZ0JBQUE7QUM2Qko7O0FEM0JJO0VBQ0UsZ0JBQUE7RUFDQSxTQUFBO0FDNkJOOztBRDFCSTtFQUNFLGlCQUFBO0VBQ0EsZ0JBQUE7QUM0Qk47O0FEeEJFO0VBQ0UscUJBQUE7RUFDQSx5QkFBQTtFQUNBLHFCQUFBO0VBQ0EsWUFBQTtFQUNBLGlCQUFBO0VBRUEseUJBQUE7QUN5Qko7O0FEdEJFO0VBQ0Usd0JBQUE7QUN3Qko7O0FEckJFO0VBQ0UsMEJBQUE7QUN1Qko7O0FEbEJFO0VBQ0UseUJFbEtJO0VGbUtKLFlBQUE7QUNxQko7O0FEbkJJO0VBQ0UsV0VyS0U7QUQwTFIiLCJmaWxlIjoic3JjL2FwcC9ibG9jay9oZWFkZXIvaGVhZGVyLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCBcIi4uLy4uLy4uL2Nzcy12YXJpYWJsZXNcIjtcblxuLmhlYWRlciB7XG4gIC5tZGMtbGF5b3V0LWdyaWRfX2lubmVyIHtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICB9XG59XG5cbi5sb2dvIHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuLnNlYXJjaCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuXG4gIGlucHV0IHtcbiAgICBmb250LWZhbWlseTogJGZvbnQtZmFtaWx5O1xuICAgIGZvbnQtc2l6ZTogJGZvbnQtc2l6ZTtcbiAgICBmb250LXdlaWdodDogMTAwO1xuICAgIGZvbnQtc3R5bGU6IGl0YWxpYztcbiAgICBsaW5lLWhlaWdodDogNDBweDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkYmctY29sb3I7XG4gICAgYm9yZGVyLXJhZGl1czogJGxhcmdlLXJhZGl1cztcbiAgICBib3JkZXI6IG5vbmU7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgcGFkZGluZzogMTBweCA1NXB4IDEwcHggMjVweDtcbiAgICBvdXRsaW5lLXN0eWxlOiBub25lO1xuICB9XG5cbiAgLmljb24tc2VhcmNoIHtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgcmlnaHQ6IDQwcHg7XG4gIH1cbn1cblxuLm5vdGlmaWNhdGlvbiB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuXG4gIG1hdC1pY29uIHtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgcGFkZGluZzogMTBweDtcblxuICAgICY6aG92ZXIge1xuICAgICAgYmFja2dyb3VuZC1jb2xvcjogJGJnLWNvbG9yO1xuICAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xuICAgIH1cbiAgfVxuXG4gIG1hdC1pY29uOmZpcnN0LWNoaWxkIHtcbiAgICBtYXJnaW4tbGVmdDogLTIwcHg7XG4gIH1cblxuICBtYXQtaWNvbjpub3QoOmZpcnN0LWNoaWxkKSB7XG4gICAgbWFyZ2luLWxlZnQ6IDVweDtcbiAgfVxuXG4gIC5jb3VudCB7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcblxuICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICBmb250LXdlaWdodDogNzAwO1xuICAgIGNvbG9yOiAkd2hpdGU7XG4gICAgaGVpZ2h0OiAyMHB4O1xuICAgIHdpZHRoOiAyMHB4O1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICByaWdodDogMTBweDtcbiAgICB0b3A6IDFweDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkcmVkO1xuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgICBib3JkZXI6IDJweCBzb2xpZCAkd2hpdGU7XG5cbiAgICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMC4ycyBlYXNlLW91dDtcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDApO1xuICB9XG5cbiAgLmNvdW50LmJ1YmJsZSB7XG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxKTtcbiAgfVxuXG4gIC5yaW5naW5nIHtcbiAgICBhbmltYXRpb246IHJpbmcgNHMgLjdzIGVhc2UtaW4tb3V0IGluZmluaXRlO1xuICB9XG5cbiAgQGtleWZyYW1lcyByaW5nIHtcbiAgICAwJSB7IHRyYW5zZm9ybTogcm90YXRlKDApOyB9XG4gICAgMSUgeyB0cmFuc2Zvcm06IHJvdGF0ZSgzMGRlZyk7IH1cbiAgICAzJSB7IHRyYW5zZm9ybTogcm90YXRlKC0yOGRlZyk7IH1cbiAgICA1JSB7IHRyYW5zZm9ybTogcm90YXRlKDM0ZGVnKTsgfVxuICAgIDclIHsgdHJhbnNmb3JtOiByb3RhdGUoLTMyZGVnKTsgfVxuICAgIDklIHsgdHJhbnNmb3JtOiByb3RhdGUoMzBkZWcpOyB9XG4gICAgMTElIHsgdHJhbnNmb3JtOiByb3RhdGUoLTI4ZGVnKTsgfVxuICAgIDEzJSB7IHRyYW5zZm9ybTogcm90YXRlKDI2ZGVnKTsgfVxuICAgIDE1JSB7IHRyYW5zZm9ybTogcm90YXRlKC0yNGRlZyk7IH1cbiAgICAxNyUgeyB0cmFuc2Zvcm06IHJvdGF0ZSgyMmRlZyk7IH1cbiAgICAxOSUgeyB0cmFuc2Zvcm06IHJvdGF0ZSgtMjBkZWcpOyB9XG4gICAgMjElIHsgdHJhbnNmb3JtOiByb3RhdGUoMThkZWcpOyB9XG4gICAgMjMlIHsgdHJhbnNmb3JtOiByb3RhdGUoLTE2ZGVnKTsgfVxuICAgIDI1JSB7IHRyYW5zZm9ybTogcm90YXRlKDE0ZGVnKTsgfVxuICAgIDI3JSB7IHRyYW5zZm9ybTogcm90YXRlKC0xMmRlZyk7IH1cbiAgICAyOSUgeyB0cmFuc2Zvcm06IHJvdGF0ZSgxMGRlZyk7IH1cbiAgICAzMSUgeyB0cmFuc2Zvcm06IHJvdGF0ZSgtOGRlZyk7IH1cbiAgICAzMyUgeyB0cmFuc2Zvcm06IHJvdGF0ZSg2ZGVnKTsgfVxuICAgIDM1JSB7IHRyYW5zZm9ybTogcm90YXRlKC00ZGVnKTsgfVxuICAgIDM3JSB7IHRyYW5zZm9ybTogcm90YXRlKDJkZWcpOyB9XG4gICAgMzklIHsgdHJhbnNmb3JtOiByb3RhdGUoLTFkZWcpOyB9XG4gICAgNDElIHsgdHJhbnNmb3JtOiByb3RhdGUoMWRlZyk7IH1cblxuICAgIDQzJSB7IHRyYW5zZm9ybTogcm90YXRlKDApOyB9XG4gICAgMTAwJSB7IHRyYW5zZm9ybTogcm90YXRlKDApOyB9XG4gIH1cbn1cblxuLm1lbnUge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBjdXJzb3I6IHBvaW50ZXI7XG5cbiAgLnVzZXItcGljIHtcbiAgICB3aWR0aDogNTBweDtcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XG5cbiAgICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMC4ycyBlYXNlLW91dDtcblxuICAgICY6aG92ZXIge1xuICAgICAgdHJhbnNmb3JtOiBzY2FsZSgxLjIpO1xuICAgIH1cbiAgfVxuXG4gIC51c2VyLWluZm8ge1xuICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICBmb250LWZhbWlseTogJGZvbnQtZmFtaWx5O1xuICAgIGxldHRlci1zcGFjaW5nOiAxcHg7XG4gICAgbWFyZ2luLWxlZnQ6IDE1cHg7XG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcblxuICAgIC51c2VyLW5hbWUge1xuICAgICAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgICAgIG1hcmdpbjogMDtcbiAgICB9XG5cbiAgICAudXNlci1wcm9mZXNzaW9uIHtcbiAgICAgIG1hcmdpbjogNXB4IDAgMCAwO1xuICAgICAgZm9udC13ZWlnaHQ6IDEwMDtcbiAgICB9XG4gIH1cblxuICBpIHtcbiAgICBib3JkZXI6IHNvbGlkIGRhcmtlbigkYmctY29sb3IsIDUwJSk7XG4gICAgYm9yZGVyLXdpZHRoOiAwIDNweCAzcHggMDtcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgcGFkZGluZzogM3B4O1xuICAgIG1hcmdpbi1sZWZ0OiAxNXB4O1xuXG4gICAgdHJhbnNpdGlvbjogYWxsIDAuNXMgZWFzZTtcbiAgfVxuXG4gIC5hcnJvdy1kb3duIHtcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSg0NWRlZyk7XG4gIH1cblxuICAuYXJyb3ctdXAge1xuICAgIHRyYW5zZm9ybTogcm90YXRlKC0xMzVkZWcpO1xuICB9XG59XG5cbi5oZWFkZXItbWVudS1vdmVybGF5IHtcbiAgLm1hdC1tZW51LWNvbnRlbnQge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICRibGFjaztcbiAgICB3aWR0aDogMTkycHg7XG5cbiAgICBidXR0b24ge1xuICAgICAgY29sb3I6ICR3aGl0ZTtcbiAgICB9XG4gIH1cbn1cblxuXG4iLCIuaGVhZGVyIC5tZGMtbGF5b3V0LWdyaWRfX2lubmVyIHtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cblxuLmxvZ28ge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG4uc2VhcmNoIHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG4uc2VhcmNoIGlucHV0IHtcbiAgZm9udC1mYW1pbHk6IFJvYm90bywgXCJIZWx2ZXRpY2EgTmV1ZVwiLCBzYW5zLXNlcmlmO1xuICBmb250LXNpemU6IDE2cHg7XG4gIGZvbnQtd2VpZ2h0OiAxMDA7XG4gIGZvbnQtc3R5bGU6IGl0YWxpYztcbiAgbGluZS1oZWlnaHQ6IDQwcHg7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmNGY0ZjU7XG4gIGJvcmRlci1yYWRpdXM6IDIwcHg7XG4gIGJvcmRlcjogbm9uZTtcbiAgd2lkdGg6IDEwMCU7XG4gIHBhZGRpbmc6IDEwcHggNTVweCAxMHB4IDI1cHg7XG4gIG91dGxpbmUtc3R5bGU6IG5vbmU7XG59XG4uc2VhcmNoIC5pY29uLXNlYXJjaCB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgcmlnaHQ6IDQwcHg7XG59XG5cbi5ub3RpZmljYXRpb24ge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cbi5ub3RpZmljYXRpb24gbWF0LWljb24ge1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIHBhZGRpbmc6IDEwcHg7XG59XG4ubm90aWZpY2F0aW9uIG1hdC1pY29uOmhvdmVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2Y0ZjRmNTtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xufVxuLm5vdGlmaWNhdGlvbiBtYXQtaWNvbjpmaXJzdC1jaGlsZCB7XG4gIG1hcmdpbi1sZWZ0OiAtMjBweDtcbn1cbi5ub3RpZmljYXRpb24gbWF0LWljb246bm90KDpmaXJzdC1jaGlsZCkge1xuICBtYXJnaW4tbGVmdDogNXB4O1xufVxuLm5vdGlmaWNhdGlvbiAuY291bnQge1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGZvbnQtc2l6ZTogMTJweDtcbiAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgY29sb3I6ICNmZmY7XG4gIGhlaWdodDogMjBweDtcbiAgd2lkdGg6IDIwcHg7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgcmlnaHQ6IDEwcHg7XG4gIHRvcDogMXB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZTA0YTU3O1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIGJvcmRlcjogMnB4IHNvbGlkICNmZmY7XG4gIHRyYW5zaXRpb246IHRyYW5zZm9ybSAwLjJzIGVhc2Utb3V0O1xuICB0cmFuc2Zvcm06IHNjYWxlKDApO1xufVxuLm5vdGlmaWNhdGlvbiAuY291bnQuYnViYmxlIHtcbiAgdHJhbnNmb3JtOiBzY2FsZSgxKTtcbn1cbi5ub3RpZmljYXRpb24gLnJpbmdpbmcge1xuICBhbmltYXRpb246IHJpbmcgNHMgMC43cyBlYXNlLWluLW91dCBpbmZpbml0ZTtcbn1cbkBrZXlmcmFtZXMgcmluZyB7XG4gIDAlIHtcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgwKTtcbiAgfVxuICAxJSB7XG4gICAgdHJhbnNmb3JtOiByb3RhdGUoMzBkZWcpO1xuICB9XG4gIDMlIHtcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgtMjhkZWcpO1xuICB9XG4gIDUlIHtcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgzNGRlZyk7XG4gIH1cbiAgNyUge1xuICAgIHRyYW5zZm9ybTogcm90YXRlKC0zMmRlZyk7XG4gIH1cbiAgOSUge1xuICAgIHRyYW5zZm9ybTogcm90YXRlKDMwZGVnKTtcbiAgfVxuICAxMSUge1xuICAgIHRyYW5zZm9ybTogcm90YXRlKC0yOGRlZyk7XG4gIH1cbiAgMTMlIHtcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgyNmRlZyk7XG4gIH1cbiAgMTUlIHtcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgtMjRkZWcpO1xuICB9XG4gIDE3JSB7XG4gICAgdHJhbnNmb3JtOiByb3RhdGUoMjJkZWcpO1xuICB9XG4gIDE5JSB7XG4gICAgdHJhbnNmb3JtOiByb3RhdGUoLTIwZGVnKTtcbiAgfVxuICAyMSUge1xuICAgIHRyYW5zZm9ybTogcm90YXRlKDE4ZGVnKTtcbiAgfVxuICAyMyUge1xuICAgIHRyYW5zZm9ybTogcm90YXRlKC0xNmRlZyk7XG4gIH1cbiAgMjUlIHtcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgxNGRlZyk7XG4gIH1cbiAgMjclIHtcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgtMTJkZWcpO1xuICB9XG4gIDI5JSB7XG4gICAgdHJhbnNmb3JtOiByb3RhdGUoMTBkZWcpO1xuICB9XG4gIDMxJSB7XG4gICAgdHJhbnNmb3JtOiByb3RhdGUoLThkZWcpO1xuICB9XG4gIDMzJSB7XG4gICAgdHJhbnNmb3JtOiByb3RhdGUoNmRlZyk7XG4gIH1cbiAgMzUlIHtcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgtNGRlZyk7XG4gIH1cbiAgMzclIHtcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgyZGVnKTtcbiAgfVxuICAzOSUge1xuICAgIHRyYW5zZm9ybTogcm90YXRlKC0xZGVnKTtcbiAgfVxuICA0MSUge1xuICAgIHRyYW5zZm9ybTogcm90YXRlKDFkZWcpO1xuICB9XG4gIDQzJSB7XG4gICAgdHJhbnNmb3JtOiByb3RhdGUoMCk7XG4gIH1cbiAgMTAwJSB7XG4gICAgdHJhbnNmb3JtOiByb3RhdGUoMCk7XG4gIH1cbn1cblxuLm1lbnUge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG4ubWVudSAudXNlci1waWMge1xuICB3aWR0aDogNTBweDtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMC4ycyBlYXNlLW91dDtcbn1cbi5tZW51IC51c2VyLXBpYzpob3ZlciB7XG4gIHRyYW5zZm9ybTogc2NhbGUoMS4yKTtcbn1cbi5tZW51IC51c2VyLWluZm8ge1xuICBmb250LXNpemU6IDE0cHg7XG4gIGZvbnQtZmFtaWx5OiBSb2JvdG8sIFwiSGVsdmV0aWNhIE5ldWVcIiwgc2Fucy1zZXJpZjtcbiAgbGV0dGVyLXNwYWNpbmc6IDFweDtcbiAgbWFyZ2luLWxlZnQ6IDE1cHg7XG4gIG92ZXJmbG93OiBoaWRkZW47XG59XG4ubWVudSAudXNlci1pbmZvIC51c2VyLW5hbWUge1xuICBmb250LXdlaWdodDogNDAwO1xuICBtYXJnaW46IDA7XG59XG4ubWVudSAudXNlci1pbmZvIC51c2VyLXByb2Zlc3Npb24ge1xuICBtYXJnaW46IDVweCAwIDAgMDtcbiAgZm9udC13ZWlnaHQ6IDEwMDtcbn1cbi5tZW51IGkge1xuICBib3JkZXI6IHNvbGlkICM2ZjZmN2I7XG4gIGJvcmRlci13aWR0aDogMCAzcHggM3B4IDA7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgcGFkZGluZzogM3B4O1xuICBtYXJnaW4tbGVmdDogMTVweDtcbiAgdHJhbnNpdGlvbjogYWxsIDAuNXMgZWFzZTtcbn1cbi5tZW51IC5hcnJvdy1kb3duIHtcbiAgdHJhbnNmb3JtOiByb3RhdGUoNDVkZWcpO1xufVxuLm1lbnUgLmFycm93LXVwIHtcbiAgdHJhbnNmb3JtOiByb3RhdGUoLTEzNWRlZyk7XG59XG5cbi5oZWFkZXItbWVudS1vdmVybGF5IC5tYXQtbWVudS1jb250ZW50IHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzMwMzAzMDtcbiAgd2lkdGg6IDE5MnB4O1xufVxuLmhlYWRlci1tZW51LW92ZXJsYXkgLm1hdC1tZW51LWNvbnRlbnQgYnV0dG9uIHtcbiAgY29sb3I6ICNmZmY7XG59IiwiLy8gUHJvamVjdCB2YXJpYWJsZXNcbiRmb250LWZhbWlseTogUm9ib3RvLCBcIkhlbHZldGljYSBOZXVlXCIsIHNhbnMtc2VyaWY7XG4kZm9udC1zaXplOiAxNnB4O1xuXG4kY29udGFpbmVyLXdpZHRoOiAxMzIwcHg7XG5cbiRsYXJnZS1wYWRkaW5nOiA2MHB4O1xuXG4kbGFyZ2UtcmFkaXVzOiAyMHB4O1xuJG1lZGl1bS1yYWRpdXM6IDEwcHg7XG4kc21hbGwtcmFkaXVzOiAxMHB4O1xuXG4kYmctY29sb3I6ICNmNGY0ZjU7XG4kYmxhY2s6ICMzMDMwMzA7XG4kd2hpdGU6ICNmZmY7XG4kcmVkOiAjZTA0YTU3O1xuXG5cbiRkYXJrLXNlY29uZGFyeS10ZXh0OiByZ2JhKDAsMCwwLC41NCk7XG4iXX0= */"], encapsulation: 2 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HeaderComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-header',
                templateUrl: './header.component.html',
                styleUrls: ['./header.component.scss'],
                encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/block/navigation/navigation.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/block/navigation/navigation.component.ts ***!
  \**********************************************************/
/*! exports provided: NavigationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavigationComponent", function() { return NavigationComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/toolbar */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/toolbar.js");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/icon */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/icon.js");




class NavigationComponent {
    constructor() {
    }
    ngOnInit() {
    }
}
NavigationComponent.ɵfac = function NavigationComponent_Factory(t) { return new (t || NavigationComponent)(); };
NavigationComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: NavigationComponent, selectors: [["app-navigation"]], decls: 43, vars: 0, consts: [[1, "toolbar"], [1, "toolbar-row"], ["href", "#", 1, "item"], [1, "material-icons-outlined"]], template: function NavigationComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-toolbar", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-toolbar-row", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "a", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "mat-icon", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "home");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Home");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "mat-toolbar-row", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "a", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "mat-icon", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "people_alt");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "My network");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "mat-toolbar-row", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "a", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "mat-icon", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "message");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "Messages");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "mat-toolbar-row", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "a", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "mat-icon", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "insert_invitation");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "Events");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "mat-toolbar-row", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "a", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "mat-icon", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "chrome_reader_mode");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, "News");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "mat-toolbar-row", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "a", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "mat-icon", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, "work_outline");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36, "Jobs");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "mat-toolbar-row", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "a", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "mat-icon", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](40, "business");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](42, "Companies");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_angular_material_toolbar__WEBPACK_IMPORTED_MODULE_1__["MatToolbar"], _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_1__["MatToolbarRow"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_2__["MatIcon"]], styles: [".toolbar[_ngcontent-%COMP%] {\n  background-color: transparent;\n  font-size: 16px;\n  font-weight: 300;\n}\n.toolbar[_ngcontent-%COMP%]   .toolbar-row[_ngcontent-%COMP%]   .item[_ngcontent-%COMP%] {\n  text-decoration: none;\n  color: #303030;\n  width: 100%;\n  padding: 8px 20px;\n}\n.toolbar[_ngcontent-%COMP%]   .toolbar-row[_ngcontent-%COMP%]   .item[_ngcontent-%COMP%]:hover {\n  background-color: #f4f4f5;\n  border-radius: 20px;\n}\n.toolbar[_ngcontent-%COMP%]   .toolbar-row[_ngcontent-%COMP%]   .item[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  position: relative;\n  top: 6px;\n}\n.toolbar[_ngcontent-%COMP%]   .toolbar-row[_ngcontent-%COMP%]   .item[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  padding-left: 8px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9pcG9ud2Vib29rMTgvV2Vic3Rvcm1Qcm9qZWN0cy9oaC9zcmMvYXBwL2Jsb2NrL25hdmlnYXRpb24vbmF2aWdhdGlvbi5jb21wb25lbnQuc2NzcyIsIi9Vc2Vycy9pcG9ud2Vib29rMTgvV2Vic3Rvcm1Qcm9qZWN0cy9oaC9zcmMvY3NzLXZhcmlhYmxlcy5zY3NzIiwic3JjL2FwcC9ibG9jay9uYXZpZ2F0aW9uL25hdmlnYXRpb24uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBRUE7RUFDRSw2QkFBQTtFQUNBLGVDRlU7RURHVixnQkFBQTtBRURGO0FGSUk7RUFDRSxxQkFBQTtFQUNBLGNDR0U7RURGRixXQUFBO0VBQ0EsaUJBQUE7QUVGTjtBRklNO0VBQ0UseUJDSEc7RURJSCxtQkNSTztBQ01mO0FGS007RUFDRSxrQkFBQTtFQUNBLFFBQUE7QUVIUjtBRk1NO0VBQ0UsaUJBQUE7QUVKUiIsImZpbGUiOiJzcmMvYXBwL2Jsb2NrL25hdmlnYXRpb24vbmF2aWdhdGlvbi5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgXCIuLi8uLi8uLi9jc3MtdmFyaWFibGVzXCI7XG5cbi50b29sYmFyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gIGZvbnQtc2l6ZTogJGZvbnQtc2l6ZTtcbiAgZm9udC13ZWlnaHQ6IDMwMDtcblxuICAudG9vbGJhci1yb3cge1xuICAgIC5pdGVtIHtcbiAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgICAgIGNvbG9yOiAkYmxhY2s7XG4gICAgICB3aWR0aDogMTAwJTtcbiAgICAgIHBhZGRpbmc6IDhweCAyMHB4O1xuXG4gICAgICAmOmhvdmVyIHtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogJGJnLWNvbG9yO1xuICAgICAgICBib3JkZXItcmFkaXVzOiAkbGFyZ2UtcmFkaXVzO1xuICAgICAgfVxuXG4gICAgICBtYXQtaWNvbiB7XG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgdG9wOiA2cHg7XG4gICAgICB9XG5cbiAgICAgIHNwYW4ge1xuICAgICAgICBwYWRkaW5nLWxlZnQ6IDhweDtcbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cblxuIiwiLy8gUHJvamVjdCB2YXJpYWJsZXNcbiRmb250LWZhbWlseTogUm9ib3RvLCBcIkhlbHZldGljYSBOZXVlXCIsIHNhbnMtc2VyaWY7XG4kZm9udC1zaXplOiAxNnB4O1xuXG4kY29udGFpbmVyLXdpZHRoOiAxMzIwcHg7XG5cbiRsYXJnZS1wYWRkaW5nOiA2MHB4O1xuXG4kbGFyZ2UtcmFkaXVzOiAyMHB4O1xuJG1lZGl1bS1yYWRpdXM6IDEwcHg7XG4kc21hbGwtcmFkaXVzOiAxMHB4O1xuXG4kYmctY29sb3I6ICNmNGY0ZjU7XG4kYmxhY2s6ICMzMDMwMzA7XG4kd2hpdGU6ICNmZmY7XG4kcmVkOiAjZTA0YTU3O1xuXG5cbiRkYXJrLXNlY29uZGFyeS10ZXh0OiByZ2JhKDAsMCwwLC41NCk7XG4iLCIudG9vbGJhciB7XG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xuICBmb250LXNpemU6IDE2cHg7XG4gIGZvbnQtd2VpZ2h0OiAzMDA7XG59XG4udG9vbGJhciAudG9vbGJhci1yb3cgLml0ZW0ge1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gIGNvbG9yOiAjMzAzMDMwO1xuICB3aWR0aDogMTAwJTtcbiAgcGFkZGluZzogOHB4IDIwcHg7XG59XG4udG9vbGJhciAudG9vbGJhci1yb3cgLml0ZW06aG92ZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjRmNGY1O1xuICBib3JkZXItcmFkaXVzOiAyMHB4O1xufVxuLnRvb2xiYXIgLnRvb2xiYXItcm93IC5pdGVtIG1hdC1pY29uIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB0b3A6IDZweDtcbn1cbi50b29sYmFyIC50b29sYmFyLXJvdyAuaXRlbSBzcGFuIHtcbiAgcGFkZGluZy1sZWZ0OiA4cHg7XG59Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NavigationComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-navigation',
                templateUrl: './navigation.component.html',
                styleUrls: ['./navigation.component.scss']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/pages/main/main.component.ts":
/*!**********************************************!*\
  !*** ./src/app/pages/main/main.component.ts ***!
  \**********************************************/
/*! exports provided: MainComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MainComponent", function() { return MainComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


class MainComponent {
    constructor() {
    }
    ngOnInit() {
    }
}
MainComponent.ɵfac = function MainComponent_Factory(t) { return new (t || MainComponent)(); };
MainComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: MainComponent, selectors: [["app-main"]], decls: 2, vars: 0, template: function MainComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "This is main APP page");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL21haW4vbWFpbi5jb21wb25lbnQuc2NzcyJ9 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MainComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-main',
                templateUrl: './main.component.html',
                styleUrls: ['./main.component.scss']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/pages/profile/cv/cv.component.ts":
/*!**************************************************!*\
  !*** ./src/app/pages/profile/cv/cv.component.ts ***!
  \**************************************************/
/*! exports provided: CvComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CvComponent", function() { return CvComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/card */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/card.js");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/icon */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/icon.js");




class CvComponent {
    constructor() {
    }
    ngOnInit() {
    }
}
CvComponent.ɵfac = function CvComponent_Factory(t) { return new (t || CvComponent)(); };
CvComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: CvComponent, selectors: [["app-cv"]], decls: 109, vars: 0, consts: [[1, "mdc-layout-grid"], [1, "mdc-layout-grid__inner"], [1, "mdc-layout-grid__cell--span-4"], [1, "mat-card"], [1, "mat-card-header"], ["mat-card-avatar", "", 1, "mat-card-avatar", 2, "background-image", "url('../../../../assets/github.png')"], [1, "mat-card-title"], [1, "mat-card-subtitle"], [1, "actions"], [1, "material-icons-outlined"], [1, "mat-card-content"], ["mat-card-avatar", "", 1, "mat-card-avatar", 2, "background-image", "url('../../../../assets/microsoft.png')"], ["mat-card-avatar", "", 1, "mat-card-avatar", 2, "background-image", "url('../../../../assets/ibm.png')"], ["mat-card-avatar", "", 1, "mat-card-avatar", 2, "background-image", "url('../../../../assets/google.png')"], ["mat-card-avatar", "", 1, "mat-card-avatar", 2, "background-image", "url('../../../../assets/apple.png')"]], template: function CvComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "mat-card", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "mat-card-header", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "mat-card-title", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "GitHub");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "mat-card-subtitle", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Python Developer");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "mat-icon", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "turned_in_not");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "mat-icon", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "email");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "mat-card-content", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "Looking for senior Python Developer (Django) in strong IT company");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "mat-card-footer");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "Berlin");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "1 day ago");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "mat-card", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "mat-card-header", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](26, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "mat-card-title", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "Microsoft");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "mat-card-subtitle", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, "UX Designer");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "mat-icon", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, "turned_in_not");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "mat-icon", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35, "email");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "mat-card-content", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38, "Looking for senior Python Developer (Django) in strong IT company");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "mat-card-footer");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](41, "London");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](43, "1 day ago");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "mat-card", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "mat-card-header", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](47, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "mat-card-title", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](49, "IBM");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "mat-card-subtitle", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](51, "Data Engineer");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "mat-icon", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](54, "turned_in_not");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "mat-icon", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](56, "email");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "mat-card-content", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](59, "Looking for senior Python Developer (Django) in strong IT company");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "mat-card-footer");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](62, "Paris");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](63, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](64, "2 days ago");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](65, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](66, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](67, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](68, "mat-card", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](69, "mat-card-header", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](70, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](71, "mat-card-title", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](72, "Google");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](73, "mat-card-subtitle", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](74, "Python Developer");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](75, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](76, "mat-icon", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](77, "turned_in_not");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](78, "mat-icon", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](79, "email");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](80, "mat-card-content", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](81, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](82, "Looking for senior Python Developer (Django) in strong IT company");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](83, "mat-card-footer");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](84, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](85, "San Francisco");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](86, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](87, "5 days ago");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](88, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](89, "mat-card", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](90, "mat-card-header", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](91, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](92, "mat-card-title", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](93, "Apple");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](94, "mat-card-subtitle", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](95, "UX Designer");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](96, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](97, "mat-icon", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](98, "turned_in_not");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](99, "mat-icon", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](100, "email");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](101, "mat-card-content", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](102, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](103, "Looking for senior Python Developer (Django) in strong IT company");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](104, "mat-card-footer");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](105, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](106, "Los Angeles");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](107, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](108, "week ago");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_angular_material_card__WEBPACK_IMPORTED_MODULE_1__["MatCard"], _angular_material_card__WEBPACK_IMPORTED_MODULE_1__["MatCardHeader"], _angular_material_card__WEBPACK_IMPORTED_MODULE_1__["MatCardAvatar"], _angular_material_card__WEBPACK_IMPORTED_MODULE_1__["MatCardTitle"], _angular_material_card__WEBPACK_IMPORTED_MODULE_1__["MatCardSubtitle"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_2__["MatIcon"], _angular_material_card__WEBPACK_IMPORTED_MODULE_1__["MatCardContent"], _angular_material_card__WEBPACK_IMPORTED_MODULE_1__["MatCardFooter"]], styles: [".mat-card[_ngcontent-%COMP%] {\n  border: 1px solid #f4f4f5;\n  display: block;\n  padding: 20px;\n  border-radius: 10px;\n  cursor: pointer;\n}\n.mat-card[_ngcontent-%COMP%]:hover {\n  background-color: #f4f4f5;\n}\n.mat-card[_ngcontent-%COMP%]   .mat-card-header[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: row;\n  justify-content: space-between;\n}\n.mat-card[_ngcontent-%COMP%]   .mat-card-header[_ngcontent-%COMP%]   .mat-card-avatar[_ngcontent-%COMP%] {\n  height: 40px;\n  width: 40px;\n  border-radius: 50%;\n  flex-shrink: 0;\n  -o-object-fit: cover;\n     object-fit: cover;\n  background-size: cover;\n  margin-top: 2px;\n}\n.mat-card[_ngcontent-%COMP%]   .mat-card-header[_ngcontent-%COMP%]   .mat-card-header-text[_ngcontent-%COMP%] {\n  margin: 0 0 0 -10px;\n}\n.mat-card[_ngcontent-%COMP%]   .mat-card-header[_ngcontent-%COMP%]   .mat-card-header-text[_ngcontent-%COMP%]   .mat-card-title[_ngcontent-%COMP%] {\n  margin-bottom: 12px;\n  font-size: 20px;\n  font-weight: 500;\n  display: block;\n}\n.mat-card[_ngcontent-%COMP%]   .mat-card-header[_ngcontent-%COMP%]   .mat-card-header-text[_ngcontent-%COMP%]   .mat-card-subtitle[_ngcontent-%COMP%] {\n  margin-top: -8px;\n  display: block;\n  margin-bottom: 10px;\n  color: rgba(0, 0, 0, 0.54);\n  font-size: 14px;\n  font-weight: 400;\n}\n.mat-card[_ngcontent-%COMP%]   .mat-card-header[_ngcontent-%COMP%]   .actions[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%]:first-child {\n  margin-right: 5px;\n}\n.mat-card[_ngcontent-%COMP%]   .mat-card-content[_ngcontent-%COMP%] {\n  display: block;\n  margin-top: 16px;\n  font-size: 14px;\n  line-height: 1.4em;\n}\n.mat-card[_ngcontent-%COMP%]   .mat-card-footer[_ngcontent-%COMP%] {\n  padding: 0 20px;\n  display: flex;\n  justify-content: space-between;\n  color: rgba(0, 0, 0, 0.54);\n  font-size: 14px;\n  font-weight: 400;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9pcG9ud2Vib29rMTgvV2Vic3Rvcm1Qcm9qZWN0cy9oaC9zcmMvYXBwL3BhZ2VzL3Byb2ZpbGUvY3YvY3YuY29tcG9uZW50LnNjc3MiLCIvVXNlcnMvaXBvbndlYm9vazE4L1dlYnN0b3JtUHJvamVjdHMvaGgvc3JjL2Nzcy12YXJpYWJsZXMuc2NzcyIsInNyYy9hcHAvcGFnZXMvcHJvZmlsZS9jdi9jdi5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFQTtFQUNFLHlCQUFBO0VBQ0EsY0FBQTtFQUNBLGFBQUE7RUFDQSxtQkNJYTtFREhiLGVBQUE7QUVERjtBRkdFO0VBQ0UseUJDRU87QUNIWDtBRklFO0VBQ0UsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsOEJBQUE7QUVGSjtBRklJO0VBQ0UsWUFBQTtFQUNBLFdBQUE7RUFDQSxrQkFBQTtFQUNBLGNBQUE7RUFDQSxvQkFBQTtLQUFBLGlCQUFBO0VBQ0Esc0JBQUE7RUFDQSxlQUFBO0FFRk47QUZLSTtFQUNFLG1CQUFBO0FFSE47QUZLTTtFQUNFLG1CQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsY0FBQTtBRUhSO0FGTU07RUFDRSxnQkFBQTtFQUNBLGNBQUE7RUFDQSxtQkFBQTtFQUNBLDBCQ3hCYztFRHlCZCxlQUFBO0VBQ0EsZ0JBQUE7QUVKUjtBRlNNO0VBQ0UsaUJBQUE7QUVQUjtBRllFO0VBQ0UsY0FBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLGtCQUFBO0FFVko7QUZhRTtFQUNFLGVBQUE7RUFDQSxhQUFBO0VBQ0EsOEJBQUE7RUFDQSwwQkNoRGtCO0VEaURsQixlQUFBO0VBQ0EsZ0JBQUE7QUVYSiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3Byb2ZpbGUvY3YvY3YuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0IFwiLi4vLi4vLi4vLi4vY3NzLXZhcmlhYmxlc1wiO1xuXG4ubWF0LWNhcmQge1xuICBib3JkZXI6IDFweCBzb2xpZCAkYmctY29sb3I7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBwYWRkaW5nOiAyMHB4O1xuICBib3JkZXItcmFkaXVzOiAkc21hbGwtcmFkaXVzO1xuICBjdXJzb3I6IHBvaW50ZXI7XG5cbiAgJjpob3ZlciB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogJGJnLWNvbG9yO1xuICB9XG5cbiAgLm1hdC1jYXJkLWhlYWRlciB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcblxuICAgIC5tYXQtY2FyZC1hdmF0YXIge1xuICAgICAgaGVpZ2h0OiA0MHB4O1xuICAgICAgd2lkdGg6IDQwcHg7XG4gICAgICBib3JkZXItcmFkaXVzOiA1MCU7XG4gICAgICBmbGV4LXNocmluazogMDtcbiAgICAgIG9iamVjdC1maXQ6IGNvdmVyO1xuICAgICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgICAgIG1hcmdpbi10b3A6IDJweDtcbiAgICB9XG5cbiAgICAubWF0LWNhcmQtaGVhZGVyLXRleHQge1xuICAgICAgbWFyZ2luOiAwIDAgMCAtMTBweDtcblxuICAgICAgLm1hdC1jYXJkLXRpdGxlIHtcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMTJweDtcbiAgICAgICAgZm9udC1zaXplOiAyMHB4O1xuICAgICAgICBmb250LXdlaWdodDogNTAwO1xuICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgIH1cblxuICAgICAgLm1hdC1jYXJkLXN1YnRpdGxlIHtcbiAgICAgICAgbWFyZ2luLXRvcDogLThweDtcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XG4gICAgICAgIGNvbG9yOiAkZGFyay1zZWNvbmRhcnktdGV4dDtcbiAgICAgICAgZm9udC1zaXplOiAxNHB4O1xuICAgICAgICBmb250LXdlaWdodDogNDAwO1xuICAgICAgfVxuICAgIH1cblxuICAgIC5hY3Rpb25zIHtcbiAgICAgIG1hdC1pY29uOmZpcnN0LWNoaWxkIHtcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiA1cHg7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgLm1hdC1jYXJkLWNvbnRlbnQge1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIG1hcmdpbi10b3A6IDE2cHg7XG4gICAgZm9udC1zaXplOiAxNHB4O1xuICAgIGxpbmUtaGVpZ2h0OiAxLjRlbTtcbiAgfVxuXG4gIC5tYXQtY2FyZC1mb290ZXIge1xuICAgIHBhZGRpbmc6IDAgMjBweDtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICBjb2xvcjogJGRhcmstc2Vjb25kYXJ5LXRleHQ7XG4gICAgZm9udC1zaXplOiAxNHB4O1xuICAgIGZvbnQtd2VpZ2h0OiA0MDA7XG4gIH1cbn1cbiIsIi8vIFByb2plY3QgdmFyaWFibGVzXG4kZm9udC1mYW1pbHk6IFJvYm90bywgXCJIZWx2ZXRpY2EgTmV1ZVwiLCBzYW5zLXNlcmlmO1xuJGZvbnQtc2l6ZTogMTZweDtcblxuJGNvbnRhaW5lci13aWR0aDogMTMyMHB4O1xuXG4kbGFyZ2UtcGFkZGluZzogNjBweDtcblxuJGxhcmdlLXJhZGl1czogMjBweDtcbiRtZWRpdW0tcmFkaXVzOiAxMHB4O1xuJHNtYWxsLXJhZGl1czogMTBweDtcblxuJGJnLWNvbG9yOiAjZjRmNGY1O1xuJGJsYWNrOiAjMzAzMDMwO1xuJHdoaXRlOiAjZmZmO1xuJHJlZDogI2UwNGE1NztcblxuXG4kZGFyay1zZWNvbmRhcnktdGV4dDogcmdiYSgwLDAsMCwuNTQpO1xuIiwiLm1hdC1jYXJkIHtcbiAgYm9yZGVyOiAxcHggc29saWQgI2Y0ZjRmNTtcbiAgZGlzcGxheTogYmxvY2s7XG4gIHBhZGRpbmc6IDIwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cbi5tYXQtY2FyZDpob3ZlciB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmNGY0ZjU7XG59XG4ubWF0LWNhcmQgLm1hdC1jYXJkLWhlYWRlciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2Vlbjtcbn1cbi5tYXQtY2FyZCAubWF0LWNhcmQtaGVhZGVyIC5tYXQtY2FyZC1hdmF0YXIge1xuICBoZWlnaHQ6IDQwcHg7XG4gIHdpZHRoOiA0MHB4O1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIGZsZXgtc2hyaW5rOiAwO1xuICBvYmplY3QtZml0OiBjb3ZlcjtcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgbWFyZ2luLXRvcDogMnB4O1xufVxuLm1hdC1jYXJkIC5tYXQtY2FyZC1oZWFkZXIgLm1hdC1jYXJkLWhlYWRlci10ZXh0IHtcbiAgbWFyZ2luOiAwIDAgMCAtMTBweDtcbn1cbi5tYXQtY2FyZCAubWF0LWNhcmQtaGVhZGVyIC5tYXQtY2FyZC1oZWFkZXItdGV4dCAubWF0LWNhcmQtdGl0bGUge1xuICBtYXJnaW4tYm90dG9tOiAxMnB4O1xuICBmb250LXNpemU6IDIwcHg7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIGRpc3BsYXk6IGJsb2NrO1xufVxuLm1hdC1jYXJkIC5tYXQtY2FyZC1oZWFkZXIgLm1hdC1jYXJkLWhlYWRlci10ZXh0IC5tYXQtY2FyZC1zdWJ0aXRsZSB7XG4gIG1hcmdpbi10b3A6IC04cHg7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xuICBjb2xvcjogcmdiYSgwLCAwLCAwLCAwLjU0KTtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBmb250LXdlaWdodDogNDAwO1xufVxuLm1hdC1jYXJkIC5tYXQtY2FyZC1oZWFkZXIgLmFjdGlvbnMgbWF0LWljb246Zmlyc3QtY2hpbGQge1xuICBtYXJnaW4tcmlnaHQ6IDVweDtcbn1cbi5tYXQtY2FyZCAubWF0LWNhcmQtY29udGVudCB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBtYXJnaW4tdG9wOiAxNnB4O1xuICBmb250LXNpemU6IDE0cHg7XG4gIGxpbmUtaGVpZ2h0OiAxLjRlbTtcbn1cbi5tYXQtY2FyZCAubWF0LWNhcmQtZm9vdGVyIHtcbiAgcGFkZGluZzogMCAyMHB4O1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIGNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNTQpO1xuICBmb250LXNpemU6IDE0cHg7XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG59Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CvComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-cv',
                templateUrl: './cv.component.html',
                styleUrls: ['./cv.component.scss']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/pages/profile/profile.component.ts":
/*!****************************************************!*\
  !*** ./src/app/pages/profile/profile.component.ts ***!
  \****************************************************/
/*! exports provided: ProfileComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfileComponent", function() { return ProfileComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _block_header_header_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../block/header/header.component */ "./src/app/block/header/header.component.ts");
/* harmony import */ var _block_navigation_navigation_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../block/navigation/navigation.component */ "./src/app/block/navigation/navigation.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");





class ProfileComponent {
    constructor() {
    }
    ngOnInit() {
    }
}
ProfileComponent.ɵfac = function ProfileComponent_Factory(t) { return new (t || ProfileComponent)(); };
ProfileComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ProfileComponent, selectors: [["app-profile"]], decls: 10, vars: 0, consts: [[1, "container"], [1, "mdc-layout-grid"], [1, "mdc-layout-grid__inner"], [1, "mdc-layout-grid__cell--span-3"], [1, "mdc-layout-grid__cell--span-9"]], template: function ProfileComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "app-navigation");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "router-outlet");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_block_header_header_component__WEBPACK_IMPORTED_MODULE_1__["HeaderComponent"], _block_navigation_navigation_component__WEBPACK_IMPORTED_MODULE_2__["NavigationComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterOutlet"]], styles: [".container[_ngcontent-%COMP%] {\n  width: 1320px;\n  padding: 0 60px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9pcG9ud2Vib29rMTgvV2Vic3Rvcm1Qcm9qZWN0cy9oaC9zcmMvYXBwL3BhZ2VzL3Byb2ZpbGUvcHJvZmlsZS5jb21wb25lbnQuc2NzcyIsIi9Vc2Vycy9pcG9ud2Vib29rMTgvV2Vic3Rvcm1Qcm9qZWN0cy9oaC9zcmMvY3NzLXZhcmlhYmxlcy5zY3NzIiwic3JjL2FwcC9wYWdlcy9wcm9maWxlL3Byb2ZpbGUuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBRUE7RUFDRSxhQ0NnQjtFREFoQixlQUFBO0FFREYiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9wcm9maWxlL3Byb2ZpbGUuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0IFwiLi4vLi4vLi4vY3NzLXZhcmlhYmxlc1wiO1xuXG4uY29udGFpbmVyIHtcbiAgd2lkdGg6ICRjb250YWluZXItd2lkdGg7XG4gIHBhZGRpbmc6IDAgJGxhcmdlLXBhZGRpbmc7XG59XG4iLCIvLyBQcm9qZWN0IHZhcmlhYmxlc1xuJGZvbnQtZmFtaWx5OiBSb2JvdG8sIFwiSGVsdmV0aWNhIE5ldWVcIiwgc2Fucy1zZXJpZjtcbiRmb250LXNpemU6IDE2cHg7XG5cbiRjb250YWluZXItd2lkdGg6IDEzMjBweDtcblxuJGxhcmdlLXBhZGRpbmc6IDYwcHg7XG5cbiRsYXJnZS1yYWRpdXM6IDIwcHg7XG4kbWVkaXVtLXJhZGl1czogMTBweDtcbiRzbWFsbC1yYWRpdXM6IDEwcHg7XG5cbiRiZy1jb2xvcjogI2Y0ZjRmNTtcbiRibGFjazogIzMwMzAzMDtcbiR3aGl0ZTogI2ZmZjtcbiRyZWQ6ICNlMDRhNTc7XG5cblxuJGRhcmstc2Vjb25kYXJ5LXRleHQ6IHJnYmEoMCwwLDAsLjU0KTtcbiIsIi5jb250YWluZXIge1xuICB3aWR0aDogMTMyMHB4O1xuICBwYWRkaW5nOiAwIDYwcHg7XG59Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ProfileComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-profile',
                templateUrl: './profile.component.html',
                styleUrls: ['./profile.component.scss']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/pages/profile/profile.module.ts":
/*!*************************************************!*\
  !*** ./src/app/pages/profile/profile.module.ts ***!
  \*************************************************/
/*! exports provided: ProfileModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfileModule", function() { return ProfileModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _profile_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./profile.component */ "./src/app/pages/profile/profile.component.ts");
/* harmony import */ var _cv_cv_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./cv/cv.component */ "./src/app/pages/profile/cv/cv.component.ts");
/* harmony import */ var _block_header_header_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../block/header/header.component */ "./src/app/block/header/header.component.ts");
/* harmony import */ var _block_navigation_navigation_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../block/navigation/navigation.component */ "./src/app/block/navigation/navigation.component.ts");
/* harmony import */ var _shared_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../shared.module */ "./src/app/shared.module.ts");







class ProfileModule {
}
ProfileModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: ProfileModule });
ProfileModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function ProfileModule_Factory(t) { return new (t || ProfileModule)(); }, imports: [[
            _shared_module__WEBPACK_IMPORTED_MODULE_5__["SharedModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](ProfileModule, { declarations: [_profile_component__WEBPACK_IMPORTED_MODULE_1__["ProfileComponent"],
        _cv_cv_component__WEBPACK_IMPORTED_MODULE_2__["CvComponent"],
        _block_header_header_component__WEBPACK_IMPORTED_MODULE_3__["HeaderComponent"],
        _block_navigation_navigation_component__WEBPACK_IMPORTED_MODULE_4__["NavigationComponent"]], imports: [_shared_module__WEBPACK_IMPORTED_MODULE_5__["SharedModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ProfileModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [
                    _profile_component__WEBPACK_IMPORTED_MODULE_1__["ProfileComponent"],
                    _cv_cv_component__WEBPACK_IMPORTED_MODULE_2__["CvComponent"],
                    _block_header_header_component__WEBPACK_IMPORTED_MODULE_3__["HeaderComponent"],
                    _block_navigation_navigation_component__WEBPACK_IMPORTED_MODULE_4__["NavigationComponent"]
                ],
                imports: [
                    _shared_module__WEBPACK_IMPORTED_MODULE_5__["SharedModule"]
                ]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/shared.module.ts":
/*!**********************************!*\
  !*** ./src/app/shared.module.ts ***!
  \**********************************/
/*! exports provided: SharedModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SharedModule", function() { return SharedModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/animations.js");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/icon */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/icon.js");
/* harmony import */ var _angular_material_menu__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/menu */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/menu.js");
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/toolbar */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/toolbar.js");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/card */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/card.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");








class SharedModule {
}
SharedModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: SharedModule });
SharedModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function SharedModule_Factory(t) { return new (t || SharedModule)(); }, imports: [_app_routing_module__WEBPACK_IMPORTED_MODULE_6__["AppRoutingModule"],
        _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_1__["BrowserAnimationsModule"],
        _angular_material_icon__WEBPACK_IMPORTED_MODULE_2__["MatIconModule"],
        _angular_material_menu__WEBPACK_IMPORTED_MODULE_3__["MatMenuModule"],
        _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_4__["MatToolbarModule"],
        _angular_material_card__WEBPACK_IMPORTED_MODULE_5__["MatCardModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](SharedModule, { exports: [_app_routing_module__WEBPACK_IMPORTED_MODULE_6__["AppRoutingModule"],
        _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_1__["BrowserAnimationsModule"],
        _angular_material_icon__WEBPACK_IMPORTED_MODULE_2__["MatIconModule"],
        _angular_material_menu__WEBPACK_IMPORTED_MODULE_3__["MatMenuModule"],
        _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_4__["MatToolbarModule"],
        _angular_material_card__WEBPACK_IMPORTED_MODULE_5__["MatCardModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SharedModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                exports: [
                    _app_routing_module__WEBPACK_IMPORTED_MODULE_6__["AppRoutingModule"],
                    _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_1__["BrowserAnimationsModule"],
                    _angular_material_icon__WEBPACK_IMPORTED_MODULE_2__["MatIconModule"],
                    _angular_material_menu__WEBPACK_IMPORTED_MODULE_3__["MatMenuModule"],
                    _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_4__["MatToolbarModule"],
                    _angular_material_card__WEBPACK_IMPORTED_MODULE_5__["MatCardModule"]
                ]
            }]
    }], null, null); })();


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
const environment = {
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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/iponwebook18/WebstormProjects/hh/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map