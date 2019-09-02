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

  graphAspecTec:     GoogleChartInterface;
  graphFuncProdRolo: GoogleChartInterface;
  graphFuncProdBob:  GoogleChartInterface;
  graphUnifCarTec:   GoogleChartInterface;
  graphDesempProd:   GoogleChartInterface;
  graphIdProdRolo:   GoogleChartInterface;
  graphIdProdBob:    GoogleChartInterface;
  graphProdCompra:   GoogleChartInterface;
  graphIdGravProd:   GoogleChartInterface;

  showProg    = true;
  alreadyLoad = false;

  constructor( private db: AngularFirestore, private relService: RelgchartService ) {}

  ngOnInit() {

  }

  loadRespAspecTec() {
    this.showProg = true;
    setTimeout(() => { this.showProg = false; }, 3000 );

    if (!this.alreadyLoad) {
      this.respAstec();
      this.respFuncProdRolo();
      this.respFuncProdBob();
      this.respUnifCarTec();
      this.respDesempProd();
      this.respIdProdRolo();
      this.respIdProdBob();
      this.respProdCompra();
      this.respIdGravProd();

      this.alreadyLoad = true;
    }
  }

  respIdGravProd() {
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
    const pergunta    = 'Identificação (gravação) nos produtos';

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
      this.graphIdGravProd = this.relService.buildGraphColumn(
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
        this.graphIdGravProd,
        pergunta);
    }, 3000);
  }

  respProdCompra() {
    let fiosCabos     = 0;
    let aluminio      = 0;
    let todos         = 0;

    const pergunta    = 'Quais produtos que sua empresa nos compra:';

    this.db.collection(pergunta, ref => ref
                                     .where( 'respostaCorfio', '==', 'Fios e Cabos elétricos de cobre' ))
                                     .valueChanges()
                                     .subscribe( doc => fiosCabos = doc.length );

    this.db.collection(pergunta, ref => ref
                                     .where( 'respostaCorfio', '==', 'Cabos de Alumínio' ))
                                     .valueChanges()
                                     .subscribe(doc => aluminio = doc.length);

    this.db.collection(pergunta, ref => ref
                                     .where( 'respostaCorfio', '==', 'Todos' ))
                                     .valueChanges()
                                     .subscribe(doc => todos = doc.length);

    setTimeout(() => {
      this.graphProdCompra = this.relService.buildGraphColumnCustom(
        fiosCabos,
        aluminio,
        todos,
        this.graphProdCompra,
        pergunta);
    }, 3000);
  }

  respIdProdBob() {
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
    const pergunta    = 'Identificação (etiqueta) dos produtos em bobinas';

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
      this.graphIdProdBob = this.relService.buildGraphColumn(
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
        this.graphIdProdBob,
        pergunta);
    }, 3000);
  }

  respIdProdRolo() {
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
    const pergunta    = 'Identificação (etiqueta) dos produtos em rolos';

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
      this.graphIdProdRolo = this.relService.buildGraphColumn(
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
        this.graphIdProdRolo,
        pergunta);
    }, 3000);
  }

  respDesempProd() {
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
    const pergunta    = 'Desempenho do produto';

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
      this.graphDesempProd = this.relService.buildGraphColumn(
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
        this.graphDesempProd,
        pergunta);
    }, 3000);
  }

  respUnifCarTec() {
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
    const pergunta    = 'Uniformidades das características técnicas';

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
      this.graphUnifCarTec = this.relService.buildGraphColumn(
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
        this.graphUnifCarTec,
        pergunta);
    }, 3000);
  }

  respFuncProdBob() {
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
    const pergunta    = 'Funcionalidade da embalagem dos produtos em bobinas';

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
      this.graphFuncProdBob = this.relService.buildGraphColumn(
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
        this.graphFuncProdBob,
        pergunta);
    }, 3000);

  }

  respFuncProdRolo() {
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

  respAstec() {
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
    const customQuest = 'não uso';
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
                                     .where( 'respostaCorfio', '==', customQuest ))
                                     .valueChanges()
                                     .subscribe(doc => naoUsoCorfio = doc.length);
    this.db.collection(pergunta, ref => ref
                                     .where( 'respostaOutros', '==', customQuest ))
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
        pergunta,
        customQuest);
    }, 3000);

  }



}
