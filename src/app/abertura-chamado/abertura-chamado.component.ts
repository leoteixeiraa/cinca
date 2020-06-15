import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiServiceService } from '../services/api-service.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-abertura-chamado',
  templateUrl: './abertura-chamado.component.html',
  styleUrls: ['./abertura-chamado.component.css']
})
export class AberturaChamadoComponent implements OnInit {

  lista: any = [];
  limit = 1000;
  start = 0;

  idOcorrencia = '';
  solicitante = '';
  municipio = '';
  endereco = '';
  bairro = '';
  numero = '';
  pontoReferencia = '';
  cep = '';
  cod_ponto = '';
  origem = '';
  dataAbertura = '';
  dataAutorizacao = '';
  dataFechamento = '';
  prioridade = '';

  observacoes = '';
  title = 'Inserir Ocorrência';
  textoBuscar = '';
  caminho = 'apiOcorrencia.php';
  ApiServiceService;
  imagem;

  totalRecords: String;
  paginaAtual: number = 1;



  constructor(private provider: ApiServiceService, private router: Router, private http: HttpClient) { }


  ngOnInit() {
    this.lista = [];
    this.start = 0;
    this.carregar(this.textoBuscar);
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
    var regra = /^[0-9]+$/;

    if (this.cod_ponto.match(regra)) {
      if (this.solicitante !== '' && this.endereco !== '' && this.municipio !== '') {

        return new Promise(resolve => {
          const dados = {
            requisicao: 'add',
            solicitante: this.solicitante,
            municipio: this.municipio,
            endereco: this.endereco,
            bairro: this.bairro,
            cep: this.cep,
            pontoReferencia: this.pontoReferencia,
            cod_ponto: this.cod_ponto,
            numero: this.numero,
            origem: this.origem,
            dataAbertura: this.dataAbertura,
            dataAutorizacao: this.dataAutorizacao,
            dataFechamento: this.dataFechamento,
            prioridade: this.prioridade,
            observacoes: this.observacoes,
            
          };

          this.provider.Api(dados, this.caminho)
            .subscribe(data => {

              if (data['success']) {
                alert('Salvo com sucesso!!');
                console.log(data);
              } else {
                alert('Erro ao Salvar!!');
              }

            });
        });
      } else {
        alert('Prencha os Campos!');
      }
    } else {
      alert("Campo código do Ponto de energia permitido apenas numeros inteiros");
    }

  }

  dadosEditar(solicitante: string, endereco: string, bairro: string, cep: string, pontoReferencia: string,
    cod_ponto: string, numero: string, origem: string, dataAbertura: string, dataAutorizacao: string, dataFechamento: string,
    prioridade: string, observacoes: string, idOcorrencia: string) {
      this.title = 'Editar Ocorrência';
      this.solicitante = solicitante,
      this.municipio = this.municipio
      this.endereco = endereco,
      this.bairro = bairro,
      this.cep = cep,
      this.pontoReferencia = pontoReferencia,
      this.cod_ponto = cod_ponto,
      this.numero = numero,
      this.origem = origem,
      this.dataAbertura = dataAbertura,
      this.dataAutorizacao = dataAutorizacao,
      this.dataFechamento = dataFechamento,
      this.prioridade = prioridade,
      this.observacoes = observacoes,
      this.idOcorrencia = idOcorrencia;
  }

  editar() {
    var regra = /^[0-9]+$/;
    if (this.cod_ponto.match(regra)) {
      return new Promise(resolve => {
        const dados = {
          requisicao: 'editar',
          solicitante: this.solicitante,
          endereco: this.endereco,
          bairro: this.bairro,
          cep: this.cep,
          pontoReferencia: this.pontoReferencia,
          cod_ponto: this.cod_ponto,
          numero: this.numero,
          origem: this.origem,
          dataAbertura: this.dataAbertura,
          dataAutorizacao: this.dataAutorizacao,
          dataFechamento: this.dataFechamento,
          prioridade: this.prioridade,
          observacoes: this.observacoes,
          idOcorrencia: this.idOcorrencia
        };
        this.provider.Api(dados, this.caminho)
          .subscribe(data => {

            if (data['success']) {
              alert('Editado com sucesso!!');
              console.log(data);


            } else {
              alert('Erro ao Editar!!');
            }

          });
      });

    } else {
      alert("Campo de Consumo permitido apenas numeros inteiros e Campo Potencia apenas numeros inteiros, ponto e virgula."); //se não seguir a primeira regra
    }

  }


  excluir(idu: string) {

    var agree = confirm("Tem certeza que deseja excluir esses dados?");

    if (agree) {
      return new Promise(resolve => {
        const dados = {

          requisicao: 'excluir',
          idPonto: idu
        };
        this.provider.Api(dados, this.caminho)
          .subscribe(data => {

            if (data['success']) {
              alert('Excluido com sucesso!');
              console.log(data);


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