import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AngularFireAuthGuard, redirectUnauthorizedTo, redirectLoggedInTo } from '@angular/fire/auth-guard';
import { WelcomeComponent } from './components/welcome/welcome.component';
import { RegisterComponent } from './components/register/register.component';
import { NewsComponent } from './components/news/news.component';
//import { ProfileComponent } from './components/profile/profile.component';

const redirectUnauthorizedToWelcome = () => redirectUnauthorizedTo(['bienvenido']);
const redirectLoggedInToNews = () => redirectLoggedInTo(['noticias']);

const routes: Routes = [
  { path: 'bienvenido', component: WelcomeComponent, canActivate: [AngularFireAuthGuard], data: { authGuardPipe: redirectLoggedInToNews } },
  { path: 'registro', component: RegisterComponent, canActivate: [AngularFireAuthGuard], data: { authGuardPipe: redirectLoggedInToNews } },
  { path: 'noticias', component: NewsComponent, canActivate: [AngularFireAuthGuard], data: { authGuardPipe: redirectUnauthorizedToWelcome } },
  /*{ path: 'noticias', children: [
    { path: 'perfil', component: ProfileComponent, canActivate: [AngularFireAuthGuard], data: { authGuardPipe: redirectUnauthorizedToWelcome } },
  ] },*/
  { path: '', redirectTo: '/bienvenido', pathMatch: 'full' },
  { path: '**', component: NewsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
