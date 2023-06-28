import { Component, OnInit } from '@angular/core';
import { NewsService } from '../news.service';

@Component({
  selector: 'app-technology-single',
  templateUrl: './technology-single.page.html',
  styleUrls: ['./technology-single.page.scss'],
})
export class TechnologySinglePage implements OnInit {
  article;
  constructor(
    private newsService: NewsService,
  ) { }

  ngOnInit() {
    this.article = this.newsService.currentArticle;
  }

}
