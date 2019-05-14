import { AuthService } from './../login/auth.service';
import { AngularFirestore, AngularFirestoreDocument, AngularFirestoreCollection } from '@angular/fire/firestore';
import { PesquisaReactiveServiceService } from './pesquisa-reactive-service.service';
import { Component, OnInit, AfterViewInit, Input } from '@angular/core';
import { FormBuilder, FormGroup, FormArray, Validators, FormControl } from '@angular/forms';
import { Observable, Subject } from 'rxjs';
import { PerguntasAspecTec } from '../pesquisa/perguntasAspecTec.model';
import { PerguntasRep } from '../pesquisa/perguntasRep.model';
import { PerguntasProd } from '../pesquisa/perguntasProd.model';
import { PerguntasComMark } from '../pesquisa/perguntasComMark.model';
import { PerguntasEmbTran } from '../pesquisa/perguntasEmbTran.model';
import { map, switchMap } from 'rxjs/operators';
import { ConsultaResp } from './consultaResp.model';
import { RespostaUser } from '../gerencial/relatorios/resUser.model';
import { PerguntasFinais } from '../pesquisa/perguntasFinais.model';

export interface Respostas {
  pergunta?: string;
  respostaCorfio?: string;
  respostaOutros?: string;
}

export interface OptionsCorfio {
  otimo?: string;
  bom?: string;
  regular?: string;
  ruim?: string;
}


@Component({
  selector: 'app-pesquisa-reactive-form',
  templateUrl: './pesquisa-reactive-form.component.html',
  styleUrls: ['./pesquisa-reactive-form.component.css']
})
export class PesquisaReactiveFormComponent implements OnInit {

  respostas: Observable<Respostas[]>;
  optionsCorfio: Observable<OptionsCorfio[]>;

  respostaCorfio: any;
  fim = false;

  contadorResp: any;

  isLinear = false;
  firstFormGroup: FormGroup;
  secondFormGroup: FormGroup;
  thirdFormGroup: FormGroup;
  fourthFormGroup: FormGroup;
  fifthFormGroup: FormGroup;
  sixthFormGroup: FormGroup;

  perguntaFormAspTec: string;
  perguntaFormRep: string;
  perguntaFormImgProd: string;
  perguntaFormComMark: string;
  perguntaFormEmbTran: string;
  perguntaFormFim: string;

  perguntaAspecTec: Observable<PerguntasAspecTec[]>;
  perguntasRep: Observable<PerguntasRep[]>;
  perguntasImgProd: Observable<PerguntasProd[]>;
  perguntasComMark: Observable<PerguntasComMark[]>;
  perguntasEmbTran: Observable<PerguntasEmbTran[]>;
  perguntasFinais: Observable<PerguntasFinais[]>;


  listadeCNPJ: Observable<any>;
  respostarep: Observable<any>;
  controlRepFreq = false;

  cliente: any;
  respostasFB: Observable<ConsultaResp[]>;

  user = this.pesqReactService.getUser();
  getRetornoResp: any;
  contaRespostas = 0;
  vlrQuestao = 0;
  realCount: any;

  perguntaEspAssTec = 'Assistência Técnica';
  perguntaEspAtendComFab = 'Atendimento do setor comercial na fábrica';
  perguntaEspRep = 'Freqüência de visitas do representante atende a necessidade ?';

  constructor(private formBuilder: FormBuilder,
              private pesqReactService: PesquisaReactiveServiceService,
              private db: AngularFirestore,
              private authService: AuthService
              ) { }

  ngOnInit() {

    this.getRespostas();
    this.contaResp();
    this.clientesCNPJ();

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

    this.sixthFormGroup = this.formBuilder.group({
      pergunta: [''],
      respostaMotivo: [''],
      observacao: ['']
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

    this.perguntasFinais = this.db.collection('perguntasFinais')
    .snapshotChanges()
    .pipe(map(docArray => {
      return docArray.map(doc => {
        return {
          id: doc.payload.doc.id,
          pergunta: doc.payload.doc.data()['pergunta']
        };
      });
    }));

    this.db.doc(this.user + '/' + 'fim').valueChanges().subscribe(
      doc => {
        if ( doc['fim'] === true ) {
          this.fim = true;
        }
      }
    );

  } // END ONINIT


  clientesCNPJ() {

    this.db.doc( 'clientesCNPJv2' + '/' + this.user + '@corfio.com').valueChanges().subscribe(
      doc => this.cliente = doc['nome']
    );

  }

  scroll(el: HTMLElement) {
    el.scrollIntoView();
  }

  saveRespAspecTec(perguntaForm) {
    this.perguntaFormAspTec = perguntaForm;
    const pergunta = this.perguntaFormAspTec;
    console.log(pergunta);
    const user = this.user;
    const respostaCorfio = this.firstFormGroup.get('respostaCorfio').value;
    const respostaOutros = this.firstFormGroup.get('respostaOutros').value;
    this.pesqReactService.addRespAspTec(pergunta, {pergunta, respostaCorfio, respostaOutros});
    // this.pesqReactService.openSnackBarSaved(pergunta);
  }



  resetForms() {
    return this.firstFormGroup.reset(), this.secondFormGroup.reset(),
           this.thirdFormGroup.reset(), this.fourthFormGroup.reset();
  }

  saveRespRep(perguntaForm) {
    this.perguntaFormRep = perguntaForm;
    const pergunta = this.perguntaFormRep;
    console.log(pergunta);
    const respostaCorfio = this.secondFormGroup.get('respostaCorfio').value;
    const respostaOutros = this.secondFormGroup.get('respostaOutros').value;
    this.pesqReactService.addRespRep(pergunta, {pergunta, respostaCorfio, respostaOutros});
    // this.pesqReactService.openSnackBarSaved(pergunta);
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
    // this.pesqReactService.openSnackBarSaved(pergunta);
  }

  saveRespComMark(perguntaForm) {
    this.perguntaFormComMark = perguntaForm;
    const pergunta = this.perguntaFormComMark;
    console.log(pergunta);
    const respostaCorfio = this.fourthFormGroup.get('respostaCorfio').value;
    const respostaOutros = this.fourthFormGroup.get('respostaOutros').value;
    this.pesqReactService.addRespComMark(pergunta, {pergunta, respostaCorfio, respostaOutros});
    // this.pesqReactService.openSnackBarSaved(pergunta);
  }

  saveRespEmbTran(perguntaForm) {
    this.perguntaFormEmbTran = perguntaForm;
    const pergunta = this.perguntaFormEmbTran;
    console.log(pergunta);
    const respostaCorfio = this.fifthFormGroup.get('respostaCorfio').value;
    const respostaOutros = this.fifthFormGroup.get('respostaOutros').value;
    this.pesqReactService.addRespEmbTran(pergunta, {pergunta, respostaCorfio, respostaOutros});
    // this.pesqReactService.openSnackBarSaved(pergunta);
  }

  saveRespFinais(perguntaForm) {
    this.perguntaFormFim = perguntaForm;
    const pergunta = this.perguntaFormFim;
    const fim = this.fim;
    console.log(pergunta);
    console.log(this.sixthFormGroup.get('observacao').value);
    const resposta = this.sixthFormGroup.get('respostaMotivo').value;
    const observacao = this.sixthFormGroup.get('observacao').value;
    console.log(observacao);
    this.pesqReactService.addRespFinais(pergunta, {resposta, observacao, fim});
    // this.pesqReactService.openSnackBarSaved(pergunta);
  }

  limpaObs() {
    return this.sixthFormGroup.get('observacao').setValue('');
  }

  theEnd() {
    if ( this.contaRespostas >= 26 )  {
      this.fim = true;
      alert( 'Pesquisa concluida com sucesso, muito obrigado!' );

    } else {
      alert( 'Sua pesquisa ainda não foi concluida, por favor responda todas as perguntas.' );
    }
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
    .subscribe( data => { console.log(data.length);
    this.contaRespostas = data.length;
    return this.contaRespostas;
  });
    // console.log(result);

    // const resultNovo = this.db.collection(this.user)
    // .snapshotChanges()
    // .pipe(map(docArray => {
    //   return docArray.map(doc => 
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
    const total = 26;
    this.vlrQuestao = 100 / total;
    console.log(this.vlrQuestao);
    return this.vlrQuestao;
  }

  setSelect(pergunta: any, obs: Respostas) {
    // alert('run!');
    this.db.doc(this.user + '/' + pergunta).valueChanges().subscribe(
      doc => {
        if (pergunta === doc['pergunta']) {
          console.log(doc['pergunta']);
          const respCorfio = doc['respostaCorfio'];
          const respOutros = doc['respostaOutros'];
          console.log(respCorfio);
          console.log(respOutros);
          this.respostaCorfio = respCorfio;
        } else {
          console.log('não existe a pergunta');
          this.respostaCorfio = null;
        }

      }
    );
  }

  setSelect2(pergunta: any, obs: Respostas) {
    const size$ = new Subject<string>();
    const queryObservable = size$.pipe(
    switchMap(size =>
      this.db.collection(this.user, ref => ref.where('pergunta', '==', pergunta)).valueChanges()
    ));
    console.log(queryObservable);

  }


  createUsersCracken() {
    const createUsers = [


   ];

    createUsers.forEach(element => {
      console.log(element) ;
      // const email = element.email;
      // const password = '123456';
      // const emailCNPJ = element.email;
      let userCNPJ = element.cnpj + '@corfio.com';
    
      // const cnpj = emailCNPJ.replace('@corfio.com', '');
      // const nome = element.nome;
      // let nome = element.nome;
      let nome = element.nomeFant;
      let cnpj = element.cnpj;
      let email = element.email;
      console.log( nome, cnpj, email, userCNPJ );
      // this.afAuth.auth.createUserWithEmailAndPassword( email, password ).catch(console.error);
      this.db.collection('clientesCNPJv2').doc(userCNPJ).set({nome, cnpj, email}).catch(console.error);
    });
  }

}
