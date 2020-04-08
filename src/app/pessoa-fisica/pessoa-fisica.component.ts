import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiServiceService } from '../services/api-service.service';

@Component({
  selector: 'app-pessoa-fisica',
  templateUrl: './pessoa-fisica.component.html',
  styleUrls: ['./pessoa-fisica.component.css']
})
export class PessoaFisicaComponent implements OnInit {

  lista: any = [];
  limit = 10;
  start = 0;
  idPFisica = '';
  nome = '';
  cpf = '';
  rg = '';
  sexo = '';
  dataNascimento = '';
  estadoCivil = '';
  cep = '';
  endereco = '';
  complemento = '';
  cidade = '';
  bairro = '';
  uf = '';
  telefone = '';
  email = '';

  title = 'Inserir Pessoa Física';
  textoBuscar = '';
  pageOfItems: Array<any>;

  constructor(
    private provider: ApiServiceService,
    private router: Router,
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
      const dados = {
        requisicao: 'listar',
        limit: this.limit,
        start: this.start,
        textoBuscar: texto
      };
      this.provider.Api(dados, 'apiPessoaFisica.php').subscribe(data => {
        for (const dado2 of data['result']) {
          this.lista.push(dado2);
        }
        resolve(true);
      });
    });
  }

  cadastrar() {
    // tslint:disable-next-line: max-line-length
    if (this.nome !== '' && this.cpf !== '' && this.rg !== '' && this.sexo !== '' && this.dataNascimento !== '' && this.estadoCivil !== '' && this.cep !== '' && this.endereco !== '' && this.complemento !== '' && this.cidade !== '' && this.bairro !== '' && this.uf !== '' && this.telefone !== '' && this.email !== '') {

      return new Promise(resolve => {
        const dados = {
          requisicao: 'add',
          nome: this.nome,
          cpf: this.cpf,
          rg: this.rg,
          sexo: this.sexo,
          dataNascimento: this.dataNascimento,
          estadoCivil: this.estadoCivil,
          cep: this.cep,
          endereco: this.endereco,
          complemento: this.complemento,
          cidade: this.cidade,
          bairro: this.bairro,
          uf: this.uf,
          telefone: this.telefone,
          email: this.email
        };
        this.provider.Api(dados, 'apiPessoaFisica.php')
          .subscribe(data => {

            if (data['success']) {
              alert('Salvo com sucesso!!');
              window.location.href = "pessoa-fisica";
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
  dadosEditar(nome: string, cpf: string, rg: string, sexo: string, dataNascimento: string, estadoCivil: string, cep: string, endereco: string, complemento: string, cidade: string, bairro: string, uf: string, telefone: string, email: string, idPFisica: string) {
    this.title = 'Editar Pessoa Física';
    this.nome = nome;
    this.cpf = cpf;
    this.rg = rg;
    this.sexo = sexo;
    this.dataNascimento = dataNascimento;
    this.estadoCivil = estadoCivil;
    this.cep = cep;
    this.endereco = endereco;
    this.complemento = complemento;
    this.cidade = cidade;
    this.bairro = bairro;
    this.uf = uf;
    this.telefone = telefone;
    this.email = email;
    this.idPFisica = idPFisica;
  }
  editar() {
    // tslint:disable-next-line: max-line-length
    if (this.nome !== '' && this.cpf !== '' && this.rg !== '' && this.sexo !== '' && this.dataNascimento !== '' && this.estadoCivil !== '' && this.cep !== '' && this.endereco !== '' && this.complemento !== '' && this.cidade !== '' && this.bairro !== '' && this.uf !== '' && this.telefone !== '' && this.email !== '') {
      return new Promise(resolve => {
        const dados = {
          requisicao: 'editar',
          idPFisica: this.idPFisica,
          nome: this.nome,
          cpf: this.cpf,
          rg: this.rg,
          sexo: this.sexo,
          dataNascimento: this.dataNascimento,
          estadoCivil: this.estadoCivil,
          cep: this.cep,
          endereco: this.endereco,
          complemento: this.complemento,
          cidade: this.cidade,
          bairro: this.bairro,
          uf: this.uf,
          telefone: this.telefone,
          email: this.email

        };
        this.provider.Api(dados, 'apiPessoaFisica.php')
          .subscribe(data => {

            if (data['success']) {
              alert('Editado com sucesso!!');
              this.router.navigate(['/pessoa-fisica']);
            } else {
              alert('Erro ao Editar!!');
            }

          });
      });

    } else {
      alert('Prencha os Campos!');
    }
  }

  excluir(idu: string) {
    return new Promise(resolve => {
      const dados = {
        requisicao: 'excluir',
        id: idu
      };

      this.provider.Api(dados, 'apiPessoaFisica.php')
        .subscribe(data => {

          if (data['success']) {
            alert('Excluido com sucesso!');

            window.location.href = "pessoa-fisica";
          } else {
            alert('Erro ao Excluir!!');
          }

        });
    });
  }

}
