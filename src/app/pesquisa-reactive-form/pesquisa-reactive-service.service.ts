import { RespImgProd } from './respImgProd.model';
import { AngularFirestore, DocumentReference } from '@angular/fire/firestore';
import { Injectable } from '@angular/core';
import { RespAspecTec } from './respAspTec.model';
import * as firebase from 'firebase';
import { RespRep } from './respRep.model';
import { RespComMark } from './respComMark.model';

@Injectable({
  providedIn: 'root'
})
export class PesquisaReactiveServiceService {
  readonly user = this.getUser();
  readonly pathUser = this.user;

  constructor( private db: AngularFirestore ) { }

  addRespAspTec(pergunta: string, data: RespAspecTec): Promise<void> {
    return this.db.collection<RespAspecTec>(this.pathUser).doc(pergunta).set({data});
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
