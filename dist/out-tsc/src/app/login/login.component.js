import { __decorate } from "tslib";
import { Component } from '@angular/core';
let LoginComponent = class LoginComponent {
    constructor(provider) {
        this.provider = provider;
        this.usuario = '';
        this.senha = '';
    }
    ngOnInit() {
    }
    login(usuario, senha) {
        return new Promise(resolve => {
            const dados = {
                requisicao: 'listar',
                textoBuscar: usuario
            };
            this.provider.Api(dados, 'apiUsuarios.php').subscribe(data => {
                if (data['success']) {
                    alert('Login Efetuado!');
                    window.location.href = "usuarios";
                }
                else {
                    alert('Dados Incorretos');
                }
                resolve(true);
            });
        });
    }
};
LoginComponent = __decorate([
    Component({
        selector: 'app-login',
        templateUrl: './login.component.html',
        styleUrls: ['./login.component.css']
    })
], LoginComponent);
export { LoginComponent };
//# sourceMappingURL=login.component.js.map