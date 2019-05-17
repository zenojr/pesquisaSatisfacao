import { AuthService } from './auth.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;
  valueForm = null;
  options: string[];
  touched = false;
  constructor( private authService: AuthService) { }

  ngOnInit() {
    this.valueForm = this.authService.getUrl();
    this.getUserFromUrl();
    this.loginForm = new FormGroup({
      usuario: new FormControl('', {validators: [Validators.required]}),
      senha: new FormControl('')
    });
    this.touchForm();
  }

  onSubmit() {
    this.authService.login({
      usuario: this.loginForm.value.usuario,
      senha: this.loginForm.value.senha
    });
  }

  touchForm() {
    const tamUrl = this.authService.getUrl();
    if ( tamUrl.length > 0 ) {
      this.touched = true;
    }
    return this.touched;

  }

  getUserFromUrl() {
    this.options = [this.valueForm];
    return this.options;
  }
}