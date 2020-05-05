import { __decorate } from "tslib";
import { Component } from '@angular/core';
let MateriaisComponent = class MateriaisComponent {
    constructor(provider, router) {
        this.provider = provider;
        this.router = router;
        this.lista = [];
        this.limit = 10;
        this.start = 0;
        this.idMaterial = '';
        this.descricao = '';
        this.quantidade = '';
        this.custoUnit = '';
        this.custovendaUnit = '';
        this.marca = '';
        this.observacoes = '';
        this.title = 'Inserir Material';
        this.textoBuscar = '';
        this.caminho = 'apiMateriais.php';
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
        if (this.descricao !== '' && this.quantidade !== '' && this.custoUnit !== '' && this.custovendaUnit !== '' && this.marca !== '') {
            return new Promise(resolve => {
                const dados = {
                    requisicao: 'add',
                    descricao: this.descricao,
                    quantidade: this.quantidade,
                    custoUnit: this.custoUnit,
                    custovendaUnit: this.custovendaUnit,
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
    dadosEditar(descricao, quantidade, custoUnit, custovendaUnit, marca, observacoes, idMaterial) {
        this.title = 'Editar Material';
        this.descricao = descricao;
        this.quantidade = quantidade;
        this.custoUnit = custoUnit;
        this.custovendaUnit = custovendaUnit;
        this.marca = marca;
        this.observacoes = observacoes;
        this.idMaterial = idMaterial;
    }
    editar() {
        return new Promise(resolve => {
            const dados = {
                requisicao: 'editar',
                descricao: this.descricao,
                quantidade: this.quantidade,
                custoUnit: this.custoUnit,
                custovendaUnit: this.custovendaUnit,
                marca: this.marca,
                observacoes: this.observacoes,
                idMaterial: this.idMaterial
            };
            this.provider.Api(dados, this.caminho)
                .subscribe(data => {
                if (data['success']) {
                    alert('Editado com sucesso!!');
                    //  location='linhas';
                    this.router.navigateByUrl('/materiais');
                }
                else {
                    alert('Erro ao Editar!!');
                }
            });
        });
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