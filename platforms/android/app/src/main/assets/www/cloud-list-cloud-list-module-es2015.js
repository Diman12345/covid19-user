(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["cloud-list-cloud-list-module"],{

/***/ "EF2o":
/*!***************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/cloud-list/cloud-list.page.html ***!
  \***************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar>\n    <ion-title>cloudList</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n\n</ion-content>\n");

/***/ }),

/***/ "K2eC":
/*!*************************************************!*\
  !*** ./src/app/cloud-list/cloud-list.module.ts ***!
  \*************************************************/
/*! exports provided: CloudListPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CloudListPageModule", function() { return CloudListPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _cloud_list_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./cloud-list-routing.module */ "zRBi");
/* harmony import */ var _cloud_list_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./cloud-list.page */ "z1Go");







let CloudListPageModule = class CloudListPageModule {
};
CloudListPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _cloud_list_routing_module__WEBPACK_IMPORTED_MODULE_5__["CloudListPageRoutingModule"]
        ],
        declarations: [_cloud_list_page__WEBPACK_IMPORTED_MODULE_6__["CloudListPage"]]
    })
], CloudListPageModule);



/***/ }),

/***/ "ef5Z":
/*!*************************************************!*\
  !*** ./src/app/cloud-list/cloud-list.page.scss ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Nsb3VkLWxpc3QvY2xvdWQtbGlzdC5wYWdlLnNjc3MifQ== */");

/***/ }),

/***/ "z1Go":
/*!***********************************************!*\
  !*** ./src/app/cloud-list/cloud-list.page.ts ***!
  \***********************************************/
/*! exports provided: CloudListPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CloudListPage", function() { return CloudListPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_cloud_list_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./cloud-list.page.html */ "EF2o");
/* harmony import */ var _cloud_list_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./cloud-list.page.scss */ "ef5Z");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");




let CloudListPage = class CloudListPage {
    constructor() { }
    ngOnInit() {
    }
};
CloudListPage.ctorParameters = () => [];
CloudListPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-cloud-list',
        template: _raw_loader_cloud_list_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_cloud_list_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], CloudListPage);



/***/ }),

/***/ "zRBi":
/*!*********************************************************!*\
  !*** ./src/app/cloud-list/cloud-list-routing.module.ts ***!
  \*********************************************************/
/*! exports provided: CloudListPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CloudListPageRoutingModule", function() { return CloudListPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _cloud_list_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./cloud-list.page */ "z1Go");




const routes = [
    {
        path: '',
        component: _cloud_list_page__WEBPACK_IMPORTED_MODULE_3__["CloudListPage"]
    }
];
let CloudListPageRoutingModule = class CloudListPageRoutingModule {
};
CloudListPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], CloudListPageRoutingModule);



/***/ })

}]);
//# sourceMappingURL=cloud-list-cloud-list-module-es2015.js.map