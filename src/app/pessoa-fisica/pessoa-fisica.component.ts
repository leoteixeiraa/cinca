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
  limit = 1000;
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
  title = 'Inserir Pessoa Física';
  textoBuscar = '';
  caminho = 'apiPessoaFisica.php';
  ApiServiceService;

  cpfMask = [/\d/, /\d/, /\d/, '.', /\d/, /\d/, /\d/, '.', /\d/, /\d/, /\d/, '-', /\d/, /\d/];
  cepMask = [/\d/, /\d/, '.', /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/];
  telFixoMask = ['(', /\d/, /\d/, ')', ' ', /\d/, /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/, /\d/];
  dtNascimentoMask = [/\d/, /\d/, '/', /\d/, /\d/, '/', /\d/, /\d/, /\d/, /\d/];
  rgMask = [/\d/, /\d/, /\d/, /\d/, /\d/, /\d/, /\d/, /\d/, '-', /\d/];

  totalRecords: String;
  paginaAtual: number = 1;


  constructor(private provider: ApiServiceService, private router: Router) { }


  ngOnInit() {
    this.lista = [];
    this.start = 0;
    this.carregar(this.textoBuscar);
    this.load();
  }

  load() {
    //Session storage salva os dados como string
    // tslint:disable-next-line: no-unused-expression
    (sessionStorage.refresh == 'true' || !sessionStorage.refresh) && location.reload();
    sessionStorage.refresh = false;
  }

  onRefresh() {
    this.router.routeReuseStrategy.shouldReuseRoute = function () { return false; };

    let currentUrl = this.router.url + '?';

    this.router.navigateByUrl(currentUrl)
      .then(() => {
        this.router.navigated = false;
        this.router.navigate([this.router.url]);
      });
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
      this.provider.Api(dados, this.caminho).subscribe(data => {
        for (const dado of data['result']) {
          this.lista.push(dado);
        }
        resolve(true);
      });

    });
  }

  cadastrar() {
    // tslint:disable-next-line: max-line-length
    if (this.nome !== '' && this.cpf !== '' && this.rg !== '' && this.sexo !== '' && this.dataNascimento !== '' && this.cep !== '' && this.endereco !== '' && this.cidade !== '' && this.bairro !== '' && this.uf !== '' && this.celular !== '' && this.telFixo !== '' && this.email !== '') {
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
          celular: this.celular,
          telFixo: this.telFixo,
          email: this.email,
          observacoes: this.observacoes,
        };
        this.provider.Api(dados, this.caminho)
          .subscribe(data => {

            if (data['success']) {
              alert('Salvo com sucesso!!');

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
    this.celular = celular;
    this.telFixo = telFixo;
    this.email = email;
    this.observacoes = observacoes;
    this.idPFisica = idPFisica;
  }

  editar() {
    return new Promise(resolve => {
      const dados = {
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
      this.provider.Api(dados, this.caminho)
        .subscribe(data => {

          if (data['success']) {
            alert('Editado com sucesso!!');

          } else {
            alert('Erro ao Editar!!');
          }

        });
    });

  }

  excluir(idu: string) {

    var agree = confirm("Tem certeza que deseja excluir esses dados?");

    if (agree) {
      return new Promise(resolve => {
        const dados = {

          requisicao: 'excluir',
          idPFisica: idu
        };
        this.provider.Api(dados, this.caminho)
          .subscribe(data => {

            if (data['success']) {
              alert('Excluido com sucesso!');


            } else {
              alert('Erro ao Excluir!!');
            }

          });
      });
    } else {
      return false;
    }
  }
}
