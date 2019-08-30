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

              const totalizadorCorfio = otimoCorfio + bomCorfio + regularCorfio + ruimCorfio + naoUsoCorfio;
              console.log(totalizadorCorfio);
              grafico = {
                chartType: 'ColumnChart',
                dataTable: [
                            ['opcao',   'Corfio',       {role: 'annotation'}, 'Outros', {role: 'annotation'}],
                            ['Ótimo',    otimoCorfio,              '20%',          3,              '20%'],
                            ['Bom',      bomCorfio,              '20%',          3,              '20%'],
                            ['Regular',  regularCorfio,              '20%',          3,              '20%'],
                            ['Ruim',     ruimCorfio,              '20%',          3,              '20%'],
                            ['Não Uso',  naoUsoCorfio,              '20%',          3,              '20%']
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
