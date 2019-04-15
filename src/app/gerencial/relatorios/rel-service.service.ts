import { AngularFirestore } from '@angular/fire/firestore';
import { Injectable } from '@angular/core';
import { RespostasUser } from './resUser.model';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})

export class RelServiceService {
  constructor( private db: AngularFirestore ) { }

  listUserRes() {
    return this.db.collection<RespostasUser>('78').valueChanges()
    .pipe(tap(console.log));
  }

}
