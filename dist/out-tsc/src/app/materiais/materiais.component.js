import { __decorate } from "tslib";
import { Component } from '@angular/core';
let MateriaisComponent = class MateriaisComponent {
    constructor(provider, router) {
        this.provider = provider;
        this.router = router;
        this.lista = [];
        this.limit = 1000;
        this.start = 0;
        this.idMaterial = '';
        this.cod_lcin = '';
        this.unidade = '';
        this.descricao = '';
        this.quantidade = '';
        this.custoUnit = '';
        this.marca = '';
        this.observacoes = '';
        this.title = 'Inserir Material';
        this.textoBuscar = '';
        this.caminho = 'apiMateriais.php';
        this.paginaAtual = 1;
    }
    ngOnInit() {
        this.lista = [];
        this.start = 0;
        this.carregar(this.textoBuscar);
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
        // tslint:disable-next-line: max-line-length
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
    // tslint:disable-next-line: max-line-length
    dadosEditar(cod_lcin, descricao, unidade, quantidade, custoUnit, marca, observacoes, idMaterial) {
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
        if (this.cod_lcin.match(regra)) {
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
                        this.router.navigateByUrl('/materiaisl');
                    }
                    else {
                        alert('Erro ao Editar!!');
                    }
                });
            });
        }
        else {
            alert("Permitido somente número inteiro no COD LCIN!");
        }
    }
    excluir(idu) {
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
                }
                else {
                    alert('Erro ao Excluir!!');
                }
            });
        });
    }
};
MateriaisComponent = __decorate([
    Component({
        selector: 'app-materiais',
        templateUrl: './materiais.component.html',
        styleUrls: ['./materiais.component.css']
    })
], MateriaisComponent);
export { MateriaisComponent };
//# sourceMappingURL=materiais.component.js.map