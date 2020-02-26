import { __decorate } from "tslib";
import { Component } from '@angular/core';
let LinhasComponent = class LinhasComponent {
    constructor(provider, router) {
        this.provider = provider;
        this.router = router;
        this.lista = [];
        this.limit = 10;
        this.start = 0;
        this.operadora = '';
        this.num_conta = '';
        this.cod_acesso = '';
        this.localizacao = '';
        this.id = '';
        this.title = 'Inserir Linha';
        this.textoBuscar = '';
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
            const dados2 = {
                requisicao: 'listar',
                limit: this.limit,
                start: this.start,
                textoBuscar: texto
            };
            this.provider.Api(dados2, 'apiLinhas.php').subscribe(data => {
                for (const dado2 of data['result']) {
                    this.lista.push(dado2);
                }
                resolve(true);
            });
        });
    }
    cadastrar() {
        if (this.operadora !== '' && this.cod_acesso !== '' && this.num_conta !== '' && this.localizacao !== '') {
            return new Promise(resolve => {
                const dados2 = {
                    requisicao: 'add',
                    operadora: this.operadora,
                    cod_acesso: this.cod_acesso,
                    num_conta: this.num_conta,
                    localizacao: this.localizacao
                };
                this.provider.Api(dados2, 'apiLinhas.php')
                    .subscribe(data => {
                    if (data['success']) {
                        alert('Salvo com sucesso!!');
                        window.location.href = "linhas";
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
    dadosEditar(operadora, cod_acesso, num_conta, localizacao, id) {
        this.title = 'Editar Linha';
        this.operadora = operadora;
        this.cod_acesso = cod_acesso;
        this.num_conta = num_conta;
        this.localizacao = localizacao;
        this.id = id;
    }
    editar() {
        return new Promise(resolve => {
            const dados2 = {
                requisicao: 'editar',
                operadora: this.operadora,
                cod_acesso: this.cod_acesso,
                num_conta: this.num_conta,
                localizacao: this.localizacao,
                id: this.id
            };
            this.provider.Api(dados2, 'apiLinhas.php')
                .subscribe(data => {
                if (data['success']) {
                    alert('Editado com sucesso!!');
                    //  location='linhas';
                    // this.router.navigate(['/linhas']);
                    window.location.href = "linhas";
                }
                else {
                    alert('Erro ao Editar!!');
                }
            });
        });
    }
    excluir(idu) {
        return new Promise(resolve => {
            const dados2 = {
                requisicao: 'excluir',
                id: idu
            };
            this.provider.Api(dados2, 'apiLinhas.php')
                .subscribe(data => {
                if (data['success']) {
                    alert('Excluido com sucesso!');
                    window.location.href = "linhas";
                }
                else {
                    alert('Erro ao Excluir!!');
                }
            });
        });
    }
};
LinhasComponent = __decorate([
    Component({
        selector: 'app-linhas',
        templateUrl: './linhas.component.html',
        styleUrls: ['./linhas.component.css']
    })
], LinhasComponent);
export { LinhasComponent };
//# sourceMappingURL=linhas.component.js.map