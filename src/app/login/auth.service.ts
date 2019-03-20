import { Subject } from 'rxjs';
import { AuthData } from './auth.data.model';
import { User } from './user.model';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { AngularFireAuth } from 'angularfire2/auth';

@Injectable()
export class AuthService {
  authChange = new Subject<boolean>();
  private user: User;
  constructor( private router: Router, private afAuth: AngularFireAuth) {}

  registerUser(authData: AuthData) {
    this.user = {
      usuario: authData.usuario,
      userID: Math.round(Math.random() * 1000).toString(),
      password: authData.senha
    };
    this.authChange.next(true);
  }

  login(authData: AuthData) {
    authData.usuario = authData.usuario + '@corfio.com';
    console.log(authData.usuario);
    this.afAuth.auth.signInWithEmailAndPassword(
      authData.usuario,
      authData.senha
    ).then(result => {
      console.log(result);
      this.authSuccess();
    }).catch(error => { console.log(error); });
  }

  // login(authData: AuthData) {
  //   this.user = {
  //     usuario: authData.usuario,
  //     userID: Math.round(Math.random() * 1000).toString(),
  //     password: authData.senha
  //   };
  //   this.authSuccess();
  // }

  logOut() {
    this.user = null;
    this.authChange.next(false);
    this.router.navigate(['/']);
  }

  getUser() {
    return { ...this.user };
  }

  isAuth() {
    return this.user != null;
  }

  private authSuccess() {
    this.authChange.next(true);
    console.log(this.user);
    this.router.navigate(['/pesquisa']);
  }

}
