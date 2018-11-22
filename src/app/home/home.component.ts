import { Component, OnInit } from '@angular/core';
import { NewsService } from '../services/news.service';
import { Article } from '../models/article';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  articles: Article[];

  constructor(private news: NewsService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.data.subscribe(data => {
      this.articles = data['articles'];
    });
    console.log(this.articles);
  }

  // get() {
  //   this.news.get().subscribe( res => {
  //     // console.log(res);
  //     this.articles = res;
  //     console.log(this.articles);
  //   }, error => {
  //     console.log(error);
  //   });
  // }

}
