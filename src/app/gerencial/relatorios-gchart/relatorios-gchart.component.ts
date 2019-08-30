import { RelgchartService } from './relgchart.service';
import { Component, OnInit } from '@angular/core';
import { GoogleChartInterface } from 'ng2-google-charts/google-charts-interfaces';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { Observable, BehaviorSubject, of } from 'rxjs';
import { map } from 'rxjs/operators';
import { RespostasChart } from './../../shared/contaResp.model';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/observable/combineLatest';
import * as firebase from 'firebase';
import 'rxjs/add/observable/of';
import 'rxjs/add/observable/from';


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

  respostasCollection: AngularFirestoreCollection<RespostasNovo> ;
  respostasObservable: Observable<RespostasNovo[]>;


  respostas: GoogleChartInterface;

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
    this.consultaAspecTec();
    this.respostasAstec();
  }


  respostasAstec() {
    let otimoCorfio = 0;
    let otimoOutros = 0;
    let bomCorfio = 0;
    let bomOutros = 0;
    let regularCorfio = 0;
    let regularOutros = 0;
    let ruimCorfio = 0;
    let ruimOutros = 0;
    let naoUsoCorfio = 0;
    let naoUsoOutros = 0;

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

      const totalizadorCorfio = otimoCorfio + bomCorfio + regularCorfio + ruimCorfio;
      console.log(totalizadorCorfio);

      this.respostas = {
        chartType: 'ColumnChart',
        dataTable: [
                   ['opcao',   'Corfio', {role: 'annotation'}, 'Outros', {role: 'annotation'}],
                   ['Ótimo',      2,              '20%',          3,              '20%'],
                   ['Bom',        2,              '20%',          3,              '20%'],
                   ['Regular',    2,              '20%',          3,              '20%'],
                   ['Ruim',       2,              '20%',          3,              '20%'],
                   ['Não Uso',    2,              '20%',          3,              '20%']
        ],
        // opt_firstRowIsData: true,
        options: {'title': 'Assistência Técnica'},
      };
    }, 2000);

    

    // this.barChart = [
    //   { dataTable: [otimoCorfio, bomCorfio, regularCorfio, ruimCorfio, naoUsoCorfio], label: 'Resposta Corfio' },
    //   { dataTable: [otimoOutros, bomOutros, regularOutros, ruimOutros, naoUsoOutros], label: 'Resposta Outros' }
    // ];


    // this.db.collection('Assistência Técnica',
    // ref => ref.orderBy( 'respostaCorfio', 'asc' ))
    // .valueChanges().subscribe(doc => {
    //   this.countRespostasAstec = doc.length;
    //   console.log(this.countRespostasAstec);

    // } );

  }


  consultaAspecTec() {
    const astecCorfioOtimo = this.db.collection('Assistência Técnica',
    ref => ref.where( 'respostaCorfio', '==', 'ótimo' )).snapshotChanges();
    const astecCorfioBom   = this.db.collection('Assistência Técnica', ref => ref.where( 'respostaCorfio', '==', 'bom' )).valueChanges();

    let saida = astecCorfioBom.subscribe( doc => {
      console.log(doc.length);
      const tamanho = doc.length;
      return tamanho;
    });

    astecCorfioBom.subscribe({
        next(response) { this.wow = response.length; console.log(this.wow)
          return this.wow; },
        error(err) { console.log('Error: ' + err); },
        complete() { console.log('End'); }
    });

    console.log(saida);



    // let dados = this.db.collection('Assistência Técnica', ref => ref.where( 'respostaCorfio', '==', 'bom' ));
    // dados.get().toPromise().then( snap => this.dataqualquer =  snap.size  );
    // console.log(this.dataqualquer);

    this.respostasCollection = this.db.collection('Assistência Técnica');
    this.respostasObservable = this.respostasCollection.valueChanges();

    console.log('aqui: ' + this.respostasObservable);

    const respostas = this.db.collection('Assistência Técnica', ref => ref.orderBy('respostaCorfio', 'desc'));


    // this.contaOtimo = this.db.collection('Assistência Técnica', ref => ref.where( 'respostaCorfio', '==', 'ótimo' ))
    //                   .valueChanges().subscribe(doc => console.log(doc.length));

    // astecCorfioOtimo.subscribe({
    //   next(response) { console.log(response.length); contaOtimo = response.length; },
    //   error(err) { console.log('Error: ' + err); },
    //   complete() { console.log('End'); }
    // });
    // console.log(contaOtimo);


  }


}
