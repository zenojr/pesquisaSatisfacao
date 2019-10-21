import { Component, OnInit } from '@angular/core';
import { GoogleChartInterface } from 'ng2-google-charts/google-charts-interfaces';
import { RelgchartService } from '../relgchart.service';
import { AngularFirestore} from '@angular/fire/firestore';

@Component({
  selector: 'app-relatorios-atend-rep',
  templateUrl: './relatorios-atend-rep.component.html',
  styleUrls: ['./relatorios-atend-rep.component.css']
})
export class RelatoriosAtendRepComponent implements OnInit {

  constructor(private db: AngularFirestore,
              private relService: RelgchartService ) { }

  graphCordGent: GoogleChartInterface;
  graphEfic:     GoogleChartInterface;
  graphRecept:   GoogleChartInterface;
  graphFreq:     GoogleChartInterface;
  graphLocali:   GoogleChartInterface;

  showProg    = true;
  alreadyLoad = false;

  ngOnInit() {
  }


  loadRespAtendRep() {
    this.showProg = true;
    setTimeout(() => { this.showProg = false; }, 3000 );

    if (!this.alreadyLoad) {
      this.respCordGent();
      this.respEfic();
      this.respRecept();
      this.respFreq();
      this.respLocali();
      this.alreadyLoad = true;
    }
  }

  respLocali() {
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
    const pergunta    = 'Facilidade de localização do representante';

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
      this.graphLocali = this.relService.buildGraphColumn(
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
        this.graphLocali,
        pergunta,
        customQuest);
    }, 3000);
  }

  respFreq() {
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
    const customQuest = 'não necessita';
    const pergunta    = 'Freqüência de visitas do representante atende a necessidade ´?';



    this.db.collection(pergunta, ref => ref
                                     .where( 'respostaCorfio', '==', 'ótimo' ))
                                     .valueChanges()
                                     .subscribe( doc => {otimoCorfio = doc.length;
                                                          console.log(doc.length);
                                                        } );
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
      this.graphFreq = this.relService.buildGraphColumn(
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
        this.graphFreq,
        pergunta,
        customQuest);
    }, 8000);
  }

  respRecept() {
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
    const pergunta    = 'Receptividade em situação de reclamações e sugestões';

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
      this.graphRecept = this.relService.buildGraphColumn(
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
        this.graphRecept,
        pergunta,);
    }, 3000);
  }

  respEfic() {
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
    const pergunta    = 'Eficiência em resolver problemas e atender solicitações';

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
      this.graphEfic = this.relService.buildGraphColumn(
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
        this.graphEfic,
        pergunta);
    }, 3000);
  }

  respCordGent() {
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
    const pergunta    = 'Cordialidade (gentileza) apresentada pelo representante';

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
      this.graphCordGent = this.relService.buildGraphColumn(
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
        this.graphCordGent,
        pergunta);
    }, 3000);
  }

}
