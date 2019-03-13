import { Injectable } from '@angular/core';
import { Pesquisa } from './pesquisa.model';

@Injectable({
  providedIn: 'root'
})
export class PesquisaService {

  private pesquisa: Pesquisa[] = [
    { id: 1, pergunta: ' Caracteristícas técnicas: ', respostaCorfio: '', respostaOutros: '' },
    { id: 2, pergunta: ' Uniformidade das caracteristícas técnicas: ', respostaCorfio: '', respostaOutros: '' },
    { id: 3, pergunta: ' Desempenho do produto: ', respostaCorfio: '', respostaOutros: '' }
  ];

  constructor() { }

  getPesquisa() {
    return this.pesquisa.slice();
  }
}
