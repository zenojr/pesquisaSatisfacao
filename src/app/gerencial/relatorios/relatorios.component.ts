import { map } from 'rxjs/operators';
import { Component, OnInit } from '@angular/core';
import { GoogleChartInterface } from 'ng2-google-charts/google-charts-interfaces';
import { Observable } from 'rxjs';
import { AngularFirestore, AngularFirestoreDocument, AngularFirestoreCollection } from '@angular/fire/firestore';
import { RespostasUser } from './resUser.model';
import { RelServiceService } from './rel-service.service';

// export interface Item { name: string; }


@Component({
  selector: 'app-relatorios',
  templateUrl: './relatorios.component.html',
  styleUrls: ['./relatorios.component.css']
})
export class RelatoriosComponent implements OnInit {

  respostasUser: Observable<RespostasUser[]>;

  dataCorfio = [];

  dataOutros = [
    20,
    35,
    20,
    15,
  ];

  public desempenhoProdCORFIO: GoogleChartInterface = {
    chartType: 'PieChart',
    dataTable: [
      ['Task',    'Hours per Day'],
      ['Ótimo',   this.dataCorfio[0]],
      ['Bom',     this.dataCorfio[1]],
      ['Regular', this.dataCorfio[2]],
      ['Ruim',    this.dataCorfio[3]]
    ],
    // opt_firstRowIsData: true,
    options: {'title': 'Desempenho do produto: CORFIO'}
  };

  public desempenhoProdOUTROS: GoogleChartInterface = {
    chartType: 'PieChart',
    dataTable: [
      ['Aval',    'respostas'],
      ['Ótimo',   this.dataOutros[0]],
      ['Bom',     this.dataOutros[1]],
      ['Regular', this.dataOutros[2]],
      ['Ruim',    this.dataOutros[3]]
    ],
    // opt_firstRowIsData: true,
    options: {'title': 'Desempenho do produto: Outros'}
  };

  constructor(private db: AngularFirestore, private relService: RelServiceService) {}

  ngOnInit() {
    // this.relService.listUserRes()
    // .subscribe(dados => this.respostasUser = dados);

    this.respostasUser = this.relService.listUserRes();

  }


}
