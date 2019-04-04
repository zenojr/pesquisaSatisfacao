import { ClientesCNPJ } from './clientesCNPJ.model';

import { AngularFirestore } from '@angular/fire/firestore';
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

@Component({
  selector: 'app-pesquisa-reactive-form',
  templateUrl: './pesquisa-reactive-form.component.html',
  styleUrls: ['./pesquisa-reactive-form.component.css']
})
export class PesquisaReactiveFormComponent implements OnInit {

  listadeCNPJ: Observable<any>;

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


  clientes: Observable<ClientesCNPJ[]>;

  respostasFB: Observable<ConsultaResp[]>;

  user = this.pesqReactService.getUser();

  constructor(private formBuilder: FormBuilder,
              private pesqReactService: PesquisaReactiveServiceService,
              private db: AngularFirestore) { }

  ngOnInit() {

    // this.pesqReactService.openSnackBarUser();

    this.respostasFB =  this.db.collection(this.user)
    .snapshotChanges()
    .pipe(map(respArray => {
      return respArray.map(doc => {
        return {
          pergunta: doc.payload.doc.data()['pergunta'],
          respostaCorfio: doc.payload.doc.data()['respostaCorfio'],
          respostaOutros: doc.payload.doc.data()['respostaOutros'],
        };
      });
    }));

    this.respostasFB.forEach(element => {
      console.log('elemento' +  element );
    });

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

   this.clientesCNPJ();

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


    this.getCNPJ();
    this.pesqReactService.getRespostas();

  } // END ONINIT

  scroll(el: HTMLElement) {
    el.scrollIntoView();
  }

  getCNPJ() {
    this.listadeCNPJ = this.db.collection('clientesCNPJ')
                              .valueChanges();
    console.log(this.listadeCNPJ);
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
    this.clientes.forEach(element => {
      console.log(element);
    });
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
    this.pesqReactService.addRespRep(pergunta, {respostaCorfio, respostaOutros});
    this.pesqReactService.openSnackBarSaved(pergunta);
  }

  saveRespImgProd(perguntaForm) {
    this.perguntaFormImgProd = perguntaForm;
    const pergunta = this.perguntaFormImgProd;
    console.log(pergunta);
    const respostaCorfio = this.thirdFormGroup.get('respostaCorfio').value;
    const respostaOutros = this.thirdFormGroup.get('respostaOutros').value;
    this.pesqReactService.addRespImgProd(pergunta, {respostaCorfio, respostaOutros});
    this.pesqReactService.openSnackBarSaved(pergunta);
  }

  saveRespComMark(perguntaForm) {
    this.perguntaFormComMark = perguntaForm;
    const pergunta = this.perguntaFormComMark;
    console.log(pergunta);
    const respostaCorfio = this.fourthFormGroup.get('respostaCorfio').value;
    const respostaOutros = this.fourthFormGroup.get('respostaOutros').value;
    this.pesqReactService.addRespComMark(pergunta, {respostaCorfio, respostaOutros});
    this.pesqReactService.openSnackBarSaved(pergunta);
  }

  saveRespEmbTran(perguntaForm) {
    this.perguntaFormEmbTran = perguntaForm;
    const pergunta = this.perguntaFormEmbTran;
    console.log(pergunta);
    const respostaCorfio = this.fifthFormGroup.get('respostaCorfio').value;
    const respostaOutros = this.fifthFormGroup.get('respostaOutros').value;
    this.pesqReactService.addRespEmbTran(pergunta, {respostaCorfio, respostaOutros});
    this.pesqReactService.openSnackBarSaved(pergunta);
  }

}
