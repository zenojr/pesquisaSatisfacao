import { Component, OnInit } from '@angular/core';
import { GoogleChartInterface         } from 'ng2-google-charts/google-charts-interfaces';
import { RelgchartService             } from '../relgchart.service';
import { AngularFirestore,
         AngularFirestoreCollection   } from '@angular/fire/firestore';
import { map                          } from 'rxjs/operators';
import { Observable, combineLatest,
         Subscription                 } from 'rxjs';

export interface DataClient {
  id: string;
  cnpj: string;
  email: string;
  estado: string;
  nome: string;
  representante: string;
}


@Component({
  selector: 'app-sats-cliente',
  templateUrl: './sats-cliente.component.html',
  styleUrls: ['./sats-cliente.component.css']
})
export class SatsClienteComponent implements OnInit {

  dataclient = [];

  graphAtendCom: GoogleChartInterface;
       graphEmbTrans: GoogleChartInterface;

           showProg = true;
        alreadyLoad = false;

  cliente: Observable<DataClient[]>;

  cnpjRespostas = [ '00103788000676',
                    '00138093000115',
                    '00172143000180'];

  perguntasAspecTec = ['Funcionalidade da embalagem dos produtos em rolos',
                      'Funcionalidade da embalagem dos produtos em bobinas',
                      'Uniformidades das características técnicas',
                      'Desempenho do produto',
                      'Identificação (etiqueta) dos produtos em rolos',
                      'Identificação (etiqueta) dos produtos em bobinas',
                      'Assistência Técnica',
                      'Identificação (gravação) nos produtos'];

  constructor( private db: AngularFirestore ) { }

  ngOnInit() {
    // this.consultaClienteRep(this.cnpjRespostas, this.perguntasAspecTec);
    this.newQuery(this.cnpjRespostas, this.perguntasAspecTec)
  }


  newQuery(listaCnpj, perguntas) {


    listaCnpj.forEach(cnpj => {

    this.db.collection(cnpj).valueChanges().subscribe(
      doc => console.log(doc)
    );

    this.db.collection(cnpj, data => data.where( 'respostaCorfio',  '==', 'ótimo' ))
                                         .snapshotChanges()
                                         .pipe(map( arr => {
                                         return arr.map( snap => {
                                         return {
                                          id: snap.payload.doc.id,
                                          cnpj: snap.payload.doc.data()['cnpj'],
                                          email: snap.payload.doc.data()['email'],
                                          estado: snap.payload.doc.data()['estado'],
                                          nome: snap.payload.doc.data()['nome'],
                                          representante: snap.payload.doc.data()['representante']
                                         };
                                         });
                                         })).subscribe( doc => console.log(doc) );


    });

    setTimeout(() => {
      console.log(this.dataclient);
    }, 3000);

  }


  loadCompGeral() {
    this.showProg = true;
    setTimeout(() => { this.showProg = false; }, 8000 );

    if (!this.alreadyLoad) {
      this.alreadyLoad = true;
    }
  }

  consultaClienteRep( cnpjLista, perguntasAspecTec ) {
    // const cliente = [];
    let otimo = [];
    cnpjLista.forEach( cnpj => {
      // this.db.collection(cnpj, data => data.where('respostaCorfio', '==', 'ótimo'))
      //                                      .valueChanges()
      //                                      .subscribe(doc => {contaOtimo.push(doc.length); });
      // this.db.collection('clientesCNPJv2', data => data.where( 'cnpj',  '==', cnpj ))
      //                                                  .valueChanges()
      //                                                  .subscribe( doc => this.dataclient.push(doc));


      this.cliente = this.db.collection('clientesCNPJv2', data => data.where( 'cnpj',  '==', cnpj ))
                                                       .snapshotChanges()
                                                       .pipe(map( arr => {
                                                        return arr.map( snap => {
                                                        return {
                                                          id: snap.payload.doc.id,
                                                          cnpj: snap.payload.doc.data()['cnpj'],
                                                          email: snap.payload.doc.data()['email'],
                                                          estado: snap.payload.doc.data()['estado'],
                                                          nome: snap.payload.doc.data()['nome'],
                                                          representante: snap.payload.doc.data()['representante']
                                                        };
                                                        });
                                                       }));



    });


    console.log(this.cliente);

    perguntasAspecTec.forEach( pergunta => {
      this.db.collection( pergunta, data => data.where( 'respostaCorfio', '==', 'ótimo'))
                                                .valueChanges()
                                                .subscribe(doc =>  otimo.push(doc));
    }

    );
  }


  loadAspecTec(perguntasAspec) {
    const contaOtimo   = [];
    const contaBom     = [];
    const contaRegular = [];
    const contaRuim    = [];

    perguntasAspec.forEach(ref => {
      const question = ref;
      this.db.collection(question, data => data.where('respostaCorfio', '==', 'ótimo'))
                                                .valueChanges()
                                                .subscribe(doc => {contaOtimo.push(doc.length); });

      this.db.collection(question, data => data.where('respostaCorfio', '==', 'bom'))
                                                .valueChanges()
                                                .subscribe(doc => {contaBom.push(doc.length); });

      this.db.collection(question, data => data.where('respostaCorfio', '==', 'regular'))
                                                .valueChanges()
                                                .subscribe(doc => {contaRegular.push(doc.length); });

      this.db.collection(question, data => data.where('respostaCorfio', '==', 'ruim'))
                                                .valueChanges()
                                                .subscribe(doc => {contaRuim.push(doc.length); });



      setTimeout(() => {

        const reducer     = (acc, current) => acc + current;
        const somaOtimo   = contaOtimo.reduce(reducer);
        const somaBom     = contaBom.reduce(reducer);
        const somaRegular = contaRegular.reduce(reducer);
        const somaRuim    = contaRuim.reduce(reducer);

        const totAsp    = 100 / (somaOtimo + somaBom + somaRegular + somaRuim);
        const otmBom = ((somaOtimo + somaBom) * totAsp).toFixed(0);


      }, 8000);

    });
  }

}
