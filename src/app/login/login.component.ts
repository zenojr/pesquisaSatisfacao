import { AuthService } from './auth.service';
import { Component, OnInit } from '@angular/core';
import { NgForm, FormGroup, FormControl, Validators } from '@angular/forms';
import { Observable } from 'rxjs';
import { ClientesCNPJ } from '../pesquisa-reactive-form/clientesCNPJ.model';
import { AngularFirestore } from '@angular/fire/firestore';
import { map } from 'rxjs/operators';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  clientes: Observable<ClientesCNPJ[]>;
  loginForm: FormGroup;
  valueForm = null;
  options: string[];
  touched = false;
  constructor( private authService: AuthService, private db: AngularFirestore ) { }

  ngOnInit() {
    this.validaCNPJ();
    
    this.valueForm = this.authService.getUrl();
    this.getUserFromUrl();
    this.loginForm = new FormGroup({
      usuario: new FormControl('', {validators: [Validators.required]}),
      senha: new FormControl('')
    });
    this.touchForm();
  }


  validaCNPJ() {
    this.clientes = this.db.collection('clientesCNPJ')
    .snapshotChanges()
    .pipe(map(docArray => {
      return docArray.map(doc => {
        return {
          nome: doc.payload.doc.data()['nome']
        };
      });
    }));
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
