import { __decorate } from "tslib";
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { ApiServiceService } from './services/api-service.service';
import { HttpClient } from '@angular/common/http';
import { UsuariosComponent } from './usuarios/usuarios.component';
import { LoginComponent } from './login/login.component';
import { NgxPaginationModule } from 'ngx-pagination';
// import { JwPaginationComponent } from 'jw-angular-pagination';
import { ConfirmDialogComponent } from './confirm-dialog/confirm-dialog.component';
import { CustomMaterialModule } from './custom-material/custom-material.module';
import { PessoaFisicaComponent } from './pessoa-fisica/pessoa-fisica.component';
import { PessoaJuridicaComponent } from './pessoa-juridica/pessoa-juridica.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TextMaskModule } from 'angular2-text-mask';
import { MateriaisComponent } from './materiais/materiais.component';
import { ServicosComponent } from './servicos/servicos.component';
import { PontosComponent } from './pontos/pontos.component';
import { UploadComponent } from './upload/upload.component';
import { MatManutencaoComponent } from './mat-manutencao/mat-manutencao.component';
let AppModule = class AppModule {
};
AppModule = __decorate([
    NgModule({
        declarations: [
            AppComponent,
            UsuariosComponent,
            LoginComponent,
            // JwPaginationComponent,
            ConfirmDialogComponent,
            PessoaFisicaComponent,
            PessoaJuridicaComponent,
            MateriaisComponent,
            ServicosComponent,
            PontosComponent,
            UploadComponent,
            MatManutencaoComponent
        ],
        imports: [
            BrowserModule,
            AppRoutingModule,
            HttpClientModule,
            NgxPaginationModule,
            CustomMaterialModule,
            FormsModule,
            TextMaskModule,
            ReactiveFormsModule
        ],
        providers: [ApiServiceService,
            HttpClient
        ],
        bootstrap: [AppComponent]
    })
], AppModule);
export { AppModule };
//# sourceMappingURL=app.module.js.map