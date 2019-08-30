import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class RelgchartService {

  constructor( ) { }


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
              const percOtimoCorfio   = (totalizadorCorfio * otimoCorfio  ).toFixed(2);
              const percBomCorfio     = (totalizadorCorfio * bomCorfio    ).toFixed(2);
              const percRegularCorfio = (totalizadorCorfio * regularCorfio).toFixed(2);
              const percRuimCorfio    = (totalizadorCorfio * ruimCorfio   ).toFixed(2);
              const percNaoUsoCorfio  = (totalizadorCorfio * naoUsoCorfio ).toFixed(2);

              const totalizadorOutros = (otimoOutros + bomOutros + regularOutros + ruimOutros + naoUsoOutros) / 100;
              const percOtimoOutros   = (totalizadorOutros * otimoOutros  ).toFixed(2);
              const percBomOutros     = (totalizadorOutros * bomOutros    ).toFixed(2);
              const percRegularOutros = (totalizadorOutros * regularOutros).toFixed(2);
              const percRuimOutros    = (totalizadorOutros * ruimOutros   ).toFixed(2);
              const percNaoUsoOutros  = (totalizadorOutros * naoUsoOutros ).toFixed(2);

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
