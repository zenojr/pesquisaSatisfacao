import { Injectable } from '@angular/core';
import { Pesquisa } from './pesquisa.model';

@Injectable({
  providedIn: 'root'
})
export class PesquisaService {

  private pesquisa: Pesquisa[] = [
    { pergunta: ' Caracteristícas técnicas: ', respostaCorfio: '', respostaOutros: '' },
    { pergunta: ' Uniformidade das caracteristícas técnicas: ', respostaCorfio: '', respostaOutros: '' },
    { pergunta: ' Desempenho do produto: ', respostaCorfio: '', respostaOutros: '' }
  ];

  constructor() { }

  getPesquisa() {
    return this.pesquisa.slice();
  }
}
