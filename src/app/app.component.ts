import { Component } from '@angular/core';
import { SiteService } from './services/site.service';
import { User } from './models/user';
import { AuthService } from './services/auth.service';
import { JwtHelperService } from '@auth0/angular-jwt';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  title: string;
  jwtHelper = new JwtHelperService();

  constructor(public siteService: SiteService, private auth: AuthService) {
    this.title = siteService.title;
   }

   // tslint:disable-next-line:use-life-cycle-interface
   ngOnInit() {
    const token = localStorage.getItem('token');
    const user: User = JSON.parse(localStorage.getItem('user'));

    if (token) {
      this.auth.dekodedToken = this.jwtHelper.decodeToken(token);
      this.auth.currentUser = user;
    }
   }
}
