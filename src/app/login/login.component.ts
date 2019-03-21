import { AuthService } from './auth.service';
import { Component, OnInit } from '@angular/core';
import { NgForm, FormGroup, FormControl, Validators } from '@angular/forms';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  constructor( private authService: AuthService ) { }
  ngOnInit() {
    this.loginForm = new FormGroup({
      usuario: new FormControl('', {validators: [Validators.required]}),
      senha: new FormControl('', {validators: [Validators.required]})
    });
  }
  onSubmit() {
    // console.log(this.loginForm);
    this.authService.login({
      usuario: this.loginForm.value.usuario,
      senha: this.loginForm.value.senha
    });
  }
}
