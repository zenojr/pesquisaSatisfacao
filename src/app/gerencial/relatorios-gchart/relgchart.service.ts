import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';

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
                   title,
                   customQuest? ) {

          const custom = customQuest;
          let grafico = graph;

          if (  custom != null ) {
            const totalizadorCorfio = 100 / (otimoCorfio + bomCorfio + regularCorfio + ruimCorfio + naoUsoCorfio);
            const percOtimoCorfio   = (totalizadorCorfio * otimoCorfio  ).toFixed(0);
            const percBomCorfio     = (totalizadorCorfio * bomCorfio    ).toFixed(0);
            const percRegularCorfio = (totalizadorCorfio * regularCorfio).toFixed(0);
            const percRuimCorfio    = (totalizadorCorfio * ruimCorfio   ).toFixed(0);
            const percNaoUsoCorfio  = (totalizadorCorfio * naoUsoCorfio ).toFixed(0);
            const numbOtimoCorfio   = parseInt(percOtimoCorfio,   10 );
            const numbBomCorfio     = parseInt(percBomCorfio,     10 );
            const numbRegularCorfio = parseInt(percRegularCorfio, 10 );
            const numbRuimCorfio    = parseInt(percRuimCorfio  ,  10 );
            const numbNaoUsoCorfio  = parseInt(percNaoUsoCorfio,  10 );

            const totalizadorOutros = 100 / (otimoOutros + bomOutros + regularOutros + ruimOutros + naoUsoOutros);
            const percOtimoOutros   = (totalizadorOutros * otimoOutros  ).toFixed(0);
            const percBomOutros     = (totalizadorOutros * bomOutros    ).toFixed(0);
            const percRegularOutros = (totalizadorOutros * regularOutros).toFixed(0);
            const percRuimOutros    = (totalizadorOutros * ruimOutros   ).toFixed(0);
            const percNaoUsoOutros  = (totalizadorOutros * naoUsoOutros ).toFixed(0);
            const numbOtimoOutros   = parseInt( percOtimoOutros ,  10 );
            const numbBomOutros     = parseInt( percBomOutros   ,  10 );
            const numbRegularOutros = parseInt( percRegularOutros, 10 );
            const numbRuimOutros    = parseInt( percRuimOutros  ,  10 );
            const numbNaoUsoOutros  = parseInt( percNaoUsoOutros,  10 );

          grafico = {
            chartType: 'ColumnChart',
            dataTable:  [
            ['opcao',    'Corfio',             {role: 'annotation'},     'Outros',          {role: 'annotation'}   ],
            ['Ótimo',    numbOtimoCorfio,      percOtimoCorfio   + '%',  numbOtimoOutros,   percOtimoOutros   + '%'],
            ['Bom',      numbBomCorfio,        percBomCorfio     + '%',  numbBomOutros,     percBomOutros     + '%'],
            ['Regular',  numbRegularCorfio,    percRegularCorfio + '%',  numbRegularOutros, percRegularOutros + '%'],
            ['Ruim',     numbRuimCorfio,       percRuimCorfio    + '%',  numbRuimOutros,    percRuimOutros    + '%'],
            ['Não Necessita',  numbNaoUsoCorfio,     percNaoUsoCorfio  + '%',  numbNaoUsoOutros,  percNaoUsoOutros  + '%']
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
          } else {
          const totalizadorCorfio = 100 / (otimoCorfio + bomCorfio + regularCorfio + ruimCorfio + naoUsoCorfio);
          const percOtimoCorfio   = (totalizadorCorfio * otimoCorfio  ).toFixed(0);
          const percBomCorfio     = (totalizadorCorfio * bomCorfio    ).toFixed(0);
          const percRegularCorfio = (totalizadorCorfio * regularCorfio).toFixed(0);
          const percRuimCorfio    = (totalizadorCorfio * ruimCorfio   ).toFixed(0);
          const percNaoUsoCorfio  = (totalizadorCorfio * naoUsoCorfio ).toFixed(0);
          const numbOtimoCorfio   = parseInt(percOtimoCorfio,   10 );
          const numbBomCorfio     = parseInt(percBomCorfio,     10 );
          const numbRegularCorfio = parseInt(percRegularCorfio, 10 );
          const numbRuimCorfio    = parseInt(percRuimCorfio  ,  10 );
          const numbNaoUsoCorfio  = parseInt(percNaoUsoCorfio,  10 );

          const totalizadorOutros = 100 / (otimoOutros + bomOutros + regularOutros + ruimOutros + naoUsoOutros);
          const percOtimoOutros   = (totalizadorOutros * otimoOutros  ).toFixed(0);
          const percBomOutros     = (totalizadorOutros * bomOutros    ).toFixed(0);
          const percRegularOutros = (totalizadorOutros * regularOutros).toFixed(0);
          const percRuimOutros    = (totalizadorOutros * ruimOutros   ).toFixed(0);
          const percNaoUsoOutros  = (totalizadorOutros * naoUsoOutros ).toFixed(0);
          const numbOtimoOutros   = parseInt( percOtimoOutros ,  10 );
          const numbBomOutros     = parseInt( percBomOutros   ,  10 );
          const numbRegularOutros = parseInt( percRegularOutros, 10 );
          const numbRuimOutros    = parseInt( percRuimOutros  ,  10 );
          const numbNaoUsoOutros  = parseInt( percNaoUsoOutros,  10 );

          grafico = {
            chartType: 'ColumnChart',
            dataTable:  [
            ['opcao',    'Corfio',             {role: 'annotation'},     'Outros',          {role: 'annotation'}   ],
            ['Ótimo',    numbOtimoCorfio,      percOtimoCorfio   + '%',  numbOtimoOutros,   percOtimoOutros   + '%'],
            ['Bom',      numbBomCorfio,        percBomCorfio     + '%',  numbBomOutros,     percBomOutros     + '%'],
            ['Regular',  numbRegularCorfio,    percRegularCorfio + '%',  numbRegularOutros, percRegularOutros + '%'],
            ['Ruim',     numbRuimCorfio,       percRuimCorfio    + '%',  numbRuimOutros,    percRuimOutros    + '%']
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
          }


        return grafico;
  }

  buildGraphColumnCustom( fiosCabos,
                          aluminio,
                          todos,
                          graph,
                          pergunta) {

let grafico = graph;

const totalizador = 100 / (fiosCabos + aluminio + todos);
const percFiosCabos    = (totalizador * fiosCabos  ).toFixed(0);
const percAluminio     = (totalizador * aluminio    ).toFixed(0);
const percTodos        = (totalizador * todos).toFixed(0);

const numbFiosCabos = parseInt( percFiosCabos ,  10 );
const numbAluminio  = parseInt( percAluminio   ,  10 );
const numbTodos     = parseInt( percTodos, 10 );

grafico = {
 chartType: 'ColumnChart',
 dataTable:  [
 ['opcao',         'Produto',          {role: 'annotation'} ],
 ['Fios e Cabos',   numbFiosCabos,     percFiosCabos   + '%'],
 ['Alumínio',       numbAluminio,      percAluminio    + '%'],
 ['Todos',          numbTodos,         percTodos       + '%']
 ],
 // opt_firstRowIsData: true,
 options: {
   title: pergunta,
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
