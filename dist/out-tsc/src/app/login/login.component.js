import { __decorate } from "tslib";
import { Component } from '@angular/core';
let LoginComponent = class LoginComponent {
    constructor(provider, router) {
        this.provider = provider;
        this.router = router;
        this.cpf = '';
        this.senha = '';
        this.cpfMask = [/[0-9]/, /[0-9]/, /[0-9]/, '.', /[0-9]/, /[0-9]/, /[0-9]/, '.', /[0-9]/, /[0-9]/, /[0-9]/, '-', /[0-9]/, /[0-9]/];
    }
    ngOnInit() {
    }
    login(usu, sen) {
        return new Promise(resolve => {
            const dados = {
                requisicao: 'login',
                cpf: usu,
                senha: sen
            };
            this.provider.Api(dados, 'apiPessoaFisica.php').subscribe(data => {
                if (data['success']) {
                    this.router.navigate(['/pessoa-fisica']);
                }
                else {
                    alert('Dados icorretos!!');
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