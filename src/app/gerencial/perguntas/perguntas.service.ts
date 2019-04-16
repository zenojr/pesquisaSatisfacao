import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { Injectable } from '@angular/core';
import { PerguntasAspecTec } from 'src/app/pesquisa/perguntasAspecTec.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PerguntasService {


  constructor( private db: AngularFirestore ) { }

  getPerguntas() {
    return this.db.collection('');
  }

}


