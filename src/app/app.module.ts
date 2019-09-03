import { AuthService } from './login/auth.service';
import { MaterialModule } from './material.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoginComponent } from './login/login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule, FirestoreSettingsToken } from '@angular/fire/firestore';
import { AngularFireStorageModule } from '@angular/fire/storage';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { environment } from '../environments/environment';
import { FlexLayoutModule } from '@angular/flex-layout';
import { HeaderComponent } from './navigation/header/header.component';
import { SidenavListComponent } from './navigation/sidenav-list/sidenav-list.component';
import { PesquisaReactiveFormComponent } from './pesquisa-reactive-form/pesquisa-reactive-form.component';
import { ServiceWorkerModule } from '@angular/service-worker';

import { Ng2GoogleChartsModule } from 'ng2-google-charts';

import { RelatoriosComponent } from './gerencial/relatorios/relatorios.component';
import { ChartsModule } from 'ng2-charts';
import { RelAtendRepComponent } from './gerencial/relatorios/rel-atend-rep/rel-atend-rep.component';
import { RelAspecTecComponent } from './gerencial/relatorios/rel-aspec-tec/rel-aspec-tec.component';
import { RelImgProdComponent } from './gerencial/relatorios/rel-img-prod/rel-img-prod.component';
import { AtendComercComponent } from './gerencial/relatorios/atend-comerc/atend-comerc.component';
import { RelTranspComponent } from './gerencial/relatorios/rel-transp/rel-transp.component';
import { RelFinaisComponent } from './gerencial/relatorios/rel-finais/rel-finais.component';
import { VariosComponent } from './gerencial/relatorios/varios/varios.component';
import { UserRespostasComponent } from './gerencial/relatorios/user-respostas/user-respostas.component';
import { RelatoriosGChartComponent } from './gerencial/relatorios-gchart/relatorios-gchart.component';
import { RelatoriosAtendRepComponent } from './gerencial/relatorios-gchart/relatorios-atend-rep/relatorios-atend-rep.component';
import { RelatoriosImgProdComponent } from './gerencial/relatorios-gchart/relatorios-img-prod/relatorios-img-prod.component';
import { RelatoriosAtendComComponent } from './gerencial/relatorios-gchart/relatorios-atend-com/relatorios-atend-com.component';
import { RelatoriosEmbTranspComponent } from './gerencial/relatorios-gchart/relatorios-emb-transp/relatorios-emb-transp.component';
import { RelatoriosConsidFinaisComponent } from './gerencial/relatorios-gchart/relatorios-consid-finais/relatorios-consid-finais.component';




@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HeaderComponent,
    SidenavListComponent,
    PesquisaReactiveFormComponent,
    RelatoriosComponent,
    RelAtendRepComponent,
    RelAspecTecComponent,
    RelImgProdComponent,
    AtendComercComponent,
    RelTranspComponent,
    RelFinaisComponent,
    VariosComponent,
    UserRespostasComponent,
    RelatoriosGChartComponent,
    RelatoriosAtendRepComponent,
    RelatoriosImgProdComponent,
    RelatoriosAtendComComponent,
    RelatoriosEmbTranspComponent,
    RelatoriosConsidFinaisComponent
  ],
  imports: [
    MaterialModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule.enablePersistence(), // para pwa gravar offline e sincronizar quando a rede voltar
    AngularFireStorageModule,
    AngularFireAuthModule,
    FlexLayoutModule,
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production }),
    ChartsModule,
    Ng2GoogleChartsModule
  ],
  providers: [ AuthService, { provide: FirestoreSettingsToken, useValue: {} } ],
  bootstrap: [AppComponent]
})
export class AppModule { }
