import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class RelgchartService {

  constructor( private db: AngularFirestore ) { }

  consultaPergunta( collection, empresa, opcao  ) {
    this.db.collection( collection, ref => ref.where(empresa, '==', opcao)).valueChanges();
  }

  subscribePergunta(consulta, saida) {
    consulta.subscribe( doc => { saida = doc; } );
    return saida;
  }

}
