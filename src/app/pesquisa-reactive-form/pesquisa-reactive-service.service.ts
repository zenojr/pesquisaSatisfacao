import { AngularFirestore, DocumentReference } from '@angular/fire/firestore';
import { Injectable } from '@angular/core';
import { Respostas } from './respostas.model';
import * as firebase from 'firebase';

@Injectable({
  providedIn: 'root'
})
export class PesquisaReactiveServiceService {

  userFb = firebase.auth().currentUser;
  userMail = this.userFb.email;
  user = this.userMail.replace('@corfio.com', '');

  readonly pathReactive = this.user;

  constructor( private db: AngularFirestore ) { }

  add(data: Respostas): Promise<DocumentReference> {
    return this.db.collection<Respostas>(this.pathReactive).add({...data});
  }

  update(id: string, data: Partial<Respostas>): Promise<void> {
    return this.db.doc<Respostas>(`${this.pathReactive}/${id}`).update(data);
  }

  getUser() {
    const userFb = firebase.auth().currentUser;
    const userMail = userFb.email;
    this.user = userMail.replace('@corfio.com', '');
    console.log(this.user);
  }

}
