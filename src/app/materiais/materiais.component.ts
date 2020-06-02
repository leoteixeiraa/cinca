import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiServiceService } from '../services/api-service.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';


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
  imagem;

  marked = false;
  matManutencaoCheck = false;

  totalRecords: String;
  paginaAtual: number = 1;

  imageSrc: string;
  myForm = new FormGroup({
    name: new FormControl('', [Validators.required, Validators.minLength(3)]),
    file: new FormControl('', [Validators.required]),
    fileSource: new FormControl('', [Validators.required])
  });


  constructor(private provider: ApiServiceService, private router: Router, private http: HttpClient) { }


  ngOnInit() {
    this.lista = [];
    this.start = 0;
    this.carregar(this.textoBuscar);



  }

  get f() {
    return this.myForm.controls;
  }

  onFileChange(event) {
    const reader = new FileReader();

    if (event.target.files && event.target.files.length) {
      const [file] = event.target.files;
      reader.readAsDataURL(file);

      reader.onload = () => {

        this.imageSrc = reader.result as string;

        this.myForm.patchValue({
          fileSource: reader.result
        });

      };

    }
  }

  toggleVisibility(e) {
    this.marked = e.target.checked;
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
      if (this.cod_lcin !== '' && this.descricao !== '' &&
        this.unidade !== '' && this.quantidade !== '' && this.custoUnit !== '') {

        return new Promise(resolve => {
          const dados = {
            requisicao: 'add',
            cod_lcin: this.cod_lcin,
            descricao: this.descricao,
            quantidade: this.quantidade,
            unidade: this.unidade,
            custoUnit: this.custoUnit,
            marca: this.marca,
            matManutencaoCheck: this.matManutencaoCheck,
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
      alert("Permitido somente números no COD LCIN! E no campo Custo Unitário apenas numero, ponto e virgula. Verifique.");
    }

  }

  // tslint:disable-next-line: max-line-length
  dadosEditar(cod_lcin: string, descricao: string, unidade: string, quantidade: string, custoUnit: string, marca: string, matManutencaoCheck: boolean, observacoes: string, idMaterial: string) {
    this.title = 'Editar Material';
    this.cod_lcin = cod_lcin;
    this.descricao = descricao;
    this.unidade = unidade;
    this.quantidade = quantidade;
    this.custoUnit = custoUnit;
    this.marca = marca;
    this.matManutencaoCheck = matManutencaoCheck;
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
          matManutencaoCheck: this.matManutencaoCheck,
          observacoes: this.observacoes,
          idMaterial: this.idMaterial
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

    } else {
      alert("Permitido somente números no COD LCIN! E no campo Custo Unitário apenas numero, ponto e virgula. Verifique."); //se não seguir a primeira regra
    }

  }



  excluir(idu: string) {

    var agree = confirm("deseja deletar os dados??");

    if (agree) {
      return new Promise(resolve => {
        const dados = {

          requisicao: 'excluir',
          idMaterial: idu
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
