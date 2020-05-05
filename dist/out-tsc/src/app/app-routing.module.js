import { __decorate } from "tslib";
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { UsuariosComponent } from './usuarios/usuarios.component';
import { LoginComponent } from './login/login.component';
import { ConfirmDialogComponent } from './confirm-dialog/confirm-dialog.component';
import { PessoaFisicaComponent } from './pessoa-fisica/pessoa-fisica.component';
import { PessoaJuridicaComponent } from './pessoa-juridica/pessoa-juridica.component';
import { MateriaisComponent } from './materiais/materiais.component';
const routes = [
    { path: 'usuarios', component: UsuariosComponent },
    { path: 'login', component: LoginComponent },
    { path: 'confirm-dialog', component: ConfirmDialogComponent },
    { path: 'pessoa-fisica', component: PessoaFisicaComponent },
    { path: 'pessoa-juridica', component: PessoaJuridicaComponent },
    { path: 'materiais', component: MateriaisComponent },
    { path: '', redirectTo: '/usuarios', pathMatch: 'full' },
    { path: 'pessoa-fisica', redirectTo: '/pessoa-fisica', pathMatch: 'full' },
    { path: 'pessoa-juridica', redirectTo: '/pessoa-juridica', pathMatch: 'full' }
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