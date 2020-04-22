import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UsuariosComponent } from './usuarios/usuarios.component';
import { LinhasComponent } from './linhas/linhas.component';
import { LoginComponent } from './login/login.component';
import { MandatoComponent } from './mandato/mandato.component';
import { ConfirmDialogComponent } from './confirm-dialog/confirm-dialog.component';
import { PessoaFisicaComponent } from './pessoa-fisica/pessoa-fisica.component';
import { PessoaJuridicaComponent } from './pessoa-juridica/pessoa-juridica.component';

const routes: Routes = [
  { path: 'usuarios', component: UsuariosComponent },
  { path: 'linhas', component: LinhasComponent },
  { path: 'login', component: LoginComponent },
  { path: 'mandato', component: MandatoComponent },
  { path: 'confirm-dialog', component: ConfirmDialogComponent },
  { path: 'pessoa-fisica', component: PessoaFisicaComponent },
  { path: 'pessoa-juridica', component: PessoaJuridicaComponent },
  { path: '', redirectTo: '/usuarios', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
