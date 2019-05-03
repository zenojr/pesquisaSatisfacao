import { PerguntasRep } from './../../pesquisa/perguntasRep.model';
import { PerguntasProd } from './../../pesquisa/perguntasProd.model';
import { PerguntasEmbTran } from './../../pesquisa/perguntasEmbTran.model';
import { Component, OnInit } from '@angular/core';
import { AngularFirestoreCollection, AngularFirestore } from '@angular/fire/firestore';
import { PerguntasAspecTec } from 'src/app/pesquisa/perguntasAspecTec.model';
import { Observable } from 'rxjs';
import { PerguntasComMark } from 'src/app/pesquisa/perguntasComMark.model';
import { AngularFireAuth } from 'angularfire2/auth';



@Component({
  selector: 'app-perguntas',
  templateUrl: './perguntas.component.html',
  styleUrls: ['./perguntas.component.css']
})
export class PerguntasComponent implements OnInit {
  private perguntasAspecTecCollection: AngularFirestoreCollection<PerguntasAspecTec>;
  perguntaAspecTec: Observable<PerguntasAspecTec[]>;
  private perguntasComMarkCollection: AngularFirestoreCollection<PerguntasComMark>;
  perguntaComMark: Observable<PerguntasComMark[]>;
  private perguntasEmbTranCollection:  AngularFirestoreCollection<PerguntasEmbTran>;
  perguntaEmbTran: Observable<PerguntasEmbTran[]>;
  private perguntasProdCollection: AngularFirestoreCollection<PerguntasProd>;
  perguntaProd: Observable<PerguntasProd[]>;
  private perguntasRepCollection: AngularFirestoreCollection<PerguntasRep>;
  perguntaRep: Observable<PerguntasRep[]>;

  

  editable = false;

  constructor( private db: AngularFirestore,  private afAuth: AngularFireAuth ) {
    this.perguntasAspecTecCollection = db.collection<PerguntasAspecTec>('perguntasAspecTec');
    this.perguntaAspecTec = this.perguntasAspecTecCollection.valueChanges();
    this.perguntasComMarkCollection = db.collection<PerguntasComMark>('perguntasComMark');
    this.perguntaComMark = this.perguntasComMarkCollection.valueChanges();
    this.perguntasEmbTranCollection = db.collection<PerguntasComMark>('perguntasComMark');
    this.perguntaEmbTran = this.perguntasEmbTranCollection.valueChanges();
    this.perguntasProdCollection = db.collection<PerguntasProd>('perguntasProd');
    this.perguntaProd = this.perguntasProdCollection.valueChanges();
    this.perguntasRepCollection = db.collection<PerguntasRep>('perguntasRep');
    this.perguntaRep = this.perguntasRepCollection.valueChanges();

   }

  ngOnInit() {
  }

  editPergunta(pergunta) {
    let perguntaOld = pergunta;
    return this.db.collection<PerguntasAspecTec>('perguntasAspectTec');
  }

  createUsers() {

    // const email = 'zeno@corfio.com';
    // const password = '123456';

    const createUsers = [
      
{
  email:	'12324723000125@corfio.com',
  password: '123456',
  name:	'V C FERRAGEN'
},
{
  email:	'17359233000188@corfio.com',
  password: '123456',
  name:	'TEC E AR MIG'
},
{
  email:	'3261204000336@corfio.com',
  password: '123456',
  name:	'CONDOR'
},
{
  email:	'17155342000345@corfio.com',
  password: '123456',
  name:	'LOJA ELETRC1'
},
{
  email:	'47674429000632@corfio.com',
  password: '123456',
  name:	'ELET COML AN'
},
{
  email:	'47674429000390@corfio.com',
  password: '123456',
  name:	'ELET ANDRA 2'
},
{
  email:	'28416105000145@corfio.com',
  password: '123456',
  name:	'ELETROMIL C'
},
{
  email:	'589066000169@corfio.com',
  password: '123456',
  name:	'CELESP 1'
},
{
  email:	'2042020000150@corfio.com',
  password: '123456',
  name:	'GASPARZINHO'
},
{
  email:	'46044053002906@corfio.com',
  password: '123456',
  name:	'NORTEL SUPRI'
},
{
  email:	'3021334000130@corfio.com',
  password: '123456',
  name:	'FOCKINK 4'
},
{
  email:	'72313828000100@corfio.com',
  password: '123456',
  name:	'PLENOBRAS'
},
{
  email:	'78718673000179@corfio.com',
  password: '123456',
  name:	'DZ'
},
{
  email:	'502754000492@corfio.com',
  password: '123456',
  name:	'ELETROLUZ4'
},
{
  email:	'212675000366@corfio.com',
  password: '123456',
  name:	'ABT COMERCIA'
},
{
  email:	'77739290000114@corfio.com',
  password: '123456',
  name:	'PATOESTE ELE'
},
{
  email:	'15525934000114@corfio.com',
  password: '123456',
  name:	'ELETRICA ZAN'
},
{
  email:	'138093000115@corfio.com',
  password: '123456',
  name:	'R H INDUSTRI'
},
{
  email:	'11967105000130@corfio.com',
  password: '123456',
  name:	'SANTO AGOST'
},
{
  email:	'75400218002267@corfio.com',
  password: '123456',
  name:	'CASSOL MATE'
},
{
  email:	'4050645000190@corfio.com',
  password: '123456',
  name:	'FOXCEL'
},
{
  email:	'80223324000128@corfio.com',
  password: '123456',
  name:	'ELETRO COM R'
},
{
  email:	'86365350000681@corfio.com',
  password: '123456',
  name:	'SANTA RITA'
},
{
  email:	'31368737000195@corfio.com',
  password: '123456',
  name:	'ARMAZEM P'
},
{
  email:	'95767943000150@corfio.com',
  password: '123456',
  name:	'STECANELA'
},
{
  email:	'85014793000150@corfio.com',
  password: '123456',
  name:	'ELETRORASTRO'
},
{
  email:	'83240333000115@corfio.com',
  password: '123456',
  name:	'LOJAS MILIUM'
},
{
  email:	'5360952000130@corfio.com',
  password: '123456',
  name:	'ROSSI'
},
{
  email:	'43214055000107@corfio.com',
  password: '123456',
  name:	'MART COM SER'
},
{
  email:	'75795625000196@corfio.com',
  password: '123456',
  name:	'JOCLAMAR'
},
{
  email:	'725876000103@corfio.com',
  password: '123456',
  name:	'PREMEL MATER'
},
{
  email:	'688700000110@corfio.com',
  password: '123456',
  name:	'CERRO AZUL C'
},
{
  email:	'97181515000177@corfio.com',
  password: '123456',
  name:	'DIFERPAN COM'
},
{
  email:	'77591402000809@corfio.com',
  password: '123456',
  name:	'JOTA ELE C'
},
{
  email:	'96404942000104@corfio.com',
  password: '123456',
  name:	'MAXEL MAT'
},
{
  email:	'8029323000381@corfio.com',
  password: '123456',
  name:	'VANGUARD E'
},
{
  email:	'1134726000180@corfio.com',
  password: '123456',
  name:	'SETTA'
},
{
  email:	'88644901000167@corfio.com',
  password: '123456',
  name:	'MAGNANI E CI'
},
{
  email:	'9533616000100@corfio.com',
  password: '123456',
  name:	'AJEL'
},
{
  email:	'1816875000129@corfio.com',
  password: '123456',
  name:	'AJEL MAT'
},
{
  email:	'82179524000156@corfio.com',
  password: '123456',
  name:	'PEPA DISTRIB'
},
{
  email:	'80963598000153@corfio.com',
  password: '123456',
  name:	'ELETRICA ZAT'
},
{
  email:	'13080862000113@corfio.com',
  password: '123456',
  name:	'ELETROMAX 25'
},
{
  email:	'1065982000162@corfio.com',
  password: '123456',
  name:	'COMERCIAL 25'
},
{
  email:	'26834259000121@corfio.com',
  password: '123456',
  name:	'PETEL'
},
{
  email:	'9721504000175@corfio.com',
  password: '123456',
  name:	'CIGAME COM'
},
{
  email:	'8999064000230@corfio.com',
  password: '123456',
  name:	'CONTRAFO30'
},
{
  email:	'70357959000164@corfio.com',
  password: '123456',
  name:	'MECARI'
},
{
  email:	'7651109000138@corfio.com',
  password: '123456',
  name:	'MAXILUZ MAT'
},
{
  email:	'86750015000192@corfio.com',
  password: '123456',
  name:	'ECEL'
},
{
  email:	'4062944000144@corfio.com',
  password: '123456',
  name:	'CABINE'
},
{
  email:	'279531000408@corfio.com',
  password: '123456',
  name:	'TUPAN CONS'
},
{
  email:	'13501187000663@corfio.com',
  password: '123456',
  name:	'CASAS DA AG'
},
{
  email:	'2226707000146@corfio.com',
  password: '123456',
  name:	'PIPE SISTEMA'
},
{
  email:	'69308286000173@corfio.com',
  password: '123456',
  name:	'NEPPE'
},
{
  email:	'4286673000100@corfio.com',
  password: '123456',
  name:	'DIME'
},
{
  email:	'9008659000169@corfio.com',
  password: '123456',
  name:	'ELETRO ENER'
},
{
  email:	'90555202000192@corfio.com',
  password: '123456',
  name:	'TRITEC EQUIP'
},
{
  email:	'95852547000121@corfio.com',
  password: '123456',
  name:	'INMES INDU'
},
{
  email:	'26573330000160@corfio.com',
  password: '123456',
  name:	'JOTA ELE SH'
},
{
  email:	'10381875000134@corfio.com',
  password: '123456',
  name:	'FRITZ DISTRI'
},
{
  email:	'1339514000562@corfio.com',
  password: '123456',
  name:	'HIPER MERCAD'
},
{
  email:	'48539548000726@corfio.com',
  password: '123456',
  name:	'AGROMETAL'
},
{
  email:	'8832547000165@corfio.com',
  password: '123456',
  name:	'ELET PASSOS'
},
{
  email:	'2554116000106@corfio.com',
  password: '123456',
  name:	'ELETROSUL DI'
},
{
  email:	'1520667000692@corfio.com',
  password: '123456',
  name:	'CONCENTRO 1'
},
{
  email:	'80655053000260@corfio.com',
  password: '123456',
  name:	'ILUMISUL COM'
},
{
  email:	'842602000196@corfio.com',
  password: '123456',
  name:	'DEPECIL'
},
{
  email:	'93364974000135@corfio.com',
  password: '123456',
  name:	'REAL CENTER'
},
{
  email:	'85294031000155@corfio.com',
  password: '123456',
  name:	'ELETRICA SA1'
},
{
  email:	'4598063000142@corfio.com',
  password: '123456',
  name:	'CONNECT CABL'
},
{
  email:	'2516659000120@corfio.com',
  password: '123456',
  name:	'LUZVILLE ENG'
},
{
  email:	'51379576000142@corfio.com',
  password: '123456',
  name:	'DA ROZ ELET'
},
{
  email:	'1722901000150@corfio.com',
  password: '123456',
  name:	'COMERCIAL 30'
},
{
  email:	'15984883000199@corfio.com',
  password: '123456',
  name:	'ELETRICA RAD'
},
{
  email:	'4080700000194@corfio.com',
  password: '123456',
  name:	'METTA'
},
{
  email:	'2064150000194@corfio.com',
  password: '123456',
  name:	'TAF'
},
{
  email:	'3617372000150@corfio.com',
  password: '123456',
  name:	'CRISTO REI M'
},
{
  email:	'10358961000126@corfio.com',
  password: '123456',
  name:	'ELETROSYSTEM'
},
{
  email:	'1784320000142@corfio.com',
  password: '123456',
  name:	'FEHRMANN1'
},
{
  email:	'10675816000179@corfio.com',
  password: '123456',
  name:	'BRAZLIGHT MT'
},
{
  email:	'82767831000158@corfio.com',
  password: '123456',
  name:	'BELING'
},
{
  email:	'2821150000191@corfio.com',
  password: '123456',
  name:	'STROBELETRO'
},
{
  email:	'2559947000162@corfio.com',
  password: '123456',
  name:	'CORREA MATER'
},
{
  email:	'76576198000118@corfio.com',
  password: '123456',
  name:	'AUTOMATIC 4'
},
{
  email:	'2697297000111@corfio.com',
  password: '123456',
  name:	'UNIVERSO ELE'
},
{
  email:	'8287673000186@corfio.com',
  password: '123456',
  name:	'S DARE'
},
{
  email:	'21595504000171@corfio.com',
  password: '123456',
  name:	'FABIO DE SOU'
},
{
  email:	'75118679000117@corfio.com',
  password: '123456',
  name:	'CASA CONEXAO'
},
{
  email:	'78718673000330@corfio.com',
  password: '123456',
  name:	'COML D Z'
},
{
  email:	'11807582000139@corfio.com',
  password: '123456',
  name:	'ELETROBOX 2'
},
{
  email:	'37470911000192@corfio.com',
  password: '123456',
  name:	'ELETRO FIOS'
},
{
  email:	'42101436000117@corfio.com',
  password: '123456',
  name:	'PALACIO II'
},
{
  email:	'90740754000170@corfio.com',
  password: '123456',
  name:	'LOJAS FRICKE'
},
{
  email:	'841350000180@corfio.com',
  password: '123456',
  name:	'DECAR COM DE'
},
{
  email:	'6110817000441@corfio.com',
  password: '123456',
  name:	'ATIVA MAT'
},
{
  email:	'6115132000145@corfio.com',
  password: '123456',
  name:	'GEREMIA COM'
},
{
  email:	'4479387000161@corfio.com',
  password: '123456',
  name:	'ELETRONOP'
},
{
  email:	'3747565000125@corfio.com',
  password: '123456',
  name:	'DOURADOS   1'
},
{
  email:	'710212000162@corfio.com',
  password: '123456',
  name:	'ECONOLUX COM'
},
{
  email:	'81554933000122@corfio.com',
  password: '123456',
  name:	'VALPER ELETR'
},
{
  email:	'495593000104@corfio.com',
  password: '123456',
  name:	'4A COML'
},
{
  email:	'1754239001000@corfio.com',
  password: '123456',
  name:	'REF DU10'
},
{
  email:	'4516119000172@corfio.com',
  password: '123456',
  name:	'ZANETTI MATE'
},
{
  email:	'75289157000188@corfio.com',
  password: '123456',
  name:	'CONTI'
},
{
  email:	'20748515000181@corfio.com',
  password: '123456',
  name:	'BRESCO FUNDO'
},
{
  email:	'21862191000170@corfio.com',
  password: '123456',
  name:	'ELETRO CON'
},
{
  email:	'2328280014651@corfio.com',
  password: '123456',
  name:	'ELEKTRO ELE'
},
{
  email:	'1628313000151@corfio.com',
  password: '123456',
  name:	'PLASSON'
},
{
  email:	'7392567000108@corfio.com',
  password: '123456',
  name:	'ELET JOMANA'
},
{
  email:	'8957686000115@corfio.com',
  password: '123456',
  name:	'GVC ELETR'
},
{
  email:	'4142904000102@corfio.com',
  password: '123456',
  name:	'COMERCIAL E7'
},
{
  email:	'1114245000102@corfio.com',
  password: '123456',
  name:	'CONNECTOR'
},
{
  email:	'1711005000608@corfio.com',
  password: '123456',
  name:	'PANORAMA MAT'
},
{
  email:	'8999064000311@corfio.com',
  password: '123456',
  name:	'CONTRAFO II'
},
{
  email:	'95766614000195@corfio.com',
  password: '123456',
  name:	'ELETRODIA'
},
{
  email:	'15139629000194@corfio.com',
  password: '123456',
  name:	'COM DE ELETR'
},
{
  email:	'76879295000180@corfio.com',
  password: '123456',
  name:	'COOP ELETRIF'
},
{
  email:	'22760075000103@corfio.com',
  password: '123456',
  name:	'PETEL MATE'
},
{
  email:	'2724345000113@corfio.com',
  password: '123456',
  name:	'MILLATRONIC'
},
{
  email:	'83164806000142@corfio.com',
  password: '123456',
  name:	'ELETRO SERV1'
},
{
  email:	'25375597000180@corfio.com',
  password: '123456',
  name:	'GABRIEL MARC'
},
{
  email:	'12433420004138@corfio.com',
  password: '123456',
  name:	'DB MEDICINA'
},
{
  email:	'57883035000133@corfio.com',
  password: '123456',
  name:	'JURA COM'
},
{
  email:	'15576679000139@corfio.com',
  password: '123456',
  name:	'OREGON QUIMI'
},
{
  email:	'21770011000120@corfio.com',
  password: '123456',
  name:	'ELETROMAC LT'
},
{
  email:	'19998478000180@corfio.com',
  password: '123456',
  name:	'RELE COMERCI'
},
{
  email:	'91358788000168@corfio.com',
  password: '123456',
  name:	'FOCO ENG. EL'
},
{
  email:	'83086603000185@corfio.com',
  password: '123456',
  name:	'VALE DO ARAC'
},
{
  email:	'30538172000184@corfio.com',
  password: '123456',
  name:	'FOCO PROTECA'
},
{
  email:	'6110817000107@corfio.com',
  password: '123456',
  name:	'ATIVA'
},
{
  email:	'4384015000151@corfio.com',
  password: '123456',
  name:	'MULTI ACAO'
},
{
  email:	'13231670000160@corfio.com',
  password: '123456',
  name:	'JOWITEC'
},
{
  email:	'95447330000136@corfio.com',
  password: '123456',
  name:	'ESTACILIO JO'
},
{
  email:	'4797412000155@corfio.com',
  password: '123456',
  name:	'R.M MATERIAI'
},
{
  email:	'1559046005762@corfio.com',
  password: '123456',
  name:	'IRMAOS SOAR'
},
{
  email:	'940878000107@corfio.com',
  password: '123456',
  name:	'FORCA & LUZ'
},
{
  email:	'10342850000121@corfio.com',
  password: '123456',
  name:	'WCT 210 MAT'
},
{
  email:	'9720090000160@corfio.com',
  password: '123456',
  name:	'PICCININI DI'
},
{
  email:	'89462071000110@corfio.com',
  password: '123456',
  name:	'ZONA NOVA'
},
{
  email:	'23478130000130@corfio.com',
  password: '123456',
  name:	'MOINO INDUST'
},
{
  email:	'12586179000190@corfio.com',
  password: '123456',
  name:	'H M 32 EMPRE'
},
{
  email:	'5434101000194@corfio.com',
  password: '123456',
  name:	'AMGL'
},
{
  email:	'87791992000109@corfio.com',
  password: '123456',
  name:	'WALTER BELTR'
},
{
  email:	'82322082000155@corfio.com',
  password: '123456',
  name:	'J M SANTINI'
},
{
  email:	'4675878000188@corfio.com',
  password: '123456',
  name:	'BRG BRASIL'
},
{
  email:	'12989965000138@corfio.com',
  password: '123456',
  name:	'B CASTRO COM'
},
{
  email:	'2011086000183@corfio.com',
  password: '123456',
  name:	'MASTER AGROI'
},
{
  email:	'24476249000136@corfio.com',
  password: '123456',
  name:	'PLANO TO EMP'
},
{
  email:	'2986723000137@corfio.com',
  password: '123456',
  name:	'AVIBRASIL'
},
{
  email:	'5694863000120@corfio.com',
  password: '123456',
  name:	'DG COM'
},
{
  email:	'93031706000100@corfio.com',
  password: '123456',
  name:	'C B M  MATER'
},
{
  email:	'91982496001920@corfio.com',
  password: '123456',
  name:	'COTRIPAL'
},
{
  email:	'19622616000122@corfio.com',
  password: '123456',
  name:	'JOTA JOTA'
},
{
  email:	'97495550000160@corfio.com',
  password: '123456',
  name:	'MONTEBRAS MO'
},
{
  email:	'33727207000111@corfio.com',
  password: '123456',
  name:	'MAD MUNARO'
},
{
  email:	'89821094000173@corfio.com',
  password: '123456',
  name:	'CELETRO'
},
{
  email:	'11368683000150@corfio.com',
  password: '123456',
  name:	'ELE DINAMO'
},
{
  email:	'11828685000185@corfio.com',
  password: '123456',
  name:	'PASQUALLI &'
},
{
  email:	'3470626001474@corfio.com',
  password: '123456',
  name:	'COOP A1'
},
{
  email:	'20808425000139@corfio.com',
  password: '123456',
  name:	'ASSOCIACAO R'
},
{
  email:	'2907046000114@corfio.com',
  password: '123456',
  name:	'ELETROSUL EN'
},
{
  email:	'82631896000171@corfio.com',
  password: '123456',
  name:	'MATELETRICA'
},
{
  email:	'7783656000258@corfio.com',
  password: '123456',
  name:	'JAV DISTR DE'
},
{
  email:	'4247674000146@corfio.com',
  password: '123456',
  name:	'MDM'
},
{
  email:	'93809440000175@corfio.com',
  password: '123456',
  name:	'TURA'
},
{
  email:	'27581438000167@corfio.com',
  password: '123456',
  name:	'VIMATEL'
},
{
  email:	'66632399000131@corfio.com',
  password: '123456',
  name:	'FUJICABOS'
},
{
  email:	'3938818000148@corfio.com',
  password: '123456',
  name:	'ELETRICA SER'
},
{
  email:	'499809000100@corfio.com',
  password: '123456',
  name:	'E P COMERCIA'
},
{
  email:	'6171584000144@corfio.com',
  password: '123456',
  name:	'ELETRO HAUER'
},
{
  email:	'6291846001429@corfio.com',
  password: '123456',
  name:	'CONSTROEST'
},
{
  email:	'9559510000178@corfio.com',
  password: '123456',
  name:	'R S M EPP'
},
{
  email:	'50427103000100@corfio.com',
  password: '123456',
  name:	'ELETRICA NIC'
},
{
  email:	'17550776000188@corfio.com',
  password: '123456',
  name:	'YACHTHOUSE'
},
{
  email:	'6901224000150@corfio.com',
  password: '123456',
  name:	'N S B DISTR'
},
{
  email:	'23232816000146@corfio.com',
  password: '123456',
  name:	'CAGK COMERCI'
},
{
  email:	'28641307000190@corfio.com',
  password: '123456',
  name:	'THIAGO SANTO'
},
{
  email:	'8233247000160@corfio.com',
  password: '123456',
  name:	'ELETROF COML'
},
{
  email:	'58246059000144@corfio.com',
  password: '123456',
  name:	'ELETRICA BEL'
},
{
  email:	'23092996000108@corfio.com',
  password: '123456',
  name:	'SEPA ADM D B'
},
{
  email:	'76202779000190@corfio.com',
  password: '123456',
  name:	'COOPERATIVA'
},
{
  email:	'27490747000121@corfio.com',
  password: '123456',
  name:	'O DRAGAO MAT'
},
{
  email:	'76542521000132@corfio.com',
  password: '123456',
  name:	'PRAIANA'
},
{
  email:	'3992026000151@corfio.com',
  password: '123456',
  name:	'ANDALUZ INDU'
},
{
  email:	'16832826000157@corfio.com',
  password: '123456',
  name:	'COMARCO ARAG'
},
{
  email:	'5318243000196@corfio.com',
  password: '123456',
  name:	'FREEWAY'
},
{
  email:	'3185744000116@corfio.com',
  password: '123456',
  name:	'FERNANDES'
},
{
  email:	'6977751000220@corfio.com',
  password: '123456',
  name:	'BR PROPERTIE'
},
{
  email:	'2181970000166@corfio.com',
  password: '123456',
  name:	'SIHMATEL MAT'
},
{
  email:	'68881317000118@corfio.com',
  password: '123456',
  name:	'BERTEL COML'
},
{
  email:	'76093731006393@corfio.com',
  password: '123456',
  name:	'COPACOL CO'
},
{
  email:	'2181482000159@corfio.com',
  password: '123456',
  name:	'ELETROBIT'
},
{
  email:	'15354701000104@corfio.com',
  password: '123456',
  name:	'CASA DO E'
},
{
  email:	'10562443000120@corfio.com',
  password: '123456',
  name:	'CASA CERTA M'
},
{
  email:	'942557000141@corfio.com',
  password: '123456',
  name:	'ROVARIS'
},
{
  email:	'4220944000125@corfio.com',
  password: '123456',
  name:	'MULTI'
},
{
  email:	'503418000111@corfio.com',
  password: '123456',
  name:	'ELETRICA FAL'
},
{
  email:	'14883738000159@corfio.com',
  password: '123456',
  name:	'M.V. VIEIRA'
},
{
  email:	'11997015000192@corfio.com',
  password: '123456',
  name:	'DILUZ COM'
},
{
  email:	'1267333000144@corfio.com',
  password: '123456',
  name:	'ELETROPASSO'
},
{
  email:	'309988000175@corfio.com',
  password: '123456',
  name:	'MATEL MATERI'
},
{
  email:	'2477637000107@corfio.com',
  password: '123456',
  name:	'ANTARES MATE'
},
{
  email:	'3270660000180@corfio.com',
  password: '123456',
  name:	'CELSO2'
},
{
  email:	'3808452000435@corfio.com',
  password: '123456',
  name:	'D C SECCO'
},
{
  email:	'3215760000104@corfio.com',
  password: '123456',
  name:	'ELETRO MAGNE'
},
{
  email:	'26637322000130@corfio.com',
  password: '123456',
  name:	'TUDO ELETRIC'
},
{
  email:	'13595389000107@corfio.com',
  password: '123456',
  name:	'R R NEVES E'
},
{
  email:	'5819542000457@corfio.com',
  password: '123456',
  name:	'COM ANZAI'
},
{
  email:	'6819531000197@corfio.com',
  password: '123456',
  name:	'MAGGICON'
},
{
  email:	'28621967000100@corfio.com',
  password: '123456',
  name:	'G3 AUTOMATIO'
},
{
  email:	'32420606000172@corfio.com',
  password: '123456',
  name:	'ELETRORAIO'
},
{
  email:	'92016757006122@corfio.com',
  password: '123456',
  name:	' ZAFFARI'
},
{
  email:	'10375474000171@corfio.com',
  password: '123456',
  name:	'RODASIL'
},
{
  email:	'4374568000123@corfio.com',
  password: '123456',
  name:	'ELET DOTTO'
},
{
  email:	'12626885000118@corfio.com',
  password: '123456',
  name:	'META ATACADI'
},
{
  email:	'85325363000583@corfio.com',
  password: '123456',
  name:	'CUNHADOS CO'
},
{
  email:	'16789335000170@corfio.com',
  password: '123456',
  name:	'BELMONT OBRA'
},
{
  email:	'92245455000195@corfio.com',
  password: '123456',
  name:	'ELETROCOM'
},
{
  email:	'4415928001089@corfio.com',
  password: '123456',
  name:	'LOJAS BECKER'
},
{
  email:	'5488142000163@corfio.com',
  password: '123456',
  name:	'EMS MATERIAI'
},
{
  email:	'5486776000187@corfio.com',
  password: '123456',
  name:	'DARCA'
},
{
  email:	'16713303000191@corfio.com',
  password: '123456',
  name:	'HIDRO VOLT'
},
{
  email:	'75232926000101@corfio.com',
  password: '123456',
  name:	'ELETRO REDE'
},
{
  email:	'354022000150@corfio.com',
  password: '123456',
  name:	'ELETRO MARIN'
},
{
  email:	'17030879000117@corfio.com',
  password: '123456',
  name:	'MUNDIAL MA'
},
{
  email:	'6244770000166@corfio.com',
  password: '123456',
  name:	'J K MAT'
},
{
  email:	'13977916000148@corfio.com',
  password: '123456',
  name:	'FERNANDO SPO'
},
{
  email:	'80143548000120@corfio.com',
  password: '123456',
  name:	'FINESTRA IND'
},
{
  email:	'3652103000124@corfio.com',
  password: '123456',
  name:	'ELETRI UNIAO'
},
{
  email:	'8074990000114@corfio.com',
  password: '123456',
  name:	'MEGAVOLTS'
},
{
  email:	'25260878000197@corfio.com',
  password: '123456',
  name:	'A ELETROWAT'
},
{
  email:	'15235859000157@corfio.com',
  password: '123456',
  name:	'PEDRA BRANCA'
},
{
  email:	'7207491000438@corfio.com',
  password: '123456',
  name:	'M A FROTA'
},
{
  email:	'103788000676@corfio.com',
  password: '123456',
  name:	'SAETA'
},
{
  email:	'5472310000122@corfio.com',
  password: '123456',
  name:	'MM INCORPORA'
},
{
  email:	'2382238000154@corfio.com',
  password: '123456',
  name:	'ZANARDI & FO'
},
{
  email:	'3006936000118@corfio.com',
  password: '123456',
  name:	'COM DE MATE1'
},
{
  email:	'2819005000176@corfio.com',
  password: '123456',
  name:	'VENDRAMIN'
},
{
  email:	'30785802000115@corfio.com',
  password: '123456',
  name:	'BRITO MATERI'
},
{
  email:	'7387777000108@corfio.com',
  password: '123456',
  name:	'TECNOELETRO'
},
{
  email:	'6881518000168@corfio.com',
  password: '123456',
  name:	'V KISTEMA'
},
{
  email:	'75654632000178@corfio.com',
  password: '123456',
  name:	'THOMS'
},
{
  email:	'4231763000102@corfio.com',
  password: '123456',
  name:	'MKS'
},
{
  email:	'91349803000101@corfio.com',
  password: '123456',
  name:	'GAVELUX'
},
{
  email:	'2018701000183@corfio.com',
  password: '123456',
  name:	'FAROL'
},
{
  email:	'4210398000141@corfio.com',
  password: '123456',
  name:	'DIMEL'
},
{
  email:	'29249897000173@corfio.com',
  password: '123456',
  name:	'JVL MAT'
},
{
  email:	'25587387000155@corfio.com',
  password: '123456',
  name:	'HLTS ENGENH'
},
{
  email:	'4569913000184@corfio.com',
  password: '123456',
  name:	'FIGUEIRED84'
},
{
  email:	'5083820000108@corfio.com',
  password: '123456',
  name:	'MOLINARI & B'
},
{
  email:	'369085000180@corfio.com',
  password: '123456',
  name:	'PICCOLI MATE'
},
{
  email:	'5704982000116@corfio.com',
  password: '123456',
  name:	'JOSE LUIZ'
},
{
  email:	'4082624000156@corfio.com',
  password: '123456',
  name:	'IRMAOS GONC'
},
{
  email:	'119141000128@corfio.com',
  password: '123456',
  name:	'HZR CONSTRUT'
},
{
  email:	'23238674000124@corfio.com',
  password: '123456',
  name:	'CATHERINE'
},
{
  email:	'10785128000161@corfio.com',
  password: '123456',
  name:	'ANDRE HENRIQ'
},
{
  email:	'65512790000130@corfio.com',
  password: '123456',
  name:	'MATEL'
},
{
  email:	'37873312000110@corfio.com',
  password: '123456',
  name:	'ELETRO JORGE'
},
{
  email:	'16526548000100@corfio.com',
  password: '123456',
  name:	'KLEIN & BOES'
},
{
  email:	'3114340000131@corfio.com',
  password: '123456',
  name:	'ORDEMILK LTD'
},
{
  email:	'7533470000160@corfio.com',
  password: '123456',
  name:	'PCE'
},
{
  email:	'13004833000172@corfio.com',
  password: '123456',
  name:	'ALVES BARRET'
},
{
  email:	'6971684000155@corfio.com',
  password: '123456',
  name:	'VERALUZ'
},
{
  email:	'92713114000105@corfio.com',
  password: '123456',
  name:	'CCM AUTOMACA'
},
{
  email:	'10534926000110@corfio.com',
  password: '123456',
  name:	'LUMILUZ MAT'
},
{
  email:	'46321980000125@corfio.com',
  password: '123456',
  name:	'PLASTICOS AL'
},
{
  email:	'79682852000166@corfio.com',
  password: '123456',
  name:	'CARLESSI ENG'
},
{
  email:	'14742388000100@corfio.com',
  password: '123456',
  name:	'MORRO BRANCO'
},
{
  email:	'91269472000108@corfio.com',
  password: '123456',
  name:	'PRO ELETRO C'
},
{
  email:	'2649941000186@corfio.com',
  password: '123456',
  name:	'UNIPLAS MAT'
},
{
  email:	'1521433000155@corfio.com',
  password: '123456',
  name:	'MARQUES CONS'
},
{
  email:	'19679013000167@corfio.com',
  password: '123456',
  name:	'EMPR EDUCACI'
},
{
  email:	'83708354000112@corfio.com',
  password: '123456',
  name:	'AM CONSTRUC'
},
{
  email:	'77625796000100@corfio.com',
  password: '123456',
  name:	'CONS GUETTER'
},
{
  email:	'5609885000144@corfio.com',
  password: '123456',
  name:	'ROMALDO A NI'
},
{
  email:	'79202719000165@corfio.com',
  password: '123456',
  name:	'RECANTO CATA'
},
{
  email:	'6981453000122@corfio.com',
  password: '123456',
  name:	'ELETROMIX'
},
{
  email:	'26834259000636@corfio.com',
  password: '123456',
  name:	'PETEL MATI'
},
{
  email:	'88230545000135@corfio.com',
  password: '123456',
  name:	'COML ELETRI2'
},
{
  email:	'1998585002006@corfio.com',
  password: '123456',
  name:	'LEAR'
},
{
  email:	'2356306000100@corfio.com',
  password: '123456',
  name:	'COSTA OEST'
},
{
  email:	'9469493000188@corfio.com',
  password: '123456',
  name:	'F. DE BRITO'
},
{
  email:	'76879295000260@corfio.com',
  password: '123456',
  name:	'CANDIDO ROND'
},
{
  email:	'10606046000102@corfio.com',
  password: '123456',
  name:	'COM JALES'
},
{
  email:	'14452741000118@corfio.com',
  password: '123456',
  name:	'MADESIL'
},
{
  email:	'2707275000195@corfio.com',
  password: '123456',
  name:	'CHAPECO'
},
{
  email:	'10775854000101@corfio.com',
  password: '123456',
  name:	'ELET CENTER'
},
{
  email:	'6110817000360@corfio.com',
  password: '123456',
  name:	' ATIVA MATER'
},
{
  email:	'27700153000106@corfio.com',
  password: '123456',
  name:	'SANTANA & SA'
},
{
  email:	'82100223000195@corfio.com',
  password: '123456',
  name:	'SUL'
},
{
  email:	'188927000105@corfio.com',
  password: '123456',
  name:	'J P COM'
},
{
  email:	'28170677000197@corfio.com',
  password: '123456',
  name:	'RESIDENC JAR'
},
{
  email:	'7102402000146@corfio.com',
  password: '123456',
  name:	'BONATO MATER'
},
{
  email:	'9231916000127@corfio.com',
  password: '123456',
  name:	'GRACILENE'
},
{
  email:	'9575043000170@corfio.com',
  password: '123456',
  name:	'ACLF'
},
{
  email:	'3941119000157@corfio.com',
  password: '123456',
  name:	'CONST METRON'
},
{
  email:	'19763569000218@corfio.com',
  password: '123456',
  name:	'SLC III'
},
{
  email:	'3725837000196@corfio.com',
  password: '123456',
  name:	'VALMIR JULIA'
},
{
  email:	'23301778000136@corfio.com',
  password: '123456',
  name:	'SINOMEL MATE'
},
{
  email:	'9619908000152@corfio.com',
  password: '123456',
  name:	'JUSSARA DE'
},
{
  email:	'21962262000107@corfio.com',
  password: '123456',
  name:	'GMR BRAS 01'
},
{
  email:	'78611522000621@corfio.com',
  password: '123456',
  name:	'CONST LOC'
},
{
  email:	'9137574000180@corfio.com',
  password: '123456',
  name:	'EMP MAT DE H'
},
{
  email:	'11447971000109@corfio.com',
  password: '123456',
  name:	'BR MAT'
},
{
  email:	'58370644000151@corfio.com',
  password: '123456',
  name:	'STEEL CONST'
},
{
  email:	'2654191000130@corfio.com',
  password: '123456',
  name:	'TECAUT AUTOM'
},
{
  email:	'2979410000151@corfio.com',
  password: '123456',
  name:	'ALBERTO LIVI'
},
{
  email:	'81626277000126@corfio.com',
  password: '123456',
  name:	'ELETRICASUL'
},
{
  email:	'79953584000170@corfio.com',
  password: '123456',
  name:	'CONSTRUCAL M'
},
{
  email:	'3959465000162@corfio.com',
  password: '123456',
  name:	'CONST PACHEC'
},
{
  email:	'91000588000139@corfio.com',
  password: '123456',
  name:	'TELSONI'
},
{
  email:	'938142000102@corfio.com',
  password: '123456',
  name:	'AUGUSTINHO B'
},
{
  email:	'4895202000108@corfio.com',
  password: '123456',
  name:	'V8 BRASIL'
},
{
  email:	'79400065000184@corfio.com',
  password: '123456',
  name:	'M.W'
},
{
  email:	'3076018000165@corfio.com',
  password: '123456',
  name:	'AGNALDO DOOP'
},
{
  email:	'1914457000174@corfio.com',
  password: '123456',
  name:	'COMERCIAL HA'
},
{
  email:	'83092213000118@corfio.com',
  password: '123456',
  name:	'JOIARTE'
},
{
  email:	'4866659000186@corfio.com',
  password: '123456',
  name:	'ENERGY COMER'
},
{
  email:	'27907168000131@corfio.com',
  password: '123456',
  name:	'O JORRA'
},
{
  email:	'14067284000148@corfio.com',
  password: '123456',
  name:	'ALIANCA M'
},
{
  email:	'1667041000360@corfio.com',
  password: '123456',
  name:	'IRMAOS MEURE'
},
{
  email:	'395538000142@corfio.com',
  password: '123456',
  name:	'ELET SOL'
},
{
  email:	'14638801000191@corfio.com',
  password: '123456',
  name:	'FACHINELLO'
},
{
  email:	'26777590000157@corfio.com',
  password: '123456',
  name:	'PLANO SOLIMO'
},
{
  email:	'15575789000267@corfio.com',
  password: '123456',
  name:	'FENELON'
},
{
  email:	'192450000123@corfio.com',
  password: '123456',
  name:	'R G'
},
{
  email:	'22647476000151@corfio.com',
  password: '123456',
  name:	'BOMPAR COM'
},
{
  email:	'19167372000135@corfio.com',
  password: '123456',
  name:	'RESID TORRES'
},
{
  email:	'86783636000172@corfio.com',
  password: '123456',
  name:	'MANGUI MATER'
},
{
  email:	'37216363000250@corfio.com',
  password: '123456',
  name:	'ENERGETICA'
},
{
  email:	'6912516000199@corfio.com',
  password: '123456',
  name:	'PAULO S SILV'
},
{
  email:	'28144280000120@corfio.com',
  password: '123456',
  name:	'VLV MATERIAI'
},
{
  email:	'6298043000181@corfio.com',
  password: '123456',
  name:	'ILUMINARIUM'
},
{
  email:	'23971495000100@corfio.com',
  password: '123456',
  name:	'ELETROARTE'
},
{
  email:	'82864828000152@corfio.com',
  password: '123456',
  name:	'RECKI LUZ EL'
},
{
  email:	'85146868000157@corfio.com',
  password: '123456',
  name:	'ELETRICA HAM'
},
{
  email:	'24845459000154@corfio.com',
  password: '123456',
  name:	'DISBRACON'
},
{
  email:	'9912137000197@corfio.com',
  password: '123456',
  name:	'MEGA MATERIA'
},
{
  email:	'87714176000193@corfio.com',
  password: '123456',
  name:	'CASA DE MARC'
},
{
  email:	'10667354000148@corfio.com',
  password: '123456',
  name:	'M T ARTUR DI'
},
{
  email:	'2438461000176@corfio.com',
  password: '123456',
  name:	'HOSPITAL ALM'
},
{
  email:	'7087016000122@corfio.com',
  password: '123456',
  name:	'ELETRICA NOR'
},
{
  email:	'21347942000110@corfio.com',
  password: '123456',
  name:	'ADRIANO TITO'
},
{
  email:	'21469324000143@corfio.com',
  password: '123456',
  name:	'ANTONIA'
},
{
  email:	'89774160001920@corfio.com',
  password: '123456',
  name:	'COOP LAN'
},
{
  email:	'6993439000149@corfio.com',
  password: '123456',
  name:	'COM MAT P CO'
},
{
  email:	'33177957000167@corfio.com',
  password: '123456',
  name:	'SIGNORI'
},
{
  email:	'89967632000132@corfio.com',
  password: '123456',
  name:	'VANELLI MATE'
},
{
  email:	'3629248000104@corfio.com',
  password: '123456',
  name:	'NOVA LUZ MAT'
},
{
  email:	'59358606000146@corfio.com',
  password: '123456',
  name:	'AMPLA ENGENH'
},
{
  email:	'13225870000100@corfio.com',
  password: '123456',
  name:	'ASTER'
},
{
  email:	'18680861000123@corfio.com',
  password: '123456',
  name:	'R G DE CASTR'
},
{
  email:	'81601353000149@corfio.com',
  password: '123456',
  name:	'JOAO EDUARDO'
},
{
  email:	'8529960000155@corfio.com',
  password: '123456',
  name:	'FAITANIN'
},
{
  email:	'79957791000100@corfio.com',
  password: '123456',
  name:	'CONST ABAPAN'
},
{
  email:	'14621282000159@corfio.com',
  password: '123456',
  name:	'VETTER'
},
{
  email:	'226324000142@corfio.com',
  password: '123456',
  name:	'ELETRICA LUZ'
},
{
  email:	'10567651000111@corfio.com',
  password: '123456',
  name:	'MIRANDA &'
},
{
  email:	'94915394000151@corfio.com',
  password: '123456',
  name:	'LOPES E MADR'
},
{
  email:	'27191748000175@corfio.com',
  password: '123456',
  name:	'COOP PIONEIR'
},
{
  email:	'17449788000110@corfio.com',
  password: '123456',
  name:	'SEFCOM COMER'
},
{
  email:	'86961091000147@corfio.com',
  password: '123456',
  name:	'ILOI PORN'
},
{
  email:	'85343580000172@corfio.com',
  password: '123456',
  name:	'NORD'
},
{
  email:	'994244000137@corfio.com',
  password: '123456',
  name:	'METALFIOS'
},
{
  email:	'88094701002202@corfio.com',
  password: '123456',
  name:	'COOP TRITIO1'
},
{
  email:	'81004988000169@corfio.com',
  password: '123456',
  name:	'JOCA COM. DE'
},
{
  email:	'1211017000150@corfio.com',
  password: '123456',
  name:	'PAULISTA LAM'
},
{
  email:	'76812379000104@corfio.com',
  password: '123456',
  name:	'ZM SA'
},
{
  email:	'18453495000170@corfio.com',
  password: '123456',
  name:	'GERENCIAL E'
},
{
  email:	'7824875000238@corfio.com',
  password: '123456',
  name:	'SANTERRA COM'
},
{
  email:	'5060458000150@corfio.com',
  password: '123456',
  name:	'J C COMERCIO'
},
{
  email:	'763110000105@corfio.com',
  password: '123456',
  name:	'A PREDILAR'
},
{
  email:	'6110817000280@corfio.com',
  password: '123456',
  name:	'ATIVA MATERI'
},
{
  email:	'8720517000167@corfio.com',
  password: '123456',
  name:	'ELETROLUZ'
},
{
  email:	'4268241000177@corfio.com',
  password: '123456',
  name:	'VITORIA CO'
},
{
  email:	'8585141000125@corfio.com',
  password: '123456',
  name:	'GLOBAL AUTOM'
},
{
  email:	'85332799000176@corfio.com',
  password: '123456',
  name:	'ABCM ELETROT'
},
{
  email:	'10430521000132@corfio.com',
  password: '123456',
  name:	'WIATEC ELETR'
},
{
  email:	'8640180000188@corfio.com',
  password: '123456',
  name:	'REDE HIPERMA'
},
{
  email:	'2725006000151@corfio.com',
  password: '123456',
  name:	'LUMIPLAST LT'
},
{
  email:	'79538575000112@corfio.com',
  password: '123456',
  name:	'NESTOR SEBBE'
},
{
  email:	'78898913000164@corfio.com',
  password: '123456',
  name:	'OTT'
},
{
  email:	'36388148000192@corfio.com',
  password: '123456',
  name:	'CON MARECHAL'
},
{
  email:	'5027497000155@corfio.com',
  password: '123456',
  name:	'DUNDI'
},
{
  email:	'3652103000205@corfio.com',
  password: '123456',
  name:	'ELET UNIAO2'
},
{
  email:	'20293958000125@corfio.com',
  password: '123456',
  name:	'COND ILHAS'
},
{
  email:	'28780007000192@corfio.com',
  password: '123456',
  name:	'QUALITRA RIO'
},
{
  email:	'12595954000173@corfio.com',
  password: '123456',
  name:	'FERMATEL DIS'
},
{
  email:	'78663267000156@corfio.com',
  password: '123456',
  name:	'PEL'
},
{
  email:	'92548346000147@corfio.com',
  password: '123456',
  name:	'AGATTI BAZAR'
},
{
  email:	'2638377000104@corfio.com',
  password: '123456',
  name:	'MATEL MATS'
},
{
  email:	'78527082000114@corfio.com',
  password: '123456',
  name:	'TOMIO MATERI'
},
{
  email:	'80359771000109@corfio.com',
  password: '123456',
  name:	'SIAL'
},
{
  email:	'3506365000180@corfio.com',
  password: '123456',
  name:	'ELETRICA RON'
},
{
  email:	'50329267000103@corfio.com',
  password: '123456',
  name:	'ARABIM MAT'
},
{
  email:	'15539663000156@corfio.com',
  password: '123456',
  name:	'JP COMERCIO'
},
{
  email:	'10239755000105@corfio.com',
  password: '123456',
  name:	'AF SUL'
},
{
  email:	'10363842000161@corfio.com',
  password: '123456',
  name:	'BAT SOLUCOES'
},
{
  email:	'5416012000115@corfio.com',
  password: '123456',
  name:	'J J MACHADO'
},
{
  email:	'78324316000126@corfio.com',
  password: '123456',
  name:	'ELETRO NACIO'
},
{
  email:	'12978121000191@corfio.com',
  password: '123456',
  name:	'GLOBAL ATACA'
},
{
  email:	'18711027000158@corfio.com',
  password: '123456',
  name:	'HIDROWATTS'
},
{
  email:	'18040800000100@corfio.com',
  password: '123456',
  name:	'AL R ELETRIC'
},
{
  email:	'24061524000150@corfio.com',
  password: '123456',
  name:	'BRAVA MATERI'
},
{
  email:	'6921643000154@corfio.com',
  password: '123456',
  name:	'ADS SOLUCOES'
},
{
  email:	'14650601000154@corfio.com',
  password: '123456',
  name:	'BRAZAO MATER'
},
{
  email:	'1906851000160@corfio.com',
  password: '123456',
  name:	'NATALIN'
},
{
  email:	'30257792000145@corfio.com',
  password: '123456',
  name:	'JM NASCIMENT'
},
{
  email:	'20939127000188@corfio.com',
  password: '123456',
  name:	'REBOUCAS COM'
},
{
  email:	'10177297000119@corfio.com',
  password: '123456',
  name:	'DARCISO JULI'
},
{
  email:	'3983713000100@corfio.com',
  password: '123456',
  name:	'AGUA AZUL'
},
{
  email:	'82741760000114@corfio.com',
  password: '123456',
  name:	'WOMATEL'
},
{
  email:	'10227229000117@corfio.com',
  password: '123456',
  name:	'JLB MATS'
},
{
  email:	'32296378003609@corfio.com',
  password: '123456',
  name:	'CEREAIS BRAM'
},
{
  email:	'28072979000122@corfio.com',
  password: '123456',
  name:	'MALIZIA'
},
{
  email:	'2607022000140@corfio.com',
  password: '123456',
  name:	'ELETRIZA'
},
{
  email:	'82870478000137@corfio.com',
  password: '123456',
  name:	'PADOIN'
},
{
  email:	'21423109000101@corfio.com',
  password: '123456',
  name:	'COND PLATINU'
},
{
  email:	'93502656000193@corfio.com',
  password: '123456',
  name:	'ELETRONICA F'
},
{
  email:	'2103847000127@corfio.com',
  password: '123456',
  name:	'GEBON SORVET'
},
{
  email:	'26834259000474@corfio.com',
  password: '123456',
  name:	'PETEL MATER'
},
{
  email:	'12404218000190@corfio.com',
  password: '123456',
  name:	'GENIVAL FER'
},
{
  email:	'2569400000148@corfio.com',
  password: '123456',
  name:	'MARIA CATARI'
},
{
  email:	'17043825000196@corfio.com',
  password: '123456',
  name:	'INTEEL AUTOM'
},
{
  email:	'79943056000130@corfio.com',
  password: '123456',
  name:	'NOSTRA CASA'
},
{
  email:	'37559101000107@corfio.com',
  password: '123456',
  name:	'CUNHA E BRAZ'
},
{
  email:	'10369623000190@corfio.com',
  password: '123456',
  name:	'PLANET EMPRE'
},
{
  email:	'4940257000184@corfio.com',
  password: '123456',
  name:	'R. CASTRO'
},
{
  email:	'2302466000177@corfio.com',
  password: '123456',
  name:	'VANRLEI'
},
{
  email:	'8292056000179@corfio.com',
  password: '123456',
  name:	'COMERCIAL J'
},
{
  email:	'417452000173@corfio.com',
  password: '123456',
  name:	'VEIGA'
},
{
  email:	'91707695000100@corfio.com',
  password: '123456',
  name:	'COMERCIAL 10'
},
{
  email:	'85252377000190@corfio.com',
  password: '123456',
  name:	'ELETROGENE'
},
{
  email:	'131770000173@corfio.com',
  password: '123456',
  name:	'TRANSFORMA M'
},
{
  email:	'17390909000104@corfio.com',
  password: '123456',
  name:	'FRIGMANN'
},
{
  email:	'5637287000189@corfio.com',
  password: '123456',
  name:	'CAPRETZ EMPR'
},
{
  email:	'88587357006019@corfio.com',
  password: '123456',
  name:	'SANTA CLARA2'
},
{
  email:	'15195434000161@corfio.com',
  password: '123456',
  name:	'CASA DO ENC'
},
{
  email:	'84311802000102@corfio.com',
  password: '123456',
  name:	'ENGELEC'
},
{
  email:	'7802253000128@corfio.com',
  password: '123456',
  name:	'PRIMUS'
},
{
  email:	'1230356000184@corfio.com',
  password: '123456',
  name:	'BRUNETTI'
},
{
  email:	'26314440000107@corfio.com',
  password: '123456',
  name:	'MASOTTI VILL'
},
{
  email:	'2310049000176@corfio.com',
  password: '123456',
  name:	'STREY E STRE'
},
{
  email:	'18263401000108@corfio.com',
  password: '123456',
  name:	'PATRICK C. P'
},
{
  email:	'71856447000105@corfio.com',
  password: '123456',
  name:	'COREVAL COM'
},
{
  email:	'16041907000139@corfio.com',
  password: '123456',
  name:	'CONCORDIA'
},
{
  email:	'92739382000198@corfio.com',
  password: '123456',
  name:	'SAO PEDRO'
},
{
  email:	'87341186000120@corfio.com',
  password: '123456',
  name:	'TECMA COMERC'
},
{
  email:	'17452769000143@corfio.com',
  password: '123456',
  name:	'CARLESSO ELE'
},
{
  email:	'6162191000174@corfio.com',
  password: '123456',
  name:	'GR SERVICOS'
},
{
  email:	'10276691000104@corfio.com',
  password: '123456',
  name:	'CENTRO DE DI'
},
{
  email:	'8886407000170@corfio.com',
  password: '123456',
  name:	'MINERAX MIN'
},
{
  email:	'11921732000130@corfio.com',
  password: '123456',
  name:	'PAULO C MOCE'
},
{
  email:	'85906329000330@corfio.com',
  password: '123456',
  name:	'C V G CIA'
},
{
  email:	'7406982000165@corfio.com',
  password: '123456',
  name:	'M SANDES FIL'
},
{
  email:	'7256305000108@corfio.com',
  password: '123456',
  name:	'CONST WDD'
},
{
  email:	'2642132000142@corfio.com',
  password: '123456',
  name:	'SAO LUIZ'
},
{
  email:	'25063860000103@corfio.com',
  password: '123456',
  name:	'VILA RENATA'
},
{
  email:	'27434911000183@corfio.com',
  password: '123456',
  name:	'DAVI RODRIG'
},
{
  email:	'83305235007636@corfio.com',
  password: '123456',
  name:	'COOP RE ALFA'
},
{
  email:	'10910748002200@corfio.com',
  password: '123456',
  name:	'YTICON C E I'
},
{
  email:	'87240297000140@corfio.com',
  password: '123456',
  name:	'DURAFA EMPRE'
},
{
  email:	'16986855000173@corfio.com',
  password: '123456',
  name:	'SAO PAULO'
},
{
  email:	'11263777000165@corfio.com',
  password: '123456',
  name:	'JVG COM E MA'
},
{
  email:	'26391870000122@corfio.com',
  password: '123456',
  name:	'TRIANGULO MA'
},
{
  email:	'82965831000162@corfio.com',
  password: '123456',
  name:	'CENTRAL ELET'
},
{
  email:	'6220631000100@corfio.com',
  password: '123456',
  name:	'G A DE ARRUD'
},
{
  email:	'449291000280@corfio.com',
  password: '123456',
  name:	'TECOL'
},
{
  email:	'8928226000169@corfio.com',
  password: '123456',
  name:	'PLANO MANGUE'
},
{
  email:	'54486642000171@corfio.com',
  password: '123456',
  name:	'STEMMI'
},
{
  email:	'6095440000156@corfio.com',
  password: '123456',
  name:	'GILSON FREIT'
},
{
  email:	'9043436000132@corfio.com',
  password: '123456',
  name:	'MOR CONSTR B'
},
{
  email:	'92999929000194@corfio.com',
  password: '123456',
  name:	'COLOMBELLI'
},
{
  email:	'21192815000190@corfio.com',
  password: '123456',
  name:	'DINAMICA SOL'
},
{
  email:	'87776043000141@corfio.com',
  password: '123456',
  name:	'COOPERATIV2'
},
{
  email:	'3018547000102@corfio.com',
  password: '123456',
  name:	'BRIMADEC'
},
{
  email:	'26300461000173@corfio.com',
  password: '123456',
  name:	'AKON ENGENHA'
},
{
  email:	'16741669000174@corfio.com',
  password: '123456',
  name:	'COM PAIOL'
},
{
  email:	'2933208000199@corfio.com',
  password: '123456',
  name:	'FEITICEIRA'
},
{
  email:	'13501187001201@corfio.com',
  password: '123456',
  name:	'CASAS D AGU'
},
{
  email:	'9326659000107@corfio.com',
  password: '123456',
  name:	'MAGERE'
},
{
  email:	'4977601000100@corfio.com',
  password: '123456',
  name:	'CFM ENGENHAR'
},
{
  email:	'20829037000134@corfio.com',
  password: '123456',
  name:	'COND E REF'
},
{
  email:	'73329286000127@corfio.com',
  password: '123456',
  name:	'ELETRO VILLE'
},
{
  email:	'1982678000180@corfio.com',
  password: '123456',
  name:	'V.B.C'
},
{
  email:	'21374485000153@corfio.com',
  password: '123456',
  name:	'J MARTINS'
},
{
  email:	'4484576000122@corfio.com',
  password: '123456',
  name:	'COML AGUA'
},
{
  email:	'8621144000177@corfio.com',
  password: '123456',
  name:	'AMPLAENG'
},
{
  email:	'4610413000149@corfio.com',
  password: '123456',
  name:	'CONSTRUTOR65'
},
{
  email:	'22320269000198@corfio.com',
  password: '123456',
  name:	'ASSOC PROCO'
},
{
  email:	'49986037000120@corfio.com',
  password: '123456',
  name:	'GREROS'
},
{
  email:	'2345244000131@corfio.com',
  password: '123456',
  name:	'MEURER'
},
{
  email:	'3965457000129@corfio.com',
  password: '123456',
  name:	'COMTUDO'
},
{
  email:	'7324090000115@corfio.com',
  password: '123456',
  name:	'ELETRO OESTE'
},
{
  email:	'7263558000109@corfio.com',
  password: '123456',
  name:	'ERLEY DOS S'
},
{
  email:	'4811182000131@corfio.com',
  password: '123456',
  name:	'DUACO EMP'
},
{
  email:	'1298634000135@corfio.com',
  password: '123456',
  name:	'ALTEC'
},
{
  email:	'1065982000243@corfio.com',
  password: '123456',
  name:	'COML ELET FO'
},
{
  email:	'16875022000135@corfio.com',
  password: '123456',
  name:	'ALFA VENEZ'
},
{
  email:	'83055020000197@corfio.com',
  password: '123456',
  name:	'UNIDAS'
},
{
  email:	'4769422000187@corfio.com',
  password: '123456',
  name:	'DAMASCENO CO'
},
{
  email:	'10910748001904@corfio.com',
  password: '123456',
  name:	'YTICON CONS'
},
{
  email:	'11335987000111@corfio.com',
  password: '123456',
  name:	'PLANETA D T'
},
{
  email:	'32084129000111@corfio.com',
  password: '123456',
  name:	'ELETRO SIMON'
},
{
  email:	'8888553000134@corfio.com',
  password: '123456',
  name:	'MS COM'
},
{
  email:	'1731828000182@corfio.com',
  password: '123456',
  name:	'ELETRICA FOR'
},
{
  email:	'91876037000133@corfio.com',
  password: '123456',
  name:	'TUBETIO'
},
{
  email:	'29821153000181@corfio.com',
  password: '123456',
  name:	'RETAIL PARK'
},
{
  email:	'9269264000110@corfio.com',
  password: '123456',
  name:	'ELETRICA PAN'
},
{
  email:	'11735722000100@corfio.com',
  password: '123456',
  name:	'KRAMBECK'
},
{
  email:	'53654299000164@corfio.com',
  password: '123456',
  name:	'CONST PAGANO'
},
{
  email:	'1835937000140@corfio.com',
  password: '123456',
  name:	'PRESEL COMER'
},
{
  email:	'78650330000110@corfio.com',
  password: '123456',
  name:	'SIMECOL MATE'
},
{
  email:	'172143000180@corfio.com',
  password: '123456',
  name:	'INSTEGEL INS'
},
{
  email:	'7508851000199@corfio.com',
  password: '123456',
  name:	'TRENTO COML'
},
{
  email:	'1373467000140@corfio.com',
  password: '123456',
  name:	'PRIMA PARQUE'
},
{
  email:	'15644437000135@corfio.com',
  password: '123456',
  name:	'PALOLUX'
},
{
  email:	'17659332000185@corfio.com',
  password: '123456',
  name:	'GUARAPUAV'
},
{
  email:	'791802000167@corfio.com',
  password: '123456',
  name:	'ARCOS'
},
{
  email:	'10359754000196@corfio.com',
  password: '123456',
  name:	'HIDRAULICA E'
},
{
  email:	'89231708001139@corfio.com',
  password: '123456',
  name:	'COOP4'
},
{
  email:	'18809576000160@corfio.com',
  password: '123456',
  name:	'PATIO SABIA'
},
{
  email:	'18835904000100@corfio.com',
  password: '123456',
  name:	'M M MAT ELE'
},
{
  email:	'85231694000120@corfio.com',
  password: '123456',
  name:	'E V M COMERC'
},
{
  email:	'68757152000177@corfio.com',
  password: '123456',
  name:	'ECB ENGENHAR'
},
{
  email:	'26181781000151@corfio.com',
  password: '123456',
  name:	'BETACOM'
},
{
  email:	'81660862000142@corfio.com',
  password: '123456',
  name:	'ADS COMER'
},
{
  email:	'11080426000119@corfio.com',
  password: '123456',
  name:	'RC MAT DE CO'
},
{
  email:	'7663506000120@corfio.com',
  password: '123456',
  name:	'TRES COROAS'
},
{
  email:	'17849664000122@corfio.com',
  password: '123456',
  name:	'GT 14 EMPREE'
},
{
  email:	'4708900000149@corfio.com',
  password: '123456',
  name:	'C D PASE'
},
{
  email:	'13344901000142@corfio.com',
  password: '123456',
  name:	'LUX COML'
},
{
  email:	'93904886000189@corfio.com',
  password: '123456',
  name:	'ANAI SILVA D'
},
{
  email:	'3905342000149@corfio.com',
  password: '123456',
  name:	'H P SILVA'
},
{
  email:	'79941902000182@corfio.com',
  password: '123456',
  name:	'IMPERATRIZ'
},
{
  email:	'79245296000160@corfio.com',
  password: '123456',
  name:	'MEPAR MERCAD'
},
{
  email:	'92252212000184@corfio.com',
  password: '123456',
  name:	'LIDER GRAVAT'
},
{
  email:	'20327690000103@corfio.com',
  password: '123456',
  name:	'CASA ELETR1'
},
{
  email:	'20619518000115@corfio.com',
  password: '123456',
  name:	'D S P MATERI'
},
{
  email:	'75344937000183@corfio.com',
  password: '123456',
  name:	'SINTEX IND'
},
{
  email:	'5802473000207@corfio.com',
  password: '123456',
  name:	'GFA INCORP L'
},
{
  email:	'4586083000101@corfio.com',
  password: '123456',
  name:	'MEPLA MANUTE'
},
{
  email:	'77124196000150@corfio.com',
  password: '123456',
  name:	'GRACZVK &'
},
{
  email:	'86907235000349@corfio.com',
  password: '123456',
  name:	'MANUCHAR'
},
{
  email:	'12346741000370@corfio.com',
  password: '123456',
  name:	'VIVAMUS EMPR'
},
{
  email:	'27762864000105@corfio.com',
  password: '123456',
  name:	'SAO BENEDITO'
},
{
  email:	'94169331000101@corfio.com',
  password: '123456',
  name:	'MORELLI COM.'
},
{
  email:	'67041095000162@corfio.com',
  password: '123456',
  name:	'TARRAF CONST'
},
{
  email:	'60855160000225@corfio.com',
  password: '123456',
  name:	'ELETROREDE M'
},
{
  email:	'974731001029@corfio.com',
  password: '123456',
  name:	'FRANGOS I'
},
{
  email:	'7811984000130@corfio.com',
  password: '123456',
  name:	'CONSTRUIR'
},
{
  email:	'4467621000130@corfio.com',
  password: '123456',
  name:	'RODRIK CONST'
},
{
  email:	'88201173000119@corfio.com',
  password: '123456',
  name:	'VALDEMAR BEC'
},
{
  email:	'2039580000156@corfio.com',
  password: '123456',
  name:	'EDILMARI MAT'
},
{
  email:	'7356453000102@corfio.com',
  password: '123456',
  name:	'ENIO AMARAL'
},
{
  email:	'18627130000114@corfio.com',
  password: '123456',
  name:	'FF COMERCIO'
},
{
  email:	'16550342000115@corfio.com',
  password: '123456',
  name:	'VILLAGIO GIR'
},
{
  email:	'2241228000107@corfio.com',
  password: '123456',
  name:	'HINDY CONSTR'
},
{
  email:	'3922226000138@corfio.com',
  password: '123456',
  name:	'ANZAI'
},
{
  email:	'13281382000110@corfio.com',
  password: '123456',
  name:	'VITORIA ATAC'
},
{
  email:	'7120505000139@corfio.com',
  password: '123456',
  name:	'VERTICE ADM'
},
{
  email:	'13226152000159@corfio.com',
  password: '123456',
  name:	'JMM ELETRICA'
},
{
  email:	'24112089000146@corfio.com',
  password: '123456',
  name:	'GMR BRAS'
},
{
  email:	'1136612000179@corfio.com',
  password: '123456',
  name:	'SERGIO OLIV'
},
{
  email:	'19869277000183@corfio.com',
  password: '123456',
  name:	'PLANO LIMEIR'
},
{
  email:	'19270137000194@corfio.com',
  password: '123456',
  name:	'PLANO PEROBA'
},
{
  email:	'15469838000104@corfio.com',
  password: '123456',
  name:	'ELETROTUBO'
},
{
  email:	'86935483000131@corfio.com',
  password: '123456',
  name:	'COMERCIAL G'
},
{
  email:	'27073713000131@corfio.com',
  password: '123456',
  name:	'COML SENIOR'
},
{
  email:	'24186294000156@corfio.com',
  password: '123456',
  name:	'INSTAL CONTA'
},
{
  email:	'24656431000179@corfio.com',
  password: '123456',
  name:	'MORENO'
},
{
  email:	'82965955000148@corfio.com',
  password: '123456',
  name:	'GUBLER MATS'
},
{
  email:	'10977707000106@corfio.com',
  password: '123456',
  name:	'ELETRO MARKA'
},
{
  email:	'10296062000146@corfio.com',
  password: '123456',
  name:	'ELETROMART'
},
{
  email:	'17310773000177@corfio.com',
  password: '123456',
  name:	'PIETRA'
},
{
  email:	'21272121000162@corfio.com',
  password: '123456',
  name:	'HOLZ ELETRIF'
},
{
  email:	'2461936000145@corfio.com',
  password: '123456',
  name:	'P 3 ENGENHAR'
},
{
  email:	'1964275000108@corfio.com',
  password: '123456',
  name:	'ELETRO XANDE'
},
{
  email:	'21515665000108@corfio.com',
  password: '123456',
  name:	'SSA COMERCIO'
},
{
  email:	'25041538000175@corfio.com',
  password: '123456',
  name:	'ELETRICA TI'
},
{
  email:	'8093667000198@corfio.com',
  password: '123456',
  name:	'JZAGO'
},
{
  email:	'22980507000191@corfio.com',
  password: '123456',
  name:	'ED OURO PRET'
},
{
  email:	'10015722000173@corfio.com',
  password: '123456',
  name:	'MAICON PORN'
},
{
  email:	'79965331000116@corfio.com',
  password: '123456',
  name:	'COND E EDFIC'
},
{
  email:	'86715380000166@corfio.com',
  password: '123456',
  name:	'CONSTRUFASE'
},
{
  email:	'13433550000146@corfio.com',
  password: '123456',
  name:	'ANTONINHA GR'
},
{
  email:	'8985934000131@corfio.com',
  password: '123456',
  name:	'GERAL MAT D'
},
{
  email:	'15919910000140@corfio.com',
  password: '123456',
  name:	'DINAMICS MAT'
},
{
  email:	'75276097000320@corfio.com',
  password: '123456',
  name:	'COMCORD CONS'
},
{
  email:	'534988000179@corfio.com',
  password: '123456',
  name:	'L C'
},
{
  email:	'94228160000136@corfio.com',
  password: '123456',
  name:	'BERTAMONI'
},
{
  email:	'97542480000154@corfio.com',
  password: '123456',
  name:	'BARROS E AL'
},
{
  email:	'1697725000143@corfio.com',
  password: '123456',
  name:	'CELLA & CELL'
},
{
  email:	'7931533000306@corfio.com',
  password: '123456',
  name:	'EXCEL'
},
{
  email:	'80408248000125@corfio.com',
  password: '123456',
  name:	'ELETROCEL CO'
},
{
  email:	'78016003003398@corfio.com',
  password: '123456',
  name:	'A YOSHII E'
},
{
  email:	'88279419000256@corfio.com',
  password: '123456',
  name:	'MACKE'
},
{
  email:	'106105000120@corfio.com',
  password: '123456',
  name:	'ANDRADE & SA'
},
{
  email:	'95211181000101@corfio.com',
  password: '123456',
  name:	'VANDIRNEI C'
},
{
  email:	'21794561000180@corfio.com',
  password: '123456',
  name:	'VITRA COMPOS'
},
{
  email:	'7032076000148@corfio.com',
  password: '123456',
  name:	'FUNDIMISA'
},
{
  email:	'8310467000140@corfio.com',
  password: '123456',
  name:	'LUMINA'
},
{
  email:	'24162826000115@corfio.com',
  password: '123456',
  name:	'VITT GUARAPU'
},
{
  email:	'94804994000142@corfio.com',
  password: '123456',
  name:	'FARROUPILHA'
},
{
  email:	'13722177000224@corfio.com',
  password: '123456',
  name:	'MENDONCA MAT'
},
{
  email:	'1327410000104@corfio.com',
  password: '123456',
  name:	'LORENZETTI'
},
{
  email:	'28901100000108@corfio.com',
  password: '123456',
  name:	'JALIM'
},
{
  email:	'24353806000121@corfio.com',
  password: '123456',
  name:	'PLANO XINGU'
},
{
  email:	'10144140000197@corfio.com',
  password: '123456',
  name:	'PLAENGE LON'
},
{
  email:	'11898157000100@corfio.com',
  password: '123456',
  name:	'ALCIONE COGO'
},
{
  email:	'37415171000191@corfio.com',
  password: '123456',
  name:	'DISJUNTOR'
},
{
  email:	'4415080000105@corfio.com',
  password: '123456',
  name:	'ELETROMIL'
},
{
  email:	'80653918000330@corfio.com',
  password: '123456',
  name:	'TONET M'
},
{
  email:	'5611674000146@corfio.com',
  password: '123456',
  name:	'JPA SERV'
},
{
  email:	'97078463004952@corfio.com',
  password: '123456',
  name:	'COOP TRIT52'
},
{
  email:	'19486169000121@corfio.com',
  password: '123456',
  name:	'COELHO COM'
},
{
  email:	'2213975000123@corfio.com',
  password: '123456',
  name:	'ELETRICA LUM'
},
{
  email:	'4562619000140@corfio.com',
  password: '123456',
  name:	'COME ELETRIC'
},
{
  email:	'2359273000152@corfio.com',
  password: '123456',
  name:	'HIPER JN'
},
{
  email:	'7550459000108@corfio.com',
  password: '123456',
  name:	'ORIONES DIST'
},
{
  email:	'5403058000108@corfio.com',
  password: '123456',
  name:	'LUIZ'
},
{
  email:	'25049176000169@corfio.com',
  password: '123456',
  name:	'MONERETTO'
},
{
  email:	'26801230000143@corfio.com',
  password: '123456',
  name:	'ELETROPASSOS'
},
{
  email:	'4692951000120@corfio.com',
  password: '123456',
  name:	'LUNELLI'
},
{
  email:	'15754347000105@corfio.com',
  password: '123456',
  name:	'JOSE FRANC05'
},
{
  email:	'21536067000115@corfio.com',
  password: '123456',
  name:	'DIAL DISTRIB'
},
{
  email:	'26174743000171@corfio.com',
  password: '123456',
  name:	'ELETROLED IN'
},
{
  email:	'24575502000109@corfio.com',
  password: '123456',
  name:	'CAP 1 INCORP'
},
{
  email:	'7266962000136@corfio.com',
  password: '123456',
  name:	'POSITIVA CON'
},
{
  email:	'12869817000180@corfio.com',
  password: '123456',
  name:	'DECANO CONST'
},
{
  email:	'20801836000100@corfio.com',
  password: '123456',
  name:	'4P INCORP'
},
{
  email:	'8803766000116@corfio.com',
  password: '123456',
  name:	'RWS MATS'
},
{
  email:	'21439904000198@corfio.com',
  password: '123456',
  name:	'LETICIA R PE'
},
{
  email:	'7766776000166@corfio.com',
  password: '123456',
  name:	'COM BORBA'
},
{
  email:	'10639801000155@corfio.com',
  password: '123456',
  name:	'ENERGYTEK'
},
{
  email:	'26915209000179@corfio.com',
  password: '123456',
  name:	'LASER ILU'
},
{
  email:	'26714007000169@corfio.com',
  password: '123456',
  name:	'SOUZA MATERI'
},
{
  email:	'10254206000100@corfio.com',
  password: '123456',
  name:	'CASACCHI'
},
{
  email:	'15471985000100@corfio.com',
  password: '123456',
  name:	'ASSOC SANTA'
},
{
  email:	'5337921000168@corfio.com',
  password: '123456',
  name:	'ZAMBON PACHE'
},
{
  email:	'88094701004094@corfio.com',
  password: '123456',
  name:	'COOP TRIT MI'
},
{
  email:	'17178195002453@corfio.com',
  password: '123456',
  name:	'SOC MIN DE C'
},
{
  email:	'90989708000100@corfio.com',
  password: '123456',
  name:	'J M MARCON E'
},
{
  email:	'5768567000126@corfio.com',
  password: '123456',
  name:	'ATUAL INDUST'
},
{
  email:	'257433000127@corfio.com',
  password: '123456',
  name:	'LUCICOPPI CO'
},
{
  email:	'13501187001805@corfio.com',
  password: '123456',
  name:	'CASAS D AGUA'
},
{
  email:	'28814142000101@corfio.com',
  password: '123456',
  name:	'JAIME JOSE'
},
{
  email:	'18578828000359@corfio.com',
  password: '123456',
  name:	'HESA 164'
},
{
  email:	'10291471000150@corfio.com',
  password: '123456',
  name:	'SERVILUZ'
},
{
  email:	'10487160000160@corfio.com',
  password: '123456',
  name:	'ACM MATERIAI'
},
{
  email:	'4523083000154@corfio.com',
  password: '123456',
  name:	'NELSON PRICH'
},
{
  email:	'49964190000156@corfio.com',
  password: '123456',
  name:	'M ANZAI'
},
{
  email:	'14716475000193@corfio.com',
  password: '123456',
  name:	'CATANIA'
},
{
  email:	'81876518000195@corfio.com',
  password: '123456',
  name:	'BASSO'
},
{
  email:	'19154632000138@corfio.com',
  password: '123456',
  name:	'ELETROLAR IT'
},
{
  email:	'63755664000180@corfio.com',
  password: '123456',
  name:	'FERNAND'
},
{
  email:	'71465728000137@corfio.com',
  password: '123456',
  name:	'PROSPECTIVA'
},
{
  email:	'4164073000170@corfio.com',
  password: '123456',
  name:	'PAULO ELOIR'
},
{
  email:	'3051152000101@corfio.com',
  password: '123456',
  name:	'R ZASSO'
},
{
  email:	'7032688000726@corfio.com',
  password: '123456',
  name:	'REALENGO AL'
},
{
  email:	'90951005000192@corfio.com',
  password: '123456',
  name:	'RUBEN BOFF'
},
{
  email:	'9552348000166@corfio.com',
  password: '123456',
  name:	'ELETRO COM L'
},
{
  email:	'19259663000153@corfio.com',
  password: '123456',
  name:	'3RTE MON'
},
{
  email:	'92213735000111@corfio.com',
  password: '123456',
  name:	'SBRUZZI AMOR'
},
{
  email:	'2700079000199@corfio.com',
  password: '123456',
  name:	'ALTHO'
},
{
  email:	'17582143000151@corfio.com',
  password: '123456',
  name:	'SO PADROES E'
},
{
  email:	'1346561000290@corfio.com',
  password: '123456',
  name:	'VASCONCELOS1'
},
{
  email:	'3073012000134@corfio.com',
  password: '123456',
  name:	'CALCARIO'
},
{
  email:	'79676110000128@corfio.com',
  password: '123456',
  name:	'PROFISSIONAL'
},
{
  email:	'95876447000135@corfio.com',
  password: '123456',
  name:	'LEAO POCOS A'
},
{
  email:	'18407219000175@corfio.com',
  password: '123456',
  name:	'RES MARTIN L'
},
{
  email:	'18096061000160@corfio.com',
  password: '123456',
  name:	'ESN COMERCIO'
},
{
  email:	'6277466000115@corfio.com',
  password: '123456',
  name:	'EDEMIR'
},
{
  email:	'45112067000156@corfio.com',
  password: '123456',
  name:	'PIEL MATERIA'
},
{
  email:	'97404842000140@corfio.com',
  password: '123456',
  name:	'KRUM CONSTR'
},
{
  email:	'21344720000144@corfio.com',
  password: '123456',
  name:	'METAFIO COM'
},
{
  email:	'617983000100@corfio.com',
  password: '123456',
  name:	'ELETRO - FM'
},
{
  email:	'12759576000116@corfio.com',
  password: '123456',
  name:	'ENERTEL MAT'
},
{
  email:	'9251434000139@corfio.com',
  password: '123456',
  name:	'INBRASUL'
},
{
  email:	'4080700000275@corfio.com',
  password: '123456',
  name:	'METTA A'
},
{
  email:	'10994613000145@corfio.com',
  password: '123456',
  name:	'LUCIARA DORN'
},
{
  email:	'43781400000194@corfio.com',
  password: '123456',
  name:	'GLOLANI COM'
},
{
  email:	'10350739000187@corfio.com',
  password: '123456',
  name:	'RACOES PET'
},
{
  email:	'90462003000130@corfio.com',
  password: '123456',
  name:	'LIZOT'
},
{
  email:	'371074000134@corfio.com',
  password: '123456',
  name:	'CONST PROJE'
},
{
  email:	'5730941000102@corfio.com',
  password: '123456',
  name:	'CELENTROSUL'
},
{
  email:	'75357384000101@corfio.com',
  password: '123456',
  name:	'DIETRICH MAT'
},
{
  email:	'9581079000166@corfio.com',
  password: '123456',
  name:	'ELETRIO MATS'
},
{
  email:	'9589405000181@corfio.com',
  password: '123456',
  name:	'RCA PRESTADO'
},
{
  email:	'25142831000129@corfio.com',
  password: '123456',
  name:	'R046 RIO DE'
},
{
  email:	'11000062000110@corfio.com',
  password: '123456',
  name:	'CASTELLI MAT'
},
{
  email:	'12562938000184@corfio.com',
  password: '123456',
  name:	'SO AUTOMACAO'
},
{
  email:	'2749429000101@corfio.com',
  password: '123456',
  name:	'DINAMICA'
},
{
  email:	'9674510000119@corfio.com',
  password: '123456',
  name:	'LOPES & GRUE'
},
{
  email:	'27193968000138@corfio.com',
  password: '123456',
  name:	'ELETR SAO CR'
},
{
  email:	'7456717000191@corfio.com',
  password: '123456',
  name:	'TECPLUS CABO'
},
{
  email:	'88818216000100@corfio.com',
  password: '123456',
  name:	'LONGHI ENG'
},
{
  email:	'70082664000122@corfio.com',
  password: '123456',
  name:	'JCL LAJES'
},
{
  email:	'27244187000125@corfio.com',
  password: '123456',
  name:	'MATO GROSSO'
},
{
  email:	'3023005000128@corfio.com',
  password: '123456',
  name:	'ALTAIR ARTEM'
},
{
  email:	'23658300000168@corfio.com',
  password: '123456',
  name:	'M PASSAMANI'
},
{
  email:	'3004647000180@corfio.com',
  password: '123456',
  name:	'EVALDO DA RO'
},
{
  email:	'3686780000163@corfio.com',
  password: '123456',
  name:	'AMP REFRIG'
},
{
  email:	'1711005000195@corfio.com',
  password: '123456',
  name:	'PANORAMA M'
},
{
  email:	'76735356000135@corfio.com',
  password: '123456',
  name:	'MIL WATTS MA'
},
{
  email:	'13338581000118@corfio.com',
  password: '123456',
  name:	'RALTEC ELET'
},
{
  email:	'5849364000164@corfio.com',
  password: '123456',
  name:	'ELETROPONTO'
},
{
  email:	'6352100000163@corfio.com',
  password: '123456',
  name:	'JOAO TEODORO'
},
{
  email:	'11707750000114@corfio.com',
  password: '123456',
  name:	'OZEIAS MATER'
},
{
  email:	'6977215000143@corfio.com',
  password: '123456',
  name:	'ILHA'
},
{
  email:	'24353779000197@corfio.com',
  password: '123456',
  name:	'PLANO MADEIR'
},
{
  email:	'876873000162@corfio.com',
  password: '123456',
  name:	'CONCREPLAN'
},
{
  email:	'13965164000103@corfio.com',
  password: '123456',
  name:	'JB COM'
},
{
  email:	'3758175000150@corfio.com',
  password: '123456',
  name:	'FEMAI'
},
{
  email:	'80725278000165@corfio.com',
  password: '123456',
  name:	'F SARETTO'
},
{
  email:	'81236242000180@corfio.com',
  password: '123456',
  name:	'COM AROEIRA'
},
{
  email:	'11252888000176@corfio.com',
  password: '123456',
  name:	'LAVANDERIA A'
},
{
  email:	'8811560000138@corfio.com',
  password: '123456',
  name:	'T R COMERCIO'
},
{
  email:	'59246090000148@corfio.com',
  password: '123456',
  name:	'CIAFER MAT P'
},
{
  email:	'80649676000140@corfio.com',
  password: '123456',
  name:	'CONST AMC'
},
{
  email:	'90191529000122@corfio.com',
  password: '123456',
  name:	'EXATRON IND'
},
{
  email:	'22802967000120@corfio.com',
  password: '123456',
  name:	'CAPITAL COM'
},
{
  email:	'87296026000107@corfio.com',
  password: '123456',
  name:	'BENOIT ELETR'
},
{
  email:	'7548286000193@corfio.com',
  password: '123456',
  name:	'NOROESTE MAT'
},
{
  email:	'308869000106@corfio.com',
  password: '123456',
  name:	'PICOLINI E P'
},
{
  email:	'33759218000264@corfio.com',
  password: '123456',
  name:	'ELOS COM DE'
},
{
  email:	'27623575000117@corfio.com',
  password: '123456',
  name:	'KIFASE'
},
{
  email:	'12401455000106@corfio.com',
  password: '123456',
  name:	'GILBERTO OST'
},
{
  email:	'75820902000173@corfio.com',
  password: '123456',
  name:	'MATELBRU COM'
},
{
  email:	'24600935000177@corfio.com',
  password: '123456',
  name:	'ITAPUA 0054'
},
{
  email:	'12595206000190@corfio.com',
  password: '123456',
  name:	'DRUMOND'
},
{
  email:	'22712076000182@corfio.com',
  password: '123456',
  name:	'FONTE LUZ M'
},
{
  email:	'4347124000107@corfio.com',
  password: '123456',
  name:	'3M COM DE MA'
},
{
  email:	'4975429000155@corfio.com',
  password: '123456',
  name:	'J V COM DE T'
},
{
  email:	'26038873000187@corfio.com',
  password: '123456',
  name:	'MATOS COMERC'
},
{
  email:	'88793500000179@corfio.com',
  password: '123456',
  name:	'ARSENIO DE B'
},
{
  email:	'17691237000240@corfio.com',
  password: '123456',
  name:	'F11 CONSTRUT'
},
{
  email:	'10694167000153@corfio.com',
  password: '123456',
  name:	'SSP SERVICOS'
},
{
  email:	'72739469000158@corfio.com',
  password: '123456',
  name:	'MUNDO ELETI1'
},
{
  email:	'16422291000146@corfio.com',
  password: '123456',
  name:	'SILTRONICS'
},
{
  email:	'18126995000105@corfio.com',
  password: '123456',
  name:	'REI MAT'
},
{
  email:	'23876172000129@corfio.com',
  password: '123456',
  name:	'CALCARIO MIL'
},
{
  email:	'4633754000130@corfio.com',
  password: '123456',
  name:	'ITALIA'
},
{
  email:	'61075057000144@corfio.com',
  password: '123456',
  name:	'PIZZIMENTI'
},
{
  email:	'19503325000115@corfio.com',
  password: '123456',
  name:	'LOJA AZEVEDO'
},
{
  email:	'13435534000192@corfio.com',
  password: '123456',
  name:	'OUROLUZ'
},
{
  email:	'1281608000366@corfio.com',
  password: '123456',
  name:	'ITAU DIST DE'
},
{
  email:	'82095456000147@corfio.com',
  password: '123456',
  name:	'PROJETEL MAT'
},
{
  email:	'20214195000180@corfio.com',
  password: '123456',
  name:	'BRUNA MASIER'
},
{
  email:	'85354587000190@corfio.com',
  password: '123456',
  name:	'COMERCIAL 22'
},
{
  email:	'10915919000169@corfio.com',
  password: '123456',
  name:	'ZANATTA MATS'
},
{
  email:	'7826791000152@corfio.com',
  password: '123456',
  name:	'USINA DE OBR'
},
{
  email:	'11666361000198@corfio.com',
  password: '123456',
  name:	'MARITHUR'
},
{
  email:	'60621141000404@corfio.com',
  password: '123456',
  name:	'PAUMAR SA'
},
{
  email:	'1911826000175@corfio.com',
  password: '123456',
  name:	'FAVARETTO'
},
{
  email:	'924456000148@corfio.com',
  password: '123456',
  name:	'COSTA RICA'
},
{
  email:	'93809770000160@corfio.com',
  password: '123456',
  name:	'WEBER2'
},
{
  email:	'15492196000156@corfio.com',
  password: '123456',
  name:	'ALVARO CAYRE'
},
{
  email:	'32901936000180@corfio.com',
  password: '123456',
  name:	'COND RECANT'
},
{
  email:	'91495549000150@corfio.com',
  password: '123456',
  name:	'COTRIJAL COO'
},
{
  email:	'2245010000112@corfio.com',
  password: '123456',
  name:	'C M F'
},
{
  email:	'7735324000117@corfio.com',
  password: '123456',
  name:	'ITOFRAN'
},
{
  email:	'22039083000165@corfio.com',
  password: '123456',
  name:	'IMEPP INDUST'
},
{
  email:	'17008994000195@corfio.com',
  password: '123456',
  name:	'CVL COM'
},
{
  email:	'19901093000153@corfio.com',
  password: '123456',
  name:	'PROJECAO SOL'
},
{
  email:	'75796706000100@corfio.com',
  password: '123456',
  name:	'AGRICOL MATS'
},
{
  email:	'20023975000142@corfio.com',
  password: '123456',
  name:	'GRAN CONSTRU'
},
{
  email:	'89096457004819@corfio.com',
  password: '123456',
  name:	'SLC II'
},
{
  email:	'85387447000118@corfio.com',
  password: '123456',
  name:	'IMPERIAL SUP'
},
{
  email:	'9237208000101@corfio.com',
  password: '123456',
  name:	'ELETRO VIZI'
},
{
  email:	'5826635000166@corfio.com',
  password: '123456',
  name:	'OZANO LTDA'
},
{
  email:	'9452299000190@corfio.com',
  password: '123456',
  name:	'CLAUDIOMI'
},
{
  email:	'3144649000174@corfio.com',
  password: '123456',
  name:	'PEREIRA E V'
},
{
  email:	'3581798000109@corfio.com',
  password: '123456',
  name:	'AGUA BRANCA'
},
{
  email:	'3752709000131@corfio.com',
  password: '123456',
  name:	'MILENIUM NEG'
},
{
  email:	'177944000139@corfio.com',
  password: '123456',
  name:	'CONSTRUT JLC'
},
{
  email:	'5456985000269@corfio.com',
  password: '123456',
  name:	'M E DEFANT'
},
{
  email:	'3054773000149@corfio.com',
  password: '123456',
  name:	'ELET COMPANY'
},
{
  email:	'35986132000119@corfio.com',
  password: '123456',
  name:	'AGRIZZI'
},
{
  email:	'8594928000153@corfio.com',
  password: '123456',
  name:	'CIAFER NORTE'
},
{
  email:	'8537133000103@corfio.com',
  password: '123456',
  name:	'NUTRIFOS'
},
{
  email:	'27481847000191@corfio.com',
  password: '123456',
  name:	'AROEIRA INV'
},
{
  email:	'11419911001227@corfio.com',
  password: '123456',
  name:	'YOSHII'
},
{
  email:	'528952000182@corfio.com',
  password: '123456',
  name:	'AUGUSTO'
},
{
  email:	'5626119000198@corfio.com',
  password: '123456',
  name:	'AN MORELATTO'
},
{
  email:	'5012136000135@corfio.com',
  password: '123456',
  name:	'REBOUCAS'
},
{
  email:	'15429333000108@corfio.com',
  password: '123456',
  name:	'GT MATERIAIS'
},
{
  email:	'13665305000164@corfio.com',
  password: '123456',
  name:	'LEMOS DE LIM'
},
{
  email:	'7880915000269@corfio.com',
  password: '123456',
  name:	'KALLAS MOFAR'
},
{
  email:	'2323274000147@corfio.com',
  password: '123456',
  name:	'KRUEGER'
},
{
  email:	'13152186000146@corfio.com',
  password: '123456',
  name:	'SUPER S.LUCA'
},
{
  email:	'10415935000192@corfio.com',
  password: '123456',
  name:	'COOP DE DESE'
},
{
  email:	'10954125000104@corfio.com',
  password: '123456',
  name:	'ARMAZ GUARAN'
},
{
  email:	'7762343000132@corfio.com',
  password: '123456',
  name:	'S V W IND'
},
{
  email:	'2199684000390@corfio.com',
  password: '123456',
  name:	'DOURAMOTOR'
},
{
  email:	'23630623000143@corfio.com',
  password: '123456',
  name:	'CH AUTOMACAO'
},
{
  email:	'3970326000130@corfio.com',
  password: '123456',
  name:	'NORDESTE'
},
{
  email:	'95785000123@corfio.com',
  password: '123456',
  name:	'ALDO PANCERA'
},
{
  email:	'7197900000462@corfio.com',
  password: '123456',
  name:	'KLEINERT &'
},
{
  email:	'8139035000118@corfio.com',
  password: '123456',
  name:	'ATS COMERCIO'
},
{
  email:	'24083641000115@corfio.com',
  password: '123456',
  name:	'ANDRESSA FER'
},
{
  email:	'12219993000176@corfio.com',
  password: '123456',
  name:	'VARGAS COM'
},
{
  email:	'97396824000164@corfio.com',
  password: '123456',
  name:	'JARAGUA 1'
},
{
  email:	'95823779000151@corfio.com',
  password: '123456',
  name:	'ELETROMIS'
},
{
  email:	'17804858000101@corfio.com',
  password: '123456',
  name:	'ROQUE SPIES'
},
{
  email:	'31075299000177@corfio.com',
  password: '123456',
  name:	'LUZ E CIA'
},
{
  email:	'3837369000141@corfio.com',
  password: '123456',
  name:	'SOUPER COM'
},
{
  email:	'87700746000277@corfio.com',
  password: '123456',
  name:	'AGROPASTORIL'
},
{
  email:	'13500446000127@corfio.com',
  password: '123456',
  name:	'COML ELET TU'
},
{
  email:	'7790953000220@corfio.com',
  password: '123456',
  name:	'MOINHO MATER'
},
{
  email:	'5230698000155@corfio.com',
  password: '123456',
  name:	'FINA ENGENHA'
},
{
  email:	'28287087000149@corfio.com',
  password: '123456',
  name:	'3 RW INDUSTR'
},
{
  email:	'19805583000156@corfio.com',
  password: '123456',
  name:	'SQUARE FARIA'
},
{
  email:	'75862961000295@corfio.com',
  password: '123456',
  name:	'ARDUINO'
},
{
  email:	'200157000160@corfio.com',
  password: '123456',
  name:	'VOTIS EMPR'
},
{
  email:	'3806018000173@corfio.com',
  password: '123456',
  name:	'ELETRO MENDO'
},
{
  email:	'85907558000108@corfio.com',
  password: '123456',
  name:	'OFICINA E LO'
},
{
  email:	'6269699000176@corfio.com',
  password: '123456',
  name:	'ELETROMUNDI'
},
{
  email:	'857747000160@corfio.com',
  password: '123456',
  name:	'CONST FOL'
},
{
  email:	'91142828000210@corfio.com',
  password: '123456',
  name:	'MIAGRO'
},
{
  email:	'10241588000129@corfio.com',
  password: '123456',
  name:	'DARIONEI PRE'
},
{
  email:	'16823179000117@corfio.com',
  password: '123456',
  name:	'ARENOR DISTR'
},
{
  email:	'10490351000181@corfio.com',
  password: '123456',
  name:	'ELETRIZAL'
},
{
  email:	'1576708000158@corfio.com',
  password: '123456',
  name:	'BISSOLOTTI'
},
{
  email:	'5008417000114@corfio.com',
  password: '123456',
  name:	'HEINZEN MAT'
},
{
  email:	'5686507000164@corfio.com',
  password: '123456',
  name:	'CMO ELETRO'
},
{
  email:	'30572566000159@corfio.com',
  password: '123456',
  name:	'WGENERGIA IN'
},
{
  email:	'33076688000142@corfio.com',
  password: '123456',
  name:	'BICA D AGUA'
},
{
  email:	'5911411000152@corfio.com',
  password: '123456',
  name:	'SANDRI COM'
},
{
  email:	'6368045000108@corfio.com',
  password: '123456',
  name:	'FRIAVES'
},
{
  email:	'22077543000140@corfio.com',
  password: '123456',
  name:	'ILUMINE MAT'
},
{
  email:	'1806505000100@corfio.com',
  password: '123456',
  name:	'ELETRICA LUA'
},
{
  email:	'13466189000154@corfio.com',
  password: '123456',
  name:	'LUCEL'
},
{
  email:	'87714176000274@corfio.com',
  password: '123456',
  name:	'CASA DE MAR'
},
{
  email:	'19490367000169@corfio.com',
  password: '123456',
  name:	'ESLAIR IZARE'
},
{
  email:	'7194591000124@corfio.com',
  password: '123456',
  name:	'ELETROMAIO'
},
{
  email:	'1729191000190@corfio.com',
  password: '123456',
  name:	'N V  COM'
},
{
  email:	'31962377000155@corfio.com',
  password: '123456',
  name:	'BWI MATERIAI'
},
{
  email:	'1779422000170@corfio.com',
  password: '123456',
  name:	'TERMOLAGES'
},
{
  email:	'11378636000198@corfio.com',
  password: '123456',
  name:	'J P REGE'
},
{
  email:	'8601336000111@corfio.com',
  password: '123456',
  name:	'EDINALDO DE'
},
{
  email:	'17465718000156@corfio.com',
  password: '123456',
  name:	'MAXI TRUST'
},
{
  email:	'1040887000104@corfio.com',
  password: '123456',
  name:	'FERPAM'
},
{
  email:	'8007780000103@corfio.com',
  password: '123456',
  name:	'ROGERIO L'
},
{
  email:	'10280765000690@corfio.com',
  password: '123456',
  name:	'TUMELERO'
},
{
  email:	'27260519000165@corfio.com',
  password: '123456',
  name:	'GZ FER DISTR'
},
{
  email:	'23159389000118@corfio.com',
  password: '123456',
  name:	'SABRINA FUCH'
},
{
  email:	'13387152000130@corfio.com',
  password: '123456',
  name:	'WALLAC VIANA'
},
{
  email:	'2913450000109@corfio.com',
  password: '123456',
  name:	'E E I EQUIPA'
},
{
  email:	'29614116000100@corfio.com',
  password: '123456',
  name:	'PIAZZE EMPRE'
},
{
  email:	'92084706000105@corfio.com',
  password: '123456',
  name:	'ADAMATTI C'
},
{
  email:	'6261968000158@corfio.com',
  password: '123456',
  name:	'ANTUNES & FR'
},
{
  email:	'24226314000175@corfio.com',
  password: '123456',
  name:	'FERNANDA W A'
},
{
  email:	'20861702000177@corfio.com',
  password: '123456',
  name:	'ELETROINOVA'
},
{
  email:	'18732968000178@corfio.com',
  password: '123456',
  name:	'JULIANA SEBA'
},
{
  email:	'80463151000115@corfio.com',
  password: '123456',
  name:	'STEDILE - MA'
},
{
  email:	'10704562000170@corfio.com',
  password: '123456',
  name:	'L. FUJITA'
},
{
  email:	'13885262000122@corfio.com',
  password: '123456',
  name:	'ENERBRAS INS'
},
{
  email:	'13960332000160@corfio.com',
  password: '123456',
  name:	'ONEIDE MUMBA'
},
{
  email:	'86629185000113@corfio.com',
  password: '123456',
  name:	'ELEMIG'
},
{
  email:	'2502304000182@corfio.com',
  password: '123456',
  name:	'INST AGR DDT'
},
{
  email:	'10606793000140@corfio.com',
  password: '123456',
  name:	'SILVIO ADRIA'
},
{
  email:	'13730733000123@corfio.com',
  password: '123456',
  name:	'NORTE DISTRI'
},
{
  email:	'19563119000109@corfio.com',
  password: '123456',
  name:	'NATHALIA ROS'
},
{
  email:	'91977751000118@corfio.com',
  password: '123456',
  name:	'GEGLER'
},
{
  email:	'15254524000186@corfio.com',
  password: '123456',
  name:	'CARLOS DE AL'
},
{
  email:	'9074625000172@corfio.com',
  password: '123456',
  name:	'PROJESSUL'
},
{
  email:	'84909233000282@corfio.com',
  password: '123456',
  name:	'CEIGON COM'
},
{
  email:	'21803974000183@corfio.com',
  password: '123456',
  name:	'ALMEIDA  E A'
},
{
  email:	'10297492000182@corfio.com',
  password: '123456',
  name:	'GLOBO INDUS'
},
{
  email:	'4550248000187@corfio.com',
  password: '123456',
  name:	'GLASIL'
},
{
  email:	'80432693000473@corfio.com',
  password: '123456',
  name:	'BENDO E CIA'
},
{
  email:	'76678929000136@corfio.com',
  password: '123456',
  name:	'DGA ENGENH'
},
{
  email:	'11907254000104@corfio.com',
  password: '123456',
  name:	'SERGIO AMADO'
},
{
  email:	'5724005000261@corfio.com',
  password: '123456',
  name:	'CONTUDO MATE'
},
{
  email:	'12073035000130@corfio.com',
  password: '123456',
  name:	'SIRLENE SANT'
},
{
  email:	'26674783000182@corfio.com',
  password: '123456',
  name:	'FIC COMERC'
},
{
  email:	'7234433000150@corfio.com',
  password: '123456',
  name:	'RODRIGO'
},
{
  email:	'3200802000133@corfio.com',
  password: '123456',
  name:	'NIEHUES INDU'
},
{
  email:	'8878917000103@corfio.com',
  password: '123456',
  name:	'S.O.S. SEGUR'
},
{
  email:	'2233044000197@corfio.com',
  password: '123456',
  name:	'B P S SISTEM'
},
{
  email:	'3121241000268@corfio.com',
  password: '123456',
  name:	'PRONCOR UNID'
},
{
  email:	'10278531000102@corfio.com',
  password: '123456',
  name:	'NOVA BANDEIR'
},
{
  email:	'24369706000193@corfio.com',
  password: '123456',
  name:	'MONTTEC ENG'
},
{
  email:	'2859011000157@corfio.com',
  password: '123456',
  name:	'ELETR IRANI'
},
{
  email:	'26813873000107@corfio.com',
  password: '123456',
  name:	'FREDSON BRAN'
},
{
  email:	'20043328000100@corfio.com',
  password: '123456',
  name:	'ALVARENGA MA'
},
{
  email:	'97470314000190@corfio.com',
  password: '123456',
  name:	'CENTER LUCAS'
},
{
  email:	'21016072000105@corfio.com',
  password: '123456',
  name:	'SPE08 BRASAL'
},
{
  email:	'89774160000525@corfio.com',
  password: '123456',
  name:	'COOP LANGUIR'
},
{
  email:	'37432150000184@corfio.com',
  password: '123456',
  name:	'VERDAO MATE'
},
{
  email:	'3874953000177@corfio.com',
  password: '123456',
  name:	'SIERDOVSKI'
},
{
  email:	'49211493000106@corfio.com',
  password: '123456',
  name:	'BUSA'
},
{
  email:	'10435880000182@corfio.com',
  password: '123456',
  name:	'SABEL SANTAN'
},
{
  email:	'80533375000156@corfio.com',
  password: '123456',
  name:	'PATRANSCON C'
},
{
  email:	'26579029000163@corfio.com',
  password: '123456',
  name:	'COXIPO MAT'
},
{
  email:	'1357043000191@corfio.com',
  password: '123456',
  name:	'RICATI'
},
{
  email:	'22325578000150@corfio.com',
  password: '123456',
  name:	'EMS  COMERCI'
},
{
  email:	'23063770000189@corfio.com',
  password: '123456',
  name:	'FORMULA'
},
{
  email:	'24647331000186@corfio.com',
  password: '123456',
  name:	'RODIGHERO &'
},
{
  email:	'86765310000112@corfio.com',
  password: '123456',
  name:	'PEREZ'
},
{
  email:	'86969474000161@corfio.com',
  password: '123456',
  name:	'JOAO DE DEUS'
},
{
  email:	'3979365000106@corfio.com',
  password: '123456',
  name:	'ARTUS'
},
{
  email:	'76323518000128@corfio.com',
  password: '123456',
  name:	'IMOB SAO BEN'
},
{
  email:	'15005633000160@corfio.com',
  password: '123456',
  name:	'MASOTTI INDA'
},
{
  email:	'15370558000136@corfio.com',
  password: '123456',
  name:	'CAPELARI & K'
},
{
  email:	'1268270000140@corfio.com',
  password: '123456',
  name:	'A C COSTA MA'
},
{
  email:	'1798656000164@corfio.com',
  password: '123456',
  name:	'VR BACHES'
},
{
  email:	'85007326000101@corfio.com',
  password: '123456',
  name:	'CASA ELETRIC'
},
{
  email:	'1101142000108@corfio.com',
  password: '123456',
  name:	'ECOLUX'
},
{
  email:	'16820777000132@corfio.com',
  password: '123456',
  name:	'JCE COMERCIA'
},
{
  email:	'1539477000102@corfio.com',
  password: '123456',
  name:	'WANDER'
},
{
  email:	'8439132000126@corfio.com',
  password: '123456',
  name:	'LUMIELETRO'
},
{
  email:	'6983056000190@corfio.com',
  password: '123456',
  name:	'CLAUDIO DOS'
},
{
  email:	'5813501000100@corfio.com',
  password: '123456',
  name:	'MORTARI'
},
{
  email:	'5880472000108@corfio.com',
  password: '123456',
  name:	'MINEIRAO MAT'
},
{
  email:	'29289813000125@corfio.com',
  password: '123456',
  name:	'TEND TUDO VE'
},
{
  email:	'17188385000165@corfio.com',
  password: '123456',
  name:	'RED 4'
},
{
  email:	'4904338000129@corfio.com',
  password: '123456',
  name:	'MATENGE'
},
{
  email:	'37544095000114@corfio.com',
  password: '123456',
  name:	'REFRIGER'
},
{
  email:	'12435983000178@corfio.com',
  password: '123456',
  name:	'ICE PLAST'
},
{
  email:	'92179811000110@corfio.com',
  password: '123456',
  name:	'UTILIDADES E'
},
{
  email:	'940525000107@corfio.com',
  password: '123456',
  name:	'ENGEFER DIST'
},
{
  email:	'20885957000170@corfio.com',
  password: '123456',
  name:	'P BERNHARDT'
},
{
  email:	'11002659000101@corfio.com',
  password: '123456',
  name:	'CET COML'
},
{
  email:	'9176237000100@corfio.com',
  password: '123456',
  name:	'ROTOPLAST 1'
},
{
  email:	'7401286000166@corfio.com',
  password: '123456',
  name:	'REIS & FILHO'
},
{
  email:	'95770228000762@corfio.com',
  password: '123456',
  name:	'COM CARLESSI'
},
{
  email:	'4791310000122@corfio.com',
  password: '123456',
  name:	'FERNANDO M'
},
{
  email:	'21019199000170@corfio.com',
  password: '123456',
  name:	'CILLA CIDADE'
},
{
  email:	'1256464000126@corfio.com',
  password: '123456',
  name:	'GERVASIO SGA'
},
{
  email:	'31282122000141@corfio.com',
  password: '123456',
  name:	'DUAL MATERIA'
},
{
  email:	'11691997000190@corfio.com',
  password: '123456',
  name:	'M VITUZZO'
},
{
  email:	'11291149000193@corfio.com',
  password: '123456',
  name:	'D DA COSTA'
},
{
  email:	'14618033000104@corfio.com',
  password: '123456',
  name:	'DOMICIANO CO'
},
{
  email:	'50856996000100@corfio.com',
  password: '123456',
  name:	'VITORIO ROSS'
},
{
  email:	'24739665000180@corfio.com',
  password: '123456',
  name:	'DZ SOLUCOES'
},
{
  email:	'18787629000199@corfio.com',
  password: '123456',
  name:	'S T B FILHO'
},
{
  email:	'10659468000146@corfio.com',
  password: '123456',
  name:	'ZANCANARO C'
},
{
  email:	'85102184000153@corfio.com',
  password: '123456',
  name:	'PEHNK MATERI'
},
{
  email:	'11206966000104@corfio.com',
  password: '123456',
  name:	'ECONST'
},
{
  email:	'19270173000158@corfio.com',
  password: '123456',
  name:	'PLANO PINHEI'
},
{
  email:	'39399563000130@corfio.com',
  password: '123456',
  name:	'MACONVIC'
},
{
  email:	'20195021000117@corfio.com',
  password: '123456',
  name:	'MARCIO SBEGH'
},
{
  email:	'32135359000758@corfio.com',
  password: '123456',
  name:	'CARMINATTI I'
},
{
  email:	'90210626000115@corfio.com',
  password: '123456',
  name:	'VEGUI DISTRI'
},
{
  email:	'22352456000153@corfio.com',
  password: '123456',
  name:	'MALIZIA & GO'
},
{
  email:	'8679642000413@corfio.com',
  password: '123456',
  name:	'B & B COMERC'
},
{
  email:	'4319119000182@corfio.com',
  password: '123456',
  name:	'COML TEZZA'
},
{
  email:	'97320451007908@corfio.com',
  password: '123456',
  name:	'COOP TRIT SA'
},
{
  email:	'12064383000140@corfio.com',
  password: '123456',
  name:	'APARECIDA MA'
},
{
  email:	'18976685000171@corfio.com',
  password: '123456',
  name:	'CASA KRAUS'
},
{
  email:	'74058561000188@corfio.com',
  password: '123456',
  name:	'MESQUITA E S'
},
{
  email:	'4442353000100@corfio.com',
  password: '123456',
  name:	'EHF ELETRICA'
},
{
  email:	'10853766000172@corfio.com',
  password: '123456',
  name:	'ADRIANO CORR'
},
{
  email:	'2068079000118@corfio.com',
  password: '123456',
  name:	'PROLUCE'
},
{
  email:	'15230115000140@corfio.com',
  password: '123456',
  name:	'MAYCON ANTON'
},
{
  email:	'12966087000135@corfio.com',
  password: '123456',
  name:	'NEW DEAL'
},
{
  email:	'27097621000191@corfio.com',
  password: '123456',
  name:	'COND ILHA 03'
},
{
  email:	'4244352000143@corfio.com',
  password: '123456',
  name:	'REJANE M C S'
},
{
  email:	'79785432000105@corfio.com',
  password: '123456',
  name:	'UEME CONSTRU'
},
{
  email:	'17298088000334@corfio.com',
  password: '123456',
  name:	'PYPS SERRA'
},
{
  email:	'11783783000143@corfio.com',
  password: '123456',
  name:	'GD DISTRIB'
},
{
  email:	'22426329000151@corfio.com',
  password: '123456',
  name:	'MARTINHA NRS'
},
{
  email:	'15093795000105@corfio.com',
  password: '123456',
  name:	'WESLEY NUNES'
},
{
  email:	'22536713000107@corfio.com',
  password: '123456',
  name:	'C & F COMERC'
},
{
  email:	'12187244000104@corfio.com',
  password: '123456',
  name:	'E. D. COMERC'
},
{
  email:	'85240109000159@corfio.com',
  password: '123456',
  name:	'DE MARCH'
},
{
  email:	'24685496000142@corfio.com',
  password: '123456',
  name:	'C A COM'
},
{
  email:	'92534593000194@corfio.com',
  password: '123456',
  name:	'BIGFER INDUS'
},
{
  email:	'18864949000103@corfio.com',
  password: '123456',
  name:	'MULT LIDER'
},
{
  email:	'8311814000159@corfio.com',
  password: '123456',
  name:	'VIZZOTTO'
},
{
  email:	'29398209000137@corfio.com',
  password: '123456',
  name:	'VELETRICA'
},
{
  email:	'7571267000188@corfio.com',
  password: '123456',
  name:	'CASA DO ENCA'
},
{
  email:	'9652358000173@corfio.com',
  password: '123456',
  name:	'CASAMIX ELET'
},
{
  email:	'20323565115	na@corfio.com',
  password: '123456',
  name:	'JOSE CARL CH'
},
{
  email:	'10679018000204@corfio.com',
  password: '123456',
  name:	'JL ADM'
},
{
  email:	'12139322000103@corfio.com',
  password: '123456',
  name:	'AG RODRIGUES'
},
{
  email:	'7184927000178@corfio.com',
  password: '123456',
  name:	'S L'
},
{
  email:	'85191476000100@corfio.com',
  password: '123456',
  name:	'CONST RODRI'
},
{
  email:	'73846560000135@corfio.com',
  password: '123456',
  name:	'DANILO MOZ'
},
{
  email:	'11807156000103@corfio.com',
  password: '123456',
  name:	'GUARIGLIA'
},
{
  email:	'53073730000189@corfio.com',
  password: '123456',
  name:	'LONGAMETRAGE'
},
{
  email:	'10349258000151@corfio.com',
  password: '123456',
  name:	'NETDONIL'
},
{
  email:	'22855387000109@corfio.com',
  password: '123456',
  name:	'ELETROGROUP'
},
{
  email:	'1687342000194@corfio.com',
  password: '123456',
  name:	'BORGES R'
},
{
  email:	'3989732000144@corfio.com',
  password: '123456',
  name:	'O MERCADOR'
},
{
  email:	'25184797000155@corfio.com',
  password: '123456',
  name:	'RENOVOLTECH'
},
{
  email:	'89774160000606@corfio.com',
  password: '123456',
  name:	'COOP LANGUI'
},
{
  email:	'30727515000159@corfio.com',
  password: '123456',
  name:	'MARIA ZENAI'
},
{
  email:	'2031368000142@corfio.com',
  password: '123456',
  name:	'ELETRO2'
},
{
  email:	'25618133000157@corfio.com',
  password: '123456',
  name:	'GERAES ARQUI'
},
{
  email:	'75923243000109@corfio.com',
  password: '123456',
  name:	'DINAMO ELER'
},
{
  email:	'11494469000140@corfio.com',
  password: '123456',
  name:	'ADILIO DOS S'
},
{
  email:	'5003395000108@corfio.com',
  password: '123456',
  name:	'COML ELE TL'
},
{
  email:	'18885064000182@corfio.com',
  password: '123456',
  name:	'MOTTIN MATER'
},
{
  email:	'82704016000140@corfio.com',
  password: '123456',
  name:	'SO ELETRICA'
},
{
  email:	'10695952000120@corfio.com',
  password: '123456',
  name:	'SUL BRASIL E'
}
    ];

    createUsers.forEach(element => {
      console.log(element) ;
      const email = element.email;
      const password = '123456';
      const emailCNPJ = element.email;
      const cnpj = emailCNPJ.replace('@corfio.com', '');
      const nome = element.name;
      this.afAuth.auth.createUserWithEmailAndPassword( email, password ).catch(console.error);
      // this.db.collection('clientesCNPJ').doc(email).set({nome, cnpj});

    });

  }

}


