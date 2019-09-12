import { Component, OnInit, OnDestroy } from '@angular/core';
import { GoogleChartInterface         } from 'ng2-google-charts/google-charts-interfaces';
import { RelgchartService             } from '../relgchart.service';
import { AngularFirestore,
         AngularFirestoreCollection   } from '@angular/fire/firestore';
import { map                          } from 'rxjs/operators';
import { Observable, combineLatest,
         Subscription                 } from 'rxjs';



export interface RespostasQuery {
  respostaCorfio: string;
  respostaOutros: string;
}

@Component({
     selector:  'app-comparacao-geral',
  templateUrl:  './comparacao-geral.component.html',
    styleUrls: ['./comparacao-geral.component.css']
})
export class ComparacaoGeralComponent implements OnInit {

      graphCompGeral: GoogleChartInterface;

   respostaColection: AngularFirestoreCollection<RespostasQuery>;
  respostaObservable: Observable<RespostasQuery[]>;
            respSubs: Subscription;

           showProg = true;
        alreadyLoad = false;

          perguntas = ['Funcionalidade da embalagem dos produtos em rolos',
                       'Funcionalidade da embalagem dos produtos em bobinas',
                       'Uniformidades das características técnicas',
                       'Desempenho do produto',
                       'Identificação (etiqueta) dos produtos em rolos',
                       'Identificação (etiqueta) dos produtos em bobinas',
                       'Assistência Técnica',
                       'Identificação (gravação) nos produtos',
                       'Cordialidade (gentileza) apresentada pelo representante',
                       'Eficiência em resolver problemas e atender solicitações',
                       'Receptividade em situação de reclamações e sugestões',
                       'Freqüência de visitas do representante atende a necessidade ?',
                       'Facilidade de localização do representante',
                       'Aceitação dos produtos no mercado',
                       'Conceito do produto junto ao usuário',
                       'Os produtos são conhecidos?',
                       'Atendimento do setor comercial na fábrica',
                       'Pontualidade no prazo de embarque ofertado (desde a liberação do crédito até a saída da fábrica)',
                       'Pontualidade na entrega',
                       'Quantidade recebida X quantidade pedida',
                       'Você indicaria nossos produtos e(ou) serviços a outros profissionais?',
                       'Você está satisfeito com a nossa disposição em ajudar?',
                       'Atendimento das transportadoras',
                       'Preservação física dos produtos',
                       'Preservação das embalagens dos produtos no recebimento (Carretéis, embalagens plásticas, sacarias e paletizações)'
                        ];

  constructor( private db: AngularFirestore, private relService: RelgchartService ) {}

  ngOnInit() {

  }


  loadCompGeral() {
    this.showProg = true;
    setTimeout(() => { this.showProg = false; }, 3000 );

    if (!this.alreadyLoad) {
      // this.loadGeral(this.perguntas);
      this.loadRespostas(this.perguntas);
      this.alreadyLoad = true;
    }
  }

  loadRespostas(perguntas) {
    const contaOtimo   = [];
    const contaBom     = [];
    const contaRegular = [];
    const contaRuim    = [];

    perguntas.forEach(ref => {
      const question = ref;


      this.db.collection(question, data => data.where('respostaCorfio', '==', 'ótimo'))
                                                .valueChanges()
                                                .subscribe(doc => {contaOtimo.push(doc.length); });

      this.db.collection(question, data => data.where('respostaCorfio', '==', 'bom'))
                                                .valueChanges()
                                                .subscribe(doc => {contaBom.push(doc.length); });

      this.db.collection(question, data => data.where('respostaCorfio', '==', 'regular'))
                                                .valueChanges()
                                                .subscribe(doc => {contaRegular.push(doc.length); });

      this.db.collection(question, data => data.where('respostaCorfio', '==', 'ruim'))
                                                .valueChanges()
                                                .subscribe(doc => {contaRuim.push(doc.length); });

      setTimeout(() => {
        const reducer = (acc, current) => acc + current;
        const somaOtimo = contaOtimo.reduce(reducer);
        const somaBom = contaBom.reduce(reducer);
        const somaRegular = contaRegular.reduce(reducer);
        const somaRuim = contaRuim.reduce(reducer);

        console.log(somaOtimo, somaBom, somaRegular, somaRuim);
        const totalizador = 100 / (somaOtimo + somaBom + somaRegular + somaRuim);

        const percOtimo = (totalizador * somaOtimo).toFixed(0);
        const percBom = (totalizador * somaBom).toFixed(0);
        const percRegular = (totalizador * somaRegular).toFixed(0);
        const percRuim = (totalizador * somaRuim).toFixed(0);

        const numbOtimo = parseInt( percOtimo, 10 );
        const numbBom = parseInt( percBom, 10 );
        const numbRegular = parseInt( percRegular, 10 );
        const numbRuim = parseInt( percRuim, 10 );

        this.graphCompGeral = {
          chartType: 'ColumnChart',
          dataTable:  [
          // tslint:disable-next-line:max-line-length
          ['opcao', 'Ótimo',  {role: 'annotation'}, 'Bom', {role: 'annotation'}, 'Regular', {role: 'annotation'}, 'Ruim', {role: 'annotation'} ],
          // tslint:disable-next-line:max-line-length
          ['2019',  numbOtimo,  percOtimo  + '%',  numbBom,    percBom + '%',   numbRegular,  percRegular + '%', numbRuim,   percRuim + '%'  ]
          ],
          // opt_firstRowIsData: true,
          options: {
            title: 'Comparação Geral',
            animation: {
              duration: 1000,
              easing: 'out',
              startup: true
            }
          },
        };

      }, 3000);


    });

  }

  loadGeral(perguntas) {

    let contaOtimo = 0;

    perguntas.forEach(element => {
      const pergunta = element;
      this.respostaColection  = this.db.collection(pergunta, ref => ref
                                      .where('respostaCorfio', '==', 'ótimo'));

      this.db.collection(pergunta, ref => ref
                                        .where( 'respostaCorfio', '==', 'ótimo' ))
                                        .valueChanges()
                                        .subscribe( doc => contaOtimo = doc.length );

      setTimeout(() => {
        console.log(contaOtimo);
      }, 3000 );



      // this.respostaObservable = this.respostaColection.snapshotChanges().pipe(
      // map(array => {
      //   return array.map( snap => {
      //     return {
      //                 data: snap.payload.doc.data(),
      //                   id: snap.payload.doc.id,
      //       respostaCorfio: snap.payload.doc.data()['respostaCorfio'],
      //       respostaOutros: snap.payload.doc.data()['respostaOutros']
      //     };
      //   });
      // }));


      this.respostaObservable = this.respostaColection.snapshotChanges().pipe(
        map(array => array.map( ref => {
          const data = ref.payload.doc.data() as RespostasQuery;
          const id = ref.payload.doc.id;
          return { id, ...data };
        }))
      );

      // this.shirtCollection.snapshotChanges().pipe(
      //   map(actions => actions.map(a => {
      //     const data = a.payload.doc.data() as Shirt;
      //     const id = a.payload.doc.id;
      //     return { id, ...data };
      //   }))

      const myObserver = {
            next: x => console.log( 'Observer got value:' + x ),
           error: err => console.log( 'Observer got an error ' + err ),
        complete: () => console.log( 'Observer got a complete notification' )
      };

      // this.respostaObservable.subscribe(myObserver);

    });
    }
  }
