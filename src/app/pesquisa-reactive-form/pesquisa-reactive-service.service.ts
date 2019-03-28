import { AngularFirestore, DocumentReference } from '@angular/fire/firestore';
import { Injectable } from '@angular/core';
import { Respostas } from './respostas.model';
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

  add(pergunta: string, data: Respostas): Promise<void> {
    // return this.db.collection<Respostas>(this.pathReactive).add({...data});
    // const id = this.db.createId();
    // let ask ='';
    const id = this.db.collection('perguntasAspecTec');
    console.log(id);
    return this.db.collection<Respostas>(this.pathReactive).doc(pergunta).set({data});
  }

  // setId(data: Respostas): Promise<void> {
  //   return this.db.collection<Respostas>(this.pathReactive).doc('perguntainserida').set({data})
  // }
  


  update(id: string, data: Partial<Respostas>): Promise<void> {
    return this.db.doc<Respostas>(`${this.pathReactive}/${id}`).update(data);
  }

  // set(id: string, data: Respostas): Promise<DocumentReference> {
  //   return this.db.doc<Respostas>(`${this.pathReactive}/${id}`).set(data);
  // }

  getUser() {
    const userFb = firebase.auth().currentUser;
    let userMail = userFb.email;
    userMail = userMail.replace('@corfio.com', '');
    return userMail;
  }

}
