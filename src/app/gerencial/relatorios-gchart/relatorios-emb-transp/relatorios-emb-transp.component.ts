import { Component, OnInit    } from '@angular/core';
import { GoogleChartInterface } from 'ng2-google-charts/google-charts-interfaces';
import { RelgchartService     } from '../relgchart.service';
import { AngularFirestore     } from '@angular/fire/firestore';

@Component({
  selector: 'app-relatorios-emb-transp',
  templateUrl: './relatorios-emb-transp.component.html',
  styleUrls: ['./relatorios-emb-transp.component.css']
})
export class RelatoriosEmbTranspComponent implements OnInit {

  graphAtendTransp: GoogleChartInterface;
  graphPresFis:     GoogleChartInterface;
  graphPresEmbProd: GoogleChartInterface;

  showProg    = true;
  alreadyLoad = false;
  constructor(private db: AngularFirestore, private relService: RelgchartService) { }

  ngOnInit() {
  }

  loadRespEmbTransp() {
    this.showProg = true;
    setTimeout(() => { this.showProg = false; }, 3000 );
    if (!this.alreadyLoad) {
      this.respAtendTransp();
      this.respPresFis();
      this.respPresEmbProd();
      this.alreadyLoad = true;
    }
  }

  respPresEmbProd() {
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
    const customQuest = null;
    const pergunta    = 'Preservação das embalagens dos produtos no recebimento (Carretéis, embalagens plásticas, sacarias e paletizações)';

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
      this.graphPresEmbProd = this.relService.buildGraphColumn(
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
        this.graphPresEmbProd,
        pergunta,
        customQuest);
    }, 3000);
  }

  respPresFis() {
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
    const customQuest = null;
    const pergunta    = 'Preservação física dos produtos';

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
      this.graphPresFis = this.relService.buildGraphColumn(
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
        this.graphPresFis,
        pergunta,
        customQuest);
    }, 3000);
  }

  respAtendTransp() {
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
    const customQuest = null;
    const pergunta    = 'Atendimento das transportadoras';

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
      this.graphAtendTransp = this.relService.buildGraphColumn(
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
        this.graphAtendTransp,
        pergunta,
        customQuest);
    }, 3000);
  }

}
