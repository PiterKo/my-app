// import { Injectable } from '@angular/core';
// import { User } from '../models/User';
// import { Resolve, Router, ActivatedRouteSnapshot } from '@angular/router';
// import { Observable, of } from 'rxjs';
// import { catchError } from 'rxjs/operators';
// import { AuthService } from '../services/auth.service';
// import { SiteService } from '../services/site.service';

// @Injectable()

// export class UserResolver implements Resolve<User> {

//   constructor(
//     private userService: SiteService,
//     private auth: AuthService
//     ) { }

//     resolve(route: ActivatedRouteSnapshot): Observable<User> {
//       if (!this.auth.loggedIn()) {
//         return of(null);
//       }
//       return this.userService.getUser(this.auth.dekodedToken.nameid).pipe(
//         catchError(error => {
//           console.log('Problem retrieving your data!', error);
//           return of(null);
//         })
//       );
//     }
// }
