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
            respSubs: Subscription;

           showProg = true;
        alreadyLoad = false;

          perguntas = ['Funcionalidade da embalagem dos produtos em rolos',
                       'Funcionalidade da embalagem dos produtos em bobinas',
                       'Uniformidades das características técnicas'];

  constructor( private db: AngularFirestore, private relService: RelgchartService ) {}

  ngOnInit() {
  }

  loadCompGeral() {
    this.showProg = true;
    setTimeout(() => { this.showProg = false; }, 3000 );

    if (!this.alreadyLoad) {
      this.loadGeral(this.perguntas);
      this.alreadyLoad = true;
    }
  }

  loadGeral(perguntas) {

    let contaOtimo = 0;

    perguntas.forEach(element => {
      const pergunta = element;
      this.respostaColection  = this.db.collection(pergunta, ref => ref
                                      .where('respostaCorfio', '==', 'ótimo'));



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

      const myObserver = {
            next: x => console.log( 'Observer got value:' + x ),
           error: err => console.log( 'Observer got an error ' + err ),
        complete: () => console.log( 'Observer got a complete notification' )
      };

      this.respostaObservable.subscribe(myObserver);

    });




    }
  }
