import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiServiceService } from '../services/api-service.service';


@Component({
  selector: 'app-mandato',
  templateUrl: './mandato.component.html',
  styleUrls: ['./mandato.component.css']
})
export class MandatoComponent implements OnInit {

  lista: any = [];
  limit = 10;
  start = 0;
  idMandato = '';

  descricao = '';
  dataInicio = '';
  dataFinal = '';
  localizacao = '';
  title = 'Inserir Mandato';
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
      this.provider.Api(dados, 'apiMandato.php').subscribe(data => {
        for (const dado2 of data['result']) {
          this.lista.push(dado2);
        }
        resolve(true);
      });
    });
  }

  cadastrar() {
    if (this.descricao !== '' && this.dataInicio !== '' && this.dataFinal !== '') {
      return new Promise(resolve => {
        const dados = {
          requisicao: 'add',
          descricao: this.descricao,
          dataInicio: this.dataInicio,
          dataFinal: this.dataFinal
        };
        this.provider.Api(dados, 'apiMandato.php')
          .subscribe(data => {

            if (data['success']) {
              alert('Salvo com sucesso!!');
              window.location.href = "mandato";
            } else {
              alert('Erro ao Salvar!!');
            }

          });
      });
    } else {
      alert('Prencha os Campos!');
    }
  }

  dadosEditar(descricao: string, dataInicio: string, dataFinal: string, idMandato: string) {
    this.title = 'Editar Mandato';
    this.descricao = descricao;
    this.dataInicio = dataInicio;
    this.dataFinal = dataFinal;
    this.idMandato = idMandato;



  }

  editar() {
    if (this.descricao !== '' && this.dataInicio !== '' && this.dataFinal !== '') {
      return new Promise(resolve => {
        const dados = {
          requisicao: 'editar',
          idMandato: this.idMandato,
          descricao: this.descricao,
          dataInicio: this.dataInicio,
          dataFinal: this.dataFinal


        };
        this.provider.Api(dados, 'apiMandato.php')
          .subscribe(data => {

            if (data['success']) {
              alert('Editado com sucesso!!');
              this.router.navigate(['/mandato']);

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
        idMandato: idu
      };
      this.provider.Api(dados, 'apiMandato.php')
        .subscribe(data => {

          if (data['success']) {
            alert('Excluido com sucesso!');

            window.location.href = "mandato";
          } else {
            alert('Erro ao Excluir!!');
          }

        });
    });
  }

}
