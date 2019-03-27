import { AngularFirestore, DocumentReference } from '@angular/fire/firestore';
import { Injectable } from '@angular/core';
import { Respostas } from './respostas.model';
import * as firebase from 'firebase';

@Injectable({
  providedIn: 'root'
})
export class PesquisaReactiveServiceService {
  readonly pathReactive = 'posts';

  

  constructor( private db: AngularFirestore ) { }

  add(data: Respostas): Promise<DocumentReference> {
    let user = firebase.auth().currentUser;
    console.log(user);
    return this.db.collection<Respostas>(this.pathReactive).add({...data});
  }

}
