import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  constructor(
    private fauth: AngularFireAuth,
    private router: Router
    ) {

  }

  public async signUp(email: string, password: string) {
    await this.fauth.createUserWithEmailAndPassword(email, password)
    .then(() => {
      this.router.navigate(['bienvenido']);
    })
    .catch(error => {
      console.log(error);
    })
  }

  public async signIn(email: string, password: string) {
    await this.fauth.signInWithEmailAndPassword(email, password)
    .then(() => {
      this.router.navigate(['noticias']);
    })
    .catch(error => {
      console.log(error);
    })
  }

  public async signOut() {
    await this.fauth.signOut()
    .then(() => {
      this.router.navigate(['bienvenido']);
    })
    .catch(error => {
      console.log(error);
    })
  }
}
