import { __decorate } from "tslib";
import { Component } from '@angular/core';
let PessoaJuridicaComponent = class PessoaJuridicaComponent {
    constructor(provider, router, route) {
        this.provider = provider;
        this.router = router;
        this.route = route;
        this.lista = [];
        this.limit = 1000;
        this.start = 0;
        this.idPJuridica = '';
        this.razaoSocial = '';
        this.cnpj = '';
        this.status = '';
        this.endereco = '';
        this.complemento = '';
        this.cidade = '';
        this.bairro = '';
        this.numero = '';
        this.pontoReferencia = '';
        this.cep = '';
        this.uf = '';
        this.email = '';
        this.telefone = '';
        this.site = '';
        this.observacoes = '';
        this.title = 'Inserir Pessoa Jurídica';
        this.textoBuscar = '';
        this.caminho = 'apiPessoaJuridica.php';
        this.cnpjMask = [/[0-9]/, /[0-9]/, '.', /[0-9]/, /[0-9]/, /[0-9]/, '.', /[0-9]/, /[0-9]/, /[0-9]/, '/', /[0-9]/, /[0-9]/, /[0-9]/, /[0-9]/, '-', /[0-9]/, /[0-9]/];
        this.cepMask = [/\d/, /\d/, '.', /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/];
        this.paginaAtual = 1;
    }
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
        if (this.razaoSocial !== '' && this.cnpj !== '' && this.endereco !== '' && this.cidade !== '' && this.bairro !== '' && this.numero !== '' && this.cep !== '' && this.uf !== '' && this.email !== '' && this.telefone !== '' && this.site !== '') {
            return new Promise(resolve => {
                const dados = {
                    requisicao: 'add',
                    razaoSocial: this.razaoSocial,
                    cnpj: this.cnpj,
                    status: this.status,
                    endereco: this.endereco,
                    complemento: this.complemento,
                    cidade: this.cidade,
                    bairro: this.bairro,
                    numero: this.numero,
                    pontoReferencia: this.pontoReferencia,
                    cep: this.cep,
                    uf: this.uf,
                    email: this.email,
                    telefone: this.telefone,
                    site: this.site,
                    observacoes: this.observacoes,
                };
                this.provider.Api(dados, this.caminho)
                    .subscribe(data => {
                    console.log(dados);
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
    dadosEditar(razaoSocial, cnpj, status, endereco, complemento, cidade, bairro, numero, pontoReferencia, cep, uf, email, telefone, site, observacoes, idPJuridica) {
        this.title = 'Editar Pessoa Juridica';
        this.razaoSocial = razaoSocial;
        this.cnpj = cnpj;
        this.status = status;
        this.endereco = endereco;
        this.complemento = complemento;
        this.cidade = cidade;
        this.bairro = bairro;
        this.numero = numero;
        this.pontoReferencia = pontoReferencia;
        this.cep = cep;
        this.uf = uf;
        this.email = email;
        this.telefone = telefone;
        this.site = site;
        this.observacoes = observacoes;
        this.idPJuridica = idPJuridica;
    }
    editar() {
        return new Promise(resolve => {
            const dados = {
                requisicao: 'editar',
                razaoSocial: this.razaoSocial,
                cnpj: this.cnpj,
                status: this.status,
                endereco: this.endereco,
                complemento: this.complemento,
                cidade: this.cidade,
                bairro: this.bairro,
                numero: this.numero,
                pontoReferencia: this.pontoReferencia,
                cep: this.cep,
                uf: this.uf,
                email: this.email,
                telefone: this.telefone,
                site: this.site,
                observacoes: this.observacoes,
                idPJuridica: this.idPJuridica
            };
            this.provider.Api(dados, this.caminho)
                .subscribe(data => {
                if (data['success']) {
                    alert('Editado com sucesso!!');
                }
                else {
                    alert('Erro ao Editar!!');
                }
            });
        });
    }
    excluir(idu) {
        var agree = confirm("Tem certeza que deseja excluir esses dados?");
        if (agree) {
            return new Promise(resolve => {
                const dados = {
                    requisicao: 'excluir',
                    idPJuridica: idu
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
        else {
            return false;
        }
    }
};
PessoaJuridicaComponent = __decorate([
    Component({
        selector: 'app-pessoa-juridica',
        templateUrl: './pessoa-juridica.component.html',
        styleUrls: ['./pessoa-juridica.component.css']
    })
], PessoaJuridicaComponent);
export { PessoaJuridicaComponent };
//# sourceMappingURL=pessoa-juridica.component.js.map