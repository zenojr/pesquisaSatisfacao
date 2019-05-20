import { AngularFirestore } from '@angular/fire/firestore';
import { PesquisaReactiveServiceService } from './pesquisa-reactive-service.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Observable } from 'rxjs';
import { PerguntasAspecTec } from '../pesquisa/perguntasAspecTec.model';
import { PerguntasRep } from '../pesquisa/perguntasRep.model';
import { PerguntasProd } from '../pesquisa/perguntasProd.model';
import { PerguntasComMark } from '../pesquisa/perguntasComMark.model';
import { PerguntasEmbTran } from '../pesquisa/perguntasEmbTran.model';
import { map } from 'rxjs/operators';
import { ConsultaResp } from './consultaResp.model';
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
  perguntaProduto = 'Quais produtos que sua empresa nos compra:';

  constructor(private formBuilder: FormBuilder,
              private pesqReactService: PesquisaReactiveServiceService,
              private db: AngularFirestore
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
      respostaOutros: ['']
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

  resetForms() {
    console.log('reset');
    return this.firstFormGroup.reset(), this.secondFormGroup.reset(),
           this.thirdFormGroup.reset(), this.fourthFormGroup.reset();
  }


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
    let pergunta = this.perguntaFormAspTec;
    let respostaCorfio = this.firstFormGroup.get('respostaCorfio').value;
    let respostaOutros = this.firstFormGroup.get('respostaOutros').value;
    this.pesqReactService.addRespAspTec(pergunta, {pergunta, respostaCorfio, respostaOutros});
  }

  saveRespRep(perguntaForm) {
    this.perguntaFormRep = perguntaForm;
    let pergunta = this.perguntaFormRep;
    let respostaCorfio = this.secondFormGroup.get('respostaCorfio').value;
    let respostaOutros = this.secondFormGroup.get('respostaOutros').value;
    this.pesqReactService.addRespRep(pergunta, {pergunta, respostaCorfio, respostaOutros});
  }

  saveRespImgProd(perguntaForm) {
    this.perguntaFormImgProd = perguntaForm;
    let pergunta = this.perguntaFormImgProd;
    let respostaCorfio = this.thirdFormGroup.get('respostaCorfio').value;
    let respostaOutros = this.thirdFormGroup.get('respostaOutros').value;
    this.pesqReactService.addRespImgProd(pergunta, {pergunta, respostaCorfio, respostaOutros});
  }

  saveRespComMark(perguntaForm) {
    this.perguntaFormComMark = perguntaForm;
    const pergunta = this.perguntaFormComMark;
    const respostaCorfio = this.fourthFormGroup.get('respostaCorfio').value;
    const respostaOutros = this.fourthFormGroup.get('respostaOutros').value;
    this.pesqReactService.addRespComMark(pergunta, {pergunta, respostaCorfio, respostaOutros});
  }

  saveRespEmbTran(perguntaForm) {
    this.perguntaFormEmbTran = perguntaForm;
    let pergunta = this.perguntaFormEmbTran;
    let respostaCorfio = this.fifthFormGroup.get('respostaCorfio').value;
    let respostaOutros = this.fifthFormGroup.get('respostaOutros').value;
    this.pesqReactService.addRespEmbTran(pergunta, {pergunta, respostaCorfio, respostaOutros});
  }

  saveRespFinais(perguntaForm) {
    this.perguntaFormFim = perguntaForm;
    let pergunta = this.perguntaFormFim;
    let fim = this.fim;
    let resposta = this.sixthFormGroup.get('respostaMotivo').value;
    let observacao = this.sixthFormGroup.get('observacao').value;
    this.pesqReactService.addRespFinais(pergunta, {resposta, observacao, fim});
    this.pesqReactService.openSnackBarSaved(pergunta);
  }

  limpaObs() {
    return this.sixthFormGroup.get('observacao').setValue('');
  }

  theEnd() {
    if ( this.contaRespostas >= 27 )  {
      this.fim = true;
      alert( 'Pesquisa concluida com sucesso, muito obrigado!' );

    } else {
      alert( 'Sua pesquisa ainda não foi concluida, por favor responda todas as perguntas.' );
    }
  }

  getRespostas() {
    this.db.collection(this.user)
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
    this.db.collection(this.user)
    .valueChanges()
    .subscribe( data => { return this.contaRespostas = data.length;
  });
  }

  converteResp() {
    const total = 27;
    this.vlrQuestao = 100 / total;
    console.log(this.vlrQuestao);
    return this.vlrQuestao;
  }

  createUsersCracken() {
  const createUsers = [

  ];
  createUsers.forEach(element => {
    console.log(element) ;
    const userCNPJ = element.cnpj + '@corfio.com';
    const nome = element.nome;
    const cnpj = element.cnpj;
    const email = element.email;
    const representante = element.representante;
    const estado = element.estado;
    console.log( nome, cnpj, email, representante, estado );
    // this.afAuth.auth.createUserWithEmailAndPassword( email, password ).catch(console.error);
    this.db.collection('clientesCNPJv2').doc(userCNPJ).set({nome, cnpj, email, representante, estado}).catch(console.error);
  });
  }

}
