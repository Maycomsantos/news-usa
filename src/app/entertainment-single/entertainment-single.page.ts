import { Component, OnInit } from '@angular/core';
import { NewsService } from '../news.service';

@Component({
  selector: 'app-entertainment-single',
  templateUrl: './entertainment-single.page.html',
  styleUrls: ['./entertainment-single.page.scss'],
})
export class EntertainmentSinglePage implements OnInit {
  article;
  constructor(
    private newsService: NewsService,
  ) { }

  ngOnInit() {
    this.article = this.newsService.currentArticle;
  }

}
