import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';
import { map } from 'rxjs/operators';
import { User } from '../models/user';
import { Observable } from 'rxjs';
import { JwtHelperService } from '@auth0/angular-jwt';

const url = 'http://localhost:5000/api/auth/login';

@Injectable({
  providedIn: 'root'
})

export class AuthService {

  currentUser: User;
  jwtHelper = new JwtHelperService();
  dekodedToken: any;

  constructor(private http: HttpClient, private route: Router) {}

  login(model: any) {
    return this.http.post(url, model).pipe(
      map((res: any) => {
        if (res) {
          localStorage.setItem('token', res.token);
          localStorage.setItem('user', JSON.stringify(res.user));
          this.dekodedToken = this.jwtHelper.decodeToken(res.token);
          this.currentUser = res.user;
        }
      })
    );
  }

  logout() {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    this.route.navigate(['login']);
    this.currentUser = null;
    this.dekodedToken = null;
  }

  loggedIn() {
    const token = localStorage.getItem('token');

    return !this.jwtHelper.isTokenExpired(token);
  }
}
