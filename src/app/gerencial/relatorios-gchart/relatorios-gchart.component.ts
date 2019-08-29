import { Component, OnInit } from '@angular/core';
import { GoogleChartInterface } from 'ng2-google-charts/google-charts-interfaces';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { Observable, BehaviorSubject } from 'rxjs';
import { map } from 'rxjs/operators';
import { RespostasChart } from './../../shared/contaResp.model';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/observable/combineLatest';

export interface Item {
  conta: number;
}

@Component({
  selector: 'app-relatorios-gchart',
  templateUrl: './relatorios-gchart.component.html',
  styleUrls: ['./relatorios-gchart.component.css']
})
export class RelatoriosGChartComponent implements OnInit {

  items$: Observable<Item[]>;
  contaFilter$: BehaviorSubject<string|null>;


  constructor( private db: AngularFirestore ) {
    this.contaFilter$ = new BehaviorSubject(null);
    this.items$ = Observable.combineLatest(
      this.contaFilter$
    ).switchMap(([conta]) =>
      db.collection<Item>( 'Assistência Técnica', ref => {
        let query: firebase.firestore.Query = ref;
        if (conta) { query = query.where( 'respostaCorfio', '==', 'ótimo' ); }
        return query;
      } ).valueChanges()
    );
  }



   workdata = 1;

    public barChart: GoogleChartInterface = {
      chartType: 'ColumnChart',
      dataTable: [
        ['Task', 'Hours per Day', {role: 'annotation'}],
        ['Work',     'this.contaOtimo' , 'dataPercent'],
        ['Eat',      2 , '20%'],
        ['Commute',  2, '20%'],
        ['Watch TV', 2, '20%'],
        ['Sleep',    7, '20%']
      ],
      // opt_firstRowIsData: true,
      options: {'title': 'Tasks'},
    };

  ngOnInit() {
    this.consultaAspecTec();
  }

  consultaAspecTec() {
    const astecCorfioOtimo = this.db.collection('Assistência Técnica',
    ref => ref.where( 'respostaCorfio', '==', 'ótimo' )).snapshotChanges();
    const astecCorfioBom   = this.db.collection('Assistência Técnica', ref => ref.where( 'respostaCorfio', '==', 'bom' )).valueChanges();


    return this.workdata;

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
