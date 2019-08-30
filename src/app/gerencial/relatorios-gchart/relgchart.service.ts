import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { GoogleChartInterface } from 'ng2-google-charts/google-charts-interfaces';

@Injectable({
  providedIn: 'root'
})
export class RelgchartService {

  constructor( private db: AngularFirestore ) { }


  buildGraphColumn(otimoCorfio,
                   otimoOutros,
                   bomCorfio,
                   bomOutros,
                   regularCorfio,
                   regularOutros,
                   ruimCorfio,
                   ruimOutros,
                   naoUsoCorfio,
                   naoUsoOutros,
                   graph,
                   title ) {
            let grafico = graph;

              const totalizadorCorfio = (otimoCorfio + bomCorfio + regularCorfio + ruimCorfio + naoUsoCorfio) / 100;
              const percOtimoCorfio = totalizadorCorfio * otimoCorfio;
              const percBomCorfio = totalizadorCorfio * bomCorfio;
              const percRegularCorfio = totalizadorCorfio * regularCorfio;
              const percRuimCorfio = totalizadorCorfio * ruimCorfio;
              const percNaoUsoCorfio = totalizadorCorfio * naoUsoCorfio;

              const totalizadorOutros = (otimoOutros + bomOutros + regularOutros + ruimOutros + naoUsoOutros) / 100;
              const percOtimoOutros = totalizadorOutros * otimoOutros;
              const percBomOutros = totalizadorOutros * bomOutros;
              const percRegularOutros = totalizadorOutros * regularOutros;
              const percRuimOutros = totalizadorOutros * ruimOutros;
              const percNaoUsoOutros = totalizadorOutros * naoUsoOutros;

              console.log(totalizadorCorfio);
              grafico = {
                chartType: 'ColumnChart',
                dataTable:  [
                            ['opcao',    'Corfio',         {role: 'annotation'},     'Outros',      {role: 'annotation'}   ],
                            ['Ótimo',    otimoCorfio,      percOtimoCorfio   + '%',  otimoOutros,   percOtimoOutros   + '%'],
                            ['Bom',      bomCorfio,        percBomCorfio     + '%',  bomOutros,     percBomOutros     + '%'],
                            ['Regular',  regularCorfio,    percRegularCorfio + '%',  regularOutros, percRegularOutros + '%'],
                            ['Ruim',     ruimCorfio,       percRuimCorfio    + '%',  ruimOutros,    percRuimOutros    + '%'],
                            ['Não Uso',  naoUsoCorfio,     percNaoUsoCorfio  + '%',  naoUsoOutros,  percNaoUsoOutros  + '%']
                ],
                // opt_firstRowIsData: true,
                options: {
                  title: title,
                  animation: {
                    duration: 1000,
                    easing: 'out',
                    startup: true
                  }
                },
              };

            return grafico;
  }


}
