import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { ChartOptions, ChartType, ChartDataSets } from 'chart.js';
import { Label } from 'ng2-charts';


@Component({
  selector: 'app-atend-comerc',
  templateUrl: './atend-comerc.component.html',
  styleUrls: ['./atend-comerc.component.css']
})
export class AtendComercComponent implements OnInit {

  public barChartOptions: ChartOptions = {
    responsive: true,
    // We use these empty structures as placeholders for dynamic theming.
    scales: { xAxes: [{}], yAxes: [{}] },
    plugins: {
      datalabels: {
        anchor: 'end',
        align: 'end',
      }
    }
  };
  public barChartLabels: Label[] = ['Ótimo', 'Bom', 'Regular', 'Ruim'];
  public barChartLabelsFab: Label[] = ['Ótimo', 'Bom', 'Regular', 'Ruim', 'Não Utilizo'];
  public barChartType: ChartType = 'bar';
  public barChartLegend = true;

  public barChartAtendComDispo: ChartDataSets[] = [
    { data: [0, 0, 0, 0], label: 'Resposta Corfio' },
    { data: [0, 0, 0, 0], label: 'Resposta Outros' }
  ];

  public barChartAtendComIndi: ChartDataSets[] = [
    { data: [0, 0, 0, 0], label: 'Resposta Corfio' },
    { data: [0, 0, 0, 0], label: 'Resposta Outros' }
  ];

  public barChartAtendComQtd: ChartDataSets[] = [
    { data: [0, 0, 0, 0], label: 'Resposta Corfio' },
    { data: [0, 0, 0, 0], label: 'Resposta Outros' }
  ];

  public barChartAtendComPontEnt: ChartDataSets[] = [
    { data: [0, 0, 0, 0], label: 'Resposta Corfio' },
    { data: [0, 0, 0, 0], label: 'Resposta Outros' }
  ];

  public barChartAtendComPont: ChartDataSets[] = [
    { data: [0, 0, 0, 0], label: 'Resposta Corfio' },
    { data: [0, 0, 0, 0], label: 'Resposta Outros' }
  ];

  public barChartAtendComFab: ChartDataSets[] = [
    { data: [0, 0, 0, 0, 0], label: 'Resposta Corfio' },
    { data: [0, 0, 0, 0, 0], label: 'Resposta Outros' }
  ];

  countRespostasAtendComDispo: any;
  countRespostasAtendComIndi: any;
  countRespostasAtendComQtd: any;
  countRespostasAtendComPontEnt: any;
  countRespostasAtendComPont: any;
  countRespostasAtendComFab: any;

  panelOpenState = false;

  constructor( private db: AngularFirestore ) { }

  ngOnInit() {
  }

  loadAll() {
    this.respostasAtendComFab();
    this.respostasAtendComPont();
    this.respostasAtendComPontEnt();
    this.respostasAtendComQtd();
    this.respostasAtendComIndi();
    this.respostasAtendComDispo();
  }

  respostasAtendComDispo() {
    let otimoCorfio = 0;
    let otimoOutros = 0;
    let bomCorfio = 0;
    let bomOutros = 0;
    let regularCorfio = 0;
    let regularOutros = 0;
    let ruimCorfio = 0;
    let ruimOutros = 0;

    this.db.collection('Você está satisfeito com a nossa disposição em ajudar?', ref => ref
    .where( 'respostaCorfio', '==', 'ótimo' ))
    .valueChanges().subscribe(doc => otimoCorfio = doc.length );
    this.db.collection('Você está satisfeito com a nossa disposição em ajudar?', ref => ref
    .where( 'respostaOutros', '==', 'ótimo' ))
    .valueChanges().subscribe(doc => otimoOutros = doc.length );

    this.db.collection('Você está satisfeito com a nossa disposição em ajudar?', ref => ref
    .where( 'respostaCorfio', '==', 'bom' ))
    .valueChanges().subscribe(doc => bomCorfio = doc.length);
    this.db.collection('Você está satisfeito com a nossa disposição em ajudar?', ref => ref
    .where( 'respostaOutros', '==', 'bom' ))
    .valueChanges().subscribe(doc => bomOutros = doc.length);

    this.db.collection('Você está satisfeito com a nossa disposição em ajudar?', ref => ref
    .where( 'respostaCorfio', '==', 'regular' ))
    .valueChanges().subscribe(doc => regularCorfio = doc.length);
    this.db.collection('Você está satisfeito com a nossa disposição em ajudar?', ref => ref
    .where( 'respostaOutros', '==', 'regular' ))
    .valueChanges().subscribe(doc => regularOutros = doc.length);

    this.db.collection('Você está satisfeito com a nossa disposição em ajudar?', ref => ref
    .where( 'respostaCorfio', '==', 'ruim' ))
    .valueChanges().subscribe(doc => ruimCorfio = doc.length);
    this.db.collection('Você está satisfeito com a nossa disposição em ajudar?', ref => ref
    .where( 'respostaOutros', '==', 'ruim' ))
    .valueChanges().subscribe(doc => ruimOutros = doc.length);

    setTimeout(() => {
      this.barChartAtendComDispo = [
        { data: [otimoCorfio, bomCorfio, regularCorfio, ruimCorfio], label: 'Resposta Corfio' },
        { data: [otimoOutros, bomOutros, regularOutros, ruimOutros], label: 'Resposta Outros' }
      ];
    }, 6000);
    this.db.collection('Você está satisfeito com a nossa disposição em ajudar?',
    ref =>
     ref.orderBy( 'respostaCorfio', 'asc' ))
    .valueChanges().subscribe(doc => {
      this.countRespostasAtendComDispo = doc.length;
      console.log('contadornovo' + this.countRespostasAtendComDispo);
    } );
  }

  respostasAtendComIndi() {
    let otimoCorfio = 0;
    let otimoOutros = 0;
    let bomCorfio = 0;
    let bomOutros = 0;
    let regularCorfio = 0;
    let regularOutros = 0;
    let ruimCorfio = 0;
    let ruimOutros = 0;

    this.db.collection('Você indicaria nossos produtos e(ou) serviços a outros profissionais?', ref => ref
    .where( 'respostaCorfio', '==', 'ótimo' ))
    .valueChanges().subscribe(doc => otimoCorfio = doc.length );
    this.db.collection('Você indicaria nossos produtos e(ou) serviços a outros profissionais?', ref => ref
    .where( 'respostaOutros', '==', 'ótimo' ))
    .valueChanges().subscribe(doc => otimoOutros = doc.length );

    this.db.collection('Você indicaria nossos produtos e(ou) serviços a outros profissionais?', ref => ref
    .where( 'respostaCorfio', '==', 'bom' ))
    .valueChanges().subscribe(doc => bomCorfio = doc.length);
    this.db.collection('Você indicaria nossos produtos e(ou) serviços a outros profissionais?', ref => ref
    .where( 'respostaOutros', '==', 'bom' ))
    .valueChanges().subscribe(doc => bomOutros = doc.length);

    this.db.collection('Você indicaria nossos produtos e(ou) serviços a outros profissionais?', ref => ref
    .where( 'respostaCorfio', '==', 'regular' ))
    .valueChanges().subscribe(doc => regularCorfio = doc.length);
    this.db.collection('Você indicaria nossos produtos e(ou) serviços a outros profissionais?', ref => ref
    .where( 'respostaOutros', '==', 'regular' ))
    .valueChanges().subscribe(doc => regularOutros = doc.length);

    this.db.collection('Você indicaria nossos produtos e(ou) serviços a outros profissionais?', ref => ref
    .where( 'respostaCorfio', '==', 'ruim' ))
    .valueChanges().subscribe(doc => ruimCorfio = doc.length);
    this.db.collection('Você indicaria nossos produtos e(ou) serviços a outros profissionais?', ref => ref
    .where( 'respostaOutros', '==', 'ruim' ))
    .valueChanges().subscribe(doc => ruimOutros = doc.length);

    setTimeout(() => {
      this.barChartAtendComIndi = [
        { data: [otimoCorfio, bomCorfio, regularCorfio, ruimCorfio], label: 'Resposta Corfio' },
        { data: [otimoOutros, bomOutros, regularOutros, ruimOutros], label: 'Resposta Outros' }
      ];
    }, 6000);
    this.db.collection('Você indicaria nossos produtos e(ou) serviços a outros profissionais?',
    ref =>
     ref.orderBy( 'respostaCorfio', 'asc' ))
    .valueChanges().subscribe(doc => {
      this.countRespostasAtendComIndi = doc.length;
      console.log('contadornovo' + this.countRespostasAtendComIndi);
    } );
  }

  respostasAtendComQtd() {
    let otimoCorfio = 0;
    let otimoOutros = 0;
    let bomCorfio = 0;
    let bomOutros = 0;
    let regularCorfio = 0;
    let regularOutros = 0;
    let ruimCorfio = 0;
    let ruimOutros = 0;

    this.db.collection('Quantidade recebida X quantidade pedida', ref => ref
    .where( 'respostaCorfio', '==', 'ótimo' ))
    .valueChanges().subscribe(doc => otimoCorfio = doc.length );
    this.db.collection('Quantidade recebida X quantidade pedida', ref => ref
    .where( 'respostaOutros', '==', 'ótimo' ))
    .valueChanges().subscribe(doc => otimoOutros = doc.length );

    this.db.collection('Quantidade recebida X quantidade pedida', ref => ref
    .where( 'respostaCorfio', '==', 'bom' ))
    .valueChanges().subscribe(doc => bomCorfio = doc.length);
    this.db.collection('Quantidade recebida X quantidade pedida', ref => ref
    .where( 'respostaOutros', '==', 'bom' ))
    .valueChanges().subscribe(doc => bomOutros = doc.length);

    this.db.collection('Quantidade recebida X quantidade pedida', ref => ref
    .where( 'respostaCorfio', '==', 'regular' ))
    .valueChanges().subscribe(doc => regularCorfio = doc.length);
    this.db.collection('Quantidade recebida X quantidade pedida', ref => ref
    .where( 'respostaOutros', '==', 'regular' ))
    .valueChanges().subscribe(doc => regularOutros = doc.length);

    this.db.collection('Quantidade recebida X quantidade pedida', ref => ref
    .where( 'respostaCorfio', '==', 'ruim' ))
    .valueChanges().subscribe(doc => ruimCorfio = doc.length);
    this.db.collection('Quantidade recebida X quantidade pedida', ref => ref
    .where( 'respostaOutros', '==', 'ruim' ))
    .valueChanges().subscribe(doc => ruimOutros = doc.length);

    setTimeout(() => {
      this.barChartAtendComQtd = [
        { data: [otimoCorfio, bomCorfio, regularCorfio, ruimCorfio], label: 'Resposta Corfio' },
        { data: [otimoOutros, bomOutros, regularOutros, ruimOutros], label: 'Resposta Outros' }
      ];
    }, 6000);
    this.db.collection('Quantidade recebida X quantidade pedida',
    ref =>
     ref.orderBy( 'respostaCorfio', 'asc' ))
    .valueChanges().subscribe(doc => {
      this.countRespostasAtendComQtd = doc.length;
      console.log('contadornovo' + this.countRespostasAtendComQtd);
    } );
  }

  respostasAtendComPontEnt() {
    let otimoCorfio = 0;
    let otimoOutros = 0;
    let bomCorfio = 0;
    let bomOutros = 0;
    let regularCorfio = 0;
    let regularOutros = 0;
    let ruimCorfio = 0;
    let ruimOutros = 0;

    this.db.collection('Pontualidade na entrega', ref => ref
    .where( 'respostaCorfio', '==', 'ótimo' ))
    .valueChanges().subscribe(doc => otimoCorfio = doc.length );
    this.db.collection('Pontualidade na entrega', ref => ref
    .where( 'respostaOutros', '==', 'ótimo' ))
    .valueChanges().subscribe(doc => otimoOutros = doc.length );

    this.db.collection('Pontualidade na entrega', ref => ref
    .where( 'respostaCorfio', '==', 'bom' ))
    .valueChanges().subscribe(doc => bomCorfio = doc.length);
    this.db.collection('Pontualidade na entrega', ref => ref
    .where( 'respostaOutros', '==', 'bom' ))
    .valueChanges().subscribe(doc => bomOutros = doc.length);

    this.db.collection('Pontualidade na entrega', ref => ref
    .where( 'respostaCorfio', '==', 'regular' ))
    .valueChanges().subscribe(doc => regularCorfio = doc.length);
    this.db.collection('Pontualidade na entrega', ref => ref
    .where( 'respostaOutros', '==', 'regular' ))
    .valueChanges().subscribe(doc => regularOutros = doc.length);

    this.db.collection('Pontualidade na entrega', ref => ref
    .where( 'respostaCorfio', '==', 'ruim' ))
    .valueChanges().subscribe(doc => ruimCorfio = doc.length);
    this.db.collection('Pontualidade na entrega', ref => ref
    .where( 'respostaOutros', '==', 'ruim' ))
    .valueChanges().subscribe(doc => ruimOutros = doc.length);

    setTimeout(() => {
      this.barChartAtendComPontEnt = [
        { data: [otimoCorfio, bomCorfio, regularCorfio, ruimCorfio], label: 'Resposta Corfio' },
        { data: [otimoOutros, bomOutros, regularOutros, ruimOutros], label: 'Resposta Outros' }
      ];
    }, 6000);
    this.db.collection('Pontualidade na entrega',
    ref =>
     ref.orderBy( 'respostaCorfio', 'asc' ))
    .valueChanges().subscribe(doc => {
      this.countRespostasAtendComPontEnt = doc.length;
      console.log('contadornovo' + this.countRespostasAtendComPontEnt);
    } );
  }

  respostasAtendComPont() {
    let otimoCorfio = 0;
    let otimoOutros = 0;
    let bomCorfio = 0;
    let bomOutros = 0;
    let regularCorfio = 0;
    let regularOutros = 0;
    let ruimCorfio = 0;
    let ruimOutros = 0;

    this.db.collection('Pontualidade no prazo de embarque ofertado (desde a liberação do crédito até a saída da fábrica)', ref => ref
    .where( 'respostaCorfio', '==', 'ótimo' ))
    .valueChanges().subscribe(doc => otimoCorfio = doc.length );
    this.db.collection('Pontualidade no prazo de embarque ofertado (desde a liberação do crédito até a saída da fábrica)', ref => ref
    .where( 'respostaOutros', '==', 'ótimo' ))
    .valueChanges().subscribe(doc => otimoOutros = doc.length );

    this.db.collection('Pontualidade no prazo de embarque ofertado (desde a liberação do crédito até a saída da fábrica)', ref => ref
    .where( 'respostaCorfio', '==', 'bom' ))
    .valueChanges().subscribe(doc => bomCorfio = doc.length);
    this.db.collection('Pontualidade no prazo de embarque ofertado (desde a liberação do crédito até a saída da fábrica)', ref => ref
    .where( 'respostaOutros', '==', 'bom' ))
    .valueChanges().subscribe(doc => bomOutros = doc.length);

    this.db.collection('Pontualidade no prazo de embarque ofertado (desde a liberação do crédito até a saída da fábrica)', ref => ref
    .where( 'respostaCorfio', '==', 'regular' ))
    .valueChanges().subscribe(doc => regularCorfio = doc.length);
    this.db.collection('Pontualidade no prazo de embarque ofertado (desde a liberação do crédito até a saída da fábrica)', ref => ref
    .where( 'respostaOutros', '==', 'regular' ))
    .valueChanges().subscribe(doc => regularOutros = doc.length);

    this.db.collection('Pontualidade no prazo de embarque ofertado (desde a liberação do crédito até a saída da fábrica)', ref => ref
    .where( 'respostaCorfio', '==', 'ruim' ))
    .valueChanges().subscribe(doc => ruimCorfio = doc.length);
    this.db.collection('Pontualidade no prazo de embarque ofertado (desde a liberação do crédito até a saída da fábrica)', ref => ref
    .where( 'respostaOutros', '==', 'ruim' ))
    .valueChanges().subscribe(doc => ruimOutros = doc.length);

    setTimeout(() => {
      this.barChartAtendComPont = [
        { data: [otimoCorfio, bomCorfio, regularCorfio, ruimCorfio], label: 'Resposta Corfio' },
        { data: [otimoOutros, bomOutros, regularOutros, ruimOutros], label: 'Resposta Outros' }
      ];
    }, 6000);
    this.db.collection('Pontualidade no prazo de embarque ofertado (desde a liberação do crédito até a saída da fábrica)',
    ref =>
     ref.orderBy( 'respostaCorfio', 'asc' ))
    .valueChanges().subscribe(doc => {
      this.countRespostasAtendComPont = doc.length;
      console.log('contadornovo' + this.countRespostasAtendComPont);
    } );
  }

  respostasAtendComFab() {
    let otimoCorfio = 0;
    let otimoOutros = 0;
    let bomCorfio = 0;
    let bomOutros = 0;
    let regularCorfio = 0;
    let regularOutros = 0;
    let ruimCorfio = 0;
    let ruimOutros = 0;
    let utilizoCorfio = 0;
    let utilizoOutros = 0;

    this.db.collection('Atendimento do setor comercial na fábrica', ref => ref
    .where( 'respostaCorfio', '==', 'ótimo' ))
    .valueChanges().subscribe(doc => otimoCorfio = doc.length );
    this.db.collection('Atendimento do setor comercial na fábrica', ref => ref
    .where( 'respostaOutros', '==', 'ótimo' ))
    .valueChanges().subscribe(doc => otimoOutros = doc.length );

    this.db.collection('Atendimento do setor comercial na fábrica', ref => ref
    .where( 'respostaCorfio', '==', 'bom' ))
    .valueChanges().subscribe(doc => bomCorfio = doc.length);
    this.db.collection('Atendimento do setor comercial na fábrica', ref => ref
    .where( 'respostaOutros', '==', 'bom' ))
    .valueChanges().subscribe(doc => bomOutros = doc.length);

    this.db.collection('Atendimento do setor comercial na fábrica', ref => ref
    .where( 'respostaCorfio', '==', 'regular' ))
    .valueChanges().subscribe(doc => regularCorfio = doc.length);
    this.db.collection('Atendimento do setor comercial na fábrica', ref => ref
    .where( 'respostaOutros', '==', 'regular' ))
    .valueChanges().subscribe(doc => regularOutros = doc.length);

    this.db.collection('Atendimento do setor comercial na fábrica', ref => ref
    .where( 'respostaCorfio', '==', 'ruim' ))
    .valueChanges().subscribe(doc => ruimCorfio = doc.length);
    this.db.collection('Atendimento do setor comercial na fábrica', ref => ref
    .where( 'respostaOutros', '==', 'ruim' ))
    .valueChanges().subscribe(doc => ruimOutros = doc.length);

    this.db.collection('Atendimento do setor comercial na fábrica', ref => ref
    .where( 'respostaCorfio', '==', 'não utilizo' ))
    .valueChanges().subscribe(doc => utilizoCorfio = doc.length);
    this.db.collection('Atendimento do setor comercial na fábrica', ref => ref
    .where( 'respostaOutros', '==', 'não utilizo' ))
    .valueChanges().subscribe(doc => utilizoOutros = doc.length);



    setTimeout(() => {
      this.barChartAtendComFab = [
        { data: [otimoCorfio, bomCorfio, regularCorfio, ruimCorfio, utilizoCorfio], label: 'Resposta Corfio' },
        { data: [otimoOutros, bomOutros, regularOutros, ruimOutros, utilizoOutros], label: 'Resposta Outros' }
      ];
    }, 6000);
    this.db.collection('Atendimento do setor comercial na fábrica',
    ref =>
     ref.orderBy( 'respostaCorfio', 'asc' ))
    .valueChanges().subscribe(doc => {
      this.countRespostasAtendComFab = doc.length;
      console.log('contadornovo' + this.countRespostasAtendComFab);
    } );
  }

}
