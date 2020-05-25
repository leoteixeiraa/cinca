import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiServiceService } from '../services/api-service.service';
import { CurrencyPipe } from '@angular/common';


@Component({
  selector: 'app-materiais',
  templateUrl: './materiais.component.html',
  styleUrls: ['./materiais.component.css']
})
export class MateriaisComponent implements OnInit {

  lista: any = [];
  limit = 1000;
  start = 0;

  idMaterial = '';
  cod_lcin = '';
  unidade = '';
  descricao = '';
  quantidade = '';
  custoUnit = '';
  marca = '';
  observacoes = '';
  title = 'Inserir Material';
  textoBuscar = '';
  caminho = 'apiMateriais.php';
  ApiServiceService;

  totalRecords: String;
  paginaAtual: number = 1;




  constructor(private provider: ApiServiceService, private router: Router) { }


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
      if (this.cod_lcin !== '' && this.descricao !== '' && this.unidade !== '' && this.quantidade !== '' && this.custoUnit !== '') {

        return new Promise(resolve => {
          const dados = {
            requisicao: 'add',
            cod_lcin: this.cod_lcin,
            descricao: this.descricao,
            quantidade: this.quantidade,
            unidade: this.unidade,
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
  dadosEditar(cod_lcin: string, descricao: string, unidade: string, quantidade: string, custoUnit: string, marca: string, observacoes: string, idMaterial: string) {
    this.title = 'Editar Material';
    this.cod_lcin = cod_lcin;
    this.descricao = descricao;
    this.unidade = unidade;
    this.quantidade = quantidade;
    this.custoUnit = custoUnit;
    this.marca = marca;
    this.observacoes = observacoes;
    this.idMaterial = idMaterial;
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
          unidade: this.unidade,
          quantidade: this.quantidade,
          custoUnit: this.custoUnit,
          marca: this.marca,
          observacoes: this.observacoes,
          idMaterial: this.idMaterial
        };
        this.provider.Api(dados, this.caminho)
          .subscribe(data => {

            if (data['success']) {
              alert('Editado com sucesso!!');

              this.router.navigateByUrl('/materiais');


            } else {
              alert('Erro ao Editar!!');
            }

          });
      });

    } else {
      alert("Permitido somente números no COD LCIN! E no campo Custo Unitário apenas numero, ponto e virgula. Verifique."); //se não seguir a primeira regra
    }

  }



  excluir(idu: string) {
    return new Promise(resolve => {
      const dados = {

        requisicao: 'excluir',
        idMaterial: idu
      };
      this.provider.Api(dados, this.caminho)
        .subscribe(data => {

          if (data['success']) {
            alert('Excluido com sucesso!');
            this.router.navigateByUrl('/materiais');

          } else {
            alert('Erro ao Excluir!!');
          }

        });
    });
  }

}
