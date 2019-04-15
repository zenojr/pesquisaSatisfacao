import { map } from 'rxjs/operators';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { AngularFirestore, AngularFirestoreDocument, AngularFirestoreCollection } from '@angular/fire/firestore';
import { RespostasUser } from './resUser.model';
import { RelServiceService } from './rel-service.service';



@Component({
  selector: 'app-relatorios',
  templateUrl: './relatorios.component.html',
  styleUrls: ['./relatorios.component.css']
})
export class RelatoriosComponent implements OnInit {

  respostasUser: Observable<RespostasUser[]>;
  public retorno = [];

  constructor(private db: AngularFirestore, private relService: RelServiceService) {}

  ngOnInit() {
    // this.relService.listUserRes()
    // .subscribe(dados => this.respostasUser = dados);

    this.respostasUser = this.relService.listUserRes();

  this.teste32();
  console.log(this.retorno.slice());
  }


  teste32() {
    this.respostasUser = this.relService.listUserRes();
    this.respostasUser.subscribe( data => {
      this.retorno.push(data);
    } );

  }

}
