import { Injectable } from '@angular/core';
import { Pesquisa } from './pesquisa.model';
import { Observable, Subject } from 'rxjs';
import { map } from 'rxjs/operators';
import { AngularFirestore, AngularFirestoreDocument } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class PesquisaService {
  perguntasChanged = new Subject<Pesquisa[]>();
  private perguntasDisponiveis: Pesquisa[] = [];
  private respostas: Pesquisa[] = [];

  constructor(private db: AngularFirestore) { }

  enviaResposta() {
    
  }

  private addDataToDB(pesquisa: Pesquisa) {

  }
  // REVISAR
  // fetchPerguntasDisponiveis() {
  //   this.db.collection('perguntasAspecTec')
  //   .snapshotChanges()
  //   .pipe(map(docArray => {
  //     return docArray.map(doc => {
  //       return {
  //         id: doc.payload.doc.id,
  //         pergunta: doc.payload.doc.data()['pergunta']
  //       };
  //     });
  //   }))
  //   .subscribe((perguntas: Pesquisa[]) => {
  //     this.perguntasDisponiveis = perguntas;
  //     this.perguntasChanged.next([...this.perguntasDisponiveis]);
  //   });
  // }


}
