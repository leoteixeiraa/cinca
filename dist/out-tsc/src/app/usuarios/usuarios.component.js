import { __decorate } from "tslib";
import { Component } from '@angular/core';
let UsuariosComponent = class UsuariosComponent {
    constructor(provider, router) {
        this.provider = provider;
        this.router = router;
        this.lista = [];
        this.limit = 1000;
        this.start = 0;
        this.nome = '';
        this.usuario = '';
        this.senha = '';
        this.id = '';
        this.title = 'Inserir Usuário';
        this.textBuscar = '';
        this.caminho = 'apiUsuarios.php';
        this.cpfMask = [/\d/, /\d/, /\d/, '.', /\d/, /\d/, /\d/, '.', /\d/, /\d/, /\d/, '-', /\d/, /\d/];
        this.paginaAtual = 1;
    }
    ngOnInit() {
        this.lista = [];
        this.start = 0;
        this.carregar(this.textBuscar);
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
        if (this.nome !== '' && this.usuario !== '' && this.senha !== '') {
            return new Promise(resolve => {
                const dados = {
                    requisicao: 'add',
                    nome: this.nome,
                    usuario: this.usuario,
                    senha: this.senha
                };
                this.provider.Api(dados, this.caminho)
                    .subscribe(data => {
                    if (data['success']) {
                        alert('Salvo com sucesso!!');
                        window.location.reload();
                        //this.router.navigate(['/usuarios']);
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
    dadosEditar(nome, usuario, senha, id) {
        this.title = 'Editar Usuário';
        this.nome = nome;
        this.usuario = usuario;
        this.senha = senha;
        this.id = id;
    }
    editar() {
        if (this.nome !== '' && this.usuario !== '' && this.senha !== '') {
            return new Promise(resolve => {
                const dados = {
                    requisicao: 'editar',
                    nome: this.nome,
                    usuario: this.usuario,
                    senha: this.senha,
                    id: this.id
                };
                this.provider.Api(dados, this.caminho)
                    .subscribe(data => {
                    if (data['success']) {
                        alert('Editado com sucesso!!');
                        window.location.reload();
                    }
                    else {
                        alert('Erro ao Editar!!');
                    }
                });
            });
        }
        else {
            alert('Prencha os Campos!');
        }
    }
    excluir(idu) {
        return new Promise(resolve => {
            const dados = {
                requisicao: 'excluir',
                id: idu
            };
            this.provider.Api(dados, this.caminho)
                .subscribe(data => {
                if (data['success']) {
                    window.location.reload();
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