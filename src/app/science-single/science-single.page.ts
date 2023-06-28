import { Component, OnInit } from '@angular/core';
import { NewsService } from '../news.service';

@Component({
  selector: 'app-science-single',
  templateUrl: './science-single.page.html',
  styleUrls: ['./science-single.page.scss'],
})
export class ScienceSinglePage implements OnInit {
  article;
  constructor(
    private newsService: NewsService,
  ) { }

  ngOnInit() {
    this.article = this.newsService.currentArticle;
  }

}
