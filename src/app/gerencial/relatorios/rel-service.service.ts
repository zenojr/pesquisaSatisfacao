import { AngularFirestore } from '@angular/fire/firestore';
import { Injectable } from '@angular/core';
import { RespostaUser } from './resUser.model';
import { tap, map } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})



export class RelServiceService {
  constructor( private db: AngularFirestore ) { }

  clientesResp: Observable<any>;

  // listUserRes() {
  //   return this.db.collection<RespostaUser>('78').valueChanges()
  //   .pipe(tap(console.log));
  // }

  // respostasClientes() {
  //   this.clientesResp = this.db.collection('78')
  //   .snapshotChanges()
  //   .pipe(map(docArray => {
  //     return docArray.map(doc => {
  //       return {
  //         if: doc.payload.doc.id
  //       };
  //     });
  //   }));
  // }

}
