import { PerguntasAspecTec } from './perguntasAspecTec.model';
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
  // @Output() perguntasStart = new EventEmitter<void>();
  // pesquisa: Pesquisa[] = [];
  postPergunta: FormGroup;
  idPergunta;

  perguntaAspecTec: Observable<PerguntasAspecTec[]>;

  formReativo: FormGroup;

  isLinear = true;
  firstFormGroup: FormGroup;
  secondFormGroup: FormGroup;
  thirdFormGroup: FormGroup;
  forthFormGroup: FormGroup;
  fifthFormGroup: FormGroup;

  constructor(private pesquisaService: PesquisaService,
              private db: AngularFirestore,
              private _formBuilder: FormBuilder) {}

  ngOnInit() {

    this.firstFormGroup = new FormGroup({
      firstCtrl: new FormControl('')
    });

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

    this.formReativo = this._formBuilder.group({
      corfio: [''],
      outros: ['']
    });

    console.log(this.formReativo);

    this.firstFormGroup = this._formBuilder.group({
      firstCtrl: ['', Validators.required]
    });
    this.secondFormGroup = this._formBuilder.group({
      secondCtrl: ['', Validators.required]
    });
    this.thirdFormGroup = this._formBuilder.group({
      thirdCtrl: ['', Validators.required]
    });
    this.forthFormGroup = this._formBuilder.group({
      forthCtrl: ['', Validators.required]
    });
    this.fifthFormGroup = this._formBuilder.group({
      fifthCtrl: ['', Validators.required]
    });
  }

  saveRespostaAspecTec() {
    const resposta = this.firstFormGroup.get('firstCtrl').value;
    this.pesquisaService.addRespostaAspecTec({resposta});
  }

  onSubmitRespostaAspecTec() {
    const respostaCorfio = this.formReativo.get('{{driForm.pergunta}} corfio').value;
    const respostaOutros = this.formReativo.get('{{driForm.pergunta}} outros').value;
    this.pesquisaService.addRespostaAspecTec({respostaCorfio});
    this.pesquisaService.addRespostaAspecTec({respostaOutros});
  }

  onSubmitAspecTec(form) {
    let resposta = form;
    resposta = resposta.value;
    console.log(resposta);
    this.pesquisaService.addRespostaAspecTec({resposta});
  }

  respostaAspectec() {
    const resposta = this.firstFormGroup.get('firstCtrl').value;
    // this.pesquisaService.addRespostaAspecTec({resposta});
  }

  savePerguntaAspecTec() {
    const pergunta = this.postPergunta.get('pergunta').value;
    this.pesquisaService.addPerguntaAspecTec({pergunta});
  }



}
