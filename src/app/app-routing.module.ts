import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UsuariosComponent } from './usuarios/usuarios.component';
import { LoginComponent } from './login/login.component';
import { ConfirmDialogComponent } from './confirm-dialog/confirm-dialog.component';
import { PessoaFisicaComponent } from './pessoa-fisica/pessoa-fisica.component';
import { PessoaJuridicaComponent } from './pessoa-juridica/pessoa-juridica.component';
import { MateriaisComponent } from './materiais/materiais.component';
import { ServicosComponent } from './servicos/servicos.component';

const routes: Routes = [
  { path: 'usuarios', component: UsuariosComponent },
  { path: 'login', component: LoginComponent },
  { path: 'confirm-dialog', component: ConfirmDialogComponent },
  { path: 'pessoa-fisica', component: PessoaFisicaComponent },
  { path: 'pessoa-juridica', component: PessoaJuridicaComponent },
  { path: 'materiais', component: MateriaisComponent },
  { path: 'servicos', component: ServicosComponent },
  { path: '', redirectTo: '/usuarios', pathMatch: 'full' },
  { path: 'pessoa-fisica', redirectTo: '/pessoa-fisica', pathMatch: 'full' },
  { path: 'pessoa-juridica', redirectTo: '/pessoa-juridica', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
