import { Component, OnInit } from '@angular/core';
import { GoogleChartInterface         } from 'ng2-google-charts/google-charts-interfaces';
import { RelgchartService             } from '../relgchart.service';
import { AngularFirestore,
         AngularFirestoreCollection   } from '@angular/fire/firestore';
import { map                          } from 'rxjs/operators';
import { Observable, combineLatest,
         Subscription                 } from 'rxjs';

@Component({
  selector: 'app-sats-cliente',
  templateUrl: './sats-cliente.component.html',
  styleUrls: ['./sats-cliente.component.css']
})
export class SatsClienteComponent implements OnInit {

  cnpjRespostas = [ '00103788000676',
                    '00138093000115',
                    '00172143000180'];

  constructor( private db: AngularFirestore ) { }

  ngOnInit() {
    this.consultaClienteRep(this.cnpjRespostas);
  }

  consultaClienteRep( cnpjLista ) {
    const cliente = [];

    cnpjLista.forEach( cnpj => {
      // this.db.collection(cnpj, data => data.where('respostaCorfio', '==', 'ótimo'))
      //                                      .valueChanges()
      //                                      .subscribe(doc => {contaOtimo.push(doc.length); });
      this.db.collection('clientesCNPJv2', data => data.where( 'cnpj',  '==', cnpj ))
                                                       .valueChanges()
                                                       .subscribe( doc => console.log(doc) );

      this.db.collection('clientesCNPJv2', data => data.where( 'cnpj',  '==', cnpj ))
                                                       .snapshotChanges()
                                                       .pipe(map( arr => {
                                                         return arr.map( snap => {
                                                           {
                                                             let id = snap.payload.doc.id;

                                                           }
                                                         });
                                                       }))
                                                       .subscribe()
    });
  }

  // respObs() {
  //   const pergunta = 'Qual o principal motivo (o mais importante) que o leva a comprar de outro fabricante?';

  //   this.obsCol        = this.db.collection(pergunta);
  //   this.obsObservable = this.obsCol.snapshotChanges().pipe(
  //     map(array => {
  //       return array.map( snap => {
  //         return {
  //                 data: snap.payload.doc.data(),
  //                   id: snap.payload.doc.id,
  //           observacao: snap.payload.doc.data()['observacao']
  //         };
  //       });
  //     }));

  //   this.obsSubs = this.obsObservable.subscribe( obs => {
  //     return obs;
  //   });

}
