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

  hoversection: HTMLElement;

  respostaCollection: AngularFirestoreCollection<RespostaUser>;
  respostasUser: Observable<RespostaUser[]>;

  public retorno = [];
  otimo = 40;

  public doughnutChartLabels = ['Ótimo', 'Bom', 'Regular', 'Ruim'];
  public doughnutChartData = [this.otimo, 10, 10, 10];
  public doughnutChartType = 'doughnut';

  constructor(private db: AngularFirestore, private relService: RelServiceService) {}

  ngOnInit() {

    // const teste = this.db.collection('Assistência Técnica', ref => ref.where('respostaCorfio', '==', 'ótimo'));
    // console.log(teste);

    this.db.collection('Assistência Técnica',
    ref => ref.where( 'respostaCorfio', '==', 'ótimo' )).valueChanges().subscribe(doc => count(doc));


  }

  onMouseMove(ev: MouseEvent) {
    console.log(ev);
  }

  // teste32() {
  //   this.respostasUser = this.relService.listUserRes();
  //   this.respostasUser.subscribe( data => {
  //     this.retorno.push(data);
  //   } );

  // }



}
