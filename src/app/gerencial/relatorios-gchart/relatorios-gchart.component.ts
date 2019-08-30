import { RelgchartService } from './relgchart.service';
import { Component, OnInit } from '@angular/core';
import { GoogleChartInterface } from 'ng2-google-charts/google-charts-interfaces';
import { AngularFirestore} from '@angular/fire/firestore';


export interface RespostasNovo {
  corfio: number;
  outros: number;
}

@Component({
  selector: 'app-relatorios-gchart',
  templateUrl: './relatorios-gchart.component.html',
  styleUrls: ['./relatorios-gchart.component.css']
})
export class RelatoriosGChartComponent implements OnInit {

  graphAspecTec: GoogleChartInterface;

  constructor( private db: AngularFirestore, private relService: RelgchartService ) {

  }


    // public barChart: GoogleChartInterface = {
    //   chartType: 'ColumnChart',
    //   dataTable: [
    //     ['Task', 'Hours per Day', {role: 'annotation'}],
    //     ['Work',     2 , 'dataPercent'],
    //     ['Eat',      2 , '20%'],
    //     ['Commute',  2, '20%'],
    //     ['Watch TV', 2, '20%'],
    //     ['Sleep',    7, '20%']
    //   ],
    //   // opt_firstRowIsData: true,
    //   options: {'title': 'Tasks'},
    // };

  ngOnInit() {
    this.respostasAstec();
  }


  respostasAstec() {
    let otimoCorfio   = 0;
    let otimoOutros   = 0;
    let bomCorfio     = 0;
    let bomOutros     = 0;
    let regularCorfio = 0;
    let regularOutros = 0;
    let ruimCorfio    = 0;
    let ruimOutros    = 0;
    let naoUsoCorfio  = 0;
    let naoUsoOutros  = 0;
    const       title = 'Assistência Técnica';

    const astecCorfio = this.db.collection('Assistência Técnica', ref => ref.where( 'respostaCorfio', '==', 'ótimo' ))
    .valueChanges().subscribe( doc => otimoCorfio = doc.length );
    this.db.collection('Assistência Técnica', ref => ref.where( 'respostaOutros', '==', 'ótimo' ))
    .valueChanges().subscribe(doc => otimoOutros = doc.length );

    this.db.collection('Assistência Técnica', ref => ref.where( 'respostaCorfio', '==', 'bom' ))
    .valueChanges().subscribe(doc => bomCorfio = doc.length);
    this.db.collection('Assistência Técnica', ref => ref.where( 'respostaOutros', '==', 'bom' ))
    .valueChanges().subscribe(doc => bomOutros = doc.length);

    this.db.collection('Assistência Técnica', ref => ref.where( 'respostaCorfio', '==', 'regular' ))
    .valueChanges().subscribe(doc => regularCorfio = doc.length);
    this.db.collection('Assistência Técnica', ref => ref.where( 'respostaOutros', '==', 'regular' ))
    .valueChanges().subscribe(doc => regularOutros = doc.length);

    this.db.collection('Assistência Técnica', ref => ref.where( 'respostaCorfio', '==', 'ruim' ))
    .valueChanges().subscribe(doc => ruimCorfio = doc.length);
    this.db.collection('Assistência Técnica', ref => ref.where( 'respostaOutros', '==', 'ruim' ))
    .valueChanges().subscribe(doc => ruimOutros = doc.length);

    const assTecNaouso = this.db.collection('Assistência Técnica', ref => ref.where( 'respostaCorfio', '==', 'não uso' ))
    .valueChanges().subscribe(doc => naoUsoCorfio = doc.length);
    this.db.collection('Assistência Técnica', ref => ref.where( 'respostaOutros', '==', 'não uso' ))
    .valueChanges().subscribe(doc => {naoUsoOutros = doc.length;  });

    setTimeout(() => {
      this.graphAspecTec = this.relService.buildGraphColumn( otimoCorfio,
        otimoOutros,
        bomCorfio,
        bomOutros,
        regularCorfio,
        regularOutros,
        ruimCorfio,
        ruimOutros,
        naoUsoCorfio,
        naoUsoOutros,
        this.graphAspecTec,
        title);
    }, 3000);



    // setTimeout(() => {

    //   const totalizadorCorfio = otimoCorfio + bomCorfio + regularCorfio + ruimCorfio;
    //   console.log(totalizadorCorfio);

    //   this.graphAspecTec = {
    //     chartType: 'ColumnChart',
    //     dataTable: [
    //                ['opcao',   'Corfio',       {role: 'annotation'}, 'Outros', {role: 'annotation'}],
    //                ['Ótimo',    otimoCorfio,              '20%',          3,              '20%'],
    //                ['Bom',      bomCorfio,              '20%',          3,              '20%'],
    //                ['Regular',  regularCorfio,              '20%',          3,              '20%'],
    //                ['Ruim',     ruimCorfio,              '20%',          3,              '20%'],
    //                ['Não Uso',  naoUsoCorfio,              '20%',          3,              '20%']
    //     ],
    //     // opt_firstRowIsData: true,
    //     options: {
    //       title: 'Assistência Técnica',
    //       animation: {
    //         duration: 1000,
    //         easing: 'out',
    //         startup: true
    //       }
    //     },
    //   };
    // }, 3000);

  }

}
