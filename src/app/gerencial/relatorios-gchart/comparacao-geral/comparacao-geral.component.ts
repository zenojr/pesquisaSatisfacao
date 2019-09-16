import { Component, OnInit, OnDestroy } from '@angular/core';
import { GoogleChartInterface         } from 'ng2-google-charts/google-charts-interfaces';
import { RelgchartService             } from '../relgchart.service';
import { AngularFirestore,
         AngularFirestoreCollection   } from '@angular/fire/firestore';
import { map                          } from 'rxjs/operators';
import { Observable, combineLatest,
         Subscription                 } from 'rxjs';


@Component({
     selector:  'app-comparacao-geral',
  templateUrl:  './comparacao-geral.component.html',
    styleUrls: ['./comparacao-geral.component.css']
})
export class ComparacaoGeralComponent implements OnInit {

         graphDevolv: GoogleChartInterface;
      graphCompGeral: GoogleChartInterface;
   graphDevXEntregue: GoogleChartInterface;
   graphGerTendOtimo: GoogleChartInterface;
     graphGerTendBom: GoogleChartInterface;
 graphGerTendRegular: GoogleChartInterface;
    graphGerTendRuim: GoogleChartInterface;
         graphAspTec: GoogleChartInterface;
            graphRep: GoogleChartInterface;
           graphProd: GoogleChartInterface;
       graphAtendCom: GoogleChartInterface;
       graphEmbTrans: GoogleChartInterface;

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

  perguntasEmbTrans = ['Atendimento das transportadoras',
                       'Preservação física dos produtos',
                       'Preservação das embalagens dos produtos no recebimento (Carretéis, embalagens plásticas, sacarias e paletizações)'];

  perguntasAtendCom = ['Atendimento do setor comercial na fábrica',
                       'Pontualidade no prazo de embarque ofertado (desde a liberação do crédito até a saída da fábrica)',
                       'Pontualidade na entrega',
                       'Quantidade recebida X quantidade pedida',
                       'Você indicaria nossos produtos e(ou) serviços a outros profissionais?',
                       'Você está satisfeito com a nossa disposição em ajudar?',];

      perguntasProd = ['Aceitação dos produtos no mercado',
                       'Conceito do produto junto ao usuário',
                       'Os produtos são conhecidos?'];

        perguntasRep = ['Cordialidade (gentileza) apresentada pelo representante',
                        'Eficiência em resolver problemas e atender solicitações',
                        'Receptividade em situação de reclamações e sugestões',
                        'Freqüência de visitas do representante atende a necessidade ?',
                        'Facilidade de localização do representante'];

   perguntasAspecTec = ['Funcionalidade da embalagem dos produtos em rolos',
                        'Funcionalidade da embalagem dos produtos em bobinas',
                        'Uniformidades das características técnicas',
                        'Desempenho do produto',
                        'Identificação (etiqueta) dos produtos em rolos',
                        'Identificação (etiqueta) dos produtos em bobinas',
                        'Assistência Técnica',
                        'Identificação (gravação) nos produtos'];

  constructor( private db: AngularFirestore, private relService: RelgchartService ) {}

  ngOnInit() {

  }

  loadCompGeral() {
    this.showProg = true;
    setTimeout(() => { this.showProg = false; }, 8000 );

    if (!this.alreadyLoad) {
      this.loadRespostas(this.perguntas);
      this.loadAspecTec(this.perguntasAspecTec);
      this.loadRep(this.perguntasRep);
      this.loadProd(this.perguntasProd);
      this.loadAtendCom(this.perguntasAtendCom);
      this.loadEmbTrans(this.perguntasEmbTrans);
      this.alreadyLoad = true;
    }
  }

  loadEmbTrans(perguntasEmbTrans) {
    const contaOtimo   = [];
    const contaBom     = [];
    const contaRegular = [];
    const contaRuim    = [];

    perguntasEmbTrans.forEach(ref => {
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

        const reducer     = (acc, current) => acc + current;
        const somaOtimo   = contaOtimo.reduce(reducer);
        const somaBom     = contaBom.reduce(reducer);
        const somaRegular = contaRegular.reduce(reducer);
        const somaRuim    = contaRuim.reduce(reducer);

        const totRep    = 100 / (somaOtimo + somaBom + somaRegular + somaRuim);
        const otmBom = ((somaOtimo + somaBom) * totRep).toFixed(0);

        this.graphAtendCom = {
          chartType: 'LineChart',
          dataTable:  [
          ['opcao',        'Ótimo/Bom',    {role: 'annotation'},  'Meta',    {role: 'annoaMetan'}  ],
          ['2012',            84,            84  + '%',        85,            85  + '%'],
          ['2013',            78,            78  + '%',        85,            85  + '%'],
          ['2014',            83,            83  + '%',        85,            85  + '%'],
          ['2015',            84,            84  + '%',        85,            85  + '%'],
          ['2016',            94,            94  + '%',        85,            85  + '%'],
          ['2017',            94,            94  + '%',        85,            85  + '%'],
          ['2018',            85,            85  + '%',        85,            85  + '%'],
          ['2019',          otmBom,      otmBom  + '%',        85,            85  + '%']
          ],
          // opt_firstRowIsData: true,
          options: {
            title: 'Embalagem e Transporte - Bom e Ótimo',
          animation: {
            duration: 1000,
              easing: 'in',
             startup: true
          }
          },
        };

      }, 8000);

    });
  }

  loadAtendCom(perguntasAtendCom) {
    const contaOtimo   = [];
    const contaBom     = [];
    const contaRegular = [];
    const contaRuim    = [];

    perguntasAtendCom.forEach(ref => {
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

        const reducer     = (acc, current) => acc + current;
        const somaOtimo   = contaOtimo.reduce(reducer);
        const somaBom     = contaBom.reduce(reducer);
        const somaRegular = contaRegular.reduce(reducer);
        const somaRuim    = contaRuim.reduce(reducer);

        const totRep    = 100 / (somaOtimo + somaBom + somaRegular + somaRuim);
        const otmBom = ((somaOtimo + somaBom) * totRep).toFixed(0);

        this.graphAtendCom = {
          chartType: 'LineChart',
          dataTable:  [
          ['opcao',        'Ótimo/Bom',    {role: 'annotation'},  'Meta',    {role: 'annoaMetan'}  ],
          ['2012',            84,            84  + '%',        85,            85  + '%'],
          ['2013',            78,            78  + '%',        85,            85  + '%'],
          ['2014',            83,            83  + '%',        85,            85  + '%'],
          ['2015',            84,            84  + '%',        85,            85  + '%'],
          ['2016',            94,            94  + '%',        85,            85  + '%'],
          ['2017',            94,            94  + '%',        85,            85  + '%'],
          ['2018',            85,            85  + '%',        85,            85  + '%'],
          ['2019',          otmBom,      otmBom  + '%',        85,            85  + '%']
          ],
          // opt_firstRowIsData: true,
          options: {
            title: 'Atendimento Comercial - Bom e Ótimo',
          animation: {
            duration: 1000,
              easing: 'in',
             startup: true
          }
          },
        };

      }, 8000);

    });
  }

  loadProd(perguntasProd) {
    const contaOtimo   = [];
    const contaBom     = [];
    const contaRegular = [];
    const contaRuim    = [];

    perguntasProd.forEach(ref => {
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

        const reducer     = (acc, current) => acc + current;
        const somaOtimo   = contaOtimo.reduce(reducer);
        const somaBom     = contaBom.reduce(reducer);
        const somaRegular = contaRegular.reduce(reducer);
        const somaRuim    = contaRuim.reduce(reducer);

        const totRep    = 100 / (somaOtimo + somaBom + somaRegular + somaRuim);
        const otmBom = ((somaOtimo + somaBom) * totRep).toFixed(0);

        this.graphProd = {
          chartType: 'LineChart',
          dataTable:  [
          ['opcao',        'Ótimo/Bom',    {role: 'annotation'},  'Meta',    {role: 'annoaMetan'}  ],
          ['2012',            91,            91  + '%',        85,            85  + '%'],
          ['2013',            97,            97  + '%',        85,            85  + '%'],
          ['2014',            94,            94  + '%',        85,            85  + '%'],
          ['2015',            94,            94  + '%',        85,            85  + '%'],
          ['2016',            96,            96  + '%',        85,            85  + '%'],
          ['2017',            97,            97  + '%',        85,            85  + '%'],
          ['2018',            96,            96  + '%',        85,            85  + '%'],
          ['2019',          otmBom,      otmBom  + '%',        85,            85  + '%']
          ],
          // opt_firstRowIsData: true,
          options: {
            title: 'Imagem dos Produtos Corfio - Bom e Ótimo',
          animation: {
            duration: 1000,
              easing: 'in',
             startup: true
          }
          },
        };

      }, 8000);

    });
  }


  loadRep(perguntasRep) {
    const contaOtimo   = [];
    const contaBom     = [];
    const contaRegular = [];
    const contaRuim    = [];

    perguntasRep.forEach(ref => {
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

        const reducer     = (acc, current) => acc + current;
        const somaOtimo   = contaOtimo.reduce(reducer);
        const somaBom     = contaBom.reduce(reducer);
        const somaRegular = contaRegular.reduce(reducer);
        const somaRuim    = contaRuim.reduce(reducer);

        const totRep    = 100 / (somaOtimo + somaBom + somaRegular + somaRuim);
        const otmBom = ((somaOtimo + somaBom) * totRep).toFixed(0);

        this.graphRep = {
          chartType: 'LineChart',
          dataTable:  [
          ['opcao',        'Ótimo/Bom',    {role: 'annotation'},  'Meta',    {role: 'annoaMetan'}  ],
          ['2012',            97,            97  + '%',        85,            85  + '%'],
          ['2013',            95,            95  + '%',        85,            85  + '%'],
          ['2014',            96,            96  + '%',        85,            85  + '%'],
          ['2015',            96,            96  + '%',        85,            85  + '%'],
          ['2016',            98,            98  + '%',        85,            85  + '%'],
          ['2017',            99,            99  + '%',        85,            85  + '%'],
          ['2018',            93,            93  + '%',        85,            85  + '%'],
          ['2019',          otmBom,      otmBom  + '%',        85,            85  + '%']
          ],
          // opt_firstRowIsData: true,
          options: {
            title: 'Atendimento dos Representantes - Bom e Ótimo',
          animation: {
            duration: 1000,
              easing: 'in',
             startup: true
          }
          },
        };

      }, 8000);

    });
  }


  loadAspecTec(perguntasAspec) {
    const contaOtimo   = [];
    const contaBom     = [];
    const contaRegular = [];
    const contaRuim    = [];

    perguntasAspec.forEach(ref => {
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

        const reducer     = (acc, current) => acc + current;
        const somaOtimo   = contaOtimo.reduce(reducer);
        const somaBom     = contaBom.reduce(reducer);
        const somaRegular = contaRegular.reduce(reducer);
        const somaRuim    = contaRuim.reduce(reducer);

        const totAsp    = 100 / (somaOtimo + somaBom + somaRegular + somaRuim);
        const otmBom = ((somaOtimo + somaBom) * totAsp).toFixed(0);

        this.graphAspTec = {
          chartType: 'LineChart',
          dataTable:  [
          ['opcao',        'Ótimo/Bom',    {role: 'annotation'},  'Meta',    {role: 'annoaMetan'}  ],
          ['2012',            97,            97  + '%',        85,            85  + '%'],
          ['2013',            95,            95  + '%',        85,            85  + '%'],
          ['2014',            96,            96  + '%',        85,            85  + '%'],
          ['2015',            96,            96  + '%',        85,            85  + '%'],
          ['2016',            98,            98  + '%',        85,            85  + '%'],
          ['2017',            99,            99  + '%',        85,            85  + '%'],
          ['2018',            93,            93  + '%',        85,            85  + '%'],
          ['2019',          otmBom,      otmBom  + '%',        85,            85  + '%']
          ],
          // opt_firstRowIsData: true,
          options: {
            title: 'Aspectos Técnicos - Bom e Ótimo',
          animation: {
            duration: 1000,
              easing: 'in',
             startup: true
          }
          },
        };

      }, 8000);

    });
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
        const reducer     = (acc, current) => acc + current;
        const somaOtimo   = contaOtimo.reduce(reducer);
        const somaBom     = contaBom.reduce(reducer);
        const somaRegular = contaRegular.reduce(reducer);
        const somaRuim    = contaRuim.reduce(reducer);

        const totalizador = 100 / (somaOtimo + somaBom + somaRegular + somaRuim);

        const percOtimo   = (totalizador * somaOtimo).toFixed(0);
        const percBom     = (totalizador * somaBom).toFixed(0);
        const percRegular = (totalizador * somaRegular).toFixed(0);
        const percRuim    = (totalizador * somaRuim).toFixed(0);

        const numbOtimo   = parseInt( percOtimo, 10 );
        const numbBom     = parseInt( percBom, 10 );
        const numbRegular = parseInt( percRegular, 10 );
        const numbRuim    = parseInt( percRuim, 10 );

        this.graphCompGeral = {
          chartType: 'ColumnChart',
          dataTable:  [
          // tslint:disable-next-line:max-line-length
          ['opcao', 'Ótimo',  {role: 'annotation'}, 'Bom', {role: 'annotation'}, 'Regular', {role: 'annotation'}, 'Ruim', {role: 'annotation'} ],
          // tslint:disable-next-line:max-line-length
          ['2005',     35,           35    + '%',    45  ,        45   + '%',       15 ,              15  + '%',    5  ,          5   + '%'  ],
          // tslint:disable-next-line:max-line-length
          ['2006',     49,           49    + '%',    42  ,        42   + '%',       7  ,              7   + '%',    1  ,          1   + '%'  ],
          // tslint:disable-next-line:max-line-length
          ['2008',     44,           44    + '%',    43  ,        43   + '%',       10 ,              10  + '%',    3  ,          3   + '%'  ],
          // tslint:disable-next-line:max-line-length
          ['2010',     45,           45    + '%',    45  ,        45   + '%',       8  ,              8   + '%',    2  ,          2   + '%'  ],
          // tslint:disable-next-line:max-line-length
          ['2011',     47,           47    + '%',    46  ,        46   + '%',       7  ,              7   + '%',    0  ,          0   + '%'  ],
          // tslint:disable-next-line:max-line-length
          ['2012',     47,           47    + '%',    44  ,        44   + '%',       8  ,              8   + '%',    2  ,          2   + '%'  ],
          // tslint:disable-next-line:max-line-length
          ['2013',     44,           44    + '%',    45  ,        45   + '%',       9  ,              9   + '%',    2  ,          2   + '%'  ],
          // tslint:disable-next-line:max-line-length
          ['2013',     44,           44    + '%',    45  ,        45   + '%',       9  ,              9   + '%',    2  ,          2   + '%'  ],
          // tslint:disable-next-line:max-line-length
          ['2014',     49,           49    + '%',    42  ,        42   + '%',       7  ,              7   + '%',    2  ,          2   + '%'  ],
          // tslint:disable-next-line:max-line-length
          ['2015',     51.2,         51.2  + '%',    40.8,        40.8 + '%',       6.9,              6.9 + '%',    1.1,          1.1 + '%'  ],
          // tslint:disable-next-line:max-line-length
          ['2016',     55.4,         55.4  + '%',    39.9,        39.9 + '%',       3.8,              3.8 + '%',    0.9,          0.9 + '%'  ],
          // tslint:disable-next-line:max-line-length
          ['2017',     52.6,         52.6  + '%',    42.8,        42.8 + '%',       3.6,              3.6 + '%',    1.1,          1.1 + '%'  ],
          // tslint:disable-next-line:max-line-length
          ['2018',     45.1,         45.1  + '%',    45.4,        45.4 + '%',       7.0,              7.0 + '%',    2.4,          2.4 + '%'  ],
          // tslint:disable-next-line:max-line-length
          ['2019',  numbOtimo,  percOtimo  + '%',  numbBom,    percBom + '%',   numbRegular,  percRegular + '%', numbRuim,   percRuim + '%'  ],
          ],
          // opt_firstRowIsData: true,
          options: {
            title: 'Comparação Geral 2019',
            animation: {
              duration: 1000,
              easing: 'out',
              startup: true
            }
          },
        };

        // LOAD GRAPH Quest Dev x Env
        this.graphDevXEntregue = {
          chartType:  'ColumnChart',
          dataTable:  [
          ['opcao',                   '',  {role: 'annotation'}],
          ['Pesquisas Enviadas',     1000,        1000         ],
          ['Pesquisas Recebidas',     143,        143          ]
          ],
          // opt_firstRowIsData: true,
          options: {
            title: 'Questionários Enviados X Questionários Devolvidos',
          animation: {
            duration: 1000,
              easing: 'in',
             startup: true
          }
          },
        };

        // graph devolv x meta
        const totEnv = 1000;
        const fatConv = totEnv / 100;
        const totRec = 143;
        const meta   = 200;
        const percMeta = meta  / fatConv;
        const percRec = totRec /  fatConv;
        this.graphDevolv = {
          chartType: 'ColumnChart',
          dataTable:  [
          ['opcao',              'Pesquisas recebidas',  {role: 'annotation'}  ],
          ['Pesquisas Recebidas',         percRec,          percRec  + '%'],
          ['Meta',                        percMeta,         percMeta + '%']
          ],
          // opt_firstRowIsData: true,
          options: {
            title: 'Questionários Devolvidos(Meta)',
            series: {4: {type: 'line'}},
          animation: {
            duration: 1000,
              easing: 'in',
             startup: true
          }
          },
        };

        this.graphDevolv = {
          chartType: 'ColumnChart',
          dataTable:  [
          ['opcao',              'Pesquisas recebidas',  {role: 'annotation'}  ],
          ['Pesquisas Recebidas',         percRec,          percRec  + '%'],
          ['Meta',                        percMeta,         percMeta + '%']
          ],
          // opt_firstRowIsData: true,
          options: {
            title: 'Questionários Devolvidos(Meta)',
          animation: {
            duration: 1000,
              easing: 'in',
             startup: true
          }
          },
        };

        this.graphGerTendOtimo = {
          chartType: 'LineChart',
          dataTable:  [
          ['opcao',        'Ótimo',           {role: 'annotation'}  ],
          ['2000',            38,                    38  + '%'],
          ['2001',            36,                    36  + '%'],
          ['2002',            34,                    34  + '%'],
          ['2003',            41,                    41  + '%'],
          ['2004',            43,                    43  + '%'],
          ['2005',            35,                    35  + '%'],
          ['2006',            49,                    49  + '%'],
          ['2008',            44,                    44  + '%'],
          ['2010',            45,                    45  + '%'],
          ['2011',            47,                    47  + '%'],
          ['2012',            47,                    47  + '%'],
          ['2013',            44,                    44  + '%'],
          ['2014',            49,                    49  + '%'],
          ['2015',            51.2,                  51.2 + '%'],
          ['2016',            55.4,                  55.4 + '%'],
          ['2017',            52.6,                  52.6 + '%'],
          ['2018',            45.1,                  45.1 + '%'],
          ['2019',            57,                    57   + '%']
          ],
          // opt_firstRowIsData: true,
          options: {
            title: 'Ótimo',
          animation: {
            duration: 1000,
              easing: 'in',
             startup: true
          }
          },
        };

        this.graphGerTendBom = {
          chartType: 'LineChart',
          dataTable:  [
          ['opcao',         'Bom',           {role: 'annotation'}  ],
          ['2000',            51,                    51  + '%'],
          ['2001',            47,                    47  + '%'],
          ['2002',            56,                    56  + '%'],
          ['2003',            49,                    49  + '%'],
          ['2004',            46,                    46  + '%'],
          ['2005',            45,                    45  + '%'],
          ['2006',            42,                    42  + '%'],
          ['2008',            43,                    43  + '%'],
          ['2010',            45,                    45  + '%'],
          ['2011',            46,                    46  + '%'],
          ['2012',            44,                    44  + '%'],
          ['2013',            45,                    45  + '%'],
          ['2014',            42,                    42  + '%'],
          ['2015',            40.8,                  40.8 + '%'],
          ['2016',            39.9,                  39.9 + '%'],
          ['2017',            42.8,                  42.8 + '%'],
          ['2018',            45.4,                  45.4 + '%'],
          ['2019',            37,                    37   + '%']
          ],
          // opt_firstRowIsData: true,
          options: {
            title: 'Bom',
            colors: ['green'],
          animation: {
            duration: 1000,
              easing: 'in',
             startup: true,
          }
          },
        };

        this.graphGerTendRegular = {
          chartType: 'LineChart',
          dataTable:  [
          ['opcao',         'Regular',           {role: 'annotation'}  ],
          ['2000',            9,                    9  + '%'],
          ['2001',            16,                  16  + '%'],
          ['2002',            8,                    8  + '%'],
          ['2003',            9,                    9  + '%'],
          ['2004',            9,                    9  + '%'],
          ['2005',            15,                  15  + '%'],
          ['2006',            7,                    7  + '%'],
          ['2008',            10,                  10  + '%'],
          ['2010',            8,                    8  + '%'],
          ['2011',            7,                    7  + '%'],
          ['2012',            8,                    8  + '%'],
          ['2013',            9,                    9  + '%'],
          ['2014',            7,                    7  + '%'],
          ['2015',            6.9,                 6.9 + '%'],
          ['2016',            3.8,                 3.8 + '%'],
          ['2017',            3.6,                 3.6 + '%'],
          ['2018',            7.0,                 7.0 + '%'],
          ['2019',            4,                   4   + '%']
          ],
          // opt_firstRowIsData: true,
          options: {
            title: 'Regular',
            colors: ['orange'],
          animation: {
            duration: 1000,
              easing: 'in',
             startup: true,
          }
          },
        };

        this.graphGerTendRuim = {
          chartType: 'LineChart',
          dataTable:  [
          ['opcao',         'Ruim',           {role: 'annotation'}  ],
          ['2000',            2,                    2  + '%'],
          ['2001',            1,                    1  + '%'],
          ['2002',            2,                    2  + '%'],
          ['2003',            1,                    1  + '%'],
          ['2004',            2,                    2  + '%'],
          ['2005',            5,                    5  + '%'],
          ['2006',            1,                    1  + '%'],
          ['2008',            3,                    3  + '%'],
          ['2010',            2,                    2  + '%'],
          ['2011',            0,                    0  + '%'],
          ['2012',            2,                    2  + '%'],
          ['2013',            2,                    2  + '%'],
          ['2014',            2,                    2  + '%'],
          ['2015',            1.1,                 1.1 + '%'],
          ['2016',            0.9,                 0.9 + '%'],
          ['2017',            1.1,                 1.1 + '%'],
          ['2018',            2.4,                 2.4 + '%'],
          ['2019',            1,                   1   + '%']
          ],
          // opt_firstRowIsData: true,
          options: {
            title: 'Ruim',
            colors: ['red'],
          animation: {
            duration: 1000,
              easing: 'in',
             startup: true,
          }
          },
        };


      }, 8000);

    });
  }

  }
