import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  constructor(
    private fauth: AngularFireAuth,
    private router: Router,
    private _snackBar: MatSnackBar
    ) { }

  public async signUp(email: string, password: string) {
    await this.fauth.createUserWithEmailAndPassword(email, password)
    .then(() => {
      this.openSnackBar('Usuario creado con éxito.');
      this.router.navigate(['noticias']);
    })
    .catch(error => {
      this.openSnackBar(error);
    })
  }

  public async signIn(email: string, password: string) {
    await this.fauth.signInWithEmailAndPassword(email, password)
    .then(() => {
      this.openSnackBar('Sesión Iniciada con éxito.');
      this.router.navigate(['noticias']);
    })
    .catch(error => {
      this.openSnackBar(error);
    })
  }

  public async signOut() {
    await this.fauth.signOut()
    .then(() => {
      this.openSnackBar('Se ha cerrado sesión con éxito.');
      this.router.navigate(['bienvenido']);
    })
    .catch(error => {
      this.openSnackBar(error);
    })
  }

  public openSnackBar(message: string) {
    this._snackBar.open(message, 'Cerrar', { duration: 5000 });
  }
}
