import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class NewsService {

  constructor(private http: HttpClient) { }

  get() {
    const header = new HttpHeaders({
      'Authorization': 'Bearer 30385255cd394fa3976128b6c0fb99a2'
    });
    return this.http.get('https://newsapi.org/v2/top-headlines?country=us', {headers: header});
  }
}
