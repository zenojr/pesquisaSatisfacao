import { RespostasClass } from './respostas.model';
import { Component, OnInit } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { ChartOptions, ChartType, ChartDataSets } from 'chart.js';
import { Label } from 'ng2-charts';
import { map } from 'rxjs/operators';
import { Observable, Subject } from 'rxjs';




@Component({
  selector: 'app-user-respostas',
  templateUrl: './user-respostas.component.html',
  styleUrls: ['./user-respostas.component.css']
})
export class UserRespostasComponent implements OnInit {

constructor( private db: AngularFirestore ) {
}


  users = [
'00103788000676',
'00138093000115',
'00172143000180',
'00212675000366',
'00354022000150',
'00495593000104',
'00528952000182',
'00589066000169',
'00725876000103',
'00841350000180',
'00842602000196',
'00876873000162',
'00940878000107',
'01256464000126',
'01339514000562',
'01559046005762',
'01576708000158',
'01722901000150',
'01754239001000',
'01784320000142',
'01816875000129',
'01906851000160',
'02042020000150',
'02181482000159',
'02226707000146',
'02302466000177',
'02382238000154',
'02516659000120',
'02554116000106',
'02559947000162',
'02697297000111',
'02724345000113',
'02725006000151',
'03261204000336',
'04286673000100',
'04598063000142',
'04791310000122',
'04797412000155',
'05360952000130',
'06115132000145',
'06352100000163',
'06819531000197',
'07120505000139',
'07406982000165',
'07456717000191',
'07802253000128',
'07811984000130',
'08139035000118',
'08287673000186',
'08640180000188',
'08832547000165',
'08957686000115',
'08999064000230',
'09008659000169',
'09452299000190',
'09469493000188',
'09912137000197',
'10297492000182',
'11002659000101',
'11807156000103',
'11807582000139',
'11967105000130',
'11997015000192',
'12324723000125',
'12562938000184',
'12595954000173',
'13231670000160',
'13466189000154',
'14621282000159',
'15525934000114',
'15984883000199',
'16820777000132',
'16823179000117',
'17155342000345',
'17359233000188',
'17452769000143',
'18578828000359',
'19490367000169',
'19622616000122',
'20195021000117',
'20214195000180',
'20619518000115',
'21272121000162',
'21770011000120',
'21794561000180',
'21803974000183',
'22802967000120',
'23478130000130',
'23630623000143',
'24186294000156',
'24845459000154',
'25375597000180',
'27260519000165',
'27434911000183',
'28416105000145',
'43214055000107',
'46044053002906',
'47674429000390',
'48539548000726',
'49986037000120',
'51379576000142',
'63755664000180',
'70357959000164',
'71856447000105',
'73329286000127',
'73846560000135',
'75289157000188',
'75862961000295',
'75923243000109',
'76323518000128',
'76576198000118',
'76735356000135',
'78527082000114',
'78663267000156',
'78718673000179',
'79400065000184',
'79941902000182',
'79965331000116',
'80223324000128',
'80408248000125',
'80655053000260',
'80963598000153',
'81554933000122',
'81601353000149',
'82322082000155',
'82767831000158',
'83086603000185',
'83092213000118',
'83164806000142',
'83240333000115',
'85007326000101',
'85014793000150',
'85146868000157',
'85294031000155',
'87341186000120',
'87791992000109',
'88644901000167',
'89462071000110',
'90555202000192',
'95447330000136',
'96404942000104',
'97404842000140',
'97495550000160',
];

  currentUser: any;
  respostasUsers: any;
  respostasUsersGeral: any;
  

  // respostasClass = new RespostasClass();

  ngOnInit() {
    // this.consultaGravaRespostas();
    this.respostasGeral();
    // this.users.forEach(element => {
    //   let clienteNome;
    //   this.db.doc( 'clientesCNPJv2' + '/' + element + '@corfio.com').valueChanges().subscribe(
    //     doc => {clienteNome = doc['nome'], console.log(clienteNome)}
    //   );

    // //  this.consultaGravaRespostasAuto(element);

    // });

    this.db.doc( 'clientesCNPJv2' + '/' + '01339514000562' + '@corfio.com').valueChanges().subscribe(
      doc => {console.log(doc)}
    );

    // this.consultaGravaRespostas();
  }

  consultaGravaRespostasAuto(user) {
    this.db.collection(user)
    .snapshotChanges()
    .pipe(map(docArray => {
      return docArray.map(doc => {
        return {
          id: doc.payload.doc.id,
          respostas: doc.payload.doc.data()
        };
      });
    }))
    .subscribe( from => {
      this.currentUser = user;
      this.respostasUsers = from;
      // console.log( user );
      console.log( from );
      //  this.db.collection('respostasgeral').doc(user).set( {from} );
    });
    // this.db.collection('respostasgeral').add(user);

  }

  consultaGravaRespostas() {
    const user = '88644901000167';
    this.db.collection(user)
    .snapshotChanges()
    .pipe(map(docArray => {
      return docArray.map(doc => {
        return {
          id: doc.payload.doc.id,
          ...doc.payload.doc.data()
        };
      });
    }))
    .subscribe( from => {
      this.currentUser = user;
      this.respostasUsers = from;
      console.log( user );
      console.log( from[0] );
      this.db.collection('respostasgeral').doc(user).set( {from} );
    });
    // this.db.collection('respostasgeral').add(user);

  }

  respostasGeral() {
    this.db.collection('respostasgeral')
    .snapshotChanges()
    .pipe(map(docArray => {
      return docArray.map(doc => {
        return {
          id: doc.payload.doc.id,
          pergunta: doc.payload.doc.data()['from'],
          ...doc.payload.doc.data()
        };
      });
    }))
    .subscribe( from => {
      console.log('resposta geral data');
      console.log(from);
      this.respostasUsersGeral = from;

    });
  }

}
