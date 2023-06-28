import { Component, OnInit } from '@angular/core';
import { NewsService } from '../news.service';
import { Router } from '@angular/router';
import { AdMobFree, AdMobFreeBannerConfig, AdMobFreeInterstitialConfig, AdMobFreeRewardVideoConfig } from '@ionic-native/admob-free/ngx';
// import { LoadingController } from '@ionic/angular';


@Component({
  selector: 'app-news',
  templateUrl: './news.page.html',
  styleUrls: ['./news.page.scss'],
})
export class NewsPage implements OnInit {
  data: any;
  page = 1;

  constructor(
    // public loadingController: LoadingController,
    private newsService: NewsService,
    private router: Router,
    // private admobFree: AdMobFree
  ) { }

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
      .getData(
        `top-headlines?country=us&pageSize=10&page=${this.page
        }`
      )
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
      .getData(
        `top-headlines?country=us&category=business&pageSize=10&page=${this.page
        }`
      )
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

}
