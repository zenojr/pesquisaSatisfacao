import { Component, OnInit } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { ChartOptions, ChartType, ChartDataSets } from 'chart.js';
import { Label } from 'ng2-charts';
import { map } from 'rxjs/operators';
import { Observable, Subject } from 'rxjs';

export interface Data {
  id?: any;
  respostaCorfio?: any;
  respostaOutros?: any;
}

@Component({
  selector: 'app-varios',
  templateUrl: './varios.component.html',
  styleUrls: ['./varios.component.css']
})
export class VariosComponent implements OnInit {

dataClient: any[] = [];
collectionsUsers: AngularFirestoreCollection<Data>;
dados: Observable<Data[]>;
newData: any;
getRetornoResp: any;
contaRespostas: any;
qtdRec: any;
aceiteProd: any;
assTec: any;
atendTransp: any;
atendComFab: any;
concProd: any;
cordGentRep: any;
desempProd: any;
eficProb: any;
facLoc: any;
freqVis: any;
funcProdBob: any;
funcProdRolo: any;
identProdBob: any;
identProdRol: any;
idGravProd: any;
prodCon: any;
pontEnt: any;
pontEmb: any;
presEmb: any;
presFisProd: any;
prodEmpCom: any;
motCompra: any;
qtdRecPed: any;
recepRecl: any;
unifCarc: any;
satAjud: any;
indProd: any;

  constructor( private db: AngularFirestore ) { }
  ngOnInit() {
    // setTimeout(() => {
    //   console.log('carga1!');
    //   this.load();
    // }, 5000);

    // setTimeout(() => {
    //   console.log('carga2!');
    //   this.load2();
    // }, 50000);

    // setTimeout(() => {
    //   console.log('carga3!');
    //   this.load3();
    // }, 100000);

    // setTimeout(() => {
    //   console.log('carga4!');
    //   this.load4();
    // }, 200000);

    

  }

  especificos() {



    this.db.collection('Você indicaria nossos produtos e(ou) serviços a outros profissionais?')
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
      this.indProd = from;
    });

    this.db.collection('Você está satisfeito com a nossa disposição em ajudar?')
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
      this.satAjud = from;
    });

    this.db.collection('Uniformidades das características técnicas')
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
      this.unifCarc = from;
    });

    this.db.collection('Quantidade recebida X quantidade pedida')
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
      this.qtdRec = from;
      console.log(from);
    });

    this.db.collection('Receptividade em situação de reclamações e sugestões')
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
      this.recepRecl = from;
    });

  }


  load4() {
    this.db.collection('Preservação das embalagens dos produtos no recebimento (Carretéis, embalagens plásticas, sacarias e paletizações)')
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
      this.presEmb = from;
    });

    this.db.collection('Pontualidade no prazo de embarque ofertado (desde a liberação do crédito até a saída da fábrica)')
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
      this.pontEmb = from;
    });

    this.db.collection('Pontualidade na entrega')
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
      this.pontEnt = from;
    });

    this.db.collection('Os produtos são conhecidos?')
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
      this.prodCon = from;
    });

    this.db.collection('Identificação (gravação) nos produtos')
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
      this.idGravProd = from;
    });

    this.db.collection('Identificação (etiqueta) dos produtos em rolos')
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
      this.identProdRol = from;
    });

    this.db.collection('Identificação (etiqueta) dos produtos em bobinas')
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
      this.identProdBob = from;
    });

  }


  load3() {
    this.db.collection('Funcionalidade da embalagem dos produtos em rolos')
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
      this.funcProdRolo = from;
    });

    this.db.collection('Funcionalidade da embalagem dos produtos em bobinas')
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
      this.funcProdBob = from;
    });

    this.db.collection('Freqüência de visitas do representante atende a necessidade ?')
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
      this.freqVis = from;
    });

    this.db.collection('Facilidade de localização do representante')
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
      this.facLoc = from;
    });

    this.db.collection('Eficiência em resolver problemas e atender solicitações')
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
      this.eficProb = from;
    });

    this.db.collection('Desempenho do produto')
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
      this.desempProd = from;
    });

  }

  load2() {

    this.db.collection('Você indicaria nossos produtos e(ou) serviços a outros profissionais?')
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
      this.indProd = from;
    });

    this.db.collection('Você está satisfeito com a nossa disposição em ajudar?')
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
      this.satAjud = from;
    });

    this.db.collection('Uniformidades das características técnicas')
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
      this.unifCarc = from;
    });

    this.db.collection('Receptividade em situação de reclamações e sugestões')
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
      this.recepRecl = from;
    });

    this.db.collection('Quantidade recebida X quantidade pedida')
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
      
    });

    this.db.collection('Qual o principal motivo (o mais importante) que o leva a comprar de outro fabricante?')
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
      this.motCompra = from;
    });

    this.db.collection('Quais produtos que sua empresa nos compra:')
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
      this.prodEmpCom = from;
    });

    this.db.collection('Preservação física dos produtos')
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
      this.presFisProd = from;
    });

  }

  load() {

    this.db.collection('Cordialidade (gentileza) apresentada pelo representante')
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
      this.cordGentRep = from;
    });

    this.db.collection('Aceitação dos produtos no mercado')
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
      this.aceiteProd = from;
    });

    this.db.collection('Assistência Técnica')
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
      this.assTec = from;
    });

    this.db.collection('Atendimento das transportadoras')
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
      this.atendTransp = from;
    });

    this.db.collection('Atendimento do setor comercial na fábrica')
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
      this.atendComFab = from;
    });

    this.db.collection('Conceito do produto junto ao usuário')
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
      this.concProd = from;
    });

  }

  getRespostas() {
    this.db.collection('90555202000192')
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
      this.getRetornoResp = from;
      this.contaRespostas = from.length;
      console.log(this.getRetornoResp);
      
    });
  }


  consultaClientes() {

    this.db.collection('90555202000192').snapshotChanges()
    .pipe(map(docArr => {
      return docArr.map( doc => {
        return {
            id: doc.payload.doc.id,
            respostaCorfio: doc.payload.doc.data()['respostaCorfio'],
            respostaOutros: doc.payload.doc.data()['respostaOutros'],
        };
      });
    })).subscribe( res => {
      this.newData = res;
    });

  //   this.clientesRespostas.forEach(element => {
  //     this.db.collection(element.cnpj).snapshotChanges()
  //     .pipe(map(docArr => {
  //       return docArr.map( doc => {
  //         return {
  //           id: doc.payload.doc.id,
  //           respostaCorfio: doc.payload.doc.data()['respostaCorfio'],
  //           respostaOutros: doc.payload.doc.data()['respostaOutros'],
  //         };
  //       });
  //     })).subscribe( dataRec => {
  //       // this.dataClient = dataRec;
  //       this.dataClient.push(dataRec);
  //       console.log(this.dataClient);
  //       return this.dataClient;
  //     });
  //   });
      }

  }


