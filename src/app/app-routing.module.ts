import { PesquisaReactiveFormComponent } from './pesquisa-reactive-form/pesquisa-reactive-form.component';
import { AuthGuard } from './login/auth.guard';
import { AppComponent } from './app.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { PesquisaComponent } from './pesquisa/pesquisa.component';

const routes: Routes = [
  {path: '', component: LoginComponent},
  // {path: 'pesquisa', component: PesquisaComponent, canActivate: [AuthGuard]},
  {path: 'pesquisa', component: PesquisaComponent, canActivate: [AuthGuard]},
  {path: 'pesquisaReactive', component: PesquisaReactiveFormComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [AuthGuard]
})
export class AppRoutingModule { }
