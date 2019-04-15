import { map } from 'rxjs/operators';
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

  respostaCollection: AngularFirestoreCollection<RespostaUser>;
  respostasUser: Observable<RespostaUser[]>;

  public retorno = [];

  public doughnutChartLabels = ['Ótimo', 'Bom', 'Regular', 'Ruim'];
  public doughnutChartData = [120, 150, 180, 90];
  public doughnutChartType = 'doughnut';

  constructor(private db: AngularFirestore, private relService: RelServiceService) {}

  ngOnInit() {

    this.respostaCollection = this.db.collection('78', ref => {
      return ref.where( 'pergunta', '==' , 'Assistência técnica' );
    });
    this.respostasUser = this.respostaCollection.valueChanges();
    // this.relService.listUserRes()
    // .subscribe(dados => this.respostasUser = dados);
    // this.respostasUser = this.relService.listUserRes();
    // this.teste32();

  }


  // teste32() {
  //   this.respostasUser = this.relService.listUserRes();
  //   this.respostasUser.subscribe( data => {
  //     this.retorno.push(data);
  //   } );

  // }

}
