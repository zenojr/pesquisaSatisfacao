import { AngularFirestore, DocumentReference } from '@angular/fire/firestore';
import { Injectable } from '@angular/core';
import { Respostas } from './respostas.model';

@Injectable({
  providedIn: 'root'
})
export class PesquisaReactiveServiceService {
  readonly pathReactive = 'posts';

  constructor( private db: AngularFirestore ) { }

  add(data: Respostas): Promise<DocumentReference> {
    return this.db.collection<Respostas>(this.pathReactive).add({...data});
  }

}
