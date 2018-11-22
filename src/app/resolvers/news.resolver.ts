import { Injectable } from '@angular/core';
import { Resolve, Router, ActivatedRouteSnapshot } from '@angular/router';
import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Article } from '../models/article';
import { NewsService } from '../services/news.service';

@Injectable()

export class NewsResolver implements Resolve<Article[]> {

  constructor(
    private newsService: NewsService,
    ) { }

    resolve(route: ActivatedRouteSnapshot): Observable<Article[]> {
      return this.newsService.get().pipe(
        catchError(error => {
          console.log('Problem retrieving your data!', error);
          return of(null);
        })
      );
    }
}
