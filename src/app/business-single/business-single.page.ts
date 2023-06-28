import { Component, OnInit } from '@angular/core';
import { NewsService } from '../news.service';

@Component({
  selector: 'app-business-single',
  templateUrl: './business-single.page.html',
  styleUrls: ['./business-single.page.scss'],
})
export class BusinessSinglePage implements OnInit {
  article;
  constructor(
    private newsService: NewsService,
  ) { }

  ngOnInit() {
    this.article = this.newsService.currentArticle;
  }

}
