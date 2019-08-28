import { Component, OnInit } from '@angular/core';
import { GoogleChartInterface } from 'ng2-google-charts/google-charts-interfaces';


@Component({
  selector: 'app-relatorios-gchart',
  templateUrl: './relatorios-gchart.component.html',
  styleUrls: ['./relatorios-gchart.component.css']
})
export class RelatoriosGChartComponent implements OnInit {

  public pieChart: GoogleChartInterface = {
    chartType: 'PieChart',
    dataTable: [
      ['Task', 'Hours per Day'],
      ['Work',     11],
      ['Eat',      2],
      ['Commute',  2],
      ['Watch TV', 2],
      ['Sleep',    7]
    ],
    // opt_firstRowIsData: true,
    options: {'title': 'Tasks'},
  };

  public barChart: GoogleChartInterface = {
    chartType: 'BarChart',
    dataTable: [
      ['Task', 'Hours per Day'],
      ['Work',     11],
      ['Eat',      2],
      ['Commute',  2],
      ['Watch TV', 2],
      ['Sleep',    7]
    ],
    // opt_firstRowIsData: true,
    options: {'title': 'Tasks'},
  };

  constructor() {

   }

  ngOnInit() {
  }


}
