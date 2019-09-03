import { Component, OnInit    } from '@angular/core';
import { GoogleChartInterface } from 'ng2-google-charts/google-charts-interfaces';
import { RelgchartService     } from '../relgchart.service';
import { AngularFirestore     } from '@angular/fire/firestore';

@Component({
  selector: 'app-relatorios-img-prod',
  templateUrl: './relatorios-img-prod.component.html',
  styleUrls: ['./relatorios-img-prod.component.css']
})
export class RelatoriosImgProdComponent implements OnInit {

  graphAceitProd:   GoogleChartInterface;
  graphConceitProd: GoogleChartInterface;
  graphProdConhec:  GoogleChartInterface;

  showProg    = true;
  alreadyLoad = false;

  constructor(private db: AngularFirestore, private relService: RelgchartService) { }

  ngOnInit() {
  }

  loadRespImgProd() {
    this.showProg = true;
    setTimeout(() => { this.showProg = false; }, 3000 );

    if (!this.alreadyLoad) {
      this.respAceitProd();
      this.respConceitProd();
      this.respProdConhec();
      this.alreadyLoad = true;
    }
  }

  respProdConhec() {
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
    const customQuest   = null;
    const pergunta    = 'Os produtos são conhecidos?';

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

    setTimeout(() => {
      this.graphProdConhec = this.relService.buildGraphColumn(
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
        this.graphProdConhec,
        pergunta,
        customQuest);
    }, 3000);
  }

  respConceitProd() {
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
    const customQuest   = null;
    const pergunta    = 'Conceito do produto junto ao usuário';

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

    setTimeout(() => {
      this.graphConceitProd = this.relService.buildGraphColumn(
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
        this.graphConceitProd,
        pergunta,
        customQuest);
    }, 3000);
  }

  respAceitProd() {
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
    const customQuest   = null;
    const pergunta    = 'Aceitação dos produtos no mercado';

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

    setTimeout(() => {
      this.graphAceitProd = this.relService.buildGraphColumn(
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
        this.graphAceitProd,
        pergunta,
        customQuest);
    }, 3000);
  }

}
