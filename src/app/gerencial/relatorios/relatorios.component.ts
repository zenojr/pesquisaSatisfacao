import { map, count } from 'rxjs/operators';
import { Component, OnInit } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { AngularFirestore, AngularFirestoreDocument, AngularFirestoreCollection } from '@angular/fire/firestore';
import { RespostaUser } from './resUser.model';
import { ChartOptions, ChartType, ChartDataSets } from 'chart.js';
import { Label } from 'ng2-charts';



@Component({
  selector: 'app-relatorios',
  templateUrl: './relatorios.component.html',
  styleUrls: ['./relatorios.component.css']
})
export class RelatoriosComponent implements OnInit {


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
  public barChartType: ChartType = 'bar';
  public barChartLegend = true;


  public barChartFuncRolos: ChartDataSets[] = [
    { data: [0, 0, 0, 0], label: 'Resposta Corfio' },
    { data: [0, 0, 0, 0], label: 'Resposta Outros' }
  ];
  public barChartFuncBobinas: ChartDataSets[] = [
    { data: [0, 0, 0, 0], label: 'Resposta Corfio' },
    { data: [0, 0, 0, 0], label: 'Resposta Outros' }
  ];
  public barChartUnifTec: ChartDataSets[] = [
    { data: [0, 0, 0, 0], label: 'Resposta Corfio' },
    { data: [0, 0, 0, 0], label: 'Resposta Outros' }
  ];

  public barChartDesemProd: ChartDataSets[] = [
    { data: [0, 0, 0, 0], label: 'Resposta Corfio' },
    { data: [0, 0, 0, 0], label: 'Resposta Outros' }
  ];


  countRespostasUnifTec: any;
  countRespostasDesemProd: any;
  countRespostasFuncRolos: any;

  constructor(private db: AngularFirestore) {}


  ngOnInit() {
    this.respostasFuncRolos();
    this.respostasUnifTec();
    this.respostasFuncBobinas();
    this.respostasDesemProd();
  }

  respostasDesemProd() {
    let otimoCorfio = 0;
    let otimoOutros = 0;
    let bomCorfio = 0;
    let bomOutros = 0;
    let regularCorfio = 0;
    let regularOutros = 0;
    let ruimCorfio = 0;
    let ruimOutros = 0;

    this.db.collection('Desempenho do produto', ref => ref.where( 'respostaCorfio', '==', 'ótimo' ))
    .valueChanges().subscribe(doc => otimoCorfio = doc.length );
    this.db.collection('Desempenho do produto',ref => ref.where( 'respostaOutros', '==', 'ótimo' ))
    .valueChanges().subscribe(doc => otimoOutros = doc.length );

    this.db.collection('Desempenho do produto', ref => ref.where( 'respostaCorfio', '==', 'bom' ))
    .valueChanges().subscribe(doc => bomCorfio = doc.length);
    this.db.collection('Desempenho do produto', ref => ref.where( 'respostaOutros', '==', 'bom' ))
    .valueChanges().subscribe(doc => bomOutros = doc.length);

    this.db.collection('Desempenho do produto', ref => ref.where( 'respostaCorfio', '==', 'regular' ))
    .valueChanges().subscribe(doc => regularCorfio = doc.length);
    this.db.collection('Desempenho do produto', ref => ref.where( 'respostaOutros', '==', 'regular' ))
    .valueChanges().subscribe(doc => regularOutros = doc.length);

    this.db.collection('Desempenho do produto', ref => ref.where( 'respostaCorfio', '==', 'ruim' ))
    .valueChanges().subscribe(doc => ruimCorfio = doc.length);
    this.db.collection('Desempenho do produto', ref => ref.where( 'respostaOutros', '==', 'ruim' ))
    .valueChanges().subscribe(doc => ruimOutros = doc.length);

    setTimeout(() => {
      this.barChartDesemProd = [
        { data: [otimoCorfio, bomCorfio, regularCorfio, ruimCorfio], label: 'Resposta Corfio' },
        { data: [otimoOutros, bomOutros, regularOutros, ruimOutros], label: 'Resposta Outros' }
      ];
    }, 6000);

    this.db.collection('Desempenho do produto',
    ref => ref.orderBy( 'respostaCorfio', 'asc' ))
    .valueChanges().subscribe(doc => {
      this.countRespostasDesemProd = doc.length;
      console.log(this.countRespostasDesemProd);
    } );

  }

  respostasUnifTec() {
    let otimoCorfio = 0;
    let otimoOutros = 0;
    let bomCorfio = 0;
    let bomOutros = 0;
    let regularCorfio = 0;
    let regularOutros = 0;
    let ruimCorfio = 0;
    let ruimOutros = 0;

    this.db.collection('Uniformidades das características técnicas', ref => ref.where( 'respostaCorfio', '==', 'ótimo' ))
    .valueChanges().subscribe(doc => otimoCorfio = doc.length );
    this.db.collection('Uniformidades das características técnicas',ref => ref.where( 'respostaOutros', '==', 'ótimo' ))
    .valueChanges().subscribe(doc => otimoOutros = doc.length );

    this.db.collection('Uniformidades das características técnicas', ref => ref.where( 'respostaCorfio', '==', 'bom' ))
    .valueChanges().subscribe(doc => bomCorfio = doc.length);
    this.db.collection('Uniformidades das características técnicas', ref => ref.where( 'respostaOutros', '==', 'bom' ))
    .valueChanges().subscribe(doc => bomOutros = doc.length);

    this.db.collection('Uniformidades das características técnicas', ref => ref.where( 'respostaCorfio', '==', 'regular' ))
    .valueChanges().subscribe(doc => regularCorfio = doc.length);
    this.db.collection('Uniformidades das características técnicas', ref => ref.where( 'respostaOutros', '==', 'regular' ))
    .valueChanges().subscribe(doc => regularOutros = doc.length);

    this.db.collection('Uniformidades das características técnicas', ref => ref.where( 'respostaCorfio', '==', 'ruim' ))
    .valueChanges().subscribe(doc => ruimCorfio = doc.length);
    this.db.collection('Uniformidades das características técnicas', ref => ref.where( 'respostaOutros', '==', 'ruim' ))
    .valueChanges().subscribe(doc => ruimOutros = doc.length);

    setTimeout(() => {
      this.barChartUnifTec = [
        { data: [otimoCorfio, bomCorfio, regularCorfio, ruimCorfio], label: 'Resposta Corfio' },
        { data: [otimoOutros, bomOutros, regularOutros, ruimOutros], label: 'Resposta Outros' }
      ];
    }, 6000);
    this.db.collection('Uniformidades das características técnicas',
    ref => ref.orderBy( 'respostaCorfio', 'asc' ))
    .valueChanges().subscribe(doc => {
      console.log(doc.length);
      this.countRespostasUnifTec = doc.length;
      console.log(this.countRespostasUnifTec);
    } );

  }

  respostasFuncRolos() {
    let otimoCorfio = 0;
    let otimoOutros = 0;
    let bomCorfio = 0;
    let bomOutros = 0;
    let regularCorfio = 0;
    let regularOutros = 0;
    let ruimCorfio = 0;
    let ruimOutros = 0;


    this.db.collection('Funcionalidade da embalagem dos produtos em rolos', ref => ref.where( 'respostaCorfio', '==', 'ótimo' ))
    .valueChanges().subscribe(doc => otimoCorfio = doc.length );
    this.db.collection('Funcionalidade da embalagem dos produtos em rolos',ref => ref.where( 'respostaOutros', '==', 'ótimo' ))
    .valueChanges().subscribe(doc => otimoOutros = doc.length );

    this.db.collection('Funcionalidade da embalagem dos produtos em rolos', ref => ref.where( 'respostaCorfio', '==', 'bom' ))
    .valueChanges().subscribe(doc => bomCorfio = doc.length);
    this.db.collection('Funcionalidade da embalagem dos produtos em rolos', ref => ref.where( 'respostaOutros', '==', 'bom' ))
    .valueChanges().subscribe(doc => bomOutros = doc.length);

    this.db.collection('Funcionalidade da embalagem dos produtos em rolos', ref => ref.where( 'respostaCorfio', '==', 'regular' ))
    .valueChanges().subscribe(doc => regularCorfio = doc.length);
    this.db.collection('Funcionalidade da embalagem dos produtos em rolos', ref => ref.where( 'respostaOutros', '==', 'regular' ))
    .valueChanges().subscribe(doc => regularOutros = doc.length);

    this.db.collection('Funcionalidade da embalagem dos produtos em rolos', ref => ref.where( 'respostaCorfio', '==', 'ruim' ))
    .valueChanges().subscribe(doc => ruimCorfio = doc.length);
    this.db.collection('Funcionalidade da embalagem dos produtos em rolos', ref => ref.where( 'respostaOutros', '==', 'ruim' ))
    .valueChanges().subscribe(doc => ruimOutros = doc.length);

    setTimeout(() => {
      this.barChartFuncRolos = [
        { data: [otimoCorfio, bomCorfio, regularCorfio, ruimCorfio], label: 'Resposta Corfio' },
        { data: [otimoOutros, bomOutros, regularOutros, ruimOutros], label: 'Resposta Outros' }
      ];

    }, 6000);

    this.db.collection('Funcionalidade da embalagem dos produtos em rolos',
    ref => ref.orderBy( 'respostaCorfio', 'asc' ))
    .valueChanges().subscribe(doc => {
      this.countRespostasFuncRolos = doc.length;
      console.log(this.countRespostasFuncRolos);
    } );
  }

  respostasFuncBobinas() {

    let otimoCorfio = 0;
    let otimoOutros = 0;
    let bomCorfio = 0;
    let bomOutros = 0;
    let regularCorfio = 0;
    let regularOutros = 0;
    let ruimCorfio = 0;
    let ruimOutros = 0;

    this.db.collection('Funcionalidade da embalagem dos produtos em bobinas', ref => ref.where( 'respostaCorfio', '==', 'ótimo' ))
    .valueChanges().subscribe(doc => otimoCorfio = doc.length );
    this.db.collection('Funcionalidade da embalagem dos produtos em bobinas',ref => ref.where( 'respostaOutros', '==', 'ótimo' ))
    .valueChanges().subscribe(doc => otimoOutros = doc.length );

    this.db.collection('Funcionalidade da embalagem dos produtos em bobinas', ref => ref.where( 'respostaCorfio', '==', 'bom' ))
    .valueChanges().subscribe(doc => bomCorfio = doc.length);
    this.db.collection('Funcionalidade da embalagem dos produtos em bobinas', ref => ref.where( 'respostaOutros', '==', 'bom' ))
    .valueChanges().subscribe(doc => bomOutros = doc.length);

    this.db.collection('Funcionalidade da embalagem dos produtos em bobinas', ref => ref.where( 'respostaCorfio', '==', 'regular' ))
    .valueChanges().subscribe(doc => regularCorfio = doc.length);
    this.db.collection('Funcionalidade da embalagem dos produtos em bobinas', ref => ref.where( 'respostaOutros', '==', 'regular' ))
    .valueChanges().subscribe(doc => regularOutros = doc.length);

    this.db.collection('Funcionalidade da embalagem dos produtos em bobinas', ref => ref.where( 'respostaCorfio', '==', 'ruim' ))
    .valueChanges().subscribe(doc => ruimCorfio = doc.length);
    this.db.collection('Funcionalidade da embalagem dos produtos em bobinas', ref => ref.where( 'respostaOutros', '==', 'ruim' ))
    .valueChanges().subscribe(doc => ruimOutros = doc.length);
    this.db.collection('Funcionalidade da embalagem dos produtos em bobinas', ref => ref.where( 'respostaOutros', '==', 'ruim' ))
    .valueChanges().subscribe(doc => ruimOutros = doc.length);

    setTimeout(() => {
      this.barChartFuncBobinas = [
        { data: [otimoCorfio, bomCorfio, regularCorfio, ruimCorfio], label: 'Resposta Corfio' },
        { data: [otimoOutros, bomOutros, regularOutros, ruimOutros], label: 'Resposta Outros' }
      ];
    }, 6000);

  }

  contaRespostasPorPergunta() {
    this.db.collection('Uniformidades das características técnicas')
    .snapshotChanges()
    .pipe(map(docArray => {
      return docArray.map(doc => {
        return {
          id: doc.payload.doc.id
        };
      });
    }))
    .subscribe( from => {
      console.log(from);
      console.log(from.length);
    });
  }



}

