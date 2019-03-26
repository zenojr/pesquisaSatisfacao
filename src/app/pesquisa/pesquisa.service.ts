
import { Injectable } from '@angular/core';
import { PerguntasAspecTec } from './perguntasAspecTec.model';
import { Observable, Subject } from 'rxjs';
import { map } from 'rxjs/operators';
import { AngularFirestore, AngularFirestoreDocument, DocumentReference } from '@angular/fire/firestore';
import { RespostasProd } from './respostasProd.model';
import { RespostasComMark } from './respostasComMark.model';
import { RespostasAspecTec } from './respostasAspecTec.model';
import { RespostasRep } from './respostasRep.model';
import { RespostasEmbTran } from './respostasEmbTran.model';

@Injectable({
  providedIn: 'root'
})
export class PesquisaService {
readonly path = 'perguntasAspecTec';

readonly pathRespostasAspecTec = 'respostasAspecTec';
readonly pathRespostasRep = 'respostasRep';
readonly pathRespostasProd = 'respostasProd';
readonly pathRespostasComMark = 'respostasComMark';
readonly pathRespostasEmbTran = 'respostasEmbTran';


  constructor(private db: AngularFirestore) { }

// TESTE ADD PERGUNTAS
addPerguntaAspecTec(data: PerguntasAspecTec): Promise<DocumentReference> {
  return this.db.collection<PerguntasAspecTec>(this.path).add(data);
}

addRespostaIndAspecTec(data: RespostasAspecTec): Promise<DocumentReference> {
  return this.db.collection<RespostasAspecTec>(this.pathRespostasAspecTec).add(data);
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

addRespostaComMark(data: RespostasComMark): Promise<DocumentReference> {
  return this.db.collection<RespostasComMark>(this.pathRespostasComMark).add(data);
}

addRespostaEmbTran(data: RespostasEmbTran): Promise<DocumentReference> {
  return this.db.collection<RespostasEmbTran>(this.pathRespostasEmbTran).add(data);
}

}
