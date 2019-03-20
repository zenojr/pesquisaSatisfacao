import { PerguntasAspecTec } from './perguntasAspecTec.model';
import { PerguntasRep } from './perguntasRep.model';
import { PesquisaService } from './pesquisa.service';
import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl, FormControlName } from '@angular/forms';
import { AngularFirestore, AngularFirestoreDocument } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { PerguntasProd } from './perguntasProd.model';
import { PerguntasComMark } from './perguntasComMark.model';
import { PerguntasEmbTran } from './perguntasEmbTran.model';

@Component({
  selector: 'app-pesquisa',
  templateUrl: './pesquisa.component.html',
  styleUrls: ['./pesquisa.component.css']
})
export class PesquisaComponent implements OnInit {

  postPergunta: FormGroup;
  idPergunta;

  perguntaAspecTec: Observable<PerguntasAspecTec[]>;
  perguntasRep: Observable<PerguntasRep[]>;
  perguntasProd: Observable<PerguntasProd[]>;
  perguntasComMark: Observable<PerguntasComMark[]>;
  perguntasEmbTran: Observable<PerguntasEmbTran[]>;

  isLinear = true;
  firstFormGroup: FormGroup;
  secondFormGroup: FormGroup;
  thirdFormGroup: FormGroup;
  fourthFormGroup: FormGroup;
  fifthFormGroup: FormGroup;

  constructor(private pesquisaService: PesquisaService,
              private db: AngularFirestore,
              private _formBuilder: FormBuilder) {}

  ngOnInit() {
    this.firstFormGroup = this._formBuilder.group({
      firstCtrl: ['']
    });
    this.secondFormGroup = this._formBuilder.group({
      secondCtrl: ['']
    });
    this.thirdFormGroup = this._formBuilder.group({
      thirdCtrl: ['']
    });
    this.fourthFormGroup = this._formBuilder.group({
      fourthCtrl: ['']
    });
    this.fifthFormGroup = this._formBuilder.group({
      fifthCtrl: ['']
    });

    // END

    this.postPergunta = new FormGroup({
      pergunta: new FormControl('', Validators.required)
    });

    this.perguntaAspecTec = this.db.collection('perguntasAspecTec')
    .snapshotChanges()
    .pipe(map(docArray => {
      return docArray.map(doc => {
        return {
          id: doc.payload.doc.id,
          pergunta: doc.payload.doc.data()['pergunta']
        };
      });
    }));

    this.perguntasRep = this.db.collection('perguntasRep')
    .snapshotChanges()
    .pipe(map(docArray => {
      return docArray.map(doc => {
        return {
          id: doc.payload.doc.id,
          pergunta: doc.payload.doc.data()['pergunta']
        };
      });
    }));

    this.perguntasProd = this.db.collection('perguntasProd')
    .snapshotChanges()
    .pipe(map(docArray => {
      return docArray.map(doc => {
        return {
          id: doc.payload.doc.id,
          pergunta: doc.payload.doc.data()['pergunta']
        };
      });
    }));

    this.perguntasComMark = this.db.collection('perguntasComMark')
    .snapshotChanges()
    .pipe(map(docArray => {
      return docArray.map(doc => {
        return {
          id: doc.payload.doc.id,
          pergunta: doc.payload.doc.data()['pergunta']
        };
      });
    }));

    this.perguntasEmbTran = this.db.collection('perguntasEmbTran')
    .snapshotChanges()
    .pipe(map(docArray => {
      return docArray.map(doc => {
        return {
          id: doc.payload.doc.id,
          pergunta: doc.payload.doc.data()['pergunta']
        };
      });
    }));

  }

  onSubmitAspecTec(form) {
    let resposta = form;
    resposta = resposta.value;
    console.log(resposta);
    this.pesquisaService.addRespostaAspecTec({resposta});
  }

  onSubmitRep(form) {
    let resposta = form;
    resposta = resposta.value;
    console.log(resposta);
    this.pesquisaService.addRespostaRep({resposta});
  }

  onSubmitProd(form) {
    let resposta = form;
    resposta = resposta.value;
    console.log(resposta);
    this.pesquisaService.addRespostaProd({resposta});
  }

  onSubmitComMark(form) {
    let resposta = form;
    resposta = resposta.value;
    console.log(resposta);
    this.pesquisaService.addRespostaComMark({resposta});
  }

  onSubmitEmbTran(form) {
    let resposta = form;
    resposta = resposta.value;
    console.log(resposta);
    this.pesquisaService.addRespostaEmbTran({resposta});
  }


}
