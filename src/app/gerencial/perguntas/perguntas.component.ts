import { PerguntasRep } from './../../pesquisa/perguntasRep.model';
import { PerguntasProd } from './../../pesquisa/perguntasProd.model';
import { PerguntasEmbTran } from './../../pesquisa/perguntasEmbTran.model';
import { Component, OnInit } from '@angular/core';
import { AngularFirestoreCollection, AngularFirestore } from '@angular/fire/firestore';
import { PerguntasAspecTec } from 'src/app/pesquisa/perguntasAspecTec.model';
import { Observable } from 'rxjs';
import { PerguntasComMark } from 'src/app/pesquisa/perguntasComMark.model';

@Component({
  selector: 'app-perguntas',
  templateUrl: './perguntas.component.html',
  styleUrls: ['./perguntas.component.css']
})
export class PerguntasComponent implements OnInit {
  private perguntasAspecTecCollection: AngularFirestoreCollection<PerguntasAspecTec>;
  perguntaAspecTec: Observable<PerguntasAspecTec[]>;
  private perguntasComMarkCollection: AngularFirestoreCollection<PerguntasComMark>;
  perguntaComMark: Observable<PerguntasComMark[]>;
  private perguntasEmbTranCollection:  AngularFirestoreCollection<PerguntasEmbTran>;
  perguntaEmbTran: Observable<PerguntasEmbTran[]>;
  private perguntasProdCollection: AngularFirestoreCollection<PerguntasProd>;
  perguntaProd: Observable<PerguntasProd[]>;
  private perguntasRepCollection: AngularFirestoreCollection<PerguntasRep>;
  perguntaRep: Observable<PerguntasRep[]>;

  editable = false;

  constructor( private db: AngularFirestore ) {
    this.perguntasAspecTecCollection = db.collection<PerguntasAspecTec>('perguntasAspecTec');
    this.perguntaAspecTec = this.perguntasAspecTecCollection.valueChanges();
    this.perguntasComMarkCollection = db.collection<PerguntasComMark>('perguntasComMark');
    this.perguntaComMark = this.perguntasComMarkCollection.valueChanges();
    this.perguntasEmbTranCollection = db.collection<PerguntasComMark>('perguntasComMark');
    this.perguntaEmbTran = this.perguntasEmbTranCollection.valueChanges();
    this.perguntasProdCollection = db.collection<PerguntasProd>('perguntasProd');
    this.perguntaProd = this.perguntasProdCollection.valueChanges();
    this.perguntasRepCollection = db.collection<PerguntasRep>('perguntasRep');
    this.perguntaRep = this.perguntasRepCollection.valueChanges();

   }

  ngOnInit() {
  }

  editPergunta(pergunta) {
    let perguntaOld = pergunta;
    return this.db.collection<PerguntasAspecTec>('perguntasAspectTec');
  }

  // addRespEmbTran(pergunta: string, data: RespEmbTran): Promise<void> {
  //   return this.db.collection<RespEmbTran>(this.pathUser).doc(pergunta).set(data);
  // }

  // saveRespAspecTec(perguntaForm) {
  //   this.perguntaFormAspTec = perguntaForm;
  //   const pergunta = this.perguntaFormAspTec;
  //   console.log(pergunta);
  //   const respostaCorfio = this.firstFormGroup.get('respostaCorfio').value;
  //   const respostaOutros = this.firstFormGroup.get('respostaOutros').value;
  //   this.pesqReactService.addRespAspTec(pergunta, {pergunta, respostaCorfio, respostaOutros});
  //   this.pesqReactService.openSnackBarSaved(pergunta);
  // }

}
