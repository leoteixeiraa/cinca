import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiServiceService } from '../services/api-service.service';

@Component({
  selector: 'app-linhas',
  templateUrl: './linhas.component.html',
  styleUrls: ['./linhas.component.css']
})
export class LinhasComponent implements OnInit {

  lista: any = [];
  limit = 10;
  start = 0;
  operadora = '';
  num_conta = '';
  cod_acesso = '';
  localizacao = '';
  id = '';
  title = 'Inserir Linha';
  textoBuscar = '';

  constructor(
    private provider: ApiServiceService,
    private router: Router
  ) { }

  ngOnInit() {
    this.lista = [];
    this.start = 0;
    this.carregar(this.textoBuscar);
  }


  carregar(texto: string) {
    this.lista = [];
    this.start = 0;
    return new Promise(resolve => {
      const dados2 = {
        requisicao: 'listar',
        limit: this.limit,
        start: this.start,
        textoBuscar: texto
      };
      this.provider.Api(dados2, 'apiLinhas.php').subscribe(data => {
        for (const dado2 of data['result']) {
          this.lista.push(dado2);
        }
        resolve(true);
      });
    });
  }

  cadastrar() {
    if (this.operadora !== '' && this.cod_acesso !== '' && this.num_conta !== '' && this.localizacao !== '') {
      return new Promise(resolve => {
        const dados2 = {
          requisicao: 'add',
          operadora: this.operadora,
          cod_acesso: this.cod_acesso,
          num_conta: this.num_conta,
          localizacao: this.localizacao
        };
        this.provider.Api(dados2, 'apiLinhas.php')
          .subscribe(data => {

            if (data['success']) {
              alert('Salvo com sucesso!!');
              window.location.href = "linhas";
            } else {
              alert('Erro ao Salvar!!');
            }

          });
      });
    } else {
      alert('Prencha os Campos!');
    }
  }

  dadosEditar(operadora: string, cod_acesso: string, num_conta: string, localizacao: string, id: string) {
    this.title = 'Editar Linha';
    this.operadora = operadora;
    this.cod_acesso = cod_acesso;
    this.num_conta = num_conta;
    this.localizacao = localizacao;
    this.id = id;


  }

  editar() {
    return new Promise(resolve => {
      const dados2 = {
        requisicao: 'editar',
        operadora: this.operadora,
        cod_acesso: this.cod_acesso,
        num_conta: this.num_conta,
        localizacao: this.localizacao,
        id: this.id
      };
      this.provider.Api(dados2, 'apiLinhas.php')
        .subscribe(data => {

          if (data['success']) {
            alert('Editado com sucesso!!');

            //  location='linhas';
            // this.router.navigate(['/linhas']);
            window.location.href = "linhas";
          } else {
            alert('Erro ao Editar!!');
          }

        });
    });

  }

  excluir(idu: string) {
    return new Promise(resolve => {
      const dados2 = {
        requisicao: 'excluir',
        id: idu
      };
      this.provider.Api(dados2, 'apiLinhas.php')
        .subscribe(data => {

          if (data['success']) {
            alert('Excluido com sucesso!');

            window.location.href = "linhas";
          } else {
            alert('Erro ao Excluir!!');
          }

        });
    });
  }

}
