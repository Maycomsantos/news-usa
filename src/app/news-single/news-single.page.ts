import { Component, OnInit } from '@angular/core';
import { NewsService } from '../news.service';
import { AdMobFree, AdMobFreeBannerConfig, AdMobFreeInterstitialConfig, AdMobFreeRewardVideoConfig } from '@ionic-native/admob-free/ngx';


@Component({
  selector: 'app-news-single',
  templateUrl: './news-single.page.html',
  styleUrls: ['./news-single.page.scss']
})
export class NewsSinglePage implements OnInit {
  article;
  constructor(
    private newsService: NewsService,
    // private admobFree: AdMobFree
    ) {}


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
}