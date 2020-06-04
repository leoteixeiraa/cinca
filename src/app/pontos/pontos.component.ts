import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiServiceService } from '../services/api-service.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-pontos',
  templateUrl: './pontos.component.html',
  styleUrls: ['./pontos.component.css']
})
export class PontosComponent implements OnInit {

  lista: any = [];
  limit = 1000;
  start = 0;

  idPonto = '';
  potencia = '';
  consumo = '';
  status = '';
  endereco = '';
  complemento = ''; //novo
  latitude = '';
  longitude = '';
  cidade = '';
  bairro = '';
  pontoReferencia = '';
  uf = '';
  cep = '';
  fabricante = '';
  tipoPoste = '';
  dimensoes = '';
  observacoes = '';
  title = 'Inserir Ponto';
  textoBuscar = '';
  caminho = 'apiPontos.php';
  ApiServiceService;
  imagem;

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

    if (this.potencia.match(regra)) {
      if (this.status !== '' && this.potencia !== '' && this.consumo !== '' && this.endereco !== '' && this.cidade !== '') {

        return new Promise(resolve => {
          const dados = {
            requisicao: 'add',
            potencia: this.potencia,
            consumo: this.consumo,
            status: this.status,
            endereco: this.endereco,
            complemento: this.complemento,
            latitude: this.latitude,
            longidute: this.longitude,
            cidade: this.cidade,
            bairro: this.bairro,
            pontoReferencia: this.pontoReferencia,
            uf: this.uf,
            cep: this.cep,
            fabricante: this.fabricante,
            tipoPoste: this.tipoPoste,
            dimensoes: this.dimensoes,
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
      alert("Campo de Consumo permitido apenas numeros inteiros e Campo Consumo apenas numeros inteiros, ponto e virgula.");
    }

  }

  dadosEditar(potencia: string, consumo: string, status: string, endereco: string, complemento: string,
    latitude: string, longitude: string, cidade: string, bairro: string, pontoReferencia: string,
    uf: string, cep: string, fabricante: string, tipoPoste: string,
    dimensoes: string, observacoes: string, idPonto: string) {
    this.title = 'Editar Ponto';
    this.potencia = potencia;
    this.consumo = consumo;
    this.status = status;
    this.endereco = endereco;
    this.complemento = complemento;
    this.latitude = latitude;
    this.longitude = longitude;
    this.cidade = cidade;
    this.bairro = bairro;
    this.pontoReferencia = pontoReferencia;
    this.uf = uf;
    this.cep = cep;
    this.fabricante = fabricante;
    this.tipoPoste = tipoPoste;
    this.dimensoes = dimensoes;
    this.observacoes = observacoes;
    this.idPonto = idPonto;
  }

  editar() {
    var regra = /^[0-9]+$/;
    var regra2 = /^[0-9,.]+$/;
    if (this.potencia.match(regra) && this.consumo.match(regra2)) {
      return new Promise(resolve => {
        const dados = {
          requisicao: 'editar',
          potencia: this.potencia,
          consumo: this.consumo,
          status: this.status,
          endereco: this.endereco,
          complemento: this.complemento,
          latitude: this.latitude,
          longitude: this.longitude,
          cidade: this.cidade,
          bairro: this.bairro,
          pontoReferencia: this.pontoReferencia,
          uf: this.uf,
          cep: this.cep,
          fabricante: this.fabricante,
          tipoPoste: this.tipoPoste,
          dimensoes: this.dimensoes,
          observacoes: this.observacoes,
          idPonto: this.idPonto
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