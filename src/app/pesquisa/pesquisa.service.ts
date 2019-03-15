import { RespostasAspecTec } from './respostasAspecTec.model';
import { Injectable } from '@angular/core';
import { PerguntasAspecTec } from './perguntasAspecTec.model';
import { Observable, Subject } from 'rxjs';
import { map } from 'rxjs/operators';
import { AngularFirestore, AngularFirestoreDocument, DocumentReference } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class PesquisaService {
readonly path = 'perguntasAspecTec';
readonly pathRespostas = 'respostas';

  constructor(private db: AngularFirestore) { }

addPerguntaAspecTec(data: PerguntasAspecTec): Promise<DocumentReference> {
  return this.db.collection<PerguntasAspecTec>(this.path).add(data);
}

addRespostaAspecTec(data: RespostasAspecTec): Promise<DocumentReference> {
  return this.db.collection<RespostasAspecTec>(this.pathRespostas).add(data);
}

}
