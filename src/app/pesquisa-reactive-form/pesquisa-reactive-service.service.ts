import { MatSnackBar } from '@angular/material';
import { RespImgProd } from './respImgProd.model';
import { AngularFirestore, DocumentReference } from '@angular/fire/firestore';
import { Injectable } from '@angular/core';
import { RespAspecTec } from './respAspTec.model';
import * as firebase from 'firebase/app';

import { RespRep } from './respRep.model';
import { RespComMark } from './respComMark.model';
import { RespEmbTran } from './respEmbtran.model';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class PesquisaReactiveServiceService {
  readonly user = this.getUser();
  readonly pathUser = this.user;

  constructor( private db: AngularFirestore,
               private snackBar: MatSnackBar ) { }

  openSnackBarUser() {
    let user = this.getUser();
    user = this.user.charAt(0).toUpperCase() + user.slice(1);
    this.snackBar.open('Bem Vindo ' + user, '[x]Fechar', {
      duration: 10000
    });
  }

  openSnackBarSaved(pergunta) {
    this.snackBar.open('Resposta salva com sucesso!', '[x]Fechar', {
      duration: 1500
    });
  }

  addRespAspTec(pergunta: string, data: RespAspecTec): Promise<void> {
    return this.db.collection<RespAspecTec>(this.pathUser).doc(pergunta).set({data});
  }


  getClienteCNPJ() {
    const cliente = this.db.collection('clientesCNPJ').valueChanges();
    console.log(cliente);
  }

  addRespRep(pergunta: string, data: RespRep): Promise<void> {
    return this.db.collection<RespRep>(this.pathUser).doc(pergunta).set({data});
  }

  addRespImgProd(pergunta: string, data: RespImgProd): Promise<void> {
    return this.db.collection<RespImgProd>(this.pathUser).doc(pergunta).set({data});
  }

  addRespComMark(pergunta: string, data: RespComMark): Promise<void> {
    return this.db.collection<RespComMark>(this.pathUser).doc(pergunta).set({data});
  }

  addRespEmbTran(pergunta: string, data: RespEmbTran): Promise<void> {
    return this.db.collection<RespEmbTran>(this.pathUser).doc(pergunta).set({data});
  }

  getUser() {
    const userFb = firebase.auth().currentUser;
    let userMail = userFb.email;
    userMail = userMail.replace('@corfio.com', '');
    return userMail;
  }



}
