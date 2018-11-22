import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
// import { UserResolver } from './resolvers/user.resolver';
import { AuthGuard } from './guard/auth.guard';
import { NewsResolver } from './resolvers/news.resolver';


const routes: Routes = [
  { path: '', component: HomeComponent, canActivate: [AuthGuard], resolve: { articles: NewsResolver }},
  { path: 'login', component: LoginComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
