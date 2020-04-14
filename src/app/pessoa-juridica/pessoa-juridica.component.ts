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
  cnpj = '';
  status = '';
  endereco = '';
  complemento = '';
  cidade = '';
  bairro = '';
  numero = '';
  pontoReferencia = '';
  cep = '';
  uf = '';
  email = '';
  telefone = '';
  site = '';
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
    // tslint:disable-next-line: max-line-length
    if (this.razaoSocial !== '' && this.cnpj !== '' && this.endereco !== '' && this.cidade !== '' && this.bairro !== '' && this.numero !== '' && this.cep !== '' && this.uf !== '' && this.email !== '' && this.telefone !== '' && this.site !== '') {
      return new Promise(resolve => {
        const dados2 = {
          requisicao: 'add',
          razaoSocial: this.razaoSocial,
          cnpj: this.cnpj,
          status: this.status,
          endereco: this.endereco,
          complemento: this.complemento,
          cidade: this.cidade,
          bairro: this.bairro,
          numero: this.numero,
          pontoReferencia: this.pontoReferencia,
          cep: this.cep,
          uf: this.uf,
          email: this.email,
          telefone: this.telefone,
          site: this.site,
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

  // tslint:disable-next-line: max-line-length
  dadosEditar(razaoSocial: string, cnpj: string, status: string, endereco: string, complemento: string, cidade: string, bairro: string, numero: string, pontoReferencia: string, cep: string, uf: string, email: string, telefone: string, site: string, idPJuridica: string) {
    this.title = 'Editar Pessoa Juridica';
    this.razaoSocial = razaoSocial;
    this.cnpj = cnpj;
    this.status = status;
    this.endereco = endereco;
    this.complemento = complemento;
    this.cidade = cidade;
    this.bairro = bairro;
    this.numero = numero;
    this.pontoReferencia = pontoReferencia;
    this.cep = cep;
    this.uf = uf;
    this.email = email;
    this.telefone = telefone;
    this.site = site;
    this.idPJuridica = idPJuridica;
  }

  editar() {
    return new Promise(resolve => {
      const dados2 = {
        requisicao: 'editar',
        razaoSocial: this.razaoSocial,
        cnpj: this.cnpj,
        status: this.status,
        endereco: this.endereco,
        complemento: this.complemento,
        cidade: this.cidade,
        bairro: this.bairro,
        numero: this.numero,
        pontoReferencia: this.pontoReferencia,
        cep: this.cep,
        uf: this.uf,
        email: this.email,
        telefone: this.telefone,
        site: this.site,
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
