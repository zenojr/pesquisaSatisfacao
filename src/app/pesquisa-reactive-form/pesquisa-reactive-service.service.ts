import { AngularFirestore, DocumentReference } from '@angular/fire/firestore';
import { Injectable } from '@angular/core';
import { RespAspecTec } from './respAspTec.model';
import * as firebase from 'firebase';
import { map } from 'rxjs/operators';
import { PerguntasAspecTec } from '../pesquisa/perguntasAspecTec.model';

@Injectable({
  providedIn: 'root'
})
export class PesquisaReactiveServiceService {
  readonly user = this.getUser();
  readonly pathReactive = this.user;

  constructor( private db: AngularFirestore ) { }

  addRespAspTec(pergunta: string, data: RespAspecTec): Promise<void> {
    return this.db.collection<RespAspecTec>(this.pathReactive).doc(pergunta).set({data});
  }

  // update(id: string, data: Partial<Respostas>): Promise<void> {
  //   return this.db.doc<Respostas>(`${this.pathReactive}/${id}`).update(data);
  // }

  getUser() {
    const userFb = firebase.auth().currentUser;
    let userMail = userFb.email;
    userMail = userMail.replace('@corfio.com', '');
    return userMail;
  }

}