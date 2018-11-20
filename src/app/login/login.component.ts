import { Component, OnInit } from '@angular/core';
import { SiteService } from '../services/site.service';
import { FormGroup, FormControl } from '@angular/forms';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  user = new FormGroup({
    username: new FormControl(''),
    password: new FormControl(''),
    rememberMe: new FormControl(false)
  });

  constructor(public siteService: SiteService, private auth: AuthService, private route: Router) { }

  ngOnInit() {
  }

  login() {
    this.auth.login(this.user.value).subscribe(next => {
    }, error => {
      console.log(error);
    }, () => {
      this.route.navigate(['']);
    });
  }

}
