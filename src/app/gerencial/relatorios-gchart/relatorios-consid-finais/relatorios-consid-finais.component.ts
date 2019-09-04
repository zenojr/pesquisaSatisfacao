import { Component, OnInit, OnDestroy } from '@angular/core';
import { GoogleChartInterface         } from 'ng2-google-charts/google-charts-interfaces';
import { RelgchartService             } from '../relgchart.service';
import { AngularFirestore,
         AngularFirestoreCollection   } from '@angular/fire/firestore';
import { map                          } from 'rxjs/operators';
import { Observable, combineLatest,
         Subscription                 } from 'rxjs';

export interface Observacao {
          id: string;
  observacao: string;
}

export interface Clientes {
    cnpj: string;
   email: string;
  estado: string;
}

@Component({
     selector:  'app-relatorios-consid-finais',
  templateUrl:  './relatorios-consid-finais.component.html',
    styleUrls: ['./relatorios-consid-finais.component.css']
})
export class RelatoriosConsidFinaisComponent implements OnInit {

  graphCompraFab: GoogleChartInterface;

          obsCol:  AngularFirestoreCollection<Observacao>;
   obsObservable:  Observable<Observacao[]>;
         obsSubs:  Subscription;

        recebeId: any;

     showProg = true;
  alreadyLoad = false;
  constructor(private db: AngularFirestore,
              private relService: RelgchartService) { }

  ngOnInit() {

  }

  loadRespConsidFinais() {
    this.showProg = true;
    setTimeout(() => { this.showProg = false; }, 3000 );
    if (!this.alreadyLoad) {
      this.respPresEmbProd();
      this.respObs();
      this.alreadyLoad = true;
    }
  }

  respObs() {
    const pergunta = 'Qual o principal motivo (o mais importante) que o leva a comprar de outro fabricante?';

    this.obsCol        = this.db.collection(pergunta);
    this.obsObservable = this.obsCol.snapshotChanges().pipe(
      map(array => {
        return array.map( snap => {
          return {
                  data: snap.payload.doc.data(),
                    id: snap.payload.doc.id,
            observacao: snap.payload.doc.data()['observacao']
          };
        });
      }));

    this.obsSubs = this.obsObservable.subscribe( obs => {
      return obs;
    });


    // const combineLatest =  combineLatest<any[]>()
  }

  respPresEmbProd() {
    let atendRep      = 0;
    let qualTec       = 0;
    let aceitProd     = 0;
    let prazoEnt      = 0;
    let preco         = 0;
    let atendFab      = 0;
    const customQuest = null;
    const pergunta    = 'Qual o principal motivo (o mais importante) que o leva a comprar de outro fabricante?';

    this.db.collection(pergunta, ref => ref
                                     .where( 'resposta', '==', 'Atendimento do representante' ))
                                     .valueChanges()
                                     .subscribe( doc => atendRep = doc.length );
    this.db.collection(pergunta, ref => ref
                                     .where( 'resposta', '==', 'Qualidade técnica do produto' ))
                                     .valueChanges()
                                     .subscribe(doc => qualTec = doc.length );

    this.db.collection(pergunta, ref => ref
                                     .where( 'resposta', '==', 'Aceitação do produto no mercado' ))
                                     .valueChanges()
                                     .subscribe(doc => aceitProd = doc.length);
    this.db.collection(pergunta, ref => ref
                                     .where( 'resposta', '==', 'Prazo de entrega' ))
                                     .valueChanges()
                                     .subscribe(doc => prazoEnt = doc.length);

    this.db.collection(pergunta, ref => ref
                                     .where( 'resposta', '==', 'Preço' ))
                                     .valueChanges()
                                     .subscribe(doc => preco = doc.length);
    this.db.collection(pergunta, ref => ref
                                     .where( 'resposta', '==', 'Atendimento da fábrica' ))
                                     .valueChanges()
                                     .subscribe(doc => atendFab = doc.length);


    setTimeout(() => {
      const totalizador   = 100 / ( atendRep + qualTec + aceitProd + prazoEnt + preco + atendFab );
      const percAtendRep  = (totalizador * atendRep ).toFixed(0);
      const percQualTec   = (totalizador * qualTec  ).toFixed(0);
      const percAceitProd = (totalizador * aceitProd).toFixed(0);
      const percPrazoEnt  = (totalizador * prazoEnt ).toFixed(0);
      const percPreco     = (totalizador * preco    ).toFixed(0);

      const numbAtendRep  = parseInt(percAtendRep,  10);
      const numbQualTec   = parseInt(percQualTec,   10);
      const numbAceitProd = parseInt(percAceitProd, 10);
      const numbPrazoEnt  = parseInt(percPrazoEnt,  10);
      const numbPreco     = parseInt(percPreco,     10);


      this.graphCompraFab = {
        chartType: 'ColumnChart',
        dataTable:  [
        ['opcao',                         'Corfio',     {role: 'annotation'} ],
        ['Atendimento Representante', numbAtendRep,  percAtendRep  + '%'  ],
        ['Qualidade Técnica',         numbQualTec,   percQualTec   + '%'  ],
        ['Aceitação do Produto',      numbAceitProd, percAceitProd + '%'  ],
        ['Prazo de Entrega',          numbPrazoEnt,  percPrazoEnt  + '%'  ],
        ['Preço',                     numbPreco,     percPreco     + '%'  ]
        ],
        // opt_firstRowIsData: true,
        options: {
          title: 'Qual o principal motivo (o mais importante) que o leva a comprar de outro fabricante?',
          animation: {
            duration: 1000,
            easing: 'out',
            startup: true
          }
        },
      };

    }, 3000);
  }

  OnDestroy(): void {
    // Called once, before the instance is destroyed.
    // Add 'implements OnDestroy' to the class.
    this.obsSubs.unsubscribe();
  }

}
