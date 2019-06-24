import { Component, OnInit } from '@angular/core';
import { map } from 'rxjs/operators';
import { AngularFirestore } from '@angular/fire/firestore';
import { ChartOptions, ChartType, ChartDataSets } from 'chart.js';
import { Label } from 'ng2-charts';

@Component({
  selector: 'app-rel-atend-rep',
  templateUrl: './rel-atend-rep.component.html',
  styleUrls: ['./rel-atend-rep.component.css']
})
export class RelAtendRepComponent implements OnInit {

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
  public barChartLabelsFreqRep: Label[] = ['Sim', 'Não', 'Não Necessita'];
  public barChartType: ChartType = 'bar';
  public barChartLegend = true;

  public barChartFreqRep: ChartDataSets[] = [
    { data: [0, 0, 0], label: 'Resposta Corfio' },
    { data: [0, 0, 0], label: 'Resposta Outros' }
  ];

  public barChartRecepRep: ChartDataSets[] = [
    { data: [0, 0, 0, 0], label: 'Resposta Corfio' },
    { data: [0, 0, 0, 0], label: 'Resposta Outros' }
  ];

  public barChartEficRep: ChartDataSets[] = [
    { data: [0, 0, 0, 0], label: 'Resposta Corfio' },
    { data: [0, 0, 0, 0], label: 'Resposta Outros' }
  ];

  public barChartCordRep: ChartDataSets[] = [
    { data: [0, 0, 0, 0], label: 'Resposta Corfio' },
    { data: [0, 0, 0, 0], label: 'Resposta Outros' }
  ];

  countRespostasFreqRep: any;
  countRespostasRecepRep: any;
  countRespostasEficRep: any;
  countRespostasCordRep: any;

  constructor(private db: AngularFirestore) { }

  ngOnInit() {
    this.respostasFreqRep();
    this.respostasRecepRep();
    this.respostasCordRep();
    this.respostasEficRep();
  }

  respostasFreqRep() {
    let simCorfio = 0;
    let simOutros = 0;
    let naoCorfio = 0;
    let naoOutros = 0;
    let naoNecessitaCorfio = 0;
    let naoNecessitaOutros = 0;

    this.db.collection('Freqüência de visitas do representante atende a necessidade ?', ref => ref.where( 'respostaCorfio', '==', 'sim' ))
    .valueChanges().subscribe(doc => simCorfio = doc.length );
    this.db.collection('Freqüência de visitas do representante atende a necessidade ?', ref => ref.where( 'respostaOutros', '==', 'sim' ))
    .valueChanges().subscribe(doc => simOutros = doc.length );

    this.db.collection('Freqüência de visitas do representante atende a necessidade ?', ref => ref.where( 'respostaCorfio', '==', 'nao' ))
    .valueChanges().subscribe(doc => naoCorfio = doc.length);
    this.db.collection('Freqüência de visitas do representante atende a necessidade ?', ref => ref.where( 'respostaOutros', '==', 'nao' ))
    .valueChanges().subscribe(doc => naoOutros = doc.length);

    this.db.collection('Freqüência de visitas do representante atende a necessidade ?', ref => ref
    .where( 'respostaCorfio', '==', 'não necessita' ))
    .valueChanges().subscribe(doc => naoNecessitaCorfio = doc.length);
    this.db.collection('Freqüência de visitas do representante atende a necessidade ?', ref => ref
    .where( 'respostaOutros', '==', 'não necessita' ))
    .valueChanges().subscribe(doc => naoNecessitaOutros = doc.length);


    setTimeout(() => {
      this.barChartFreqRep = [
        { data: [simCorfio, naoCorfio, naoNecessitaCorfio], label: 'Resposta Corfio' },
        { data: [simOutros, naoOutros, naoNecessitaOutros], label: 'Resposta Outros' }
      ];
    }, 6000);
    this.db.collection('Freqüência de visitas do representante atende a necessidade ?',
    ref => ref.orderBy( 'respostaCorfio', 'asc' ))
    .valueChanges().subscribe(doc => {
      this.countRespostasFreqRep = doc.length;
      console.log('contadorFreq:' + this.countRespostasFreqRep);
    } );
  }

  respostasRecepRep() {
    let otimoCorfio = 0;
    let otimoOutros = 0;
    let bomCorfio = 0;
    let bomOutros = 0;
    let regularCorfio = 0;
    let regularOutros = 0;
    let ruimCorfio = 0;
    let ruimOutros = 0;

    this.db.collection('Receptividade em situação de reclamações e sugestões', ref => ref.where( 'respostaCorfio', '==', 'ótimo' ))
    .valueChanges().subscribe(doc => otimoCorfio = doc.length );
    this.db.collection('Receptividade em situação de reclamações e sugestões', ref => ref.where( 'respostaOutros', '==', 'ótimo' ))
    .valueChanges().subscribe(doc => otimoOutros = doc.length );

    this.db.collection('Receptividade em situação de reclamações e sugestões', ref => ref.where( 'respostaCorfio', '==', 'bom' ))
    .valueChanges().subscribe(doc => bomCorfio = doc.length);
    this.db.collection('Receptividade em situação de reclamações e sugestões', ref => ref.where( 'respostaOutros', '==', 'bom' ))
    .valueChanges().subscribe(doc => bomOutros = doc.length);

    this.db.collection('Receptividade em situação de reclamações e sugestões', ref => ref.where( 'respostaCorfio', '==', 'regular' ))
    .valueChanges().subscribe(doc => regularCorfio = doc.length);
    this.db.collection('Receptividade em situação de reclamações e sugestões', ref => ref.where( 'respostaOutros', '==', 'regular' ))
    .valueChanges().subscribe(doc => regularOutros = doc.length);

    this.db.collection('Receptividade em situação de reclamações e sugestões', ref => ref.where( 'respostaCorfio', '==', 'ruim' ))
    .valueChanges().subscribe(doc => ruimCorfio = doc.length);
    this.db.collection('Receptividade em situação de reclamações e sugestões', ref => ref.where( 'respostaOutros', '==', 'ruim' ))
    .valueChanges().subscribe(doc => ruimOutros = doc.length);

    setTimeout(() => {
      this.barChartRecepRep = [
        { data: [otimoCorfio, bomCorfio, regularCorfio, ruimCorfio], label: 'Resposta Corfio' },
        { data: [otimoOutros, bomOutros, regularOutros, ruimOutros], label: 'Resposta Outros' }
      ];
    }, 6000);
    this.db.collection('Receptividade em situação de reclamações e sugestões',
    ref => ref.orderBy( 'respostaCorfio', 'asc' ))
    .valueChanges().subscribe(doc => {
      this.countRespostasRecepRep = doc.length;
      console.log('contador:' + this.countRespostasRecepRep);
    } );
  }

  respostasEficRep() {
    let otimoCorfio = 0;
    let otimoOutros = 0;
    let bomCorfio = 0;
    let bomOutros = 0;
    let regularCorfio = 0;
    let regularOutros = 0;
    let ruimCorfio = 0;
    let ruimOutros = 0;

    this.db.collection('Eficiência em resolver problemas e atender solicitações', ref => ref.where( 'respostaCorfio', '==', 'ótimo' ))
    .valueChanges().subscribe(doc => otimoCorfio = doc.length );
    this.db.collection('Eficiência em resolver problemas e atender solicitações', ref => ref.where( 'respostaOutros', '==', 'ótimo' ))
    .valueChanges().subscribe(doc => otimoOutros = doc.length );

    this.db.collection('Eficiência em resolver problemas e atender solicitações', ref => ref.where( 'respostaCorfio', '==', 'bom' ))
    .valueChanges().subscribe(doc => bomCorfio = doc.length);
    this.db.collection('Eficiência em resolver problemas e atender solicitações', ref => ref.where( 'respostaOutros', '==', 'bom' ))
    .valueChanges().subscribe(doc => bomOutros = doc.length);

    this.db.collection('Eficiência em resolver problemas e atender solicitações', ref => ref.where( 'respostaCorfio', '==', 'regular' ))
    .valueChanges().subscribe(doc => regularCorfio = doc.length);
    this.db.collection('Eficiência em resolver problemas e atender solicitações', ref => ref.where( 'respostaOutros', '==', 'regular' ))
    .valueChanges().subscribe(doc => regularOutros = doc.length);

    this.db.collection('Eficiência em resolver problemas e atender solicitações', ref => ref.where( 'respostaCorfio', '==', 'ruim' ))
    .valueChanges().subscribe(doc => ruimCorfio = doc.length);
    this.db.collection('Eficiência em resolver problemas e atender solicitações', ref => ref.where( 'respostaOutros', '==', 'ruim' ))
    .valueChanges().subscribe(doc => ruimOutros = doc.length);

    setTimeout(() => {
      this.barChartEficRep = [
        { data: [otimoCorfio, bomCorfio, regularCorfio, ruimCorfio], label: 'Resposta Corfio' },
        { data: [otimoOutros, bomOutros, regularOutros, ruimOutros], label: 'Resposta Outros' }
      ];
    }, 6000);
    this.db.collection('Eficiência em resolver problemas e atender solicitações',
    ref => ref.orderBy( 'respostaCorfio', 'asc' ))
    .valueChanges().subscribe(doc => {
      this.countRespostasEficRep = doc.length;
      console.log('contador:' + this.countRespostasEficRep);
    } );
  }

  respostasCordRep() {
    let otimoCorfio = 0;
    let otimoOutros = 0;
    let bomCorfio = 0;
    let bomOutros = 0;
    let regularCorfio = 0;
    let regularOutros = 0;
    let ruimCorfio = 0;
    let ruimOutros = 0;

    this.db.collection('Cordialidade (gentileza) apresentada pelo representante', ref => ref.where( 'respostaCorfio', '==', 'ótimo' ))
    .valueChanges().subscribe(doc => otimoCorfio = doc.length );
    this.db.collection('Cordialidade (gentileza) apresentada pelo representante', ref => ref.where( 'respostaOutros', '==', 'ótimo' ))
    .valueChanges().subscribe(doc => otimoOutros = doc.length );

    this.db.collection('Cordialidade (gentileza) apresentada pelo representante', ref => ref.where( 'respostaCorfio', '==', 'bom' ))
    .valueChanges().subscribe(doc => bomCorfio = doc.length);
    this.db.collection('Cordialidade (gentileza) apresentada pelo representante', ref => ref.where( 'respostaOutros', '==', 'bom' ))
    .valueChanges().subscribe(doc => bomOutros = doc.length);

    this.db.collection('Cordialidade (gentileza) apresentada pelo representante', ref => ref.where( 'respostaCorfio', '==', 'regular' ))
    .valueChanges().subscribe(doc => regularCorfio = doc.length);
    this.db.collection('Cordialidade (gentileza) apresentada pelo representante', ref => ref.where( 'respostaOutros', '==', 'regular' ))
    .valueChanges().subscribe(doc => regularOutros = doc.length);

    this.db.collection('Cordialidade (gentileza) apresentada pelo representante', ref => ref.where( 'respostaCorfio', '==', 'ruim' ))
    .valueChanges().subscribe(doc => ruimCorfio = doc.length);
    this.db.collection('Cordialidade (gentileza) apresentada pelo representante', ref => ref.where( 'respostaOutros', '==', 'ruim' ))
    .valueChanges().subscribe(doc => ruimOutros = doc.length);

    setTimeout(() => {
      this.barChartCordRep = [
        { data: [otimoCorfio, bomCorfio, regularCorfio, ruimCorfio], label: 'Resposta Corfio' },
        { data: [otimoOutros, bomOutros, regularOutros, ruimOutros], label: 'Resposta Outros' }
      ];
    }, 6000);
    this.db.collection('Cordialidade (gentileza) apresentada pelo representante',
    ref => ref.orderBy( 'respostaCorfio', 'asc' ))
    .valueChanges().subscribe(doc => {
      this.countRespostasCordRep = doc.length;
      console.log('contador:' + this.countRespostasCordRep);
    } );
  }

}
