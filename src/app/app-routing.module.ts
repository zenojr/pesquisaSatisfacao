import { PesquisaReactiveFormComponent } from './pesquisa-reactive-form/pesquisa-reactive-form.component';
import { AuthGuard } from './login/auth.guard';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RelatoriosComponent } from './gerencial/relatorios/relatorios.component';
import { VariosComponent } from './gerencial/relatorios/varios/varios.component';

const routes: Routes = [
  {path: '', component: LoginComponent},
  {path: 'pesquisa', component: PesquisaReactiveFormComponent, canActivate: [AuthGuard]},
  {path: 'relatorios', component: RelatoriosComponent},
  {path: 'coleta', component: VariosComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [AuthGuard]
})
export class AppRoutingModule { }
