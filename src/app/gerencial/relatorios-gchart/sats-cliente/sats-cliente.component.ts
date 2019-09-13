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
                                                       .valueChanges().subscribe( doc => console.log(doc) );
    });

  }

}
