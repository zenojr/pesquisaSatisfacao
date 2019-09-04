import { Component, OnInit, OnDestroy } from '@angular/core';
import { GoogleChartInterface         } from 'ng2-google-charts/google-charts-interfaces';
import { RelgchartService             } from '../relgchart.service';
import { AngularFirestore,
         AngularFirestoreCollection   } from '@angular/fire/firestore';
import { map                          } from 'rxjs/operators';
import { Observable, combineLatest,
         Subscription                 } from 'rxjs';


export interface RespostasQuery {
  respostaCorfio: string;
  respostaOutros: string;
}

@Component({
     selector:  'app-comparacao-geral',
  templateUrl:  './comparacao-geral.component.html',
    styleUrls: ['./comparacao-geral.component.css']
})
export class ComparacaoGeralComponent implements OnInit {

      graphCompGeral: GoogleChartInterface;

   respostaColection: AngularFirestoreCollection<RespostasQuery>;
  respostaObservable: Observable<RespostasQuery[]>;
             obsSubs: Subscription;

           showProg = true;
        alreadyLoad = false;

  constructor( private db: AngularFirestore, private relService: RelgchartService ) {}

  ngOnInit() {
  }

  loadCompGeral() {
    this.showProg = true;
    setTimeout(() => { this.showProg = false; }, 3000 );

    if (!this.alreadyLoad) {

      this.alreadyLoad = true;
    }
  }

  compGeral() {
    const pergunta = 'Qual o principal motivo (o mais importante) que o leva a comprar de outro fabricante?';

    this.respostaColection  = this.db.collection(pergunta);
    this.respostaObservable = this.respostaColection.snapshotChanges().pipe(
      map(array => {
        return array.map( snap => {
          return {
                      data: snap.payload.doc.data(),
                        id: snap.payload.doc.id,
            respostaCorfio: snap.payload.doc.data()['respostaCorfio'],
            respostaOutros: snap.payload.doc.data()['respostaOutros']
          };
        });
      }));

  }

}
