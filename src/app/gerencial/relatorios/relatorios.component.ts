import { map } from 'rxjs/operators';
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

  dataCorfio = [
    40,
    25,
    20,
    15,
  ];

  dataOutros = [
    20,
    35,
    20,
    15,
  ];

  public desempenhoProdCORFIO: GoogleChartInterface = {
    chartType: 'PieChart',
    dataTable: [
      ['Task', 'Hours per Day'],
      ['Ótimo',   this.dataCorfio[0]],
      ['Bom',     this.dataCorfio[1]],
      ['Regular', this.dataCorfio[2]],
      ['Ruim',    this.dataCorfio[3]]
    ],
    // opt_firstRowIsData: true,
    options: {'title': 'Desempenho do produto: CORFIO'}
  };

  public desempenhoProdOUTROS: GoogleChartInterface = {
    chartType: 'PieChart',
    dataTable: [
      ['Aval', 'respostas'],
      ['Ótimo',   this.dataOutros[0]],
      ['Bom',     this.dataOutros[1]],
      ['Regular', this.dataOutros[2]],
      ['Ruim',    this.dataOutros[3]]
    ],
    // opt_firstRowIsData: true,
    options: {'title': 'Desempenho do produto: Outros'}
  };

  constructor(private db: AngularFirestore) {
   }

  ngOnInit() {
    this.get();
  }

  get() {
    let data:  ;
    this.db.collection('78').valueChanges().subscribe(dados => console.log(dados));
    this.db.collection('78').snapshotChanges()
    .pipe(map(docArray => {
      return docArray.map(doc => {
        return {
          id: doc.payload.doc.id;

        }
      })
    } ));
    console.log(data);
  }

}
