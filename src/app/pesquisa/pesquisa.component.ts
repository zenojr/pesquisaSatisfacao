import { PerguntasAspecTec } from './perguntasAspecTec.model';
import { PerguntasRep } from './perguntasRep.model';
import { PesquisaService } from './pesquisa.service';
import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl, FormControlName } from '@angular/forms';
import { AngularFirestore, AngularFirestoreDocument } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';


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

  isLinear = true;
  firstFormGroup: FormGroup;
  secondFormGroup: FormGroup;

  constructor(private pesquisaService: PesquisaService,
              private db: AngularFirestore,
              private _formBuilder: FormBuilder) {}

  ngOnInit() {
    this.firstFormGroup = this._formBuilder.group({
      firstCtrl: ['', Validators.required]
    });
    this.secondFormGroup = this._formBuilder.group({
      secondCtrl: ['', Validators.required]
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

  }

  onSubmitAspecTec(form) {
    let resposta = form;
    resposta = resposta.value;
    console.log(resposta);
    this.pesquisaService.addRespostaAspecTec({resposta});
  }

  onSubmitRepresentantes(form) {
    let resposta = form;
    resposta = resposta.value;
    console.log(resposta);
    this.pesquisaService.addRespostaAspecTec({resposta});
  }

  // saveRespostaAspecTec() {
  //   const resposta = this.firstFormGroup.get('firstCtrl').value;
  //   this.pesquisaService.addRespostaAspecTec({resposta});
  // }

  // onSubmitAtendRep(form) {
  //   let resposta = form;
  //   resposta = resposta.value;
  //   console.log(resposta);
  //   this.pesquisaService.addRespostaAspecTec({resposta});
  // }

  // respostaAspectec() {
  //   const resposta = this.firstFormGroup.get('firstCtrl').value;
  //   // this.pesquisaService.addRespostaAspecTec({resposta});
  // }

  // savePerguntaAspecTec() {
  //   const pergunta = this.postPergunta.get('pergunta').value;
  //   this.pesquisaService.addPerguntaAspecTec({pergunta});
  // }

}
