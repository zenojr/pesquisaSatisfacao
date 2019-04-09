import { Component, OnInit } from '@angular/core';
import { GoogleChartInterface } from 'ng2-google-charts/google-charts-interfaces';
import { Observable } from 'rxjs';
import { AngularFirestore, AngularFirestoreDocument } from '@angular/fire/firestore';

export interface Item { name: string; }

@Component({
  selector: 'app-relatorios',
  templateUrl: './relatorios.component.html',
  styleUrls: ['./relatorios.component.css']
})
export class RelatoriosComponent implements OnInit {

  private itemDoc: AngularFirestoreDocument<Item>;
  item: Observable<Item>;

  allData = [];

  public pieChart: GoogleChartInterface = {
    chartType: 'PieChart',
    dataTable: [
      ['Task', 'Hours per Day'],
      ['Work',     11],
      ['Eat',      2],
      ['Commute',  2],
      ['Watch TV', 2]
    ],
    // opt_firstRowIsData: true,
    options: {'title': 'A pergunta'}
  };

  constructor(private db: AngularFirestore) {
   }

  ngOnInit() {
    this.itemDoc = this.db.doc<Item>('clientesCNPJ/nome');
    this.item = this.itemDoc.valueChanges();

    console.log( this.itemDoc );
    console.log( this.item );
  }

}
