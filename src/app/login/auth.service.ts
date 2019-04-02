import { Subject } from 'rxjs';
import { AuthData } from './auth.data.model';
import { User } from './user.model';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { AngularFireAuth } from 'angularfire2/auth';

@Injectable()
export class AuthService {
  authChange = new Subject<boolean>();
  // private user: User;

  private isAuthenticated = false;

  constructor( private router: Router, private afAuth: AngularFireAuth) {}

  registerUser(authData: AuthData) {
    // this.user = {
    //   usuario: authData.usuario,
    //   userID: Math.round(Math.random() * 1000).toString(),
    //   password: authData.senha
    // };
    // this.authChange.next(true);
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
    }).catch(error => { console.log(error), alert('Ops: Usuário ou senha inválido'); });
  }

  getUser() {

  }

  getUrl() {
    let url = document.URL;
    // use 45 for firebase and 32 for local test
    // url = url.slice(45);
    url = url.slice(32);
    console.log(url);
    return url;
  }

  logOut() {
    this.isAuthenticated = false;
    this.authChange.next(false);
    this.router.navigate(['/']);
  }

  isAuth() {
    return this.isAuthenticated;
  }

  private authSuccess() {
    this.isAuthenticated = true;
    this.authChange.next(true);
    this.router.navigate(['/pesquisa']);
    // this.router.navigate(['/pesquisaReactive']);
  }

}
