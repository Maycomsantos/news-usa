(self["webpackChunkNews"] = self["webpackChunkNews"] || []).push([["src_app_news_news_module_ts"],{

/***/ 8421:
/*!*********************************************!*\
  !*** ./src/app/news/news-routing.module.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NewsPageRoutingModule": () => (/* binding */ NewsPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 9895);
/* harmony import */ var _news_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./news.page */ 3066);




const routes = [
    {
        path: '',
        component: _news_page__WEBPACK_IMPORTED_MODULE_0__.NewsPage
    }
];
let NewsPageRoutingModule = class NewsPageRoutingModule {
};
NewsPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], NewsPageRoutingModule);



/***/ }),

/***/ 1926:
/*!*************************************!*\
  !*** ./src/app/news/news.module.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NewsPageModule": () => (/* binding */ NewsPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 8583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 476);
/* harmony import */ var _news_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./news-routing.module */ 8421);
/* harmony import */ var _news_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./news.page */ 3066);







let NewsPageModule = class NewsPageModule {
};
NewsPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _news_routing_module__WEBPACK_IMPORTED_MODULE_0__.NewsPageRoutingModule
        ],
        declarations: [_news_page__WEBPACK_IMPORTED_MODULE_1__.NewsPage]
    })
], NewsPageModule);



/***/ }),

/***/ 3066:
/*!***********************************!*\
  !*** ./src/app/news/news.page.ts ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NewsPage": () => (/* binding */ NewsPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _raw_loader_news_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./news.page.html */ 3708);
/* harmony import */ var _news_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./news.page.scss */ 2704);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _news_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../news.service */ 5752);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 9895);






// import { LoadingController } from '@ionic/angular';
let NewsPage = class NewsPage {
    constructor(
    // public loadingController: LoadingController,
    newsService, router) {
        this.newsService = newsService;
        this.router = router;
        this.page = 1;
    }
    // async presentLoading() {
    //   const loading = await this.loadingController.create({
    //     cssClass: 'my-custom-class',
    //     message: 'Carregando...',
    //     duration: 1000
    //   });
    //   await loading.present();
    //   const { role, data } = await loading.onDidDismiss();
    //   console.log('Loading dismissed!');
    // }
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
        this.newsService
            .getData(`top-headlines?sources=google-news-br&pageSize=5&page=${this.page}`)
            .subscribe(data => {
            console.log(data);
            this.data = data;
        });
    }
    onGoToNewsSinglePage(article) {
        this.newsService.currentArticle = article;
        this.router.navigate(['/news-single']);
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
NewsPage.ctorParameters = () => [
    { type: _news_service__WEBPACK_IMPORTED_MODULE_2__.NewsService },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__.Router }
];
NewsPage = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.Component)({
        selector: 'app-news',
        template: _raw_loader_news_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_news_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], NewsPage);



/***/ }),

/***/ 2704:
/*!*************************************!*\
  !*** ./src/app/news/news.page.scss ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJuZXdzLnBhZ2Uuc2NzcyJ9 */");

/***/ }),

/***/ 3708:
/*!***************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/news/news.page.html ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-header>\n  <ion-toolbar color=\"primary\">\n    <ion-title>Noticias do Dia</ion-title>\n    <ion-buttons slot=\"start\">\n      <ion-menu-button menu=\"main-menu\"></ion-menu-button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ion-card *ngFor=\"let article of data?.articles\" (click)=\"onGoToNewsSinglePage(article)\">\n    <ion-img [src]=\"article.urlToImage\"></ion-img>\n\n    <ion-card-content>\n      <ion-card-title>{{article.title}}</ion-card-title>\n\n      <p>{{article.description}}</p>\n    </ion-card-content>\n  </ion-card>\n\n  <ion-infinite-scroll (ionInfinite)=\"loadMoreNews($event)\">\n    <ion-infinite-scroll-content loadingSpinner=\"bubble\" loadingText=\"Carregando mais..\"></ion-infinite-scroll-content>\n  </ion-infinite-scroll>\n\n</ion-content>\n");

/***/ })

}]);
//# sourceMappingURL=src_app_news_news_module_ts.js.map