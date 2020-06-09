import { __decorate } from "tslib";
import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
let PontosComponent = class PontosComponent {
    constructor(provider, router, http) {
        this.provider = provider;
        this.router = router;
        this.http = http;
        this.lista = [];
        this.limit = 1000;
        this.start = 0;
        this.idPonto = '';
        this.potencia = '';
        this.consumo = '';
        this.status = '';
        this.endereco = '';
        this.complemento = ''; //novo
        this.latitude = '';
        this.longitude = '';
        this.cidade = '';
        this.bairro = '';
        this.pontoReferencia = '';
        this.uf = '';
        this.cep = '';
        this.fabricante = '';
        this.tipoPoste = '';
        this.dimensoes = '';
        this.observacoes = '';
        this.title = 'Inserir Ponto';
        this.textoBuscar = '';
        this.caminho = 'apiPontos.php';
        this.paginaAtual = 1;
        this.myForm = new FormGroup({
            name: new FormControl('', [Validators.required, Validators.minLength(3)]),
            file: new FormControl('', [Validators.required]),
            fileSource: new FormControl('', [Validators.required])
        });
    }
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
                this.imageSrc = reader.result;
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
    carregar(texto) {
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
                        }
                        else {
                            alert('Erro ao Salvar!!');
                        }
                    });
                });
            }
            else {
                alert('Prencha os Campos!');
            }
        }
        else {
            alert("Campo de Consumo permitido apenas numeros inteiros e Campo Consumo apenas numeros inteiros, ponto e virgula.");
        }
    }
    dadosEditar(potencia, consumo, status, endereco, complemento, latitude, longitude, cidade, bairro, pontoReferencia, uf, cep, fabricante, tipoPoste, dimensoes, observacoes, idPonto) {
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
                    }
                    else {
                        alert('Erro ao Editar!!');
                    }
                });
            });
        }
        else {
            alert("Campo de Consumo permitido apenas numeros inteiros e Campo Potencia apenas numeros inteiros, ponto e virgula."); //se não seguir a primeira regra
        }
    }
    excluir(idu) {
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
                    }
                    else {
                        alert('Erro ao Excluir!!');
                    }
                });
            });
        }
        else {
            return false;
        }
    }
};
PontosComponent = __decorate([
    Component({
        selector: 'app-pontos',
        templateUrl: './pontos.component.html',
        styleUrls: ['./pontos.component.css']
    })
], PontosComponent);
export { PontosComponent };
//# sourceMappingURL=pontos.component.js.map