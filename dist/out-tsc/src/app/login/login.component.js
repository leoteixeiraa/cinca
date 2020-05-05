import { __decorate } from "tslib";
import { Component } from '@angular/core';
let LoginComponent = class LoginComponent {
    constructor(provider, router) {
        this.provider = provider;
        this.router = router;
        this.usuario = '';
        this.senha = '';
        this.caminho = 'apiUsuarios.php';
        this.cpfMask = [/\d/, /\d/, /\d/, '.', /\d/, /\d/, /\d/, '.', /\d/, /\d/, /\d/, '-', /\d/, /\d/];
    }
    ngOnInit() {
    }
    login(usuario, senha) {
        return new Promise(resolve => {
            const dados = {
                requisicao: 'login',
                usuario: this.usuario,
                senha: this.senha
            };
            this.provider.Api(dados, this.caminho)
                .subscribe(data => {
                if (data['success']) {
                    this.router.navigate(['/pessoa-fisica']);
                }
                else {
                    alert('Dados Incorretos!!');
                }
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