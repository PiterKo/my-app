import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Article } from '../models/article';

@Injectable({
  providedIn: 'root'
})
export class NewsService {

  constructor(private http: HttpClient) { }

  get(): Observable<Article[]> {
    const header = new HttpHeaders({
      'Authorization': 'Bearer 30385255cd394fa3976128b6c0fb99a2'
    });
    return this.http.get<Article[]>('https://newsapi.org/v2/top-headlines?country=us', {headers: header})
    .pipe(map((res: any) => res.articles));
  }
}
