import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiServiceService } from '../services/api-service.service';

@Component({
  selector: 'app-pessoa-juridica',
  templateUrl: './pessoa-juridica.component.html',
  styleUrls: ['./pessoa-juridica.component.css']
})
export class PessoaJuridicaComponent implements OnInit {

  lista: any = [];
  limit = 10;
  start = 0;

  idPJuridica = '';
  razaoSocial = '';
  title = 'Inserir Pessoa Jurídica';
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
      this.provider.Api(dados2, 'apiPessoaJuridica.php').subscribe(data => {
        for (const dado2 of data['result']) {
          this.lista.push(dado2);
        }
        resolve(true);
      });
    });
  }

  cadastrar() {
    if (this.razaoSocial !== '') {
      return new Promise(resolve => {
        const dados2 = {
          requisicao: 'add',
          razaoSocial: this.razaoSocial
        };
        this.provider.Api(dados2, 'apiPessoaJuridica.php')
          .subscribe(data => {

            if (data['success']) {
              alert('Salvo com sucesso!!');
              window.location.href = "pessoa-juridica";
            } else {
              alert('Erro ao Salvar!!');
            }

          });
      });
    } else {
      alert('Prencha os Campos!');
    }
  }

  dadosEditar(razaoSocial: string, idPJuridica: string) {
    this.title = 'Editar Pessoa Juridica';
    this.razaoSocial = razaoSocial;
    this.idPJuridica = idPJuridica;
  }

  editar() {
    return new Promise(resolve => {
      const dados2 = {
        requisicao: 'editar',
        razaoSocial: this.razaoSocial,
        idPJuridica: this.idPJuridica
      };
      this.provider.Api(dados2, 'apiPessoaJuridica.php')
        .subscribe(data => {

          if (data['success']) {
            alert('Editado com sucesso!!');

            //  location='linhas';
            // this.router.navigate(['/linhas']);
            window.location.href = "pessoa-juridica";
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
        idPJuridica: idu
      };
      this.provider.Api(dados2, 'apiPessoaJuridica.php')
        .subscribe(data => {

          if (data['success']) {
            alert('Excluido com sucesso!');

            window.location.href = "pessoa-juridica";
          } else {
            alert('Erro ao Excluir!!');
          }

        });
    });
  }

}
