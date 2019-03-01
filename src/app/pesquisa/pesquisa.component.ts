import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AngularFirestore, AngularFirestoreDocument } from '@angular/fire/firestore';
import { Observable } from 'rxjs';



@Component({
  selector: 'app-pesquisa',
  templateUrl: './pesquisa.component.html',
  styleUrls: ['./pesquisa.component.css']
})
export class PesquisaComponent implements OnInit {

  isLinear = true;
  firstFormGroup: FormGroup;
  secondFormGroup: FormGroup;
  thirdFormGroup: FormGroup;
  forthFormGroup: FormGroup;
  fifthFormGroup: FormGroup;




  constructor( db: AngularFirestore,  private _formBuilder: FormBuilder) {
    db.collection('pesquisa').valueChanges().subscribe(
      data=>(console.log(data))
    );
   }


  ngOnInit() {


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

}
