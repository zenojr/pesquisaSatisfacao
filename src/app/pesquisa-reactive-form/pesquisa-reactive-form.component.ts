import { ClientesCNPJ } from './clientesCNPJ.model';
import { AngularFirestore, AngularFirestoreDocument, AngularFirestoreCollection } from '@angular/fire/firestore';
import { PesquisaReactiveServiceService } from './pesquisa-reactive-service.service';
import { Component, OnInit, AfterViewInit, Input } from '@angular/core';
import { FormBuilder, FormGroup, FormArray, Validators, FormControl } from '@angular/forms';
import { Observable } from 'rxjs';
import { PerguntasAspecTec } from '../pesquisa/perguntasAspecTec.model';
import { PerguntasRep } from '../pesquisa/perguntasRep.model';
import { PerguntasProd } from '../pesquisa/perguntasProd.model';
import { PerguntasComMark } from '../pesquisa/perguntasComMark.model';
import { PerguntasEmbTran } from '../pesquisa/perguntasEmbTran.model';
import { map } from 'rxjs/operators';
import { ConsultaResp } from './consultaResp.model';
import { RespostaUser } from '../gerencial/relatorios/resUser.model';

@Component({
  selector: 'app-pesquisa-reactive-form',
  templateUrl: './pesquisa-reactive-form.component.html',
  styleUrls: ['./pesquisa-reactive-form.component.css']
})
export class PesquisaReactiveFormComponent implements OnInit {

  isLinear = false;
  firstFormGroup: FormGroup;
  secondFormGroup: FormGroup;
  thirdFormGroup: FormGroup;
  fourthFormGroup: FormGroup;
  fifthFormGroup: FormGroup;

  perguntaFormAspTec: string;
  perguntaFormRep: string;
  perguntaFormImgProd: string;
  perguntaFormComMark: string;
  perguntaFormEmbTran: string;

  perguntaAspecTec: Observable<PerguntasAspecTec[]>;
  perguntasRep: Observable<PerguntasRep[]>;
  perguntasImgProd: Observable<PerguntasProd[]>;
  perguntasComMark: Observable<PerguntasComMark[]>;
  perguntasEmbTran: Observable<PerguntasEmbTran[]>;

  listadeCNPJ: Observable<any>;
  respostarep: Observable<any>;
  controlRepFreq = false;
  clientes: Observable<ClientesCNPJ[]>;
  respostasFB: Observable<ConsultaResp[]>;

  user = this.pesqReactService.getUser();
  getRetornoResp: any;
  contaRespostas = 0;
  vlrQuestao = 0;
  realCount: any;
  constructor(private formBuilder: FormBuilder,
              private pesqReactService: PesquisaReactiveServiceService,
              private db: AngularFirestore
              ) { }

  ngOnInit() {

    this.getRespostas();
    this.contaResp();
    this.converteResp();
    this.clientesCNPJ();
    console.log(this.getRetornoResp);
    // this.pesqReactService.openSnackBarUser();
    // this.getCNPJ();

    this.firstFormGroup = this.formBuilder.group({
      pergunta: [''],
      respostaCorfio: [''],
      respostaOutros: ['']
    });
    this.secondFormGroup = this.formBuilder.group({
      pergunta: [''],
      respostaCorfio: [''],
      respostaOutros: [''],
      respFreq: [''],
      respFreqAval: ['']
    });
    this.thirdFormGroup = this.formBuilder.group({
      pergunta: [''],
      respostaCorfio: [''],
      respostaOutros: ['']
    });
    this.fourthFormGroup = this.formBuilder.group({
      pergunta: [''],
      respostaCorfio: [''],
      respostaOutros: ['']
    });
    this.fifthFormGroup = this.formBuilder.group({
      pergunta: [''],
      respostaCorfio: [''],
      respostaOutros: ['']
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

    this.perguntasImgProd = this.db.collection('perguntasProd')
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

  } // END ONINIT

  scroll(el: HTMLElement) {
    el.scrollIntoView();
  }

  clientesCNPJ() {
    this.clientes = this.db.collection('clientesCNPJ')
    .snapshotChanges()
    .pipe(map(docArray => {
      return docArray.map(doc => {
        return {
          nome: doc.payload.doc.data()['nome'],
          cnpj: doc.payload.doc.data()['cnpj']
        };
      });
    }));
  }

  saveRespAspecTec(perguntaForm) {
    this.perguntaFormAspTec = perguntaForm;
    const pergunta = this.perguntaFormAspTec;
    console.log(pergunta);
    const respostaCorfio = this.firstFormGroup.get('respostaCorfio').value;
    const respostaOutros = this.firstFormGroup.get('respostaOutros').value;
    this.pesqReactService.addRespAspTec(pergunta, {pergunta, respostaCorfio, respostaOutros});
    this.pesqReactService.openSnackBarSaved(pergunta);
  }


  saveRespRep(perguntaForm) {
    this.perguntaFormRep = perguntaForm;
    const pergunta = this.perguntaFormRep;
    console.log(pergunta);
    const respostaCorfio = this.secondFormGroup.get('respostaCorfio').value;
    const respostaOutros = this.secondFormGroup.get('respostaOutros').value;
    this.pesqReactService.addRespRep(pergunta, {pergunta, respostaCorfio, respostaOutros});
    this.pesqReactService.openSnackBarSaved(pergunta);
  }

  respFreqRep(perguntaForm) {
    const pergunta  = perguntaForm;
    console.log(pergunta);
    if (this.secondFormGroup.get('respFreq').value === 'sim') {
      this.controlRepFreq = true;
      this.respostarep = this.secondFormGroup.get('respFreq').value;
    } else {
      this.controlRepFreq = false;
      this.respostarep = this.secondFormGroup.get('respFreq').value;
    }
    console.log(this.respostarep);
    console.log(this.controlRepFreq);
  }

  saveRespImgProd(perguntaForm) {
    this.perguntaFormImgProd = perguntaForm;
    const pergunta = this.perguntaFormImgProd;
    console.log(pergunta);
    const respostaCorfio = this.thirdFormGroup.get('respostaCorfio').value;
    const respostaOutros = this.thirdFormGroup.get('respostaOutros').value;
    this.pesqReactService.addRespImgProd(pergunta, {pergunta, respostaCorfio, respostaOutros});
    this.pesqReactService.openSnackBarSaved(pergunta);
  }

  saveRespComMark(perguntaForm) {
    this.perguntaFormComMark = perguntaForm;
    const pergunta = this.perguntaFormComMark;
    console.log(pergunta);
    const respostaCorfio = this.fourthFormGroup.get('respostaCorfio').value;
    const respostaOutros = this.fourthFormGroup.get('respostaOutros').value;
    this.pesqReactService.addRespComMark(pergunta, {pergunta, respostaCorfio, respostaOutros});
    this.pesqReactService.openSnackBarSaved(pergunta);
  }

  saveRespEmbTran(perguntaForm) {
    this.perguntaFormEmbTran = perguntaForm;
    const pergunta = this.perguntaFormEmbTran;
    console.log(pergunta);
    const respostaCorfio = this.fifthFormGroup.get('respostaCorfio').value;
    const respostaOutros = this.fifthFormGroup.get('respostaOutros').value;
    this.pesqReactService.addRespEmbTran(pergunta, {pergunta, respostaCorfio, respostaOutros});
    this.pesqReactService.openSnackBarSaved(pergunta);
  }

  getRespostas() {
    const result = this.db.collection(this.user)
    .snapshotChanges()
    .pipe(map(docArray => {
      return docArray.map(doc => {
        return {
          id: doc.payload.doc.id,
          ...doc.payload.doc.data()
        };
      });
    }))
    .subscribe( from => {
      this.getRetornoResp = from;
      console.log(this.getRetornoResp);
      return this.getRetornoResp;
    });
  }

  contaResp() {
    // this.db.collection(this.user).get().then(snap => {
    //   size = snap.size // will return the collection size
    //   console.log(size)

    const result = this.db.collection(this.user)
    .valueChanges()
    .subscribe( data => { data.forEach(element => {
      this.contaRespostas++;
      console.log(this.contaRespostas);
      return this.contaRespostas;
    }); });
    console.log(result);

    // const resultNovo = this.db.collection(this.user)
    // .snapshotChanges()
    // .pipe(map(docArray => {
    //   return docArray.map(doc => {
    //     return {
    //       count: docArray.length
    //     };
    //   });
    // }))
    // .subscribe( from => {
    //   console.log(from);
    //   this.realCount = from;
    // });
  }

  converteResp() {
    const total = 22;
    this.vlrQuestao = 100 / total;
    console.log(this.vlrQuestao);
    return this.vlrQuestao;
  }

  setSelect(pergunta) {

  }



}
