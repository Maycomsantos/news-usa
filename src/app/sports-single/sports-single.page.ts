import { Component, OnInit } from '@angular/core';
import { NewsService } from '../news.service';

@Component({
  selector: 'app-sports-single',
  templateUrl: './sports-single.page.html',
  styleUrls: ['./sports-single.page.scss'],
})
export class SportsSinglePage implements OnInit {
  article;
  constructor(
    private newsService: NewsService,
  ) { }

  ngOnInit() {
    this.article = this.newsService.currentArticle;
  }

}
