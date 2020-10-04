import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WelcomeComponent } from './components/welcome/welcome.component';
import { RegisterComponent } from './components/register/register.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { NewsComponent } from './components/news/news.component';
import { PostComponent } from './components/post/post.component';
import { ProfileComponent } from './components/profile/profile.component';

const routes: Routes = [
  { path: 'bienvenido', component: WelcomeComponent },
  { path: 'registro', component: RegisterComponent },
  { path: 'navbar', outlet: 'Navbar', component: NavbarComponent },
  { path: 'noticias', component: NewsComponent },
  { path: 'noticias', children: [
    { path: 'entrada', component: PostComponent },
    { path: 'perfil', component: ProfileComponent },
  ] },
  { path: '', redirectTo: '/bienvenido', pathMatch: 'full' },
  { path: '**', component: NewsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
