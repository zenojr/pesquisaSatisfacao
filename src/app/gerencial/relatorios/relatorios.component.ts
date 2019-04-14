import { map } from 'rxjs/operators';
import { Component, OnInit } from '@angular/core';
import { GoogleChartInterface } from 'ng2-google-charts/google-charts-interfaces';
import { Observable } from 'rxjs';
import { AngularFirestore, AngularFirestoreDocument, AngularFirestoreCollection } from '@angular/fire/firestore';


// export interface Item { name: string; }
export interface Respostas {
  id?: string;
  pergunta?: string;
  respostaCorfio?: string;
  respostaOutros?: string;
}



@Component({
  selector: 'app-relatorios',
  templateUrl: './relatorios.component.html',
  styleUrls: ['./relatorios.component.css']
})
export class RelatoriosComponent implements OnInit {

  respostas: Observable<Respostas[]>;

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
      ['Task',    'Hours per Day'],
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
      ['Aval',    'respostas'],
      ['Ótimo',   this.dataOutros[0]],
      ['Bom',     this.dataOutros[1]],
      ['Regular', this.dataOutros[2]],
      ['Ruim',    this.dataOutros[3]]
    ],
    // opt_firstRowIsData: true,
    options: {'title': 'Desempenho do produto: Outros'}
  };

  constructor(private db: AngularFirestore) {
    this.getRespostasUser();
   }


  ngOnInit() {
    
    this.manipulaData();
  }


  getRespostasUser() {
    this.respostas = this.db.collection('78')
    .snapshotChanges()
    .pipe(map(docArray => {
      return docArray.map(doc => {
        return {
          id: doc.payload.doc.id,
          respostaCorfio: doc.payload.doc.data()['respostaCorfio'],
          respostaOutros: doc.payload.doc.data()['respostaOutros']
        };
      });
    }));
  }

  // manipulaData(data: Respostas): Observable<Respostas[]> {
  manipulaData( ) {
    let data: Respostas;
    if (data.pergunta === 'Assistência técnica') {
      if (data.respostaCorfio === 'otimo') {
        let contaOtimo;
        contaOtimo++;
        console.log(contaOtimo);
      }
    }
  }

  showData() {

  }

}
