(self["webpackChunkNews"] = self["webpackChunkNews"] || []).push([["src_app_news-single_news-single_module_ts"],{

/***/ 5412:
/*!***********************************************************!*\
  !*** ./src/app/news-single/news-single-routing.module.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NewsSinglePageRoutingModule": () => (/* binding */ NewsSinglePageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 9895);
/* harmony import */ var _news_single_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./news-single.page */ 8814);




const routes = [
    {
        path: '',
        component: _news_single_page__WEBPACK_IMPORTED_MODULE_0__.NewsSinglePage
    }
];
let NewsSinglePageRoutingModule = class NewsSinglePageRoutingModule {
};
NewsSinglePageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], NewsSinglePageRoutingModule);



/***/ }),

/***/ 5516:
/*!***************************************************!*\
  !*** ./src/app/news-single/news-single.module.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NewsSinglePageModule": () => (/* binding */ NewsSinglePageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 8583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 476);
/* harmony import */ var _news_single_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./news-single-routing.module */ 5412);
/* harmony import */ var _news_single_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./news-single.page */ 8814);







let NewsSinglePageModule = class NewsSinglePageModule {
};
NewsSinglePageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _news_single_routing_module__WEBPACK_IMPORTED_MODULE_0__.NewsSinglePageRoutingModule
        ],
        declarations: [_news_single_page__WEBPACK_IMPORTED_MODULE_1__.NewsSinglePage]
    })
], NewsSinglePageModule);



/***/ }),

/***/ 8814:
/*!*************************************************!*\
  !*** ./src/app/news-single/news-single.page.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NewsSinglePage": () => (/* binding */ NewsSinglePage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _raw_loader_news_single_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./news-single.page.html */ 738);
/* harmony import */ var _news_single_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./news-single.page.scss */ 8830);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _news_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../news.service */ 5752);





let NewsSinglePage = class NewsSinglePage {
    constructor(newsService) {
        this.newsService = newsService;
    }
    // showBannerAd() {
    //   let bannerConfig: AdMobFreeBannerConfig = {
    //     isTesting: true, // Remove in production
    //     autoShow: true,
    //     id: "ca-app-pub-6613975280720158/6656774355"
    //   };
    //   this.admobFree.banner.config(bannerConfig);
    //   this.admobFree.banner.prepare().then(() => {
    //     // success
    //   }).catch(e => alert(e));
    // }
    // showInterstitialAds() {
    //   let interstitialConfig: AdMobFreeInterstitialConfig = {
    //     isTesting: true, // Remove in production
    //     autoShow: true,
    //     id: "ca-app-pub-6613975280720158/6656774355"
    //   };
    //   this.admobFree.interstitial.config(interstitialConfig);
    //   this.admobFree.interstitial.prepare().then(() => {
    //   }).catch(e => alert(e));
    // }
    // showRewardVideoAds() {
    //   let RewardVideoConfig: AdMobFreeRewardVideoConfig = {
    //     isTesting: true, // Remove in production
    //     autoShow: true,
    //     id: "ca-app-pub-6613975280720158/6656774355"
    //   };
    //   this.admobFree.rewardVideo.config(RewardVideoConfig);
    //   this.admobFree.rewardVideo.prepare().then(() => {
    //   }).catch(e => alert(e));
    // }
    ngOnInit() {
        this.article = this.newsService.currentArticle;
        // console.log(this.newsService.currentArticle);
    }
};
NewsSinglePage.ctorParameters = () => [
    { type: _news_service__WEBPACK_IMPORTED_MODULE_2__.NewsService }
];
NewsSinglePage = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.Component)({
        selector: 'app-news-single',
        template: _raw_loader_news_single_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_news_single_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], NewsSinglePage);



/***/ }),

/***/ 8830:
/*!***************************************************!*\
  !*** ./src/app/news-single/news-single.page.scss ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJuZXdzLXNpbmdsZS5wYWdlLnNjc3MifQ== */");

/***/ }),

/***/ 738:
/*!*****************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/news-single/news-single.page.html ***!
  \*****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-header>\n  <ion-toolbar color=\"primary\">\n    <ion-buttons slot=\"start\">\n      <ion-back-button></ion-back-button>\n    </ion-buttons>\n    <ion-title>{{article.title}}</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ion-card>\n    <ion-img [src]=\"article.urlToImage\"></ion-img>\n\n    <ion-card-content>\n      <ion-card-title>{{article.title}}</ion-card-title>\n\n      <p>{{article.description}}</p>      \n      <article>{{article.content}}</article>\n      <ion-button ion-button fill=\"outline\" href=\"{{article.url}}\" large>Read full story</ion-button>\n\n    </ion-card-content>\n  </ion-card>\n</ion-content>\n");

/***/ })

}]);
//# sourceMappingURL=src_app_news-single_news-single_module_ts.js.map