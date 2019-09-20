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

    graphAspTecUF: GoogleChartInterface;
  graphAtendRepUF: GoogleChartInterface;
   graphImgProdUF: GoogleChartInterface;
  graphAtendComUF: GoogleChartInterface;
    graphTranspUF: GoogleChartInterface;
         graphRep: GoogleChartInterface;

           showProg = true;
        alreadyLoad = false;

  cliente: Observable<DataClient[]>;

  // cnpjRespostas = [ '00495593000104',
  //                    '00212675000366',
  //                    '48539548000726',
  //                    '01816875000129'];

  cnpjRespostas = [ '00495593000104',
                    '00212675000366',
                    '48539548000726',
                    '01816875000129',
                    '21803974000183',
                    '75862961000295',
                    '16823179000117',
                    '08139035000118',
                    '00528952000182',
                    '76576198000118',
                    '82767831000158',
                    '87791992000109',
                    '01576708000158',
                    '20214195000180',
                    '22802967000120',
                    '17452769000143',
                    '85007326000101',
                    '83086603000185',
                    '11002659000101',
                    '23630623000143',
                    '09452299000190',
                    '01906851000160',
                    '11967105000130',
                    '01722901000150',
                    '78718673000179',
                    '00589066000169',
                    '00876873000162',
                    '79965331000116',
                    '03261204000336',
                    '04598063000142',
                    '07811984000130',
                    '08999064000230',
                    '71856447000105',
                    '02559947000162',
                    '20619518000115',
                    '51379576000142',
                    '73846560000135',
                    '27434911000183',
                    '00841350000180',
                    '00842602000196',
                    '11997015000192',
                    '04286673000100',
                    '75923243000109',
                    '24845459000154',
                    '47674429000390',
                    '85146868000157',
                    '08832547000165',
                    '15984883000199',
                    '85294031000155',
                    '15525934000114',
                    '80963598000153',
                    '09008659000169',
                    '79400065000184',
                    '80223324000128',
                    '00354022000150',
                    '83164806000142',
                    '73329286000127',
                    '02181482000159',
                    '11807582000139',
                    '80408248000125',
                    '21770011000120',
                    '28416105000145',
                    '85014793000150',
                    '02554116000106',
                    '19490367000169',
                    '95447330000136',
                    '09469493000188',
                    '01784320000142',
                    '12595954000173',
                    '63755664000180',
                    '04791310000122',
                    '00940878000107',
                    '25375597000180',
                    '02042020000150',
                    '06115132000145',
                    '01256464000126',
                    '10297492000182',
                    '49986037000120',
                    '11807156000103',
                    '08957686000115',
                    '27260519000165',
                    '18578828000359',
                    '01339514000562',
                    '21272121000162',
                    '80655053000260',
                    '76323518000128',
                    '24186294000156',
                    '75289157000188',
                    '79941902000182',
                    '00172143000180',
                    '01559046005762',
                    '82322082000155',
                    '16820777000132',
                    '81601353000149',
                    '06352100000163',
                    '83092213000118',
                    '19622616000122',
                    '13231670000160',
                    '97404842000140',
                    '17155342000345',
                    '83240333000115',
                    '13466189000154',
                    '02725006000151',
                    '02516659000120',
                    '07406982000165',
                    '06819531000197',
                    '88644901000167',
                    '20195021000117',
                    '43214055000107',
                    '96404942000104',
                    '70357959000164',
                    '09912137000197',
                    '76735356000135',
                    '02724345000113',
                    '23478130000130',
                    '97495550000160',
                    '46044053002906',
                    '78663267000156',
                    '02226707000146',
                    '00725876000103',
                    '07802253000128',
                    '00138093000115',
                    '04797412000155',
                    '08640180000188',
                    '01754239001000',
                    '05360952000130',
                    '08287673000186',
                    '00103788000676',
                    '12562938000184',
                    '17359233000188',
                    '87341186000120',
                    '07456717000191',
                    '78527082000114',
                    '90555202000192',
                    '02697297000111',
                    '12324723000125',
                    '81554933000122',
                    '02302466000177',
                    '07120505000139',
                    '14621282000159',
                    '21794561000180',
                    '02382238000154',
                    '89462071000110',
                    ];

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

  }


  loadCompGeral() {
    this.showProg = true;
    setTimeout(() => { this.showProg = false; }, 8000 );
    this.loadGraph();
    if (!this.alreadyLoad) {
      this.alreadyLoad = true;
    }
  }

  loadGraph() {
    this.graphAspTecUF = {
      chartType: 'ColumnChart',
      dataTable:  [
      ['opcao',        'Ótimo/Bom',    {role: 'annotation'}],
      ['ES',             100,           100  + '%'],
      ['MG',              96,            96  + '%'],
      ['MS',              88,            88  + '%'],
      ['MT',             100,           100  + '%'],
      ['PR',              97,            97  + '%'],
      ['RS',              97,            97  + '%'],
      ['SC',              93,            93  + '%'],
      ['SP',              90,            90  + '%']
      ],
      // opt_firstRowIsData: true,

      options: {
        title: 'Aspectos Técnicos',
      animation: {
        duration: 1000,
          easing: 'in',
         startup: true
      },
      vAxis: {
        viewWindow: {
          min: 0,
          max: 100
        },
        ticks: [0, 25, 50, 75, 100]
      },
      },
    };

    this.graphAtendRepUF = {
      chartType: 'ColumnChart',
      dataTable:  [
      ['opcao',        'Ótimo/Bom',    {role: 'annotation'}],
      ['BA',              92,            92  + '%'],
      ['ES',              95,            95  + '%'],
      ['GO',              95,            95  + '%'],
      ['MG',              92,            92  + '%'],
      ['MS',              92,            92  + '%'],
      ['MT',             100,           100  + '%'],
      ['PR',              96,            96  + '%'],
      ['RO',             100,           100  + '%'],
      ['RS',             100,           100  + '%'],
      ['SC',              95,            95  + '%'],
      ['SP',             100,           100  + '%']
      ],
      // opt_firstRowIsData: true,
      options: {
        title: 'Atendimento do Representante',
      animation: {
        duration: 1000,
          easing: 'in',
         startup: true
      },
      vAxis: {
        viewWindow: {
          min: 0,
          max: 100
        }
      },
      },
    };

    this.graphImgProdUF = {
      chartType: 'ColumnChart',
      dataTable:  [
      ['opcao',        'Ótimo/Bom',    {role: 'annotation'}],
      ['ES',             100,           100  + '%'],
      ['GO',             100,           100  + '%'],
      ['MG',             100,           100  + '%'],
      ['MS',             100,           100  + '%'],
      ['MT',             100,           100  + '%'],
      ['PR',              97,            97  + '%'],
      ['RJ',             100,           100  + '%'],
      ['RO',             100,           100  + '%'],
      ['RS',             100,           100  + '%'],
      ['SC',             100,           100  + '%'],
      ['SP',              94,            94  + '%'],
      ['TO',             100,           100  + '%']
      ],
      // opt_firstRowIsData: true,
      options: {
        title: 'Imagem dos Produtos',
      animation: {
        duration: 1000,
          easing: 'in',
         startup: true
      },
      vAxis: {
        viewWindow: {
          min: 0,
          max: 100
        }
      },
      },
    };

    this.graphAtendComUF = {
      chartType: 'ColumnChart',
      dataTable:  [
      ['opcao',        'Ótimo/Bom',    {role: 'annotation'}],
      ['ES',             100,           100  + '%'],
      ['GO',              81,            81  + '%'],
      ['MG',              87,            87  + '%'],
      ['MS',              97,            97  + '%'],
      ['MT',              96,            96  + '%'],
      ['PR',              93,            93  + '%'],
      ['RJ',             100,           100  + '%'],
      ['RO',              75,            75  + '%'],
      ['RS',             100,           100  + '%'],
      ['SC',              92,            92  + '%'],
      ['SP',              94,            94  + '%'],
      ['TO',             100,           100  + '%']
      ],
      // opt_firstRowIsData: true,
      options: {
        title: 'Atendimento Comercial',
      animation: {
        duration: 1000,
          easing: 'in',
         startup: true
      },
      vAxis: {
        viewWindow: {
          min: 0,
          max: 100
        }
      },
      },
    };

    this.graphTranspUF = {
      chartType: 'ColumnChart',
      dataTable:  [
      ['opcao',        'Ótimo/Bom',    {role: 'annotation'}],
      ['ES',             100,           100  + '%'],
      ['GO',             100,           100  + '%'],
      ['MG',              94,            94  + '%'],
      ['MS',              94,            94  + '%'],
      ['MT',              93,            93  + '%'],
      ['PR',              88,            88  + '%'],
      ['RJ',             100,           100  + '%'],
      ['RO',             100,           100  + '%'],
      ['RS',              97,            97  + '%'],
      ['SC',              95,            95  + '%'],
      ['SP',              86,            86  + '%'],
      ['TO',              33,            33  + '%']
      ],
      // opt_firstRowIsData: true,
      options: {
        title: 'Embalagem e Transporte',
      animation: {
        duration: 1000,
          easing: 'in',
         startup: true
      },
      vAxis: {
        viewWindow: {
          min: 0,
          max: 100
        }
      },
      },
    };

    this.graphRep = {
      chartType: 'ColumnChart',
      dataTable:  [
      ['opcao',        'Ótimo/Bom',    {role: 'annotation'}],
      ['A & R - SP',           100,          100  + '%'],
      ['C.N.V - SC',            88,           88  + '%'],
      ['CLARA LUX - SP',       100,          100  + '%'],
      ['COSTA - PR',           100,          100  + '%'],
      ['D.V - RS',             100,          100  + '%'],
      ['ELETROCAL - SC',       100,          100  + '%'],
      ['ELVIS - PR',            75,           75  + '%'],
      ['FAAL - GO',             73,           73  + '%'],
      ['G.F.W - SP',           100,          100  + '%'],
      ['GF PREST - SP',         97,           97  + '%'],
      ['GUALTER - RO',         100,          100  + '%'],
      ['IMPERIAL - MG',        100,          100  + '%'],
      ['J.FLECK - RS',         100,          100  + '%'],
      ['JULIANO - SP',         100,          100  + '%'],
      ['LACAVA - RS',          100,          100  + '%'],
      ['LAMIR - SC',            95,           95  + '%'],
      ['M.E LTDA - RJ',        100,          100  + '%'],
      ['MATALU - SP',          100,          100  + '%'],
      ['MEG - RS',             100,          100  + '%'],
      ['MERP - ES',             95,           95  + '%'],
      ['MUZZI - MG',            83,           83  + '%'],
      ['PEREGRINELLO - PR',    100,          100  + '%'],
      ['PVE - MS',              92,           92  + '%'],
      ['PVEBR - MT',           100,          100  + '%'],
      ['RIZZON - PR',          100,          100  + '%'],
      ['SRGIO - RS',          100,          100  + '%'],
      ['SCHEIBLER - RS',       100,          100  + '%'],
      ['ZIMMER - SC',           95,            95  + '%'],
      ],
      // opt_firstRowIsData: true,
      options: {
        title: 'Satisfação com representantes',
      animation: {
        duration: 1000,
          easing: 'in',
         startup: true
      },
      vAxis: {
        viewWindow: {
          min: 0,
          max: 100
        },
      },
      },
    };

  }


}
