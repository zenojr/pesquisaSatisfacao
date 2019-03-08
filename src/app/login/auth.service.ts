import { AuthData } from './auth.data.model';
import { User } from './user.model';
import { Subject } from 'rxjs';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable()
export class AuthService {
  authChange = new Subject<boolean>( );
  private user: User;

  constructor( private router: Router ){}

  registerUser(authData: AuthData) {
    this.user = {
      usuario: authData.usuario,
      userID: Math.round(Math.random() * 1000).toString()
    }
    this.authChange.next(true);
  }

  login(authData: AuthData) {
    this.user = {
      usuario: authData.usuario,
      userID: Math.round(Math.random() * 1000).toString()
    }
    this.authChange.next(true);
  }

  logout() {
    this.user = null;
    this.authChange.next(false);
  }

  getUser() {
    return { ...this.user };
  }

  isAuth() {
    return this.user != null;
  }

}
