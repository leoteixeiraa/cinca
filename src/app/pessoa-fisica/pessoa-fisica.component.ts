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
  celular = '';
  telFixo = '';
  email = '';
  observacoes = '';
  status = '';
  title = 'Inserir Pessoa Física';
  textoBuscar = '';

  cpfMask = [/\d/, /\d/, /\d/, '.', /\d/, /\d/, /\d/, '.', /\d/, /\d/, /\d/, '-', /\d/, /\d/];
  cepMask = [/\d/, /\d/, '.', /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/];
  telFixoMask = ['(', /\d/, /\d/, ')', ' ', /\d/, /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/, /\d/];
  dtNascimentoMask = [/\d/, /\d/, '/', /\d/, /\d/, '/', /\d/, /\d/, /\d/, /\d/];
  rgMask = [/\d/, /\d/, /\d/, /\d/, /\d/, /\d/, /\d/, /\d/, '-', /\d/];

  constructor(
    private provider: ApiServiceService,
    private router: Router
  ) { }


  ngOnInit() {
    this.lista = [];
    this.start = 0;
    this.textoBuscar = '54';
    this.carregar(this.textoBuscar);
  }

  load() {
    //Session storage salva os dados como string
    // tslint:disable-next-line: no-unused-expression
    (sessionStorage.refresh == 'true' || !sessionStorage.refresh) && location.reload();
    sessionStorage.refresh = false;
  }

  carregar(texto: string) {
    this.lista = [];
    this.start = 0;

    if (!texto) {
      texto = 'get-all';
    }
    return new Promise(resolve => {
      const dados2 = {
        requisicao: 'listar',
        limit: this.limit,
        start: this.start,
        textoBuscar: texto
      };
      this.provider.Api(dados2, 'apiPessoaFisica.php').subscribe(data => {
        for (const dado2 of data['result']) {
          this.lista.push(dado2);
        }
        resolve(true);
      });
    });
  }

  cadastrar() {
    // tslint:disable-next-line: max-line-length
    if (this.nome !== '' && this.cpf !== '' && this.rg !== '' && this.sexo !== '' && this.dataNascimento !== '' && this.cep !== '' && this.endereco !== '' && this.complemento !== '' && this.cidade !== '' && this.bairro !== '' && this.uf !== '' && this.celular !== '' && this.telFixo !== '' && this.email !== '' && this.observacoes !== '') {
      return new Promise(resolve => {
        const dados2 = {
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
          celular: this.celular,
          telFixo: this.telFixo,
          email: this.email,
          observacoes: this.observacoes,
          status: this.status
        };
        this.provider.Api(dados2, 'apiPessoaFisica.php')
          .subscribe(data => {

            if (data['success']) {
              alert('Salvo com sucesso!!');
              this.router.navigate(['/pessoa-fisica']);
              this.load();
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
  dadosEditar(nome: string, cpf: string, rg: string, sexo: string, dataNascimento: string, estadoCivil: string, cep: string, endereco: string, complemento: string, cidade: string, bairro: string, uf: string, celular: string, telFixo: string, email: string, observacoes: string, idPFisica: string) {
    this.title = 'Editar Pessoa Juridica';
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
    this.celular = celular;
    this.telFixo = telFixo;
    this.email = email;
    this.observacoes = observacoes;
    this.status = status;
    this.idPFisica = idPFisica;
  }

  editar() {
    return new Promise(resolve => {
      const dados2 = {
        requisicao: 'editar',
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
        celular: this.celular,
        telFixo: this.telFixo,
        email: this.email,
        observacoes: this.observacoes,
        idPFisica: this.idPFisica
      };
      this.provider.Api(dados2, 'apiPessoaFisica.php')
        .subscribe(data => {

          if (data['success']) {
            alert('Editado com sucesso!!');

            //  location='linhas';
            // this.router.navigate(['/linhas']);
            this.router.navigate(['/pessoa-fisica']);
            this.load();
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
        idPFisica: idu
      };
      this.provider.Api(dados2, 'apiPessoaFisica.php')
        .subscribe(data => {

          if (data['success']) {
            alert('Excluido com sucesso!');

            this.router.navigate(['/pessoa-fisica']);
            this.load();
          } else {
            alert('Erro ao Excluir!!');
          }

        });
    });
  }

}

