import { MatSnackBar } from '@angular/material';
import { RespImgProd } from './respImgProd.model';
import { AngularFirestore } from '@angular/fire/firestore';
import { Injectable } from '@angular/core';
import { RespAspecTec } from './respAspTec.model';
import * as firebase from 'firebase/app';
import { RespRep } from './respRep.model';
import { RespComMark } from './respComMark.model';
import { RespEmbTran } from './respEmbtran.model';
import { Observable } from 'rxjs';
import { ConsultaResp } from './consultaResp.model';
import { RespostasFinais } from '../pesquisa/respostasFinais.model';

@Injectable({
  providedIn: 'root'
})
export class PesquisaReactiveServiceService {
  readonly user = this.getUser();
  readonly pathUser = this.user;
  consultaResp: Observable<ConsultaResp[]>;

  constructor( private db: AngularFirestore,
               private snackBar: MatSnackBar ) { }


  openSnackBarSaved(pergunta) {
    // if i want to show the question on save, just add a property 'pergunto' to snackbar
    this.snackBar.open('Resposta salva com sucesso!', '[x]Fechar', {
      duration: 1500
    });
  }

  addRespAspTec(pergunta: string, data: RespAspecTec): Promise<void> {
    this.db.collection<RespAspecTec>(pergunta).doc(this.user).set(data);
    return this.db.collection<RespAspecTec>(this.pathUser).doc(pergunta).set(data);
  }

  addRespRep(pergunta: string, data: RespRep): Promise<void> {
    this.db.collection<RespRep>(pergunta).doc(this.user).set(data);
    return this.db.collection<RespRep>(this.pathUser).doc(pergunta).set(data);
  }

  addRespImgProd(pergunta: string, data: RespImgProd): Promise<void> {
    this.db.collection<RespImgProd>(pergunta).doc(this.user).set(data);
    return this.db.collection<RespImgProd>(this.pathUser).doc(pergunta).set(data);
  }

  addRespComMark(pergunta: string, data: RespComMark): Promise<void> {
    this.db.collection<RespComMark>(pergunta).doc(this.user).set(data);
    return this.db.collection<RespComMark>(this.pathUser).doc(pergunta).set(data);
  }

  addRespEmbTran(pergunta: string, data: RespEmbTran): Promise<void> {
    this.db.collection<RespEmbTran>(pergunta).doc(this.user).set(data);
    return this.db.collection<RespEmbTran>(this.pathUser).doc(pergunta).set(data);
  }

  addRespFinais(pergunta: string, data: RespostasFinais): Promise<void> {
    this.db.collection<RespostasFinais>(pergunta).doc(this.user).set(data);
    return this.db.collection<RespostasFinais>(this.pathUser).doc(pergunta).set(data);
  }

  limpaRespAspTec(pergunta: string, data: RespAspecTec): Promise<void> {
    return this.db.collection<RespAspecTec>(this.pathUser).doc(pergunta).set(data);
  }

  getUser() {
    const userFb = firebase.auth().currentUser;
    let userMail = userFb.email;
    userMail = userMail.replace('@corfio.com', '');
    return userMail;
  }

}
