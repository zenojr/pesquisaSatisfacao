import { map } from 'rxjs/operators';
import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { ChartOptions, ChartType, ChartDataSets } from 'chart.js';
import { Label } from 'ng2-charts';



@Component({
  selector: 'app-relatorios',
  templateUrl: './relatorios.component.html',
  styleUrls: ['./relatorios.component.css']
})
export class RelatoriosComponent implements OnInit {


  public barChartOptions: ChartOptions = {
    responsive: true,
    // We use these empty structures as placeholders for dynamic theming.
    scales: { xAxes: [{}], yAxes: [{}] },
    plugins: {
      datalabels: {
        anchor: 'end',
        align: 'end',
      }
    }
  };
  public barChartLabels: Label[] = ['Ótimo', 'Bom', 'Regular', 'Ruim'];
  public barChartLabelsAstec: Label[] = ['Ótimo', 'Bom', 'Regular', 'Ruim', 'Não uso'];
  public barChartType: ChartType = 'bar';
  public barChartLegend = true;

  public barChartAstec: ChartDataSets[] = [
    { data: [0, 0, 0, 0, 0], label: 'Resposta Corfio' },
    { data: [0, 0, 0, 0, 0], label: 'Resposta Outros' }
  ];

  public barChartidGravProd: ChartDataSets[] = [
    { data: [0, 0, 0, 0], label: 'Resposta Corfio' },
    { data: [0, 0, 0, 0], label: 'Resposta Outros' }
  ];

  public barChartFuncBob: ChartDataSets[] = [
    { data: [0, 0, 0, 0], label: 'Resposta Corfio' },
    { data: [0, 0, 0, 0], label: 'Resposta Outros' }
  ];

  public barChartFuncRolos: ChartDataSets[] = [
    { data: [0, 0, 0, 0], label: 'Resposta Corfio' },
    { data: [0, 0, 0, 0], label: 'Resposta Outros' }
  ];
  public barChartFuncBobinas: ChartDataSets[] = [
    { data: [0, 0, 0, 0], label: 'Resposta Corfio' },
    { data: [0, 0, 0, 0], label: 'Resposta Outros' }
  ];
  public barChartUnifTec: ChartDataSets[] = [
    { data: [0, 0, 0, 0], label: 'Resposta Corfio' },
    { data: [0, 0, 0, 0], label: 'Resposta Outros' }
  ];

  public barChartDesemProd: ChartDataSets[] = [
    { data: [0, 0, 0, 0], label: 'Resposta Corfio' },
    { data: [0, 0, 0, 0], label: 'Resposta Outros' }
  ];

  public barChartIdentProdRolo: ChartDataSets[] = [
    { data: [0, 0, 0, 0], label: 'Resposta Corfio' },
    { data: [0, 0, 0, 0], label: 'Resposta Outros' }
  ];

  countRespostasAstec: any;
  countRespostasidGravProd: any;
  countRespostasUnifTec: any;
  countRespostasDesemProd: any;
  countRespostasFuncRolos: any;
  countRespostasFuncBobinas: any;
  countRespostasProdRolo: any;
  countRespostasProdBob: any;

  constructor(private db: AngularFirestore) {}


  ngOnInit() {
    this.respostasAstec();
    this.respostasIdGravProd();
    this.respostasFuncRolos();
    this.respostasUnifTec();
    this.respostasFuncBobinas();
    this.respostasDesemProd();
    this.respostasProdRolo();
    this.respostasProdBob();
  }

  respostasAstec() {
    let otimoCorfio = 0;
    let otimoOutros = 0;
    let bomCorfio = 0;
    let bomOutros = 0;
    let regularCorfio = 0;
    let regularOutros = 0;
    let ruimCorfio = 0;
    let ruimOutros = 0;
    let naoUsoCorfio = 0;
    let naoUsoOutros = 0;

    this.db.collection('Assistência Técnica', ref => ref.where( 'respostaCorfio', '==', 'ótimo' ))
    .valueChanges().subscribe(doc => otimoCorfio = doc.length );
    this.db.collection('Assistência Técnica', ref => ref.where( 'respostaOutros', '==', 'ótimo' ))
    .valueChanges().subscribe(doc => otimoOutros = doc.length );

    this.db.collection('Assistência Técnica', ref => ref.where( 'respostaCorfio', '==', 'bom' ))
    .valueChanges().subscribe(doc => bomCorfio = doc.length);
    this.db.collection('Assistência Técnica', ref => ref.where( 'respostaOutros', '==', 'bom' ))
    .valueChanges().subscribe(doc => bomOutros = doc.length);

    this.db.collection('Assistência Técnica', ref => ref.where( 'respostaCorfio', '==', 'regular' ))
    .valueChanges().subscribe(doc => regularCorfio = doc.length);
    this.db.collection('Assistência Técnica', ref => ref.where( 'respostaOutros', '==', 'regular' ))
    .valueChanges().subscribe(doc => regularOutros = doc.length);

    this.db.collection('Assistência Técnica', ref => ref.where( 'respostaCorfio', '==', 'ruim' ))
    .valueChanges().subscribe(doc => ruimCorfio = doc.length);
    this.db.collection('Assistência Técnica', ref => ref.where( 'respostaOutros', '==', 'ruim' ))
    .valueChanges().subscribe(doc => ruimOutros = doc.length);

    this.db.collection('Assistência Técnica', ref => ref.where( 'respostaCorfio', '==', 'não uso' ))
    .valueChanges().subscribe(doc => naoUsoCorfio = doc.length);
    this.db.collection('Assistência Técnica', ref => ref.where( 'respostaOutros', '==', 'não uso' ))
    .valueChanges().subscribe(doc => {naoUsoOutros = doc.length;  });

    setTimeout(() => {
      this.barChartAstec = [
        { data: [otimoCorfio, bomCorfio, regularCorfio, ruimCorfio, naoUsoCorfio], label: 'Resposta Corfio' },
        { data: [otimoOutros, bomOutros, regularOutros, ruimOutros, naoUsoOutros], label: 'Resposta Outros' }
      ];
    }, 6000);

    this.db.collection('Assistência Técnica',
    ref => ref.orderBy( 'respostaCorfio', 'asc' ))
    .valueChanges().subscribe(doc => {
      this.countRespostasAstec = doc.length;
      console.log(this.countRespostasAstec);
      
    } );

  }


  respostasIdGravProd() {
    let otimoCorfio = 0;
    let otimoOutros = 0;
    let bomCorfio = 0;
    let bomOutros = 0;
    let regularCorfio = 0;
    let regularOutros = 0;
    let ruimCorfio = 0;
    let ruimOutros = 0;

    this.db.collection('Identificação (gravação) nos produtos', ref => ref.where( 'respostaCorfio', '==', 'ótimo' ))
    .valueChanges().subscribe(doc => otimoCorfio = doc.length );
    this.db.collection('Identificação (gravação) nos produtos', ref => ref.where( 'respostaOutros', '==', 'ótimo' ))
    .valueChanges().subscribe(doc => otimoOutros = doc.length );

    this.db.collection('Identificação (gravação) nos produtos', ref => ref.where( 'respostaCorfio', '==', 'bom' ))
    .valueChanges().subscribe(doc => bomCorfio = doc.length);
    this.db.collection('Identificação (gravação) nos produtos', ref => ref.where( 'respostaOutros', '==', 'bom' ))
    .valueChanges().subscribe(doc => bomOutros = doc.length);

    this.db.collection('Identificação (gravação) nos produtos', ref => ref.where( 'respostaCorfio', '==', 'regular' ))
    .valueChanges().subscribe(doc => regularCorfio = doc.length);
    this.db.collection('Identificação (gravação) nos produtos', ref => ref.where( 'respostaOutros', '==', 'regular' ))
    .valueChanges().subscribe(doc => regularOutros = doc.length);

    this.db.collection('Identificação (gravação) nos produtos', ref => ref.where( 'respostaCorfio', '==', 'ruim' ))
    .valueChanges().subscribe(doc => ruimCorfio = doc.length);
    this.db.collection('Identificação (gravação) nos produtos', ref => ref.where( 'respostaOutros', '==', 'ruim' ))
    .valueChanges().subscribe(doc => ruimOutros = doc.length);

    setTimeout(() => {
      this.barChartidGravProd = [
        { data: [otimoCorfio, bomCorfio, regularCorfio, ruimCorfio], label: 'Resposta Corfio' },
        { data: [otimoOutros, bomOutros, regularOutros, ruimOutros], label: 'Resposta Outros' }
      ];
    }, 6000);

    this.db.collection('Identificação (gravação) nos produtos',
    ref => ref.orderBy( 'respostaCorfio', 'asc' ))
    .valueChanges().subscribe(doc => {
      this.countRespostasidGravProd = doc.length;
      console.log(this.countRespostasidGravProd);
    } );

  }


  respostasProdBob() {
    let otimoCorfio = 0;
    let otimoOutros = 0;
    let bomCorfio = 0;
    let bomOutros = 0;
    let regularCorfio = 0;
    let regularOutros = 0;
    let ruimCorfio = 0;
    let ruimOutros = 0;

    this.db.collection('Identificação (etiqueta) dos produtos em bobinas', ref => ref.where( 'respostaCorfio', '==', 'ótimo' ))
    .valueChanges().subscribe(doc => otimoCorfio = doc.length );
    this.db.collection('Identificação (etiqueta) dos produtos em bobinas',ref => ref.where( 'respostaOutros', '==', 'ótimo' ))
    .valueChanges().subscribe(doc => otimoOutros = doc.length );

    this.db.collection('Identificação (etiqueta) dos produtos em bobinas', ref => ref.where( 'respostaCorfio', '==', 'bom' ))
    .valueChanges().subscribe(doc => bomCorfio = doc.length);
    this.db.collection('Identificação (etiqueta) dos produtos em bobinas', ref => ref.where( 'respostaOutros', '==', 'bom' ))
    .valueChanges().subscribe(doc => bomOutros = doc.length);

    this.db.collection('Identificação (etiqueta) dos produtos em bobinas', ref => ref.where( 'respostaCorfio', '==', 'regular' ))
    .valueChanges().subscribe(doc => regularCorfio = doc.length);
    this.db.collection('Identificação (etiqueta) dos produtos em bobinas', ref => ref.where( 'respostaOutros', '==', 'regular' ))
    .valueChanges().subscribe(doc => regularOutros = doc.length);

    this.db.collection('Identificação (etiqueta) dos produtos em bobinas', ref => ref.where( 'respostaCorfio', '==', 'ruim' ))
    .valueChanges().subscribe(doc => ruimCorfio = doc.length);
    this.db.collection('Identificação (etiqueta) dos produtos em bobinas', ref => ref.where( 'respostaOutros', '==', 'ruim' ))
    .valueChanges().subscribe(doc => ruimOutros = doc.length);

    setTimeout(() => {
      this.barChartFuncBob = [
        { data: [otimoCorfio, bomCorfio, regularCorfio, ruimCorfio], label: 'Resposta Corfio' },
        { data: [otimoOutros, bomOutros, regularOutros, ruimOutros], label: 'Resposta Outros' }
      ];
    }, 6000);

    this.db.collection('Identificação (etiqueta) dos produtos em bobinas',
    ref => ref.orderBy( 'respostaCorfio', 'asc' ))
    .valueChanges().subscribe(doc => {
      this.countRespostasProdBob = doc.length;
      console.log(this.countRespostasProdBob);
    } );

  }

  respostasProdRolo() {
    let otimoCorfio = 0;
    let otimoOutros = 0;
    let bomCorfio = 0;
    let bomOutros = 0;
    let regularCorfio = 0;
    let regularOutros = 0;
    let ruimCorfio = 0;
    let ruimOutros = 0;

    this.db.collection('Identificação (etiqueta) dos produtos em rolos', ref => ref.where( 'respostaCorfio', '==', 'ótimo' ))
    .valueChanges().subscribe(doc => otimoCorfio = doc.length );
    this.db.collection('Identificação (etiqueta) dos produtos em rolos',ref => ref.where( 'respostaOutros', '==', 'ótimo' ))
    .valueChanges().subscribe(doc => otimoOutros = doc.length );

    this.db.collection('Identificação (etiqueta) dos produtos em rolos', ref => ref.where( 'respostaCorfio', '==', 'bom' ))
    .valueChanges().subscribe(doc => bomCorfio = doc.length);
    this.db.collection('Identificação (etiqueta) dos produtos em rolos', ref => ref.where( 'respostaOutros', '==', 'bom' ))
    .valueChanges().subscribe(doc => bomOutros = doc.length);

    this.db.collection('Identificação (etiqueta) dos produtos em rolos', ref => ref.where( 'respostaCorfio', '==', 'regular' ))
    .valueChanges().subscribe(doc => regularCorfio = doc.length);
    this.db.collection('Identificação (etiqueta) dos produtos em rolos', ref => ref.where( 'respostaOutros', '==', 'regular' ))
    .valueChanges().subscribe(doc => regularOutros = doc.length);

    this.db.collection('Identificação (etiqueta) dos produtos em rolos', ref => ref.where( 'respostaCorfio', '==', 'ruim' ))
    .valueChanges().subscribe(doc => ruimCorfio = doc.length);
    this.db.collection('Identificação (etiqueta) dos produtos em rolos', ref => ref.where( 'respostaOutros', '==', 'ruim' ))
    .valueChanges().subscribe(doc => ruimOutros = doc.length);

    setTimeout(() => {
      this.barChartIdentProdRolo = [
        { data: [otimoCorfio, bomCorfio, regularCorfio, ruimCorfio], label: 'Resposta Corfio' },
        { data: [otimoOutros, bomOutros, regularOutros, ruimOutros], label: 'Resposta Outros' }
      ];
    }, 6000);

    this.db.collection('Identificação (etiqueta) dos produtos em rolos',
    ref => ref.orderBy( 'respostaCorfio', 'asc' ))
    .valueChanges().subscribe(doc => {
      this.countRespostasProdRolo = doc.length;
      console.log(this.countRespostasProdRolo);
    } );

  }

  respostasDesemProd() {
    let otimoCorfio = 0;
    let otimoOutros = 0;
    let bomCorfio = 0;
    let bomOutros = 0;
    let regularCorfio = 0;
    let regularOutros = 0;
    let ruimCorfio = 0;
    let ruimOutros = 0;

    this.db.collection('Desempenho do produto', ref => ref.where( 'respostaCorfio', '==', 'ótimo' ))
    .valueChanges().subscribe(doc => otimoCorfio = doc.length );
    this.db.collection('Desempenho do produto',ref => ref.where( 'respostaOutros', '==', 'ótimo' ))
    .valueChanges().subscribe(doc => otimoOutros = doc.length );

    this.db.collection('Desempenho do produto', ref => ref.where( 'respostaCorfio', '==', 'bom' ))
    .valueChanges().subscribe(doc => bomCorfio = doc.length);
    this.db.collection('Desempenho do produto', ref => ref.where( 'respostaOutros', '==', 'bom' ))
    .valueChanges().subscribe(doc => bomOutros = doc.length);

    this.db.collection('Desempenho do produto', ref => ref.where( 'respostaCorfio', '==', 'regular' ))
    .valueChanges().subscribe(doc => regularCorfio = doc.length);
    this.db.collection('Desempenho do produto', ref => ref.where( 'respostaOutros', '==', 'regular' ))
    .valueChanges().subscribe(doc => regularOutros = doc.length);

    this.db.collection('Desempenho do produto', ref => ref.where( 'respostaCorfio', '==', 'ruim' ))
    .valueChanges().subscribe(doc => ruimCorfio = doc.length);
    this.db.collection('Desempenho do produto', ref => ref.where( 'respostaOutros', '==', 'ruim' ))
    .valueChanges().subscribe(doc => ruimOutros = doc.length);

    setTimeout(() => {
      this.barChartDesemProd = [
        { data: [otimoCorfio, bomCorfio, regularCorfio, ruimCorfio], label: 'Resposta Corfio' },
        { data: [otimoOutros, bomOutros, regularOutros, ruimOutros], label: 'Resposta Outros' }
      ];
    }, 6000);

    this.db.collection('Desempenho do produto',
    ref => ref.orderBy( 'respostaCorfio', 'asc' ))
    .valueChanges().subscribe(doc => {
      this.countRespostasDesemProd = doc.length;
      console.log(this.countRespostasDesemProd);
    } );

  }

  respostasUnifTec() {
    let otimoCorfio = 0;
    let otimoOutros = 0;
    let bomCorfio = 0;
    let bomOutros = 0;
    let regularCorfio = 0;
    let regularOutros = 0;
    let ruimCorfio = 0;
    let ruimOutros = 0;

    this.db.collection('Uniformidades das características técnicas', ref => ref.where( 'respostaCorfio', '==', 'ótimo' ))
    .valueChanges().subscribe(doc => otimoCorfio = doc.length );
    this.db.collection('Uniformidades das características técnicas',ref => ref.where( 'respostaOutros', '==', 'ótimo' ))
    .valueChanges().subscribe(doc => otimoOutros = doc.length );

    this.db.collection('Uniformidades das características técnicas', ref => ref.where( 'respostaCorfio', '==', 'bom' ))
    .valueChanges().subscribe(doc => bomCorfio = doc.length);
    this.db.collection('Uniformidades das características técnicas', ref => ref.where( 'respostaOutros', '==', 'bom' ))
    .valueChanges().subscribe(doc => bomOutros = doc.length);

    this.db.collection('Uniformidades das características técnicas', ref => ref.where( 'respostaCorfio', '==', 'regular' ))
    .valueChanges().subscribe(doc => regularCorfio = doc.length);
    this.db.collection('Uniformidades das características técnicas', ref => ref.where( 'respostaOutros', '==', 'regular' ))
    .valueChanges().subscribe(doc => regularOutros = doc.length);

    this.db.collection('Uniformidades das características técnicas', ref => ref.where( 'respostaCorfio', '==', 'ruim' ))
    .valueChanges().subscribe(doc => ruimCorfio = doc.length);
    this.db.collection('Uniformidades das características técnicas', ref => ref.where( 'respostaOutros', '==', 'ruim' ))
    .valueChanges().subscribe(doc => ruimOutros = doc.length);

    setTimeout(() => {
      this.barChartUnifTec = [
        { data: [otimoCorfio, bomCorfio, regularCorfio, ruimCorfio], label: 'Resposta Corfio' },
        { data: [otimoOutros, bomOutros, regularOutros, ruimOutros], label: 'Resposta Outros' }
      ];
    }, 6000);
    this.db.collection('Uniformidades das características técnicas',
    ref => ref.orderBy( 'respostaCorfio', 'asc' ))
    .valueChanges().subscribe(doc => {
      this.countRespostasUnifTec = doc.length;
      console.log(this.countRespostasUnifTec);
    } );

  }

  respostasFuncRolos() {
    let otimoCorfio = 0;
    let otimoOutros = 0;
    let bomCorfio = 0;
    let bomOutros = 0;
    let regularCorfio = 0;
    let regularOutros = 0;
    let ruimCorfio = 0;
    let ruimOutros = 0;


    this.db.collection('Funcionalidade da embalagem dos produtos em rolos', ref => ref.where( 'respostaCorfio', '==', 'ótimo' ))
    .valueChanges().subscribe(doc => otimoCorfio = doc.length );
    this.db.collection('Funcionalidade da embalagem dos produtos em rolos',ref => ref.where( 'respostaOutros', '==', 'ótimo' ))
    .valueChanges().subscribe(doc => otimoOutros = doc.length );

    this.db.collection('Funcionalidade da embalagem dos produtos em rolos', ref => ref.where( 'respostaCorfio', '==', 'bom' ))
    .valueChanges().subscribe(doc => bomCorfio = doc.length);
    this.db.collection('Funcionalidade da embalagem dos produtos em rolos', ref => ref.where( 'respostaOutros', '==', 'bom' ))
    .valueChanges().subscribe(doc => bomOutros = doc.length);

    this.db.collection('Funcionalidade da embalagem dos produtos em rolos', ref => ref.where( 'respostaCorfio', '==', 'regular' ))
    .valueChanges().subscribe(doc => regularCorfio = doc.length);
    this.db.collection('Funcionalidade da embalagem dos produtos em rolos', ref => ref.where( 'respostaOutros', '==', 'regular' ))
    .valueChanges().subscribe(doc => regularOutros = doc.length);

    this.db.collection('Funcionalidade da embalagem dos produtos em rolos', ref => ref.where( 'respostaCorfio', '==', 'ruim' ))
    .valueChanges().subscribe(doc => ruimCorfio = doc.length);
    this.db.collection('Funcionalidade da embalagem dos produtos em rolos', ref => ref.where( 'respostaOutros', '==', 'ruim' ))
    .valueChanges().subscribe(doc => ruimOutros = doc.length);

    setTimeout(() => {
      this.barChartFuncRolos = [
        { data: [otimoCorfio, bomCorfio, regularCorfio, ruimCorfio], label: 'Resposta Corfio' },
        { data: [otimoOutros, bomOutros, regularOutros, ruimOutros], label: 'Resposta Outros' }
      ];

    }, 6000);

    this.db.collection('Funcionalidade da embalagem dos produtos em rolos',
    ref => ref.orderBy( 'respostaCorfio', 'asc' ))
    .valueChanges().subscribe(doc => {
      this.countRespostasFuncRolos = doc.length;
      console.log('contador:' + this.countRespostasFuncRolos);
    } );

    this.db.collection('Funcionalidade da embalagem dos produtos em rolos')
    .snapshotChanges()
    .pipe(map(docArray => {
      return docArray.map(doc => {
        return {
          id: doc.payload.doc.id
        };
      });
    })).subscribe(retorno => console.log(retorno));

  }

  respostasFuncBobinas() {

    let otimoCorfio = 0;
    let otimoOutros = 0;
    let bomCorfio = 0;
    let bomOutros = 0;
    let regularCorfio = 0;
    let regularOutros = 0;
    let ruimCorfio = 0;
    let ruimOutros = 0;

    this.db.collection('Funcionalidade da embalagem dos produtos em bobinas', ref => ref.where( 'respostaCorfio', '==', 'ótimo' ))
    .valueChanges().subscribe(doc => otimoCorfio = doc.length );
    this.db.collection('Funcionalidade da embalagem dos produtos em bobinas',ref => ref.where( 'respostaOutros', '==', 'ótimo' ))
    .valueChanges().subscribe(doc => otimoOutros = doc.length );

    this.db.collection('Funcionalidade da embalagem dos produtos em bobinas', ref => ref.where( 'respostaCorfio', '==', 'bom' ))
    .valueChanges().subscribe(doc => bomCorfio = doc.length);
    this.db.collection('Funcionalidade da embalagem dos produtos em bobinas', ref => ref.where( 'respostaOutros', '==', 'bom' ))
    .valueChanges().subscribe(doc => bomOutros = doc.length);

    this.db.collection('Funcionalidade da embalagem dos produtos em bobinas', ref => ref.where( 'respostaCorfio', '==', 'regular' ))
    .valueChanges().subscribe(doc => regularCorfio = doc.length);
    this.db.collection('Funcionalidade da embalagem dos produtos em bobinas', ref => ref.where( 'respostaOutros', '==', 'regular' ))
    .valueChanges().subscribe(doc => regularOutros = doc.length);

    this.db.collection('Funcionalidade da embalagem dos produtos em bobinas', ref => ref.where( 'respostaCorfio', '==', 'ruim' ))
    .valueChanges().subscribe(doc => ruimCorfio = doc.length);
    this.db.collection('Funcionalidade da embalagem dos produtos em bobinas', ref => ref.where( 'respostaOutros', '==', 'ruim' ))
    .valueChanges().subscribe(doc => ruimOutros = doc.length);
    this.db.collection('Funcionalidade da embalagem dos produtos em bobinas', ref => ref.where( 'respostaOutros', '==', 'ruim' ))
    .valueChanges().subscribe(doc => ruimOutros = doc.length);

    setTimeout(() => {
      this.barChartFuncBobinas = [
        { data: [otimoCorfio, bomCorfio, regularCorfio, ruimCorfio], label: 'Resposta Corfio' },
        { data: [otimoOutros, bomOutros, regularOutros, ruimOutros], label: 'Resposta Outros' }
      ];
    }, 6000);
    this.db.collection('Funcionalidade da embalagem dos produtos em bobinas',
    ref => ref.orderBy( 'respostaCorfio', 'asc' ))
    .valueChanges().subscribe(doc => {
      this.countRespostasFuncBobinas = doc.length;
    } );
  }

}



