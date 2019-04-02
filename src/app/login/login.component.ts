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
  valueForm = null;
  options: string[];
  touched = false;
  constructor( private authService: AuthService ) { }
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
    // console.log(this.loginForm);
    this.authService.login({
      usuario: this.loginForm.value.usuario,
      senha: this.loginForm.value.senha
    });
  }

  touchForm() {
    let tamUrl = this.authService.getUrl();
    console.log(tamUrl.length);
    if ( tamUrl.length > 0 ) {
      this.touched = true;
    }
    console.log(this.touched);
    console.log(this.options);
    return this.touched;

  }

  getUserFromUrl() {
    this.options = [this.valueForm];
    return this.options;
  }

}
