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


  public barChartAtendComPont: ChartDataSets[] = [
    { data: [0, 0, 0, 0], label: 'Resposta Corfio' },
    { data: [0, 0, 0, 0], label: 'Resposta Outros' }
  ];

  public barChartAtendComFab: ChartDataSets[] = [
    { data: [0, 0, 0, 0, 0], label: 'Resposta Corfio' },
    { data: [0, 0, 0, 0, 0], label: 'Resposta Outros' }
  ];

  countRespostasAtendComPont: any;
  countRespostasAtendComFab: any;

  panelOpenState = false;

  constructor( private db: AngularFirestore ) { }

  ngOnInit() {
  }

  loadAll() {
    this.respostasAtendComFab();
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
