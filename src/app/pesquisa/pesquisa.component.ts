import { Pesquisa } from './pesquisa.model';
import { PesquisaService } from './pesquisa.service';
import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AngularFirestore, AngularFirestoreDocument } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-pesquisa',
  templateUrl: './pesquisa.component.html',
  styleUrls: ['./pesquisa.component.css']
})
export class PesquisaComponent implements OnInit {
  @Output() perguntasStart = new EventEmitter<void>();
  pesquisa: Pesquisa[] = [];

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
    this.pesquisa = this.pesquisaService.getPesquisa();
    console.log(this.pesquisa);
    // this.db
    //     .collection('perguntasAspecTec')
    //     .valueChanges()
    //     .subscribe(data => (console.log(data))
    // );

    // this.timer = setInterval(() => {
    //   this.progress = this.progress + 5;
    // }, 100);

    this.db
        .collection('perguntasAspecTec')
        .snapshotChanges()
        .pipe( map( docArray => {
                    return docArray.map( doc => {
                      return {
                        id: doc.payload.doc.id,
                        questao1: doc.payload.doc.data(),
                        questao2: doc.payload.doc.data()
                      }
                    })
                    }
                )
              )
        .subscribe(
          result => console.log(result)
        );



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

  // onStart() {
  //   this.perguntasStart.emit();
  // }

}
