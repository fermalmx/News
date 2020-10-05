import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  public email: string;

  public getEmail() {
    return this.email;
  }

  constructor(
    private fauth: AngularFireAuth,
    private router: Router
    ) { }

  public async signUp(email: string, password: string) {
    await this.fauth.createUserWithEmailAndPassword(email, password)
    .then(() => {
      this.email = email;
      this.router.navigate(['bienvenido']);
    })
    .catch(error => {
      console.log(error);
    })
  }

  public async signIn(email: string, password: string) {
    await this.fauth.signInWithEmailAndPassword(email, password)
    .then(() => {
      this.email = email;
      this.router.navigate(['noticias']);
    })
    .catch(error => {
      console.log(error);
    })
  }

  public async signOut() {
    await this.fauth.signOut()
    .then(() => {
      this.email = '';
      this.router.navigate(['bienvenido']);
    })
    .catch(error => {
      console.log(error);
    })
  }
}
