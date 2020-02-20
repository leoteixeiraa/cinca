import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { ApiServiceService } from './services/api-service.service';
import { HttpClient } from '@angular/common/http';
import { UsuariosComponent } from './usuarios/usuarios.component';
import { LinhasComponent } from './linhas/linhas.component';
import { LoginComponent } from './login/login.component';
import { MandatoComponent } from './mandato/mandato.component';
import { NgxPaginationModule } from 'ngx-pagination';
import { ConfirmDialogComponent } from './confirm-dialog/confirm-dialog.component';
import { CustomMaterialModule } from './custom-material/custom-material.module';


@NgModule({
  declarations: [
    AppComponent,
    UsuariosComponent,
    LinhasComponent,
    LoginComponent,
    MandatoComponent,
    ConfirmDialogComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgxPaginationModule, //Paginação
    CustomMaterialModule
  ],
  providers: [ApiServiceService,
    HttpClient
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
