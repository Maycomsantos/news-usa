(self["webpackChunkNews"] = self["webpackChunkNews"] || []).push([["src_app_business_business_module_ts"],{

/***/ 5366:
/*!*****************************************************!*\
  !*** ./src/app/business/business-routing.module.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BusinessPageRoutingModule": () => (/* binding */ BusinessPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 9895);
/* harmony import */ var _business_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./business.page */ 4968);




const routes = [
    {
        path: '',
        component: _business_page__WEBPACK_IMPORTED_MODULE_0__.BusinessPage
    }
];
let BusinessPageRoutingModule = class BusinessPageRoutingModule {
};
BusinessPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], BusinessPageRoutingModule);



/***/ }),

/***/ 8998:
/*!*********************************************!*\
  !*** ./src/app/business/business.module.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BusinessPageModule": () => (/* binding */ BusinessPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 8583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 476);
/* harmony import */ var _business_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./business-routing.module */ 5366);
/* harmony import */ var _business_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./business.page */ 4968);







let BusinessPageModule = class BusinessPageModule {
};
BusinessPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _business_routing_module__WEBPACK_IMPORTED_MODULE_0__.BusinessPageRoutingModule
        ],
        declarations: [_business_page__WEBPACK_IMPORTED_MODULE_1__.BusinessPage]
    })
], BusinessPageModule);



/***/ }),

/***/ 4968:
/*!*******************************************!*\
  !*** ./src/app/business/business.page.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BusinessPage": () => (/* binding */ BusinessPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _raw_loader_business_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./business.page.html */ 5054);
/* harmony import */ var _business_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./business.page.scss */ 8946);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _news_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../news.service */ 5752);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 9895);






let BusinessPage = class BusinessPage {
    constructor(newsService, router) {
        this.newsService = newsService;
        this.router = router;
        this.page = 1;
    }
    ngOnInit() {
        this.newsService
            .getData(`top-headlines?country=br&category=business&pageSize=10&page=${this.page}`)
            .subscribe(data => {
            console.log(data);
            this.data = data;
        });
    }
    onGoToNewsSinglePage(article) {
        this.newsService.currentArticle = article;
        this.router.navigate(['/business-single']);
    }
    loadMoreNews(event) {
        this.page++;
        console.log(event);
        this.newsService
            .getData(`top-headlines?country=br&category=business&pageSize=5&page=${this.page}`)
            .subscribe(data => {
            // console.log(data);
            // this.data = data;
            for (const article of data['articles']) {
                this.data.articles.push(article);
            }
            event.target.complete();
            console.log(this.data);
        });
    }
};
BusinessPage.ctorParameters = () => [
    { type: _news_service__WEBPACK_IMPORTED_MODULE_2__.NewsService },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__.Router }
];
BusinessPage = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.Component)({
        selector: 'app-business',
        template: _raw_loader_business_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_business_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], BusinessPage);



/***/ }),

/***/ 8946:
/*!*********************************************!*\
  !*** ./src/app/business/business.page.scss ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJidXNpbmVzcy5wYWdlLnNjc3MifQ== */");

/***/ }),

/***/ 5054:
/*!***********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/business/business.page.html ***!
  \***********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-header>\n  <ion-toolbar color=\"success\">\n    <ion-title>Negócios</ion-title>\n    <ion-buttons slot=\"start\">\n      <ion-menu-button menu=\"main-menu\"></ion-menu-button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ion-card *ngFor=\"let article of data?.articles\" (click)=\"onGoToNewsSinglePage(article)\">\n    <ion-img [src]=\"article.urlToImage\"></ion-img>\n\n    <ion-card-content>\n      <ion-card-title>{{article.title}}</ion-card-title>\n\n      <p>{{article.description}}</p>\n    </ion-card-content>\n  </ion-card>\n\n  <ion-infinite-scroll (ionInfinite)=\"loadMoreNews($event)\">\n    <ion-infinite-scroll-content loadingSpinner=\"bubble\" loadingText=\"Carregando mais..\"></ion-infinite-scroll-content>\n  </ion-infinite-scroll>\n</ion-content>\n");

/***/ })

}]);
//# sourceMappingURL=src_app_business_business_module_ts.js.map