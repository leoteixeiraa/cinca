import { __decorate } from "tslib";
import { Component } from '@angular/core';
let UsuariosComponent = class UsuariosComponent {
    constructor(provider, router) {
        this.provider = provider;
        this.router = router;
        this.lista = [];
        this.limit = 10;
        this.start = 0;
        this.nome = '';
        this.login = '';
        this.senha = '';
        this.idUser = '';
        this.title = 'Inserir Usuário ao sistema';
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
            const dados = {
                requisicao: 'listar',
                limit: this.limit,
                start: this.start,
                textoBuscar: texto
            };
            this.provider.Api(dados, 'apiUsuarios.php').subscribe(data => {
                for (const dado2 of data['result']) {
                    this.lista.push(dado2);
                }
                resolve(true);
            });
        });
    }
    cadastrar() {
        if (this.login !== '' && this.senha !== '') {
            return new Promise(resolve => {
                const dados = {
                    requisicao: 'add',
                    nome: this.nome,
                    login: this.login,
                    senha: this.senha
                };
                this.provider.Api(dados, 'apiUsuarios.php')
                    .subscribe(data => {
                    if (data['success']) {
                        alert('Salvo com sucesso!!');
                        window.location.href = "usuarios";
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
    dadosEditar(nome, login, senha, idUser) {
        this.title = 'Editar Usuário';
        this.nome = nome;
        this.login = login;
        this.senha = senha;
        this.idUser = idUser;
    }
    editar() {
        return new Promise(resolve => {
            const dados = {
                requisicao: 'editar',
                nome: this.nome,
                login: this.login,
                senha: this.senha,
                idUser: this.idUser
            };
            this.provider.Api(dados, 'apiUsuarios.php')
                .subscribe(data => {
                if (data['success']) {
                    alert('Editado com sucesso!!');
                    //  location='usuarios';
                    // this.router.navigate(['/usuarios']);
                    window.location.href = "usuarios";
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
                idUser: idu
            };
            this.provider.Api(dados, 'apiUsuarios.php')
                .subscribe(data => {
                if (data['success']) {
                    alert('Excluido com sucesso!');
                    window.location.href = "usuarios";
                }
                else {
                    alert('Erro ao Excluir!!');
                }
            });
        });
    }
};
UsuariosComponent = __decorate([
    Component({
        selector: 'app-usuarios',
        templateUrl: './usuarios.component.html',
        styleUrls: ['./usuarios.component.css']
    })
], UsuariosComponent);
export { UsuariosComponent };
//# sourceMappingURL=usuarios.component.js.map