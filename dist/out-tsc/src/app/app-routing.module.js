import { __decorate } from "tslib";
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { UsuariosComponent } from './usuarios/usuarios.component';
import { LoginComponent } from './login/login.component';
import { ConfirmDialogComponent } from './confirm-dialog/confirm-dialog.component';
import { PessoaFisicaComponent } from './pessoa-fisica/pessoa-fisica.component';
import { PessoaJuridicaComponent } from './pessoa-juridica/pessoa-juridica.component';
import { MateriaisComponent } from './materiais/materiais.component';
import { ServicosComponent } from './servicos/servicos.component';
const routes = [
    { path: 'usuarios', component: UsuariosComponent },
    { path: 'login', component: LoginComponent },
    { path: 'confirm-dialog', component: ConfirmDialogComponent },
    { path: 'pessoa-fisica', component: PessoaFisicaComponent },
    { path: 'pessoa-juridica', component: PessoaJuridicaComponent },
    { path: 'materiais', component: MateriaisComponent },
    { path: 'servicos', component: ServicosComponent },
    { path: '', redirectTo: '/usuarios', pathMatch: 'full' },
];
let AppRoutingModule = class AppRoutingModule {
};
AppRoutingModule = __decorate([
    NgModule({
        imports: [RouterModule.forRoot(routes)],
        exports: [RouterModule]
    })
], AppRoutingModule);
export { AppRoutingModule };
//# sourceMappingURL=app-routing.module.js.map