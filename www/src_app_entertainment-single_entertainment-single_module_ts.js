(self["webpackChunkNews"] = self["webpackChunkNews"] || []).push([["src_app_entertainment-single_entertainment-single_module_ts"],{

/***/ 3187:
/*!*****************************************************************************!*\
  !*** ./src/app/entertainment-single/entertainment-single-routing.module.ts ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "EntertainmentSinglePageRoutingModule": () => (/* binding */ EntertainmentSinglePageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 9895);
/* harmony import */ var _entertainment_single_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./entertainment-single.page */ 11);




const routes = [
    {
        path: '',
        component: _entertainment_single_page__WEBPACK_IMPORTED_MODULE_0__.EntertainmentSinglePage
    }
];
let EntertainmentSinglePageRoutingModule = class EntertainmentSinglePageRoutingModule {
};
EntertainmentSinglePageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], EntertainmentSinglePageRoutingModule);



/***/ }),

/***/ 8877:
/*!*********************************************************************!*\
  !*** ./src/app/entertainment-single/entertainment-single.module.ts ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "EntertainmentSinglePageModule": () => (/* binding */ EntertainmentSinglePageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 8583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 476);
/* harmony import */ var _entertainment_single_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./entertainment-single-routing.module */ 3187);
/* harmony import */ var _entertainment_single_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./entertainment-single.page */ 11);







let EntertainmentSinglePageModule = class EntertainmentSinglePageModule {
};
EntertainmentSinglePageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _entertainment_single_routing_module__WEBPACK_IMPORTED_MODULE_0__.EntertainmentSinglePageRoutingModule
        ],
        declarations: [_entertainment_single_page__WEBPACK_IMPORTED_MODULE_1__.EntertainmentSinglePage]
    })
], EntertainmentSinglePageModule);



/***/ }),

/***/ 11:
/*!*******************************************************************!*\
  !*** ./src/app/entertainment-single/entertainment-single.page.ts ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "EntertainmentSinglePage": () => (/* binding */ EntertainmentSinglePage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _raw_loader_entertainment_single_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./entertainment-single.page.html */ 3768);
/* harmony import */ var _entertainment_single_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./entertainment-single.page.scss */ 1742);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _news_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../news.service */ 5752);





let EntertainmentSinglePage = class EntertainmentSinglePage {
    constructor(newsService) {
        this.newsService = newsService;
    }
    ngOnInit() {
        this.article = this.newsService.currentArticle;
    }
};
EntertainmentSinglePage.ctorParameters = () => [
    { type: _news_service__WEBPACK_IMPORTED_MODULE_2__.NewsService }
];
EntertainmentSinglePage = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.Component)({
        selector: 'app-entertainment-single',
        template: _raw_loader_entertainment_single_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_entertainment_single_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], EntertainmentSinglePage);



/***/ }),

/***/ 1742:
/*!*********************************************************************!*\
  !*** ./src/app/entertainment-single/entertainment-single.page.scss ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJlbnRlcnRhaW5tZW50LXNpbmdsZS5wYWdlLnNjc3MifQ== */");

/***/ }),

/***/ 3768:
/*!***********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/entertainment-single/entertainment-single.page.html ***!
  \***********************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-back-button></ion-back-button>\n    </ion-buttons>\n    <ion-title>{{article.title}}</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ion-card>\n    <ion-img [src]=\"article.urlToImage\"></ion-img>\n\n    <ion-card-content>\n      <ion-card-title>{{article.title}}</ion-card-title>\n\n      <p>{{article.description}}</p>      \n      <article>{{article.content}}</article>\n      <ion-button ion-button fill=\"outline\" href=\"{{article.url}}\" large>Read full story</ion-button>\n</ion-card-content>\n</ion-card>\n</ion-content>\n");

/***/ })

}]);
//# sourceMappingURL=src_app_entertainment-single_entertainment-single_module_ts.js.map