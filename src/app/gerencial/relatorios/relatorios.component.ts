import { map, count } from 'rxjs/operators';
import { Component, OnInit } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { AngularFirestore, AngularFirestoreDocument, AngularFirestoreCollection } from '@angular/fire/firestore';
import { RespostaUser } from './resUser.model';
import { RelServiceService } from './rel-service.service';


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

  public doughnutChartLabels = ['Ótimo', 'Bom', 'Regular', 'Ruim'];
  public doughnutChartData = [1, 1, 1, 1];
  public doughnutChartType = 'doughnut';

  constructor(private db: AngularFirestore, private relService: RelServiceService) {}

  ngOnInit() {

    // const teste = this.db.collection('Assistência Técnica', ref => ref.where('respostaCorfio', '==', 'ótimo'));
    // console.log(teste);
    this.contaRespotas();



  }


  contaRespotas() {
    this.db.collection('Assistência Técnica',
    ref => ref.where( 'respostaCorfio', '==', 'ótimo' )).valueChanges().subscribe(doc => doc.forEach( el => {
      console.log('how');
      this.otimo++;
      this.doughnutChartData = [ this.otimo, 2, 1, 1 ];
      console.log(this.otimo);
    } )   );

    this.db.collection('Assistência Técnica',
    ref => ref.where( 'respostaCorfio', '==', 'não uso' )).valueChanges().subscribe(doc => doc.forEach( el => {
      console.log('how');
      this.bom++;
      this.doughnutChartData = [ this.otimo, this.bom, 1, 1 ];
      console.log(this.bom);
    } )   );
  }



}
