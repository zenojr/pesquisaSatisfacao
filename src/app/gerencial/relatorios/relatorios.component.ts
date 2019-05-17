import { map, count } from 'rxjs/operators';
import { Component, OnInit } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { AngularFirestore, AngularFirestoreDocument, AngularFirestoreCollection } from '@angular/fire/firestore';
import { RespostaUser } from './resUser.model';
import { RelServiceService } from './rel-service.service';
import { ChartOptions, ChartType, ChartDataSets } from 'chart.js';
import { Label } from 'ng2-charts';



@Component({
  selector: 'app-relatorios',
  templateUrl: './relatorios.component.html',
  styleUrls: ['./relatorios.component.css']
})
export class RelatoriosComponent implements OnInit {

  public retorno = [];
  otimo = 0;
  bom = 0;
  regular = 0;
  ruim = 0;
  naoUso = 0;

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
  public barChartType: ChartType = 'bar';
  public barChartLegend = true;


  public barChartData: ChartDataSets[] = [
    { data: [65, 59, 80, 81], label: 'Resposta Corfio' },
    { data: [28, 48, 40, 19], label: 'Resposta Outros' }
  ];

  constructor(private db: AngularFirestore, private relService: RelServiceService) {}

  ngOnInit() {
    this.contaRespotas();
  }


  contaRespotas() {
    this.db.collection('Assistência Técnica',
    ref => ref.where( 'respostaCorfio', '==', 'ótimo' )).valueChanges().subscribe(doc => doc.forEach( el => {
    this.otimo++;
    console.log('ótimo' + this.otimo);
    } ) );

    this.db.collection('Assistência Técnica',
    ref => ref.where( 'respostaCorfio', '==', 'bom' )).valueChanges().subscribe(doc => doc.forEach( el => {
    this.bom++;
    console.log('bom' + this.bom);
    } ) );

    this.db.collection('Assistência Técnica',
    ref => ref.where( 'respostaCorfio', '==', 'regular' )).valueChanges().subscribe(doc => doc.forEach( el => {
    this.regular++;
    console.log('regular ' + this.regular);
    } ) );

    this.db.collection('Assistência Técnica',
    ref => ref.where( 'respostaCorfio', '==', 'ruim' )).valueChanges().subscribe(doc => doc.forEach( el => {
    this.ruim++;
    console.log('ruim ' + this.regular);
    this.barChartData = [
      { data: [this.otimo, this.bom, this.regular, this.ruim], label: 'Resposta Corfio' },
      { data: [this.otimo, this.bom, this.regular, this.ruim], label: 'Resposta Outros' }
    ];
    } ) );

  }



}
