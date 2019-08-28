
import { Component, OnInit } from '@angular/core';
import { GoogleChartInterface } from 'ng2-google-charts/google-charts-interfaces';
import { AngularFirestore } from '@angular/fire/firestore';

@Component({
  selector: 'app-relatorios-gchart',
  templateUrl: './relatorios-gchart.component.html',
  styleUrls: ['./relatorios-gchart.component.css']
})
export class RelatoriosGChartComponent implements OnInit {

  // public pieChart: GoogleChartInterface = {
  //   chartType: 'PieChart',
  //   dataTable: [
  //     ['Task', 'Hours per Day'],
  //     ['Work',     this.workdata],
  //     ['Eat',      2],
  //     ['Commute',  2],
  //     ['Watch TV', 2],
  //     ['Sleep',    7]
  //   ],
  //   // opt_firstRowIsData: true,
  //   options: {'title': 'Tasks'},
  // };


  constructor( private db: AngularFirestore ) {

   }

   workdata = 1;

    public barChart: GoogleChartInterface;

  ngOnInit() {
    this.consultaAspecTec();
  }

  consultaAspecTec() {
    const astecCorfio = this.db.collection('Assistência Técnica', ref => ref.where( 'respostaCorfio', '==', 'ótimo' ))
                        .valueChanges().subscribe(doc => {
                          this.workdata = doc.length;
                          let dataPercent = this.workdata + '%' ;
                          this.barChart = {
                            chartType: 'ColumnChart',
                            dataTable: [
                              ['Task', 'Hours per Day', {role: 'annotation'}],
                              ['Work',     this.workdata , dataPercent],
                              ['Eat',      2 , '20%'],
                              ['Commute',  2, '20%'],
                              ['Watch TV', 2, '20%'],
                              ['Sleep',    7, '20%']
                            ],
                            // opt_firstRowIsData: true,
                            options: {'title': 'Tasks'},
                          };
                        }) ;

  console.log(astecCorfio);

  }


}
