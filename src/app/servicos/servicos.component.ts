import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiServiceService } from '../services/api-service.service';

@Component({
  selector: 'app-servicos',
  templateUrl: './servicos.component.html',
  styleUrls: ['./servicos.component.css']
})
export class ServicosComponent implements OnInit {


  lista: any = [];
  limit = 1000;
  start = 0;


  idServico = '';
  cod_lcin = '';
  descricao = '';
  custoUnit = '';
  marca = '';
  observacoes = '';
  title = 'Inserir Serviço';
  textoBuscar = '';
  caminho = 'apiServicos.php';
  ApiServiceService;

  totalRecords: String;
  paginaAtual: number = 1;

  constructor(private provider: ApiServiceService, private router: Router) { }

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
    var regra2 = /^[0-9,.]+$/;
    if (this.cod_lcin.match(regra) && this.custoUnit.match(regra2)) {
      if (this.cod_lcin !== '' && this.descricao !== '' && this.custoUnit !== '') {
        return new Promise(resolve => {
          const dados = {
            requisicao: 'add',
            cod_lcin: this.cod_lcin,
            descricao: this.descricao,
            custoUnit: this.custoUnit,
            marca: this.marca,
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

    } else {
      alert("Permitido somente números no COD LCIN! E no campo Custo Unitário apenas numero, ponto e virgula. Verifique.");
    }


  }
  // tslint:disable-next-line: max-line-length
  dadosEditar(cod_lcin: string, descricao: string, custoUnit: string, marca: string, observacoes: string, idServico: string) {
    this.title = 'Editar Servico';
    this.cod_lcin = cod_lcin;
    this.descricao = descricao;
    this.custoUnit = custoUnit;
    this.marca = marca;
    this.observacoes = observacoes;
    this.idServico = idServico;
  }

  editar() {
    var regra = /^[0-9]+$/;
    var regra2 = /^[0-9,.]+$/;
    if (this.cod_lcin.match(regra) && this.custoUnit.match(regra2)) {
      return new Promise(resolve => {
        const dados = {
          requisicao: 'editar',
          cod_lcin: this.cod_lcin,
          descricao: this.descricao,
          custoUnit: this.custoUnit,
          marca: this.marca,
          observacoes: this.observacoes,
          idServico: this.idServico
        };
        this.provider.Api(dados, this.caminho)
          .subscribe(data => {

            if (data['success']) {
              alert('Editado com sucesso!!');
              console.error(data);
              console.log(data);


            } else {
              alert('Erro ao Editar!!');
            }

          });
      });

    } else {
      alert("Permitido somente números no COD LCIN! E no campo Custo Unitário apenas numero, ponto e virgula. Verifique.");
    }
  }
  excluir(idu: string) {

    var agree = confirm("Tem certeza que deseja excluir esses dados?");

    if (agree) {
      return new Promise(resolve => {
        const dados = {

          requisicao: 'excluir',
          idServico: idu
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
