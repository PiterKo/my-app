import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NewsService } from '../services/news.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  articles: any[];

  constructor(private news: NewsService) { }

  ngOnInit() {
    this.get();
  }

  get() {
    this.news.get().subscribe((res: any) => {
      console.log(res.articles);
      this.articles = res.articles;
    }, error => {
      console.log(error);
    });
  }

}
