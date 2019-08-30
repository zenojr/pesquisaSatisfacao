import { RelgchartService } from './relgchart.service';
import { Component, OnInit } from '@angular/core';
import { GoogleChartInterface } from 'ng2-google-charts/google-charts-interfaces';
import { AngularFirestore} from '@angular/fire/firestore';


@Component({
  selector: 'app-relatorios-gchart',
  templateUrl: './relatorios-gchart.component.html',
  styleUrls: ['./relatorios-gchart.component.css']
})
export class RelatoriosGChartComponent implements OnInit {

  graphAspecTec: GoogleChartInterface;
  graphFuncProdRolo: GoogleChartInterface;

  constructor( private db: AngularFirestore, private relService: RelgchartService ) {}

  ngOnInit() {
    this.respostasAstec();
    this.respostasFuncProdRolo();
  }

  respostasFuncProdRolo() {
    let otimoCorfio   = 0;
    let otimoOutros   = 0;
    let bomCorfio     = 0;
    let bomOutros     = 0;
    let regularCorfio = 0;
    let regularOutros = 0;
    let ruimCorfio    = 0;
    let ruimOutros    = 0;
    let naoUsoCorfio  = 0;
    let naoUsoOutros  = 0;
    const pergunta    = 'Funcionalidade da embalagem dos produtos em rolos';

    this.db.collection(pergunta, ref => ref
                                     .where( 'respostaCorfio', '==', 'ótimo' ))
                                     .valueChanges()
                                     .subscribe( doc => otimoCorfio = doc.length );
    this.db.collection(pergunta, ref => ref
                                     .where( 'respostaOutros', '==', 'ótimo' ))
                                     .valueChanges()
                                     .subscribe(doc => otimoOutros = doc.length );

    this.db.collection(pergunta, ref => ref
                                     .where( 'respostaCorfio', '==', 'bom' ))
                                     .valueChanges()
                                     .subscribe(doc => bomCorfio = doc.length);
    this.db.collection(pergunta, ref => ref
                                     .where( 'respostaOutros', '==', 'bom' ))
                                     .valueChanges()
                                     .subscribe(doc => bomOutros = doc.length);

    this.db.collection(pergunta, ref => ref
                                     .where( 'respostaCorfio', '==', 'regular' ))
                                     .valueChanges()
                                     .subscribe(doc => regularCorfio = doc.length);
    this.db.collection(pergunta, ref => ref
                                     .where( 'respostaOutros', '==', 'regular' ))
                                     .valueChanges()
                                     .subscribe(doc => regularOutros = doc.length);

    this.db.collection(pergunta, ref => ref
                                     .where( 'respostaCorfio', '==', 'ruim' ))
                                     .valueChanges()
                                     .subscribe(doc => ruimCorfio = doc.length);
    this.db.collection(pergunta, ref => ref
                                     .where( 'respostaOutros', '==', 'ruim' ))
                                     .valueChanges()
                                     .subscribe(doc => ruimOutros = doc.length);
    this.db.collection(pergunta, ref => ref
                                     .where( 'respostaCorfio', '==', 'não uso' ))
                                     .valueChanges()
                                     .subscribe(doc => naoUsoCorfio = doc.length);
    this.db.collection(pergunta, ref => ref
                                     .where( 'respostaOutros', '==', 'não uso' ))
                                     .valueChanges()
                                     .subscribe(doc => {naoUsoOutros = doc.length;  });

    setTimeout(() => {
      this.graphFuncProdRolo = this.relService.buildGraphColumn(
        otimoCorfio,
        otimoOutros,
        bomCorfio,
        bomOutros,
        regularCorfio,
        regularOutros,
        ruimCorfio,
        ruimOutros,
        naoUsoCorfio,
        naoUsoOutros,
        this.graphFuncProdRolo,
        pergunta);
    }, 3000);

  }


  respostasAstec() {
    let otimoCorfio   = 0;
    let otimoOutros   = 0;
    let bomCorfio     = 0;
    let bomOutros     = 0;
    let regularCorfio = 0;
    let regularOutros = 0;
    let ruimCorfio    = 0;
    let ruimOutros    = 0;
    let naoUsoCorfio  = 0;
    let naoUsoOutros  = 0;
    const pergunta    = 'Assistência Técnica';

    this.db.collection(pergunta, ref => ref
                                     .where( 'respostaCorfio', '==', 'ótimo' ))
                                     .valueChanges()
                                     .subscribe( doc => otimoCorfio = doc.length );
    this.db.collection(pergunta, ref => ref
                                     .where( 'respostaOutros', '==', 'ótimo' ))
                                     .valueChanges()
                                     .subscribe(doc => otimoOutros = doc.length );

    this.db.collection(pergunta, ref => ref
                                     .where( 'respostaCorfio', '==', 'bom' ))
                                     .valueChanges()
                                     .subscribe(doc => bomCorfio = doc.length);
    this.db.collection(pergunta, ref => ref
                                     .where( 'respostaOutros', '==', 'bom' ))
                                     .valueChanges()
                                     .subscribe(doc => bomOutros = doc.length);

    this.db.collection(pergunta, ref => ref
                                     .where( 'respostaCorfio', '==', 'regular' ))
                                     .valueChanges()
                                     .subscribe(doc => regularCorfio = doc.length);
    this.db.collection(pergunta, ref => ref
                                     .where( 'respostaOutros', '==', 'regular' ))
                                     .valueChanges()
                                     .subscribe(doc => regularOutros = doc.length);

    this.db.collection(pergunta, ref => ref
                                     .where( 'respostaCorfio', '==', 'ruim' ))
                                     .valueChanges()
                                     .subscribe(doc => ruimCorfio = doc.length);
    this.db.collection(pergunta, ref => ref
                                     .where( 'respostaOutros', '==', 'ruim' ))
                                     .valueChanges()
                                     .subscribe(doc => ruimOutros = doc.length);
    this.db.collection(pergunta, ref => ref
                                     .where( 'respostaCorfio', '==', 'não uso' ))
                                     .valueChanges()
                                     .subscribe(doc => naoUsoCorfio = doc.length);
    this.db.collection(pergunta, ref => ref
                                     .where( 'respostaOutros', '==', 'não uso' ))
                                     .valueChanges()
                                     .subscribe(doc => {naoUsoOutros = doc.length;  });

    setTimeout(() => {
      this.graphAspecTec = this.relService.buildGraphColumn(
        otimoCorfio,
        otimoOutros,
        bomCorfio,
        bomOutros,
        regularCorfio,
        regularOutros,
        ruimCorfio,
        ruimOutros,
        naoUsoCorfio,
        naoUsoOutros,
        this.graphAspecTec,
        pergunta);
    }, 3000);

  }



}
