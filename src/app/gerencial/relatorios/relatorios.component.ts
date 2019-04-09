import { Component, OnInit } from '@angular/core';
import { GoogleChartInterface } from 'ng2-google-charts/google-charts-interfaces';
import { Observable } from 'rxjs';
import { AngularFirestore } from '@angular/fire/firestore';


@Component({
  selector: 'app-relatorios',
  templateUrl: './relatorios.component.html',
  styleUrls: ['./relatorios.component.css']
})
export class RelatoriosComponent implements OnInit {

  items: Observable<any[]>;
  teste = [ 12, 14, 22, 33 ];

  allData = [];

  public pieChart: GoogleChartInterface = {
    chartType: 'PieChart',
    dataTable: [
      ['Task', 'Hours per Day'],
      ['Work',     this.teste],
      ['Eat',      this.teste[1]],
      ['Commute',  this.teste[2]],
      ['Watch TV', this.teste[3]]
    ],
    // opt_firstRowIsData: true,
    options: {'title': 'A pergunta'}
  };

  constructor(private db: AngularFirestore) {
   }

  ngOnInit() {
    
  }

}
