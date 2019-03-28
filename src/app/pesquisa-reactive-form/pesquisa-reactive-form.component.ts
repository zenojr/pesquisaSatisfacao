import { AngularFirestore } from '@angular/fire/firestore';
import { PesquisaReactiveServiceService } from './pesquisa-reactive-service.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormArray, Validators, FormControl } from '@angular/forms';
import { Observable } from 'rxjs';
import { PerguntasAspecTec } from '../pesquisa/perguntasAspecTec.model';
import { PerguntasRep } from '../pesquisa/perguntasRep.model';
import { PerguntasProd } from '../pesquisa/perguntasProd.model';
import { PerguntasComMark } from '../pesquisa/perguntasComMark.model';
import { PerguntasEmbTran } from '../pesquisa/perguntasEmbTran.model';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-pesquisa-reactive-form',
  templateUrl: './pesquisa-reactive-form.component.html',
  styleUrls: ['./pesquisa-reactive-form.component.css']
})
export class PesquisaReactiveFormComponent implements OnInit {

  isLinear = true;
  firstFormGroup: FormGroup;
  secondFormGroup: FormGroup;
  perguntaDoForm: any;

  perguntaAspecTec: Observable<PerguntasAspecTec[]>;
  perguntasRep: Observable<PerguntasRep[]>;
  perguntasProd: Observable<PerguntasProd[]>;
  perguntasComMark: Observable<PerguntasComMark[]>;
  perguntasEmbTran: Observable<PerguntasEmbTran[]>;

  constructor(private formBuilder: FormBuilder, private pesqReacService: PesquisaReactiveServiceService, private db: AngularFirestore) { }

  ngOnInit() {
    this.firstFormGroup = this.formBuilder.group({
      user: [''],
      pergunta: [''],
      respostaCorfio: [''],
      respostaOutros: ['']
    });
    this.secondFormGroup = this.formBuilder.group({
      secondCtrl: ['']
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

  }

  saveRespAspecTec(perguntaForm) {
    const user = this.firstFormGroup.get('user').value;
    this.perguntaDoForm = perguntaForm;
    const pergunta = this.perguntaDoForm;
    console.log(pergunta);
    const respostaCorfio = this.firstFormGroup.get('respostaCorfio').value;
    const respostaOutros = this.firstFormGroup.get('respostaOutros').value;
    this.pesqReacService.add({pergunta, respostaCorfio, respostaOutros});
  }

  // getPergunta(pergunta) {
  //   this.perguntaDoForm = pergunta;
  //   console.log(this.perguntaDoForm);
  // }

}
