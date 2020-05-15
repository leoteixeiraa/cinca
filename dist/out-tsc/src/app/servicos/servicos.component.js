import { __decorate } from "tslib";
import { Component } from '@angular/core';
let ServicosComponent = class ServicosComponent {
    constructor(provider, router) {
        this.provider = provider;
        this.router = router;
        this.lista = [];
        this.limit = 1000;
        this.start = 0;
        this.idServico = '';
        this.cod_lcin = '';
        this.descricao = '';
        this.custoUnit = '';
        this.marca = '';
        this.observacoes = '';
        this.title = 'Inserir Serviço';
        this.textoBuscar = '';
        this.caminho = 'apiServicos.php';
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
    dadosEditar(cod_lcin, descricao, custoUnit, marca, observacoes, idServico) {
        this.title = 'Editar Servico';
        this.cod_lcin = cod_lcin;
        this.descricao = descricao;
        this.custoUnit = custoUnit;
        this.marca = marca;
        this.observacoes = observacoes;
        this.idServico = idServico;
    }
    editar() {
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
                    //  location='linhas';
                    this.router.navigateByUrl('/servicos');
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
                idServico: idu
            };
            this.provider.Api(dados, this.caminho)
                .subscribe(data => {
                if (data['success']) {
                    alert('Excluido com sucesso!');
                    this.router.navigateByUrl('/servicos');
                }
                else {
                    alert('Erro ao Excluir!!');
                }
            });
        });
    }
};
ServicosComponent = __decorate([
    Component({
        selector: 'app-servicos',
        templateUrl: './servicos.component.html',
        styleUrls: ['./servicos.component.css']
    })
], ServicosComponent);
export { ServicosComponent };
//# sourceMappingURL=servicos.component.js.map