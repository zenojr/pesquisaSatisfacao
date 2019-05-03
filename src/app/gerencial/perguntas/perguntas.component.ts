import { PerguntasRep } from './../../pesquisa/perguntasRep.model';
import { PerguntasProd } from './../../pesquisa/perguntasProd.model';
import { PerguntasEmbTran } from './../../pesquisa/perguntasEmbTran.model';
import { Component, OnInit } from '@angular/core';
import { AngularFirestoreCollection, AngularFirestore } from '@angular/fire/firestore';
import { PerguntasAspecTec } from 'src/app/pesquisa/perguntasAspecTec.model';
import { Observable } from 'rxjs';
import { PerguntasComMark } from 'src/app/pesquisa/perguntasComMark.model';
import { AngularFireAuth } from 'angularfire2/auth';



@Component({
  selector: 'app-perguntas',
  templateUrl: './perguntas.component.html',
  styleUrls: ['./perguntas.component.css']
})
export class PerguntasComponent implements OnInit {
  private perguntasAspecTecCollection: AngularFirestoreCollection<PerguntasAspecTec>;
  perguntaAspecTec: Observable<PerguntasAspecTec[]>;
  private perguntasComMarkCollection: AngularFirestoreCollection<PerguntasComMark>;
  perguntaComMark: Observable<PerguntasComMark[]>;
  private perguntasEmbTranCollection:  AngularFirestoreCollection<PerguntasEmbTran>;
  perguntaEmbTran: Observable<PerguntasEmbTran[]>;
  private perguntasProdCollection: AngularFirestoreCollection<PerguntasProd>;
  perguntaProd: Observable<PerguntasProd[]>;
  private perguntasRepCollection: AngularFirestoreCollection<PerguntasRep>;
  perguntaRep: Observable<PerguntasRep[]>;

  editable = false;

  constructor( private db: AngularFirestore,  private afAuth: AngularFireAuth ) {
    this.perguntasAspecTecCollection = db.collection<PerguntasAspecTec>('perguntasAspecTec');
    this.perguntaAspecTec = this.perguntasAspecTecCollection.valueChanges();
    this.perguntasComMarkCollection = db.collection<PerguntasComMark>('perguntasComMark');
    this.perguntaComMark = this.perguntasComMarkCollection.valueChanges();
    this.perguntasEmbTranCollection = db.collection<PerguntasComMark>('perguntasComMark');
    this.perguntaEmbTran = this.perguntasEmbTranCollection.valueChanges();
    this.perguntasProdCollection = db.collection<PerguntasProd>('perguntasProd');
    this.perguntaProd = this.perguntasProdCollection.valueChanges();
    this.perguntasRepCollection = db.collection<PerguntasRep>('perguntasRep');
    this.perguntaRep = this.perguntasRepCollection.valueChanges();

   }

  ngOnInit() {
  }

  editPergunta(pergunta) {
    const perguntaOld = pergunta;
    return this.db.collection<PerguntasAspecTec>('perguntasAspectTec');
  }

  createUsers() {
    const createUsers = [
   ];

    createUsers.forEach(element => {
      console.log(element) ;
      const email = element.email;
      const password = '123456';
      const emailCNPJ = element.email;
      const cnpj = emailCNPJ.replace('@corfio.com', '');
      const nome = element.name;
      this.afAuth.auth.createUserWithEmailAndPassword( email, password ).catch(console.error);
      // this.db.collection('clientesCNPJ').doc(email).set({nome, cnpj});

    });

  }

}


