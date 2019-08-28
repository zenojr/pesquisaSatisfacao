import { Component, OnInit } from '@angular/core';
import { GoogleChartInterface } from 'ng2-google-charts/google-charts-interfaces';
import { AngularFirestore } from '@angular/fire/firestore';

@Component({
  selector: 'app-relatorios-gchart',
  templateUrl: './relatorios-gchart.component.html',
  styleUrls: ['./relatorios-gchart.component.css']
})
export class RelatoriosGChartComponent implements OnInit {

  workdata = 20;

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

  public barChart: GoogleChartInterface = {
    chartType: 'ColumnChart',
    dataTable: [
      ['Task', 'Hours per Day', {role: 'annotation'}],
      ['Work',     11 , '20%'],
      ['Eat',      2 , '20%'],
      ['Commute',  2, '20%'],
      ['Watch TV', 2, '20%'],
      ['Sleep',    7, '20%']
    ],
    // opt_firstRowIsData: true,
    options: {'title': 'Tasks'},
  };

  constructor( private db: AngularFirestore ) {

   }

  ngOnInit() {
  }

  consultaAspecTec() {
    
  }


}
