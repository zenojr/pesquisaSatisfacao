import { RespostasAspecTec } from './respostasAspecTec.model';
import { RespostasRep } from './respostasRep.model';
import { Injectable } from '@angular/core';
import { PerguntasAspecTec } from './perguntasAspecTec.model';
import { Observable, Subject } from 'rxjs';
import { map } from 'rxjs/operators';
import { AngularFirestore, AngularFirestoreDocument, DocumentReference } from '@angular/fire/firestore';
import { RespostasProd } from './respostasProd.model';


@Injectable({
  providedIn: 'root'
})
export class PesquisaService {
readonly path = 'perguntasAspecTec';

readonly pathRespostasAspecTec = 'respostasAspecTec';
readonly pathRespostasRep = 'respostasRep';
readonly pathRespostasProd = 'respostasProd';


  constructor(private db: AngularFirestore) { }

// TESTE ADD PERGUNTAS
addPerguntaAspecTec(data: PerguntasAspecTec): Promise<DocumentReference> {
  return this.db.collection<PerguntasAspecTec>(this.path).add(data);
}

// ENVIA RESPOSTAS
addRespostaAspecTec(data: RespostasAspecTec): Promise<DocumentReference> {
  return this.db.collection<RespostasAspecTec>(this.pathRespostasAspecTec).add(data);
}

addRespostaRep(data: RespostasRep): Promise<DocumentReference> {
  return this.db.collection<RespostasRep>(this.pathRespostasRep).add(data);
}

addRespostaProd(data: RespostasProd): Promise<DocumentReference> {
  return this.db.collection<RespostasProd>(this.pathRespostasProd).add(data);
}

}
